export interface RequiredDoc {
  name: string;
  mandatory: boolean;
}

export interface GovernmentService {
  id: string;
  title: string;
  department: string;
  ministry: string;
  category: 
    | 'IDENTITY' 
    | 'HEALTH_WELFARE' 
    | 'AGRICULTURE' 
    | 'TRANSPORT' 
    | 'FINANCE_PENSION' 
    | 'REVENUE_HOUSING' 
    | 'EDUCATION_SKILL' 
    | 'UTILITY_LEGAL'
    | 'BUSINESS_TAX';
  benefitSummary: string;
  officialApplyUrl: string;
  portalName: string;
  estimatedDays: string;
  govtFee: string;
  requiredDocuments: RequiredDoc[];
  voiceBriefing: string;
  keywords: string[];
}

export const GOVERNMENT_SERVICES: GovernmentService[] = [
  // ==========================================
  // 1. व्यापार, उद्योग एवं कराधान (BUSINESS_TAX)
  // ==========================================
  {
    id: 'gst-registration',
    title: 'नया जीएसटी पंजीकरण (New GST Registration - REG-01)',
    department: 'केंद्रीय अप्रत्यक्ष कर और सीमा शुल्क बोर्ड (CBIC)',
    ministry: 'वित्त मंत्रालय',
    category: 'BUSINESS_TAX',
    benefitSummary: 'देशभर में कानूनी रूप से व्यापार और अंतर्राज्यीय बिक्री हेतु 15 अंकों का GSTIN',
    officialApplyUrl: 'https://reg.gst.gov.in/registration/',
    portalName: 'GST Common Portal (GSTN)',
    estimatedDays: '3 से 7 कार्यदिवस (आधार प्रमाणीकरण पर)',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'पैन कार्ड (व्यवसाय / प्रोपराइटर)', mandatory: true },
      { name: 'आधार कार्ड (ओटीपी लिंक)', mandatory: true },
      { name: 'व्यापार स्थल का पता प्रमाण (बिजली बिल / किरायानामा / एनओसी)', mandatory: true },
      { name: 'बैंक खाता विवरण / कैंसिल्ड चेक', mandatory: true },
      { name: 'प्रोपराइटर / पार्टनर्स की पासपोर्ट फोटो', mandatory: true }
    ],
    voiceBriefing: 'नया जीएसटी नंबर लेने के लिए जीएसटी पोर्टल पर फॉर्म REG-01 भरा जाता है। इसके लिए पैन कार्ड, व्यापार स्थल का बिजली बिल और बैंक खाता अनिवार्य है।',
    keywords: ['gst', 'gstin', 'जीएसटी', 'gst registration', 'व्यापार टैक्स', 'sales tax']
  },
  {
    id: 'udyam-msme',
    title: 'उद्यम / एमएसएमई पंजीकरण (Udyam MSME Registration)',
    department: 'सूक्ष्म, लघु और मध्यम उद्यम मंत्रालय',
    ministry: 'एमएसएमई मंत्रालय',
    category: 'BUSINESS_TAX',
    benefitSummary: 'सस्ते बैंक ऋण, सरकारी टेंडर में वरीयता और 50% तक पेटेंट/ट्रेडमार्क सब्सिडी',
    officialApplyUrl: 'https://udyamregistration.gov.in/',
    portalName: 'Udyam National Portal',
    estimatedDays: 'तत्काल (ई-प्रमाण पत्र तुरंत जारी)',
    govtFee: '₹0 (भारत सरकार द्वारा पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'प्रोपराइटर/मालिक का आधार कार्ड', mandatory: true },
      { name: 'पैन कार्ड (व्यक्तिगत अथवा फर्म)', mandatory: true },
      { name: 'बैंक खाता संख्या और आईएफएससी', mandatory: true }
    ],
    voiceBriefing: 'छोटे उद्योगों और दुकानों के लिए उद्यम एमएसएमई सर्टिफिकेट उद्यम पोर्टल पर केवल आधार और पैन से तत्काल और बिल्कुल मुफ्त बनता है।',
    keywords: ['msme', 'udyam', 'उद्यम', 'उद्योग आधार', 'msme certificate', 'छोटा व्यापार']
  },
  {
    id: 'itr-filing',
    title: 'आयकर रिटर्न (Income Tax Return - ITR e-Filing)',
    department: 'आयकर विभाग (Income Tax Department)',
    ministry: 'वित्त मंत्रालय',
    category: 'BUSINESS_TAX',
    benefitSummary: 'टीडीएस रिफंड, बैंक लोन और वीजा मंजूरी के लिए आधिकारिक वित्तीय प्रमाण',
    officialApplyUrl: 'https://www.incometax.gov.in/iec/foportal/',
    portalName: 'Income Tax e-Filing Portal 2.0',
    estimatedDays: 'तत्काल e-Verification उपरांत',
    govtFee: '₹0 (नियत तिथि तक निःशुल्क)',
    requiredDocuments: [
      { name: 'पैन कार्ड', mandatory: true },
      { name: 'आधार कार्ड (पैन से लिंक)', mandatory: true },
      { name: 'बैंक खाता विवरण व फॉर्म 16 / AIS / TIS', mandatory: true }
    ],
    voiceBriefing: 'इनकम टैक्स रिटर्न भरने के लिए आयकर ई-फाइलिंग पोर्टल पर पैन और आधार की मदद से लॉगिन करके अपना रिटर्न और टीडीएस रिफंड क्लेम करें।',
    keywords: ['itr', 'income tax', 'आईटीआर', 'इनकम टैक्स', 'tax return', 'tds refund']
  },
  {
    id: 'epfo-uan',
    title: 'पीएफ पासबुक व निकासी (EPFO Member e-Sewa / UAN Portal)',
    department: 'कर्मचारी भविष्य निधि संगठन (EPFO)',
    ministry: 'श्रम एवं रोजगार मंत्रालय',
    category: 'BUSINESS_TAX',
    benefitSummary: 'पीएफ बैलेंस चेक, ऑनलाइन एडवांस व फाइनल पीएफ क्लेम निकासी',
    officialApplyUrl: 'https://unifiedportal-mem.epfindia.gov.in/memberinterface/',
    portalName: 'EPFO Unified Member Portal',
    estimatedDays: 'क्लेम निपटान 3 से 7 कार्यदिवस',
    govtFee: '₹0 (पूर्णतः निःशुल्क सेवा)',
    requiredDocuments: [
      { name: 'सक्रिय यूएएन (UAN Number) व पासवर्ड', mandatory: true },
      { name: 'आधार लिंक मोबाइल नंबर (ओटीपी हेतु)', mandatory: true },
      { name: 'बैंक खाता व कैंसिल्ड चेक (KYC अनुमोदित)', mandatory: true }
    ],
    voiceBriefing: 'पीएफ का पैसा निकालने या पासबुक देखने के लिए ईपीएफओ मेंबर पोर्टल पर यूएएन नंबर से लॉगिन करें। बैंक खाता और आधार लिंक होना जरूरी है।',
    keywords: ['pf', 'epfo', 'uan', 'पीएफ', 'pf balance', 'pf withdrawal', 'provident fund']
  },
  {
    id: 'fssai-foscos',
    title: 'खाद्य लाइसेंस / रजिस्ट्रेशन (FSSAI FoSCoS Food License)',
    department: 'भारतीय खाद्य सुरक्षा और मानक प्राधिकरण (FSSAI)',
    ministry: 'स्वास्थ्य एवं परिवार कल्याण मंत्रालय',
    category: 'BUSINESS_TAX',
    benefitSummary: 'होटल, ढाबा, किराना दुकान या खाद्य निर्माण हेतु अनिवार्य सरकारी लाइसेंस',
    officialApplyUrl: 'https://foscos.fssai.gov.in/',
    portalName: 'Food Safety Compliance System (FoSCoS)',
    estimatedDays: '7 से 30 कार्यदिवस',
    govtFee: 'रजिस्ट्रेशन ₹100 प्रति वर्ष / राज्य लाइसेंस ₹2,000+',
    requiredDocuments: [
      { name: 'दुकानदार का आधार या फोटो पहचान पत्र', mandatory: true },
      { name: 'दुकान / निर्माण स्थल का बिजली बिल या किरायानामा', mandatory: true },
      { name: 'खाद्य उत्पादों की सूची', mandatory: true }
    ],
    voiceBriefing: 'खाने-पीने की दुकान या होटल के लिए एफएसएसएआई के फोसकॉस पोर्टल पर ऑनलाइन फूड लाइसेंस बनता है।',
    keywords: ['fssai', 'food license', 'foscos', 'फूड लाइसेंस', 'खाद्य सुरक्षा', 'होटल लाइसेंस']
  },
  {
    id: 'gem-portal',
    title: 'गवर्नमेंट ई-मार्केटप्लेस विक्रेता पंजीकरण (GeM Seller Registration)',
    department: 'वाणिज्य विभाग',
    ministry: 'वाणिज्य एवं उद्योग मंत्रालय',
    category: 'BUSINESS_TAX',
    benefitSummary: 'सरकारी विभागों, रेलवे और सेना को सीधे बिना बिचौलिए सामान और सेवाएं बेचना',
    officialApplyUrl: 'https://gem.gov.in/',
    portalName: 'Government e-Marketplace (GeM)',
    estimatedDays: 'तत्काल (सत्यापन 2-3 दिन)',
    govtFee: '₹0 (पंजीकरण निःशुल्क)',
    requiredDocuments: [
      { name: 'पैन कार्ड व उद्यम/कंपनी रजिस्ट्रेशन', mandatory: true },
      { name: 'जीएसटी नंबर', mandatory: true },
      { name: 'बैंक खाता व आयकर विवरणी', mandatory: true }
    ],
    voiceBriefing: 'सरकारी टेंडरों में माल बेचने के लिए जेम पोर्टल पर विक्रेता के रूप में मुफ्त रजिस्ट्रेशन करें।',
    keywords: ['gem', 'gem portal', 'सरकारी टेंडर', 'gem seller', 'गवर्नमेंट मार्केट']
  },

  // ==========================================
  // 2. पहचान एवं नागरिकता (IDENTITY)
  // ==========================================
  {
    id: 'aadhaar-update',
    title: 'आधार कार्ड (अपडेट / डाउनलोड / बायोमेट्रिक लॉक)',
    department: 'भारतीय विशिष्ट पहचान प्राधिकरण (UIDAI)',
    ministry: 'इलेक्ट्रॉनिक्स एवं सूचना प्रौद्योगिकी मंत्रालय',
    category: 'IDENTITY',
    benefitSummary: 'देशभर में मान्य 12 अंकों की डिजिटल राष्ट्रीय पहचान व पता प्रमाण',
    officialApplyUrl: 'https://myaadhaar.uidai.gov.in/',
    portalName: 'myAadhaar Portal (UIDAI)',
    estimatedDays: 'तत्काल डाउनलोड / अपडेट 15-30 दिन',
    govtFee: 'डाउनलोड ₹0 / अपडेट ₹50',
    requiredDocuments: [
      { name: 'पहचान का प्रमाण (वोटर कार्ड/पैन/पासपोर्ट)', mandatory: true },
      { name: 'पते का प्रमाण (बिजली बिल/राशन कार्ड/पासबुक)', mandatory: true },
      { name: 'मोबाइल नंबर (ओटीपी हेतु)', mandatory: true }
    ],
    voiceBriefing: 'आधार कार्ड डाउनलोड करने या पता अपडेट करने के लिए myAadhaar आधिकारिक पोर्टल पर जाएं।',
    keywords: ['aadhaar', 'aadhar', 'आधार', 'uidai', 'myaadhaar']
  },
  {
    id: 'pan-new',
    title: 'नया पैन कार्ड (Form 49A / e-PAN)',
    department: 'आयकर विभाग (Income Tax Department)',
    ministry: 'वित्त मंत्रालय',
    category: 'IDENTITY',
    benefitSummary: 'बैंक खाता, लोन और बड़े वित्तीय लेनदेन हेतु अनिवार्य पहचान पत्र',
    officialApplyUrl: 'https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html',
    portalName: 'Protean NSDL Portal',
    estimatedDays: 'तत्काल (e-PAN 10 मिनट) / भौतिक कार्ड 10 दिन',
    govtFee: 'e-PAN ₹0 / भौतिक कार्ड ₹107',
    requiredDocuments: [
      { name: 'आधार कार्ड', mandatory: true },
      { name: 'सादे कागज़ पर हस्ताक्षर की फोटो', mandatory: true }
    ],
    voiceBriefing: 'नया पैन कार्ड एनएसडीएल पोर्टल से ऑनलाइन बनता है। आधार कार्ड और हस्ताक्षर की फोटो तैयार रखें।',
    keywords: ['pan', 'pan card', 'पैन कार्ड', 'nsdl', 'utiitsl']
  },
  {
    id: 'voter-id',
    title: 'मतदाता पहचान पत्र (नया वोटर कार्ड - Form 6)',
    department: 'भारत निर्वाचन आयोग (ECI)',
    ministry: 'विधि एवं न्याय मंत्रालय',
    category: 'IDENTITY',
    benefitSummary: 'लोकतांत्रिक मताधिकार और राष्ट्रीय स्तर पर मान्य आधिकारिक पहचान पत्र',
    officialApplyUrl: 'https://voters.eci.gov.in/',
    portalName: 'Voters Service Portal (ECI)',
    estimatedDays: '20 से 30 कार्यदिवस',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'आयु प्रमाण (आधार/जन्म प्रमाण पत्र/मार्कशीट)', mandatory: true },
      { name: 'निवास प्रमाण (बिजली बिल/पानी बिल)', mandatory: true },
      { name: 'पासपोर्ट साइज रंगीन फोटो', mandatory: true }
    ],
    voiceBriefing: 'नया वोटर कार्ड बनाने के लिए भारत निर्वाचन आयोग के पोर्टल पर फॉर्म 6 भरें।',
    keywords: ['voter', 'voter id', 'मतदाता', 'पहचान पत्र', 'nvsp', 'eci']
  },
  {
    id: 'passport-seva',
    title: 'पासपोर्ट सेवा (Fresh Passport Application)',
    department: 'कांसुलर, पासपोर्ट और वीजा प्रभाग',
    ministry: 'विदेश मंत्रालय',
    category: 'IDENTITY',
    benefitSummary: 'विदेश यात्रा और अंतरराष्ट्रीय नागरिकता हेतु भारतीय पासपोर्ट',
    officialApplyUrl: 'https://www.passportindia.gov.in/',
    portalName: 'Passport Seva Kendra Portal',
    estimatedDays: 'सामान्य 15-20 दिन / तत्काल 3-5 दिन',
    govtFee: '₹1,500 (सामान्य 36 पृष्ठ)',
    requiredDocuments: [
      { name: 'जन्म तिथि प्रमाण (आधार/जन्म प्रमाण पत्र)', mandatory: true },
      { name: 'वर्तमान पते का प्रमाण', mandatory: true }
    ],
    voiceBriefing: 'पासपोर्ट बनवाने के लिए विदेश मंत्रालय के पासपोर्ट सेवा पोर्टल पर ऑनलाइन आवेदन और अपॉइंटमेंट बुक करें।',
    keywords: ['passport', 'पासपोर्ट', 'passport seva', 'विदेश यात्रा']
  },
  {
    id: 'ration-card',
    title: 'राशन कार्ड (NFSA नया आवेदन / यूनिट जोड़ना)',
    department: 'खाद्य एवं रसद विभाग',
    ministry: 'उपभोक्ता मामले, खाद्य और सार्वजनिक वितरण मंत्रालय',
    category: 'IDENTITY',
    benefitSummary: 'हर महीने प्रति यूनिट 5 किलो मुफ्त सरकारी अनाज (गेहूं, चावल)',
    officialApplyUrl: 'https://nfsa.gov.in/',
    portalName: 'National Food Security Portal (NFSA)',
    estimatedDays: '30 कार्यदिवस',
    govtFee: '₹0 से ₹20 (राज्य अनुसार)',
    requiredDocuments: [
      { name: 'परिवार के मुखिया का आधार कार्ड', mandatory: true },
      { name: 'सभी पारिवारिक सदस्यों के आधार', mandatory: true },
      { name: 'आय प्रमाण पत्र व बैंक पासबुक', mandatory: true }
    ],
    voiceBriefing: 'राशन कार्ड के लिए एनएफएसए या राज्य के खाद्य रसद पोर्टल से आवेदन करें। परिवार के सभी सदस्यों का आधार जरूरी है।',
    keywords: ['ration', 'ration card', 'राशन कार्ड', 'nfsa', 'राशन']
  },

  // ==========================================
  // 3. स्वास्थ्य एवं सामाजिक सुरक्षा (HEALTH_WELFARE)
  // ==========================================
  {
    id: 'ayushman-card',
    title: 'आयुष्मान भारत कार्ड (PM-JAY Golden Card)',
    department: 'राष्ट्रीय स्वास्थ्य प्राधिकरण (NHA)',
    ministry: 'स्वास्थ्य एवं परिवार कल्याण मंत्रालय',
    category: 'HEALTH_WELFARE',
    benefitSummary: 'प्रतिवर्ष ₹5,00,000 तक सरकारी व प्राइवेट अस्पतालों में मुफ्त इलाज',
    officialApplyUrl: 'https://beneficiary.nha.gov.in/',
    portalName: 'PM-JAY Beneficiary Portal (NHA)',
    estimatedDays: 'तत्काल (e-KYC के 5 मिनट बाद)',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'आधार कार्ड (ओटीपी लिंक)', mandatory: true },
      { name: 'राशन कार्ड या परिवार आईडी', mandatory: true }
    ],
    voiceBriefing: 'आयुष्मान कार्ड से 5 लाख तक का अस्पताल में मुफ्त इलाज मिलता है। एनएचए के बेनिफिशियरी पोर्टल पर आधार व राशन कार्ड से ई-केवाईसी करें।',
    keywords: ['ayushman', 'pmjay', 'आयुष्मान', 'गोल्डन कार्ड', 'मुफ्त इलाज']
  },
  {
    id: 'eshram-card',
    title: 'ई-श्रम कार्ड (e-Shram National Database)',
    department: 'श्रम एवं रोजगार मंत्रालय',
    ministry: 'श्रम एवं रोजगार मंत्रालय',
    category: 'HEALTH_WELFARE',
    benefitSummary: '₹2 लाख का दुर्घटना बीमा और असंगठित कामगारों को सीधी सरकारी सहायता',
    officialApplyUrl: 'https://eshram.gov.in/',
    portalName: 'e-Shram Portal',
    estimatedDays: 'तत्काल डिजिटल कार्ड डाउनलोड',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'आधार कार्ड व आधार लिंक मोबाइल', mandatory: true },
      { name: 'बैंक खाता विवरण (IFSC सहित)', mandatory: true }
    ],
    voiceBriefing: 'मजदूर, मिस्त्री और रेहड़ी-पटरी वाले ई-श्रम पोर्टल पर सीधे आधार और बैंक खाते से निःशुल्क कार्ड बनाएं।',
    keywords: ['eshram', 'e-shram', 'ई श्रम', 'shramik card', 'मजदूर कार्ड']
  },
  {
    id: 'udid-divyang',
    title: 'यूडीआईडी दिव्यांगता कार्ड (Unique Disability ID - UDID)',
    department: 'दिव्यांगजन सशक्तिकरण विभाग',
    ministry: 'सामाजिक न्याय और अधिकारिता मंत्रालय',
    category: 'HEALTH_WELFARE',
    benefitSummary: 'दिव्यांग पेंशन, बस/रेलवे पास और सरकारी नौकरियों में आरक्षण हेतु 1 राष्ट्रीय कार्ड',
    officialApplyUrl: 'https://www.swavlambancard.gov.in/',
    portalName: 'Swavlamban UDID Portal',
    estimatedDays: 'सीएमओ मेडिकल बोर्ड जांच उपरांत',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'आधार कार्ड', mandatory: true },
      { name: 'सीएमओ द्वारा जारी मेडिकल दिव्यांगता पर्चा', mandatory: true },
      { name: 'दिव्यांगता दर्शाती पूर्ण फोटो', mandatory: true }
    ],
    voiceBriefing: 'दिव्यांग भाई-बहनों के लिए स्वावलंबन पोर्टल पर यूडीआईडी कार्ड बनता है, जिससे पूरे देश में एक ही दिव्यांग प्रमाण पत्र मान्य होता है।',
    keywords: ['udid', 'divyang', 'विकलांग कार्ड', 'divyangjan', 'swavlamban']
  },
  {
    id: 'pmmvy-matru',
    title: 'प्रधानमंत्री मातृ वंदना योजना (PMMVY गर्भवती सहायता)',
    department: 'महिला एवं बाल विकास मंत्रालय',
    ministry: 'महिला एवं बाल विकास मंत्रालय',
    category: 'HEALTH_WELFARE',
    benefitSummary: 'गर्भवती महिलाओं को पोषण सहायता हेतु ₹5,000 से ₹6,000 की नकद सहायता',
    officialApplyUrl: 'https://pmmvy.wcd.gov.in/',
    portalName: 'PMMVY Citizen Portal',
    estimatedDays: 'किस्त वार 30 दिन में',
    govtFee: '₹0 (निःशुल्क)',
    requiredDocuments: [
      { name: 'माता और पिता का आधार कार्ड', mandatory: true },
      { name: 'एमसीपी कार्ड (Mother-Child Protection Card)', mandatory: true },
      { name: 'माता का बैंक खाता (आधार डीबीटी लिंक)', mandatory: true }
    ],
    voiceBriefing: 'गर्भवती महिलाओं को उचित पोषण हेतु मातृ वंदना पोर्टल पर सीधे बैंक खाते में सहायता राशि दी जाती है।',
    keywords: ['pmmvy', 'गर्भवती', 'मातृ वंदना', 'matru vandana', 'prashav']
  },

  // ==========================================
  // 4. कृषि एवं किसान कल्याण (AGRICULTURE)
  // ==========================================
  {
    id: 'pm-kisan',
    title: 'पीएम किसान सम्मान निधि (नया किसान पंजीकरण / e-KYC)',
    department: 'कृषि एवं किसान कल्याण विभाग',
    ministry: 'कृषि एवं किसान कल्याण मंत्रालय',
    category: 'AGRICULTURE',
    benefitSummary: 'हर 4 माह में ₹2,000 की किस्त (सालाना ₹6,000 सीधे बैंक खाते में)',
    officialApplyUrl: 'https://pmkisan.gov.in/',
    portalName: 'PM-Kisan National Portal',
    estimatedDays: 'सत्यापन उपरांत आगामी किस्त में देय',
    govtFee: '₹0 (पंजीकरण निःशुल्क)',
    requiredDocuments: [
      { name: 'आधार कार्ड', mandatory: true },
      { name: 'खतौनी / जमीन के कागजात', mandatory: true },
      { name: 'डीबीटी चालू बैंक खाता पासबुक', mandatory: true }
    ],
    voiceBriefing: 'पीएम किसान योजना में सालाना 6000 रुपये मिलते हैं। पीएम किसान पोर्टल पर आधार और जमीन की खतौनी से आवेदन करें।',
    keywords: ['pm kisan', 'pmkisan', 'किसान', 'सम्मान निधि', 'kisan kist']
  },
  {
    id: 'pm-fby',
    title: 'प्रधानमंत्री फसल बीमा योजना (PMFBY Crop Insurance)',
    department: 'कृषि एवं किसान कल्याण विभाग',
    ministry: 'कृषि एवं किसान कल्याण मंत्रालय',
    category: 'AGRICULTURE',
    benefitSummary: 'सूखा, बाढ़ या बेमौसम बारिश से फसल नष्ट होने पर पूरा सरकारी मुआवजा',
    officialApplyUrl: 'https://pmfby.gov.in/',
    portalName: 'PMFBY Portal',
    estimatedDays: 'अधिसूचित सीजन अनुसार',
    govtFee: 'नाममात्र प्रीमियम (1.5% से 2%)',
    requiredDocuments: [
      { name: 'बुवाई प्रमाण पत्र / पटवारी पर्चा', mandatory: true },
      { name: 'खसरा/खतौनी नकल', mandatory: true },
      { name: 'बैंक पासबुक', mandatory: true }
    ],
    voiceBriefing: 'फसल नुकसान से सुरक्षा के लिए पीएम फसल बीमा पोर्टल से अपनी बुवाई का बीमा समय से पहले जरूर कराएं।',
    keywords: ['pmfby', 'fasal bima', 'फसल बीमा', 'kisan bima']
  },
  {
    id: 'pm-kusum',
    title: 'पीएम कुसुम योजना (सोलर पंप 90% तक सब्सिडी)',
    department: 'नवीन और नवीकरणीय ऊर्जा मंत्रालय',
    ministry: 'नवीन और नवीकरणीय ऊर्जा मंत्रालय',
    category: 'AGRICULTURE',
    benefitSummary: 'खेतों में सिंचाई हेतु सोलर पंप लगवाने पर सरकार द्वारा भारी सब्सिडी',
    officialApplyUrl: 'https://pmkusum.mnre.gov.in/',
    portalName: 'PM-KUSUM National Portal',
    estimatedDays: 'राज्यवार कोटा व लॉटरी अनुसार',
    govtFee: 'केवल कृषक अंश (10% से 40%)',
    requiredDocuments: [
      { name: 'आधार कार्ड', mandatory: true },
      { name: 'खतौनी (कृषि भूमि प्रमाण)', mandatory: true },
      { name: 'बैंक खाता विवरण', mandatory: true }
    ],
    voiceBriefing: 'खेतों में सोलर बोरिंग और पंप लगवाने के लिए पीएम कुसुम पोर्टल पर आवेदन किया जाता है।',
    keywords: ['kusum', 'solar pump', 'कुसुम योजना', 'सोलर पंप', 'solar borewell']
  },

  // ==========================================
  // 5. राजस्व, भूमि एवं नागरिक प्रमाण पत्र (REVENUE_HOUSING)
  // ==========================================
  {
    id: 'birth-certificate',
    title: 'जन्म प्रमाण पत्र (Online Birth Certificate - CRS)',
    department: 'भारत के महारजिस्ट्रार का कार्यालय (ORGI)',
    ministry: 'गृह मंत्रालय',
    category: 'REVENUE_HOUSING',
    benefitSummary: 'स्कूल प्रवेश, पासपोर्ट और आधार बनवाने हेतु सबसे पहला कानूनी दस्तावेज',
    officialApplyUrl: 'https://crsorgi.gov.in/web/index.php/auth/login',
    portalName: 'Civil Registration System (CRS Portal)',
    estimatedDays: '7 से 21 कार्यदिवस',
    govtFee: '21 दिन के भीतर ₹0 (निःशुल्क)',
    requiredDocuments: [
      { name: 'अस्पताल से प्राप्त डिस्चार्ज समरी / जन्म पर्ची', mandatory: true },
      { name: 'माता-पिता दोनों का आधार कार्ड', mandatory: true }
    ],
    voiceBriefing: 'जन्म प्रमाण पत्र भारत सरकार के सीआरएस पोर्टल पर बनता है। 21 दिन के अंदर आवेदन करने पर यह पूरी तरह मुफ्त होता है।',
    keywords: ['birth certificate', 'जन्म प्रमाण पत्र', 'crs', 'janam praman patra']
  },
  {
    id: 'death-certificate',
    title: 'मृत्यु प्रमाण पत्र (Online Death Certificate - CRS)',
    department: 'भारत के महारजिस्ट्रार का कार्यालय (ORGI)',
    ministry: 'गृह मंत्रालय',
    category: 'REVENUE_HOUSING',
    benefitSummary: 'बैंक खाता बंद करने, पैतृक संपत्ति नामांतरण और जीवन बीमा क्लेम हेतु अनिवार्य',
    officialApplyUrl: 'https://crsorgi.gov.in/web/index.php/auth/login',
    portalName: 'Civil Registration System (CRS Portal)',
    estimatedDays: '7 से 15 कार्यदिवस',
    govtFee: '21 दिन के भीतर ₹0 (निःशुल्क)',
    requiredDocuments: [
      { name: 'अस्पताल मृत्यु पर्ची अथवा श्मशान/कब्रिस्तान रसीद', mandatory: true },
      { name: 'मृतक का आधार कार्ड', mandatory: true },
      { name: 'आवेदक/उत्तराधिकारी का पहचान पत्र', mandatory: true }
    ],
    voiceBriefing: 'मृत्यु प्रमाण पत्र के लिए सीआरएस पोर्टल पर अस्पताल पर्ची और मृतक के आधार कार्ड के साथ आवेदन करें।',
    keywords: ['death certificate', 'मृत्यु प्रमाण पत्र', 'mrityu praman patra']
  },
  {
    id: 'caste-certificate',
    title: 'जाति प्रमाण पत्र (SC / ST / OBC / EWS Certificate)',
    department: 'राजस्व विभाग (समस्त राज्य सरकारें)',
    ministry: 'कार्मिक, लोक शिकायत तथा पेंशन मंत्रालय',
    category: 'REVENUE_HOUSING',
    benefitSummary: 'शिक्षा, सरकारी नौकरियों में आरक्षण और छात्रवृत्ति हेतु वैधानिक प्रमाण',
    officialApplyUrl: 'https://edistrict.gov.in/',
    portalName: 'State e-District Citizen Services',
    estimatedDays: '15 कार्यदिवस',
    govtFee: '₹15 से ₹30 (सरकारी शुल्क)',
    requiredDocuments: [
      { name: 'स्व-प्रमाणित घोषणा पत्र', mandatory: true },
      { name: 'आधार कार्ड व राशन कार्ड', mandatory: true },
      { name: 'परिवार के किसी सदस्य का पुराना जाति प्रमाण (यदि हो)', mandatory: false }
    ],
    voiceBriefing: 'जाति प्रमाण पत्र राज्य के ई-डिस्ट्रिक्ट पोर्टल पर ऑनलाइन बनता है। लेखपाल की जांच के बाद डिजिटल साइन वाली कॉपी मिलती है।',
    keywords: ['caste certificate', 'जाति प्रमाण पत्र', 'obc', 'sc', 'st', 'ews']
  },
  {
    id: 'income-certificate',
    title: 'आय प्रमाण पत्र (Income Certificate)',
    department: 'राजस्व विभाग (समस्त राज्य सरकारें)',
    ministry: 'कार्मिक, लोक शिकायत तथा पेंशन मंत्रालय',
    category: 'REVENUE_HOUSING',
    benefitSummary: 'छात्रवृत्ति, फीस माफी, मुफ्त राशन और पेंशन पात्रता हेतु वार्षिक आय का प्रमाण',
    officialApplyUrl: 'https://edistrict.gov.in/',
    portalName: 'State e-District Portal',
    estimatedDays: '7 से 15 कार्यदिवस',
    govtFee: '₹15 से ₹30',
    requiredDocuments: [
      { name: 'स्व-प्रमाणित आय घोषणा पत्र', mandatory: true },
      { name: 'आधार कार्ड', mandatory: true },
      { name: 'वेतन पर्ची अथवा लेखपाल रिपोर्ट', mandatory: false }
    ],
    voiceBriefing: 'आय प्रमाण पत्र के लिए ई-डिस्ट्रिक्ट पोर्टल पर आवेदन करें। यह आपकी पारिवारिक वार्षिक आय का कानूनी प्रमाण होता है।',
    keywords: ['income certificate', 'आय प्रमाण पत्र', 'aay praman patra']
  },
  {
    id: 'domicile-certificate',
    title: 'निवास प्रमाण पत्र (Domicile / Residence Certificate)',
    department: 'राजस्व विभाग',
    ministry: 'गृह मंत्रालय',
    category: 'REVENUE_HOUSING',
    benefitSummary: 'राज्य की सरकारी नौकरियों और कॉलेज दाखिलों में स्थानीय निवासी होने का प्रमाण',
    officialApplyUrl: 'https://edistrict.gov.in/',
    portalName: 'State e-District Portal',
    estimatedDays: '7 से 15 कार्यदिवस',
    govtFee: '₹15 से ₹30',
    requiredDocuments: [
      { name: 'आधार कार्ड / वोटर आईडी', mandatory: true },
      { name: 'बिजली बिल / पानी बिल / निवास प्रमाण', mandatory: true },
      { name: 'पासपोर्ट साइज रंगीन फोटो', mandatory: true }
    ],
    voiceBriefing: 'निवास प्रमाण पत्र से प्रमाणित होता है कि आप उस राज्य के स्थायी निवासी हैं। यह ई-डिस्ट्रिक्ट से ऑनलाइन बनता है।',
    keywords: ['domicile', 'residence certificate', 'निवास प्रमाण पत्र', 'mool niwas']
  },
  {
    id: 'bhulekh-khatoni',
    title: 'भूलेख / खतौनी नकल (Online Land Records & Khasra)',
    department: 'राजस्व परिषद (Board of Revenue)',
    ministry: 'ग्रामीण विकास मंत्रालय',
    category: 'REVENUE_HOUSING',
    benefitSummary: 'कृषि भूमि के रकबे, मालिक के नाम और खसरा-खतौनी की डिजिटल प्रमाणित नकल',
    officialApplyUrl: 'https://upbhulekh.gov.in/',
    portalName: 'Bhulekh Land Records Portal',
    estimatedDays: 'तत्काल 1 मिनट में डाउनलोड',
    govtFee: 'देखना ₹0 / डिजिटल नकल ₹15',
    requiredDocuments: [
      { name: 'जनपद, तहसील और ग्राम का नाम', mandatory: true },
      { name: 'खसरा संख्या, गाटा संख्या या खातेदार का नाम', mandatory: true }
    ],
    voiceBriefing: 'जमीन की खतौनी या भूलेख देखने के लिए अपने राज्य के भूलेख पोर्टल पर जाएं और खाता संख्या डालकर तत्काल नकल निकालें।',
    keywords: ['bhulekh', 'khatauni', 'भूलेख', 'खतौनी', 'खसरा', 'khasra', 'जमीन की नकल']
  },
  {
    id: 'pm-awas',
    title: 'प्रधानमंत्री आवास योजना (PMAY ग्रामीण / शहरी पक्का मकान)',
    department: 'आवासन और शहरी / ग्रामीण विकास मंत्रालय',
    ministry: 'ग्रामीण विकास मंत्रालय',
    category: 'REVENUE_HOUSING',
    benefitSummary: 'पक्का मकान बनाने हेतु ₹1,20,000 से ₹2,50,000 की सीधी सरकारी बैंक सब्सिडी',
    officialApplyUrl: 'https://pmaymis.gov.in/',
    portalName: 'PMAY Housing Portal',
    estimatedDays: 'ग्राम सभा सत्यापन उपरांत',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'परिवार के सभी सदस्यों का आधार कार्ड', mandatory: true },
      { name: 'जमीन के कागजात / मनरेगा जॉब कार्ड', mandatory: true },
      { name: 'कच्चे मकान की फोटो व बैंक पासबुक', mandatory: true }
    ],
    voiceBriefing: 'पक्का मकान बनवाने की सरकारी सब्सिडी के लिए पीएम आवास पोर्टल पर पात्रता चेक करें और ऑनलाइन आवेदन करें।',
    keywords: ['pmay', 'awas', 'आवास', 'pm awas', 'colony', 'मकान']
  },

  // ==========================================
  // 6. परिवहन एवं वाहन सेवाएं (TRANSPORT)
  // ==========================================
  {
    id: 'driving-license',
    title: 'ड्राइविंग लाइसेंस (लर्नर / स्थायी DL / नवीनीकरण)',
    department: 'सड़क परिवहन और राजमार्ग मंत्रालय',
    ministry: 'सड़क परिवहन और राजमार्ग मंत्रालय',
    category: 'TRANSPORT',
    benefitSummary: 'कानूनी रूप से बाइक, कार या व्यावसायिक वाहन चलाने का राष्ट्रीय लाइसेंस',
    officialApplyUrl: 'https://sarathi.parivahan.gov.in/',
    portalName: 'Sarathi Parivahan Portal',
    estimatedDays: 'लर्नर तत्काल / स्थायी टेस्ट के 7 दिन बाद',
    govtFee: 'लर्नर ₹200 / स्थायी DL ₹1,000 (राज्य अनुसार)',
    requiredDocuments: [
      { name: 'आधार कार्ड (घर बैठे बिना आरटीओ ऑनलाइन टेस्ट हेतु)', mandatory: true },
      { name: 'आयु प्रमाण पत्र व 10वीं मार्कशीट', mandatory: true }
    ],
    voiceBriefing: 'ड्राइविंग लाइसेंस के लिए सारथी परिवहन पोर्टल से आवेदन करें। आधार से घर बैठे लर्नर लाइसेंस का ऑनलाइन टेस्ट दे सकते हैं।',
    keywords: ['dl', 'driving license', 'ड्राइविंग लाइसेंस', 'sarathi', 'parivahan']
  },
  {
    id: 'vehicle-rc',
    title: 'वाहन आरसी सेवाएं (RC Transfer / NOC / Address Change)',
    department: 'सड़क परिवहन और राजमार्ग मंत्रालय',
    ministry: 'सड़क परिवहन और राजमार्ग मंत्रालय',
    category: 'TRANSPORT',
    benefitSummary: 'गाड़ी का मालिकाना हक ट्रांसफर, एनओसी और आरसी में मोबाइल अपडेट',
    officialApplyUrl: 'https://vahan.parivahan.gov.in/vahanservice/',
    portalName: 'Vahan Citizen Services',
    estimatedDays: '10 से 15 कार्यदिवस',
    govtFee: 'सेवा अनुसार निर्धारित सरकारी फीस',
    requiredDocuments: [
      { name: 'मूल रजिस्ट्रेशन सर्टिफिकेट (RC)', mandatory: true },
      { name: 'वैध वाहन बीमा व प्रदूषण (PUC) पर्चा', mandatory: true },
      { name: 'क्रेता/विक्रेता का आधार कार्ड', mandatory: true }
    ],
    voiceBriefing: 'गाड़ी की आरसी ट्रांसफर या एनओसी के लिए वाहन परिवहन पोर्टल पर चेसिस नंबर और गाड़ी नंबर डालकर प्रक्रिया पूरी करें।',
    keywords: ['rc', 'vahan', 'आरसी', 'गाड़ी ट्रांसफर', 'parivahan rc']
  },
  {
    id: 'hsrp-plate',
    title: 'हाई सिक्योरिटी नंबर प्लेट (HSRP Booking & Fitment)',
    department: 'सड़क परिवहन और राजमार्ग मंत्रालय',
    ministry: 'सड़क परिवहन और राजमार्ग मंत्रालय',
    category: 'TRANSPORT',
    benefitSummary: 'सभी वाहनों पर सरकार द्वारा अनिवार्य रंगीन स्टीकर व लेजर नक्काशीदार नंबर प्लेट',
    officialApplyUrl: 'https://bookmyhsrp.com/',
    portalName: 'Book My HSRP Official Portal',
    estimatedDays: '4 से 7 कार्यदिवस में डीलर फिटमेंट',
    govtFee: 'दोपहिया ~₹365 / चारपहिया ~₹600-₹1,100',
    requiredDocuments: [
      { name: 'वाहन की आरसी (इंजन नंबर व चेसिस नंबर हेतु)', mandatory: true },
      { name: 'मोबाइल नंबर (ओटीपी हेतु)', mandatory: true }
    ],
    voiceBriefing: 'गाड़ी में हाई सिक्योरिटी नंबर प्लेट लगवाने के लिए बुक-माय-एचएसआरपी पोर्टल पर आरसी के चेसिस नंबर से ऑनलाइन बुकिंग करें।',
    keywords: ['hsrp', 'number plate', 'एचएसआरपी', 'नंबर प्लेट', 'security plate']
  },

  // ==========================================
  // 7. पेंशन, सामाजिक कल्याण एवं वित्त (FINANCE_PENSION)
  // ==========================================
  {
    id: 'national-pension',
    title: 'वृद्धावस्था / विधवा / दिव्यांग पेंशन (NSAP & State Pension)',
    department: 'ग्रामीण विकास / समाज कल्याण विभाग',
    ministry: 'ग्रामीण विकास मंत्रालय',
    category: 'FINANCE_PENSION',
    benefitSummary: '₹1,000 से ₹1,500 हर महीने सीधे लाभार्थी के बैंक खाते में आर्थिक संबल',
    officialApplyUrl: 'https://nsap.nic.in/',
    portalName: 'NSAP National Pension Portal',
    estimatedDays: '45 कार्यदिवस',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'आधार कार्ड (उम्र 60 वर्ष या अधिक)', mandatory: true },
      { name: 'आय प्रमाण पत्र अथवा बीपीएल राशन कार्ड', mandatory: true },
      { name: 'बैंक पासबुक (आधार डीबीटी लिंक)', mandatory: true }
    ],
    voiceBriefing: 'वृद्धावस्था या विधवा पेंशन के लिए समाज कल्याण विभाग के एनएसएपी पोर्टल पर आधार और बैंक पासबुक से ऑनलाइन आवेदन करें।',
    keywords: ['pension', 'पेंशन', 'nsap', 'वृद्धा पेंशन', 'विधवा पेंशन', 'budhapa pension']
  },
  {
    id: 'pm-svanidhi',
    title: 'पीएम स्वनिधि योजना (स्ट्रीट वेंडर ₹10,000 से ₹50,000 लोन)',
    department: 'आवासन और शहरी कार्य मंत्रालय',
    ministry: 'आवासन और शहरी कार्य मंत्रालय',
    category: 'FINANCE_PENSION',
    benefitSummary: 'रेहड़ी, ठेला और पटरी दुकानदारों को बिना गारंटी के बेहद सस्ता व्यापार ऋण',
    officialApplyUrl: 'https://pmsvanidhi.mohua.gov.in/',
    portalName: 'PM SVANidhi Portal',
    estimatedDays: '7 से 10 कार्यदिवस',
    govtFee: '₹0 (कोई प्रोसेसिंग फीस नहीं)',
    requiredDocuments: [
      { name: 'वेंडिंग पहचान पत्र / नगर पालिका सिफ़ारिश', mandatory: true },
      { name: 'आधार कार्ड', mandatory: true },
      { name: 'बैंक खाता विवरण', mandatory: true }
    ],
    voiceBriefing: 'छोटे दुकानदारों और रेहड़ी-पटरी वालों को बिना गारंटी लोन के लिए पीएम स्वनिधि पोर्टल पर सीधे आवेदन करना होता है।',
    keywords: ['svanidhi', 'vendor loan', 'स्वनिधि', 'रेहड़ी लोन', 'thela loan']
  },
  {
    id: 'sukanya-samriddhi',
    title: 'सुकन्या समृद्धि योजना (SSY बेटी खाता)',
    department: 'डाक विभाग / वित्तीय सेवाएं विभाग',
    ministry: 'संचार एवं वित्त मंत्रालय',
    category: 'FINANCE_PENSION',
    benefitSummary: '10 वर्ष से कम उम्र की बेटी के लिए सबसे अधिक 8.2% ब्याज दर और 80C टैक्स छूट',
    officialApplyUrl: 'https://www.ippbonline.com/',
    portalName: 'India Post / National Savings',
    estimatedDays: 'तत्काल डाकघर / बैंक शाखा में',
    govtFee: 'न्यूनतम ₹250 जमा से शुरुआत',
    requiredDocuments: [
      { name: 'बालिका का जन्म प्रमाण पत्र', mandatory: true },
      { name: 'अभिभावक का आधार व पैन कार्ड', mandatory: true },
      { name: 'निवास प्रमाण पत्र व फोटो', mandatory: true }
    ],
    voiceBriefing: '10 वर्ष तक की बेटियों के उज्ज्वल भविष्य के लिए सुकन्या समृद्धि खाता डाकघर या बैंक में खुलवाया जाता है।',
    keywords: ['sukanya', 'ssy', 'सुकन्या समृद्धि', 'beti khata', 'kanya yojana']
  },

  // ==========================================
  // 8. शिक्षा, छात्रवृत्ति एवं कौशल (EDUCATION_SKILL)
  // ==========================================
  {
    id: 'national-scholarship',
    title: 'राष्ट्रीय छात्रवृत्ति पोर्टल (National Scholarship Portal - NSP)',
    department: 'उच्च शिक्षा विभाग',
    ministry: 'शिक्षा मंत्रालय',
    category: 'EDUCATION_SKILL',
    benefitSummary: 'प्री-मैट्रिक, पोस्ट-मैट्रिक और उच्च शिक्षा हेतु सरकार से सीधी छात्रवृत्ति',
    officialApplyUrl: 'https://scholarships.gov.in/',
    portalName: 'National Scholarship Portal (NSP)',
    estimatedDays: 'संस्थान एवं राज्य सत्यापन अनुसार',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'छात्र का आधार कार्ड', mandatory: true },
      { name: 'पिछली कक्षा की मार्कशीट', mandatory: true },
      { name: 'पारिवारिक आय प्रमाण पत्र व जाति प्रमाण', mandatory: true },
      { name: 'स्कूल/कॉलेज का बोनाफाइड प्रमाण पत्र व बैंक खाता', mandatory: true }
    ],
    voiceBriefing: 'सरकारी छात्रवृत्ति प्राप्त करने के लिए राष्ट्रीय छात्रवृत्ति पोर्टल एनएसपी पर अपनी मार्कशीट, आय और जाति प्रमाण से आवेदन करें।',
    keywords: ['scholarship', 'nsp', 'छात्रवृत्ति', 'वजीफा', 'vazifa', 'scholarships']
  },
  {
    id: 'apaar-abc-id',
    title: 'अपार / एबीसी आईडी (APAAR / Academic Bank of Credits)',
    department: 'उच्च शिक्षा विभाग',
    ministry: 'शिक्षा मंत्रालय',
    category: 'EDUCATION_SKILL',
    benefitSummary: 'एक राष्ट्र, एक छात्र पहचान - स्कूल से लेकर कॉलेज तक के सभी क्रेडिट ऑनलाइन सुरक्षित',
    officialApplyUrl: 'https://www.abc.gov.in/',
    portalName: 'Academic Bank of Credits Portal',
    estimatedDays: 'तत्काल 1 मिनट में डाउनलोड',
    govtFee: '₹0 (आजीवन निःशुल्क)',
    requiredDocuments: [
      { name: 'आधार कार्ड', mandatory: true },
      { name: 'स्कूल या कॉलेज का नाम व रोल नंबर', mandatory: true }
    ],
    voiceBriefing: 'अपार आईडी सभी छात्रों की डिजिटल पढ़ाई का खाता है। इसे एबीसी या डिजिलॉकर पोर्टल से आधार की मदद से तुरंत बनाएं।',
    keywords: ['apaar', 'abc id', 'अपार आईडी', 'student id', 'academic bank']
  },
  {
    id: 'pmkvy-skill',
    title: 'प्रधानमंत्री कौशल विकास योजना (PMKVY Free Training)',
    department: 'कौशल विकास और उद्यमिता मंत्रालय',
    ministry: 'कौशल विकास मंत्रालय',
    category: 'EDUCATION_SKILL',
    benefitSummary: 'मुफ्त तकनीकी व वोकेशनल ट्रेनिंग, सरकारी सर्टिफिकेट और रोजगार सहायता',
    officialApplyUrl: 'https://www.skillindiadigital.gov.in/',
    portalName: 'Skill India Digital Hub',
    estimatedDays: 'बैच प्रारंभ तिथि अनुसार',
    govtFee: '₹0 (पूर्णतः मुफ्त प्रशिक्षण)',
    requiredDocuments: [
      { name: 'आधार कार्ड व मोबाइल नंबर', mandatory: true },
      { name: 'शैक्षणिक योग्यता मार्कशीट (8वीं/10वीं/12वीं)', mandatory: true }
    ],
    voiceBriefing: 'मुफ्त कंप्यूटर और तकनीकी हुनर सीखने के लिए स्किल इंडिया डिजिटल पोर्टल पर कौशल विकास योजना में पंजीकरण करें।',
    keywords: ['pmkvy', 'skill india', 'कौशल विकास', 'free training', 'हुनर']
  },

  // ==========================================
  // 9. कानूनी, पुलिस एवं जन शिकायत (UTILITY_LEGAL)
  // ==========================================
  {
    id: 'police-pcc',
    title: 'पुलिस चरित्र प्रमाण पत्र (Police Character Certificate - PCC)',
    department: 'राज्य पुलिस विभाग (CCTNS)',
    ministry: 'गृह मंत्रालय',
    category: 'UTILITY_LEGAL',
    benefitSummary: 'नौकरी, पासपोर्ट, ठेकेदारी और सीएससी सेंटर खोलने हेतु अनिवार्य चरित्र सत्यापन',
    officialApplyUrl: 'https://cctnsup.gov.in/',
    portalName: 'CCTNS Citizen Police Portal',
    estimatedDays: '15 कार्यदिवस (थाना रिपोर्ट उपरांत)',
    govtFee: '₹50 (ऑनलाइन सरकारी फीस)',
    requiredDocuments: [
      { name: 'आधार कार्ड / निवास प्रमाण', mandatory: true },
      { name: 'पासपोर्ट साइज फोटो', mandatory: true }
    ],
    voiceBriefing: 'पुलिस चरित्र प्रमाण पत्र के लिए अपने राज्य के पुलिस पोर्टल या यूपी-कॉप ऐप पर आवेदन करें। थाने से जांच के बाद ऑनलाइन सर्टिफिकेट मिलता है।',
    keywords: ['pcc', 'character certificate', 'पुलिस वेरिफिकेशन', 'charitra praman patra']
  },
  {
    id: 'cyber-crime',
    title: 'राष्ट्रीय साइबर अपराध रिपोर्टिंग (National Cyber Crime Reporting)',
    department: 'भारतीय साइबर अपराध समन्वय केंद्र (I4C)',
    ministry: 'गृह मंत्रालय',
    category: 'UTILITY_LEGAL',
    benefitSummary: 'ऑनलाइन वित्तीय धोखाधड़ी (UPI/ATM ठगी) पर तत्काल पैसा फ्रीज कराने हेतु हेल्पलाइन 1930',
    officialApplyUrl: 'https://cybercrime.gov.in/',
    portalName: 'National Cyber Crime Reporting Portal',
    estimatedDays: 'तत्काल प्राथमिक जांच व बैंक अलर्ट',
    govtFee: '₹0 (निःशुल्क)',
    requiredDocuments: [
      { name: 'बैंक ट्रांजैक्शन आईडी / यूटीआर नंबर', mandatory: true },
      { name: 'धोखाधड़ी के स्क्रीनशॉट / मैसेज', mandatory: true },
      { name: 'शिकायतकर्ता का आधार व मोबाइल', mandatory: true }
    ],
    voiceBriefing: 'अगर आपके खाते से ऑनलाइन ठगी हुई है तो तत्काल 1930 पर कॉल करें या साइबर क्राइम पोर्टल पर अपनी शिकायत दर्ज कराएं।',
    keywords: ['cyber crime', 'साइबर क्राइम', '1930', 'ऑनलाइन ठगी', 'bank fraud']
  },
  {
    id: 'rti-online',
    title: 'सूचना का अधिकार (RTI Online Application)',
    department: 'कार्मिक और प्रशिक्षण विभाग (DoPT)',
    ministry: 'कार्मिक, लोक शिकायत तथा पेंशन मंत्रालय',
    category: 'UTILITY_LEGAL',
    benefitSummary: 'किसी भी सरकारी विभाग से कार्य, फंड और योजनाओं का आधिकारिक ब्योरा मांगने का कानूनी अधिकार',
    officialApplyUrl: 'https://rtionline.gov.in/',
    portalName: 'RTI Online Central Portal',
    estimatedDays: '30 कार्यदिवस में उत्तर अनिवार्य',
    govtFee: '₹10 (बीपीएल कार्ड धारकों हेतु ₹0)',
    requiredDocuments: [
      { name: 'स्पष्ट लिखित प्रश्न / सूचना का विवरण', mandatory: true },
      { name: 'पहचान पत्र व संपर्क सूत्र', mandatory: true }
    ],
    voiceBriefing: 'सरकारी विभागों से योजनाओं और कार्यों की आधिकारिक जानकारी पाने के लिए आरटीआई ऑनलाइन पोर्टल पर 10 रुपये की फीस से आरटीआई लगाएं।',
    keywords: ['rti', 'rti online', 'सूचना का अधिकार', 'right to information']
  },
  {
    id: 'cpgrams-grievance',
    title: 'प्रधानमंत्री जन शिकायत निवारण (CPGRAMS Public Grievance)',
    department: 'प्रशासनिक सुधार और लोक शिकायत विभाग',
    ministry: 'कार्मिक, लोक शिकायत तथा पेंशन मंत्रालय',
    category: 'UTILITY_LEGAL',
    benefitSummary: 'सरकारी दफ्तरों में काम न होने या भ्रष्टाचार पर सीधे केंद्र सरकार को सीधी शिकायत',
    officialApplyUrl: 'https://pgportal.gov.in/',
    portalName: 'CPGRAMS Portal (pgportal)',
    estimatedDays: '30 से 45 कार्यदिवस में निस्तारण',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'शिकायत का संक्षिप्त विवरण', mandatory: true },
      { name: 'संबंधित पुराने कागजात / आवेदन की प्रति', mandatory: false }
    ],
    voiceBriefing: 'अगर किसी भी सरकारी विभाग में आपका काम अटका है तो पीजी पोर्टल यानी सी-पीजीआरएएमएस पर सीधे शिकायत दर्ज कराएं।',
    keywords: ['cpgrams', 'pgportal', 'शिकायत', 'grievance', 'जनसुनवाई', 'jansunwai']
  },
  {
    id: 'digilocker',
    title: 'डिजिलॉकर (DigiLocker National Cloud)',
    department: 'डिजिटल इंडिया कॉरपोरेशन',
    ministry: 'इलेक्ट्रॉनिक्स एवं सूचना प्रौद्योगिकी मंत्रालय',
    category: 'UTILITY_LEGAL',
    benefitSummary: 'आईटी एक्ट 2000 के तहत मूल कागजात के बराबर मान्य सरकारी डिजिटल लॉकर',
    officialApplyUrl: 'https://www.digilocker.gov.in/',
    portalName: 'DigiLocker Official Portal',
    estimatedDays: 'तत्काल 1 सेकंड में जारी',
    govtFee: '₹0 (आजीवन 100% मुफ़्त)',
    requiredDocuments: [
      { name: 'आधार नंबर व लिंक मोबाइल नंबर', mandatory: true }
    ],
    voiceBriefing: 'डिजिलॉकर में आपके मार्कशीट, आरसी, बीमा और ड्राइविंग लाइसेंस कानूनी रूप से हमेशा सुरक्षित रहते हैं।',
    keywords: ['digilocker', 'डिजीलॉकर', 'डिजिटल दस्तावेज', 'marksheet download']
  },
  {
    id: 'ujjwala-gas',
    title: 'प्रधानमंत्री उज्ज्वला योजना 2.0 (मुफ्त गैस कनेक्शन व चूल्हा)',
    department: 'पेट्रोलियम और प्राकृतिक गैस मंत्रालय',
    ministry: 'पेट्रोलियम और प्राकृतिक गैस मंत्रालय',
    category: 'UTILITY_LEGAL',
    benefitSummary: 'गरीब परिवारों की महिलाओं को मुफ्त रसोई गैस सिलेंडर, रेगुलेटर और चूल्हा',
    officialApplyUrl: 'https://www.pmuy.gov.in/',
    portalName: 'PMUY 2.0 National Portal',
    estimatedDays: '15 कार्यदिवस',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'महिला मुखिया का आधार कार्ड', mandatory: true },
      { name: 'राशन कार्ड / 14 सूत्रीय घोषणा पत्र', mandatory: true },
      { name: 'बैंक खाता विवरण (आधार लिंक)', mandatory: true }
    ],
    voiceBriefing: 'मुफ्त गैस कनेक्शन के लिए गरीब परिवार की महिलाएं पीएम उज्ज्वला पोर्टल पर नए गैस कनेक्शन हेतु आवेदन करें।',
    keywords: ['ujjwala', 'gas connection', 'उज्ज्वला', 'lpg gas', 'मुफ्त गैस']
  }
];

export const CATEGORY_METADATA: Record<string, { title: string; icon: string; color: string }> = {
  BUSINESS_TAX: { title: 'जीएसटी, व्यापार व टैक्स', icon: '💼', color: 'emerald' },
  IDENTITY: { title: 'पहचान एवं नागरिकता', icon: '🪪', color: 'orange' },
  HEALTH_WELFARE: { title: 'स्वास्थ्य व सामाजिक सुरक्षा', icon: '🏥', color: 'red' },
  AGRICULTURE: { title: 'कृषि एवं किसान कल्याण', icon: '🌾', color: 'lime' },
  REVENUE_HOUSING: { title: 'भूमि, आवास एवं प्रमाण पत्र', icon: '🏡', color: 'amber' },
  TRANSPORT: { title: 'परिवहन एवं वाहन सेवा', icon: '🚗', color: 'blue' },
  FINANCE_PENSION: { title: 'पेंशन, लोन एवं बैंकिंग', icon: '💰', color: 'indigo' },
  EDUCATION_SKILL: { title: 'शिक्षा एवं रोजगार', icon: '🎓', color: 'cyan' },
  UTILITY_LEGAL: { title: 'कानूनी, पुलिस व नागरिक सेवाएं', icon: '⚖️', color: 'purple' }
};
