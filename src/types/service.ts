export interface RequiredDocument {
  name: string;
  mandatory: boolean;
}

export interface GovServiceItem {
  id: string;
  title: string;
  department: string;
  category: string;
  scope: string;
  govtFee: string;
  estimatedDays: string;
  officialApplyUrl: string;
  benefitSummary: string;
  requiredDocuments: RequiredDocument[];
  voiceKeywords: string[];
}
