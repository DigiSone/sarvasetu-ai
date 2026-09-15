import React, { useState } from 'react';
import { X, ShieldCheck, Smartphone, Building2, Copy, Lock, HeartHandshake, FileCheck } from 'lucide-react';
import { PaymentEngine } from '../core/paymentEngine';
import { PLATFORM_PRICING, PAYMENT_CREDENTIALS_CONFIG } from '../core/paymentConfig';
import { PaymentTransaction, PaymentGatewayType } from '../types/payment';
import { VoiceEngine } from '../core/voiceEngine';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  citizenName: string;
  citizenMobile: string;
  serviceTitle: string;
  onPaymentComplete: (transaction: PaymentTransaction) => void;
}

export const UnifiedCheckoutModal: React.FC<Props> = ({ isOpen, onClose, citizenName, citizenMobile, serviceTitle, onPaymentComplete }) => {
  const [activeTab, setActiveTab] = useState<'UPI' | 'BANK' | 'BPL'>('UPI');
  const [utrInput, setUtrInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;
  const plan = PLATFORM_PRICING.NOMINAL_STANDARD;
  const dynamicTxnId = `TEMP-${Date.now().toString(36).toUpperCase()}`;
  const dynamicQrUrl = PaymentEngine.generateDynamicQrUrl(plan.amount, dynamicTxnId, citizenName);
  const upiIntentUrl = PaymentEngine.buildUpiIntentUrl(plan.amount, dynamicTxnId, citizenName);

  const handleSimulatePayment = (gateway: PaymentGatewayType, refNo?: string) => {
    setIsProcessing(true);
    setTimeout(() => {
      const txn = PaymentEngine.createTransactionRecord({
        citizenName, citizenMobile, serviceTitle,
        amount: gateway === 'BPL_FREE_WAIVER' ? 0 : plan.amount,
        gateway, utrOrRefNo: refNo || utrInput
      });
      setIsProcessing(false);
      onPaymentComplete(txn);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-end sm:items-center justify-center sm:p-4">
      <div className="bg-white rounded-t-3xl sm:rounded-3xl max-w-md w-full p-5 space-y-4 shadow-2xl border-2 border-slate-300 text-slate-900">
        
        {/* हेडर */}
        <div className="flex items-center justify-between border-b pb-2.5">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-emerald-600" />
            <h3 className="text-sm font-black">सर्वसेतु AI सुरक्षित गेटवे (₹9 टोकन)</h3>
          </div>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-800"><X className="w-5 h-5" /></button>
        </div>

        {/* BPL / अंत्योदय 100% निःशुल्क हाईलाइट बैनर */}
        <div className="p-3 bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-300 rounded-2xl flex items-center justify-between gap-2 shadow-xs">
          <div className="space-y-0.5">
            <div className="flex items-center gap-1 text-emerald-950 font-black text-xs">
              <HeartHandshake className="w-4 h-4 text-emerald-700" />
              <span>BPL / अंत्योदय कार्डधारक हैं?</span>
            </div>
            <p className="text-[10px] text-emerald-800 font-medium">निर्धन नागरिकों हेतु यह सेवा 100% निःशुल्क (₹0) है।</p>
          </div>
          <button
            onClick={() => handleSimulatePayment('BPL_FREE_WAIVER', 'BPL-DIRECT-WAIVER')}
            className="px-3 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-black text-xs shadow-xs shrink-0 active:scale-95"
          >
            ₹0 में पूरा करें
          </button>
        </div>

        {/* पेमेंट टैब्स */}
        <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 rounded-xl font-bold text-[10px]">
          <button onClick={() => setActiveTab('UPI')} className={`py-2 rounded-lg transition ${activeTab === 'UPI' ? 'bg-white text-orange-600 shadow-xs font-black' : 'text-slate-600'}`}>UPI / QR</button>
          <button onClick={() => setActiveTab('BANK')} className={`py-2 rounded-lg transition ${activeTab === 'BANK' ? 'bg-white text-orange-600 shadow-xs font-black' : 'text-slate-600'}`}>बैंक खाता</button>
          <button onClick={() => setActiveTab('BPL')} className={`py-2 rounded-lg transition ${activeTab === 'BPL' ? 'bg-emerald-700 text-white shadow-xs font-black' : 'text-emerald-800'}`}>BPL ₹0 विवरण</button>
        </div>

        {activeTab === 'UPI' && (
          <div className="space-y-3 text-center pt-1">
            <img src={dynamicQrUrl} alt="QR" className="w-32 h-32 mx-auto rounded-xl border-2 border-slate-200 p-1 bg-white" />
            <span className="text-[10px] text-slate-500 block">PhonePe, Google Pay, Paytm, BHIM से मात्र ₹9 स्कैन करें</span>
            <a href={upiIntentUrl} className="block py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-black text-xs transition active:scale-95 shadow-sm">
              सीधे UPI ऐप से पे करें (₹9)
            </a>
            <button onClick={() => handleSimulatePayment('UPI_INTENT', 'UPI-CONFIRMED')} className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-xs">
              {isProcessing ? 'सत्यापन हो रहा...' : 'पेमेंट पुष्टि कर डोकेट पाएं'}
            </button>
          </div>
        )}

        {activeTab === 'BANK' && (
          <div className="space-y-2 text-xs bg-slate-50 p-3 rounded-xl border">
            <div><strong>बैंक:</strong> {PAYMENT_CREDENTIALS_CONFIG.bankAccount.bankName}</div>
            <div><strong>खाता:</strong> {PAYMENT_CREDENTIALS_CONFIG.bankAccount.accountNumber}</div>
            <div><strong>IFSC:</strong> {PAYMENT_CREDENTIALS_CONFIG.bankAccount.ifscCode}</div>
            <button onClick={() => handleSimulatePayment('BANK_TRANSFER', 'BANK-NEFT')} className="w-full mt-2 py-2 bg-slate-900 text-white rounded-xl font-bold text-xs">
              बैंक ट्रांसफर दर्ज करें (₹9)
            </button>
          </div>
        )}

        {activeTab === 'BPL' && (
          <div className="space-y-2 text-xs bg-emerald-50 p-3.5 rounded-xl border border-emerald-300 text-emerald-950">
            <p className="font-bold leading-relaxed">सर्वसेतु AI का उद्देश्य अंत्योदय तक पहुंचना है। यदि आप ₹9 शुल्क देने में भी असमर्थ हैं, तो निसंकोच ₹0 में अपना काम करवाएं।</p>
            <button onClick={() => handleSimulatePayment('BPL_FREE_WAIVER', 'BPL-WAIVED')} className="w-full py-2.5 bg-emerald-700 text-white rounded-xl font-black text-xs shadow-xs active:scale-95">
              ₹0 BPL छूट के साथ डोकेट बनाएं
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
