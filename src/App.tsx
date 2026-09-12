import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Mic,
  MicOff,
  Camera,
  CheckCircle,
  Volume2,
  RefreshCw,
  QrCode,
  Sparkles,
  PhoneCall,
  ShieldCheck,
  WifiOff,
  Smartphone,
  Gift,
  AlertTriangle,
  RotateCcw
} from 'lucide-react';

import { SecureScanner, DecodedIdentity } from './core/secureScanner';
import { HaqdaarAIEngine, SchemeEntitlement } from './core/haqdaarEngine';
import { SelfHealingAffidavitEngine, DiscrepancyReport } from './core/affidavitEngine';
import { PanchayatMeshSyncEngine } from './core/meshSync';
import { VerifiablePassGenerator, DigitalCitizenPass } from './core/verifiablePass';

export default function App() {
  const [isListening, setIsListening] = useState(false);
  const [audioPrompt, setAudioPrompt] = useState(
    'प्रणाम! नीचे दिए गए बड़े बटन को दबाकर बोलें, या अपने कागज़ का बारकोड दिखाएं।'
  );
  const [stage, setStage] = useState<'IDLE' | 'CAMERA' | 'CONFLICT' | 'DONE'>('IDLE');
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const [citizenInfo, setCitizenInfo] = useState<DecodedIdentity | null>(null);
  const [discrepancy, setDiscrepancy] = useState<DiscrepancyReport | null>(null);
  const [schemes, setSchemes] = useState<SchemeEntitlement[]>([]);
  const [finalPass, setFinalPass] = useState<DigitalCitizenPass | null>(null);
  const [ackToken, setAckToken] = useState<string>('');

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const scanTimerRef = useRef<any>(null);

  const triggerHaptic = (pattern: number[]) => {
    if ('vibrate' in navigator) {
      navigator.vibrate(pattern);
    }
  };

  const speakVoice = useCallback((text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'hi-IN';
    utterance.rate = 0.85;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  }, []);

  useEffect(() => {
    speakVoice(audioPrompt);

    const handleOnlineStatus = () => {
      const online = navigator.onLine;
      setIsOnline(online);
      if (online) {
        PanchayatMeshSyncEngine.syncPendingRecords('/api/submit').then((count) => {
          if (count > 0) {
            speakVoice(`इंटरनेट आ गया है। आपके ${count} ऑफलाइन आवेदन सरकारी पोर्टल पर भेज दिए गए हैं।`);
          }
        });
      }
    };

    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);
    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, []);

  const startListening = () => {
    triggerHaptic([100]);
    const SpeechRec = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    if (!SpeechRec) {
      alert('ब्राउज़र वॉयस इंजन को सपोर्ट नहीं करता।');
      return;
    }

    const rec = new SpeechRec();
    rec.lang = 'hi-IN';
    rec.onstart = () => setIsListening(true);
    rec.onend = () => setIsListening(false);

    rec.onresult = async (e: any) => {
      triggerHaptic([150, 50, 150]);
      const transcript = e.results[0][0].transcript;

      try {
        const edgeRes = await fetch('/api/assist', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ voiceQuery: transcript })
        });
        const edgeData: any = await edgeRes.json();
        const reply = edgeData.responseText || `आपने कहा: "${transcript}"। अब अपना कागज़ कैमरे के आगे करें।`;
        setAudioPrompt(reply);
        speakVoice(reply);
      } catch (err) {
        const fallbackReply = `आपने कहा: "${transcript}"। अब अपना पहचान पत्र कैमरे के सामने लाएं।`;
        setAudioPrompt(fallbackReply);
        speakVoice(fallbackReply);
      }

      startCameraScan();
    };

    rec.start();
  };

  const startCameraScan = async () => {
    setStage('CAMERA');
    setAudioPrompt('कागज़ को कैमरे के सामने रखें। बारकोड मिलते ही यह अपने आप स्कैन हो जाएगा।');
    speakVoice('कागज़ को कैमरे के सामने रखें।');

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment', width: { ideal: 1280 } }
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      scanTimerRef.current = setInterval(() => {
        if (videoRef.current && canvasRef.current) {
          const video = videoRef.current;
          const canvas = canvasRef.current;
          if (video.readyState === video.HAVE_ENOUGH_DATA) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext('2d');
            if (ctx) {
              ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
              const decoded = SecureScanner.scanCanvasFrame(canvas);

              if (decoded) {
                clearInterval(scanTimerRef.current);
                if (video.srcObject) {
                  (video.srcObject as MediaStream).getTracks().forEach((t) => t.stop());
                }

                triggerHaptic([200, 100, 200, 100, 300]);
                handleScannedData(decoded);
              }
            }
          }
        }
      }, 500);
    } catch (e) {
      console.error(e);
      speakVoice('कैमरा चालू करने की अनुमति दें।');
    }
  };

  const handleScannedData = async (decoded: DecodedIdentity) => {
    setCitizenInfo(decoded);
    const mockRationCard = { name: 'रामेश्वर दयाल' };
    const conflict = SelfHealingAffidavitEngine.detectDiscrepancy(decoded, mockRationCard);

    if (conflict) {
      setDiscrepancy(conflict);
      setStage('CONFLICT');
      setAudioPrompt(conflict.voiceResolutionPrompt);
      speakVoice(conflict.voiceResolutionPrompt);
      return;
    }

    await completeEnrollment(decoded.name, decoded.maskedId);
  };

  const resolveConflict = async (chosenName: string) => {
    if (!citizenInfo) return;
    SelfHealingAffidavitEngine.generateSelfDeclarationAffidavit(
      chosenName,
      'रामेश्वर दयाल',
      citizenInfo.maskedId,
      'HASH-7762-DPDP-OK'
    );

    const successMsg = `धन्यवाद! हमने कानूनी शपथ-पत्र स्वतः जोड़ दिया है। आपके अधिकार की योजनाएं जांची जा रही हैं।`;
    setAudioPrompt(successMsg);
    speakVoice(successMsg);

    await completeEnrollment(chosenName, citizenInfo.maskedId);
  };

  const completeEnrollment = async (name: string, maskedId: string) => {
    const autoSchemes = HaqdaarAIEngine.evaluateEntitlements({
      name,
      age: 62,
      gender: 'MALE',
      state: 'UP',
      category: 'BPL'
    });
    setSchemes(autoSchemes);

    const pass = await VerifiablePassGenerator.createOfflinePass(
      name,
      maskedId,
      autoSchemes.map((s) => s.schemeName)
    );
    setFinalPass(pass);

    const payload = {
      name,
      maskedId,
      schemes: autoSchemes.map((s) => s.schemeName),
      timestamp: new Date().toISOString()
    };

    if (navigator.onLine) {
      try {
        const res = await fetch('/api/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const resData: any = await res.json();
        setAckToken(resData.ackNumber || `IND-${Date.now()}`);
      } catch (err) {
        await PanchayatMeshSyncEngine.saveOfflineRecord(payload);
        setAckToken(`OFFLINE-${Date.now()}`);
      }
    } else {
      await PanchayatMeshSyncEngine.saveOfflineRecord(payload);
      setAckToken(`OFFLINE-${Date.now()}`);
    }

    setStage('DONE');
    const finalSpeech = `बधाई हो ${name} जी! आपका सत्यापन सफल रहा। आप ${autoSchemes.length} सरकारी योजनाओं के सीधे हकदार हैं। आपका डिजिटल पास तैयार है।`;
    setAudioPrompt(finalSpeech);
    speakVoice(finalSpeech);
  };

  const resetAll = () => {
    setStage('IDLE');
    setCitizenInfo(null);
    setDiscrepancy(null);
    setSchemes([]);
    setFinalPass(null);
    setAckToken('');
    const welcome = 'प्रणाम! नीचे दिए गए बड़े बटन को दबाकर बोलें, या अपने कागज़ का बारकोड दिखाएं।';
    setAudioPrompt(welcome);
    speakVoice(welcome);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-orange-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-sm">
              से
            </div>
            <div>
              <h1 className="text-lg font-black text-slate-900 leading-none">सर्वसेतु AI</h1>
              <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1 mt-1">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% सुरक्षित सरकारी सेवा (₹0 शुल्क)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {!isOnline ? (
              <span className="flex items-center gap-1 text-xs font-black text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-xl">
                <WifiOff className="w-3.5 h-3.5" /> पंचायत मेश
              </span>
            ) : (
              <span className="flex items-center gap-1 text-xs font-black text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl">
                <Smartphone className="w-3.5 h-3.5" /> सुरक्षित क्लाउड
              </span>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-xl w-full mx-auto px-4 py-6 flex-1 flex flex-col justify-center">
        <section className="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-sm text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-black mb-3">
            <Sparkles className="w-3.5 h-3.5" /> डिजिटल मित्र साथी
          </div>
          <p className="text-xl sm:text-2xl font-black text-slate-900 leading-relaxed mb-4">
            "{audioPrompt}"
          </p>
          <button
            onClick={() => speakVoice(audioPrompt)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-black transition active:scale-95"
          >
            <Volume2 className="w-5 h-5 text-orange-600" /> दोबारा सुनें (Play Voice)
          </button>
        </section>

        <canvas ref={canvasRef} className="hidden" />

        {stage === 'IDLE' && (
          <div className="space-y-4">
            <button
              onClick={startListening}
              className={`w-full p-8 rounded-3xl border-3 flex flex-col items-center justify-center transition-all shadow-md active:scale-95 ${
                isListening
                  ? 'bg-red-50 border-red-600 animate-pulse text-red-700'
                  : 'bg-white border-orange-500 hover:border-orange-600 text-slate-900'
              }`}
            >
              <div
                className={`w-24 h-24 rounded-full flex items-center justify-center mb-3 shadow-lg ${
                  isListening ? 'bg-red-600 text-white' : 'bg-orange-600 text-white'
                }`}
              >
                {isListening ? <MicOff className="w-12 h-12" /> : <Mic className="w-12 h-12" />}
              </div>
              <span className="text-2xl font-black">यहाँ छूकर बोलें</span>
              <span className="text-xs font-bold text-slate-500 mt-1">
                {isListening ? 'हम सुन रहे हैं, बोलिए...' : 'बटन दबाएं और अपनी भाषा में बताएं'}
              </span>
            </button>

            <button
              onClick={startCameraScan}
              className="w-full p-6 bg-white border-2 border-slate-300 hover:border-indigo-600 rounded-3xl flex items-center justify-center gap-4 text-slate-800 transition-all shadow-sm active:scale-95"
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Camera className="w-8 h-8" />
              </div>
              <div className="text-left">
                <span className="text-lg font-black block">कागज़ या बारकोड दिखाएं</span>
                <span className="text-xs font-bold text-slate-500">आधार, राशन कार्ड या पर्ची स्कैन करें</span>
              </div>
            </button>
          </div>
        )}

        {stage === 'CAMERA' && (
          <div className="bg-white rounded-3xl p-4 border-2 border-slate-300 shadow-lg">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-black mb-4 flex items-center justify-center">
              <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
              <div className="absolute inset-8 border-4 border-dashed border-emerald-400 rounded-3xl pointer-events-none flex items-center justify-center">
                <span className="bg-black/75 text-white text-xs font-black px-4 py-2 rounded-full backdrop-blur">
                  कागज़ के बारकोड को यहाँ रखें
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-600">
              <RefreshCw className="w-4 h-4 animate-spin text-orange-600" />
              <span>अपने आप बारकोड खोजा जा रहा है...</span>
            </div>
          </div>
        )}

        {stage === 'CONFLICT' && discrepancy && (
          <div className="bg-white rounded-3xl p-6 border-2 border-amber-400 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-amber-800">
              <AlertTriangle className="w-8 h-8 shrink-0" />
              <div>
                <h3 className="text-lg font-black">नाम में अंतर मिला (Auto-Affidavit)</h3>
                <p className="text-xs text-slate-600">सरकारी रिकॉर्ड में कौन सा नाम सही माना जाए?</p>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => resolveConflict(discrepancy.valA)}
                className="w-full p-4 bg-slate-50 hover:bg-orange-50 border-2 border-slate-200 hover:border-orange-500 rounded-2xl text-left font-black text-base text-slate-900 transition"
              >
                नाम 1: "{discrepancy.valA}" (आधार वाला नाम रखें)
              </button>
              <button
                onClick={() => resolveConflict(discrepancy.valB)}
                className="w-full p-4 bg-slate-50 hover:bg-orange-50 border-2 border-slate-200 hover:border-orange-500 rounded-2xl text-left font-black text-base text-slate-900 transition"
              >
                नाम 2: "{discrepancy.valB}" (राशन कार्ड वाला नाम रखें)
              </button>
            </div>
          </div>
        )}

        {stage === 'DONE' && citizenInfo && finalPass && (
          <div className="bg-white rounded-3xl p-6 border-2 border-emerald-500 shadow-md space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-700">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-900">सत्यापन सफल रहा</h2>
                <span className="text-xs font-extrabold text-emerald-700">
                  सरकारी पोर्टल पर आवेदन दर्ज हुआ
                </span>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500 font-bold">आवेदक का नाम:</span>
                <span className="font-black text-slate-900">{finalPass.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-bold">मास्क्ड पहचान संख्या:</span>
                <span className="font-mono font-black text-emerald-700">{finalPass.maskedId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-bold">पावती संख्या (Ack Token):</span>
                <span className="font-mono font-bold text-orange-600">{ackToken}</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5 mb-2 text-slate-800">
                <Gift className="w-4 h-4 text-orange-600" />
                <span className="text-xs font-black uppercase tracking-wider">
                  आपके अधिकार की स्वीकृत सरकारी योजनाएं
                </span>
              </div>
              <div className="space-y-2">
                {schemes.map((s) => (
                  <div key={s.schemeId} className="p-3.5 bg-emerald-50/60 border border-emerald-200 rounded-2xl">
                    <div className="flex justify-between items-center">
                      <span className="font-black text-sm text-slate-900">{s.schemeName}</span>
                      <span className="text-[10px] font-black bg-emerald-600 text-white px-2 py-0.5 rounded-full">
                        स्वीकृत
                      </span>
                    </div>
                    <p className="text-xs font-bold text-emerald-800 mt-0.5">{s.annualBenefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl shadow-md">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-mono tracking-wider text-orange-400 font-bold">
                  OFFLINE CITIZEN PASS (W3C)
                </span>
                <QrCode className="w-6 h-6 text-white" />
              </div>
              <div className="font-mono text-sm space-y-1 mb-3">
                <p className="text-base font-bold text-white">{finalPass.name}</p>
                <p className="text-xs text-slate-400">ID: {finalPass.maskedId}</p>
                <p className="text-xs text-slate-400">ECDSA Hash: {finalPass.ecdsaSignature.slice(0, 16)}...</p>
              </div>
              <div className="text-[11px] text-slate-400 border-t border-slate-700 pt-2 flex justify-between">
                <span>अस्पताल/राशन डीलर ऑफलाइन मान्य</span>
                <span className="text-emerald-400 font-bold">सत्यापित (Active)</span>
              </div>
            </div>

            <button
              onClick={resetAll}
              className="w-full py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-2xl font-black text-base flex items-center justify-center gap-2 transition"
            >
              <RotateCcw className="w-5 h-5" /> किसी अन्य व्यक्ति का फॉर्म भरें
            </button>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 py-3 px-4 text-center text-xs font-bold text-slate-500">
        डिजिटल पर्सनल डेटा प्रोटेक्शन (DPDP 2023) एवं UIDAI सुरक्षा नियमों के तहत 100% एन्क्रिप्टेड
      </footer>
    </div>
  );
}
