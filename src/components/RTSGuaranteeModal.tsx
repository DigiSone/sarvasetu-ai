import React from 'react';
import { X, Scale } from 'lucide-react';
import { GovServiceItem } from '../types/service';

interface Props {
  service: GovServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const RTSGuaranteeModal: React.FC<Props> = ({ service, isOpen, onClose }) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center sm:p-4">
      <div className="bg-white rounded-t-3xl sm:rounded-3xl max-w-lg w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 text-xs text-slate-800">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between shrink-0 bg-red-50 rounded-t-3xl">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-red-600 text-white flex items-center justify-center font-black">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-black text-slate-900">सेवा का अधिकार (RTS गारंटी)</h3>
              <span className="text-[10px] text-red-700 font-bold">जनहित गारंटी अधिनियम 2011 कानूनी संरक्षण</span>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xl">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 overflow-y-auto space-y-3 flex-1">
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl">
            <span className="text-slate-500 font-bold block text-[10px]">सेवा:</span>
            <span className="font-black text-slate-900 text-sm">{service.title}</span>
            <div className="flex items-center gap-3 mt-1 text-[11px] font-bold text-slate-600">
              <span>विभागीय समय-सीमा: <strong>{service.estimatedDays}</strong></span>
              <span>•</span>
              <span>सरकारी शुल्क: <strong>{service.govtFee}</strong></span>
            </div>
          </div>

          <div className="space-y-2">
            <span className="font-black text-slate-900 text-xs block">
              ⚖️ नियत समय में कार्य न होने पर अपील प्रक्रिया:
            </span>

            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl space-y-1">
              <span className="font-black text-amber-950 block">1. प्रथम अपील (एसडीएम / तहसीलदार कार्यालय):</span>
              <p className="text-[11px] text-amber-900 leading-relaxed">
                निर्धारित समय समाप्त होने के 30 दिनों के भीतर प्रथम अपीलीय अधिकारी के समक्ष आवेदन करें। 30 दिन में निस्तारण अनिवार्य है।
              </p>
            </div>

            <div className="p-3 bg-red-50 border border-red-200 rounded-xl space-y-1">
              <span className="font-black text-red-950 block">2. द्वितीय अपील (जिलाधिकारी / डीएम महोदय):</span>
              <p className="text-[11px] text-red-900 leading-relaxed">
                प्रथम अपील का समाधान न मिलने पर जिलाधिकारी को द्वितीय अपील करें। दोषी कर्मचारी पर प्रतिदिन ₹250 से ₹5,000 तक जुर्माना लगाया जा सकता है।
              </p>
            </div>

            <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl space-y-1">
              <span className="font-black text-blue-950 block">3. मुख्यमंत्री हेल्पलाइन (1076 जनसुनवाई):</span>
              <p className="text-[11px] text-blue-900 leading-relaxed">
                टोल-फ्री नंबर 1076 पर कॉल कर संदर्भ संख्या दर्ज कराएं। शिकायत का सीधा निवारण मुख्यमंत्री कार्यालय द्वारा कराया जाता है।
              </p>
            </div>
          </div>
        </div>

        <div className="p-3 border-t border-slate-100 bg-slate-50 shrink-0">
          <button
            onClick={onClose}
            className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-black text-xs transition"
          >
            समझ गया (Close)
          </button>
        </div>
      </div>
    </div>
  );
};
