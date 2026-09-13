// सर्वसेतु AI - बुलेटप्रूफ वॉइस इंजन (Chromium / Safari Mobile Fix)
export class VoiceEngine {
  private static activeUtterance: SpeechSynthesisUtterance | null = null;
  private static isSpeakingNow: boolean = false;

  // 1. क्रोम ऑडियो क्यू को अनब्लॉक करना (Resume Audio Context)
  public static resumeEngine(): void {
    if (!('speechSynthesis' in window)) return;
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
  }

  // 2. सुरक्षित व स्पष्ट हिंदी आवाज़ बोलना
  public static speak(
    text: string, 
    onStartCallback?: () => void, 
    onEndCallback?: () => void
  ): void {
    if (!('speechSynthesis' in window)) {
      console.warn('SpeechSynthesis is not supported on this browser.');
      return;
    }

    // चरण 1: क्रोम को अनफ्रीज करें
    this.resumeEngine();

    // चरण 2: पुरानी लटकी हुई आवाज़ को पूरी तरह रद्द करें
    window.speechSynthesis.cancel();
    this.isSpeakingNow = false;

    // चरण 3: 65 मिलीसेकंड का सेफ़्टी टाइमआउट (यह Android Chrome की रेस-कंडीशन को रोकता है)
    setTimeout(() => {
      try {
        const cleanText = text.trim();
        if (!cleanText) return;

        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = 'hi-IN';
        utterance.rate = 0.90; // सहज भारतीय बोलने की गति
        utterance.pitch = 1.0;

        // हिंदी आवाज़ का चयन (यदि उपलब्ध हो)
        const voices = window.speechSynthesis.getVoices();
        const hindiVoice = voices.find(v => v.lang === 'hi-IN' || v.lang.includes('hi'));
        if (hindiVoice) {
          utterance.voice = hindiVoice;
        }

        // गारबेज कलेक्शन से बचाने हेतु ग्लोबल संदर्भ
        this.activeUtterance = utterance;
        (window as any)._sarvasetuSpeechRef = utterance;

        utterance.onstart = () => {
          this.isSpeakingNow = true;
          if (onStartCallback) onStartCallback();
        };

        utterance.onend = () => {
          this.isSpeakingNow = false;
          this.activeUtterance = null;
          (window as any)._sarvasetuSpeechRef = null;
          if (onEndCallback) onEndCallback();
        };

        utterance.onerror = (e) => {
          console.warn('TTS error (safe ignore):', e);
          this.isSpeakingNow = false;
          this.activeUtterance = null;
          if (onEndCallback) onEndCallback();
        };

        window.speechSynthesis.speak(utterance);
      } catch (err) {
        console.error('TTS execution error:', err);
        this.isSpeakingNow = false;
        if (onEndCallback) onEndCallback();
      }
    }, 65);
  }

  // 3. आवाज़ को बीच में ही रोकना
  public static stop(): void {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    this.isSpeakingNow = false;
    this.activeUtterance = null;
    (window as any)._sarvasetuSpeechRef = null;
  }

  public static isSpeaking(): boolean {
    return this.isSpeakingNow || (typeof window !== 'undefined' && window.speechSynthesis?.speaking);
  }
}
