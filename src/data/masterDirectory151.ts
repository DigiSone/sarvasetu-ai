import { GovServiceItem } from '../types/service';

export const MASTER_SERVICES_151: GovServiceItem[] = [
  // ============================================================
  // 1. पहचान, नागरिकता व पासपोर्ट (IDENTITY - 18 Services)
  // ============================================================
  {
    id: 'aadhaar-download',
    title: 'आधार कार्ड डाउनलोड व पीवीसी कार्ड (myAadhaar UIDAI)',
    department: 'भारतीय विशिष्ट पहचान प्राधिकरण (UIDAI)',
    ministryOrState: 'इलेक्ट्रॉनिक्स एवं सूचना प्रौद्योगिकी मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'IDENTITY',
    benefitSummary: 'डिजिटल आधार कार्ड ई-डाउनलोड व ₹50 में आधिकारिक प्लास्टिक पीवीसी कार्ड ऑर्डर',
    officialApplyUrl: 'https://myaadhaar.uidai.gov.in/',
    portalName: 'myaadhaar.uidai.gov.in',
    estimatedDays: 'डाउनलोड तत्काल / पीवीसी 7 दिन',
    govtFee: 'डाउनलोड ₹0 / पीवीसी कार्ड ₹50',
    requiredDocuments: [
      { name: 'आधार संख्या / Enrolment ID', mandatory: true },
      { name: 'ओटीपी हेतु लिंक मोबाइल नंबर', mandatory: true }
    ],
    voiceKeywords: ['आधार', 'आधार कार्ड', 'आधार डाउनलोड', 'pvc card', 'aadhaar', 'uidai']
  },
  {
    id: 'aadhaar-address-update',
    title: 'आधार में पता व मोबाइल ऑनलाइन अपडेट',
    department: 'भारतीय विशिष्ट पहचान प्राधिकरण (UIDAI)',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'IDENTITY',
    benefitSummary: 'घर बैठे आधार कार्ड में अपना नया पता बदलना या दस्तावेज़ सत्यापन (PoI/PoA)',
    officialApplyUrl: 'https://myaadhaar.uidai.gov.in/',
    portalName: 'myAadhaar Update Portal',
    estimatedDays: '15 से 30 कार्यदिवस',
    govtFee: 'ऑनलाइन अपडेट ₹50',
    requiredDocuments: [
      { name: 'वर्तमान आधार कार्ड', mandatory: true },
      { name: 'पते का प्रमाण (बिजली बिल / निवास / राशन कार्ड)', mandatory: true }
    ],
    voiceKeywords: ['आधार अपडेट', 'आधार सुधार', 'aadhaar update', 'address change']
  },
  {
    id: 'pan-new-nsdl',
    title: 'नया पैन कार्ड आवेदन (Form 49A - Protean NSDL)',
    department: 'आयकर विभाग (Income Tax Department)',
    ministryOrState: 'वित्त मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'IDENTITY',
    benefitSummary: 'बैंक खाता, लोन और वित्तीय लेनदेन हेतु 10 अंकों का नया पैन कार्ड प्राप्त करना',
    officialApplyUrl: 'https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html',
    portalName: 'Protean NSDL Portal',
    estimatedDays: 'e-PAN 10 मिनट / भौतिक कार्ड 10 दिन',
    govtFee: 'e-PAN ₹0 / भौतिक कार्ड ₹107',
    requiredDocuments: [
      { name: 'आधार कार्ड (ओटीपी लिंक)', mandatory: true },
      { name: 'सादे कागज़ पर हस्ताक्षर की फोटो', mandatory: true }
    ],
    voiceKeywords: ['पैन', 'पैन कार्ड', 'नया पैन कार्ड', 'pan card', 'pan', 'nsdl']
  },
  {
    id: 'pan-correction-uti',
    title: 'पैन कार्ड नाम/जन्मतिथि सुधार व रीप्रिंट (UTIITSL)',
    department: 'आयकर विभाग',
    ministryOrState: 'वित्त मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'IDENTITY',
    benefitSummary: 'पैन कार्ड में गलत नाम, पिता का नाम, फोटो या जन्मतिथि को ऑनलाइन ठीक करना',
    officialApplyUrl: 'https://www.pan.utiitsl.com/',
    portalName: 'UTIITSL PAN Portal',
    estimatedDays: '10 से 15 कार्यदिवस',
    govtFee: '₹107 (सरकारी शुल्क)',
    requiredDocuments: [
      { name: 'पुराना पैन कार्ड नंबर', mandatory: true },
      { name: 'सही पहचान व जन्मतिथि प्रमाण (आधार / 10वीं मार्कशीट)', mandatory: true }
    ],
    voiceKeywords: ['पैन सुधार', 'पैन कार्ड करेक्शन', 'pan correction', 'utiitsl']
  },
  {
    id: 'instant-epan',
    title: 'इंस्टेंट ई-पैन कार्ड (Instant e-PAN 10 मिनट में फ्री)',
    department: 'आयकर विभाग (e-Filing)',
    ministryOrState: 'वित्त मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'IDENTITY',
    benefitSummary: 'बिना किसी फॉर्म या शुल्क के केवल आधार ओटीपी से 10 मिनट में डिजिटल पैन कार्ड पाना',
    officialApplyUrl: 'https://www.incometax.gov.in/iec/foportal/',
    portalName: 'Income Tax e-Filing Portal',
    estimatedDays: 'तत्काल 10 मिनट',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'आधार कार्ड (मोबाइल नंबर लिंक होना अनिवार्य)', mandatory: true }
    ],
    voiceKeywords: ['फ्री पैन कार्ड', 'ई पैन', 'instant pan', 'free pan card']
  },
  {
    id: 'pan-aadhaar-link-status',
    title: 'पैन-आधार लिंक स्थिति व लेट फीस चालान',
    department: 'आयकर विभाग',
    ministryOrState: 'वित्त मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'IDENTITY',
    benefitSummary: 'पैन कार्ड निष्क्रिय होने से बचाने हेतु आधार से लिंक की जांच व ₹1000 चालान भुगतान',
    officialApplyUrl: 'https://eportal.incometax.gov.in/iec/foservices/#/pre-login/link-aadhaar-status',
    portalName: 'Income Tax Link Service',
    estimatedDays: 'जांच तत्काल / लिंक 2-3 दिन',
    govtFee: 'जांच ₹0 / लेट फीस ₹1,000',
    requiredDocuments: [
      { name: 'पैन कार्ड नंबर', mandatory: true },
      { name: 'आधार कार्ड नंबर', mandatory: true }
    ],
    voiceKeywords: ['पैन आधार लिंक', 'pan aadhar link', 'link status']
  },
  {
    id: 'voter-id-new-form6',
    title: 'नया मतदाता पहचान पत्र (Voter ID New Form 6)',
    department: 'भारत निर्वाचन आयोग (ECI)',
    ministryOrState: 'विधि एवं न्याय मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'IDENTITY',
    benefitSummary: '18 वर्ष की आयु पूरी होने पर लोकतांत्रिक मताधिकार हेतु नया रंगीन वोटर कार्ड',
    officialApplyUrl: 'https://voters.eci.gov.in/',
    portalName: 'voters.eci.gov.in',
    estimatedDays: '20 से 30 कार्यदिवस (BLO रिपोर्ट)',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'आयु प्रमाण (आधार / 10वीं मार्कशीट / जन्म प्रमाण)', mandatory: true },
      { name: 'निवास प्रमाण (बिजली बिल / राशन कार्ड)', mandatory: true },
      { name: 'पासपोर्ट साइज रंगीन फोटो', mandatory: true }
    ],
    voiceKeywords: ['वोटर कार्ड', 'पहचान पत्र', 'मतदाता कार्ड', 'voter id', 'voter card', 'eci']
  },
  {
    id: 'voter-correction-form8',
    title: 'वोटर कार्ड पता/नाम सुधार व नया पीवीसी (Form 8)',
    department: 'भारत निर्वाचन आयोग (ECI)',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'IDENTITY',
    benefitSummary: 'वोटर लिस्ट में नाम, फोटो या बूथ बदलना व खोया वोटर कार्ड दोबारा घर मंगाना',
    officialApplyUrl: 'https://voters.eci.gov.in/',
    portalName: 'ECI Voters Portal',
    estimatedDays: '15 से 20 कार्यदिवस',
    govtFee: '₹0 (निःशुल्क)',
    requiredDocuments: [
      { name: 'पुराना वोटर EPIC नंबर', mandatory: true },
      { name: 'संशोधित पहचान प्रमाण', mandatory: true }
    ],
    voiceKeywords: ['वोटर सुधार', 'वोटर कार्ड में नाम सुधार', 'voter correction']
  },
  {
    id: 'digital-voter-eepic',
    title: 'डिजिटल ई-एपिक वोटर कार्ड डाउनलोड (e-EPIC)',
    department: 'भारत निर्वाचन आयोग (ECI)',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'IDENTITY',
    benefitSummary: 'मूल वोटर कार्ड के बराबर मान्य पीडीएफ वोटर कार्ड तुरंत 1 मिनट में डाउनलोड करें',
    officialApplyUrl: 'https://voters.eci.gov.in/',
    portalName: 'ECI e-EPIC Portal',
    estimatedDays: 'तत्काल 1 मिनट',
    govtFee: '₹0 (निःशुल्क)',
    requiredDocuments: [
      { name: 'वोटर EPIC नंबर अथवा फॉर्म रेफरेंस नंबर', mandatory: true },
      { name: 'पंजीकृत मोबाइल नंबर (ओटीपी हेतु)', mandatory: true }
    ],
    voiceKeywords: ['वोटर कार्ड डाउनलोड', 'e-epic', 'voter download']
  },
  {
    id: 'fresh-passport-application',
    title: 'नया पासपोर्ट आवेदन (Fresh Passport 36/60 Page)',
    department: 'कांसुलर, पासपोर्ट और वीजा प्रभाग',
    ministryOrState: 'विदेश मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'IDENTITY',
    benefitSummary: 'विदेश यात्रा और अंतरराष्ट्रीय पहचान हेतु 10 वर्ष की वैधता वाला भारतीय पासपोर्ट',
    officialApplyUrl: 'https://www.passportindia.gov.in/',
    portalName: 'passportindia.gov.in',
    estimatedDays: 'सामान्य 15-20 कार्यदिवस',
    govtFee: '₹1,500 (36 पृष्ठ सामान्य)',
    requiredDocuments: [
      { name: 'जन्म तिथि प्रमाण (आधार कार्ड / जन्म प्रमाण)', mandatory: true },
      { name: 'वर्तमान पते का प्रमाण', mandatory: true },
      { name: 'शैक्षणिक योग्यता प्रमाण पत्र (10वीं मार्कशीट Non-ECR हेतु)', mandatory: true }
    ],
    voiceKeywords: ['पासपोर्ट', 'पासपोर्ट सेवा', 'विदेश यात्रा', 'passport', 'passport seva']
  },
  {
    id: 'tatkaal-passport-service',
    title: 'तत्काल पासपोर्ट सेवा (Tatkaal Passport Appointment)',
    department: 'विदेश मंत्रालय',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'IDENTITY',
    benefitSummary: 'आपात स्थिति में विदेश जाने हेतु केवल 3 दिनों के भीतर तत्काल पासपोर्ट जारी करना',
    officialApplyUrl: 'https://www.passportindia.gov.in/',
    portalName: 'Passport Seva Tatkaal',
    estimatedDays: '3 से 5 कार्यदिवस',
    govtFee: '₹3,500 (सामान्य ₹1500 + तत्काल ₹2000)',
    requiredDocuments: [
      { name: 'आधार कार्ड व पैन कार्ड', mandatory: true },
      { name: 'वोटर कार्ड अथवा बैंक पासबुक', mandatory: true },
      { name: 'शपथ पत्र Annexure E', mandatory: true }
    ],
    voiceKeywords: ['तत्काल पासपोर्ट', 'tatkal passport', 'emergency passport']
  },
  {
    id: 'pcc-passport-police',
    title: 'पासपोर्ट पुलिस क्लीयरेंस प्रमाण पत्र (Passport PCC)',
    department: 'विदेश मंत्रालय व पुलिस विभाग',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'IDENTITY',
    benefitSummary: 'विदेश में नौकरी, वर्क परमिट या स्थायी निवास (PR) हेतु अनिवार्य विदेश मंत्रालय PCC',
    officialApplyUrl: 'https://www.passportindia.gov.in/',
    portalName: 'Passport Seva PCC',
    estimatedDays: '15 कार्यदिवस',
    govtFee: '₹500 (सरकारी शुल्क)',
    requiredDocuments: [
      { name: 'मूल भारतीय पासपोर्ट व प्रति', mandatory: true },
      { name: 'वर्तमान पते का प्रमाण', mandatory: true },
      { name: 'विदेशी वीज़ा या जॉब ऑफर लेटर', mandatory: true }
    ],
    voiceKeywords: ['पासपोर्ट पीसीसी', 'विदेश पुलिस वेरिफिकेशन', 'passport pcc']
  },
  {
    id: 'transgender-id-national',
    title: 'ट्रांसजेंडर राष्ट्रीय पहचान पत्र व प्रमाण पत्र',
    department: 'सामाजिक न्याय और अधिकारिता मंत्रालय',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'IDENTITY',
    benefitSummary: 'किन्नर और ट्रांसजेंडर व्यक्तियों को बिना मेडिकल जांच के स्व-घोषणा आधारित सरकारी आईडी',
    officialApplyUrl: 'https://transgender.dosje.gov.in/',
    portalName: 'transgender.dosje.gov.in',
    estimatedDays: '30 कार्यदिवस में जिला मजिस्ट्रेट द्वारा',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'स्व-घोषणा शपथ पत्र (Affidavit)', mandatory: true },
      { name: 'आधार कार्ड या जन्म प्रमाण पत्र', mandatory: true }
    ],
    voiceKeywords: ['ट्रांसजेंडर', 'किन्नर कार्ड', 'transgender id', 'kinnar pehchan']
  },
  {
    id: 'oci-card-registration',
    title: 'प्रवासी भारतीय नागरिकता (OCI Card Registration)',
    department: 'आप्रवासन ब्यूरो (BoI)',
    ministryOrState: 'गृह मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'IDENTITY',
    benefitSummary: 'विदेशी नागरिकता प्राप्त भारतीय मूल के व्यक्तियों हेतु आजीवन भारत में बिना वीज़ा रहने का अधिकार',
    officialApplyUrl: 'https://ociservices.gov.in/',
    portalName: 'ociservices.gov.in',
    estimatedDays: '45 से 60 कार्यदिवस',
    govtFee: '$275 अथवा समकक्ष भारतीय रुपया',
    requiredDocuments: [
      { name: 'विदेशी पासपोर्ट की प्रति', mandatory: true },
      { name: 'पूर्व भारतीय नागरिकता का प्रमाण (पुराना पासपोर्ट)', mandatory: true }
    ],
    voiceKeywords: ['ओसीआर', 'oci card', 'प्रवासी भारतीय', 'overseas citizen']
  },
  {
    id: 'e-frro-foreigner-visa',
    title: 'विदेशी नागरिक वीज़ा विस्तार व एग्जिट परमिट (e-FRRO)',
    department: 'आप्रवासन ब्यूरो (BoI)',
    ministryOrState: 'गृह मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'IDENTITY',
    benefitSummary: 'भारत में रुके विदेशी नागरिकों का ऑनलाइन पुलिस पंजीकरण व वीज़ा अवधि विस्तार',
    officialApplyUrl: 'https://eservices.immigration.gov.in/',
    portalName: 'e-FRRO Portal',
    estimatedDays: '3 से 7 कार्यदिवस',
    govtFee: 'वीज़ा नियम अनुसार',
    requiredDocuments: [
      { name: 'वैध पासपोर्ट व भारतीय वीज़ा प्रति', mandatory: true },
      { name: 'होटल / निवास का Form C', mandatory: true }
    ],
    voiceKeywords: ['वीजा विस्तार', 'frro', 'visa extension', 'efrro']
  },
  {
    id: 'egazette-name-correction',
    title: 'भारत का राजपत्र नाम परिवर्तन (e-Gazette Name Change)',
    department: 'प्रकाशन विभाग',
    ministryOrState: 'आवासन और शहरी कार्य मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'IDENTITY',
    benefitSummary: 'मार्कशीट, पासपोर्ट और बैंक में नाम बदलने हेतु कानूनी भारत का राजपत्र गजट नोटिफिकेशन',
    officialApplyUrl: 'https://egazette.gov.in/',
    portalName: 'egazette.gov.in',
    estimatedDays: '15 से 20 कार्यदिवस',
    govtFee: '₹1,100 से ₹1,700',
    requiredDocuments: [
      { name: 'नोटरी द्वारा प्रमाणित शपथ पत्र', mandatory: true },
      { name: 'दो समाचार पत्रों में प्रकाशित विज्ञापन', mandatory: true },
      { name: 'आधार कार्ड व पैन कार्ड प्रति', mandatory: true }
    ],
    voiceKeywords: ['गजट', 'नाम परिवर्तन', 'राजपत्र', 'egazette', 'name change']
  },
  {
    id: 'driving-license-sarathi',
    title: 'ड्राइविंग लाइसेंस (Sarathi Parivahan Learner / Permanent DL)',
    department: 'सड़क परिवहन और राजमार्ग मंत्रालय (MoRTH)',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'IDENTITY',
    benefitSummary: 'घर बैठे आधार से ऑनलाइन टेस्ट देकर लर्नर व आरटीओ से पक्का ड्राइविंग लाइसेंस पाना',
    officialApplyUrl: 'https://sarathi.parivahan.gov.in/',
    portalName: 'sarathi.parivahan.gov.in',
    estimatedDays: 'लर्नर तत्काल / स्थायी DL 7 दिन',
    govtFee: 'लर्नर ₹200 / स्थायी DL ₹1,000 (मानक)',
    requiredDocuments: [
      { name: 'आधार कार्ड (घर बैठे बिना आरटीओ ऑनलाइन टेस्ट हेतु)', mandatory: true },
      { name: 'आयु प्रमाण पत्र व 10वीं मार्कशीट', mandatory: true }
    ],
    voiceKeywords: ['ड्राइविंग लाइसेंस', 'डीएल', 'लर्नर लाइसेंस', 'driving license', 'dl', 'sarathi']
  },
  {
    id: 'digilocker-national-cloud',
    title: 'डिजिलॉकर राष्ट्रीय डिजिटल लॉकर (DigiLocker)',
    department: 'डिजिटल इंडिया कॉरपोरेशन',
    ministryOrState: 'इलेक्ट्रॉनिक्स एवं सूचना प्रौद्योगिकी मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'IDENTITY',
    benefitSummary: 'आईटी एक्ट 2000 के तहत मूल कागजात के बराबर मान्य 100% सुरक्षित डिजिटल लॉकर',
    officialApplyUrl: 'https://www.digilocker.gov.in/',
    portalName: 'digilocker.gov.in',
    estimatedDays: 'तत्काल 1 सेकंड में जारी',
    govtFee: '₹0 (आजीवन 100% मुफ़्त)',
    requiredDocuments: [
      { name: 'आधार नंबर व लिंक मोबाइल नंबर', mandatory: true }
    ],
    voiceKeywords: ['डिजिलॉकर', 'डिजीलॉकर', 'डिजिटल मार्कशीट', 'digilocker']
  },

  // ============================================================
  // 2. राजस्व, भूमि, आवास व शहरी विकास (REVENUE_LAND - 20 Services)
  // ============================================================
  {
    id: 'up-bhulekh-khatauni',
    title: 'यूपी भूलेख खतौनी नकल (UP Bhulekh Land Records)',
    department: 'राजस्व परिषद, उत्तर प्रदेश',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'REVENUE_LAND',
    benefitSummary: 'गाटा संख्या, खसरा या खातेदार के नाम से जमीन की डिजिटल प्रमाणित खतौनी नकल',
    officialApplyUrl: 'https://upbhulekh.gov.in/',
    portalName: 'upbhulekh.gov.in (राजस्व परिषद)',
    estimatedDays: 'तत्काल 1 मिनट में लाइव',
    govtFee: 'देखना ₹0 / डिजिटल नकल ₹15',
    requiredDocuments: [
      { name: 'जनपद, तहसील और ग्राम का नाम', mandatory: true },
      { name: 'खसरा / गाटा संख्या या खातेदार का नाम', mandatory: true }
    ],
    voiceKeywords: ['भूलेख', 'खतौनी', 'खसरा', 'जमीन की नकल', 'गाटा', 'bhulekh', 'khatauni', 'khasra']
  },
  {
    id: 'up-dakhil-kharij-mutation',
    title: 'दाखिल खारिज / नामांतरण (UP Vaad Dakhil Kharij - धारा 34/35)',
    department: 'राजस्व न्यायालय कंप्यूटरीकृत प्रबंधन प्रणाली (RCCMS)',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'REVENUE_LAND',
    benefitSummary: 'बैनामा रजिस्ट्री के बाद खतौनी में खरीदार का नाम दर्ज कराने हेतु ऑनलाइन वाद',
    officialApplyUrl: 'https://vaad.up.nic.in/',
    portalName: 'vaad.up.nic.in (राजस्व न्यायालय)',
    estimatedDays: '35 से 45 कार्यदिवस (तहसीलदार कोर्ट)',
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
    title: 'यूपी घरौनी प्रमाण पत्र (UP Rural Abadi Gharauni - SWAMITVA)',
    department: 'राजस्व परिषद व पंचायती राज विभाग',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'REVENUE_LAND',
    benefitSummary: 'गांव की आबादी भूमि पर बने पुश्तैनी मकानों का ड्रोन सर्वे आधारित कानूनी मालिकाना अधिकार पत्र',
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
    id: 'up-bainama-nakal-igrs',
    title: 'बैनामा प्रमाणित नकल व भारमुक्त प्रमाण पत्र (IGRS UP)',
    department: 'स्टाम्प एवं निबंधन विभाग',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'REVENUE_LAND',
    benefitSummary: 'रजिस्ट्री ऑफिस से पुराने बैनामे की डिजिटल प्रमाणित प्रति व 12 साला नो-लोन जांच (EC)',
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
  {
    id: 'section-80-non-agri-conversion',
    title: 'गैर-कृषि भूमि परिवर्तन (Section 80 / 143 UP Revenue Code)',
    department: 'राजस्व परिषद',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'REVENUE_LAND',
    benefitSummary: 'खेती की जमीन पर दुकान, मकान या पेट्रोल पंप लगाने हेतु एसडीएम न्यायालय आदेश',
    officialApplyUrl: 'https://vaad.up.nic.in/',
    portalName: 'vaad.up.nic.in',
    estimatedDays: '45 कार्यदिवस',
    govtFee: 'सर्किल रेट अनुसार गैर-कृषि शुल्क',
    requiredDocuments: [
      { name: 'मूल खतौनी नकल व खसरा नक्शा', mandatory: true },
      { name: 'प्रस्तावित निर्माण का ब्लूप्रिंट', mandatory: true }
    ],
    voiceKeywords: ['धारा 80', 'धारा 143', 'गैर कृषि', 'land conversion']
  },
  {
    id: 'pm-awas-urban',
    title: 'प्रधानमंत्री आवास योजना शहरी (PMAY Urban ₹2.5 Lakh)',
    department: 'आवासन और शहरी कार्य मंत्रालय',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'REVENUE_LAND',
    benefitSummary: 'शहरों में पक्का मकान बनाने या खरीदने पर ₹2.5 लाख तक की सीधी बैंक ब्याज सब्सिडी',
    officialApplyUrl: 'https://pmaymis.gov.in/',
    portalName: 'pmaymis.gov.in',
    estimatedDays: 'नगर पालिका सत्यापन उपरांत',
    govtFee: '₹0 (निःशुल्क)',
    requiredDocuments: [
      { name: 'परिवार के सभी सदस्यों का आधार कार्ड', mandatory: true },
      { name: 'जमीन की रजिस्ट्री / पट्टा', mandatory: true },
      { name: 'बैंक खाता व आय प्रमाण', mandatory: true }
    ],
    voiceKeywords: ['पीएम आवास', 'शहरी आवास', 'pm awas urban', 'awas subsidy']
  },
  {
    id: 'pm-awas-gramin',
    title: 'प्रधानमंत्री आवास योजना ग्रामीण (PMAY-G ₹1.20 Lakh)',
    department: 'ग्रामीण विकास मंत्रालय',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'REVENUE_LAND',
    benefitSummary: 'ग्रामीण बेघर परिवारों को पक्का मकान बनाने हेतु ₹1,20,000 सीधे बैंक खाते में',
    officialApplyUrl: 'https://pmayg.nic.in/',
    portalName: 'pmayg.nic.in',
    estimatedDays: 'ग्राम सभा चयन अनुसार',
    govtFee: '₹0 (निःशुल्क)',
    requiredDocuments: [
      { name: 'आधार कार्ड व मनरेगा जॉब कार्ड', mandatory: true },
      { name: 'कच्चे मकान की फोटो व बैंक पासबुक', mandatory: true }
    ],
    voiceKeywords: ['आवास ग्रामीण', 'pmay gramin', 'गांव का आवास']
  },
  {
    id: 'e-nagarsewa-up-tax',
    title: 'नगर निगम गृहकर व जलकर ऑनलाइन भुगतान (e-NagarSewa UP)',
    department: 'नगर विकास विभाग, उत्तर प्रदेश',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'REVENUE_LAND',
    benefitSummary: 'उत्तर प्रदेश के सभी नगर निगम व पालिका के मकान का हाउस टैक्स ऑनलाइन जमा कर रसीद पाना',
    officialApplyUrl: 'https://e-nagarsewaup.gov.in/',
    portalName: 'e-nagarsewaup.gov.in',
    estimatedDays: 'तत्काल 1 सेकंड में रसीद',
    govtFee: 'असेसमेंट अनुसार गृहकर',
    requiredDocuments: [
      { name: 'भवन संख्या (House No) अथवा संपत्ति आईडी', mandatory: true }
    ],
    voiceKeywords: ['गृहकर', 'हाउस टैक्स', 'नगर निगम टैक्स', 'house tax', 'property tax']
  },
  {
    id: 'up-rera-complaint-court',
    title: 'रेरा बिल्डर धोखाधड़ी शिकायत (UP RERA Consumer Court)',
    department: 'रियल एस्टेट विनियामक प्राधिकरण (RERA)',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'REVENUE_LAND',
    benefitSummary: 'फ्लैट या प्लॉट का पजेशन न मिलने पर बिल्डर के खिलाफ ऑनलाइन केस व ब्याज सहित रिफंड',
    officialApplyUrl: 'https://www.up-rera.in/',
    portalName: 'up-rera.in',
    estimatedDays: 'अदालती सुनवाई 60 दिन',
    govtFee: '₹1,000 (अदालती शुल्क)',
    requiredDocuments: [
      { name: 'बिल्डर बायर एग्रीमेंट (BBA)', mandatory: true },
      { name: 'भुगतान रसीदें व बैंक स्टेटमेंट', mandatory: true }
    ],
    voiceKeywords: ['रेरा', 'बिल्डर शिकायत', 'rera complaint', 'up rera']
  },
  {
    id: 'all-india-estamp-shcil',
    title: 'ई-स्टाम्प पेपर ऑनलाइन खरीद (SHCIL e-Stamp Portal)',
    department: 'स्टॉक होल्डिंग कॉर्पोरेशन ऑफ इंडिया (SHCIL)',
    ministryOrState: 'वित्त मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'REVENUE_LAND',
    benefitSummary: 'शपथ पत्र, किरायानामा, एग्रीमेंट हेतु कानूनी डिजिटल ई-स्टाम्प तुरंत प्रिंट करना',
    officialApplyUrl: 'https://www.shcilestamp.com/',
    portalName: 'shcilestamp.com',
    estimatedDays: 'तत्काल 1 मिनट',
    govtFee: 'स्टाम्प मूल्य अनुसार (₹10, ₹50, ₹100 आदि)',
    requiredDocuments: [
      { name: 'प्रथम पक्ष और द्वितीय पक्ष का नाम', mandatory: true },
      { name: 'स्टाम्प का उद्देश्य (Affidavit / Agreement)', mandatory: true }
    ],
    voiceKeywords: ['स्टाम्प पेपर', 'ई स्टाम्प', 'estamp', 'e-stamp', 'affidavit stamp']
  },
  {
    id: 'land-demarcation-paimaish',
    title: 'जमीन की पैमाइश / सीमांकन (UP Revenue Code धारा 24)',
    department: 'राजस्व परिषद',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'REVENUE_LAND',
    benefitSummary: 'खेत या प्लॉट की मेड़ विवाद सुलझाने हेतु कानूनगो व लेखपाल द्वारा सरकारी पैमाइश',
    officialApplyUrl: 'https://vaad.up.nic.in/',
    portalName: 'vaad.up.nic.in (धारा 24)',
    estimatedDays: '30 से 45 कार्यदिवस',
    govtFee: '₹1,000 प्रति गाटा सरकारी चालान',
    requiredDocuments: [
      { name: 'वर्तमान खतौनी नकल व खसरा नक्शा', mandatory: true },
      { name: 'राजस्व चालान रसीद', mandatory: true }
    ],
    voiceKeywords: ['पैमाइश', 'जमीन नापना', 'धारा 24', 'paimaish']
  },
  {
    id: 'varasat-online-up',
    title: 'ऑनलाइन वरासत / पैतृक संपत्ति उत्तराधिकार',
    department: 'राजस्व परिषद',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'REVENUE_LAND',
    benefitSummary: 'खातेदार की मृत्यु के बाद बिना रिश्वत वारिसों का नाम खतौनी में दर्ज कराने का पोर्टल',
    officialApplyUrl: 'https://vaad.up.nic.in/',
    portalName: 'vaad.up.nic.in (वरासत)',
    estimatedDays: '15 कार्यदिवस',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'मृतक का मृत्यु प्रमाण पत्र', mandatory: true },
      { name: 'खतौनी नकल व सभी वारिसों के आधार', mandatory: true }
    ],
    voiceKeywords: ['वरासत', 'फौती', 'वारिस नाम', 'varasat', 'fauti']
  },
  {
    id: 'anti-bhumafia-portal',
    title: 'एंटी-भूमाफिया सरकारी जमीन अवैध कब्जा शिकायत',
    department: 'गृह व राजस्व विभाग',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'REVENUE_LAND',
    benefitSummary: 'ग्राम समाज, तालाब, चकरोड या पुश्तैनी जमीन पर दबंगों के अवैध कब्जे की सीधी शिकायत',
    officialApplyUrl: 'https://jansunwai.up.nic.in/',
    portalName: 'jansunwai.up.nic.in/abmp.html',
    estimatedDays: '15 कार्यदिवस',
    govtFee: '₹0 (निःशुल्क)',
    requiredDocuments: [
      { name: 'अवैध कब्जे की भूमि का गाटा/खसरा संख्या', mandatory: true },
      { name: 'कब्जा करने वाले व्यक्तियों का विवरण', mandatory: true }
    ],
    voiceKeywords: ['भूमाफिया', 'अवैध कब्जा', 'चकरोड कब्जा', 'anti bhumafia']
  },
  {
    id: 'rent-agreement-registration',
    title: 'किरायानामा ऑनलाइन पंजीकरण (IGRS UP Rent Agreement)',
    department: 'स्टाम्प एवं निबंधन विभाग',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'REVENUE_LAND',
    benefitSummary: 'मकान मालिक और किरायेदार के बीच 11 महीने या उससे अधिक का कानूनी पंजीकृत अनुबंध',
    officialApplyUrl: 'https://igrsup.gov.in/',
    portalName: 'igrsup.gov.in',
    estimatedDays: '2 से 3 कार्यदिवस',
    govtFee: 'स्टाम्प व रजिस्ट्रेशन फीस',
    requiredDocuments: [
      { name: 'मकान मालिक व किरायेदार का आधार व पैन', mandatory: true },
      { name: 'बिजली बिल / मकान का हाउस टैक्स बिल', mandatory: true }
    ],
    voiceKeywords: ['किरायानामा', 'rent agreement', 'किराया एग्रीमेंट']
  },
  {
    id: 'up-map-naksha-pass',
    title: 'ऑनलाइन भवन नक्शा पास (UP OBPAS Development Authority)',
    department: 'आवास एवं शहरी नियोजन विभाग',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'REVENUE_LAND',
    benefitSummary: 'विकास प्राधिकरण (VDA/LDA आदि) से घर या दुकान का नक्शा ऑनलाइन स्वीकृत कराना',
    officialApplyUrl: 'https://upobpas.in/',
    portalName: 'upobpas.in (OBPAS UP)',
    estimatedDays: '15 से 30 कार्यदिवस',
    govtFee: 'क्षेत्रफल अनुसार विकास शुल्क',
    requiredDocuments: [
      { name: 'जमीन का पंजीकृत बैनामा व खारिज दाखिल खतौनी', mandatory: true },
      { name: 'आर्किटेक्ट द्वारा तैयार सीएडी नक्शा (CAD Drawing)', mandatory: true }
    ],
    voiceKeywords: ['नक्शा पास', 'मकान का नक्शा', 'obpas', 'map approval']
  },
  {
    id: 'encumbrance-certificate-ec',
    title: 'संपत्ति भारमुक्त प्रमाण पत्र (12 साला नो-लोन EC)',
    department: 'स्टाम्प एवं निबंधन विभाग',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'REVENUE_LAND',
    benefitSummary: 'मकान या जमीन खरीदने से पहले जांचना कि उस पर कोई पुराना बैंक लोन या बंधक तो नहीं',
    officialApplyUrl: 'https://igrsup.gov.in/',
    portalName: 'igrsup.gov.in',
    estimatedDays: '3 से 5 कार्यदिवस',
    govtFee: '₹100 से ₹200',
    requiredDocuments: [
      { name: 'संपत्ति का पूरा विवरण व गाटा/चौहद्दी', mandatory: true }
    ],
    voiceKeywords: ['भारमुक्त प्रमाण', '12 साला', 'नो लोन', 'encumbrance certificate', 'ec']
  },
  {
    id: 'urban-water-sewer-line',
    title: 'नया नगर निगम पानी व सीवर कनेक्शन (Jal Sansthan UP)',
    department: 'जल संस्थान, नगर विकास विभाग',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'REVENUE_LAND',
    benefitSummary: 'घर में नगर निगम का शुद्ध पेयजल पाइपलाइन व सीवरेज कनेक्शन लगवाना',
    officialApplyUrl: 'https://e-nagarsewaup.gov.in/',
    portalName: 'e-nagarsewaup.gov.in',
    estimatedDays: '15 कार्यदिवस',
    govtFee: 'दूरी व कनेक्शन साइज अनुसार',
    requiredDocuments: [
      { name: 'मकान की रजिस्ट्री अथवा हाउस टैक्स बिल', mandatory: true },
      { name: 'आधार कार्ड व पासपोर्ट फोटो', mandatory: true }
    ],
    voiceKeywords: ['पानी का कनेक्शन', 'सीवर कनेक्शन', 'जल संस्थान', 'water connection']
  },
  {
    id: 'khasra-naksha-bhunaksha',
    title: 'भू-नक्शा / खेत का सजरा नक्शा डाउनलोड (UP BhuNaksha)',
    department: 'राजस्व परिषद',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'REVENUE_LAND',
    benefitSummary: 'अपने खेत का सरकारी नक्शा (सजरा) और चौहद्दी ऑनलाइन मुफ्त में देखना व डाउनलोड करना',
    officialApplyUrl: 'https://upbhunaksha.gov.in/',
    portalName: 'upbhunaksha.gov.in',
    estimatedDays: 'तत्काल 1 मिनट',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'जिला, तहसील, गांव व खसरा संख्या', mandatory: true }
    ],
    voiceKeywords: ['भू नक्शा', 'खेत का नक्शा', 'सजरा नक्शा', 'bhunaksha']
  },
  {
    id: 'chakarod-rasta-vivad',
    title: 'खेत का रास्ता / चकरोड विवाद प्रार्थना पत्र (धारा 25/26)',
    department: 'राजस्व परिषद',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'REVENUE_LAND',
    benefitSummary: 'खेत पर जाने वाले रास्ते या चकरोड को किसी द्वारा रोके जाने पर तहसीलदार आदेश',
    officialApplyUrl: 'https://vaad.up.nic.in/',
    portalName: 'vaad.up.nic.in',
    estimatedDays: '30 कार्यदिवस',
    govtFee: 'नाममात्र अदालती शुल्क',
    requiredDocuments: [
      { name: 'खतौनी नकल व विवादित रास्ते का नक्शा', mandatory: true }
    ],
    voiceKeywords: ['रास्ता विवाद', 'चकरोड विवाद', 'khet ka rasta']
  },
  {
    id: 'bhumidhari-adhikar-patra',
    title: 'भूमिधरी अधिकार प्रमाण पत्र (असंक्रमणीय से संक्रमणीय)',
    department: 'राजस्व परिषद',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'REVENUE_LAND',
    benefitSummary: '5 वर्ष पूरा होने पर पट्टे की जमीन को संक्रमणीय भूमिधर घोषित कराने हेतु आदेश',
    officialApplyUrl: 'https://vaad.up.nic.in/',
    portalName: 'vaad.up.nic.in',
    estimatedDays: '45 कार्यदिवस',
    govtFee: 'सरकारी नियम अनुसार',
    requiredDocuments: [
      { name: 'मूल पट्टा आवंटन आदेश प्रति व खतौनी', mandatory: true }
    ],
    voiceKeywords: ['भूमिधरी', 'पट्टा संक्रमणीय', 'patta jameen']
  },

  // ============================================================
  // 3. नागरिक प्रमाण पत्र (CERTIFICATES - 16 Services)
  // ============================================================
  {
    id: 'online-birth-certificate-crs',
    title: 'ऑनलाइन जन्म प्रमाण पत्र (CRS Portal Birth Certificate)',
    department: 'भारत के महारजिस्ट्रार का कार्यालय (ORGI)',
    ministryOrState: 'गृह मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'CERTIFICATES',
    benefitSummary: 'स्कूल दाखिला, पासपोर्ट और आधार बनवाने हेतु सबसे पहला आधिकारिक कानूनी दस्तावेज',
    officialApplyUrl: 'https://crsorgi.gov.in/web/index.php/auth/login',
    portalName: 'crsorgi.gov.in',
    estimatedDays: '7 से 21 कार्यदिवस',
    govtFee: '21 दिन के भीतर ₹0 (निःशुल्क)',
    requiredDocuments: [
      { name: 'अस्पताल से प्राप्त डिस्चार्ज समरी / जन्म पर्ची', mandatory: true },
      { name: 'माता-पिता दोनों का आधार कार्ड', mandatory: true }
    ],
    voiceKeywords: ['जन्म प्रमाण पत्र', 'birth certificate', 'janam praman patra', 'crs']
  },
  {
    id: 'online-death-certificate-crs',
    title: 'ऑनलाइन मृत्यु प्रमाण पत्र (CRS Portal Death Certificate)',
    department: 'भारत के महारजिस्ट्रार का कार्यालय (ORGI)',
    ministryOrState: 'गृह मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'CERTIFICATES',
    benefitSummary: 'बैंक खाता बंद करने, वरासत और जीवन बीमा क्लेम हेतु अनिवार्य कानूनी दस्तावेज',
    officialApplyUrl: 'https://crsorgi.gov.in/web/index.php/auth/login',
    portalName: 'crsorgi.gov.in',
    estimatedDays: '7 से 15 कार्यदिवस',
    govtFee: '21 दिन के भीतर ₹0 (निःशुल्क)',
    requiredDocuments: [
      { name: 'अस्पताल मृत्यु पर्ची अथवा श्मशान/कब्रिस्तान रसीद', mandatory: true },
      { name: 'मृतक का आधार कार्ड व वारिस का पहचान पत्र', mandatory: true }
    ],
    voiceKeywords: ['मृत्यु प्रमाण पत्र', 'death certificate', 'mrityu praman patra']
  },
  {
    id: 'up-caste-certificate',
    title: 'जाति प्रमाण पत्र (UP Caste Certificate - SC/ST/OBC)',
    department: 'राजस्व विभाग (e-District UP)',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'CERTIFICATES',
    benefitSummary: 'शिक्षा, वजीफा और सरकारी नौकरियों में आरक्षण हेतु तहसीलदार द्वारा डिजिटल हस्ताक्षरित प्रमाण पत्र',
    officialApplyUrl: 'https://edistrict.up.gov.in/',
    portalName: 'edistrict.up.gov.in',
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
    id: 'up-income-certificate',
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
    id: 'up-domicile-certificate',
    title: 'मूल निवास प्रमाण पत्र (UP Domicile / Residence Certificate)',
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
    id: 'up-ews-certificate',
    title: 'ईडब्ल्यूएस प्रमाण पत्र (EWS Certificate 10% Reservation)',
    department: 'राजस्व विभाग (तहसीलदार कार्यालय)',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'CERTIFICATES',
    benefitSummary: 'सामान्य वर्ग के गरीब परिवारों को नौकरी व शिक्षण संस्थानों में 10% आरक्षण प्रमाण पत्र',
    officialApplyUrl: 'https://edistrict.up.gov.in/',
    portalName: 'edistrict.up.gov.in',
    estimatedDays: '15 कार्यदिवस',
    govtFee: '₹15 (सरकारी शुल्क)',
    requiredDocuments: [
      { name: 'आय प्रमाण पत्र (सालाना आय ₹8 लाख से कम)', mandatory: true },
      { name: 'जमीन की खतौनी / मकान का क्षेत्रफल प्रमाण', mandatory: true },
      { name: 'आधार कार्ड व पैन कार्ड', mandatory: true }
    ],
    voiceKeywords: ['ईडब्ल्यूएस', 'ews certificate', 'सामान्य वर्ग आरक्षण']
  },
  {
    id: 'up-divyang-certificate',
    title: 'दिव्यांगता प्रमाण पत्र (UP CMO Disability Certificate)',
    department: 'चिकित्सा एवं स्वास्थ्य विभाग',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'CERTIFICATES',
    benefitSummary: 'सीएमओ मेडिकल बोर्ड द्वारा जारी 40% या अधिक दिव्यांगता का सरकारी प्रमाण पत्र',
    officialApplyUrl: 'https://edistrict.up.gov.in/',
    portalName: 'eDistrict UP CMO Portal',
    estimatedDays: 'सीएमओ मेडिकल बोर्ड बैठक अनुसार',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'आधार कार्ड', mandatory: true },
      { name: 'दिव्यांगता दर्शाती पूर्ण शरीर की फोटो', mandatory: true }
    ],
    voiceKeywords: ['दिव्यांग प्रमाण पत्र', 'विकलांग सर्टिफिकेट', 'divyang praman patra']
  },
  {
    id: 'up-haisiyat-certificate',
    title: 'हैसियत प्रमाण पत्र (UP Haisiyat Solvency Certificate)',
    department: 'राजस्व विभाग (जिलाधिकारी कार्यालय)',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'CERTIFICATES',
    benefitSummary: 'सरकारी टेंडर, ठेकेदारी और न्यायालय में जमानत हेतु संपत्ति की हैसियत का डीएम प्रमाण पत्र',
    officialApplyUrl: 'https://edistrict.up.gov.in/',
    portalName: 'edistrict.up.gov.in (हैसियत)',
    estimatedDays: '30 कार्यदिवस',
    govtFee: '₹100 (सरकारी शुल्क)',
    requiredDocuments: [
      { name: 'संपत्ति का बैनामा व अद्यतन खतौनी नकल', mandatory: true },
      { name: 'मूल्यांकन रिपोर्ट व पैन कार्ड', mandatory: true }
    ],
    voiceKeywords: ['हैसियत', 'हैसियत प्रमाण पत्र', 'haisiyat', 'solvency certificate']
  },
  {
    id: 'marriage-certificate-igrs',
    title: 'विवाह पंजीकरण प्रमाण पत्र (UP IGRS Marriage Certificate)',
    department: 'स्टाम्प एवं निबंधन विभाग',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'CERTIFICATES',
    benefitSummary: 'पति-पत्नी के वैवाहिक रिश्ते का कानूनी प्रमाण पत्र (पासपोर्ट, वीजा और बीमा क्लेम हेतु अनिवार्य)',
    officialApplyUrl: 'https://igrsup.gov.in/',
    portalName: 'igrsup.gov.in (विवाह)',
    estimatedDays: '7 से 15 कार्यदिवस',
    govtFee: '₹100 से ₹250',
    requiredDocuments: [
      { name: 'वर और वधू दोनों का आधार कार्ड', mandatory: true },
      { name: 'शादी का कार्ड / शपथ पत्र', mandatory: true },
      { name: 'शादी की युगल तस्वीर व दो गवाहों के आधार', mandatory: true }
    ],
    voiceKeywords: ['विवाह प्रमाण पत्र', 'शादी का सर्टिफिकेट', 'marriage certificate', 'shadi certificate']
  },
  {
    id: 'legal-heir-warisan-certificate',
    title: 'वारिसान / उत्तराधिकार प्रमाण पत्र (Legal Heir Certificate)',
    department: 'राजस्व विभाग (e-District UP)',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'CERTIFICATES',
    benefitSummary: 'मृतक के बैंक खाते से पैसे निकालने व सरकारी नौकरी क्लेम हेतु कानूनी वारिस प्रमाण',
    officialApplyUrl: 'https://edistrict.up.gov.in/',
    portalName: 'edistrict.up.gov.in',
    estimatedDays: '20 कार्यदिवस',
    govtFee: '₹15',
    requiredDocuments: [
      { name: 'मृतक का मृत्यु प्रमाण पत्र', mandatory: true },
      { name: 'परिवार के सभी सदस्यों के आधार कार्ड', mandatory: true }
    ],
    voiceKeywords: ['वारिसान', 'उत्तराधिकार प्रमाण', 'legal heir', 'warisan']
  },
  {
    id: 'freedom-fighter-dependent',
    title: 'स्वतंत्रता संग्राम सेनानी आश्रित प्रमाण पत्र',
    department: 'सामान्य प्रशासन विभाग',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'CERTIFICATES',
    benefitSummary: 'स्वतंत्रता सेनानी के परिवारजनों को सरकारी नौकरी व शिक्षा में विशेष आरक्षण लाभ',
    officialApplyUrl: 'https://edistrict.up.gov.in/',
    portalName: 'edistrict.up.gov.in',
    estimatedDays: '30 कार्यदिवस',
    govtFee: '₹15',
    requiredDocuments: [
      { name: 'सेनानी का मूल पेंशन पीपीओ व प्रमाण पत्र', mandatory: true },
      { name: 'वंशवृक्ष / रिश्तेदारी शपथ पत्र', mandatory: true }
    ],
    voiceKeywords: ['स्वतंत्रता सेनानी', 'freedom fighter certificate']
  },
  {
    id: 'non-creamy-layer-obc',
    title: 'केंद्रीय अन्य पिछड़ा वर्ग प्रमाण पत्र (Central OBC NCL)',
    department: 'राजस्व विभाग (e-District UP)',
    ministryOrState: 'भारत सरकार / उत्तर प्रदेश',
    scope: 'ALL_INDIA',
    category: 'CERTIFICATES',
    benefitSummary: 'यूपीएससी, एसएससी और केंद्रीय नौकरियों में 27% ओबीसी आरक्षण हेतु अनिवार्य प्रमाण पत्र',
    officialApplyUrl: 'https://edistrict.up.gov.in/',
    portalName: 'edistrict.up.gov.in',
    estimatedDays: '15 कार्यदिवस',
    govtFee: '₹15',
    requiredDocuments: [
      { name: 'पारिवारिक वार्षिक आय प्रमाण पत्र', mandatory: true },
      { name: 'जाति प्रमाण पत्र व आधार कार्ड', mandatory: true }
    ],
    voiceKeywords: ['ओबीसी नॉन क्रीमी लेयर', 'obc ncl', 'central obc']
  },
  {
    id: 'character-certificate-revenue',
    title: 'तहसीलदार चरित्र प्रमाण पत्र (Tehsildar Character Certificate)',
    department: 'राजस्व विभाग (e-District UP)',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'CERTIFICATES',
    benefitSummary: 'ठेकेदारी पंजीकरण, शस्त्र लाइसेंस व सरकारी सेवाओं हेतु राजस्व विभाग चरित्र प्रमाण',
    officialApplyUrl: 'https://edistrict.up.gov.in/',
    portalName: 'edistrict.up.gov.in',
    estimatedDays: '15 कार्यदिवस',
    govtFee: '₹15',
    requiredDocuments: [
      { name: 'आधार कार्ड व निवास प्रमाण पत्र', mandatory: true },
      { name: 'दो संभ्रांत व्यक्तियों की गवाही रिपोर्ट', mandatory: true }
    ],
    voiceKeywords: ['तहसीलदार चरित्र', 'राजस्व चरित्र प्रमाण', 'tehsildar character']
  },
  {
    id: 'surviving-member-certificate',
    title: 'उत्तरजीवी सदस्य प्रमाण पत्र (Surviving Member Certificate)',
    department: 'राजस्व विभाग',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'CERTIFICATES',
    benefitSummary: 'परिवार के मुखिया के निधन के बाद जीवित सदस्यों की आधिकारिक कानूनी सूची',
    officialApplyUrl: 'https://edistrict.up.gov.in/',
    portalName: 'edistrict.up.gov.in',
    estimatedDays: '21 कार्यदिवस',
    govtFee: '₹15',
    requiredDocuments: [
      { name: 'मृत्यु प्रमाण पत्र', mandatory: true },
      { name: 'जीवित सदस्यों के आधार व राशन कार्ड', mandatory: true }
    ],
    voiceKeywords: ['उत्तरजीवी प्रमाण', 'surviving member']
  },
  {
    id: 'ex-serviceman-dependent-id',
    title: 'पूर्व सैनिक आश्रित पहचान पत्र (DESW Dependent Card)',
    department: 'पूर्व सैनिक कल्याण विभाग (DESW)',
    ministryOrState: 'रक्षा मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'CERTIFICATES',
    benefitSummary: 'सेना के सेवानिवृत्त सैनिकों के बच्चों को कॉलेज एडमिशन और नौकरियों में कोटा लाभ',
    officialApplyUrl: 'https://www.desw.gov.in/',
    portalName: 'desw.gov.in',
    estimatedDays: '15 कार्यदिवस',
    govtFee: '₹0 (निःशुल्क)',
    requiredDocuments: [
      { name: 'सैनिक की डिस्चार्ज बुक व पेंशन पीपीओ', mandatory: true },
      { name: 'आश्रित का आधार व जन्म प्रमाण', mandatory: true }
    ],
    voiceKeywords: ['पूर्व सैनिक', 'fauji dependent', 'desw']
  },
  {
    id: 'unmarried-single-status-affidavit',
    title: 'अविवाहित प्रमाण पत्र (Single Status Certificate)',
    department: 'राजस्व विभाग व विदेश मंत्रालय',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'ALL_INDIA',
    category: 'CERTIFICATES',
    benefitSummary: 'विदेशों में शादी या विदेशी नागरिकता हेतु भारतीय नागरिक का अविवाहित होने का प्रमाण',
    officialApplyUrl: 'https://edistrict.up.gov.in/',
    portalName: 'eDistrict / SDM Office',
    estimatedDays: '15 कार्यदिवस',
    govtFee: 'नाममात्र शुल्क',
    requiredDocuments: [
      { name: 'एसडीएम द्वारा प्रमाणित शपथ पत्र', mandatory: true },
      { name: 'माता-पिता का पहचान पत्र व पासपोर्ट', mandatory: true }
    ],
    voiceKeywords: ['अविवाहित प्रमाण', 'single status certificate']
  }
];
