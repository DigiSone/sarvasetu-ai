import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Search,
  Mic,
  MicOff,
  Volume2,
  ExternalLink,
  FileText,
  CheckCircle2,
  Clock,
  Coins,
  ShieldCheck,
  Sparkles,
  X,
  Building2,
  ArrowUpRight,
  AlertCircle,
  MapPin,
  UserCheck
} from 'lucide-react';

import { GovernmentService } from './core/governmentDirectory';
import { DirectoryEngine, CategorySummary } from './core/directoryEngine';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedService, setSelectedService] = useState<GovernmentService | null>(null);
  const [isListening, setIsListening] = useState(false);

  // 1. संस्थापक परिचय सहित डिजिटल मित्र वॉइस संदेश
  const [voiceBriefing, setVoiceBriefing] = useState(
    'प्रणाम! सर्वसेतु AI में आपका स्वागत है। इसके संस्थापक विकास कुमार मिश्रा, रॉबर्ट्सगंज, सोनभद्र, उत्तर प्रदेश हैं। बोलकर बताइए या नीचे खोजें: आपको किस सरकारी सेवा या दस्तावेज़ के लिए सीधे आवेदन करना है?'
  );

  // टेक्स्ट-टू-स्पीच
  const speak = useCallback((text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'hi-IN';
    utterance.rate = 0.86;
    window.speechSynthesis.speak(utterance);
  }, []);

  useEffect(() => {
    speak(voiceBriefing);
  }, []);

  const triggerHaptic = (pattern: number[]) => {
    if ('vibrate' in navigator) navigator.vibrate(pattern);
  };

  const categories: CategorySummary[] = useMemo(() => DirectoryEngine.getCategories(), []);

  const filteredServices = useMemo(() => {
    return DirectoryEngine.searchServices(searchQuery, selectedCategory);
  }, [searchQuery, selectedCategory]);

  // वॉयस इनपुट हैंडलर
  const handleVoiceSearch = () => {
    triggerHaptic([100]);
    const SpeechRec = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    if (!SpeechRec) {
      alert('ब्राउज़र वॉयस इनपुट को सपोर्ट नहीं करता। कृपया लिखकर खोजें।');
      return;
    }

    const rec = new SpeechRec();
    rec.lang = 'hi-IN';
    rec.onstart = () => setIsListening(true);
    rec.onend = () => setIsListening(false);

    rec.onresult = (event: any) => {
      triggerHaptic([150, 50, 150]);
      const transcript = event.results[0][0].transcript;
      setSearchQuery(transcript);

      const matched = DirectoryEngine.matchVoiceIntent(transcript);
      if (matched) {
        setSelectedService(matched);
        const msg = `${matched.title} मिल गया है। ${matched.voiceBriefing}`;
        setVoiceBriefing(msg);
        speak(msg);
      } else {
        const msg = `"${transcript}" से संबंधित परिणाम नीचे दिखाए जा रहे हैं।`;
        setVoiceBriefing(msg);
        speak(msg);
      }
    };

    rec.start();
  };

  const openServiceModal = (service: GovernmentService) => {
    triggerHaptic([80]);
    setSelectedService(service);
    setVoiceBriefing(service.voiceBriefing);
    speak(service.voiceBriefing);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between selection:bg-orange-100">
      {/* 1. शीर्ष हेडर (GIGW 3.0 लाइट थीम + संस्थापक विवरण) */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-orange-600 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-xs">
              से
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-black text-slate-900 leading-tight tracking-tight">
                  सर्वसेतु AI
                </h1>
                <span className="text-[10px] font-black uppercase bg-orange-100 text-orange-800 px-2 py-0.5 rounded-md">
                  DPI Portal
                </span>
              </div>
              <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1 mt-0.5">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% सत्यापित आधिकारिक सरकारी पोर्टल गेटवे
              </span>
            </div>
          </div>

          {/* संस्थापक बैज (Header Desktop/Tablet) */}
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-orange-50/80 px-3 py-1.5 rounded-xl border border-orange-200">
            <UserCheck className="w-3.5 h-3.5 text-orange-600" />
            <span>संस्थापक: <strong>विकास कुमार मिश्रा</strong></span>
            <span className="text-[11px] text-slate-500 hidden sm:inline">(रॉबर्ट्सगंज, सोनभद्र)</span>
          </div>
        </div>
      </header>

      {/* 2. मुख्य सामग्री */}
      <main className="max-w-5xl w-full mx-auto px-4 py-6 flex-1 space-y-6">
        {/* डिजिटल मित्र व संस्थापक घोषणा कार्ड */}
        <section className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-black tracking-wider uppercase text-emerald-700 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> डिजिटल मित्र वॉयस साथी
              </span>
            </div>
            {/* लिखित संस्थापक पहचान पट्टी */}
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-xl">
              <MapPin className="w-3.5 h-3.5 text-orange-600 shrink-0" />
              <span>परिकल्पना व निर्माण: <strong>विकास कुमार मिश्रा</strong> | रॉबर्ट्सगंज, सोनभद्र (उ.प्र.)</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <p className="text-sm sm:text-base font-bold text-slate-800 leading-relaxed">
              "{voiceBriefing}"
            </p>
            <button
              onClick={() => speak(voiceBriefing)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-black transition active:scale-95 shrink-0"
            >
              <Volume2 className="w-4 h-4 text-orange-600" /> दोबारा सुनें (Play Voice)
            </button>
          </div>
        </section>

        {/* सर्च व वॉयस इनपुट बार */}
        <div className="relative flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="दस्तावेज़ या सेवा खोजें (उदा: आधार, पैन, आयुष्मान, राशन, ड्राइविंग लाइसेंस)..."
              className="w-full pl-11 pr-10 py-3.5 bg-white border-2 border-slate-200 rounded-2xl text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-orange-500 shadow-xs transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* वॉयस सर्च बटन */}
          <button
            onClick={handleVoiceSearch}
            className={`px-5 py-3.5 rounded-2xl border-2 flex items-center gap-2 font-black text-sm shadow-xs transition active:scale-95 ${
              isListening
                ? 'bg-red-50 border-red-500 text-red-700 animate-pulse'
                : 'bg-orange-600 border-orange-600 hover:bg-orange-700 text-white'
            }`}
          >
            {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            <span className="hidden sm:inline">{isListening ? 'सुन रहे हैं...' : 'बोलकर खोजें'}</span>
          </button>
        </div>

        {/* श्रेणियां (Category Pills) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                triggerHaptic([50]);
                setSelectedCategory(cat.key);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-black shrink-0 transition flex items-center gap-1.5 border ${
                selectedCategory === cat.key
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.title}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                selectedCategory === cat.key ? 'bg-slate-800 text-slate-200' : 'bg-slate-100 text-slate-600'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* परिणाम गणना */}
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 px-1">
          <span>कुल उपलब्ध सेवाएं: {filteredServices.length}</span>
          <span className="flex items-center gap-1 text-emerald-700">
            <CheckCircle2 className="w-3.5 h-3.5" /> सभी लिंक सीधे आधिकारिक सरकारी सर्वर (.gov.in) से जुड़े हैं
          </span>
        </div>

        {/* सेवाओं का ग्रिड (Service Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-5 border border-slate-200 hover:border-orange-400 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 block leading-none mb-1">
                      {service.ministry}
                    </span>
                    <h2 className="text-base font-black text-slate-900 group-hover:text-orange-600 transition">
                      {service.title}
                    </h2>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-lg shrink-0">
                    .GOV.IN
                  </span>
                </div>

                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {service.benefitSummary}
                </p>

                <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] font-bold">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-2 flex items-center gap-1.5 text-slate-700">
                    <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span className="truncate">{service.estimatedDays}</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-2 flex items-center gap-1.5 text-slate-700">
                    <Coins className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{service.govtFee}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 mt-4">
                <button
                  onClick={() => openServiceModal(service)}
                  className="flex-1 py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-black transition active:scale-95 flex items-center justify-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-orange-600" />
                  कागज़ात व नियम
                </button>

                <a
                  href={service.officialApplyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-black transition active:scale-95 flex items-center justify-center gap-1.5 shadow-xs"
                >
                  सीधा पोर्टल खोलें
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="bg-white rounded-3xl p-8 text-center border border-slate-200 space-y-3">
            <AlertCircle className="w-10 h-10 text-orange-500 mx-auto" />
            <h3 className="text-base font-black text-slate-900">कोई संबंधित सरकारी सेवा नहीं मिली</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              कृपया अन्य कीवर्ड खोजें (जैसे 'आधार', 'पैन', 'पेंशन', 'ड्राइविंग', 'राशन') या ऊपर दी गई श्रेणियों पर टैप करें।
            </p>
          </div>
        )}
      </main>

      {/* 3. सेवा विस्तार व आवश्यक कागज़ात मॉडल */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 space-y-5 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-bold text-orange-600 block mb-0.5">
                  {selectedService.department}
                </span>
                <h3 className="text-lg font-black text-slate-900">{selectedService.title}</h3>
                <span className="text-xs text-slate-500 font-bold block mt-0.5">
                  आधिकारिक पोर्टल: {selectedService.portalName}
                </span>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-black uppercase text-slate-400 tracking-wider block">
                आवश्यक दस्तावेज़ (Required Documents):
              </span>
              <div className="space-y-2">
                {selectedService.requiredDocuments.map((doc, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-2.5 font-bold text-slate-800">
                      <span className="w-5 h-5 rounded-lg bg-orange-100 text-orange-700 flex items-center justify-center text-[10px] font-black shrink-0">
                        {idx + 1}
                      </span>
                      <span>{doc.name}</span>
                    </div>
                    {doc.mandatory ? (
                      <span className="text-[10px] font-black bg-red-50 text-red-700 border border-red-200 px-2 py-0.5 rounded-md">
                        अनिवार्य
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold bg-slate-200 text-slate-700 px-2 py-0.5 rounded-md">
                        वैकल्पिक
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl">
                <span className="text-slate-500 font-bold block mb-1">सरकारी शुल्क (Fee):</span>
                <span className="font-black text-emerald-700">{selectedService.govtFee}</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl">
                <span className="text-slate-500 font-bold block mb-1">अनुमानित समय:</span>
                <span className="font-black text-slate-900">{selectedService.estimatedDays}</span>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={selectedService.officialApplyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-md transition active:scale-95"
              >
                आधिकारिक पोर्टल पर सीधे आवेदन करें
                <ExternalLink className="w-4 h-4" />
              </a>

              <p className="text-[11px] text-center font-bold text-slate-400">
                सुरक्षा नोट: यह लिंक आपको सीधे भारत सरकार के सत्यापित पोर्टल (.gov.in / .nic.in) पर ले जाएगा।
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 4. पादलेख (Footer - संस्थापक क्रेडिट एवं वैधानिक अनुपालन) */}
      <footer className="bg-white border-t border-slate-200 py-6 px-4 text-center text-xs text-slate-600 space-y-2.5">
        <div className="max-w-xl mx-auto p-3 bg-orange-50/70 border border-orange-200 rounded-2xl">
          <p className="font-black text-slate-900 text-sm">
            सर्वसेतु AI (राष्ट्रीय डिजिटल नागरिक सेवा सेतु)
          </p>
          <p className="text-xs font-bold text-orange-800 mt-1">
            संस्थापक एवं मुख्य परिकल्पनाकार: <strong>विकास कुमार मिश्रा</strong>
          </p>
          <p className="text-[11px] text-slate-600 mt-0.5 flex items-center justify-center gap-1">
            <MapPin className="w-3 h-3 text-orange-600 inline" />
            रॉबर्ट्सगंज, सोनभद्र, उत्तर प्रदेश, भारत
          </p>
        </div>

        <p className="font-bold text-slate-500">
          डिजिटल इंडिया एवं नेशनल डिजिटल पब्लिक गुड्स (DPI) मानकों के अनुरूप
        </p>
        <p className="text-[11px] text-slate-400">
          सूचना प्रौद्योगिकी अधिनियम 2000 एवं DPDP Act 2023 के तहत 100% सुरक्षित व निःशुल्क नागरिक मंच
        </p>
      </footer>
    </div>
  );
}
