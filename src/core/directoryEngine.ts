import { GOVERNMENT_SERVICES, GovernmentService, CATEGORY_METADATA } from './governmentDirectory';
import { FuzzySearchEngine } from './fuzzySearch';

export interface CategorySummary {
  key: string;
  title: string;
  icon: string;
  color: string;
  count: number;
}

export class DirectoryEngine {
  public static searchServices(query: string, activeCategory: string = 'ALL'): GovernmentService[] {
    const cleanQuery = query.trim().toLowerCase();

    return GOVERNMENT_SERVICES.filter((service) => {
      // श्रेणी फ़िल्टर
      const matchesCategory = activeCategory === 'ALL' || service.category === activeCategory;
      if (!matchesCategory) return false;

      if (!cleanQuery) return true;

      // 1. प्राथमिक सटीक मिलान
      const matchesTitle = service.title.toLowerCase().includes(cleanQuery);
      const matchesDept = service.department.toLowerCase().includes(cleanQuery);
      const matchesMinistry = service.ministry.toLowerCase().includes(cleanQuery);
      const matchesKeywords = service.keywords.some((kw) => kw.toLowerCase().includes(cleanQuery));

      if (matchesTitle || matchesDept || matchesMinistry || matchesKeywords) return true;

      // 2. फ़ज़ी मिलान (टाइपो या गलत स्पेलिंग सुधार)
      const fuzzyTitle = FuzzySearchEngine.isFuzzyMatch(cleanQuery, service.title);
      const fuzzyKeywords = service.keywords.some((kw) => FuzzySearchEngine.isFuzzyMatch(cleanQuery, kw));

      return fuzzyTitle || fuzzyKeywords;
    });
  }

  public static matchVoiceIntent(spokenText: string): GovernmentService | null {
    const text = spokenText.toLowerCase();

    for (const service of GOVERNMENT_SERVICES) {
      for (const kw of service.keywords) {
        if (text.includes(kw.toLowerCase()) || FuzzySearchEngine.isFuzzyMatch(text, kw, 0.7)) {
          return service;
        }
      }
    }

    return (
      GOVERNMENT_SERVICES.find((service) =>
        text.includes(service.title.toLowerCase()) || FuzzySearchEngine.isFuzzyMatch(text, service.title, 0.65)
      ) || null
    );
  }

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
