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
  UserCheck,
  Share2,
  Printer,
  CheckSquare,
  Square,
  ChevronDown
} from 'lucide-react';

import { GovernmentService } from './core/governmentDirectory';
import { DirectoryEngine, CategorySummary } from './core/directoryEngine';
import { SUPPORTED_STATES, StateConfig } from './core/stateDirectory';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedStateCode, setSelectedStateCode] = useState('UP'); // डिफ़ॉल्ट उत्तर प्रदेश
  const [selectedService, setSelectedService] = useState<GovernmentService | null>(null);
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});
  const [isListening, setIsListening] = useState(false);

  // संस्थापक परिचय सहित डिजिटल मित्र वॉइस संदेश
  const [voiceBriefing, setVoiceBriefing] = useState(
    'प्रणाम! सर्वसेतु AI में आपका स्वागत है। इसके संस्थापक विकास कुमार मिश्रा, रॉबर्ट्सगंज, सोनभद्र, उत्तर प्रदेश हैं। बोलकर बताइए या नीचे खोजें: आपको किस सरकारी सेवा या दस्तावेज़ के लिए सीधे आवेदन करना है?'
  );

  // टेक्स्ट-टू-स्पीच
  const speak = useCallback((text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'hi-IN';
    utterance.rate = 0.88;
    window.speechSynthesis.speak(utterance);
  }, []);

  useEffect(() => {
    speak(voiceBriefing);
  }, []);

  const triggerHaptic = (pattern: number[]) => {
    if ('vibrate' in navigator) navigator.vibrate(pattern);
  };

  const categories: CategorySummary[] = useMemo(() => DirectoryEngine.getCategories(), []);

  // वर्तमान चयनित राज्य
  const currentState: StateConfig = useMemo(() => {
    return SUPPORTED_STATES.find((s) => s.code === selectedStateCode) || SUPPORTED_STATES[0];
  }, [selectedStateCode]);

  // राज्य-वार डायनामिक लिंक एवं नाम का निर्धारण
  const resolveServiceForState = useCallback(
    (service: GovernmentService) => {
      const stateOverride = currentState.servicesOverride[service.id];
      if (stateOverride) {
        return {
          ...service,
          officialApplyUrl: stateOverride.url,
          portalName: stateOverride.portalName
        };
      }
      return service;
    },
    [currentState]
  );

  const filteredServices = useMemo(() => {
    const raw = DirectoryEngine.searchServices(searchQuery, selectedCategory);
    return raw.map((s) => resolveServiceForState(s));
  }, [searchQuery, selectedCategory, resolveServiceForState]);

  // वॉयस इनपुट हैंडलर
  const handleVoiceSearch = () => {
    triggerHaptic([100]);
    const SpeechRec = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    if (!SpeechRec) {
      alert('ब्राउज़र वॉयस इनपुट को सपोर्ट नहीं करता। कृपया सर्च बॉक्स में लिखकर खोजें।');
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
        const stateResolved = resolveServiceForState(matched);
        openServiceModal(stateResolved);
        const msg = `${stateResolved.title} मिल गया है। ${stateResolved.voiceBriefing}`;
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

  // सेवा मोडल खोलना व चेकलिस्ट रीसेट
  const openServiceModal = (service: GovernmentService) => {
    triggerHaptic([80]);
    const resolved = resolveServiceForState(service);
    setSelectedService(resolved);
    setCheckedDocs({});
    setVoiceBriefing(resolved.voiceBriefing);
    speak(resolved.voiceBriefing);
  };

  // चेकलिस्ट टिक टॉगल
  const toggleDocCheck = (docName: string) => {
    triggerHaptic([50]);
    setCheckedDocs((prev) => {
      const updated = { ...prev, [docName]: !prev[docName] };
      return updated;
    });
  };

  // तैयारी मीटर (Readiness Percentage)
  const readinessMetrics = useMemo(() => {
    if (!selectedService) return { percentage: 0, checkedCount: 0, total: 0, isReady: false };
    const total = selectedService.requiredDocuments.length;
    const checkedCount = selectedService.requiredDocuments.filter((d) => checkedDocs[d.name]).length;
    const percentage = total > 0 ? Math.round((checkedCount / total) * 100) : 100;
    const isReady = percentage === 100;
    return { percentage, checkedCount, total, isReady };
  }, [selectedService, checkedDocs]);

  // व्हाट्सएप शेयर जनरेटर
  const shareOnWhatsApp = () => {
    if (!selectedService) return;
    triggerHaptic([100]);
    const docList = selectedService.requiredDocuments
      .map((d, i) => `${i + 1}. ${d.name} (${d.mandatory ? 'अनिवार्य' : 'वैकल्पिक'})`)
      .join('%0A');

    const message = `*🏛️ ${selectedService.title} - आवश्यक जानकारी*%0A%0A*विभाग:* ${selectedService.department}%0A*सरकारी शुल्क:* ${selectedService.govtFee}%0A*अनुमानित समय:* ${selectedService.estimatedDays}%0A%0A*📋 आवश्यक कागज़ात:*%0A${docList}%0A%0A*🔗 आधिकारिक आवेदन लिंक:* ${selectedService.officialApplyUrl}%0A%0A_सर्वसेतु AI - राष्ट्रीय डिजिटल नागरिक मंच_%0A_संस्थापक: विकास कुमार मिश्रा, रॉबर्ट्सगंज, सोनभद्र (उ.प्र.)_`;

    window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank');
  };

  // प्रिंट पर्ची
  const handlePrintSlip = () => {
    triggerHaptic([100]);
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between selection:bg-orange-100">
      {/* 1. शीर्ष आधिकारिक हेडर (GIGW 3.0 लाइट थीम + राज्य चयन ड्रॉपडाउन) */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-orange-600 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-xs shrink-0">
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
                <ShieldCheck className="w-3.5 h-3.5" /> 100% सत्यापित आधिकारिक सरकारी गेटवे
              </span>
            </div>
          </div>

          {/* राज्य चयन ड्रॉपडाउन */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <select
                value={selectedStateCode}
                onChange={(e) => {
                  setSelectedStateCode(e.target.value);
                  triggerHaptic([80]);
                  const found = SUPPORTED_STATES.find((s) => s.code === e.target.value);
                  if (found) {
                    const msg = `राज्य बदला गया: ${found.hindiName}। सभी राज्य सेवाएं अब ${found.hindiName} पोर्टल से जुड़ गई हैं।`;
                    setVoiceBriefing(msg);
                    speak(msg);
                  }
                }}
                className="appearance-none bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-900 text-xs font-black py-2 pl-8 pr-7 rounded-xl cursor-pointer focus:outline-hidden focus:border-orange-500 shadow-xs transition"
              >
                {SUPPORTED_STATES.map((state) => (
                  <option key={state.code} value={state.code}>
                    {state.flagEmoji} {state.hindiName}
                  </option>
                ))}
              </select>
              <MapPin className="w-3.5 h-3.5 text-orange-600 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <ChevronDown className="w-3.5 h-3.5 text-slate-500 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* संस्थापक बैज (Desktop) */}
            <div className="hidden lg:flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-orange-50/80 px-3 py-1.5 rounded-xl border border-orange-200">
              <UserCheck className="w-3.5 h-3.5 text-orange-600" />
              <span>संस्थापक: <strong>विकास कुमार मिश्रा</strong></span>
            </div>
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
                <Sparkles className="w-4 h-4" /> डिजिटल मित्र वॉयस साथी | सक्रिय राज्य: {currentState.hindiName}
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
              <Volume2 className="w-4 h-4 text-orange-600" /> दोबारा सुनें (Play)
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
              placeholder={`दस्तावेज़ खोजें (उदा: आधार, पैन, खतौनी, जाति, राशन, बिजली, पेंशन)...`}
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

        {/* परिणाम गणना व सक्रिय राज्य सूचना */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-bold text-slate-500 px-1 gap-1">
          <span>कुल उपलब्ध सेवाएं: {filteredServices.length}</span>
          <span className="flex items-center gap-1 text-emerald-700">
            <CheckCircle2 className="w-3.5 h-3.5" /> राज्य: {currentState.hindiName} पोर्टल लिंक्स सक्रिय हैं
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
                    {service.portalName.includes('Portal') ? 'GOV.IN' : 'DIRECT'}
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
                  कागज़ात चेकलिस्ट
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
              कृपया अन्य कीवर्ड खोजें (जैसे 'आधार', 'पैन', 'खतौनी', 'बिजली', 'पेंशन') या श्रेणी बदलें।
            </p>
          </div>
        )}
      </main>

      {/* 3. सेवा विस्तार, इंटरएक्टिव चेकलिस्ट, व्हाट्सएप शेयर व प्रिंट पर्ची मोडल */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[92vh] overflow-y-auto p-6 space-y-5 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95">
            {/* मोडल हेडर */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-bold text-orange-600 block mb-0.5">
                  {selectedService.department} | राज्य: {currentState.hindiName}
                </span>
                <h3 className="text-lg font-black text-slate-900">{selectedService.title}</h3>
                <span className="text-xs text-emerald-700 font-bold block mt-0.5">
                  सत्यापित पोर्टल: {selectedService.portalName}
                </span>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* इंटरएक्टिव दस्तावेज़ तैयारी मीटर (Readiness Meter) */}
            <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-4 space-y-2">
              <div className="flex items-center justify-between text-xs font-black">
                <span className="text-slate-700">कागज़ात तैयारी मीटर (Document Readiness):</span>
                <span className={readinessMetrics.isReady ? 'text-emerald-700 font-extrabold' : 'text-orange-600'}>
                  {readinessMetrics.percentage}% ({readinessMetrics.checkedCount}/{readinessMetrics.total} तैयार)
                </span>
              </div>

              {/* प्रोग्रेस बार */}
              <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    readinessMetrics.isReady ? 'bg-emerald-500' : 'bg-orange-500'
                  }`}
                  style={{ width: `${readinessMetrics.percentage}%` }}
                />
              </div>

              {readinessMetrics.isReady ? (
                <p className="text-[11px] font-bold text-emerald-700 flex items-center gap-1 pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> बधाई! आपके पास सभी आवश्यक दस्तावेज़ तैयार हैं। अब आप सीधे आवेदन कर सकते हैं।
                </p>
              ) : (
                <p className="text-[11px] font-bold text-slate-500 pt-1">
                  नीचे दी गई सूची में उन कागज़ातों पर टिक करें जो आपके पास अभी उपलब्ध हैं:
                </p>
              )}
            </div>

            {/* इंटरएक्टिव चेकलिस्ट सूची */}
            <div className="space-y-2.5">
              <span className="text-xs font-black uppercase text-slate-400 tracking-wider block">
                आवश्यक कागज़ात (छूकर टिक करें):
              </span>
              <div className="space-y-2">
                {selectedService.requiredDocuments.map((doc, idx) => {
                  const isChecked = !!checkedDocs[doc.name];
                  return (
                    <button
                      key={idx}
                      onClick={() => toggleDocCheck(doc.name)}
                      className={`w-full p-3 rounded-2xl flex items-center justify-between text-xs font-bold border transition text-left ${
                        isChecked
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                          : 'bg-white border-slate-200 text-slate-800 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        {isChecked ? (
                          <CheckSquare className="w-5 h-5 text-emerald-600 shrink-0" />
                        ) : (
                          <Square className="w-5 h-5 text-slate-400 shrink-0" />
                        )}
                        <span>{doc.name}</span>
                      </div>
                      {doc.mandatory ? (
                        <span className="text-[10px] font-black bg-red-100 text-red-800 px-2 py-0.5 rounded-md shrink-0">
                          अनिवार्य
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold bg-slate-200 text-slate-700 px-2 py-0.5 rounded-md shrink-0">
                          वैकल्पिक
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* समय व सरकारी शुल्क विवरण */}
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

            {/* शेयर व प्रिंट बटन रो */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={shareOnWhatsApp}
                className="py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black transition flex items-center justify-center gap-1.5 shadow-xs"
              >
                <Share2 className="w-3.5 h-3.5" /> व्हाट्सएप पर शेयर करें
              </button>

              <button
                onClick={handlePrintSlip}
                className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-black transition flex items-center justify-center gap-1.5 border border-slate-200"
              >
                <Printer className="w-3.5 h-3.5 text-orange-600" /> प्रिंट पर्ची (Slip)
              </button>
            </div>

            {/* आधिकारिक डायरेक्ट लिंक बटन */}
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
                सुरक्षा नोट: यह लिंक आपको सीधे सत्यापित सरकारी पोर्टल पर ले जाएगा।
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
