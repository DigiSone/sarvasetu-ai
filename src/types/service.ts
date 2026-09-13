export interface RequiredDoc {
  name: string;
  mandatory: boolean;
}

export interface GovServiceItem {
  id: string;
  title: string;
  department: string;
  ministryOrState: string;
  scope: 'CENTRAL' | 'UP_STATE';
  category: 
    | 'REVENUE_LAND' 
    | 'CERTIFICATES' 
    | 'FOOD_RATION' 
    | 'ELECTRICITY_UTILITY' 
    | 'POLICE_LEGAL' 
    | 'HEALTH_WELFARE' 
    | 'FARMER_AGRICULTURE' 
    | 'BUSINESS_TAX' 
    | 'IDENTITY';
  benefitSummary: string;
  officialApplyUrl: string;
  portalName: string;
  estimatedDays: string;
  govtFee: string;
  requiredDocuments: RequiredDoc[];
  voiceKeywords: string[];
}
