import { GovServiceItem } from '../types/service';
import { UTTER_PRADESH_SERVICES } from '../data/uttarPradeshServices';
import { CENTRAL_GOVERNMENT_SERVICES } from '../data/centralServices';

export interface CategoryTab {
  key: string;
  title: string;
  icon: string;
  count: number;
}

export class DirectoryEngine {
  // 1. चयनित राज्य के आधार पर शुद्ध सेवाओं की सूची
  public static getServicesByState(stateCode: string): GovServiceItem[] {
    if (stateCode === 'UP') {
      return [...UTTER_PRADESH_SERVICES, ...CENTRAL_GOVERNMENT_SERVICES];
    }
    // अन्य राज्यों के लिए केवल केंद्र की सत्यापित सेवाएं (जब तक उनका मॉड्यूल न जुड़े)
    return CENTRAL_GOVERNMENT_SERVICES;
  }

  // 2. शुद्ध टेक्स्ट व कीवर्ड सर्च (No Loose Fuzzy Mismatches)
  public static search(query: string, stateCode: string, category: string): GovServiceItem[] {
    const list = this.getServicesByState(stateCode);
    const cleanQ = query.trim().toLowerCase();

    return list.filter((item) => {
      const matchCat = category === 'ALL' || item.category === category;
      if (!matchCat) return false;

      if (!cleanQ) return true;

      // सटीक शीर्षक, विभाग व कीवर्ड्स मिलान
      const inTitle = item.title.toLowerCase().includes(cleanQ);
      const inDept = item.department.toLowerCase().includes(cleanQ);
      const inKeywords = item.voiceKeywords.some((kw) => kw.toLowerCase().includes(cleanQ) || cleanQ.includes(kw.toLowerCase()));

      return inTitle || inDept || inKeywords;
    });
  }

  // 3. शुद्ध वॉइस इंटेंट मैचर (उच्च सटीकता)
  public static matchVoiceStrict(spokenText: string, stateCode: string): GovServiceItem | null {
    const cleanText = spokenText.trim().toLowerCase();
    const list = this.getServicesByState(stateCode);

    // 1. सटीक कीवर्ड मिलान
    for (const item of list) {
      for (const kw of item.voiceKeywords) {
        if (cleanText.includes(kw.toLowerCase())) {
          return item;
        }
      }
    }

    // 2. शीर्षक मिलान
    for (const item of list) {
      const cleanTitle = item.title.toLowerCase();
      if (cleanText.includes(cleanTitle) || cleanTitle.includes(cleanText)) {
        return item;
      }
    }

    return null;
  }

  // 4. श्रेणियां
  public static getCategories(stateCode: string): CategoryTab[] {
    const list = this.getServicesByState(stateCode);
    const cats: CategoryTab[] = [
      { key: 'ALL', title: 'सभी सेवाएं', icon: '🏛️', count: list.length },
      { key: 'REVENUE_LAND', title: 'जमीन व खतौनी', icon: '🌾', count: list.filter((s) => s.category === 'REVENUE_LAND').length },
      { key: 'CERTIFICATES', title: 'नागरिक प्रमाण पत्र', icon: '📜', count: list.filter((s) => s.category === 'CERTIFICATES').length },
      { key: 'IDENTITY', title: 'पहचान (आधार/पैन/DL)', icon: '🪪', count: list.filter((s) => s.category === 'IDENTITY').length },
      { key: 'FOOD_RATION', title: 'खाद्य व राशन', icon: '🍚', count: list.filter((s) => s.category === 'FOOD_RATION').length },
      { key: 'ELECTRICITY_UTILITY', title: 'बिजली व सोलर', icon: '⚡', count: list.filter((s) => s.category === 'ELECTRICITY_UTILITY').length },
      { key: 'POLICE_LEGAL', title: 'पुलिस व जनसुनवाई', icon: '⚖️', count: list.filter((s) => s.category === 'POLICE_LEGAL').length },
      { key: 'HEALTH_WELFARE', title: 'स्वास्थ्य व पेंशन', icon: '🏥', count: list.filter((s) => s.category === 'HEALTH_WELFARE').length },
      { key: 'BUSINESS_TAX', title: 'व्यापार व टैक्स (GST)', icon: '💼', count: list.filter((s) => s.category === 'BUSINESS_TAX').length },
      { key: 'FARMER_AGRICULTURE', title: 'किसान कल्याण', icon: '🚜', count: list.filter((s) => s.category === 'FARMER_AGRICULTURE').length }
    ];

    return cats.filter((c) => c.count > 0 || c.key === 'ALL');
  }
}
