export interface CitizenProfile {
  name: string;
  age: number;
  gender: 'MALE' | 'FEMALE' | 'OTHER';
  state: string;
  category: 'BPL' | 'APL' | 'ANTYODAYA' | 'GENERAL';
  occupation?: string;
  hasLand?: boolean;
}

export interface SchemeEntitlement {
  schemeId: string;
  schemeName: string;
  annualBenefit: string;
  voiceDescription: string;
  autoEligible: boolean;
}

export class HaqdaarAIEngine {
  public static evaluateEntitlements(profile: CitizenProfile): SchemeEntitlement[] {
    const entitlements: SchemeEntitlement[] = [];

    if (profile.category === 'BPL' || profile.category === 'ANTYODAYA') {
      entitlements.push({
        schemeId: 'PM_JAY',
        schemeName: 'आयुष्मान भारत गोल्डेन कार्ड',
        annualBenefit: '₹5,00,000 प्रति वर्ष मुफ्त अस्पताल इलाज',
        voiceDescription: 'आपका और आपके परिवार का 5 लाख रुपये तक का अस्पताल में मुफ्त इलाज का कार्ड बन सकता है।',
        autoEligible: true
      });
    }

    if (profile.age >= 60) {
      entitlements.push({
        schemeId: 'OLD_AGE_PENSION',
        schemeName: 'वृद्धावस्था पेंशन योजना',
        annualBenefit: '₹12,000 प्रति वर्ष बैंक खाते में',
        voiceDescription: 'आपकी उम्र 60 साल पूरी हो चुकी है। आपको हर महीने सरकारी पेंशन का अधिकार है।',
        autoEligible: true
      });
    }

    if (profile.hasLand || profile.occupation?.includes('kisan')) {
      entitlements.push({
        schemeId: 'PM_KISAN',
        schemeName: 'पीएम किसान सम्मान निधि',
        annualBenefit: '₹6,000 प्रति वर्ष (3 किस्तों में)',
        voiceDescription: 'खेती के लिए आपको सरकार से हर चार महीने में 2000 रुपये सीधे खाते में मिल सकते हैं।',
        autoEligible: true
      });
    }

    if (profile.gender === 'FEMALE' && profile.age <= 10) {
      entitlements.push({
        schemeId: 'SUKANYA_SAMRIDDHI',
        schemeName: 'सुकन्या समृद्धि योजना',
        annualBenefit: 'उच्चतम सरकारी ब्याज दर + सुरक्षित भविष्य निधि',
        voiceDescription: 'बिटिया के नाम से डाकघर में सरकारी खाता खोला जा सकता है।',
        autoEligible: true
      });
    }

    if (profile.age >= 18 && profile.age < 60) {
      entitlements.push({
        schemeId: 'ESHRAM_CARD',
        schemeName: 'ई-श्रम राष्ट्रीय सुरक्षा कार्ड',
        annualBenefit: '₹2,00,000 दुर्घटना बीमा + सभी कल्याणकारी योजनाएं',
        voiceDescription: 'कामगार भाइयों के लिए 2 लाख रुपये का मुफ्त दुर्घटना बीमा कार्ड तैयार हो सकता है।',
        autoEligible: true
      });
    }

    return entitlements;
  }
}
