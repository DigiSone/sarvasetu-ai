export interface RequiredDoc {
  name: string;
  mandatory: boolean;
}

export interface GovServiceItem {
  id: string;
  title: string;
  department: string;
  ministryOrState: string;
  scope: 'ALL_INDIA' | 'UP_STATE';
  category: 
    | 'IDENTITY' 
    | 'REVENUE_LAND' 
    | 'CERTIFICATES' 
    | 'BUSINESS_TAX' 
    | 'HEALTH_WELFARE' 
    | 'FARMER_AGRICULTURE' 
    | 'TRANSPORT' 
    | 'EDUCATION_CAREER' 
    | 'FINANCE_LEGAL';
  benefitSummary: string;
  officialApplyUrl: string;
  portalName: string;
  estimatedDays: string;
  govtFee: string;
  requiredDocuments: RequiredDoc[];
  voiceKeywords: string[];
}
