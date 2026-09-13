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
    | 'UTILITY_LEGAL';
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
  // 1. पहचान एवं नागरिकता (IDENTITY)
  {
    id: 'aadhaar-update',
    title: 'आधार कार्ड (अपडेट / डाउनलोड / अपॉइंटमेंट)',
    department: 'भारतीय विशिष्ट पहचान प्राधिकरण (UIDAI)',
    ministry: 'इलेक्ट्रॉनिक्स एवं सूचना प्रौद्योगिकी मंत्रालय',
    category: 'IDENTITY',
    benefitSummary: 'देशभर में मान्य 12 अंकों की डिजिटल पहचान व पता प्रमाण',
    officialApplyUrl: 'https://myaadhaar.uidai.gov.in/',
    portalName: 'myAadhaar Portal (UIDAI)',
    estimatedDays: '15 से 30 कार्यदिवस',
    govtFee: '₹50 (डेमोग्राफिक) / ₹100 (बायोमेट्रिक)',
    requiredDocuments: [
      { name: 'पहचान का प्रमाण (वोटर कार्ड/पैन/पासपोर्ट)', mandatory: true },
      { name: 'पते का प्रमाण (बिजली बिल/राशन कार्ड/बैंक पासबुक)', mandatory: true },
      { name: 'मोबाइल नंबर (ओटीपी हेतु)', mandatory: true }
    ],
    voiceBriefing: 'आधार कार्ड के लिए myAadhaar आधिकारिक पोर्टल पर जाएं। इसके लिए पुराना पहचान पत्र और पते का प्रमाण अनिवार्य है।',
    keywords: ['aadhaar', 'aadhar', 'आधार', 'uidai', 'myaadhaar']
  },
  {
    id: 'pan-new',
    title: 'नया पैन कार्ड (Form 49A / e-PAN)',
    department: 'आयकर विभाग (Income Tax Department)',
    ministry: 'वित्त मंत्रालय',
    category: 'IDENTITY',
    benefitSummary: 'बैंक खाता, लोन और 50,000 से अधिक के वित्तीय लेनदेन हेतु अनिवार्य',
    officialApplyUrl: 'https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html',
    portalName: 'Protean NSDL / UTIITSL Portal',
    estimatedDays: 'तत्काल (e-PAN 10 मिनट) / भौतिक कार्ड 10-15 दिन',
    govtFee: 'e-PAN ₹0 / भौतिक कार्ड ₹107',
    requiredDocuments: [
      { name: 'आधार कार्ड', mandatory: true },
      { name: 'सादे कागज़ पर हस्ताक्षर की फोटो', mandatory: true },
      { name: 'पासपोर्ट साइज फोटो', mandatory: false }
    ],
    voiceBriefing: 'नया पैन कार्ड आयकर विभाग के एनएसडीएल या ई-फाइलिंग पोर्टल से बनता है। आधार कार्ड और हस्ताक्षर की फोटो तैयार रखें।',
    keywords: ['pan', 'pan card', 'पैन कार्ड', 'nsdl', 'utiitsl', 'income tax']
  },
  {
    id: 'voter-id',
    title: 'मतदाता पहचान पत्र (नया वोटर कार्ड - Form 6)',
    department: 'भारत निर्वाचन आयोग (ECI)',
    ministry: 'विधि एवं न्याय मंत्रालय',
    category: 'IDENTITY',
    benefitSummary: 'लोकतांत्रिक मताधिकार और राष्ट्रीय स्तर पर मान्य पहचान पत्र',
    officialApplyUrl: 'https://voters.eci.gov.in/',
    portalName: 'Voters Service Portal (ECI)',
    estimatedDays: '20 से 30 कार्यदिवस',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'आयु प्रमाण (आधार कार्ड/जन्म प्रमाण पत्र/10वीं मार्कशीट)', mandatory: true },
      { name: 'निवास प्रमाण (बिजली बिल/पानी बिल/किरायानामा)', mandatory: true },
      { name: 'पासपोर्ट साइज रंगीन फोटो', mandatory: true }
    ],
    voiceBriefing: 'नया वोटर कार्ड बनाने के लिए फॉर्म 6 भरा जाता है। यह भारत निर्वाचन आयोग के पोर्टल पर पूरी तरह मुफ्त बनता है।',
    keywords: ['voter', 'voter id', 'मतदाता', 'पहचान पत्र', 'nvsp', 'eci']
  },
  {
    id: 'passport-seva',
    title: 'पासपोर्ट आवेदन (Fresh Passport Seva)',
    department: 'कांसुलर, पासपोर्ट और वीजा प्रभाग',
    ministry: 'विदेश मंत्रालय',
    category: 'IDENTITY',
    benefitSummary: 'अंतरराष्ट्रीय यात्रा और वैश्विक नागरिकता पहचान पत्र',
    officialApplyUrl: 'https://www.passportindia.gov.in/',
    portalName: 'Passport Seva Kendra Portal',
    estimatedDays: 'सामान्य 15-20 दिन / तत्काल 3-5 दिन',
    govtFee: '₹1,500 (सामान्य 36 पेज)',
    requiredDocuments: [
      { name: 'जन्म तिथि प्रमाण (आधार/जन्म प्रमाण पत्र)', mandatory: true },
      { name: 'वर्तमान पते का प्रमाण', mandatory: true },
      { name: 'गैर-ईसीआर प्रमाण (यदि 10वीं पास हैं)', mandatory: false }
    ],
    voiceBriefing: 'पासपोर्ट के लिए विदेश मंत्रालय के पासपोर्ट सेवा पोर्टल से ऑनलाइन अपॉइंटमेंट बुक किया जाता है।',
    keywords: ['passport', 'पासपोर्ट', 'passport seva', 'विदेश यात्रा']
  },
  {
    id: 'ration-card',
    title: 'राशन कार्ड (NFSA नया आवेदन / नाम जोड़ना)',
    department: 'खाद्य एवं रसद विभाग',
    ministry: 'उपभोक्ता मामले, खाद्य और सार्वजनिक वितरण मंत्रालय',
    category: 'IDENTITY',
    benefitSummary: 'प्रति व्यक्ति 5 किलो मुफ्त खाद्यान्न (चावल/गेहूं) व सरकारी राशन',
    officialApplyUrl: 'https://nfsa.gov.in/',
    portalName: 'National Food Security Portal (NFSA)',
    estimatedDays: '30 कार्यदिवस',
    govtFee: '₹0 से ₹20 (राज्य नियमानुसार)',
    requiredDocuments: [
      { name: 'परिवार के मुखिया का आधार कार्ड', mandatory: true },
      { name: 'सभी पारिवारिक सदस्यों के आधार', mandatory: true },
      { name: 'आय प्रमाण पत्र व बैंक पासबुक', mandatory: true }
    ],
    voiceBriefing: 'राशन कार्ड के लिए खाद्य विभाग के एनएफएसए पोर्टल से आवेदन करें। परिवार के सभी सदस्यों का आधार अनिवार्य है।',
    keywords: ['ration', 'ration card', 'राशन कार्ड', 'nfsa', 'राशन']
  },

  // 2. स्वास्थ्य एवं सामाजिक सुरक्षा (HEALTH_WELFARE)
  {
    id: 'ayushman-card',
    title: 'आयुष्मान भारत कार्ड (PM-JAY Golden Card)',
    department: 'राष्ट्रीय स्वास्थ्य प्राधिकरण (NHA)',
    ministry: 'स्वास्थ्य एवं परिवार कल्याण मंत्रालय',
    category: 'HEALTH_WELFARE',
    benefitSummary: 'प्रतिवर्ष ₹5,00,000 तक सरकारी व सूचीबद्ध प्राइवेट अस्पतालों में मुफ्त इलाज',
    officialApplyUrl: 'https://beneficiary.nha.gov.in/',
    portalName: 'PM-JAY Beneficiary Portal (NHA)',
    estimatedDays: 'तत्काल (e-KYC के 5 मिनट बाद)',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'आधार कार्ड (ओटीपी लिंक)', mandatory: true },
      { name: 'राशन कार्ड या परिवार आईडी', mandatory: true }
    ],
    voiceBriefing: 'आयुष्मान कार्ड से पांच लाख रुपये तक का मुफ्त इलाज मिलता है। एनएचए के बेनिफिशियरी पोर्टल पर आधार व राशन कार्ड से ई-केवाईसी करें।',
    keywords: ['ayushman', 'pmjay', 'आयुष्मान', 'गोल्डन कार्ड', 'muft ilaj']
  },
  {
    id: 'eshram-card',
    title: 'ई-श्रम कार्ड (e-Shram National Database)',
    department: 'श्रम एवं रोजगार मंत्रालय',
    ministry: 'श्रम एवं रोजगार मंत्रालय',
    category: 'HEALTH_WELFARE',
    benefitSummary: '₹2 लाख का दुर्घटना बीमा, आपदा भत्ता व असंगठित कामगार कल्याण लाभ',
    officialApplyUrl: 'https://eshram.gov.in/',
    portalName: 'e-Shram Portal',
    estimatedDays: 'तत्काल डिजिटल कार्ड डाउनलोड',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'आधार कार्ड', mandatory: true },
      { name: 'आधार से लिंक मोबाइल नंबर', mandatory: true },
      { name: 'सक्रिय बैंक खाता विवरण', mandatory: true }
    ],
    voiceBriefing: 'मजदूर, कामगार और रेहड़ी-पटरी वाले ई-श्रम पोर्टल पर सीधे आधार और बैंक खाते से निःशुल्क पंजीकरण कर सकते हैं।',
    keywords: ['eshram', 'e-shram', 'ई श्रम', 'shramik card', 'मजदूर कार्ड']
  },
  {
    id: 'abha-card',
    title: 'आभा हेल्थ आईडी (ABHA - Ayushman Bharat Health Account)',
    department: 'आयुष्मान भारत डिजिटल मिशन (ABDM)',
    ministry: 'स्वास्थ्य एवं परिवार कल्याण मंत्रालय',
    category: 'HEALTH_WELFARE',
    benefitSummary: '14 अंकों का डिजिटल स्वास्थ्य रिकॉर्ड खाता, सभी मेडिकल पर्चियां ऑनलाइन सुरक्षित',
    officialApplyUrl: 'https://healthid.ndhm.gov.in/',
    portalName: 'ABDM Health Portal',
    estimatedDays: 'तत्काल (2 मिनट)',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'आधार कार्ड अथवा ड्राइविंग लाइसेंस', mandatory: true },
      { name: 'ओटीपी प्राप्त करने हेतु मोबाइल नंबर', mandatory: true }
    ],
    voiceBriefing: 'आभा कार्ड आपका डिजिटल स्वास्थ्य खाता है जिसमें आपकी सभी जांच रिपोर्टें सुरक्षित रहती हैं।',
    keywords: ['abha', 'health id', 'आभा', 'ndhm', 'abdm']
  },

  // 3. कृषि एवं किसान कल्याण (AGRICULTURE)
  {
    id: 'pm-kisan',
    title: 'पीएम किसान सम्मान निधि (नया किसान पंजीकरण / e-KYC)',
    department: 'कृषि एवं किसान कल्याण विभाग',
    ministry: 'कृषि एवं किसान कल्याण मंत्रालय',
    category: 'AGRICULTURE',
    benefitSummary: 'प्रत्येक 4 माह में ₹2,000 की किस्त (सालाना ₹6,000 सीधे बैंक खाते में)',
    officialApplyUrl: 'https://pmkisan.gov.in/',
    portalName: 'PM-Kisan Portal',
    estimatedDays: 'सत्यापन उपरांत आगामी किस्त में देय',
    govtFee: '₹0 (पोर्टल पर पंजीकरण निःशुल्क)',
    requiredDocuments: [
      { name: 'आधार कार्ड', mandatory: true },
      { name: 'खतौनी / जमीन के स्वामित्व के कागजात', mandatory: true },
      { name: 'डीबीटी सक्षम बैंक खाता पासबुक', mandatory: true }
    ],
    voiceBriefing: 'पीएम किसान योजना में सालाना 6000 रुपये मिलते हैं। पीएम किसान पोर्टल पर आधार और जमीन की खतौनी से नया आवेदन करें।',
    keywords: ['pm kisan', 'pmkisan', 'किसान', 'सम्मान निधि', 'kisan kist']
  },
  {
    id: 'pm-fby',
    title: 'प्रधानमंत्री फसल बीमा योजना (PMFBY)',
    department: 'कृषि एवं किसान कल्याण विभाग',
    ministry: 'कृषि एवं किसान कल्याण मंत्रालय',
    category: 'AGRICULTURE',
    benefitSummary: 'सूखा, बाढ़ या बेमौसम बारिश से फसल बर्बादी पर 100% तक वित्तीय सुरक्षा',
    officialApplyUrl: 'https://pmfby.gov.in/',
    portalName: 'PMFBY Portal',
    estimatedDays: 'अधिसूचित सीजन कटऑफ तिथि अनुसार',
    govtFee: 'नाममात्र प्रीमियम (खरीफ 2%, रबी 1.5%)',
    requiredDocuments: [
      { name: 'बुवाई प्रमाण पत्र / पटवारी पर्चा', mandatory: true },
      { name: 'खसरा/खतौनी की नकल', mandatory: true },
      { name: 'बैंक खाता पासबुक', mandatory: true }
    ],
    voiceBriefing: 'फसल नुकसान के मुआवजे के लिए पीएम फसल बीमा पोर्टल से अपनी बुवाई का बीमा अवश्य करवाएं।',
    keywords: ['pmfby', 'fasal bima', 'फसल बीमा', 'kisan bima']
  },

  // 4. परिवहन एवं वाहन सेवाएं (TRANSPORT)
  {
    id: 'driving-license',
    title: 'ड्राइविंग लाइसेंस (लर्नर / स्थायी DL / नवीनीकरण)',
    department: 'सड़क परिवहन और राजमार्ग मंत्रालय',
    ministry: 'सड़क परिवहन और राजमार्ग मंत्रालय',
    category: 'TRANSPORT',
    benefitSummary: 'कानूनी रूप से दोपहिया या चारपहिया वाहन चलाने का आधिकारिक प्रमाण पत्र',
    officialApplyUrl: 'https://sarathi.parivahan.gov.in/',
    portalName: 'Sarathi Parivahan Portal',
    estimatedDays: 'लर्नर तत्काल / स्थायी टेस्ट के 7 दिन बाद',
    govtFee: 'लर्नर ₹200 / स्थायी DL ₹1,000 (राज्य अनुसार)',
    requiredDocuments: [
      { name: 'आधार कार्ड (घर बैठे बिना RTO टेस्ट हेतु)', mandatory: true },
      { name: 'आयु प्रमाण पत्र', mandatory: true },
      { name: 'चिकित्सा प्रमाण पत्र (फॉर्म 1/1A)', mandatory: false }
    ],
    voiceBriefing: 'ड्राइविंग लाइसेंस के लिए सारथी परिवहन पोर्टल से आवेदन करें। आधार ऑथेंटिकेशन से लर्नर लाइसेंस घर बैठे बन जाता है।',
    keywords: ['dl', 'driving license', 'ड्राइविंग लाइसेंस', 'sarathi', 'parivahan']
  },
  {
    id: 'vehicle-rc',
    title: 'वाहन आरसी सेवाएं (RC Transfer / NOC / Address Change)',
    department: 'सड़क परिवहन और राजमार्ग मंत्रालय',
    ministry: 'सड़क परिवहन और राजमार्ग मंत्रालय',
    category: 'TRANSPORT',
    benefitSummary: 'मोटर वाहन का स्वामित्व, टैक्स और प्रदूषण पंजीकरण',
    officialApplyUrl: 'https://vahan.parivahan.gov.in/vahanservice/',
    portalName: 'Vahan Citizen Services',
    estimatedDays: '10 से 15 कार्यदिवस',
    govtFee: 'सेवा अनुसार निर्धारित सरकारी शुल्क',
    requiredDocuments: [
      { name: 'मूल रजिस्ट्रेशन सर्टिफिकेट (RC)', mandatory: true },
      { name: 'वैध वाहन बीमा व प्रदूषण (PUC) प्रमाण', mandatory: true },
      { name: 'क्रेता/विक्रेता का आधार कार्ड', mandatory: true }
    ],
    voiceBriefing: 'गाड़ी की आरसी ट्रांसफर या एनओसी के लिए वाहन परिवहन पोर्टल पर चेसिस नंबर डालकर प्रक्रिया पूरी करें।',
    keywords: ['rc', 'vahan', 'आरसी', 'गाड़ी ट्रांसफर', 'parivahan rc']
  },

  // 5. पेंशन, सामाजिक कल्याण एवं वित्त (FINANCE_PENSION)
  {
    id: 'national-pension',
    title: 'राष्ट्रीय सामाजिक सहायता पेंशन (वृद्धावस्था / विधवा / दिव्यांग)',
    department: 'ग्रामीण विकास विभाग',
    ministry: 'ग्रामीण विकास मंत्रालय',
    category: 'FINANCE_PENSION',
    benefitSummary: '₹1,000 से ₹1,500 प्रतिमाह सीधे बैंक खाते में भरण-पोषण सहायता',
    officialApplyUrl: 'https://nsap.nic.in/',
    portalName: 'NSAP National Pension Portal',
    estimatedDays: '45 कार्यदिवस',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'आधार कार्ड (उम्र 60 वर्ष या अधिक)', mandatory: true },
      { name: 'बीपीएल राशन कार्ड अथवा आय प्रमाण पत्र', mandatory: true },
      { name: 'बैंक पासबुक (आधार से लिंक)', mandatory: true }
    ],
    voiceBriefing: 'वृद्धावस्था या विधवा पेंशन के लिए राष्ट्रीय पेंशन पोर्टल एनएसएपी अथवा राज्य समाज कल्याण पोर्टल पर आवेदन किया जाता है।',
    keywords: ['pension', 'पेंशन', 'nsap', 'vriddha pension', 'vidhwa pension']
  },
  {
    id: 'pm-svanidhi',
    title: 'पीएम स्वनिधि योजना (रेहड़ी-पटरी वेंडर ऋण)',
    department: 'आवासन और शहरी कार्य मंत्रालय',
    ministry: 'आवासन और शहरी कार्य मंत्रालय',
    category: 'FINANCE_PENSION',
    benefitSummary: 'बिना किसी गारंटी के ₹10,000 से ₹50,000 तक का सस्ता व्यापार ऋण',
    officialApplyUrl: 'https://pmsvanidhi.mohua.gov.in/',
    portalName: 'PM SVANidhi Portal',
    estimatedDays: '7 से 10 कार्यदिवस',
    govtFee: '₹0 (कोई प्रोसेसिंग शुल्क नहीं)',
    requiredDocuments: [
      { name: 'वेंडिंग प्रमाण पत्र / नगर पालिका सिफ़ारिश', mandatory: true },
      { name: 'आधार कार्ड', mandatory: true },
      { name: 'बैंक खाता विवरण', mandatory: true }
    ],
    voiceBriefing: 'छोटे दुकानदारों और वेंडरों को 10 हजार से 50 हजार तक का लोन पीएम स्वनिधि पोर्टल से बिना गारंटी मिलता है।',
    keywords: ['svanidhi', 'vendor loan', 'स्वनिधि', 'रेहड़ी लोन']
  },

  // 6. राजस्व, भूमि एवं आवास (REVENUE_HOUSING)
  {
    id: 'pm-awas',
    title: 'प्रधानमंत्री आवास योजना (PMAY-G / PMAY-U)',
    department: 'ग्रामीण / आवासन विकास मंत्रालय',
    ministry: 'ग्रामीण विकास मंत्रालय',
    category: 'REVENUE_HOUSING',
    benefitSummary: 'पक्का मकान निर्माण हेतु ₹1,20,000 से ₹2,50,000 की सीधी सरकारी सब्सिडी',
    officialApplyUrl: 'https://pmaymis.gov.in/',
    portalName: 'PMAY Urban / Rural Portal',
    estimatedDays: 'वार्षिक सत्यापन एवं ग्राम सभा अनुमोदन उपरांत',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'आधार कार्ड परिवार के सभी सदस्यों का', mandatory: true },
      { name: 'कच्चे मकान की जियो-टैग फोटो', mandatory: true },
      { name: 'जमीन के कागजात / जॉब कार्ड', mandatory: true }
    ],
    voiceBriefing: 'पक्के मकान की सब्सिडी के लिए पीएम आवास पोर्टल पर पात्रता चेक करें और ऑनलाइन आवेदन दर्ज करें।',
    keywords: ['pmay', 'awas', 'आवास', 'pm awas', 'colony']
  },
  {
    id: 'edistrict-certificates',
    title: 'जाति, आय एवं निवास प्रमाण पत्र (e-District Services)',
    department: 'राजस्व विभाग (समस्त राज्य सरकारें)',
    ministry: 'इलेक्ट्रॉनिक्स एवं सूचना प्रौद्योगिकी मंत्रालय',
    category: 'REVENUE_HOUSING',
    benefitSummary: 'नौकरी, छात्रवृत्ति और आरक्षण हेतु कानूनी रूप से प्रमाणित प्रमाण पत्र',
    officialApplyUrl: 'https://edistrict.gov.in/',
    portalName: 'National Service Delivery / State eDistrict',
    estimatedDays: '7 से 15 कार्यदिवस',
    govtFee: '₹15 से ₹30 (राज्य नियमानुसार)',
    requiredDocuments: [
      { name: 'स्व-प्रमाणित घोषणा पत्र', mandatory: true },
      { name: 'आधार कार्ड / राशन कार्ड', mandatory: true },
      { name: 'पासपोर्ट साइज फोटो', mandatory: true }
    ],
    voiceBriefing: 'आय, जाति और निवास प्रमाण पत्र राज्य के ई-डिस्ट्रिक्ट पोर्टल पर ऑनलाइन बनते हैं। लेखपाल सत्यापन के बाद डिजिटल हस्ताक्षर युक्त कॉपी मिलती है।',
    keywords: ['income', 'caste', 'domicile', 'जाति', 'निवास', 'आय प्रमाण', 'edistrict']
  },

  // 7. डिजिटल लॉकर एवं नागरिक उपयोगिता (UTILITY_LEGAL)
  {
    id: 'digilocker',
    title: 'डिजिलॉकर (DigiLocker - सभी सरकारी दस्तावेज़ 1 जगह)',
    department: 'डिजिटल इंडिया कॉरपोरेशन',
    ministry: 'इलेक्ट्रॉनिक्स एवं सूचना प्रौद्योगिकी मंत्रालय',
    category: 'UTILITY_LEGAL',
    benefitSummary: 'आईटी एक्ट 2000 के तहत मूल कागज़ात के बराबर मान्य डिजिटल लॉकर',
    officialApplyUrl: 'https://www.digilocker.gov.in/',
    portalName: 'DigiLocker National Cloud',
    estimatedDays: 'तत्काल 1 क्लिक पर जारी',
    govtFee: '₹0 (आजीवन 100% मुफ़्त)',
    requiredDocuments: [
      { name: 'आधार नंबर', mandatory: true },
      { name: 'ओटीपी हेतु सक्रिय मोबाइल नंबर', mandatory: true }
    ],
    voiceBriefing: 'डिजिलॉकर में आपके मार्कशीट, आरसी, बीमा और पहचान पत्र कानूनी रूप से सुरक्षित रहते हैं। आधार से लॉगिन करें।',
    keywords: ['digilocker', 'डिजीलॉकर', 'डिजिटल दस्तावेज', 'marksheet download']
  }
];

export const CATEGORY_METADATA = {
  IDENTITY: { title: 'पहचान एवं नागरिकता', icon: '🪪', color: 'orange' },
  HEALTH_WELFARE: { title: 'स्वास्थ्य व सामाजिक सुरक्षा', icon: '🏥', color: 'emerald' },
  AGRICULTURE: { title: 'कृषि एवं किसान कल्याण', icon: '🌾', color: 'lime' },
  TRANSPORT: { title: 'परिवहन एवं वाहन सेवा', icon: '🚗', color: 'blue' },
  FINANCE_PENSION: { title: 'पेंशन, लोन एवं बैंकिंग', icon: '💰', color: 'indigo' },
  REVENUE_HOUSING: { title: 'भूमि, आवास एवं प्रमाण पत्र', icon: '🏡', color: 'amber' },
  EDUCATION_SKILL: { title: 'शिक्षा एवं रोजगार', icon: '🎓', color: 'cyan' },
  UTILITY_LEGAL: { title: 'डिजिटल उपयोगिता सेवाएं', icon: '📱', color: 'purple' }
};
