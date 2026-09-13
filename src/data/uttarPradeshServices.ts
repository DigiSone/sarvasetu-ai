import { GovServiceItem } from '../types/service';

export const UTTER_PRADESH_SERVICES: GovServiceItem[] = [
  // 1. राजस्व, जमीन व खतौनी (UP Revenue & Land)
  {
    id: 'up-bhulekh',
    title: 'यूपी भूलेख / खतौनी नकल (UP Bhulekh Land Records)',
    department: 'राजस्व परिषद, उत्तर प्रदेश',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'REVENUE_LAND',
    benefitSummary: 'गाटा संख्या या खातेदार के नाम से जमीन की कंप्यूटरीकृत डिजिटल प्रमाणित खतौनी नकल',
    officialApplyUrl: 'https://upbhulekh.gov.in/',
    portalName: 'upbhulekh.gov.in (आधिकारिक परिषद)',
    estimatedDays: 'तत्काल 1 मिनट में लाइव',
    govtFee: 'नकल देखना ₹0 / प्रमाणित प्रति ₹15',
    requiredDocuments: [
      { name: 'जनपद, तहसील और ग्राम का नाम', mandatory: true },
      { name: 'खसरा / गाटा संख्या या खातेदार का नाम', mandatory: true }
    ],
    voiceKeywords: ['भूलेख', 'खतौनी', 'खसरा', 'जमीन की नकल', 'गाटा', 'bhulekh', 'khatauni', 'khasra']
  },
  {
    id: 'up-dakhil-kharij',
    title: 'दाखिल खारिज / नामांतरण (UP Vaad Dakhil Kharij - धारा 34/35)',
    department: 'राजस्व न्यायालय कंप्यूटरीकृत प्रबंधन प्रणाली (RCCMS)',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'REVENUE_LAND',
    benefitSummary: 'बैनामा रजिस्ट्री के बाद सरकारी खतौनी में खरीदार का नाम दर्ज कराने हेतु ऑनलाइन वाद',
    officialApplyUrl: 'https://vaad.up.nic.in/',
    portalName: 'vaad.up.nic.in (राजस्व वाद न्यायालय)',
    estimatedDays: '35 से 45 कार्यदिवस (तहसीलदार न्यायालय)',
    govtFee: 'अदालती वाद शुल्क (नाममात्र)',
    requiredDocuments: [
      { name: 'पंजीकृत बैनामा (Registry Copy)', mandatory: true },
      { name: 'पूर्व खतौनी नकल व क्रेता-विक्रेता आधार', mandatory: true },
      { name: 'शपथ पत्र (Affidavit)', mandatory: true }
    ],
    voiceKeywords: ['दाखिल खारिज', 'नामांतरण', 'वाद न्यायालय', 'dakhil kharij', 'vaad', 'mutation']
  },
  {
    id: 'up-gharauni-swamitva',
    title: 'यूपी घरौनी प्रमाण पत्र (UP Rural Abadi Gharauni)',
    department: 'राजस्व परिषद व पंचायती राज विभाग',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'REVENUE_LAND',
    benefitSummary: 'गांव की आबादी भूमि पर बने पुश्तैनी मकानों का कानूनी मालिकाना अधिकार पत्र',
    officialApplyUrl: 'https://upbhulekh.gov.in/',
    portalName: 'UP Bhulekh Gharauni Portal',
    estimatedDays: 'ड्रोन सर्वे व ग्राम सत्यापन उपरांत',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'परिवार के मुखिया का आधार कार्ड', mandatory: true },
      { name: 'ग्राम प्रधान / पंचायत सचिव सत्यापन', mandatory: true }
    ],
    voiceKeywords: ['घरौनी', 'स्वामित्व', 'ग्रामीण आवास प्रमाण', 'gharauni', 'abadi makan']
  },
  {
    id: 'up-bainama-nakal',
    title: 'बैनामा प्रमाणित नकल व भारमुक्त प्रमाण पत्र (IGRS UP)',
    department: 'स्टाम्प एवं निबंधन विभाग',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'REVENUE_LAND',
    benefitSummary: 'रजिस्ट्री ऑफिस से पुराने बैनामे की डिजिटल प्रमाणित प्रति व संपत्ति पर बैंक लोन जांच (12 साला EC)',
    officialApplyUrl: 'https://igrsup.gov.in/',
    portalName: 'igrsup.gov.in (स्टाम्प एवं रजिस्ट्रेशन)',
    estimatedDays: 'तत्काल 1 दिन में ऑनलाइन',
    govtFee: '₹100 प्रति विलेख',
    requiredDocuments: [
      { name: 'रजिस्ट्री विलेख संख्या (Deed No) व वर्ष', mandatory: true },
      { name: 'उप-निबंधक कार्यालय (SRO) का नाम', mandatory: true }
    ],
    voiceKeywords: ['बैनामा', 'रजिस्ट्री की नकल', 'आईजीआरएस', 'bainama', 'igrs', 'deed copy']
  },

  // 2. ई-डिस्ट्रिक्ट नागरिक प्रमाण पत्र (UP e-District Certificates)
  {
    id: 'up-jati-praman',
    title: 'जाति प्रमाण पत्र (UP Caste Certificate - SC/ST/OBC)',
    department: 'राजस्व विभाग (e-District UP)',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'CERTIFICATES',
    benefitSummary: 'शिक्षा, वजीफा और सरकारी नौकरियों में आरक्षण हेतु तहसीलदार द्वारा डिजिटल हस्ताक्षरित प्रमाण पत्र',
    officialApplyUrl: 'https://edistrict.up.gov.in/',
    portalName: 'edistrict.up.gov.in (नागरिक सेवा)',
    estimatedDays: '15 कार्यदिवस (लेखपाल जांच उपरांत)',
    govtFee: '₹15 (सरकारी ऑनलाइन शुल्क)',
    requiredDocuments: [
      { name: 'स्व-प्रमाणित घोषणा पत्र', mandatory: true },
      { name: 'आधार कार्ड व राशन कार्ड प्रति', mandatory: true },
      { name: 'पासपोर्ट साइज रंगीन फोटो', mandatory: true }
    ],
    voiceKeywords: ['जाति', 'जाति प्रमाण पत्र', 'ओबीसी प्रमाण', 'jati', 'caste certificate']
  },
  {
    id: 'up-aay-praman',
    title: 'आय प्रमाण पत्र (UP Income Certificate)',
    department: 'राजस्व विभाग (e-District UP)',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'CERTIFICATES',
    benefitSummary: 'छात्रवृत्ति, फीस माफी, मुफ्त राशन और सरकारी योजनाओं हेतु परिवार की वार्षिक आय का वैधानिक प्रमाण',
    officialApplyUrl: 'https://edistrict.up.gov.in/',
    portalName: 'edistrict.up.gov.in',
    estimatedDays: '7 से 15 कार्यदिवस',
    govtFee: '₹15 (सरकारी फीस)',
    requiredDocuments: [
      { name: 'स्व-प्रमाणित आय घोषणा पत्र', mandatory: true },
      { name: 'आधार कार्ड व वेतन पर्ची / मनरेगा जॉब कार्ड', mandatory: true },
      { name: 'पासपोर्ट साइज फोटो', mandatory: true }
    ],
    voiceKeywords: ['आय', 'आय प्रमाण पत्र', 'इनकम सर्टिफिकेट', 'aay', 'income certificate']
  },
  {
    id: 'up-niwas-praman',
    title: 'मूल निवास प्रमाण पत्र (UP Domicile Certificate)',
    department: 'राजस्व विभाग (e-District UP)',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'CERTIFICATES',
    benefitSummary: 'उत्तर प्रदेश का स्थायी नागरिक होने का प्रमाण (सरकारी नौकरी व कॉलेज दाखिला अनिवार्य)',
    officialApplyUrl: 'https://edistrict.up.gov.in/',
    portalName: 'edistrict.up.gov.in',
    estimatedDays: '15 कार्यदिवस',
    govtFee: '₹15',
    requiredDocuments: [
      { name: 'आधार कार्ड व वोटर कार्ड', mandatory: true },
      { name: 'बिजली बिल / मकान की रजिस्ट्री / स्कूल मार्कशीट', mandatory: true },
      { name: 'पासपोर्ट साइज फोटो', mandatory: true }
    ],
    voiceKeywords: ['निवास', 'मूल निवास', 'निवास प्रमाण पत्र', 'niwas', 'domicile']
  },
  {
    id: 'up-divyang-praman',
    title: 'दिव्यांग प्रमाण पत्र (UP Disability Certificate)',
    department: 'चिकित्सा एवं स्वास्थ्य विभाग / e-District UP',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'CERTIFICATES',
    benefitSummary: 'सीएमओ कार्यालय मेडिकल बोर्ड द्वारा जारी 40% या अधिक दिव्यांगता का सरकारी प्रमाण पत्र',
    officialApplyUrl: 'https://edistrict.up.gov.in/',
    portalName: 'eDistrict UP CMO Portal',
    estimatedDays: 'सीएमओ मेडिकल बोर्ड बैठक अनुसार',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'आधार कार्ड', mandatory: true },
      { name: 'दिव्यांगता दर्शाती पूर्ण शरीर की फोटो', mandatory: true },
      { name: 'सरकारी डॉक्टर की पुरानी जांच रिपोर्ट (यदि हो)', mandatory: false }
    ],
    voiceKeywords: ['दिव्यांग प्रमाण पत्र', 'विकलांग सर्टिफिकेट', 'divyang praman patra']
  },

  // 3. खाद्य, राशन व रसद (UP Food & Ration)
  {
    id: 'up-ration-card',
    title: 'यूपी नया राशन कार्ड / संशोधन (FCS UP Ration Portal)',
    department: 'खाद्य एवं रसद विभाग, उत्तर प्रदेश',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'FOOD_RATION',
    benefitSummary: 'पात्र गृहस्थी व अंत्योदय कार्ड द्वारा प्रति यूनिट 5 किलो मुफ्त सरकारी अनाज (गेहूं-चावल)',
    officialApplyUrl: 'https://fcs.up.gov.in/',
    portalName: 'fcs.up.gov.in (खाद्य एवं रसद विभाग)',
    estimatedDays: '30 कार्यदिवस (आपूर्ति निरीक्षक जांच)',
    govtFee: '₹0 से ₹20',
    requiredDocuments: [
      { name: 'महिला मुखिया का आधार कार्ड व बैंक पासबुक', mandatory: true },
      { name: 'परिवार के सभी सदस्यों के आधार कार्ड', mandatory: true },
      { name: 'आय प्रमाण पत्र व बिजली बिल/निवास प्रमाण', mandatory: true }
    ],
    voiceKeywords: ['राशन कार्ड', 'राशन पर्ची', 'गल्ला कार्ड', 'ration card', 'fcs up', 'rasan']
  },

  // 4. विद्युत एवं ऊर्जा (UP Electricity)
  {
    id: 'up-jhatpat-bijli',
    title: 'झटपट नया बिजली कनेक्शन (UPPCL Jhatpat Bijli Connection)',
    department: 'उत्तर प्रदेश पावर कॉरपोरेशन लिमिटेड (UPPCL)',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'ELECTRICITY_UTILITY',
    benefitSummary: 'घरेलू (1kW से 4kW) या दुकान के लिए ऑनलाइन नया बिजली मीटर व कनेक्शन 7 दिन में',
    officialApplyUrl: 'https://upenergy.in/',
    portalName: 'upenergy.in / UPPCL Portal',
    estimatedDays: '7 कार्यदिवस में मीटर स्थापना',
    govtFee: 'लोड अनुसार निर्धारित सुरक्षा निधि (Security Deposit)',
    requiredDocuments: [
      { name: 'आधार कार्ड / पहचान पत्र', mandatory: true },
      { name: 'मकान की रजिस्ट्री / खतौनी / किरायानामा', mandatory: true },
      { name: 'पासपोर्ट साइज फोटो', mandatory: true }
    ],
    voiceKeywords: ['बिजली कनेक्शन', 'नया मीटर', 'झटपट बिजली', 'uppcl', 'jhatpat connection', 'bijli meter']
  },
  {
    id: 'up-bijli-bill-payment',
    title: 'यूपी बिजली बिल देखें व भुगतान (UPPCL Rural/Urban Bill Pay)',
    department: 'उत्तर प्रदेश पावर कॉरपोरेशन लिमिटेड (UPPCL)',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'ELECTRICITY_UTILITY',
    benefitSummary: 'ग्रामीण व शहरी बिजली बिल का स्टेटस देखना, बिल डाउनलोड करना व ऑनलाइन रसीद पाना',
    officialApplyUrl: 'https://www.upenergy.in/',
    portalName: 'UPPCL Bill Portal',
    estimatedDays: 'तत्काल 1 सेकंड में',
    govtFee: 'उपभोग यूनिट अनुसार बिल',
    requiredDocuments: [
      { name: '10 या 12 अंकों का उपभोक्ता खाता संख्या (Account No)', mandatory: true }
    ],
    voiceKeywords: ['बिजली बिल', 'बिजली का बिल जमा', 'bijli bill', 'uppcl bill pay']
  },

  // 5. कानून, सुरक्षा एवं पुलिस (UP Police & Legal)
  {
    id: 'up-cop-pcc',
    title: 'यूपी पुलिस चरित्र प्रमाण पत्र (UP Police Character Verification - PCC)',
    department: 'उत्तर प्रदेश पुलिस तकनीकी सेवाएं (CCTNS)',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'POLICE_LEGAL',
    benefitSummary: 'सरकारी नौकरी, सीएससी केंद्र, शस्त्र लाइसेंस व संविदा हेतु थाना पुलिस सत्यापन प्रमाण पत्र',
    officialApplyUrl: 'https://cctnsup.gov.in/',
    portalName: 'cctnsup.gov.in / UP-Cop Portal',
    estimatedDays: '15 कार्यदिवस (स्थानीय थाना रिपोर्ट उपरांत)',
    govtFee: '₹50 (ऑनलाइन पुलिस फीस)',
    requiredDocuments: [
      { name: 'आधार कार्ड व निवास प्रमाण', mandatory: true },
      { name: 'पासपोर्ट साइज रंगीन फोटो', mandatory: true }
    ],
    voiceKeywords: ['चरित्र प्रमाण पत्र', 'पुलिस वेरिफिकेशन', 'यूपी कॉप', 'charitra praman', 'police verification', 'pcc']
  },
  {
    id: 'up-jansunwai-1076',
    title: 'यूपी जनसुनवाई समाधान (UP Jansunwai Anti-Corruption Portal 1076)',
    department: 'प्रशासनिक सुधार विभाग',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'POLICE_LEGAL',
    benefitSummary: 'थाने, तहसील या ब्लॉक में काम न होने या भ्रष्टाचार पर सीधे मुख्यमंत्री कार्यालय को शिकायत',
    officialApplyUrl: 'https://jansunwai.up.nic.in/',
    portalName: 'jansunwai.up.nic.in (आईजीआरएस पोर्टल)',
    estimatedDays: '15 से 30 कार्यदिवस में निस्तारण',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'शिकायत का स्पष्ट विवरण', mandatory: true },
      { name: 'संबंधित पुराने आवेदन या कागजात', mandatory: false }
    ],
    voiceKeywords: ['जनसुनवाई', 'मुख्यमंत्री शिकायत', '1076', 'jansunwai', 'samadhan portal', 'shikayat']
  },

  // 6. नगर निकाय व गृहकर (UP Urban Local Bodies)
  {
    id: 'up-nagarsewa-tax',
    title: 'नगर निगम गृहकर व जलकर ऑनलाइन (e-NagarSewa UP)',
    department: 'नगर विकास विभाग, उत्तर प्रदेश',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'ELECTRICITY_UTILITY',
    benefitSummary: 'उत्तर प्रदेश के सभी नगर निगम व पालिका के मकान का हाउस टैक्स व वाटर टैक्स ऑनलाइन भरना',
    officialApplyUrl: 'https://e-nagarsewaup.gov.in/',
    portalName: 'e-nagarsewaup.gov.in',
    estimatedDays: 'तत्काल डिजिटल रसीद',
    govtFee: 'नगर निगम असेसमेंट अनुसार',
    requiredDocuments: [
      { name: 'भवन संख्या (House No) अथवा संपत्ति आईडी', mandatory: true },
      { name: 'वार्ड व जोन का नाम', mandatory: true }
    ],
    voiceKeywords: ['गृहकर', 'हाउस टैक्स', 'नगर निगम टैक्स', 'house tax', 'property tax up']
  }
];
