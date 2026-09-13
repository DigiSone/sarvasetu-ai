import { GovServiceItem } from '../types/service';
import { ALL_GOVERNMENT_SERVICES } from '../data/allGovernmentServices';

export interface CategoryTab {
  key: string;
  title: string;
  icon: string;
  count: number;
}

export class DirectoryEngine {
  public static getAllServices(): GovServiceItem[] {
    return ALL_GOVERNMENT_SERVICES;
  }

  // राज्य के अनुसार फ़िल्टर (UP चुनने पर UP + Central दोनों, Central चुनने पर केवल Central)
  public static getServicesByState(stateCode: string): GovServiceItem[] {
    if (stateCode === 'CENTRAL') {
      return ALL_GOVERNMENT_SERVICES.filter((s) => s.scope === 'ALL_INDIA');
    }
    // डिफ़ॉल्ट 'UP' या अन्य: सभी 174 सेवाएं उपलब्ध
    return ALL_GOVERNMENT_SERVICES;
  }

  // सटीक टेक्स्ट सर्च
  public static search(query: string, stateCode: string, category: string): GovServiceItem[] {
    const list = this.getServicesByState(stateCode);
    const cleanQ = query.trim().toLowerCase();

    return list.filter((item) => {
      const matchCat = category === 'ALL' || item.category === category;
      if (!matchCat) return false;

      if (!cleanQ) return true;

      const inTitle = item.title.toLowerCase().includes(cleanQ);
      const inDept = item.department.toLowerCase().includes(cleanQ);
      const inMinistry = item.ministryOrState.toLowerCase().includes(cleanQ);
      const inKeywords = item.voiceKeywords.some((kw) => kw.toLowerCase().includes(cleanQ) || cleanQ.includes(kw.toLowerCase()));

      return inTitle || inDept || inMinistry || inKeywords;
    });
  }

  // शुद्ध वॉइस सर्च (No False Popup)
  public static matchVoiceStrict(spokenText: string, stateCode: string): GovServiceItem | null {
    const cleanText = spokenText.trim().toLowerCase();
    const list = this.getServicesByState(stateCode);

    for (const item of list) {
      for (const kw of item.voiceKeywords) {
        if (cleanText.includes(kw.toLowerCase())) {
          return item;
        }
      }
    }

    for (const item of list) {
      const cleanTitle = item.title.toLowerCase();
      if (cleanText.includes(cleanTitle) || cleanTitle.includes(cleanText)) {
        return item;
      }
    }

    return null;
  }

  // श्रेणियों की सूची
  public static getCategories(stateCode: string): CategoryTab[] {
    const list = this.getServicesByState(stateCode);
    const cats: CategoryTab[] = [
      { key: 'ALL', title: 'सभी सेवाएं', icon: '🏛️', count: list.length },
      { key: 'REVENUE_LAND', title: 'भूमि, खतौनी व आवास', icon: '🏡', count: list.filter((s) => s.category === 'REVENUE_LAND').length },
      { key: 'CERTIFICATES', title: 'नागरिक प्रमाण पत्र', icon: '📜', count: list.filter((s) => s.category === 'CERTIFICATES').length },
      { key: 'IDENTITY', title: 'पहचान (आधार/पैन/DL)', icon: '🪪', count: list.filter((s) => s.category === 'IDENTITY').length },
      { key: 'BUSINESS_TAX', title: 'जीएसटी, व्यापार व टैक्स', icon: '💼', count: list.filter((s) => s.category === 'BUSINESS_TAX').length },
      { key: 'HEALTH_WELFARE', title: 'स्वास्थ्य व सामाजिक सुरक्षा', icon: '🏥', count: list.filter((s) => s.category === 'HEALTH_WELFARE').length },
      { key: 'FARMER_AGRICULTURE', title: 'कृषि, किसान व पशुपालन', icon: '🌾', count: list.filter((s) => s.category === 'FARMER_AGRICULTURE').length },
      { key: 'TRANSPORT', title: 'परिवहन व वाहन सेवा', icon: '🚗', count: list.filter((s) => s.category === 'TRANSPORT').length },
      { key: 'EDUCATION_CAREER', title: 'शिक्षा, परीक्षा व छात्रवृत्ति', icon: '🎓', count: list.filter((s) => s.category === 'EDUCATION_CAREER').length },
      { key: 'FINANCE_LEGAL', title: 'पेंशन, बचत, पुलिस व कानूनी', icon: '⚖️', count: list.filter((s) => s.category === 'FINANCE_LEGAL').length }
    ];

    return cats.filter((c) => c.count > 0 || c.key === 'ALL');
  }
}
