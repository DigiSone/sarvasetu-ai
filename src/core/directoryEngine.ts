import { GOVERNMENT_SERVICES, GovernmentService, CATEGORY_METADATA } from './governmentDirectory';

export interface CategorySummary {
  key: string;
  title: string;
  icon: string;
  color: string;
  count: number;
}

export class DirectoryEngine {
  // 1. वॉयस और टेक्स्ट आधारित मल्टी-कीवर्ड खोज
  public static searchServices(query: string, activeCategory: string = 'ALL'): GovernmentService[] {
    const cleanQuery = query.trim().toLowerCase();
    
    return GOVERNMENT_SERVICES.filter((service) => {
      // श्रेणी फ़िल्टर
      const matchesCategory = activeCategory === 'ALL' || service.category === activeCategory;
      if (!matchesCategory) return false;

      // यदि कोई सर्च क्वेरी नहीं है, तो श्रेणी के सभी परिणाम दिखाएं
      if (!cleanQuery) return true;

      // टाइटल, विभाग, मंत्रालय और कीवर्ड्स में खोज
      const matchesTitle = service.title.toLowerCase().includes(cleanQuery);
      const matchesDept = service.department.toLowerCase().includes(cleanQuery);
      const matchesMinistry = service.ministry.toLowerCase().includes(cleanQuery);
      const matchesKeywords = service.keywords.some((kw) => kw.toLowerCase().includes(cleanQuery));

      return matchesTitle || matchesDept || matchesMinistry || matchesKeywords;
    });
  }

  // 2. वॉयस इनपुट से सीधे सबसे सटीक सेवा की पहचान (Voice Matcher)
  public static matchVoiceIntent(spokenText: string): GovernmentService | null {
    const text = spokenText.toLowerCase();

    // सटीक कीवर्ड मिलान प्राथमिकता
    for (const service of GOVERNMENT_SERVICES) {
      for (const kw of service.keywords) {
        if (text.includes(kw.toLowerCase())) {
          return service;
        }
      }
    }

    // आंशिक मिलान
    return GOVERNMENT_SERVICES.find((service) => 
      text.includes(service.title.toLowerCase()) || 
      text.includes(service.portalName.toLowerCase())
    ) || null;
  }

  // 3. श्रेणियों की सूची और सेवाओं की संख्या की गणना
  public static getCategories(): CategorySummary[] {
    const categories: CategorySummary[] = [
      {
        key: 'ALL',
        title: 'सभी सरकारी सेवाएं',
        icon: '🏛️',
        color: 'slate',
        count: GOVERNMENT_SERVICES.length
      }
    ];

    Object.entries(CATEGORY_METADATA).forEach(([key, meta]) => {
      const count = GOVERNMENT_SERVICES.filter((s) => s.category === key).length;
      categories.push({
        key,
        title: meta.title,
        icon: meta.icon,
        color: meta.color,
        count
      });
    });

    return categories;
  }
}
