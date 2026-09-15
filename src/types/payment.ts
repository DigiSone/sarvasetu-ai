export type PaymentGatewayType = 'UPI_INTENT' | 'BHARAT_QR' | 'BANK_TRANSFER' | 'STRIPE' | 'PAYPAL' | 'PAYONEER' | 'BPL_FREE_WAIVER';
export type PaymentStatus = 'PENDING' | 'SUCCESS' | 'FAILED' | 'WAIVED';
export interface PaymentTransaction {
  txnId: string;
  orderId: string;
  citizenName: string;
  citizenMobile: string;
  serviceTitle: string;
  amount: number;
  gateway: PaymentGatewayType;
  utrOrRefNo?: string;
  status: PaymentStatus;
  timestamp: string;
  checksum: string;
}
export interface PlatformFeeTier {
  id: string;
  name: string;
  amount: number;
  description: string;
  badge: string;
}
