export type ServiceType = 'AYUSHMAN' | 'PAN';

export type StepState =
  | 'HOME'
  | 'GUIDE'
  | 'DOC1_AADHAAR'
  | 'DOC2_SECONDARY'
  | 'BIOMETRIC_SELFIE'
  | 'REVIEW'
  | 'FINAL_RECEIPT';

export interface ApplicationRecord {
  service: ServiceType;
  fullName: string;
  dob: string;
  gender: string;
  maskedAadhaar: string;
  secondaryDocType: string;
  secondaryDocPhoto: string | null;
  selfiePhoto: string | null;
  ackNumber: string;
  submittedAt: string;
  livenessConfidence: number;
}
