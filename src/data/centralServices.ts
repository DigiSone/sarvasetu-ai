import { GovServiceItem } from '../types/service';

export const CENTRAL_GOVERNMENT_SERVICES: GovServiceItem[] = [
  // 1. पहचान व नागरिकता (Central Identity)
  {
    id: 'aadhaar-uidai',
    title: 'आधार कार्ड सेवाएं (myAadhaar Portal - UIDAI)',
    department: 'भारतीय विशिष्ट पहचान प्राधिकरण (UIDAI)',
    ministryOrState: 'भारत सरकार',
    scope: 'CENTRAL',
    category: 'IDENTITY',
    benefitSummary: 'आधार कार्ड ऑनलाइन डाउनलोड करना, पता अपडेट करना व पीवीसी प्लास्टिक कार्ड ऑर्डर करना',
    officialApplyUrl: 'https://myaadhaar.uidai.gov.in/',
    portalName: 'myaadhaar.uidai.gov.in',
    estimatedDays: 'डाउनलोड तत्काल / पीवीसी कार्ड 7 दिन',
    govtFee: 'डाउनलोड ₹0 / पता अपडेट ₹50 / पीवीसी कार्ड ₹50',
    requiredDocuments: [
      { name: 'आधार लिंक मोबाइल नंबर (ओटीपी हेतु)', mandatory: true },
      { name: 'पते का प्रमाण (अपडेट के लिए)', mandatory: false }
    ],
    voiceKeywords: ['आधार', 'आधार कार्ड', 'आधार डाउनलोड', 'आधार सुधार', 'aadhaar', 'aadhar', 'uidai']
  },
  {
    id: 'pan-nsdl',
    title: 'नया पैन कार्ड / सुधार (Protean NSDL Form 49A)',
    department: 'आयकर विभाग (Income Tax Department)',
    ministryOrState: 'वित्त मंत्रालय, भारत सरकार',
    scope: 'CENTRAL',
    category: 'IDENTITY',
    benefitSummary: 'बैंक खाता, लोन और वित्तीय लेनदेन हेतु 10 अंकों का पैन कार्ड बनाना या नाम/जन्मतिथि सुधारना',
    officialApplyUrl: 'https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html',
    portalName: 'tin-nsdl.com (Protean NSDL)',
    estimatedDays: 'e-PAN 10 मिनट में / भौतिक कार्ड 10 दिन में',
    govtFee: 'e-PAN ₹0 / फिजिकल कार्ड ₹107',
    requiredDocuments: [
      { name: 'आधार कार्ड (ओटीपी लिंक)', mandatory: true },
      { name: 'सादे कागज़ पर हस्ताक्षर की फोटो', mandatory: true }
    ],
    voiceKeywords: ['पैन', 'पैन कार्ड', 'नया पैन', 'pan card', 'pan', 'nsdl']
  },
  {
    id: 'voter-eci',
    title: 'मतदाता पहचान पत्र (Voter Service Portal - ECI Form 6)',
    department: 'भारत निर्वाचन आयोग (ECI)',
    ministryOrState: 'भारत सरकार',
    scope: 'CENTRAL',
    category: 'IDENTITY',
    benefitSummary: '18 वर्ष की उम्र पूरी होने पर नया वोटर कार्ड बनवाना व डिजिटल ई-एपिक डाउनलोड करना',
    officialApplyUrl: 'https://voters.eci.gov.in/',
    portalName: 'voters.eci.gov.in (निर्वाचन आयोग)',
    estimatedDays: '20 से 30 कार्यदिवस (बीएलओ सत्यापन)',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'आयु प्रमाण (आधार/10वीं मार्कशीट)', mandatory: true },
      { name: 'निवास प्रमाण (बिजली बिल/राशन कार्ड)', mandatory: true },
      { name: 'पासपोर्ट साइज रंगीन फोटो', mandatory: true }
    ],
    voiceKeywords: ['वोटर कार्ड', 'पहचान पत्र', 'मतदाता कार्ड', 'voter id', 'voter card', 'eci']
  },
  {
    id: 'passport-seva',
    title: 'पासपोर्ट सेवा (Passport Seva Kendra - MEA)',
    department: 'कांसुलर, पासपोर्ट और वीजा प्रभाग',
    ministryOrState: 'विदेश मंत्रालय, भारत सरकार',
    scope: 'CENTRAL',
    category: 'IDENTITY',
    benefitSummary: 'विदेश यात्रा और अंतरराष्ट्रीय नागरिकता पहचान पत्र हेतु सामान्य व तत्काल पासपोर्ट आवेदन',
    officialApplyUrl: 'https://www.passportindia.gov.in/',
    portalName: 'passportindia.gov.in (विदेश मंत्रालय)',
    estimatedDays: 'सामान्य 15 दिन / तत्काल 3-5 दिन',
    govtFee: '₹1,500 (36 पृष्ठ सामान्य)',
    requiredDocuments: [
      { name: 'आधार कार्ड व जन्म प्रमाण पत्र', mandatory: true },
      { name: 'शैक्षणिक योग्यता प्रमाण (10वीं मार्कशीट)', mandatory: true }
    ],
    voiceKeywords: ['पासपोर्ट', 'पासपोर्ट सेवा', 'विदेश यात्रा', 'passport', 'passport seva']
  },

  // 2. स्वास्थ्य, पेंशन व सामाजिक सुरक्षा (Central Health & Welfare)
  {
    id: 'ayushman-card',
    title: 'आयुष्मान भारत कार्ड (PM-JAY Golden Card ₹5 Lakh)',
    department: 'राष्ट्रीय स्वास्थ्य प्राधिकरण (NHA)',
    ministryOrState: 'स्वास्थ्य एवं परिवार कल्याण मंत्रालय',
    scope: 'CENTRAL',
    category: 'HEALTH_WELFARE',
    benefitSummary: 'प्रति परिवार प्रतिवर्ष ₹5,00,000 तक सरकारी व प्राइवेट अस्पतालों में मुफ्त इलाज',
    officialApplyUrl: 'https://beneficiary.nha.gov.in/',
    portalName: 'beneficiary.nha.gov.in',
    estimatedDays: 'तत्काल 5 मिनट में डिजिटल कार्ड डाउनलोड',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'आधार कार्ड (ओटीपी लिंक)', mandatory: true },
      { name: 'राशन कार्ड या परिवार समग्र आईडी', mandatory: true }
    ],
    voiceKeywords: ['आयुष्मान', 'आयुष्मान कार्ड', 'गोल्डन कार्ड', 'मुफ्त इलाज', 'ayushman', 'pmjay', 'golden card']
  },
  {
    id: 'eshram-card',
    title: 'ई-श्रम कार्ड (e-Shram Portal for Workers)',
    department: 'श्रम एवं रोजगार मंत्रालय',
    ministryOrState: 'भारत सरकार',
    scope: 'CENTRAL',
    category: 'HEALTH_WELFARE',
    benefitSummary: 'असंगठित कामगारों (मजदूर, मिस्त्री, चालक) को ₹2 लाख का मुफ्त दुर्घटना बीमा व यूएएन कार्ड',
    officialApplyUrl: 'https://eshram.gov.in/',
    portalName: 'eshram.gov.in',
    estimatedDays: 'तत्काल 1 मिनट में डाउनलोड',
    govtFee: '₹0 (निःशुल्क)',
    requiredDocuments: [
      { name: 'आधार कार्ड व आधार लिंक मोबाइल', mandatory: true },
      { name: 'बैंक खाता विवरण (IFSC सहित)', mandatory: true }
    ],
    voiceKeywords: ['ई श्रम', 'श्रम कार्ड', 'मजदूर कार्ड', 'eshram', 'e-shram', 'shramik card']
  },
  {
    id: 'epfo-uan-pf',
    title: 'पीएफ पासबुक व ऑनलाइन निकासी (EPFO Member e-Sewa)',
    department: 'कर्मचारी भविष्य निधि संगठन (EPFO)',
    ministryOrState: 'श्रम एवं रोजगार मंत्रालय',
    scope: 'CENTRAL',
    category: 'BUSINESS_TAX',
    benefitSummary: 'पीएफ बैलेंस चेक करना, ऑनलाइन पीएफ एडवांस निकालना और फाइनल सेटलमेंट क्लेम',
    officialApplyUrl: 'https://unifiedportal-mem.epfindia.gov.in/memberinterface/',
    portalName: 'unifiedportal-mem.epfindia.gov.in',
    estimatedDays: 'क्लेम निपटान 3 से 7 कार्यदिवस',
    govtFee: '₹0 (निःशुल्क)',
    requiredDocuments: [
      { name: '12 अंकों का यूएएन नंबर (UAN) व पासवर्ड', mandatory: true },
      { name: 'आधार लिंक मोबाइल व बैंक खाता', mandatory: true }
    ],
    voiceKeywords: ['पीएफ', 'ईपीएफओ', 'पीएफ पासबुक', 'पीएफ निकालना', 'pf', 'epfo', 'uan']
  },

  // 3. कृषि, किसान व सौर ऊर्जा (Central Farmer & Green Energy)
  {
    id: 'pm-kisan',
    title: 'पीएम किसान सम्मान निधि (PM-Kisan Portal)',
    department: 'कृषि एवं किसान कल्याण विभाग',
    ministryOrState: 'कृषि मंत्रालय, भारत सरकार',
    scope: 'CENTRAL',
    category: 'FARMER_AGRICULTURE',
    benefitSummary: 'किसानों को सालाना ₹6,000 की सरकारी सहायता (हर 4 माह पर ₹2,000 सीधे बैंक खाते में)',
    officialApplyUrl: 'https://pmkisan.gov.in/',
    portalName: 'pmkisan.gov.in',
    estimatedDays: 'सत्यापन उपरांत आगामी किस्त में देय',
    govtFee: '₹0 (आवेदन निःशुल्क)',
    requiredDocuments: [
      { name: 'किसान का आधार कार्ड', mandatory: true },
      { name: 'जमीन की खतौनी नकल', mandatory: true },
      { name: 'डीबीटी सक्रिय बैंक पासबुक', mandatory: true }
    ],
    voiceKeywords: ['पीएम किसान', 'किसान सम्मान निधि', 'किसान किस्त', 'pm kisan', 'kisan samman nidhi']
  },
  {
    id: 'pm-surya-ghar',
    title: 'पीएम सूर्य घर मुफ्त बिजली योजना (PM Surya Ghar Solar Subsidy)',
    department: 'नवीन और नवीकरणीय ऊर्जा मंत्रालय',
    ministryOrState: 'भारत सरकार',
    scope: 'CENTRAL',
    category: 'ELECTRICITY_UTILITY',
    benefitSummary: 'घर की छत पर सोलर पैनल लगवाने पर ₹78,000 तक सीधी बैंक सब्सिडी और 300 यूनिट मुफ्त बिजली',
    officialApplyUrl: 'https://pmsuryaghar.gov.in/',
    portalName: 'pmsuryaghar.gov.in (रूफटॉप सोलर)',
    estimatedDays: 'डिस्कॉम तकनीकी स्वीकृति अनुसार',
    govtFee: 'सब्सिडी बाद केवल शेष उपकरण मूल्य',
    requiredDocuments: [
      { name: 'नवीनतम बिजली बिल की प्रति', mandatory: true },
      { name: 'आधार कार्ड व बैंक पासबुक प्रति', mandatory: true },
      { name: 'छत की स्पष्ट तस्वीर', mandatory: true }
    ],
    voiceKeywords: ['सोलर', 'सूर्य घर', 'सोलर पैनल', 'मुफ्त बिजली सब्सिडी', 'surya ghar', 'solar rooftop']
  },

  // 4. व्यापार, टैक्स व उद्योग (Central Business & Tax)
  {
    id: 'gst-registration',
    title: 'नया जीएसटी पंजीकरण (GST Common Portal - REG-01)',
    department: 'केंद्रीय अप्रत्यक्ष कर और सीमा शुल्क बोर्ड (CBIC)',
    ministryOrState: 'वित्त मंत्रालय, भारत सरकार',
    scope: 'CENTRAL',
    category: 'BUSINESS_TAX',
    benefitSummary: 'व्यापार, दुकान या फर्म हेतु देशभर में कानूनी बिक्री के लिए 15 अंकों का GSTIN नंबर',
    officialApplyUrl: 'https://reg.gst.gov.in/registration/',
    portalName: 'reg.gst.gov.in (GSTN)',
    estimatedDays: '3 से 7 कार्यदिवस (आधार ऑथेंटिकेशन पर)',
    govtFee: '₹0 (सरकारी पंजीकरण पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'पैन कार्ड (व्यक्तिगत अथवा व्यापार)', mandatory: true },
      { name: 'आधार कार्ड (ओटीपी सक्रिय)', mandatory: true },
      { name: 'दुकान/कार्यालय का बिजली बिल या किरायानामा', mandatory: true },
      { name: 'बैंक खाता विवरण व कैंसिल्ड चेक', mandatory: true }
    ],
    voiceKeywords: ['जीएसटी', 'जीएसटी नंबर', 'जीएसटी रजिस्ट्रेशन', 'gst', 'gst registration', 'gstin']
  },
  {
    id: 'udyam-msme',
    title: 'उद्यम एमएसएमई पंजीकरण (Udyam MSME Registration)',
    department: 'सूक्ष्म, लघु और मध्यम उद्यम मंत्रालय',
    ministryOrState: 'एमएसएमई मंत्रालय, भारत सरकार',
    scope: 'CENTRAL',
    category: 'BUSINESS_TAX',
    benefitSummary: 'दुकानदारों और लघु उद्योगों को सस्ता बैंक लोन और सरकारी योजनाओं हेतु आजीवन निःशुल्क प्रमाण पत्र',
    officialApplyUrl: 'https://udyamregistration.gov.in/',
    portalName: 'udyamregistration.gov.in',
    estimatedDays: 'तत्काल 5 मिनट में डिजिटल सर्टिफिकेट',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'मालिक का आधार कार्ड', mandatory: true },
      { name: 'पैन कार्ड व बैंक खाता विवरण', mandatory: true }
    ],
    voiceKeywords: ['उद्यम', 'एमएसएमई', 'उद्योग आधार', 'udyam', 'msme', 'chhota vyapar']
  },
  {
    id: 'itr-filing',
    title: 'आयकर रिटर्न (Income Tax e-Filing Portal 2.0)',
    department: 'आयकर विभाग (Income Tax Department)',
    ministryOrState: 'वित्त मंत्रालय, भारत सरकार',
    scope: 'CENTRAL',
    category: 'BUSINESS_TAX',
    benefitSummary: 'टीडीएस रिफंड पाना, बैंक लोन स्वीकृति और विदेश यात्रा हेतु आधिकारिक इनकम टैक्स रिटर्न भरना',
    officialApplyUrl: 'https://www.incometax.gov.in/iec/foportal/',
    portalName: 'incometax.gov.in',
    estimatedDays: 'तत्काल ई-वेरिफिकेशन उपरांत',
    govtFee: '₹0 (नियत तिथि तक निःशुल्क)',
    requiredDocuments: [
      { name: 'पैन कार्ड व आधार कार्ड', mandatory: true },
      { name: 'बैंक खाता विवरण व फॉर्म 16 / AIS', mandatory: true }
    ],
    voiceKeywords: ['आईटीआर', 'इनकम टैक्स', 'टैक्स रिटर्न', 'टीडीएस रिफंड', 'itr', 'income tax', 'tds']
  },
  {
    id: 'driving-license',
    title: 'ड्राइविंग लाइसेंस (Sarathi Parivahan DL Portal)',
    department: 'सड़क परिवहन और राजमार्ग मंत्रालय (MoRTH)',
    ministryOrState: 'भारत सरकार',
    scope: 'CENTRAL',
    category: 'IDENTITY',
    benefitSummary: 'लर्नर लाइसेंस, स्थायी ड्राइविंग लाइसेंस (DL) और नवीनीकरण हेतु राष्ट्रीय ऑनलाइन सारथी पोर्टल',
    officialApplyUrl: 'https://sarathi.parivahan.gov.in/',
    portalName: 'sarathi.parivahan.gov.in',
    estimatedDays: 'लर्नर तत्काल ऑनलाइन टेस्ट / पक्का DL 7 दिन',
    govtFee: 'लर्नर ₹200 / स्थायी DL ₹1,000 (मानक)',
    requiredDocuments: [
      { name: 'आधार कार्ड (घर बैठे बिना आरटीओ टेस्ट हेतु)', mandatory: true },
      { name: '10वीं मार्कशीट (आयु प्रमाण हेतु)', mandatory: true }
    ],
    voiceKeywords: ['ड्राइविंग लाइसेंस', 'डीएल', 'लर्नर लाइसेंस', 'driving license', 'dl', 'sarathi']
  }
];
