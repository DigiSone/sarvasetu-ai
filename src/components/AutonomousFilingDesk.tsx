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
  ExternalLink,
  User,
  Phone,
  Mail,
  MapPin,
  FileCheck,
  Camera
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
    VoiceEngine.speak(`कृपया ${currentService.title} के लिए विभागीय विवरण भरें।`);
  };

  const handleProceedFromDeptForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (schema.isDirectLookup || schema.requiredUploads.length === 0) {
      setShowCheckoutModal(true);
    } else {
      setStep(3);
      VoiceEngine.speak(`कृपया आवश्यक मूल कागज़ात संलग्न करें।`);
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
      district: `${district} | डेटा: {${formattedDeptData}} | Docs: ${Object.keys(uploadedFiles).length}`,
      serviceTitle: currentService.title,
      serviceCategory: currentService.category
    });

    setIsSubmitting(false);
    setStep(4);
    VoiceEngine.speak(`बधाई ${name} जी! आपका ${currentService.title} का सम्पूर्ण डोकेट संदर्भ संख्या ${refId} के साथ तैयार हो गया है।`);
  };

  const shareDocketToCitizenWhatsApp = () => {
    const detailsSummary = Object.entries(dynamicFormData).map(([k, v]) => `• ${v}`).join('%0A');
    const msg = `*🏛️ सर्वसेतु AI - आधिकारिक नागरिक आवेदन डोकेट*%0A%0A*रेफरेंस टोकन:* ${generatedRefId}%0A*आवेदक का नाम:* ${name}%0A*मोबाइल:* ${mobile}%0A*सेवा:* ${currentService.title}%0A*विभाग:* ${currentService.department}%0A*सरकारी शुल्क:* ${currentService.govtFee}%0A*समय सीमा:* ${currentService.estimatedDays}%0A%0A*दर्ज किया गया विभागीय विवरण:*%0A${detailsSummary}%0A%0A*आधिकारिक पोर्टल लिंक:* ${currentService.officialApplyUrl}%0A%0A_यह पावती सर्वसेतु AI डिजिटल डेस्क द्वारा सत्यापित है।_`;
    window.open(`https://api.whatsapp.com/send?phone=91${mobile}&text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-end sm:items-center justify-center sm:p-4">
      <div className="bg-white rounded-t-3xl sm:rounded-3xl max-w-2xl w-full max-h-[94vh] flex flex-col shadow-2xl border-2 border-orange-500 animate-in fade-in zoom-in-95 text-slate-900">
        
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between shrink-0 bg-gradient-to-r from-orange-50 to-amber-50 rounded-t-3xl">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-orange-600 text-white flex items-center justify-center font-black shadow-xs">
              <Sparkles className="w-5 h-5 text-amber-200" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-base font-black text-slate-900">AI ऑटोनॉमस नागरिक सुविधा केंद्र</h3>
                <span className="text-[10px] font-black uppercase bg-orange-200 text-orange-950 px-2 py-0.5 rounded-md">
                  सम्पूर्ण प्रक्रिया
                </span>
              </div>
              <span className="text-xs font-bold text-slate-600">
                हर सेवा के वास्तविक विभागीय प्रपत्र के अनुसार शुरू से अंत तक पूर्ण समाधान
              </span>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-white transition shrink-0">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-5 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-[11px] font-black shrink-0 overflow-x-auto">
          <span className={step >= 1 ? 'text-orange-600' : 'text-slate-400'}>1. सेवा व संपर्क</span>
          <span>➔</span>
          <span className={step >= 2 ? 'text-orange-600' : 'text-slate-400'}>2. विभागीय डेटा फ़ॉर्म</span>
          <span>➔</span>
          <span className={step >= 3 ? 'text-orange-600' : 'text-slate-400'}>
            {schema.isDirectLookup ? '3. सत्यापन' : '3. कागज़ात संलग्न'}
          </span>
          <span>➔</span>
          <span className={step >= 4 ? 'text-emerald-700' : 'text-slate-400'}>4. पूर्ण डोकेट व रसीद</span>
        </div>

        <div className="p-5 overflow-y-auto space-y-4 flex-1 text-xs">
          {step === 1 && (
            <form onSubmit={handleNextToDeptForm} className="space-y-4">
              <div className="p-3 bg-orange-50/70 border border-orange-200 rounded-2xl text-slate-700 leading-relaxed font-medium">
                💡 <strong>निर्देश:</strong> जो सरकारी कार्य करवाना है वह चुनें। अगले चरण में उस सेवा के लिए आवश्यक वास्तविक विभागीय डेटा (जैसे खतौनी हेतु तहसील/गाटा संख्या, आय हेतु पिता का नाम/आय) पूछा जाएगा।
              </div>

              <div>
                <label className="text-xs font-bold text-slate-800 block mb-1">आवश्यक सरकारी सेवा चुनें:</label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => {
                    setSelectedServiceId(e.target.value);
                    setDynamicFormData({});
                    setUploadedFiles({});
                  }}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border-2 border-slate-300 rounded-xl text-xs font-black text-slate-900 focus:outline-none focus:border-orange-500"
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
                  <label className="text-xs font-bold text-slate-800 block mb-1">आवेदक (नागरिक) का नाम:</label>
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
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-orange-500 font-mono"
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
                  <label className="text-xs font-bold text-slate-800 block mb-1">जनपद / ज़िला:</label>
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
                className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-black transition active:scale-95 shadow-md flex items-center justify-center gap-2 text-sm"
              >
                <span>आगे बढ़ें: {currentService.title} का फ़ॉर्म भरें</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleProceedFromDeptForm} className="space-y-4">
              <div className="p-3.5 bg-slate-100 border border-slate-200 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-500 block text-[10px]">चयनित सरकारी सेवा:</span>
                  <span className="font-black text-slate-900 text-sm">{currentService.title}</span>
                  <span className="text-[10px] text-slate-600 block">{currentService.department} • समय: {currentService.estimatedDays}</span>
                </div>
                <button type="button" onClick={() => setStep(1)} className="text-xs font-bold text-orange-600 hover:underline">
                  बदलें ↺
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between border-b pb-1">
                  <span className="font-black text-slate-900 text-xs uppercase tracking-wider">
                    {schema.isDirectLookup ? '🔍 खोज एवं अभिलेख विवरण दर्ज करें' : '📋 विभागीय आवेदन प्रपत्र विवरण'}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    विभागीय मानक अनुसार
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {schema.formFields.map((field) => (
                    <div key={field.id} className="space-y-1">
                      <label className="text-xs font-bold text-slate-800 block">
                        {field.label}: {field.required && <span className="text-red-500">*</span>}
                      </label>
                      {field.type === 'select' ? (
                        <select
                          required={field.required}
                          value={dynamicFormData[field.id] || field.defaultValue || ''}
                          onChange={(e) => handleDynamicChange(field.id, e.target.value)}
                          className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-orange-500"
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
                          className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-orange-500"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex gap-2">
                <button type="button" onClick={() => setStep(1)} className="w-1/3 py-2.5 bg-slate-100 text-slate-700 rounded-xl font-bold">
                  पीछे जाएं
                </button>
                <button type="submit" className="flex-1 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-black text-xs transition active:scale-95 shadow-md flex items-center justify-center gap-2 text-sm">
                  <span>{schema.isDirectLookup || schema.requiredUploads.length === 0 ? 'सत्यापित करें व अंतिम डोकेट जनरेट करें' : 'अगला: आवश्यक कागज़ात संलग्न करें'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="p-3 bg-orange-50 border border-orange-200 rounded-2xl">
                <span className="font-black text-orange-950 block text-xs mb-0.5">आवश्यक दस्तावेज़ संकलन:</span>
                <p className="text-[11px] text-slate-600">इस सेवा के लिए केवल निम्नलिखित मूल कागज़ातों की फोटो या फाइल संलग्न करना अनिवार्य है:</p>
              </div>

              <div className="space-y-2.5">
                {schema.requiredUploads.map((docName, idx) => {
                  const isUploaded = !!uploadedFiles[docName];
                  return (
                    <div key={idx} className={`p-3.5 rounded-2xl border flex items-center justify-between gap-3 ${isUploaded ? 'bg-emerald-50 border-emerald-300' : 'bg-white border-slate-200'}`}>
                      <div className="min-w-0 flex-1">
                        <span className="font-bold text-slate-900 block truncate">{docName}</span>
                        <span className="text-[10px] text-slate-500 block truncate mt-0.5">
                          {isUploaded ? `✓ संलग्न: ${uploadedFiles[docName]}` : 'कैमरे से फोटो लें अथवा PDF/फोटो चुनें'}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <label className="px-3 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-[11px] font-bold cursor-pointer transition active:scale-95 flex items-center gap-1 shadow-xs">
                          <Camera className="w-3.5 h-3.5 text-amber-300" />
                          <span>कैमरा</span>
                          <input type="file" accept="image/*" capture="environment" onChange={(e) => handleFileUpload(docName, e)} className="hidden" />
                        </label>
                        <label className="px-3 py-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded-xl text-[11px] font-bold cursor-pointer transition active:scale-95 flex items-center gap-1 shadow-xs">
                          <UploadCloud className="w-3.5 h-3.5 text-orange-600" />
                          <span>फ़ाइल</span>
                          <input type="file" accept="image/*,.pdf" onChange={(e) => handleFileUpload(docName, e)} className="hidden" />
                        </label>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button type="button" onClick={() => setStep(2)} className="w-1/3 py-2.5 bg-slate-100 text-slate-700 rounded-xl font-bold">
                  पीछे जाएं
                </button>
                <button type="button" onClick={() => setShowCheckoutModal(true)} disabled={isSubmitting} className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-black transition active:scale-95 shadow-md flex items-center justify-center gap-2 text-sm">
                  <FileCheck className="w-4 h-4 text-emerald-200" />
                  <span>{isSubmitting ? 'प्रक्रिया पूर्ण हो रही...' : 'सत्यापन व सम्पूर्ण डोकेट जनरेट करें'}</span>
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 border-2 border-emerald-300 rounded-2xl text-center space-y-1">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-base font-black text-slate-900">सम्पूर्ण प्रक्रिया 100% पूर्ण एवं सत्यापित!</h4>
                <p className="text-xs text-slate-600">सभी विभागीय प्रविष्टियों के साथ आधिकारिक आवेदन डोकेट तैयार हो चुका है।</p>
              </div>

              <div id="printable-docket" className="p-5 bg-white border-2 border-slate-300 rounded-2xl space-y-3 font-sans text-slate-900">
                <div className="flex justify-between items-start border-b-2 border-slate-300 pb-3">
                  <div>
                    <h2 className="text-base font-black text-slate-900">सर्वसेतु AI - आधिकारिक नागरिक सेवा डोकेट</h2>
                    <span className="text-[10px] text-slate-500 font-bold block">राष्ट्रीय डिजिटल पब्लिक गुड्स नागरिक सुविधा मंच (DPI)</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-slate-500 block">टोकन संदर्भ संख्या:</span>
                    <span className="font-mono font-black text-orange-600 text-sm">{generatedRefId}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs py-1 border-b border-slate-200">
                  <div><strong>आवेदक का नाम:</strong> {name}</div>
                  <div><strong>मोबाइल नंबर:</strong> {mobile}</div>
                  <div><strong>सेवा:</strong> {currentService.title}</div>
                  <div><strong>विभाग:</strong> {currentService.department}</div>
                  <div><strong>विभागीय समय सीमा (RTS):</strong> {currentService.estimatedDays}</div>
                  <div><strong>सरकारी शुल्क:</strong> {currentService.govtFee}</div>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1 text-xs">
                  <span className="font-black text-slate-900 block text-[11px] mb-1">✓ दर्ज की गई वास्तविक विभागीय प्रविष्टियां:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px]">
                    {Object.entries(dynamicFormData).map(([k, v], idx) => (
                      <div key={idx} className="flex gap-1">
                        <span className="text-slate-500 font-bold">•</span>
                        <span className="font-medium text-slate-900">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-[10px] text-slate-600 pt-1">
                  {schema.isDirectLookup ? (
                    <span><strong>अभिलेख प्रकार:</strong> ऑनलाइन डेटा सत्यापन (कागज़ात अपलोड आवश्यक नहीं)</span>
                  ) : (
                    <span><strong>संलग्न दस्तावेज़ ({Object.keys(uploadedFiles).length}):</strong> {Object.values(uploadedFiles).join(', ') || 'डिजिटल सत्यापन'}</span>
                  )}
                </div>

                <div className="border-t-2 border-slate-300 pt-2 text-[9px] text-slate-500 flex justify-between items-center">
                  <span>सत्यापन तिथि: {new Date().toLocaleDateString('hi-IN')}</span>
                  <span className="font-bold text-slate-700">अधिकृत नागरिक सहायता मुहर: सर्वसेतु AI</span>
                </div>
              </div>

              <div className="p-3 bg-amber-50 border border-amber-200 rounded-2xl flex items-center justify-between gap-2">
                <div>
                  <span className="font-black text-amber-950 block text-xs">आधिकारिक विभागीय पोर्टल लिंक:</span>
                  <span className="text-[10px] text-slate-600 block truncate max-w-[280px]">{currentService.officialApplyUrl}</span>
                </div>
                <a href={currentService.officialApplyUrl} target="_blank" rel="noopener noreferrer" className="px-3 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-black text-xs flex items-center gap-1 shadow-xs shrink-0">
                  <span>पोर्टल पर देखें</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <button type="button" onClick={() => window.print()} className="py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-black text-xs transition flex items-center justify-center gap-2 shadow-sm">
                  <Printer className="w-4 h-4 text-orange-400" />
                  <span>A4 प्रिंट निकालें (Print Docket)</span>
                </button>
                <button type="button" onClick={shareDocketToCitizenWhatsApp} className="py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-black text-xs transition flex items-center justify-center gap-2 shadow-sm">
                  <Share2 className="w-4 h-4 text-white" />
                  <span>नागरिक के WhatsApp पर भेजें</span>
                </button>
              </div>

              <button type="button" onClick={() => { setStep(1); setName(''); setMobile(''); setDynamicFormData({}); setUploadedFiles({}); onClose(); }} className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold">
                प्रक्रिया पूर्ण करें (Done & Close)
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
