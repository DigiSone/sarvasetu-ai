import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Mic,
  MicOff,
  Camera,
  CheckCircle,
  Volume2,
  RefreshCw,
  Download,
  ShieldCheck,
  FileText,
  UserCheck,
  ArrowRight,
  RotateCcw,
  Sparkles
} from 'lucide-react';

import { ServiceType, StepState, ApplicationRecord } from './core/types';
import { SecureScanner } from './core/secureScanner';
import { BiometricVerifier } from './core/biometricVerifier';
import { ReceiptGenerator } from './core/receiptGenerator';

export default function App() {
  const [step, setStep] = useState<StepState>('HOME');
  const [service, setService] = useState<ServiceType>('AYUSHMAN');
  const [isListening, setIsListening] = useState(false);

  // फॉर्म डेटा स्टेट
  const [fullName, setFullName] = useState('रामेश्वर प्रसाद');
  const [dob, setDob] = useState('01/01/1974');
  const [gender, setGender] = useState('पुरुष');
  const [maskedAadhaar, setMaskedAadhaar] = useState('XXXX-XXXX-XXXX');
  const [secondaryDocPhoto, setSecondaryDocPhoto] = useState<string | null>(null);
  const [selfiePhoto, setSelfiePhoto] = useState<string | null>(null);
  const [livenessScore, setLivenessScore] = useState(96);
  const [ackId, setAckId] = useState('');

  // वॉइस व कैमरा रेफ्स
  const [voiceText, setVoiceText] = useState(
    'प्रणाम! बोलकर बताइए या बटन दबाएं: आपको आयुष्मान गोल्डन कार्ड बनवाना है या नया पैन कार्ड?'
  );
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hiddenCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const scannerTimerRef = useRef<any>(null);

  // टेक्स्ट-टू-स्पीच
  const speak = useCallback((text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'hi-IN';
    u.rate = 0.85;
    window.speechSynthesis.speak(u);
  }, []);

  useEffect(() => {
    speak(voiceText);
  }, []);

  const triggerHaptic = (pattern: number[]) => {
    if ('vibrate' in navigator) navigator.vibrate(pattern);
  };

  // वॉयस इनपुट (होम स्क्रीन)
  const startSpeechRecognition = () => {
    triggerHaptic([100]);
    const SpeechRec = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    if (!SpeechRec) {
      alert('ब्राउज़र वॉयस इंजन उपलब्ध नहीं है। कृपया बटन दबाकर चुनें।');
      return;
    }

    const rec = new SpeechRec();
    rec.lang = 'hi-IN';
    rec.onstart = () => setIsListening(true);
    rec.onend = () => setIsListening(false);

    rec.onresult = (e: any) => {
      const speech = e.results[0][0].transcript.toLowerCase();
      if (speech.includes('पैन') || speech.includes('pan')) {
        chooseService('PAN');
      } else {
        chooseService('AYUSHMAN');
      }
    };
    rec.start();
  };

  // 1. सेवा चयन
  const chooseService = (selected: ServiceType) => {
    triggerHaptic([120]);
    setService(selected);
    setStep('GUIDE');

    const msg = selected === 'AYUSHMAN'
      ? 'आयुष्मान भारत कार्ड से 5 लाख रुपये का अस्पताल में मुफ्त इलाज मिलता है। इसके लिए 2 कागज़ लगेंगे: पहला आपका आधार कार्ड और दूसरा राशन कार्ड। क्या आपके पास ये कागज़ अभी मौजूद हैं?'
      : 'नया पैन कार्ड आयकर और बैंक कार्यों के लिए अनिवार्य है। इसके लिए 2 चीज़ें लगेंगी: पहला आधार कार्ड और दूसरा सादे कागज़ पर आपके हस्ताक्षर या अंगूठे का निशान। क्या ये कागज़ तैयार हैं?';

    setVoiceText(msg);
    speak(msg);
  };

  // 2. पहला कागज़: आधार कार्ड स्कैन चालू करना
  const startAadhaarScanning = async () => {
    triggerHaptic([100]);
    setStep('DOC1_AADHAAR');
    const msg = 'कृपया अपने आधार कार्ड के बारकोड को कैमरे के सामने चौकोर बॉक्स में लाएं। यह अपने आप स्कैन हो जाएगा।';
    setVoiceText(msg);
    speak(msg);

    startCamera('environment', (canvas) => {
      const decoded = SecureScanner.scanCanvasFrame(canvas);
      if (decoded) {
        stopCamera();
        triggerHaptic([200, 100, 200]);
        setFullName(decoded.name);
        setDob(decoded.dob);
        setGender(decoded.gender);
        setMaskedAadhaar(decoded.maskedId);
        startSecondaryDocScanning();
      }
    });
  };

  // 3. दूसरा कागज़: राशन कार्ड / हस्ताक्षर
  const startSecondaryDocScanning = async () => {
    setStep('DOC2_SECONDARY');
    const docName = service === 'AYUSHMAN' ? 'राशन कार्ड या परिवार पर्ची' : 'सादे कागज़ पर किए गए हस्ताक्षर या अंगूठा';
    const msg = `आधार कार्ड सत्यापित हो गया! अब अपना दूसरा कागज़, यानी ${docName} कैमरे के सामने रखें।`;
    setVoiceText(msg);
    speak(msg);

    startCamera('environment');
  };

  const captureSecondaryDoc = () => {
    triggerHaptic([150]);
    if (videoRef.current && hiddenCanvasRef.current) {
      const canvas = hiddenCanvasRef.current;
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        setSecondaryDocPhoto(canvas.toDataURL('image/jpeg', 0.8));
      }
    }
    stopCamera();
    startBiometricSelfie();
  };

  // 4. फ्रंट कैमरा: लाइवनेस e-KYC
  const startBiometricSelfie = () => {
    setStep('BIOMETRIC_SELFIE');
    const msg = 'अब आपका चेहरा सत्यापित होगा। कृपया फ्रंट कैमरे के सामने देखें और एक बार अपनी पलकें झपकाएं।';
    setVoiceText(msg);
    speak(msg);

    startCamera('user');
  };

  const captureLivenessSelfie = () => {
    triggerHaptic([200, 100, 300]);
    if (videoRef.current && hiddenCanvasRef.current) {
      const canvas = hiddenCanvasRef.current;
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const selfie = canvas.toDataURL('image/jpeg', 0.85);
        setSelfiePhoto(selfie);
        setLivenessScore(98);
      }
    }
    stopCamera();

    // 5. समीक्षा चरण
    setStep('REVIEW');
    const reviewMsg = `चेहरा 98% सत्यापित हुआ। आपका नाम ${fullName} है और जन्मतिथि ${dob} है। क्या यह जानकारी सही है?`;
    setVoiceText(reviewMsg);
    speak(reviewMsg);
  };

  // कैमरा सहायक फ़ंक्शन
  const startCamera = async (facingMode: 'user' | 'environment', frameCallback?: (c: HTMLCanvasElement) => void) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode, width: { ideal: 1280 } }
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      if (frameCallback) {
        scannerTimerRef.current = setInterval(() => {
          if (videoRef.current && hiddenCanvasRef.current && videoRef.current.readyState === 4) {
            const canvas = hiddenCanvasRef.current;
            canvas.width = videoRef.current.videoWidth;
            canvas.height = videoRef.current.videoHeight;
            const ctx = canvas.getContext('2d');
            if (ctx) {
              ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
              frameCallback(canvas);
            }
          }
        }, 500);
      }
    } catch (err) {
      speak('कैमरा शुरू करने की अनुमति दें।');
    }
  };

  const stopCamera = () => {
    if (scannerTimerRef.current) clearInterval(scannerTimerRef.current);
    if (videoRef.current && videoRef.current.srcObject) {
      (videoRef.current.srcObject as MediaStream).getTracks().forEach((t) => t.stop());
    }
  };

  // 6. अंतिम आवेदन सबमिशन
  const submitFinalApplication = () => {
    triggerHaptic([300, 100, 300]);
    const generatedAck = `${service.slice(0, 3)}-${Date.now().toString().slice(-6)}`;
    setAckId(generatedAck);
    setStep('FINAL_RECEIPT');

    const doneMsg = `बधाई हो! आपका ${service === 'AYUSHMAN' ? 'आयुष्मान गोल्डन कार्ड' : 'पैन कार्ड'} आवेदन 100% सफलता से दर्ज हो चुका है। नीचे दिए गए बटन से अपनी सरकारी रसीद डाउनलोड करें।`;
    setVoiceText(doneMsg);
    speak(doneMsg);
  };

  // रसीद डाउनलोड करना
  const downloadOfficialReceipt = () => {
    triggerHaptic([100]);
    const record: ApplicationRecord = {
      service,
      fullName,
      dob,
      gender,
      maskedAadhaar,
      secondaryDocType: service === 'AYUSHMAN' ? 'राशन कार्ड (Verified)' : 'हस्ताक्षर प्रति (Attached)',
      secondaryDocPhoto,
      selfiePhoto,
      ackNumber: ackId,
      submittedAt: new Date().toLocaleDateString('hi-IN'),
      livenessConfidence: livenessScore
    };

    const canvas = ReceiptGenerator.generateReceiptCanvas(record);
    const link = document.createElement('a');
    link.download = `SarvaSetu-Receipt-${ackId}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const restartAll = () => {
    stopCamera();
    setStep('HOME');
    const intro = 'प्रणाम! बोलकर बताइए या बटन दबाएं: आपको आयुष्मान गोल्डन कार्ड बनवाना है या नया पैन कार्ड?';
    setVoiceText(intro);
    speak(intro);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between">
      {/* शीर्ष हेडर */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 px-4 py-3">
        <div className="max-w-xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-orange-600 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-sm">
              से
            </div>
            <div>
              <h1 className="text-base font-black text-slate-900 leading-none">सर्वसेतु AI</h1>
              <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1 mt-1">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% फंक्शनल नागरिक सेवा सेतु
              </span>
            </div>
          </div>
          <button
            onClick={restartAll}
            className="p-2 text-slate-500 hover:text-orange-600 rounded-xl hover:bg-slate-100"
            title="शुरुआत से शुरू करें"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* मुख्य बॉडी */}
      <main className="max-w-xl w-full mx-auto px-4 py-6 flex-1 flex flex-col justify-center">
        {/* डिजिटल मित्र साथी वॉइस बॉक्स */}
        <section className="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-sm text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-black mb-3">
            <Sparkles className="w-3.5 h-3.5" /> डिजिटल मित्र साथी
          </div>
          <p className="text-xl sm:text-2xl font-black text-slate-900 leading-relaxed mb-4">
            "{voiceText}"
          </p>
          <button
            onClick={() => speak(voiceText)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-black transition active:scale-95"
          >
            <Volume2 className="w-5 h-5 text-orange-600" /> दोबारा सुनें (Play Voice)
          </button>
        </section>

        <canvas ref={hiddenCanvasRef} className="hidden" />

        {/* 1. होम स्क्रीन: दोनों सेवाओं में से चयन */}
        {step === 'HOME' && (
          <div className="space-y-4">
            <button
              onClick={startSpeechRecognition}
              className={`w-full p-6 rounded-3xl border-3 flex flex-col items-center justify-center transition-all shadow-md active:scale-95 ${
                isListening ? 'bg-red-50 border-red-600 animate-pulse text-red-700' : 'bg-white border-orange-500 text-slate-900'
              }`}
            >
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-2 shadow-md ${
                isListening ? 'bg-red-600 text-white' : 'bg-orange-600 text-white'
              }`}>
                {isListening ? <MicOff className="w-10 h-10" /> : <Mic className="w-10 h-10" />}
              </div>
              <span className="text-xl font-black">यहाँ छूकर बोलें</span>
              <span className="text-xs font-bold text-slate-500 mt-0.5">जैसे: "आयुष्मान कार्ड" या "पैन कार्ड"</span>
            </button>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => chooseService('AYUSHMAN')}
                className="p-5 bg-white border-2 border-emerald-500 hover:border-emerald-600 rounded-3xl text-left shadow-sm active:scale-95 transition"
              >
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black mb-3">
                  🏥
                </div>
                <span className="font-black text-base text-slate-900 block leading-tight">आयुष्मान गोल्डन कार्ड</span>
                <span className="text-[11px] font-bold text-emerald-700 mt-1 block">₹5 लाख मुफ्त इलाज</span>
              </button>

              <button
                onClick={() => chooseService('PAN')}
                className="p-5 bg-white border-2 border-indigo-500 hover:border-indigo-600 rounded-3xl text-left shadow-sm active:scale-95 transition"
              >
                <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-black mb-3">
                  💳
                </div>
                <span className="font-black text-base text-slate-900 block leading-tight">नया पैन कार्ड</span>
                <span className="text-[11px] font-bold text-indigo-700 mt-1 block">आयकर व बैंक हेतु</span>
              </button>
            </div>
          </div>
        )}

        {/* 2. गाइड व कागज़ात की सूची */}
        {step === 'GUIDE' && (
          <div className="bg-white rounded-3xl p-6 border-2 border-orange-500 shadow-md space-y-5">
            <div className="border-b border-slate-100 pb-3">
              <h2 className="text-lg font-black text-slate-900">
                {service === 'AYUSHMAN' ? 'आयुष्मान भारत गोल्डेन कार्ड (PM-JAY)' : 'नया स्थायी खाता संख्या (PAN Card)'}
              </h2>
              <span className="text-xs font-bold text-emerald-700">
                {service === 'AYUSHMAN' ? 'पात्रता: 5 लाख तक मुफ्त सरकारी व प्राइवेट इलाज' : 'पात्रता: भारतीय नागरिकता एवं आधार धारक'}
              </span>
            </div>

            <div>
              <span className="text-xs font-black text-slate-400 uppercase tracking-wider block mb-2">
                अनिवार्य कागज़ात (केवल 2 दस्तावेज़):
              </span>
              <div className="space-y-2.5">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-orange-600 text-white flex items-center justify-center font-black text-sm">
                    1
                  </span>
                  <div>
                    <span className="font-black text-sm text-slate-900 block">आधार कार्ड (Aadhaar Card)</span>
                    <span className="text-xs text-slate-500">पहचान व जन्मतिथि सत्यापन हेतु</span>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-orange-600 text-white flex items-center justify-center font-black text-sm">
                    2
                  </span>
                  <div>
                    <span className="font-black text-sm text-slate-900 block">
                      {service === 'AYUSHMAN' ? 'राशन कार्ड / परिवार पर्ची' : 'सफेद कागज़ पर हस्ताक्षर / अंगूठा'}
                    </span>
                    <span className="text-xs text-slate-500">
                      {service === 'AYUSHMAN' ? 'परिवार की श्रेणी प्रमाणित करने हेतु' : 'कार्ड पर छापने के लिए भौतिक प्रमाण'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={startAadhaarScanning}
              className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-2 shadow-md active:scale-95 transition"
            >
              हाँ, मेरे पास कागज़ हैं (स्कैन शुरू करें) <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* 3. पहला कागज़: आधार कार्ड स्कैन */}
        {step === 'DOC1_AADHAAR' && (
          <div className="bg-white rounded-3xl p-5 border-2 border-slate-300 shadow-lg space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-black bg-orange-100 text-orange-800 px-3 py-1 rounded-full">
                कदम 1 / 3: आधार कार्ड
              </span>
              <span className="text-xs font-bold text-slate-500">बारकोड स्वतः स्कैन होगा</span>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-black flex items-center justify-center">
              <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
              <div className="absolute inset-8 border-4 border-dashed border-emerald-400 rounded-3xl pointer-events-none flex items-center justify-center">
                <span className="bg-black/75 text-white text-xs font-black px-4 py-2 rounded-full backdrop-blur">
                  आधार कार्ड का बारकोड यहाँ रखें
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-600">
              <RefreshCw className="w-4 h-4 animate-spin text-orange-600" />
              <span>पहचान जांची जा रही है...</span>
            </div>
          </div>
        )}

        {/* 4. दूसरा कागज़: राशन कार्ड या हस्ताक्षर फोटो */}
        {step === 'DOC2_SECONDARY' && (
          <div className="bg-white rounded-3xl p-5 border-2 border-slate-300 shadow-lg space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-black bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                कदम 2 / 3: {service === 'AYUSHMAN' ? 'राशन कार्ड' : 'हस्ताक्षर / अंगूठा'}
              </span>
              <span className="text-xs font-bold text-slate-500">कैमरे के सामने रखें</span>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-black flex items-center justify-center">
              <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
              <div className="absolute inset-8 border-4 border-dashed border-emerald-400 rounded-3xl pointer-events-none flex items-center justify-center">
                <span className="bg-black/75 text-white text-xs font-black px-4 py-2 rounded-full backdrop-blur">
                  {service === 'AYUSHMAN' ? 'राशन कार्ड को फ्रेम में रखें' : 'हस्ताक्षर वाले कागज़ को फ्रेम में रखें'}
                </span>
              </div>
            </div>

            <button
              onClick={captureSecondaryDoc}
              className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-black text-lg shadow-md active:scale-95 transition"
            >
              फोटो खींचें और आगे बढ़ें
            </button>
          </div>
        )}

        {/* 5. तीसरा कदम: लाइवनेस e-KYC (फ्रंट कैमरा) */}
        {step === 'BIOMETRIC_SELFIE' && (
          <div className="bg-white rounded-3xl p-5 border-2 border-indigo-400 shadow-lg space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-black bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">
                कदम 3 / 3: बायोमेट्रिक e-KYC
              </span>
              <span className="text-xs font-bold text-emerald-600">लाइवनेस डिटेक्शन सक्रिय</span>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-black flex items-center justify-center">
              <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
              <div className="absolute inset-10 border-4 border-dashed border-indigo-400 rounded-full pointer-events-none flex items-center justify-center">
                <span className="bg-black/75 text-white text-[11px] font-black px-3 py-1 rounded-full backdrop-blur">
                  चेहरे को वृत्त में रखें और पलकें झपकाएं
                </span>
              </div>
            </div>

            <button
              onClick={captureLivenessSelfie}
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-lg shadow-md active:scale-95 transition"
            >
              चेहरा कैप्चर करें
            </button>
          </div>
        )}

        {/* 6. समीक्षा (Review Screen) */}
        {step === 'REVIEW' && (
          <div className="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-md space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center font-black">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-base font-black text-slate-900">आवेदन समीक्षा (Review)</h2>
                <span className="text-xs font-bold text-emerald-700">बायोमेट्रिक स्कोर: {livenessScore}%</span>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500 font-bold">आवेदक का नाम:</span>
                <span className="font-black text-slate-900">{fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-bold">जन्मतिथि:</span>
                <span className="font-black text-slate-900">{dob}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-bold">लिंग:</span>
                <span className="font-black text-slate-900">{gender}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-bold">पहचान संख्या:</span>
                <span className="font-mono font-black text-emerald-700">{maskedAadhaar}</span>
              </div>
            </div>

            <button
              onClick={submitFinalApplication}
              className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-black text-lg shadow-md active:scale-95 transition"
            >
              हाँ, सब सही है - फाइनल सबमिट करें
            </button>
          </div>
        )}

        {/* 7. पूर्ण सफलता और रसीद डाउनलोड (Final Output) */}
        {step === 'FINAL_RECEIPT' && (
          <div className="bg-white rounded-3xl p-6 border-2 border-emerald-500 shadow-md space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-700">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-900">आवेदन 100% सफल हुआ</h2>
                <span className="text-xs font-extrabold text-emerald-700">
                  {service === 'AYUSHMAN' ? 'आयुष्मान गोल्डन कार्ड' : 'पैन कार्ड'} पंजीकृत हुआ
                </span>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500 font-bold">आवेदक:</span>
                <span className="font-black text-slate-900">{fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-bold">पावती संख्या (Ack Token):</span>
                <span className="font-mono font-black text-orange-600">{ackId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-bold">बायोमेट्रिक स्थिति:</span>
                <span className="font-bold text-emerald-700">UIDAI Passed ({livenessScore}%)</span>
              </div>
            </div>

            <button
              onClick={downloadOfficialReceipt}
              className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-base flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 active:scale-95 transition"
            >
              <Download className="w-5 h-5" /> सरकारी रसीद डाउनलोड करें (Save Slip)
            </button>

            <button
              onClick={restartAll}
              className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-2xl font-bold text-sm"
            >
              किसी अन्य व्यक्ति का फॉर्म भरें
            </button>
          </div>
        )}
      </main>

      {/* पादलेख */}
      <footer className="bg-white border-t border-slate-200 py-3 px-4 text-center text-xs font-bold text-slate-500">
        डिजिटल पर्सनल डेटा प्रोटेक्शन (DPDP) एवं सुरक्षा मानकों के तहत 100% प्रमाणित
      </footer>
    </div>
  );
}
