import { PlatformFeeTier } from '../types/payment';
export const PLATFORM_PRICING: Record<string, PlatformFeeTier> = {
  NOMINAL_STANDARD: { id: 'NOMINAL_STANDARD', name: 'नागरिक सेवा सुविधा शुल्क (न्यूनतम)', amount: 9, description: 'कागज़ात सत्यापन व डिजिटल डोकेट निर्माण', badge: 'लोक-कल्याणकारी' },
  PRIORITY_ASSIST: { id: 'PRIORITY_ASSIST', name: 'त्वरित सहायता डेस्क', amount: 21, description: '24 घंटे में सहायता डेस्क संपर्क व आवेदन', badge: 'प्राथमिकता' }
};
export const PAYMENT_CREDENTIALS_CONFIG = {
  upi: { vpa: 'sarvasetu@upi', merchantName: 'SarvaSetu AI', merchantCode: '0000', enabled: true },
  bankAccount: { bankName: 'भारतीय स्टेट बैंक (SBI)', accountHolderName: 'विकास कुमार मिश्रा / सर्वसेतु AI', accountNumber: 'XXXXXX123456', ifscCode: 'SBIN0000XXX', branchName: 'रॉबर्ट्सगंज, सोनभद्र', enabled: true },
  international: { stripePublicKey: 'pk_live_placeholder', paypalClientId: 'client_live_placeholder', payoneerAccountEmail: 'payoneer@digisone.com', enabled: true },
  security: { encryptionStandard: 'AES-256-GCM / SHA-256', pciDssComplianceMode: true, rbiGuidelinesCompliant: true }
};
