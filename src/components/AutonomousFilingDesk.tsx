import React, { useState } from 'react';
import {
  X,
  FileText,
  Printer,
  Share2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ExternalLink,
  User,
  Phone,
  Mail,
  MapPin,
  Camera,
  UploadCloud,
  FileCheck,
  ShieldCheck,
  QrCode
} from 'lucide-react';
import { GovServiceItem } from '../types/service';
import { LeadManager } from '../core/leadManager';
import { VoiceEngine } from '../core/voiceEngine';
import { getServiceWorkflowSchema } from '../core/serviceFormSchema';
import { UnifiedCheckoutModal } from './UnifiedCheckoutModal';
import { PaymentTransaction } from '../types/payment';

interface Props {
  services: GovServiceItem[];
  isOpen: boolean;
  onClose: () => void;
}

export const AutonomousFilingDesk: React.FC<Props> = ({ services, isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(services[0]?.id || '');
  
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [district, setDistrict] = useState('सोनभद्र, उत्तर प्रदेश');
  
  const [dynamicFormData, setDynamicFormData] = useState<Record<string, string>>({});
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, string>>({});
  const [generatedRefId, setGeneratedRefId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [attachedTxn, setAttachedTxn] = useState<PaymentTransaction | null>(null);

  if (!isOpen) return null;

  const currentService = services.find(s => s.id === selectedServiceId) || services[0];
  const schema = getServiceWorkflowSchema(currentService.id, currentService.title);

  const handleDynamicChange = (fieldId: string, value: string) => {
    setDynamicFormData(prev => ({ ...prev, [fieldId]: value }));
  };

  const handleFileUpload = (docName: string, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFiles(prev => ({ ...prev, [docName]: file.name }));
      VoiceEngine.speak(`${docName} संलग्न हो गया।`);
    }
  };

  const handleNextToDeptForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !mobile) {
      alert('कृपया नाम और मोबाइल नंबर दर्ज करें।');
      return;
    }
    schema.formFields.forEach(f => {
      if (f.defaultValue && !dynamicFormData[f.id]) {
        dynamicFormData[f.id] = f.defaultValue;
      }
    });
    setStep(2);
    VoiceEngine.speak(`कृपया ${currentService.title} का आवश्यक विवरण भरें।`);
  };

  const handleProceedFromDeptForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (schema.isDirectLookup || schema.requiredUploads.length === 0) {
      setShowCheckoutModal(true);
    } else {
      setStep(3);
      VoiceEngine.speak('कृपया आवश्यक मूल कागज़ात संलग्न करें।');
    }
  };

  const handleGenerateDocket = async () => {
    setIsSubmitting(true);
    const refId = LeadManager.generateRefId();
    setGeneratedRefId(refId);

    const formattedDeptData = Object.entries(dynamicFormData)
      .map(([k, v]) => `${k}: ${v}`)
      .join(' | ');

    await LeadManager.saveLead({
      name: `${name} [${currentService.title}]`,
      mobile,
      district: `${district} | डेटा: {${formattedDeptData}}`,
      serviceTitle: currentService.title,
      serviceCategory: currentService.category
    });

    setIsSubmitting(false);
    setStep(4);
    VoiceEngine.speak(`बधाई ${name} जी! आपका ${currentService.title} का अभिलेख सीधे प्रिंट हेतु तैयार है।`);
  };

  const shareDocketWhatsApp = () => {
    const detailsSummary = Object.entries(dynamicFormData).map(([_, v]) => `• ${v}`).join('%0A');
    const msg = `*🏛️ सर्वसेतु AI - आधिकारिक डिजिटल अभिलेख पावती*%0A%0A*रेफरेंस टोकन:* ${generatedRefId}%0A*आवेदक:* ${name}%0A*मोबाइल:* ${mobile}%0A*सेवा:* ${currentService.title}%0A*विभाग:* ${currentService.department}%0A*समय सीमा:* ${currentService.estimatedDays}%0A%0A*प्रमाणित विवरण:*%0A${detailsSummary}%0A%0A_सर्वसेतु AI डिजिटल पब्लिक गुड्स द्वारा आंतरिक रूप से निर्गत_`;
    window.open(`https://api.whatsapp.com/send?phone=91${mobile}&text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-slate-900 text-slate-100 rounded-t-3xl sm:rounded-3xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-700 overflow-hidden animate-in fade-in zoom-in-95">
        
        {/* शीर्ष हेडर */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between shrink-0 bg-slate-950">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-orange-600 text-white flex items-center justify-center font-black">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-black text-white">नागरिक सेवा डेस्क</h3>
              <span className="text-[11px] text-slate-400 font-medium truncate block max-w-[240px] sm:max-w-md">
                {currentService.title}
              </span>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* स्टेप्स इंडिकेटर */}
        <div className="px-4 py-2 bg-slate-950/60 border-b border-slate-800 flex items-center justify-between text-[11px] font-bold shrink-0">
          <span className={step >= 1 ? 'text-orange-400' : 'text-slate-500'}>1. संपर्क</span>
          <span>➔</span>
          <span className={step >= 2 ? 'text-orange-400' : 'text-slate-500'}>2. विभागीय फ़ॉर्म</span>
          <span>➔</span>
          <span className={step >= 3 ? 'text-orange-400' : 'text-slate-500'}>{schema.isDirectLookup ? '3. सत्यापन' : '3. कागज़ात'}</span>
          <span>➔</span>
          <span className={step >= 4 ? 'text-emerald-400' : 'text-slate-500'}>4. सीधा प्रिंट</span>
        </div>

        {/* मुख्य बॉडी (स्क्रोल करने योग्य) */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1 text-xs">
          
          {step === 1 && (
            <form onSubmit={handleNextToDeptForm} className="space-y-3.5">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">सेवा बदलें:</label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => {
                    setSelectedServiceId(e.target.value);
                    setDynamicFormData({});
                    setUploadedFiles({});
                  }}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs font-bold text-white focus:outline-none focus:border-orange-500"
                >
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>{s.title}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">आवेदक का नाम:</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="उदा. राम लखन मौर्य"
                    className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs font-bold text-white focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">मोबाइल नंबर (WhatsApp):</label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="उदा. 9876543210"
                    className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs font-bold text-white focus:outline-none focus:border-orange-500 font-mono"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">ईमेल (वैकल्पिक):</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="उदा. citizen@gmail.com"
                    className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs font-bold text-white focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-800 block mb-1">ज़िला:</label>
                  <input
                    type="text"
                    required
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs font-bold text-white focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-xl text-xs font-black transition active:scale-95 shadow-lg flex items-center justify-center gap-2"
                >
                  <span>आगे बढ़ें: {currentService.title} विवरण भरें</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleProceedFromDeptForm} className="space-y-3.5">
              <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block font-bold">चयनित सेवा:</span>
                  <span className="font-bold text-white text-xs">{currentService.title}</span>
                </div>
                <button type="button" onClick={() => setStep(1)} className="text-xs text-orange-400 font-bold hover:underline">बदलें ↺</button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {schema.formFields.map((field) => (
                  <div key={field.id} className="space-y-1">
                    <label className="text-xs font-bold text-slate-300 block">
                      {field.label}: {field.required && <span className="text-orange-400">*</span>}
                    </label>
                    {field.type === 'select' ? (
                      <select
                        required={field.required}
                        value={dynamicFormData[field.id] || field.defaultValue || ''}
                        onChange={(e) => handleDynamicChange(field.id, e.target.value)}
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs font-bold text-white focus:outline-none focus:border-orange-500"
                      >
                        {field.options?.map((opt, oIdx) => (
                          <option key={oIdx} value={opt}>{opt}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        required={field.required}
                        value={dynamicFormData[field.id] || ''}
                        onChange={(e) => handleDynamicChange(field.id, e.target.value)}
                        placeholder={field.placeholder}
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs font-bold text-white focus:outline-none focus:border-orange-500"
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-2 flex gap-2">
                <button type="button" onClick={() => setStep(1)} className="w-1/3 py-2.5 bg-slate-800 text-slate-300 rounded-xl font-bold">पीछे</button>
                <button type="submit" className="flex-1 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-xl font-black text-xs transition active:scale-95 shadow-lg flex items-center justify-center gap-2">
                  <span>{schema.isDirectLookup || schema.requiredUploads.length === 0 ? 'सत्यापित करें व प्रिंट बनाएं' : 'अगला: आवश्यक कागज़ात'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="space-y-3.5">
              <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                <span className="font-bold text-white block text-xs">आवश्यक साक्ष्य संलग्न करें:</span>
                <p className="text-[11px] text-slate-400">कैमरे से फोटो खींचें या फोन से फाइल चुनें:</p>
              </div>

              <div className="space-y-2">
                {schema.requiredUploads.map((docName, idx) => (
                  <div key={idx} className="p-3 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-between gap-2">
                    <span className="font-bold text-slate-200 text-xs truncate flex-1">{docName}</span>
                    <label className="px-3 py-1.5 bg-slate-900 hover:bg-slate-700 text-orange-400 border border-slate-700 rounded-lg text-xs font-bold cursor-pointer transition flex items-center gap-1 shrink-0">
                      <Camera className="w-3.5 h-3.5" />
                      <span>{uploadedFiles[docName] ? '✓ संलग्न' : 'फोटो लें'}</span>
                      <input type="file" accept="image/*,.pdf" onChange={(e) => handleFileUpload(docName, e)} className="hidden" />
                    </label>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex gap-2">
                <button type="button" onClick={() => setStep(2)} className="w-1/3 py-2.5 bg-slate-800 text-slate-300 rounded-xl font-bold">पीछे</button>
                <button type="button" onClick={() => setShowCheckoutModal(true)} disabled={isSubmitting} className="flex-1 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-xl font-black text-xs transition active:scale-95 shadow-lg flex items-center justify-center gap-2">
                  <span>{isSubmitting ? 'तैयार हो रहा...' : 'सत्यापित करें व प्रिंट बनाएं'}</span>
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-3.5">
              <div className="p-3 bg-emerald-950/40 border border-emerald-500/40 rounded-xl text-center space-y-1">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-sm font-black text-white">दस्तावेज़ पूर्णतः तैयार!</h4>
                <p className="text-[11px] text-slate-400">नीचे दिए गए बटन से सीधे A4 प्रिंट निकालें।</p>
              </div>

              {/* A4 प्रिंट प्रीव्यू */}
              <div id="printable-docket" className="p-4 sm:p-5 bg-white text-slate-900 rounded-2xl space-y-3 font-sans shadow-lg text-xs">
                <div className="flex justify-between items-start border-b pb-2">
                  <div>
                    <h2 className="text-sm font-black text-slate-900 uppercase">
                      {schema.isDirectLookup ? 'डिजिटल अभिलेख सार व सत्यापन प्रपत्र' : 'नागरिक सेवा ई-आवेदन प्रपत्र'}
                    </h2>
                    <span className="text-[10px] text-slate-500 font-bold block">सर्वसेतु AI • राष्ट्रीय डिजिटल पब्लिक गुड्स नेटवर्क</span>
                  </div>
                  <span className="font-mono font-black text-orange-600 text-xs">{generatedRefId}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] border-b pb-2">
                  <div><strong>आवेदक:</strong> {name}</div>
                  <div><strong>मोबाइल:</strong> {mobile}</div>
                  <div><strong>सेवा:</strong> {currentService.title}</div>
                  <div><strong>विभाग:</strong> {currentService.department}</div>
                </div>

                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-black text-slate-800 text-[10px] block">प्रमाणित विभागीय विवरण:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px]">
                    {Object.entries(dynamicFormData).map(([_, v], idx) => (
                      <div key={idx} className="font-medium text-slate-700">• {v}</div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-2 text-[10px] text-slate-500 flex justify-between">
                  <span>दिनांक: {new Date().toLocaleDateString('hi-IN')}</span>
                  <span className="font-bold text-slate-700">डिजिटल मुहर: सर्वसेतु AI</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="py-3 bg-white hover:bg-slate-100 text-slate-900 rounded-xl font-black text-xs transition flex items-center justify-center gap-1.5 shadow-md active:scale-95"
                >
                  <Printer className="w-4 h-4 text-orange-600" />
                  <span>🖨️ सीधे A4 प्रिंट निकालें</span>
                </button>

                <button
                  type="button"
                  onClick={shareDocketWhatsApp}
                  className="py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-black text-xs transition flex items-center justify-center gap-1.5 shadow-md active:scale-95"
                >
                  <Share2 className="w-4 h-4 text-white" />
                  <span>WhatsApp पर भेजें</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => {
                  setStep(1);
                  setName('');
                  setMobile('');
                  setDynamicFormData({});
                  setUploadedFiles({});
                  onClose();
                }}
                className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-400 rounded-xl text-xs font-bold"
              >
                कार्य पूर्ण हुआ / बंद करें
              </button>
            </div>
          )}

        </div>

        <UnifiedCheckoutModal
          isOpen={showCheckoutModal}
          onClose={() => setShowCheckoutModal(false)}
          citizenName={name}
          citizenMobile={mobile}
          serviceTitle={currentService.title}
          onPaymentComplete={(txn) => {
            setAttachedTxn(txn);
            setShowCheckoutModal(false);
            handleGenerateDocket();
          }}
        />

      </div>
    </div>
  );
};
