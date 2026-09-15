import { GovServiceItem } from '../types/service';

export const OFFICIAL_GOV_SERVICES: GovServiceItem[] = [
  // 1. राजस्व एवं भूमि सुधार
  {
    id: 'up-bhulekh-khatauni',
    title: 'भूलेख खतौनी नकल (UP Bhulekh)',
    department: 'राजस्व परिषद, उत्तर प्रदेश शासन',
    category: 'LAND_REVENUE',
    scope: 'UP_STATE',
    govtFee: 'निःशुल्क (डिजिटल) / ₹15 प्रमाणित',
    estimatedDays: 'तत्काल (रियल-टाइम)',
    officialApplyUrl: 'https://upbhulekh.gov.in/',
    benefitSummary: 'गाटा/खसरा संख्या अथवा खातेदार के नाम से अपनी कृषि भूमि की प्रमाणित ऑनलाइन खतौनी नकल देखें व डाउनलोड करें।',
    requiredDocuments: [
      { name: 'जनपद, तहसील व ग्राम का नाम', mandatory: true },
      { name: 'खसरा / गाटा संख्या अथवा खातेदार का नाम', mandatory: true }
    ],
    voiceKeywords: ['खतौनी', 'भूलेख', 'खसरा', 'जमीन', 'खतौनी नकल', 'bhulekh', 'khatauni']
  },
  {
    id: 'up-bhu-naksha',
    title: 'भू-नक्शा (शजरा मैप डाउनलोड)',
    department: 'राजस्व परिषद, उत्तर प्रदेश शासन',
    category: 'LAND_REVENUE',
    scope: 'UP_STATE',
    govtFee: 'निःशुल्क (₹0)',
    estimatedDays: 'तत्काल (रियल-टाइम)',
    officialApplyUrl: 'https://upbhunaksha.gov.in/',
    benefitSummary: 'अपने खेत या प्लॉट का आधिकारिक शजरा नक्शा चौहद्दी व सीमांकन सहित देखें और प्रिंट करें।',
    requiredDocuments: [
      { name: 'ग्राम कोड व गाटा संख्या', mandatory: true }
    ],
    voiceKeywords: ['भू नक्शा', 'खेत का नक्शा', 'शजरा', 'naksha', 'plot map']
  },
  {
    id: 'up-dakhil-kharij',
    title: 'दाखिल-खारिज / नामांतरण (RCCMS वाद)',
    department: 'राजस्व न्यायालय कंप्यूटरीकृत प्रणाली (RCCMS)',
    category: 'LAND_REVENUE',
    scope: 'UP_STATE',
    govtFee: '₹35 - ₹100',
    estimatedDays: '35 कार्यदिवस (RTS गारंटी)',
    officialApplyUrl: 'https://vaad.up.nic.in/',
    benefitSummary: 'भूमि क्रय या वसीयत के पश्चात राजस्व अभिलेखों में विक्रेता के स्थान पर क्रेता का नाम दर्ज कराने हेतु ऑनलाइन वाद।',
    requiredDocuments: [
      { name: 'पंजीकृत बैनामा (रजिस्ट्री कॉपी)', mandatory: true },
      { name: 'वर्तमान खतौनी नकल', mandatory: true }
    ],
    voiceKeywords: ['दाखिल खारिज', 'नामांतरण', 'mutation', 'dakhil kharij']
  },
  {
    id: 'up-varasat-online',
    title: 'उत्तराधिकार / वरासत ऑनलाइन (धारा 33)',
    department: 'राजस्व परिषद, उत्तर प्रदेश शासन',
    category: 'LAND_REVENUE',
    scope: 'UP_STATE',
    govtFee: 'निःशुल्क (₹0)',
    estimatedDays: '45 कार्यदिवस (RTS गारंटी)',
    officialApplyUrl: 'https://vaad.up.nic.in/',
    benefitSummary: 'भूमिधर की मृत्यु के उपरांत बिना किसी विवाद के वैध वारिसों का नाम खतौनी में दर्ज कराने हेतु निर्विवाद वरासत आवेदन।',
    requiredDocuments: [
      { name: 'मृतक का मृत्यु प्रमाण पत्र', mandatory: true },
      { name: 'मृतक की खतौनी नकल', mandatory: true }
    ],
    voiceKeywords: ['वरासत', 'वारिस', 'उत्तराधिकार', 'varasat']
  },

  // 2. नागरिक प्रमाण पत्र
  {
    id: 'up-income-certificate',
    title: 'आय प्रमाण पत्र (Income Certificate)',
    department: 'राजस्व विभाग (e-District UP)',
    category: 'CIVIL_CERTIFICATES',
    scope: 'UP_STATE',
    govtFee: '₹15 (विभागीय शुल्क)',
    estimatedDays: '15 कार्यदिवस (RTS गारंटी)',
    officialApplyUrl: 'https://edistrict.up.gov.in/',
    benefitSummary: 'छात्रवृत्ति, सरकारी पेंशन, राशन कार्ड और शुल्क प्रतिपूर्ति हेतु आधिकारिक पारिवारिक आय प्रमाण पत्र।',
    requiredDocuments: [
      { name: 'आवेदक का आधार कार्ड', mandatory: true },
      { name: 'पासपोर्ट साइज नवीनतम फोटो', mandatory: true },
      { name: 'स्व-प्रमाणित घोषणा पत्र', mandatory: true }
    ],
    voiceKeywords: ['आय', 'income', 'aay praman patra', 'income certificate']
  },
  {
    id: 'up-caste-certificate',
    title: 'जाति प्रमाण पत्र (SC / ST / OBC)',
    department: 'राजस्व विभाग (e-District UP)',
    category: 'CIVIL_CERTIFICATES',
    scope: 'UP_STATE',
    govtFee: '₹15 (विभागीय शुल्क)',
    estimatedDays: '15 कार्यदिवस (RTS गारंटी)',
    officialApplyUrl: 'https://edistrict.up.gov.in/',
    benefitSummary: 'सरकारी नौकरियों, प्रवेश परीक्षाओं व आरक्षण लाभों हेतु तहसीलदार द्वारा जारी जाति प्रमाण पत्र।',
    requiredDocuments: [
      { name: 'आवेदक का आधार कार्ड', mandatory: true },
      { name: 'पारिवारिक जाति प्रमाण साक्ष्य', mandatory: true },
      { name: 'स्व-प्रमाणित घोषणा पत्र', mandatory: true }
    ],
    voiceKeywords: ['जाति', 'caste', 'jati praman patra', 'obc certificate']
  },
  {
    id: 'up-domicile-certificate',
    title: 'मूल निवास प्रमाण पत्र (Domicile Certificate)',
    department: 'राजस्व विभाग (e-District UP)',
    category: 'CIVIL_CERTIFICATES',
    scope: 'UP_STATE',
    govtFee: '₹15 (विभागीय शुल्क)',
    estimatedDays: '15 कार्यदिवस (RTS गारंटी)',
    officialApplyUrl: 'https://edistrict.up.gov.in/',
    benefitSummary: 'उत्तर प्रदेश का स्थायी निवासी होने का वैध प्रमाण पत्र, जो सभी सरकारी भर्तियों व शिक्षा में मान्य है।',
    requiredDocuments: [
      { name: 'आधार कार्ड / वोटर आईडी', mandatory: true },
      { name: 'स्व-प्रमाणित घोषणा पत्र', mandatory: true }
    ],
    voiceKeywords: ['निवास', 'domicile', 'niwas praman patra', 'mool niwas']
  },

  // 3. पहचान पत्र एवं राशन
  {
    id: 'uidai-myaadhaar',
    title: 'आधार कार्ड ऑनलाइन सेवाएं (myAadhaar)',
    department: 'भारतीय विशिष्ट पहचान प्राधिकरण (UIDAI)',
    category: 'IDENTITY_DPI',
    scope: 'CENTRAL',
    govtFee: 'निःशुल्क (डाउनलोड) / ₹50 (PVC कार्ड)',
    estimatedDays: 'तत्काल (रियल-टाइम)',
    officialApplyUrl: 'https://myaadhaar.uidai.gov.in/',
    benefitSummary: 'ई-आधार डाउनलोड, बायोमेट्रिक लॉक/अनलॉक, पीवीसी स्मार्ट कार्ड ऑर्डर और ऑनलाइन पता अपडेट।',
    requiredDocuments: [
      { name: '12 अंकों की आधार संख्या या EID पर्ची', mandatory: true },
      { name: 'आधार लिंक मोबाइल नंबर (OTP हेतु)', mandatory: true }
    ],
    voiceKeywords: ['आधार', 'aadhaar', 'uidai', 'myaadhaar', 'aadhar download']
  },
  {
    id: 'nsdl-pan-new',
    title: 'नया पैन कार्ड आवेदन (Form 49A - NSDL)',
    department: 'आयकर विभाग, भारत सरकार',
    category: 'IDENTITY_DPI',
    scope: 'CENTRAL',
    govtFee: '₹107 (भौतिक कार्ड)',
    estimatedDays: '7 से 10 कार्यदिवस',
    officialApplyUrl: 'https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html',
    benefitSummary: 'बैंक खाता, वित्तीय लेन-देन और आयकर हेतु 10 अंकों का स्थायी खाता संख्या (PAN Card)।',
    requiredDocuments: [
      { name: 'आधार कार्ड (पहचान, पता व जन्मतिथि प्रमाण)', mandatory: true },
      { name: 'पासपोर्ट साइज 2 फोटो व हस्ताक्षर', mandatory: true }
    ],
    voiceKeywords: ['पैन कार्ड', 'pan card', 'nsdl pan', 'new pan card']
  },
  {
    id: 'up-fcs-ration-card',
    title: 'राशन कार्ड पात्रता सूची व नया कार्ड (UP FCS)',
    department: 'खाद्य एवं रसद विभाग, उत्तर प्रदेश',
    category: 'IDENTITY_DPI',
    scope: 'UP_STATE',
    govtFee: 'निःशुल्क (सूची) / ₹50 (नया आवेदन CSC)',
    estimatedDays: '30 कार्यदिवस (RTS गारंटी)',
    officialApplyUrl: 'https://fcs.up.gov.in/',
    benefitSummary: 'पात्र गृहस्थी व अंत्योदय राशन कार्ड में नाम खोजें, राशन पर्ची निकालें या नया कार्ड बनवाएं।',
    requiredDocuments: [
      { name: 'महिला मुखिया का आधार कार्ड व बैंक पासबुक', mandatory: true },
      { name: 'सभी पारिवारिक सदस्यों के आधार कार्ड', mandatory: true }
    ],
    voiceKeywords: ['राशन कार्ड', 'ration card', 'fcs up', 'ration list']
  },

  // 4. विद्युत, स्वास्थ्य एवं किसान कल्याण
  {
    id: 'uppcl-bill-payment',
    title: 'बिजली बिल ऑनलाइन भुगतान व जांच (UPPCL)',
    department: 'उत्तर प्रदेश पावर कारपोरेशन लिमिटेड',
    category: 'CIVIL_CERTIFICATES',
    scope: 'UP_STATE',
    govtFee: 'उपभोग अनुसार निर्धारित',
    estimatedDays: 'तत्काल (रियल-टाइम)',
    officialApplyUrl: 'https://www.upenergy.in/',
    benefitSummary: 'ग्रामीण व शहरी बिजली बिल चेक करें, ऑनलाइन भुगतान करें और ब्याज छूट योजना का लाभ लें।',
    requiredDocuments: [
      { name: '10 अंकों का विद्युत खाता संख्या (Account ID)', mandatory: true }
    ],
    voiceKeywords: ['बिजली बिल', 'bijli bill', 'uppcl bill']
  },
  {
    id: 'nha-ayushman-card',
    title: 'आयुष्मान भारत ₹5 लाख गोल्डन कार्ड (PMJAY)',
    department: 'राष्ट्रीय स्वास्थ्य प्राधिकरण (NHA)',
    category: 'HEALTH_WELFARE',
    scope: 'CENTRAL',
    govtFee: 'निःशुल्क (₹0)',
    estimatedDays: 'तत्काल (रियल-टाइम)',
    officialApplyUrl: 'https://beneficiary.nha.gov.in/',
    benefitSummary: 'प्रति परिवार प्रति वर्ष ₹5 लाख तक का सरकारी व निजी अस्पतालों में निःशुल्क कैशलेस इलाज।',
    requiredDocuments: [
      { name: 'आधार कार्ड (ओटीपी/बायोमेट्रिक सत्यापन)', mandatory: true },
      { name: 'राशन कार्ड (पात्र गृहस्थी 6+ यूनिट या अंत्योदय)', mandatory: true }
    ],
    voiceKeywords: ['आयुष्मान', 'ayushman card', 'pmjay', 'golden card']
  },
  {
    id: 'pm-kisan-portal',
    title: 'पीएम किसान सम्मान निधि (₹6,000 व eKYC)',
    department: 'कृषि एवं किसान कल्याण मंत्रालय, भारत सरकार',
    category: 'FARMER_AGRICULTURE',
    scope: 'CENTRAL',
    govtFee: 'निःशुल्क (₹0)',
    estimatedDays: 'तत्काल स्टेटस व ई-केवाईसी',
    officialApplyUrl: 'https://pmkisan.gov.in/',
    benefitSummary: 'पात्र किसान परिवारों को प्रति वर्ष ₹2,000 की 3 किस्तों में कुल ₹6,000 की नकद सहायता।',
    requiredDocuments: [
      { name: 'आधार कार्ड व भूलेख खतौनी', mandatory: true }
    ],
    voiceKeywords: ['पीएम किसान', 'pm kisan', 'kisan samman nidhi', 'kisan kyc']
  },
  {
    id: 'parivahan-echallan',
    title: 'ई-चालान ऑनलाइन भुगतान व स्टेटस (e-Challan)',
    department: 'सड़क परिवहन एवं राजमार्ग मंत्रालय (MoRTH)',
    category: 'TRANSPORT',
    scope: 'CENTRAL',
    govtFee: 'चालान राशि अनुसार',
    estimatedDays: 'तत्काल (रियल-टाइम)',
    officialApplyUrl: 'https://echallan.parivahan.gov.in/',
    benefitSummary: 'ट्रैफिक पुलिस द्वारा काटे गए चालान की जांच करें और सीधे ऑनलाइन भुगतान करें।',
    requiredDocuments: [
      { name: 'वाहन संख्या (गाड़ी नंबर) या चालान नंबर', mandatory: true }
    ],
    voiceKeywords: ['चालान', 'challan', 'echallan', 'traffic challan']
  },
  {
    id: 'cybercrime-1930-portal',
    title: 'राष्ट्रीय साइबर अपराध हेल्पलाइन (1930)',
    department: 'भारतीय साइबर अपराध समन्वय केंद्र (I4C)',
    category: 'FINANCE_PENSION',
    scope: 'CENTRAL',
    govtFee: 'निःशुल्क (आपातकालीन सेवा)',
    estimatedDays: 'तत्काल खाता फ्रीज',
    officialApplyUrl: 'https://cybercrime.gov.in/',
    benefitSummary: 'ऑनलाइन बैंक/यूपीआई धोखाधड़ी की स्थिति में तत्काल 1930 मिलाएं।',
    requiredDocuments: [
      { name: 'धोखाधड़ी का यूटीआर नंबर व बैंक विवरण', mandatory: true }
    ],
    voiceKeywords: ['साइबर क्राइम', '1930', 'cyber crime', 'bank fraud']
  }
];
