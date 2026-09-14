import React, { useState } from 'react';
import {
  X,
  FileText,
  UploadCloud,
  Printer,
  Share2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  User,
  Phone,
  Mail,
  MapPin,
  FileCheck,
  AlertCircle
} from 'lucide-react';
import { GovServiceItem } from '../types/service';
import { LeadManager } from '../core/leadManager';
import { VoiceEngine } from '../core/voiceEngine';

interface Props {
  services: GovServiceItem[];
  isOpen: boolean;
  onClose: () => void;
}

export const AutonomousFilingDesk: React.FC<Props> = ({ services, isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(services[0]?.id || '');
  
  // नागरिक विवरण
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [district, setDistrict] = useState('सोनभद्र, उत्तर प्रदेश');
  
  // दस्तावेज़ फाइलें
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, string>>({});
  const [generatedRefId, setGeneratedRefId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const currentService = services.find(s => s.id === selectedServiceId) || services[0];

  const handleFileUpload = (docName: string, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFiles(prev => ({ ...prev, [docName]: file.name }));
      VoiceEngine.speak(`${docName} संलग्न कर लिया गया है।`);
    }
  };

  const handleNextToDocs = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !mobile) {
      alert('कृपया नाम और मोबाइल नंबर दर्ज करें।');
      return;
    }
    setStep(2);
    VoiceEngine.speak(`कृपया ${currentService.title} के लिए आवश्यक कागज़ातों की फोटो या फाइल संलग्न करें।`);
  };

  const handleGenerateDocket = async () => {
    setIsSubmitting(true);
    const refId = LeadManager.generateRefId();
    setGeneratedRefId(refId);

    // बैकएंड सिंक
    await LeadManager.saveLead({
      name: `${name} [AI-Docket: ${Object.keys(uploadedFiles).length} Docs]`,
      mobile,
      district: `${district} | Email: ${email || 'N/A'}`,
      serviceTitle: currentService.title,
      serviceCategory: currentService.category
    });

    setIsSubmitting(false);
    setStep(3);
    VoiceEngine.speak(`बधाई ${name} जी! आपका आवेदन डोकेट टोकन नंबर ${refId} के साथ तैयार हो चुका है। यहाँ से प्रिंट निकालें।`);
  };

  const shareDocketToCitizenWhatsApp = () => {
    const docsSummary = currentService.requiredDocuments.map((d, i) => `${i + 1}. ${d.name}`).join('%0A');
    const msg = `*🏛️ सर्वसेतु AI - आधिकारिक नागरिक आवेदन डोकेट*%0A%0A*रेफरेंस टोकन:* ${generatedRefId}%0A*आवेदक का नाम:* ${name}%0A*सेवा का नाम:* ${currentService.title}%0A*विभाग:* ${currentService.department}%0A*सरकारी शुल्क:* ${currentService.govtFee}%0A*समय सीमा:* ${currentService.estimatedDays}%0A%0A*संलग्न आवश्यक कागज़ात:*%0A${docsSummary}%0A%0A_यह पावती सर्वसेतु अधिकृत सहायता डेस्क द्वारा सत्यापित है।_`;
    window.open(`https://api.whatsapp.com/send?phone=91${mobile}&text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center sm:p-4">
      <div className="bg-white rounded-t-3xl sm:rounded-3xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95">
        
        {/* शीर्ष पट्टी */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between shrink-0 bg-gradient-to-r from-orange-50 to-amber-50 rounded-t-3xl">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-orange-600 text-white flex items-center justify-center font-black shadow-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-base font-black text-slate-900">AI ऑटोनॉमस नागरिक सुविधा केंद्र</h3>
                <span className="text-[10px] font-black uppercase bg-orange-200 text-orange-900 px-1.5 py-0.5 rounded-md">
                  असिस्टेड फाइलिंग
                </span>
              </div>
              <span className="text-xs font-bold text-slate-600">
                जिन्हें ऑनलाइन भरना नहीं आता, उनके कागज़ात तैयार करने की स्वचालित डेस्क
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-white transition shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* स्टेप्स प्रोग्रेस बार */}
        <div className="px-5 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs font-bold shrink-0">
          <span className={step >= 1 ? 'text-orange-600 flex items-center gap-1' : 'text-slate-400'}>
            1. सेवा व नागरिक विवरण
          </span>
          <span>➔</span>
          <span className={step >= 2 ? 'text-orange-600 flex items-center gap-1' : 'text-slate-400'}>
            2. कागज़ात संकलन (Upload)
          </span>
          <span>➔</span>
          <span className={step >= 3 ? 'text-emerald-700 flex items-center gap-1' : 'text-slate-400'}>
            3. तैयार डोकेट व प्रिंट
          </span>
        </div>

        {/* मोडल बॉडी */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1 text-xs">
          
          {/* चरण 1: सेवा व नागरिक संपर्क विवरण */}
          {step === 1 && (
            <form onSubmit={handleNextToDocs} className="space-y-4">
              <div className="p-3 bg-orange-50/70 border border-orange-200 rounded-2xl text-slate-700 leading-relaxed font-medium">
                💡 <strong>निर्देश:</strong> नागरिक को किस सरकारी योजना या प्रमाण पत्र का काम करवाना है, वह चुनें। शेष सभी प्रपत्र और दस्तावेज़ प्रक्रिया सिस्टम द्वारा स्वतः तैयार की जाएगी।
              </div>

              <div>
                <label className="text-xs font-bold text-slate-800 block mb-1">आवश्यक सरकारी सेवा चुनें:</label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-orange-500"
                >
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title} ({s.department})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-800 block mb-1">नागरिक का पूरा नाम:</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="उदा. राम लखन मौर्य"
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-800 block mb-1">WhatsApp मोबाइल नंबर:</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="उदा. 9876543210"
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-800 block mb-1">ईमेल पता (वैकल्पिक):</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="उदा. citizen@gmail.com"
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-800 block mb-1">ज़िला व निवास स्थान:</label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      placeholder="उदा. सोनभद्र, उत्तर प्रदेश"
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-black transition active:scale-95 shadow-md flex items-center justify-center gap-2"
              >
                आगे बढ़ें: आवश्यक कागज़ात जोड़ें
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* चरण 2: स्मार्ट दस्तावेज़ संकलन */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="p-3 bg-slate-100 border border-slate-200 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-500 block text-[11px]">चयनित सेवा:</span>
                  <span className="font-black text-slate-900 text-sm">{currentService.title}</span>
                </div>
                <button
                  onClick={() => setStep(1)}
                  className="text-xs font-bold text-orange-600 hover:underline"
                >
                  बदलें ↺
                </button>
              </div>

              <div className="space-y-2.5">
                <span className="font-black text-slate-800 uppercase tracking-wider text-[11px] block">
                  इस सेवा के लिए आवश्यक दस्तावेज़ (फोटो खींचें या फाइल चुनें):
                </span>

                {currentService.requiredDocuments.map((doc, idx) => {
                  const isUploaded = !!uploadedFiles[doc.name];
                  return (
                    <div
                      key={idx}
                      className={`p-3 rounded-2xl border flex items-center justify-between gap-3 ${
                        isUploaded ? 'bg-emerald-50 border-emerald-300' : 'bg-white border-slate-200'
                      }`}
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-slate-900 truncate">{doc.name}</span>
                          {doc.mandatory && (
                            <span className="text-[9px] bg-red-100 text-red-800 px-1.5 py-0.2 rounded font-black">
                              अनिवार्य
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-slate-500 block truncate">
                          {isUploaded ? `✓ संलग्न: ${uploadedFiles[doc.name]}` : 'स्पष्ट फोटो या पीडीएफ अपलोड करें'}
                        </span>
                      </div>

                      <label className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-[11px] font-bold cursor-pointer transition active:scale-95 shrink-0 flex items-center gap-1">
                        <UploadCloud className="w-3.5 h-3.5" />
                        <span>{isUploaded ? 'बदलें' : 'अपलोड'}</span>
                        <input
                          type="file"
                          accept="image/*,.pdf"
                          onChange={(e) => handleFileUpload(doc.name, e)}
                          className="hidden"
                        />
                      </label>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={() => setStep(1)}
                  className="w-1/3 py-2.5 bg-slate-100 text-slate-700 rounded-xl font-bold"
                >
                  पीछे जाएं
                </button>
                <button
                  onClick={handleGenerateDocket}
                  disabled={isSubmitting}
                  className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-black transition active:scale-95 shadow-md flex items-center justify-center gap-2"
                >
                  <FileCheck className="w-4 h-4" />
                  <span>{isSubmitting ? 'डोकेट संकलित हो रहा है...' : 'आवेदन डोकेट जनरेट करें'}</span>
                </button>
              </div>
            </div>
          )}

          {/* चरण 3: पूर्ण A4 प्रिंट डोकेट व WhatsApp शेयर */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-1">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-base font-black text-slate-900">आवेदन डोकेट सफलतापूर्वक तैयार!</h4>
                <p className="text-xs text-slate-600">
                  नागरिक को भौतिक प्रिंट पर्ची निकाल कर दें अथवा सीधे उनके WhatsApp/ईमेल पर भेजें।
                </p>
              </div>

              {/* आधिकारिक A4 प्रिंटेबल स्लिप व्यू */}
              <div id="printable-docket" className="p-5 bg-white border-2 border-slate-300 rounded-2xl space-y-3 font-sans text-slate-900">
                <div className="flex justify-between items-start border-b border-slate-300 pb-3">
                  <div>
                    <h2 className="text-base font-black text-slate-900">सर्वसेतु AI - नागरिक सेवा डोकेट</h2>
                    <span className="text-[10px] text-slate-500 font-bold block">
                      राष्ट्रीय डिजिटल पब्लिक गुड्स नागरिक सुविधा मंच (DPI)
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-slate-500 block">टोकन संदर्भ:</span>
                    <span className="font-mono font-black text-orange-600 text-sm">{generatedRefId}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] py-1">
                  <div><strong>आवेदक का नाम:</strong> {name}</div>
                  <div><strong>मोबाइल नंबर:</strong> {mobile}</div>
                  <div><strong>सेवा:</strong> {currentService.title}</div>
                  <div><strong>विभाग:</strong> {currentService.department}</div>
                  <div><strong>सरकारी शुल्क:</strong> {currentService.govtFee}</div>
                  <div><strong>समय सीमा:</strong> {currentService.estimatedDays}</div>
                </div>

                <div className="border-t border-slate-200 pt-2 text-[10px]">
                  <strong>संलग्न किए गए दस्तावेज ({Object.keys(uploadedFiles).length}):</strong>
                  <ul className="list-disc pl-4 mt-1 space-y-0.5 text-slate-700">
                    {currentService.requiredDocuments.map((d, i) => (
                      <li key={i}>
                        {d.name}: {uploadedFiles[d.name] ? `(प्रमाण संलग्न - ${uploadedFiles[d.name]})` : '(कार्यालय सत्यापन अपेक्षित)'}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-slate-300 pt-2 text-[9px] text-slate-500 flex justify-between">
                  <span>सत्यापन तिथि: {new Date().toLocaleDateString('hi-IN')}</span>
                  <span>सर्वसेतु AI ऑटोनॉमस नागरिक प्रणाली</span>
                </div>
              </div>

              {/* एक्शन बटन */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => window.print()}
                  className="py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-black text-xs transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <Printer className="w-4 h-4 text-orange-400" />
                  <span>A4 प्रिंट निकालें (Print Docket)</span>
                </button>

                <button
                  onClick={shareDocketToCitizenWhatsApp}
                  className="py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-black text-xs transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <Share2 className="w-4 h-4 text-white" />
                  <span>नागरिक के WhatsApp पर भेजें</span>
                </button>
              </div>

              <button
                onClick={() => {
                  setStep(1);
                  setName('');
                  setMobile('');
                  setUploadedFiles({});
                  onClose();
                }}
                className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold"
              >
                प्रक्रिया पूर्ण करें (Close)
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
