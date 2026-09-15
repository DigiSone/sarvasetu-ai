import React, { useState } from 'react';
import { X, ShieldCheck, Smartphone, Building2, CheckCircle2, Copy, Lock, HeartHandshake, FileCheck } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-end sm:items-center justify-center sm:p-4">
      <div className="bg-white rounded-t-3xl sm:rounded-3xl max-w-md w-full p-5 space-y-4 shadow-2xl border border-slate-200 text-slate-900">
        <div className="flex items-center justify-between border-b pb-2.5">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-emerald-600" />
            <h3 className="text-sm font-black">सर्वसेतु AI सुरक्षित गेटवे (₹9)</h3>
          </div>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-800"><X className="w-5 h-5" /></button>
        </div>

        <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 rounded-xl font-bold text-[10px]">
          <button onClick={() => setActiveTab('UPI')} className={`py-2 rounded-lg ${activeTab === 'UPI' ? 'bg-white text-orange-600 shadow-xs' : 'text-slate-600'}`}>UPI / QR</button>
          <button onClick={() => setActiveTab('BANK')} className={`py-2 rounded-lg ${activeTab === 'BANK' ? 'bg-white text-orange-600 shadow-xs' : 'text-slate-600'}`}>बैंक ट्रांसफर</button>
          <button onClick={() => setActiveTab('BPL')} className={`py-2 rounded-lg ${activeTab === 'BPL' ? 'bg-emerald-700 text-white shadow-xs' : 'text-emerald-800'}`}>BPL ₹0 छूट</button>
        </div>

        {activeTab === 'UPI' && (
          <div className="space-y-3 text-center">
            <img src={dynamicQrUrl} alt="QR" className="w-32 h-32 mx-auto rounded-xl border p-1 bg-white" />
            <a href={upiIntentUrl} className="block py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-black text-xs">
              UPI ऐप से पे करें (₹9)
            </a>
            <button onClick={() => handleSimulatePayment('UPI_INTENT', 'UPI-CONFIRMED')} className="w-full py-2 bg-slate-900 text-white rounded-xl font-bold text-xs">
              {isProcessing ? 'सत्यापन हो रहा...' : 'पेमेंट की पुष्टि करें'}
            </button>
          </div>
        )}

        {activeTab === 'BANK' && (
          <div className="space-y-2 text-xs bg-slate-50 p-3 rounded-xl">
            <div><strong>बैंक:</strong> {PAYMENT_CREDENTIALS_CONFIG.bankAccount.bankName}</div>
            <div><strong>खाता:</strong> {PAYMENT_CREDENTIALS_CONFIG.bankAccount.accountNumber}</div>
            <div><strong>IFSC:</strong> {PAYMENT_CREDENTIALS_CONFIG.bankAccount.ifscCode}</div>
            <button onClick={() => handleSimulatePayment('BANK_TRANSFER', 'BANK-NEFT')} className="w-full mt-2 py-2 bg-slate-900 text-white rounded-xl font-bold text-xs">
              बैंक ट्रांसफर दर्ज करें (₹9)
            </button>
          </div>
        )}

        {activeTab === 'BPL' && (
          <div className="space-y-2 text-xs bg-emerald-50 p-3.5 rounded-xl border border-emerald-300">
            <p className="font-medium text-emerald-950">अंत्योदय / बीपीएल या असमर्थ नागरिकों हेतु शुल्क 100% माफ़ (₹0) है।</p>
            <button onClick={() => handleSimulatePayment('BPL_FREE_WAIVER', 'BPL-WAIVED')} className="w-full py-2.5 bg-emerald-700 text-white rounded-xl font-black text-xs">
              ₹0 में सबमिट करें (BPL Waiver)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
