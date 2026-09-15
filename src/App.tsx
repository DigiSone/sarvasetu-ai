import React, { useState, useMemo, useEffect, Suspense, lazy } from 'react';

// कोड-स्प्लिटिंग: भारी मॉडल्स केवल ज़रूरत पड़ने पर लोड होंगे (Lighthouse 100 LCP)
const AutonomousFilingDesk = lazy(() => import('./components/AutonomousFilingDesk').then(m => ({ default: m.AutonomousFilingDesk })));
const UnifiedCheckoutModal = lazy(() => import('./components/UnifiedCheckoutModal').then(m => ({ default: m.UnifiedCheckoutModal })));

import {
  Search,
  Mic,
  MicOff,
  Volume2,
  FileText,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  ExternalLink,
  PhoneCall,
  Menu,
  X,
  Building2,
  Landmark,
  FileSpreadsheet,
  Download,
  AlertCircle,
  HelpCircle,
  Award,
  Layers,
  HeartHandshake,
  Smartphone,
  Copy,
  Check,
  RotateCcw
} from 'lucide-react';
import { OFFICIAL_GOV_SERVICES } from './data/servicesData';
import { GovServiceItem } from './types/service';
import { VoiceEngine } from './core/voiceEngine';



export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [isListening, setIsListening] = useState(false);
  const [showFilingDesk, setShowFilingDesk] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [selectedServiceForDesk, setSelectedServiceForDesk] = useState<GovServiceItem | null>(null);
  const [fontSizeOffset, setFontSizeOffset] = useState<number>(0);
  const [isCopiedToken, setIsCopiedToken] = useState(false);

  // फ़िल्टर की गई सेवाएं
  const filteredServices = useMemo(() => {
    return OFFICIAL_GOV_SERVICES.filter((service) => {
      const matchesCategory = selectedCategory === 'ALL' || service.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesTitle = service.title.toLowerCase().includes(query);
      const matchesDept = service.department.toLowerCase().includes(query);
      const matchesKeywords = service.voiceKeywords.some((kw) => kw.toLowerCase().includes(query));
      return matchesCategory && (matchesTitle || matchesDept || matchesKeywords);
    });
  }, [searchQuery, selectedCategory]);

  // वॉयस असिस्टेंट हैंडलर
  const handleVoiceSearch = () => {
    VoiceEngine.stop();
    const SpeechRec = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    if (!SpeechRec) {
      alert('आपके ब्राउज़र में आवाज़ की सुविधा उपलब्ध नहीं है। कृपया लिखकर खोजें।');
      return;
    }

    const recognition = new SpeechRec();
    recognition.lang = 'hi-IN';
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (e: any) => {
      const text = e.results[0][0].transcript;
      setSearchQuery(text);
      VoiceEngine.speak(`${text} खोजा जा रहा है`);
    };
    recognition.start();
  };

  const categories = [
    { id: 'ALL', label: 'सभी 174+ सेवाएं', icon: '🏛️' },
    { id: 'LAND_REVENUE', label: 'राजस्व व भूलेख', icon: '🌾' },
    { id: 'CIVIL_CERTIFICATES', label: 'आय/जाति/निवास', icon: '📜' },
    { id: 'IDENTITY_DPI', label: 'पहचान व राशन', icon: '🆔' },
    { id: 'BUSINESS_TAX', label: 'व्यापार व MSME', icon: '💼' },
    { id: 'HEALTH_WELFARE', label: 'स्वास्थ्य व सुरक्षा', icon: '🏥' },
    { id: 'FARMER_AGRICULTURE', label: 'किसान कल्याण', icon: '🚜' },
    { id: 'TRANSPORT', label: 'परिवहन व DL', icon: '🚗' },
    { id: 'FINANCE_PENSION', label: 'पेंशन व सहायता', icon: '💰' }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col selection:bg-orange-500 selection:text-white" style={{ fontSize: `${16 + fontSizeOffset}px` }}>
      
      {/* 1. शीर्ष आधिकारिक सुगम्यता बार (GIGW 3.0 Standard) */}
      <div className="bg-slate-950 border-b border-slate-800/80 px-3 sm:px-6 py-1.5 text-xs text-slate-400 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span className="font-bold text-slate-300">भारत सरकार DPI डिजिटल पब्लिक गुड्स मानक</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5 font-mono text-[11px]">
            <button onClick={() => setFontSizeOffset(Math.max(-2, fontSizeOffset - 1))} className="px-2 py-0.5 hover:text-white transition" title="फ़ॉन्ट छोटा">A-</button>
            <button onClick={() => setFontSizeOffset(0)} className="px-2 py-0.5 hover:text-white border-x border-slate-800 transition" title="सामान्य फ़ॉन्ट">A</button>
            <button onClick={() => setFontSizeOffset(Math.min(3, fontSizeOffset + 1))} className="px-2 py-0.5 hover:text-white transition" title="फ़ॉन्ट बड़ा">A+</button>
          </div>
          <span className="hidden sm:inline-block text-slate-600">|</span>
          <span className="hidden sm:flex items-center gap-1 text-emerald-400 font-bold">
            <ShieldCheck className="w-3.5 h-3.5" /> 100% सत्यापित .GOV.IN
          </span>
        </div>
      </div>

      {/* 2. मुख्य हेडर (प्रीमियम डार्क नेवी + सूक्ष्म ग्लास इफ़ेक्ट) */}
      <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          
          {/* लोगो व ब्रांड */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/20 shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl font-black tracking-tight text-white truncate">
                  सर्वसेतु <span className="text-orange-500">AI</span>
                </h1>
                <span className="text-[10px] font-black uppercase bg-orange-500/10 text-orange-400 border border-orange-500/30 px-2 py-0.5 rounded-full shrink-0">
                  नागरिक डेस्क
                </span>
              </div>
              <p className="text-[11px] font-bold text-slate-400 truncate">
                174+ सरकारी सेवाओं का डिजिटल सुविधा मंच
              </p>
            </div>
          </div>

          {/* हेडर क्विक एक्शन बटन्स */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => {
                setSelectedServiceForDesk(null);
                setShowFilingDesk(true);
              }}
              className="px-3.5 sm:px-4 py-2 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white rounded-xl text-xs font-black flex items-center gap-1.5 shadow-md shadow-orange-500/20 transition active:scale-95"
            >
              <FileText className="w-4 h-4" />
              <span className="hidden xs:inline">आवेदन डेस्क खोलें</span>
              <span className="xs:hidden">डेस्क</span>
            </button>

            <a
              href="tel:1930"
              className="px-3 py-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded-xl text-xs font-black flex items-center gap-1.5 transition"
              title="राष्ट्रीय साइबर अपराध हेल्पलाइन"
            >
              <PhoneCall className="w-3.5 h-3.5 animate-pulse text-rose-500" />
              <span>1930</span>
            </a>
          </div>
        </div>
      </header>

      {/* 3. मुख्य बॉडी कंटेनर */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 space-y-6 pb-28 sm:pb-16">

        {/* 🌟 भव्य विजुअल हीरो सेक्शन (आकर्षक, आमंत्रित करने वाला और साफ-सुथरा) */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700/80 p-6 sm:p-10 shadow-2xl">
          {/* बैकग्राउंड ऑरोरा लाइट इफेक्ट्स */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-orange-400 text-xs font-bold shadow-inner">
              <Sparkles className="w-3.5 h-3.5" />
              <span>उत्तर प्रदेश एवं भारत सरकार की सभी सेवाएं एक जगह</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              बिना किसी दलाली या झंझट के,<br />
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">
                सरकारी दस्तावेज़ व सेवाएं सीधे पाएं
              </span>
            </h2>

            <p className="text-xs sm:text-base text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
              खतौनी, बिजली बिल, आय/जाति प्रमाण पत्र, राशन कार्ड या पेंशन—माइक दबाकर बोलिए या सीधे खोजकर 1-क्लिक में अपना प्रमाणित दस्तावेज़ व आवेदन तैयार करें।
            </p>

            {/* 🔍 मुख्य सर्च बार व वॉयस बटन (अल्ट्रा-फास्ट) */}
            <div className="pt-2 max-w-2xl mx-auto">
              <div className="relative flex items-center bg-slate-950/80 border-2 border-slate-700 focus-within:border-orange-500 rounded-2xl p-1.5 shadow-2xl transition-all">
                <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="खोजें: खतौनी, आय प्रमाण पत्र, बिजली बिल, राशन कार्ड, पेंशन..."
                  className="w-full bg-transparent px-3 py-2.5 text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none font-medium"
                />
                
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="p-1.5 text-slate-400 hover:text-white mr-1">
                    <X className="w-4 h-4" />
                  </button>
                )}

                <button
                  onClick={handleVoiceSearch}
                  className={`px-3.5 sm:px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 transition shrink-0 ${
                    isListening
                      ? 'bg-red-600 text-white animate-pulse'
                      : 'bg-orange-600 hover:bg-orange-500 text-white shadow-md'
                  }`}
                  title="बोलकर खोजें"
                >
                  {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  <span className="hidden sm:inline">{isListening ? 'सुन रहे हैं...' : 'बोलें'}</span>
                </button>
              </div>

              {/* त्वरित सुझाव */}
              <div className="pt-2.5 flex items-center justify-center flex-wrap gap-1.5 text-xs text-slate-400">
                <span className="text-slate-500 font-bold">लोकप्रिय:</span>
                {['खतौनी नकल', 'आय प्रमाण पत्र', 'राशन कार्ड', 'बिजली बिल', 'ड्राइविंग लाइसेंस'].map((tag, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSearchQuery(tag)}
                    className="px-2.5 py-1 bg-slate-800/80 hover:bg-slate-700 hover:text-white border border-slate-700 rounded-lg text-[11px] font-bold transition"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 4. श्रेणी फ़िल्टर बार (स्मूद स्क्रोल) */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black text-slate-400 uppercase tracking-wider">
              विभागीय श्रेणियां
            </span>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
              {filteredServices.length} सेवाएं उपलब्ध
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-black flex items-center gap-2 whitespace-nowrap transition-all shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30 scale-100'
                    : 'bg-slate-800/90 hover:bg-slate-700/80 text-slate-300 border border-slate-700/80'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* 5. सेवाओं का ग्रिड (सटीक, सुंदर और पढ़ने योग्य कार्ड्स) */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-slate-800/70 hover:bg-slate-800 border border-slate-700/80 hover:border-orange-500/50 rounded-3xl p-5 flex flex-col justify-between gap-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl group relative"
            >
              {/* शीर्ष विवरण */}
              <div className="space-y-2.5">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-900/80 text-slate-300 border border-slate-700">
                    {service.department}
                  </span>
                  <span className="text-[10px] font-black text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-2 py-0.5 rounded flex items-center gap-1 shrink-0">
                    <Clock className="w-3 h-3" /> {service.estimatedDays}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-white group-hover:text-orange-400 transition-colors leading-snug">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-400 font-medium leading-relaxed line-clamp-2">
                  {service.benefitSummary}
                </p>

                {/* आवश्यक नियम व शुल्क */}
                <div className="pt-2 border-t border-slate-700/50 flex items-center justify-between text-xs text-slate-300">
                  <div>
                    <span className="text-slate-500 text-[10px] block font-bold">विभागीय शुल्क:</span>
                    <span className="font-black text-orange-400">{service.govtFee}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-500 text-[10px] block font-bold">कागज़ात:</span>
                    <span className="font-bold text-slate-200">{service.requiredDocuments.length} अनिवार्य</span>
                  </div>
                </div>
              </div>

              {/* एक्शन बटन्स (1-क्लिक डेस्क फ़ाइलिंग बनाम सीधा पोर्टल) */}
              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={() => {
                    setSelectedServiceForDesk(service);
                    setShowFilingDesk(true);
                  }}
                  className="flex-1 py-2.5 bg-orange-600 hover:bg-orange-500 text-white rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition active:scale-95 shadow-md shadow-orange-600/20"
                >
                  <FileText className="w-4 h-4" />
                  <span>आवेदन / प्रिंट करें</span>
                </button>

                <a
                  href={service.officialApplyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-900 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 rounded-xl transition"
                  title="आधिकारिक पोर्टल पर देखें"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </section>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-slate-800/40 rounded-3xl border border-slate-800 space-y-3">
            <AlertCircle className="w-10 h-10 text-orange-400 mx-auto" />
            <h4 className="text-lg font-black text-white">कोई सेवा नहीं मिली</h4>
            <p className="text-xs text-slate-400">कृपया अन्य शब्द से खोजें या नीचे दिए गए बटन से सभी सेवाएं देखें।</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('ALL'); }}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold"
            >
              सभी 174 सेवाएं दिखाएं
            </button>
          </div>
        )}

      </main>

      {/* 6. न्यूनतम व शालीन फ़ुटर */}
      <footer className="bg-slate-950 border-t border-slate-800 py-6 px-4 text-center text-xs text-slate-500 space-y-2">
        <p className="font-bold text-slate-400">
          सर्वसेतु AI (SarvaSetu) • भारत सरकार डिजिटल पब्लिक गुड्स मानक अनुरूप
        </p>
        <p className="text-[11px] text-slate-600">
          परिकल्पना एवं निर्माण: <span className="text-slate-400 font-bold">विकास कुमार मिश्रा</span> (रॉबर्ट्सगंज) • सर्वाधिकार सुरक्षित
        </p>
      </footer>

      {/* 7. मोबाइल बॉटम स्टिकी नेविगेशन बार */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 px-4 py-2 flex items-center justify-around shadow-2xl">
        <button
          onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex flex-col items-center gap-1 text-slate-400 hover:text-white"
        >
          <Sparkles className="w-4 h-4 text-orange-500" />
          <span className="text-[10px] font-bold">होम</span>
        </button>

        <button
          onClick={() => {
            setSelectedServiceForDesk(null);
            setShowFilingDesk(true);
          }}
          className="px-4 py-2 bg-orange-600 text-white rounded-2xl font-black text-xs flex items-center gap-1.5 shadow-lg shadow-orange-600/30 active:scale-95 -mt-3"
        >
          <FileText className="w-4 h-4" />
          <span>नागरिक डेस्क</span>
        </button>

        <a
          href="tel:1930"
          className="flex flex-col items-center gap-1 text-rose-400"
        >
          <PhoneCall className="w-4 h-4" />
          <span className="text-[10px] font-bold">1930 फ्रॉड</span>
        </a>
      </nav>

      {/* 8. ऑटोनॉमस नागरिक डेस्क मोडल */}
      <Suspense fallback={<div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center text-white font-bold text-xs">नागरिक सुविधा डेस्क लोड हो रही है...</div>}>
        {showFilingDesk && (
        <AutonomousFilingDesk
          services={OFFICIAL_GOV_SERVICES}
          isOpen={showFilingDesk}
          onClose={() => setShowFilingDesk(false)}
        />
      )}

      {/* 9. Z++ पेमेंट मोडल */}
      <Suspense fallback={null}>
        {showCheckoutModal && (
        <UnifiedCheckoutModal
          isOpen={showCheckoutModal}
          onClose={() => setShowCheckoutModal(false)}
          citizenName="आवेदक नागरिक"
          citizenMobile="9876543210"
          serviceTitle="सामान्य नागरिक सेवा सत्यापन"
          onPaymentComplete={() => setShowCheckoutModal(false)}
        />
      )}

      </Suspense>
      </Suspense>
    </div>
  );
}
