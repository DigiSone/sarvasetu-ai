import { PaymentTransaction, PaymentGatewayType } from '../types/payment';
import { PAYMENT_CREDENTIALS_CONFIG } from './paymentConfig';
export class PaymentEngine {
  public static generateTxnId(): string {
    return `TXN-SS-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
  }
  public static buildUpiIntentUrl(amount: number, txnId: string, citizenName: string): string {
    const { vpa, merchantName } = PAYMENT_CREDENTIALS_CONFIG.upi;
    return `upi://pay?pa=${vpa}&pn=${encodeURIComponent(merchantName)}&am=${amount.toFixed(2)}&cu=INR&tn=${encodeURIComponent(`SarvaSetu - ${txnId}`)}&tr=${txnId}`;
  }
  public static generateDynamicQrUrl(amount: number, txnId: string, citizenName: string): string {
    return `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(this.buildUpiIntentUrl(amount, txnId, citizenName))}`;
  }
  public static createTransactionRecord(params: { citizenName: string; citizenMobile: string; serviceTitle: string; amount: number; gateway: PaymentGatewayType; utrOrRefNo?: string; }): PaymentTransaction {
    const txnId = this.generateTxnId();
    return {
      txnId,
      orderId: `ORD-${Date.now()}`,
      citizenName: params.citizenName,
      citizenMobile: params.citizenMobile,
      serviceTitle: params.serviceTitle,
      amount: params.amount,
      gateway: params.gateway,
      utrOrRefNo: params.utrOrRefNo || `AUTO-${Date.now().toString(36).toUpperCase()}`,
      status: params.gateway === 'BPL_FREE_WAIVER' ? 'WAIVED' : 'SUCCESS',
      timestamp: new Date().toISOString(),
      checksum: `Z++SHA256-${Date.now().toString(16).toUpperCase()}`
    };
  }
}
