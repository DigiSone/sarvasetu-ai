import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import {
  Search,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  ExternalLink,
  FileText,
  CheckCircle2,
  Clock,
  Coins,
  ShieldCheck,
  Sparkles,
  X,
  ArrowUpRight,
  AlertCircle,
  MapPin,
  Share2,
  Printer,
  CheckSquare,
  Square,
  ChevronDown,
  PhoneCall,
  HelpCircle,
  Headphones,
  Home,
  Radio
} from 'lucide-react';

import { GovServiceItem } from './types/service';
import { DirectoryEngine, CategoryTab } from './core/directoryEngine';
import { LeadManager } from './core/leadManager';
import { VoiceEngine } from './core/voiceEngine';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedStateCode, setSelectedStateCode] = useState('UP');
  const [selectedService, setSelectedService] = useState<GovServiceItem | null>(null);
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // मोडल स्टेट्स
  const [showHelplineDrawer, setShowHelplineDrawer] = useState(false);
  const [showTrustShieldModal, setShowTrustShieldModal] = useState(false);
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [targetLeadService, setTargetLeadService] = useState<GovServiceItem | null>(null);
  const [showLegalModal, setShowLegalModal] = useState(false);

  // फॉर्म इनपुट स्टेट्स
  const [leadName, setLeadName] = useState('');
  const [leadMobile, setLeadMobile] = useState('');
  const [leadDistrict, setLeadDistrict] = useState('');
  const [hasConsent, setHasConsent] = useState(true);
  const [leadSubmittedSuccess, setLeadSubmittedSuccess] = useState(false);
  const [submittedRefId, setSubmittedRefId] = useState('');

  // स्वागत संदेश
  const [voiceBriefing, setVoiceBriefing] = useState(
    'प्रणाम! सर्वसेतु AI में आपका स्वागत है। संस्थापक: विकास कुमार मिश्रा, रॉबर्ट्सगंज, सोनभद्र, उत्तर प्रदेश। नीचे किसी भी सरकारी सेवा पर टैप करें या माइक दबाकर बोलें।'
  );

  const hasInitiatedAudioRef = useRef(false);

  // वॉइस कंट्रोल हैंडलर्स
  const speak = useCallback((text: string) => {
    VoiceEngine.speak(
      text,
      () => setIsSpeaking(true),
      () => setIsSpeaking(false)
    );
  }, []);

  const stopSpeaking = useCallback(() => {
    VoiceEngine.stop();
    setIsSpeaking(false);
  }, []);

  // मोबाइल ब्राउज़र ऑडियो अनब्लॉक
  useEffect(() => {
    const unlock = () => {
      VoiceEngine.resumeEngine();
      if (!hasInitiatedAudioRef.current) {
        hasInitiatedAudioRef.current = true;
        speak(voiceBriefing);
      }
    };

    window.addEventListener('click', unlock, { passive: true });
    window.addEventListener('touchstart', unlock, { passive: true });

    return () => {
      window.removeEventListener('click', unlock);
      window.removeEventListener('touchstart', unlock);
    };
  }, [speak, voiceBriefing]);

  const triggerHaptic = (pattern: number[]) => {
    if ('vibrate' in navigator) navigator.vibrate(pattern);
  };

  const categories: CategoryTab[] = useMemo(() => {
    return DirectoryEngine.getCategories(selectedStateCode);
  }, [selectedStateCode]);

  const filteredServices: GovServiceItem[] = useMemo(() => {
    return DirectoryEngine.search(searchQuery, selectedStateCode, selectedCategory);
  }, [searchQuery, selectedStateCode, selectedCategory]);

  const speakServiceDetails = useCallback((service: GovServiceItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    triggerHaptic([60]);

    const docs = service.requiredDocuments.map(d => d.name).join(', ');
    const speechText = `${service.title}। विभाग: ${service.department}। इसका मुख्य लाभ: ${service.benefitSummary}। सरकारी शुल्क: ${service.govtFee} है, और यह ${service.estimatedDays} में तैयार होता है। इसके लिए मुख्य कागज़ात: ${docs} की आवश्यकता होगी।`;

    setVoiceBriefing(speechText);
    speak(speechText);
  }, [speak]);

  const handleVoiceSearch = () => {
    triggerHaptic([100]);
    stopSpeaking();

    const SpeechRec = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    if (!SpeechRec) {
      alert('आपके ब्राउज़र में वॉयस इनपुट की सुविधा नहीं है। कृपया सर्च बॉक्स में लिखकर खोजें।');
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

      const matched = DirectoryEngine.matchVoiceStrict(transcript, selectedStateCode);
      if (matched) {
        const msg = `${matched.title} सेवा मिल गई है। ${matched.benefitSummary}। विवरण देखने हेतु कागज़ात सूची पर टैप करें।`;
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

  const openServiceModal = (service: GovServiceItem) => {
    triggerHaptic([80]);
    setSelectedService(service);
    setCheckedDocs({});
    speakServiceDetails(service);
  };

  const handleCategoryChange = (cat: CategoryTab) => {
    triggerHaptic([50]);
    setSelectedCategory(cat.key);
    const msg = `${cat.title} श्रेणी चुनी गई है। इसमें कुल ${cat.count} सरकारी सेवाएं हैं।`;
    setVoiceBriefing(msg);
    speak(msg);
  };

  const handleStateChange = (code: string) => {
    setSelectedStateCode(code);
    triggerHaptic([80]);
    const msg = code === 'UP' ? 'उत्तर प्रदेश राज्य की सभी सेवाएं सक्रिय हैं।' : 'केंद्र सरकार की सभी राष्ट्रीय सेवाएं सक्रिय हैं।';
    setVoiceBriefing(msg);
    speak(msg);
  };

  const toggleDocCheck = (docName: string) => {
    triggerHaptic([50]);
    setCheckedDocs((prev) => {
      const updated = { ...prev, [docName]: !prev[docName] };
      if (selectedService) {
        const total = selectedService.requiredDocuments.length;
        const checked = selectedService.requiredDocuments.filter(d => updated[d.name]).length;
        if (checked === total && total > 0) {
          const readyMsg = 'बधाई! आपके पास सभी आवश्यक कागज़ात तैयार हैं। अब आप सीधे पोर्टल पर आवेदन कर सकते हैं।';
          speak(readyMsg);
        }
      }
      return updated;
    });
  };

  const readinessMetrics = useMemo(() => {
    if (!selectedService) return { percentage: 0, checkedCount: 0, total: 0, isReady: false };
    const total = selectedService.requiredDocuments.length;
    const checkedCount = selectedService.requiredDocuments.filter((d) => checkedDocs[d.name]).length;
    const percentage = total > 0 ? Math.round((checkedCount / total) * 100) : 100;
    const isReady = percentage === 100;
    return { percentage, checkedCount, total, isReady };
  }, [selectedService, checkedDocs]);

  const shareOnWhatsApp = () => {
    if (!selectedService) return;
    triggerHaptic([100]);
    const docList = selectedService.requiredDocuments
      .map((d, i) => `${i + 1}. ${d.name} (${d.mandatory ? 'अनिवार्य' : 'वैकल्पिक'})`)
      .join('%0A');

    const message = `*🏛️ ${selectedService.title} - आवश्यक जानकारी*%0A%0A*विभाग:* ${selectedService.department}%0A*सरकारी शुल्क:* ${selectedService.govtFee}%0A*अनुमानित समय:* ${selectedService.estimatedDays}%0A%0A*📋 आवश्यक कागज़ात:*%0A${docList}%0A%0A*🔗 आधिकारिक आवेदन लिंक:* ${selectedService.officialApplyUrl}%0A%0A_सर्वसेतु AI - राष्ट्रीय डिजिटल नागरिक मंच_%0A_संस्थापक: विकास कुमार मिश्रा, रॉबर्ट्सगंज, सोनभद्र (उ.प्र.)_`;

    window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank');
  };

  const handlePrintSlip = () => {
    triggerHaptic([100]);
    window.print();
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName || !leadMobile || !leadDistrict) {
      alert('कृपया नाम, मोबाइल नंबर और ज़िला सही से भरें।');
      return;
    }
    if (!hasConsent) {
      alert('कृपया सहमति बॉक्स पर टिक करें।');
      return;
    }

    triggerHaptic([100, 50, 100]);
    const serviceTitle = targetLeadService ? targetLeadService.title : 'सामान्य सरकारी सेवा सहायता';
    const serviceCategory = targetLeadService ? targetLeadService.category : 'GENERAL';

    const createdLead = await LeadManager.saveLead({
      name: leadName,
      mobile: leadMobile,
      district: leadDistrict,
      serviceTitle,
      serviceCategory
    });

    setSubmittedRefId(createdLead.referenceId);
    setLeadSubmittedSuccess(true);
    const successSpeech = `धन्यवाद ${leadName} जी! आपका सहायता अनुरोध संदर्भ संख्या ${createdLead.referenceId} के साथ सुरक्षित दर्ज हो गया है।`;
    speak(successSpeech);
  };

  const openLeadCaptureForService = (service?: GovServiceItem) => {
    triggerHaptic([80]);
    setTargetLeadService(service || null);
    setLeadSubmittedSuccess(false);
    setShowLeadModal(true);
    const msg = `फॉर्म भरने में सहायता हेतु अपना नाम, मोबाइल और ज़िला दर्ज करें।`;
    speak(msg);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between selection:bg-orange-100 pb-20 md:pb-0">
      {/* 1. शीर्ष आधिकारिक हेडर */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="w-9 h-9 sm:w-11 sm:h-11 bg-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-black text-lg sm:text-xl shadow-xs">
              से
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="text-sm sm:text-lg font-black text-slate-900 leading-tight tracking-tight">
                  सर्वसेतु AI
                </h1>
                <span className="text-[9px] sm:text-[10px] font-black uppercase bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded-md">
                  DPI Gateway
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                <span className="truncate">174+ प्रमाणित .GOV.IN सेवाएं</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => openLeadCaptureForService()}
              className="hidden md:flex px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black items-center gap-1.5 transition active:scale-95 shadow-xs"
            >
              <Headphones className="w-4 h-4 text-emerald-100" />
              <span>फॉर्म सहायता केंद्र</span>
            </button>

            <button
              onClick={() => {
                triggerHaptic([80]);
                setShowHelplineDrawer(true);
              }}
              className="hidden sm:flex px-3 py-2 bg-red-50 hover:bg-red-100 border border-red-200 text-red-700 rounded-xl text-xs font-black items-center gap-1.5 transition active:scale-95 shadow-xs"
            >
              <PhoneCall className="w-4 h-4 text-red-600 animate-pulse" />
              <span>हेल्पलाइन 1930</span>
            </button>

            <div className="relative">
              <select
                value={selectedStateCode}
                onChange={(e) => handleStateChange(e.target.value)}
                className="appearance-none bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-900 text-[11px] sm:text-xs font-black py-1.5 sm:py-2 pl-7 sm:pl-8 pr-6 sm:pr-7 rounded-xl cursor-pointer focus:outline-none focus:border-orange-500 shadow-xs transition"
              >
                <option value="UP">🏛️ उत्तर प्रदेश (UP)</option>
                <option value="CENTRAL">🇮🇳 केवल केंद्र सरकार</option>
              </select>
              <MapPin className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-orange-600 absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              <ChevronDown className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-slate-500 absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>
      </header>

      {/* 2. मुख्य कंटेनर */}
      <main className="max-w-7xl w-full mx-auto px-3 sm:px-6 py-4 sm:py-6 flex-1 space-y-4 sm:space-y-6">
        {/* डिजिटल मित्र लाइव वॉइस स्टेटस कार्ड */}
        <section className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-slate-200 shadow-xs space-y-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${isSpeaking ? 'bg-orange-500 animate-ping' : 'bg-emerald-500'}`} />
              <span className="text-[11px] sm:text-xs font-black tracking-wider uppercase text-emerald-700 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-600" /> 
                {isSpeaking ? 'डिजिटल मित्र बोल रहा है...' : 'डिजिटल मित्र वॉयस साथी सक्रिय है'}
              </span>
            </div>
            <div className="flex items-center gap-1 text-[10px] sm:text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-xl">
              <MapPin className="w-3 h-3 text-orange-600 shrink-0" />
              <span>संस्थापक: <strong>विकास कुमार मिश्रा</strong> (रॉबर्ट्सगंज, सोनभद्र)</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
            <p className="text-xs sm:text-sm md:text-base font-bold text-slate-800 leading-relaxed flex items-center gap-2">
              {isSpeaking && <Radio className="w-4 h-4 text-orange-600 animate-pulse shrink-0" />}
              <span>"{voiceBriefing}"</span>
            </p>

            <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
              {isSpeaking ? (
                <button
                  onClick={stopSpeaking}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 text-xs font-black transition active:scale-95"
                >
                  <VolumeX className="w-4 h-4 text-red-600" /> आवाज़ रोकें
                </button>
              ) : (
                <button
                  onClick={() => speak(voiceBriefing)}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-orange-50 hover:bg-orange-100 text-orange-800 border border-orange-200 text-xs font-black transition active:scale-95"
                >
                  <Volume2 className="w-4 h-4 text-orange-600" /> दोबारा सुनें (Play)
                </button>
              )}
            </div>
          </div>
        </section>

        {/* सर्च व वॉयस इनपुट बार */}
        <div className="relative flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="सेवा का नाम या कागज़ात खोजें (उदा: खतौनी, जाति, आधार, पैन, राशन, बिजली)..."
              className="w-full pl-10 sm:pl-11 pr-9 sm:pr-10 py-3 sm:py-3.5 bg-white border-2 border-slate-200 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-orange-500 shadow-xs transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <button
            onClick={handleVoiceSearch}
            className={`px-3.5 sm:px-5 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl border-2 flex items-center gap-1.5 sm:gap-2 font-black text-xs sm:text-sm shadow-xs transition active:scale-95 shrink-0 ${
              isListening
                ? 'bg-red-50 border-red-500 text-red-700 animate-pulse'
                : 'bg-orange-600 border-orange-600 hover:bg-orange-700 text-white'
            }`}
          >
            {isListening ? <MicOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Mic className="w-4 h-4 sm:w-5 sm:h-5" />}
            <span className="hidden sm:inline">{isListening ? 'सुन रहे हैं...' : 'बोलकर खोजें'}</span>
          </button>
        </div>

        {/* श्रेणियां */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-none -mx-3 px-3 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => handleCategoryChange(cat)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-black shrink-0 transition flex items-center gap-1.5 border ${
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
        <div className="flex items-center justify-between text-[11px] sm:text-xs font-bold text-slate-500 px-1">
          <span>कुल उपलब्ध सेवाएं: {filteredServices.length}</span>
          <span className="text-emerald-700 font-bold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> 100% सटीक डायरेक्ट लिंक्स
          </span>
        </div>

        {/* 174 सेवाओं का रिस्पॉन्सिव ग्रिड */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-slate-200 hover:border-orange-400 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-2.5">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 block truncate mb-0.5">
                      {service.department}
                    </span>
                    <h2 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-orange-600 transition leading-snug">
                      {service.title}
                    </h2>
                  </div>

                  <button
                    onClick={(e) => speakServiceDetails(service, e)}
                    title="इस सेवा का पूरा विवरण आवाज़ में सुनें"
                    className="p-2 rounded-xl bg-orange-50 hover:bg-orange-100 text-orange-700 border border-orange-200 shrink-0 transition active:scale-90"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-[11px] sm:text-xs text-slate-600 font-medium leading-relaxed line-clamp-2">
                  {service.benefitSummary}
                </p>

                <div className="grid grid-cols-2 gap-2 pt-1 text-[10px] sm:text-[11px] font-bold">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-2 flex items-center gap-1 text-slate-700 min-w-0">
                    <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span className="truncate">{service.estimatedDays}</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-2 flex items-center gap-1 text-slate-700 min-w-0">
                    <Coins className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{service.govtFee}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-slate-100 flex flex-col gap-2 mt-3">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => openServiceModal(service)}
                    className="py-2 sm:py-2.5 px-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-[11px] sm:text-xs font-black transition active:scale-95 flex items-center justify-center gap-1"
                  >
                    <FileText className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                    <span>कागज़ात सूची</span>
                  </button>

                  <a
                    href={service.officialApplyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 sm:py-2.5 px-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-[11px] sm:text-xs font-black transition active:scale-95 flex items-center justify-center gap-1 shadow-xs"
                  >
                    <span>सीधा पोर्टल</span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </div>

                <button
                  onClick={() => openLeadCaptureForService(service)}
                  className="w-full py-1.5 sm:py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-xl text-[10px] sm:text-[11px] font-black transition active:scale-95 flex items-center justify-center gap-1"
                >
                  <Headphones className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>सहायक से कॉल बैक लें</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 3. मोबाइल बॉटम बार */}
      <div className="md:hidden fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 z-40 flex items-center justify-around gap-2 shadow-lg">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex-1 py-2 flex flex-col items-center justify-center text-slate-700 active:scale-95"
        >
          <Home className="w-4 h-4 text-slate-800" />
          <span className="text-[10px] font-black mt-0.5">होम</span>
        </button>

        <button
          onClick={() => openLeadCaptureForService()}
          className="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
        >
          <Headphones className="w-4 h-4 text-emerald-100" />
          <span className="text-[11px] font-black">फॉर्म भरवाएं</span>
        </button>

        <button
          onClick={() => {
            triggerHaptic([80]);
            setShowHelplineDrawer(true);
          }}
          className="flex-1 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
        >
          <PhoneCall className="w-4 h-4 text-red-100 animate-pulse" />
          <span className="text-[11px] font-black">1930 / 1915</span>
        </button>
      </div>

      {/* 4. सेवा विस्तार मोडल */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center sm:p-4">
          <div className="bg-white rounded-t-3xl sm:rounded-3xl max-w-lg w-full max-h-[90vh] sm:max-h-[88vh] flex flex-col shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95">
            <div className="p-4 sm:p-5 border-b border-slate-100 flex items-start justify-between shrink-0">
              <div className="min-w-0 pr-2">
                <span className="text-[11px] font-bold text-orange-600 block mb-0.5 truncate">
                  {selectedService.department} | {selectedService.scope === 'UP_STATE' ? 'उत्तर प्रदेश शासन' : 'भारत सरकार'}
                </span>
                <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                  {selectedService.title}
                </h3>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => speakServiceDetails(selectedService)}
                  title="दोबारा बोलकर सुनें"
                  className="p-2 text-orange-600 hover:bg-orange-50 rounded-xl transition"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => {
                    stopSpeaking();
                    setSelectedService(null);
                  }}
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-5 overflow-y-auto space-y-4 flex-1">
              <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-3.5 space-y-2">
                <div className="flex items-center justify-between text-xs font-black">
                  <span className="text-slate-700">कागज़ात तैयारी मीटर:</span>
                  <span className={readinessMetrics.isReady ? 'text-emerald-700 font-extrabold' : 'text-orange-600'}>
                    {readinessMetrics.percentage}% ({readinessMetrics.checkedCount}/{readinessMetrics.total} तैयार)
                  </span>
                </div>

                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      readinessMetrics.isReady ? 'bg-emerald-500' : 'bg-orange-500'
                    }`}
                    style={{ width: `${readinessMetrics.percentage}%` }}
                  />
                </div>

                {readinessMetrics.isReady ? (
                  <p className="text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> बधाई! सभी दस्तावेज़ तैयार हैं।
                  </p>
                ) : (
                  <p className="text-[11px] font-bold text-slate-500">
                    नीचे दिए गए कागज़ातों पर टिक करें जो आपके पास उपलब्ध हैं:
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-black uppercase text-slate-400 tracking-wider block">
                  आवश्यक दस्तावेज़:
                </span>
                {selectedService.requiredDocuments.map((doc, idx) => {
                  const isChecked = !!checkedDocs[doc.name];
                  return (
                    <button
                      key={idx}
                      onClick={() => toggleDocCheck(doc.name)}
                      className={`w-full p-2.5 sm:p-3 rounded-xl flex items-center justify-between text-xs font-bold border transition text-left ${
                        isChecked
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                          : 'bg-white border-slate-200 text-slate-800 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0 pr-2">
                        {isChecked ? (
                          <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-400 shrink-0" />
                        )}
                        <span className="truncate">{doc.name}</span>
                      </div>
                      {doc.mandatory ? (
                        <span className="text-[9px] font-black bg-red-100 text-red-800 px-1.5 py-0.5 rounded-md shrink-0">
                          अनिवार्य
                        </span>
                      ) : (
                        <span className="text-[9px] font-bold bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded-md shrink-0">
                          वैकल्पिक
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="text-slate-500 font-bold block text-[10px] mb-0.5">सरकारी शुल्क:</span>
                  <span className="font-black text-emerald-700">{selectedService.govtFee}</span>
                </div>
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="text-slate-500 font-bold block text-[10px] mb-0.5">अनुमानित समय:</span>
                  <span className="font-black text-slate-900">{selectedService.estimatedDays}</span>
                </div>
              </div>
            </div>

            <div className="p-3 sm:p-4 border-t border-slate-100 bg-slate-50 shrink-0 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={shareOnWhatsApp}
                  className="py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black transition flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <Share2 className="w-3.5 h-3.5" /> WhatsApp शेयर
                </button>

                <button
                  onClick={handlePrintSlip}
                  className="py-2 px-3 bg-white hover:bg-slate-100 text-slate-800 rounded-xl text-xs font-black transition flex items-center justify-center gap-1.5 border border-slate-200"
                >
                  <Printer className="w-3.5 h-3.5 text-orange-600" /> प्रिंट पर्ची
                </button>
              </div>

              <a
                href={selectedService.officialApplyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 sm:py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs sm:text-sm font-black flex items-center justify-center gap-1.5 shadow-md transition active:scale-95"
              >
                आधिकारिक पोर्टल पर सीधे आवेदन करें
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 5. लीड कैप्चर मोडल */}
      {showLeadModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center sm:p-4">
          <div className="bg-white rounded-t-3xl sm:rounded-3xl max-w-md w-full max-h-[90vh] p-5 space-y-4 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 overflow-y-auto">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center shrink-0">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-black text-slate-900">सहायक से फॉर्म भरवाएं</h3>
                  <span className="text-[11px] text-slate-500 font-bold block truncate max-w-[220px]">
                    {targetLeadService ? targetLeadService.title : 'सरकारी सेवा मार्गदर्शन व सहायता'}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setShowLeadModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {leadSubmittedSuccess ? (
              <div className="p-4 text-center space-y-3.5">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    आधिकारिक पावती रसीद
                  </span>
                  <h4 className="text-base font-black text-slate-900">अनुरोध सुरक्षित दर्ज हुआ!</h4>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-left space-y-1.5 text-xs">
                  <div className="flex justify-between border-b border-slate-200 pb-1">
                    <span className="text-slate-500 font-bold">रेफरेंस टोकन:</span>
                    <span className="font-mono font-black text-orange-600">{submittedRefId}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-1">
                    <span className="text-slate-500 font-bold">आवेदक:</span>
                    <span className="font-black text-slate-900">{leadName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-bold">स्टेटस:</span>
                    <span className="font-black text-emerald-700">सत्यापित एवं कतारबद्ध</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                  आपके विवरण हमारे अधिकृत सहायता डेस्क पर सुरक्षित प्रेषित कर दिए गए हैं। प्रतिनिधि 24 कार्य-घंटों के भीतर आपसे संपर्क करेंगे।
                </p>

                <button
                  onClick={() => {
                    setShowLeadModal(false);
                    setLeadSubmittedSuccess(false);
                  }}
                  className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-black transition active:scale-95 shadow-xs"
                >
                  रसीद बंद करें (Done)
                </button>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">आपका नाम:</label>
                  <input
                    type="text"
                    required
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    placeholder="उदा. राहुल शर्मा"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">मोबाइल नंबर (WhatsApp):</label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={leadMobile}
                    onChange={(e) => setLeadMobile(e.target.value)}
                    placeholder="उदा. 9876543210"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">ज़िला व राज्य:</label>
                  <input
                    type="text"
                    required
                    value={leadDistrict}
                    onChange={(e) => setLeadDistrict(e.target.value)}
                    placeholder="उदा. सोनभद्र, उत्तर प्रदेश"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div
                  onClick={() => setHasConsent(!hasConsent)}
                  className="flex items-start gap-2 p-2 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer"
                >
                  <div className="mt-0.5">
                    {hasConsent ? (
                      <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                    ) : (
                      <Square className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </div>
                  <span className="text-[10px] font-bold text-slate-600 leading-tight">
                    मैं योजना जानकारी व सहायता हेतु सर्वसेतु अधिकृत प्रतिनिधि द्वारा संपर्क की सहमति देता/देती हूँ।
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-black transition active:scale-95 shadow-md flex items-center justify-center gap-1.5"
                >
                  कॉल बैक अनुरोध सबमिट करें
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 6. आपातकालीन हेल्पलाइन हब मोडल */}
      {showHelplineDrawer && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center sm:p-4">
          <div className="bg-white rounded-t-3xl sm:rounded-3xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-5 space-y-3 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95">
            <div className="flex items-start justify-between border-b border-slate-100 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-red-100 text-red-700 flex items-center justify-center shrink-0">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-black text-slate-900">राष्ट्रीय हेल्पलाइन हब</h3>
                  <span className="text-[10px] sm:text-xs text-slate-500 font-bold">1-टैप डायरेक्ट डायलिंग</span>
                </div>
              </div>
              <button
                onClick={() => setShowHelplineDrawer(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              {[
                { number: '1930', name: 'राष्ट्रीय वित्तीय साइबर अपराध', subtitle: 'ऑनलाइन बैंक/UPI ठगी तुरंत फ्रीज' },
                { number: '1915', name: 'राष्ट्रीय उपभोक्ता हेल्पलाइन', subtitle: 'कंपनी व ऑनलाइन शॉपिंग धोखाधड़ी' },
                { number: '14555', name: 'आयुष्मान भारत सहायता', subtitle: '₹5 लाख मुफ्त अस्पताल इलाज जानकारी' },
                { number: '1912', name: 'विद्युत आपातकालीन सेवा', subtitle: 'बिजली फॉल्ट व नया कनेक्शन' },
                { number: '181', name: 'महिला हेल्पलाइन (सखी)', subtitle: '24 घंटे विधिक व पुलिस सुरक्षा' },
                { number: '1076', name: 'मुख्यमंत्री जनसुनवाई', subtitle: 'सरकारी दफ्तरों में अटके कार्यों की शिकायत' }
              ].map((item) => (
                <div
                  key={item.number}
                  className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between gap-2"
                >
                  <div>
                    <span className="font-mono font-black text-sm text-red-600 block">{item.number}</span>
                    <span className="text-xs font-black block text-slate-900">{item.name}</span>
                    <span className="text-[10px] font-bold text-slate-600 block">{item.subtitle}</span>
                  </div>

                  <a
                    href={`tel:${item.number}`}
                    onClick={() => triggerHaptic([100])}
                    className="p-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-black shrink-0 flex items-center gap-1 shadow-xs transition active:scale-95"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                    <span>कॉल</span>
                  </a>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowHelplineDrawer(false)}
              className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition"
            >
              बंद करें
            </button>
          </div>
        </div>
      )}

      {/* 7. कानूनी नियम एवं नीतियां मोडल */}
      {showLegalModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center sm:p-4">
          <div className="bg-white rounded-t-3xl sm:rounded-3xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-5 space-y-4 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 text-xs text-slate-700">
            <div className="flex items-start justify-between border-b border-slate-100 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black">
                  ⚖️
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-black text-slate-900">कानूनी नियम एवं नीतियां</h3>
                  <span className="text-[10px] text-slate-500 font-bold">DPDP Act 2023 एवं IT Act 2000 अनुपालन</span>
                </div>
              </div>
              <button
                onClick={() => setShowLegalModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 leading-relaxed">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <span className="font-black text-slate-900 block">1. डेटा सुरक्षा एवं गोपनीयता (DPDP Act 2023):</span>
                <p>
                  नागरिकों द्वारा फॉर्म में दी गई जानकारी (नाम, संपर्क, ज़िला) केवल संबंधित सरकारी सेवा की आवेदन सहायता एवं मार्गदर्शन हेतु सुरक्षित रखी जाती है। यह जानकारी किसी भी तृतीय पक्ष को विज्ञापनों हेतु बेची नहीं जाती।
                </p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <span className="font-black text-slate-900 block">2. मध्यवर्ती सुरक्षा कवच (IT Act Section 79):</span>
                <p>
                  यह पोर्टल केवल आधिकारिक सरकारी पोर्टलों के सीधे लिंक प्रदान करने वाला मध्यस्थ (Intermediary Facilitator) है। किसी भी सरकारी सेवा की स्वीकृति, अस्वीकृति या समय-सीमा संबंधित सरकारी विभाग के अधिकार क्षेत्र में है।
                </p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <span className="font-black text-slate-900 block">3. शिकायत निवारण संपर्क:</span>
                <p>
                  किसी भी डेटा सुधार या शिकायत हेतु नागरिक सहायता डेस्क पर लिखित अनुरोध भेज सकते हैं। डेटा को उपयोगकर्ता के अनुरोध पर 7 कार्यदिवसों में पूरी तरह हटाया जा सकता है।
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowLegalModal(false)}
              className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-black transition active:scale-95"
            >
              समझ गया (Agree & Close)
            </button>
          </div>
        </div>
      )}

      {/* 8. पादलेख */}
      <footer className="bg-white border-t border-slate-200 py-6 px-4 text-center text-xs text-slate-600 space-y-3">
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

        {/* वैधानिक सरकारी अनाबद्धता अस्वीकरण */}
        <div className="max-w-3xl mx-auto p-3 bg-slate-100/90 border border-slate-200 rounded-2xl text-[11px] leading-relaxed text-slate-600 text-left space-y-1">
          <span className="font-black text-slate-800 block">⚖️ वैधानिक अनाबद्धता अस्वीकरण (Non-Affiliation Disclaimer):</span>
          <p>
            सर्वसेतु AI एक स्वतंत्र, गैर-सरकारी डिजिटल पब्लिक गुड्स (DPI) नागरिक सेवा एग्रीगेटर पोर्टल है। यह पोर्टल भारत सरकार या किसी भी राज्य सरकार के किसी मंत्रालय या विभाग से आधिकारिक रूप से संबद्ध नहीं है। इस मंच का उद्देश्य केवल नागरिकों को सार्वजनिक रूप से उपलब्ध आधिकारिक सरकारी पोर्टलों (.gov.in / .nic.in) तक सीधी व सुरक्षित पहुंच प्रदान करना है।
          </p>
          <div className="flex items-center justify-between pt-1 border-t border-slate-200 text-[10px] font-bold text-slate-500">
            <span>DPDP Act 2023 व IT Act 2000 (Rule 3) के तहत पूर्णतः सुरक्षित</span>
            <button
              onClick={() => setShowLegalModal(true)}
              className="text-orange-600 hover:underline"
            >
              कानूनी नियम व नीतियां देखें ➔
            </button>
          </div>
        </div>

        <p className="font-bold text-slate-500">
          डिजिटल इंडिया एवं नेशनल डिजिटल पब्लिक गुड्स (DPI) मानकों के अनुरूप
        </p>
        <p className="text-[11px] text-slate-400">
          सूचना प्रौद्योगिकी अधिनियम 2000 एवं DPDP Act 2023 के तहत 100% सुरक्षित नागरिक मंच
        </p>
      </footer>
    </div>
  );
}
