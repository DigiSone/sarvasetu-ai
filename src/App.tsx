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
  Download,
  Users,
  Compass,
  Home
} from 'lucide-react';

import { GovernmentService } from './core/governmentDirectory';
import { DirectoryEngine, CategorySummary } from './core/directoryEngine';
import { SUPPORTED_STATES, StateConfig } from './core/stateDirectory';
import { LeadManager, CitizenLead } from './core/leadManager';

interface EmergencyLine {
  number: string;
  name: string;
  subtitle: string;
  badge: string;
  color: string;
}

const EMERGENCY_HELPLINES: EmergencyLine[] = [
  {
    number: '1930',
    name: 'राष्ट्रीय वित्तीय साइबर अपराध',
    subtitle: 'ऑनलाइन बैंक / यूपीआई ठगी तुरंत फ्रीज कराने हेतु',
    badge: '24x7 तत्काल अलर्ट',
    color: 'bg-red-50 border-red-200 text-red-700'
  },
  {
    number: '1915',
    name: 'राष्ट्रीय उपभोक्ता हेल्पलाइन',
    subtitle: 'कंपनी, वारंटी व ऑनलाइन शॉपिंग धोखाधड़ी निवारण',
    badge: 'उपभोक्ता मंत्रालय',
    color: 'bg-indigo-50 border-indigo-200 text-indigo-700'
  },
  {
    number: '14555',
    name: 'आयुष्मान भारत सहायता केंद्र',
    subtitle: 'गोल्डन कार्ड व ₹5 लाख मुफ्त अस्पताल इलाज जानकारी',
    badge: 'टोल-फ्री',
    color: 'bg-emerald-50 border-emerald-200 text-emerald-700'
  },
  {
    number: '1912',
    name: 'विद्युत आपातकालीन सेवा',
    subtitle: 'बिजली फॉल्ट, नया कनेक्शन व बिलिंग शिकायत',
    badge: 'डिस्कॉम टोल-फ्री',
    color: 'bg-amber-50 border-amber-200 text-amber-700'
  },
  {
    number: '181',
    name: 'महिला हेल्पलाइन (सखी)',
    subtitle: 'संकटग्रस्त महिलाओं हेतु 24 घंटे विधिक व पुलिस सुरक्षा',
    badge: 'महिला सुरक्षा',
    color: 'bg-rose-50 border-rose-200 text-rose-700'
  },
  {
    number: '1076',
    name: 'मुख्यमंत्री जनसुनवाई हेल्पलाइन',
    subtitle: 'सरकारी दफ्तरों में अटके कार्यों की सीधी मुख्यमंत्री शिकायत',
    badge: 'जन शिकायत',
    color: 'bg-blue-50 border-blue-200 text-blue-700'
  }
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedStateCode, setSelectedStateCode] = useState('UP');
  const [selectedService, setSelectedService] = useState<GovernmentService | null>(null);
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});
  const [isListening, setIsListening] = useState(false);

  // मोडल स्टेट्स
  const [showHelplineDrawer, setShowHelplineDrawer] = useState(false);
  const [showTrustShieldModal, setShowTrustShieldModal] = useState(false);
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [targetLeadService, setTargetLeadService] = useState<GovernmentService | null>(null);

  // फॉर्म इनपुट
  const [leadName, setLeadName] = useState('');
  const [leadMobile, setLeadMobile] = useState('');
  const [leadDistrict, setLeadDistrict] = useState('');
  const [hasConsent, setHasConsent] = useState(true);
  const [leadSubmittedSuccess, setLeadSubmittedSuccess] = useState(false);
  const [leadCount, setLeadCount] = useState(0);

  const [voiceBriefing, setVoiceBriefing] = useState(
    'प्रणाम! सर्वसेतु AI में आपका स्वागत है। इसके संस्थापक विकास कुमार मिश्रा, रॉबर्ट्सगंज, सोनभद्र, उत्तर प्रदेश हैं। बोलकर बताइए या नीचे खोजें: आपको किस सरकारी सेवा या दस्तावेज़ के लिए सीधे आवेदन करना है?'
  );

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
    setLeadCount(LeadManager.getAllLeads().length);
  }, []);

  const triggerHaptic = (pattern: number[]) => {
    if ('vibrate' in navigator) navigator.vibrate(pattern);
  };

  const categories: CategorySummary[] = useMemo(() => DirectoryEngine.getCategories(), []);

  const currentState: StateConfig = useMemo(() => {
    return SUPPORTED_STATES.find((s) => s.code === selectedStateCode) || SUPPORTED_STATES[0];
  }, [selectedStateCode]);

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

  const openServiceModal = (service: GovernmentService) => {
    triggerHaptic([80]);
    const resolved = resolveServiceForState(service);
    setSelectedService(resolved);
    setCheckedDocs({});
    setVoiceBriefing(resolved.voiceBriefing);
    speak(resolved.voiceBriefing);
  };

  const toggleDocCheck = (docName: string) => {
    triggerHaptic([50]);
    setCheckedDocs((prev) => ({ ...prev, [docName]: !prev[docName] }));
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
      alert('कृपया सहायता प्राप्त करने हेतु सहमति बॉक्स पर टिक करें।');
      return;
    }

    triggerHaptic([100, 50, 100]);
    const serviceTitle = targetLeadService ? targetLeadService.title : 'सामान्य सरकारी योजना सहायता';
    const serviceCategory = targetLeadService ? targetLeadService.category : 'GENERAL';

    const createdLead = await LeadManager.saveLead({
      name: leadName,
      mobile: leadMobile,
      district: leadDistrict,
      serviceTitle,
      serviceCategory
    });

    setLeadCount(LeadManager.getAllLeads().length);
    setLeadSubmittedSuccess(true);

    const waUrl = LeadManager.getWhatsAppAlertUrl(createdLead);
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 1000);
  };

  const openLeadCaptureForService = (service?: GovernmentService) => {
    triggerHaptic([80]);
    setTargetLeadService(service || null);
    setLeadSubmittedSuccess(false);
    setShowLeadModal(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between selection:bg-orange-100 pb-20 sm:pb-0">
      {/* 1. शीर्ष आधिकारिक हेडर (100% मोबाइल + लैपटॉप रिस्पॉन्सिव) */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2">
          {/* बायां भाग: लोगो + शीर्षक */}
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
                  DPI
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                <span className="truncate max-w-[140px] sm:max-w-none">100% सत्यापित .GOV.IN गेटवे</span>
              </span>
            </div>
          </div>

          {/* दायां भाग: डेस्कटॉप एक्शन बटन + मोबाइल कॉम्पैक्ट राज्य चयन */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* डेस्कटॉप पर ही दिखने वाले मुख्य बटन */}
            <button
              onClick={() => openLeadCaptureForService()}
              className="hidden md:flex px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black items-center gap-1.5 transition active:scale-95 shadow-xs"
            >
              <Headphones className="w-4 h-4 text-emerald-100" />
              <span>फॉर्म भरवाएं / सहायता</span>
            </button>

            <button
              onClick={() => {
                triggerHaptic([80]);
                setShowHelplineDrawer(true);
              }}
              className="hidden sm:flex px-3 py-2 bg-red-50 hover:bg-red-100 border border-red-200 text-red-700 rounded-xl text-xs font-black items-center gap-1.5 transition active:scale-95 shadow-xs"
            >
              <PhoneCall className="w-4 h-4 text-red-600 animate-pulse" />
              <span>1930 / 1915</span>
            </button>

            {/* राज्य चयन ड्रॉपडाउन (मोबाइल व डेस्कटॉप दोनों के लिए कॉम्पैक्ट) */}
            <div className="relative">
              <select
                value={selectedStateCode}
                onChange={(e) => {
                  setSelectedStateCode(e.target.value);
                  triggerHaptic([80]);
                  const found = SUPPORTED_STATES.find((s) => s.code === e.target.value);
                  if (found) {
                    const msg = `राज्य बदला गया: ${found.hindiName}`;
                    setVoiceBriefing(msg);
                    speak(msg);
                  }
                }}
                className="appearance-none bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-900 text-[11px] sm:text-xs font-black py-1.5 sm:py-2 pl-7 sm:pl-8 pr-6 sm:pr-7 rounded-xl cursor-pointer focus:outline-none focus:border-orange-500 shadow-xs transition"
              >
                {SUPPORTED_STATES.map((state) => (
                  <option key={state.code} value={state.code}>
                    {state.flagEmoji} {state.hindiName}
                  </option>
                ))}
              </select>
              <MapPin className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-orange-600 absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              <ChevronDown className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-slate-500 absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>
      </header>

      {/* 2. मुख्य कंटेनर (Laptop/Desktop पर max-w-7xl और संतुलित स्पेसिंग) */}
      <main className="max-w-7xl w-full mx-auto px-3 sm:px-6 py-4 sm:py-6 flex-1 space-y-4 sm:space-y-6">
        {/* डिजिटल मित्र व संस्थापक घोषणा कार्ड */}
        <section className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-slate-200 shadow-xs space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-100 pb-2.5 sm:pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
              <span className="text-[11px] sm:text-xs font-black tracking-wider uppercase text-emerald-700 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> डिजिटल मित्र साथी | सक्रिय राज्य: {currentState.hindiName}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-xl">
              <MapPin className="w-3 h-3 text-orange-600 shrink-0" />
              <span>निर्माता: <strong>विकास कुमार मिश्रा</strong> (रॉबर्ट्सगंज, सोनभद्र)</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 justify-between">
            <p className="text-xs sm:text-sm md:text-base font-bold text-slate-800 leading-relaxed">
              "{voiceBriefing}"
            </p>
            <button
              onClick={() => speak(voiceBriefing)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-black transition active:scale-95 shrink-0"
            >
              <Volume2 className="w-4 h-4 text-orange-600" /> दोबारा सुनें (Play)
            </button>
          </div>
        </section>

        {/* नागरिक सहायता व कॉल बैक बैनर (100% रिस्पॉन्सिव) */}
        <div className="bg-orange-50/80 border-2 border-orange-200 rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4 shadow-xs">
          <div className="space-y-1">
            <span className="text-[11px] sm:text-xs font-black uppercase text-orange-800 tracking-wider flex items-center gap-1.5">
              <Headphones className="w-3.5 h-3.5 text-orange-600 shrink-0" /> ऑनलाइन फॉर्म भरने या दस्तावेज़ में सहायता चाहिए?
            </span>
            <p className="text-xs sm:text-sm md:text-base font-black text-slate-900">
              हमारे अधिकृत सहायता केंद्र से सीधा मार्गदर्शन या आवेदन में मदद पाएं
            </p>
            <span className="text-[11px] sm:text-xs font-bold text-slate-600 block">
              जीएसटी, पैन, आय-जाति, आयुष्मान, राशन कार्ड, पेंशन या व्यापार लोन का काम आसानी से कराएं।
            </span>
          </div>

          <button
            onClick={() => openLeadCaptureForService()}
            className="w-full md:w-auto px-5 py-2.5 sm:py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl sm:rounded-2xl text-xs font-black transition active:scale-95 flex items-center justify-center gap-2 shadow-xs shrink-0"
          >
            <Users className="w-4 h-4" />
            सहायक से कॉल बैक पाएं
          </button>
        </div>

        {/* एंटी-फ्रॉड सुरक्षा शील्ड बैनर */}
        <div
          onClick={() => {
            triggerHaptic([60]);
            setShowTrustShieldModal(true);
          }}
          className="bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl sm:rounded-2xl p-3 sm:p-3.5 cursor-pointer flex items-center justify-between gap-2.5 transition shadow-xs"
        >
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] sm:text-xs font-black text-emerald-950">आधिकारिक सरकारी पोर्टल सुरक्षा शील्ड (.GOV.IN)</span>
                <span className="text-[9px] sm:text-[10px] bg-emerald-200 text-emerald-900 px-1.5 py-0.2 rounded-md font-bold">सत्यापित</span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold text-emerald-800 block">
                साइबर ठगों से बचें। असली सरकारी वेबसाइट की पहचान जानने के लिए यहाँ छूएं।
              </span>
            </div>
          </div>
          <HelpCircle className="w-4 h-4 text-emerald-700 shrink-0" />
        </div>

        {/* सर्च व वॉयस इनपुट बार */}
        <div className="relative flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="सेवा या कागज़ात खोजें (उदा: आधार, पैन, राशन, खतौनी, बिजली)..."
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

        {/* श्रेणियां (स्मूथ टच स्क्रोलिंग) */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-none -mx-3 px-3 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                triggerHaptic([50]);
                setSelectedCategory(cat.key);
              }}
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
          <span className="flex items-center gap-1 text-emerald-700">
            <CheckCircle2 className="w-3.5 h-3.5" /> राज्य: {currentState.hindiName}
          </span>
        </div>

        {/* सेवाओं का ग्रिड (मोबाइल: 1 कॉलम, टैबलेट: 2 कॉलम, लैपटॉप/डेस्कटॉप: 3 कॉलम) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-slate-200 hover:border-orange-400 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-2.5 sm:space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 block truncate mb-0.5">
                      {service.ministry}
                    </span>
                    <h2 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-orange-600 transition leading-snug">
                      {service.title}
                    </h2>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 px-1.5 py-0.5 rounded-lg shrink-0">
                    .GOV.IN
                  </span>
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

              {/* कार्ड एक्शन बटन */}
              <div className="pt-3 sm:pt-4 border-t border-slate-100 flex flex-col gap-2 mt-3 sm:mt-4">
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

      {/* 3. मोबाइल स्टिकी बॉटम क्विक बार (Sticky Bottom Action Bar on Mobile) */}
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

      {/* 4. सेवा विस्तार मोडल (पूर्णतः रिस्पॉन्सिव + स्टिकी बॉटम एक्शन) */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center sm:p-4">
          <div className="bg-white rounded-t-3xl sm:rounded-3xl max-w-lg w-full max-h-[90vh] sm:max-h-[88vh] flex flex-col shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95">
            {/* मोडल हेडर (Sticky Top) */}
            <div className="p-4 sm:p-5 border-b border-slate-100 flex items-start justify-between shrink-0">
              <div className="min-w-0 pr-2">
                <span className="text-[11px] font-bold text-orange-600 block mb-0.5 truncate">
                  {selectedService.department} | {currentState.hindiName}
                </span>
                <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                  {selectedService.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* मोडल कंटेंट स्क्रॉल एरिया */}
            <div className="p-4 sm:p-5 overflow-y-auto space-y-4 flex-1">
              {/* तैयारी मीटर */}
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
                    <CheckCircle2 className="w-3.5 h-3.5" /> बधाई! आपके पास सभी आवश्यक दस्तावेज़ तैयार हैं।
                  </p>
                ) : (
                  <p className="text-[11px] font-bold text-slate-500">
                    नीचे दी गई सूची में उन कागज़ातों पर टिक करें जो आपके पास उपलब्ध हैं:
                  </p>
                )}
              </div>

              {/* चेकलिस्ट सूची */}
              <div className="space-y-2">
                <span className="text-[11px] font-black uppercase text-slate-400 tracking-wider block">
                  आवश्यक कागज़ात (छूकर टिक करें):
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

              {/* समय व शुल्क */}
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

            {/* मोडल फूटर (हमेशा स्क्रीन पर दिखने वाले एक्शन बटन) */}
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

      {/* 5. लीड कैप्चर व विशेषज्ञ सहायता मोडल */}
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
              <div className="p-4 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-sm sm:text-base font-black text-slate-900">अनुरोध दर्ज हुआ!</h4>
                <p className="text-xs text-slate-600">
                  विवरण सीधे Google Sheet में सुरक्षित दर्ज हो चुके हैं और WhatsApp अलर्ट तैयार हो चुका है।
                </p>
                <button
                  onClick={() => setShowLeadModal(false)}
                  className="w-full py-2.5 bg-slate-900 text-white rounded-xl text-xs font-black transition"
                >
                  पूर्ण (Close)
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
              {EMERGENCY_HELPLINES.map((item) => (
                <div
                  key={item.number}
                  className={`p-3 rounded-xl border flex items-center justify-between gap-2 ${item.color}`}
                >
                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="font-mono font-black text-sm">{item.number}</span>
                      <span className="text-[9px] font-black uppercase bg-white/80 px-1.5 py-0.2 rounded-md border border-black/10">
                        {item.badge}
                      </span>
                    </div>
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

      {/* 7. एंटी-फ्रॉड सुरक्षा शील्ड मोडल */}
      {showTrustShieldModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center sm:p-4">
          <div className="bg-white rounded-t-3xl sm:rounded-3xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-5 space-y-3 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 text-xs">
            <div className="flex items-start justify-between border-b border-slate-100 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-black text-slate-900">असली सरकारी पोर्टल की पहचान</h3>
                  <span className="text-[10px] text-emerald-700 font-bold">नागरिक सुरक्षा दिशा-निर्देश</span>
                </div>
              </div>
              <button
                onClick={() => setShowTrustShieldModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2.5 leading-relaxed text-slate-700">
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
                <span className="font-black text-emerald-950 text-xs block mb-0.5">1. डोमेन नेम हमेशा चेक करें:</span>
                <p>
                  भारत सरकार या राज्य सरकारों की आधिकारिक वेबसाइट का अंत हमेशा <strong>.gov.in</strong> या <strong>.nic.in</strong> से होता है।
                </p>
              </div>

              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-950">
                <span className="font-black text-xs block mb-0.5">2. फर्जी वेबसाइटों से सावधान रहें:</span>
                <p>
                  सरकारी योजना के नाम पर बनी <strong>.com, .org, .xyz</strong> साइटों पर कभी भी पैसे या बैंक का ब्योरा न दें।
                </p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="font-black text-slate-900 text-xs block mb-0.5">3. सर्वसेतु AI की गारंटी:</span>
                <p>
                  सर्वसेतु AI केवल 100% परीक्षित और सत्यापित आधिकारिक सर्वरों के सीधे आवेदन लिंक प्रदान करता है।
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowTrustShieldModal(false)}
              className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black transition active:scale-95"
            >
              समझ गया (सुरक्षित रहें)
            </button>
          </div>
        </div>
      )}

      {/* 8. पादलेख */}
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

        <div className="flex items-center justify-center gap-2 pt-1">
          <button
            onClick={() => LeadManager.exportLeadsToCSV()}
            className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 rounded-lg text-[11px] font-bold flex items-center gap-1.5 transition active:scale-95"
            title="प्राप्त सभी नागरिक लीड्स को एक्सेल/CSV में डाउनलोड करें"
          >
            <Download className="w-3.5 h-3.5 text-slate-600" />
            <span>कुल दर्ज लीड्स ({leadCount}) - Excel/CSV डाउनलोड</span>
          </button>
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
