import os
import time
import subprocess

WATCH_DIRS = ["src", "public"]
WATCH_FILES = ["index.html", "vite.config.ts", "package.json"]

def get_snapshot():
    snapshot = {}
    for f in WATCH_FILES:
        if os.path.exists(f):
            snapshot[f] = os.path.getmtime(f)
    for d in WATCH_DIRS:
        if os.path.exists(d):
            for root, _, files in os.walk(d):
                for f in files:
                    p = os.path.join(root, f)
                    try:
                        snapshot[p] = os.path.getmtime(p)
                    except OSError:
                        pass
    return snapshot

print("👀 ऑटो-सिंक वॉचर सक्रिय है! आप किसी भी फ़ाइल में बदलाव करेंगे, यह खुद GitHub व Cloudflare पर भेज देगा...")
last_snapshot = get_snapshot()

while True:
    time.sleep(3)
    current_snapshot = get_snapshot()
    if current_snapshot != last_snapshot:
        print("\n Detected changes! Testing build...")
        build = subprocess.run(["npx", "vite", "build"], capture_output=True, text=True)
        if build.returncode == 0:
            print(" Build passed. Pushing to GitHub & Cloudflare...")
            subprocess.run(["git", "add", "-A"])
            commit_msg = f"auto-sync: update {time.strftime('%Y-%m-%d %H:%M:%S')}"
            subprocess.run(["git", "commit", "-m", commit_msg])
            res = subprocess.run(["git", "push", "origin", "main"], capture_output=True, text=True)
            if res.returncode == 0:
                print(f"✅ Successfully deployed to GitHub & Cloudflare at {time.strftime('%H:%M:%S')}!")
            else:
                print("❌ Push failed:", res.stderr)
        else:
            print("⚠️ Build failed, skipping push until errors are fixed:", build.stderr[:200])
        last_snapshot = current_snapshot
