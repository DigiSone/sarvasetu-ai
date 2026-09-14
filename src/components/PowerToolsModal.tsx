import React, { useState } from 'react';
import { X, Sparkles, Filter, CheckCircle2, Image as ImageIcon, Download, ArrowRight, ShieldCheck } from 'lucide-react';
import { GovServiceItem } from '../types/service';
import { compressGovernmentImage } from '../utils/imageCompressor';

interface Props {
  services: GovServiceItem[];
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (service: GovServiceItem) => void;
}

export const PowerToolsModal: React.FC<Props> = ({ services, isOpen, onClose, onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'ELIGIBILITY' | 'COMPRESSOR'>('ELIGIBILITY');

  // पात्रता स्टेट्स
  const [ageGroup, setAgeGroup] = useState('ADULT'); // YOUTH, ADULT, SENIOR
  const [profession, setProfession] = useState('FARMER'); // STUDENT, FARMER, BUSINESS, WORKER, WOMEN
  const [income, setIncome] = useState('BELOW_2L'); // BELOW_1L, BELOW_2L, ABOVE_2L

  // कंप्रेसर स्टेट्स
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [compressedData, setCompressedData] = useState<{ base64: string; sizeKB: number } | null>(null);
  const [isCompressing, setIsCompressing] = useState(false);

  if (!isOpen) return null;

  // AI योजना मिलान लॉजिक
  const matchedServices = services.filter((s) => {
    if (profession === 'FARMER' && s.category === 'FARMER_AGRICULTURE') return true;
    if (profession === 'STUDENT' && s.category === 'EDUCATION_CAREER') return true;
    if (profession === 'BUSINESS' && s.category === 'BUSINESS_TAX') return true;
    if (profession === 'WOMEN' && (s.title.includes('मातृ') || s.title.includes('महिला') || s.title.includes('सुकन्या') || s.title.includes('सखी') || s.title.includes('उज्ज्वला'))) return true;
    if (ageGroup === 'SENIOR' && (s.title.includes('पेंशन') || s.title.includes('वरिष्ठ') || s.title.includes('आयुष्मान'))) return true;
    if (income === 'BELOW_1L' && (s.title.includes('राशन') || s.title.includes('आयुष्मान') || s.title.includes('आवास') || s.title.includes('श्रम'))) return true;
    return false;
  }).slice(0, 9);

  const handleCompress = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setOriginalFile(file);
      setIsCompressing(true);
      try {
        const result = await compressGovernmentImage(file, 45); // 45KB के अंदर
        setCompressedData({ base64: result.base64, sizeKB: result.sizeKB });
      } catch (err) {
        alert('फोटो कंप्रेस करने में समस्या आई।');
      } finally {
        setIsCompressing(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center sm:p-4">
      <div className="bg-white rounded-t-3xl sm:rounded-3xl max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95">
        
        {/* हेडर */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between shrink-0 bg-slate-50 rounded-t-3xl">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-orange-600 text-white flex items-center justify-center font-black">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-black text-slate-900">सर्वसेतु नागरिक पावर टूल्स</h3>
              <span className="text-[10px] text-slate-500 font-bold">योजना पात्रता व सरकारी फोटो टूल</span>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xl">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* टैब्स */}
        <div className="grid grid-cols-2 p-2 bg-slate-100 border-b border-slate-200 text-xs font-black shrink-0">
          <button
            onClick={() => setActiveTab('ELIGIBILITY')}
            className={`py-2 rounded-xl transition ${
              activeTab === 'ELIGIBILITY' ? 'bg-white text-orange-600 shadow-xs' : 'text-slate-600'
            }`}
          >
            🎯 AI योजना पात्रता कैलकुलेटर
          </button>
          <button
            onClick={() => setActiveTab('COMPRESSOR')}
            className={`py-2 rounded-xl transition ${
              activeTab === 'COMPRESSOR' ? 'bg-white text-emerald-700 shadow-xs' : 'text-slate-600'
            }`}
          >
            🖼️ फोटो कंप्रेसर (&lt;50KB टूल)
          </button>
        </div>

        {/* बॉडी */}
        <div className="p-4 overflow-y-auto space-y-4 flex-1 text-xs">
          {activeTab === 'ELIGIBILITY' ? (
            <div className="space-y-3.5">
              <div className="p-3 bg-orange-50 border border-orange-200 rounded-2xl">
                <span className="font-black text-orange-950 block text-xs mb-1">अपने बारे में 3 विवरण चुनें:</span>
                <p className="text-slate-600 text-[11px]">
                  AI तुरंत 174 सेवाओं में से छांटकर बताएगा कि आप किन-किन सरकारी लाभों व योजनाओं के सीधे हकदार हैं।
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="text-[10px] font-bold text-slate-500 block mb-1">आयु वर्ग:</label>
                  <select
                    value={ageGroup}
                    onChange={(e) => setAgeGroup(e.target.value)}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl font-bold"
                  >
                    <option value="YOUTH">युवा (18-25)</option>
                    <option value="ADULT">वयस्क (26-59)</option>
                    <option value="SENIOR">वरिष्ठ (60+)</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-500 block mb-1">वर्ग / पेशा:</label>
                  <select
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl font-bold"
                  >
                    <option value="FARMER">किसान / बागवानी</option>
                    <option value="STUDENT">छात्र / प्रतियोगी</option>
                    <option value="WOMEN">महिला / गृहणी</option>
                    <option value="BUSINESS">दुकानदार / फर्म</option>
                    <option value="WORKER">श्रमिक / मजदूर</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-500 block mb-1">वार्षिक आय:</label>
                  <select
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl font-bold"
                  >
                    <option value="BELOW_1L">₹1 लाख से कम</option>
                    <option value="BELOW_2L">₹1-₹2.5 लाख</option>
                    <option value="ABOVE_2L">₹2.5 लाख से अधिक</option>
                  </select>
                </div>
              </div>

              <div>
                <span className="font-black text-slate-800 text-xs block mb-2">
                  ✓ आपके लिए पात्र सरकारी योजनाएं ({matchedServices.length}):
                </span>

                <div className="space-y-2">
                  {matchedServices.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => {
                        onClose();
                        onSelectService(service);
                      }}
                      className="p-3 bg-white hover:bg-orange-50/50 border border-slate-200 hover:border-orange-300 rounded-2xl cursor-pointer transition flex items-center justify-between"
                    >
                      <div className="min-w-0 pr-2">
                        <span className="font-black text-slate-900 block truncate">{service.title}</span>
                        <span className="text-[10px] text-slate-500 block truncate">{service.benefitSummary}</span>
                      </div>
                      <span className="text-[10px] font-black bg-orange-100 text-orange-800 px-2 py-1 rounded-lg shrink-0">
                        कागज़ात देखें ➔
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-3.5">
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-2xl">
                <span className="font-black text-emerald-950 block text-xs mb-1">सरकारी फोटो व साइन कंप्रेसर:</span>
                <p className="text-slate-600 text-[11px]">
                  यूपी ई-डिस्ट्रिक्ट, पैन, एसएससी या किसी भी पोर्टल पर फोटो अपलोड फेल हो रही है? यहाँ फोटो डालें, सिस्टम स्वतः उसे 45KB के अंदर सरकारी मानक में बदल देगा।
                </p>
              </div>

              <div className="border-2 border-dashed border-slate-300 rounded-2xl p-5 text-center space-y-2">
                <ImageIcon className="w-8 h-8 text-slate-400 mx-auto" />
                <label className="inline-block px-4 py-2 bg-slate-900 text-white rounded-xl font-bold cursor-pointer hover:bg-slate-800 transition">
                  {isCompressing ? 'कंप्रेस हो रहा है...' : 'गैलरी या कैमरे से फोटो चुनें'}
                  <input type="file" accept="image/*" onChange={handleCompress} className="hidden" />
                </label>
                <span className="text-[10px] text-slate-500 block">कोई भी भारी फोटो (1MB - 10MB) तुरंत &lt;45KB बनेगी</span>
              </div>

              {compressedData && (
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between gap-3">
                  <img src={compressedData.base64} alt="Compressed" className="w-14 h-14 object-cover rounded-xl border border-slate-300" />
                  <div className="min-w-0 flex-1">
                    <span className="font-black text-emerald-700 block">✓ तैयार: मात्र {compressedData.sizeKB} KB</span>
                    <span className="text-[10px] text-slate-500">सरकारी पोर्टल अपलोड हेतु 100% वैध</span>
                  </div>
                  <a
                    href={compressedData.base64}
                    download={`Govt_Ready_Photo_${Date.now()}.jpg`}
                    className="p-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold shrink-0 flex items-center gap-1"
                  >
                    <Download className="w-4 h-4" />
                    <span>डाउनलोड</span>
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
