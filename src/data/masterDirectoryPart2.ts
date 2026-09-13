
import { GovServiceItem } from '../types/service';

export const ADDITIONAL_SERVICES: GovServiceItem[] = [
  // ============================================================
  // 4. व्यापार, जीएसटी, कंपनी, उद्योग व एमएसएमई (BUSINESS_TAX - 20 Services)
  // ============================================================
  {
    id: 'gst-registration-reg01',
    title: 'नया जीएसटी पंजीकरण (GST Common Portal - REG-01)',
    department: 'केंद्रीय अप्रत्यक्ष कर और सीमा शुल्क बोर्ड (CBIC)',
    ministryOrState: 'वित्त मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'BUSINESS_TAX',
    benefitSummary: 'देशभर में कानूनी रूप से व्यापार और बिक्री करने हेतु 15 अंकों का GSTIN नंबर पाना',
    officialApplyUrl: 'https://reg.gst.gov.in/registration/',
    portalName: 'reg.gst.gov.in (GSTN)',
    estimatedDays: '3 से 7 कार्यदिवस (आधार ऑथेंटिकेशन पर)',
    govtFee: '₹0 (पंजीकरण पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'पैन कार्ड (व्यवसाय / प्रोपराइटर)', mandatory: true },
      { name: 'आधार कार्ड (ओटीपी सक्रिय)', mandatory: true },
      { name: 'दुकान/प्रतिष्ठान का बिजली बिल या किरायानामा', mandatory: true },
      { name: 'बैंक खाता विवरण / कैंसिल्ड चेक', mandatory: true }
    ],
    voiceKeywords: ['जीएसटी', 'जीएसटी नंबर', 'जीएसटी रजिस्ट्रेशन', 'gst', 'gst registration', 'gstin']
  },
  {
    id: 'gst-return-filing',
    title: 'जीएसटी रिटर्न फाइलिंग (GSTR-1 / GSTR-3B Portal)',
    department: 'जीएसटी नेटवर्क (GSTN)',
    ministryOrState: 'वित्त मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'BUSINESS_TAX',
    benefitSummary: 'मासिक व त्रैमासिक बिक्री-खरीद का इनपुट टैक्स क्रेडिट (ITC) क्लेम करना व रिटर्न भरना',
    officialApplyUrl: 'https://www.gst.gov.in/',
    portalName: 'gst.gov.in',
    estimatedDays: 'तत्काल ऑनलाइन पावती',
    govtFee: 'नियत तिथि तक ₹0',
    requiredDocuments: [
      { name: 'सक्रिय जीएसटी यूजर आईडी व पासवर्ड', mandatory: true },
      { name: 'बिक्री व खरीद इनवॉइस डेटा', mandatory: true }
    ],
    voiceKeywords: ['जीएसटी रिटर्न', 'gstr 1', 'gstr 3b', 'gst return']
  },
  {
    id: 'udyam-msme-reg',
    title: 'उद्यम एमएसएमई पंजीकरण (Udyam MSME Certificate)',
    department: 'सूक्ष्म, लघु और मध्यम उद्यम मंत्रालय',
    ministryOrState: 'एमएसएमई मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'BUSINESS_TAX',
    benefitSummary: 'सस्ते व्यापार ऋण, सरकारी टेंडर वरीयता और 50% पेटेंट सब्सिडी हेतु आजीवन वैध कार्ड',
    officialApplyUrl: 'https://udyamregistration.gov.in/',
    portalName: 'udyamregistration.gov.in',
    estimatedDays: 'तत्काल 5 मिनट में जारी',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'मालिक का आधार कार्ड', mandatory: true },
      { name: 'पैन कार्ड व बैंक खाता विवरण', mandatory: true }
    ],
    voiceKeywords: ['उद्यम', 'एमएसएमई', 'उद्योग आधार', 'udyam', 'msme', 'chhota vyapar']
  },
  {
    id: 'itr-efiling-portal',
    title: 'आयकर रिटर्न ई-फाइलिंग (Income Tax Return e-Filing 2.0)',
    department: 'आयकर विभाग (Income Tax Department)',
    ministryOrState: 'वित्त मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'BUSINESS_TAX',
    benefitSummary: 'टीडीएस रिफंड पाना, बैंक लोन मंजूरी और वीजा हेतु आधिकारिक इनकम टैक्स रिटर्न दाखिल करना',
    officialApplyUrl: 'https://www.incometax.gov.in/iec/foportal/',
    portalName: 'incometax.gov.in',
    estimatedDays: 'तत्काल ई-वेरिफिकेशन उपरांत',
    govtFee: '₹0 (नियत तिथि तक निःशुल्क)',
    requiredDocuments: [
      { name: 'पैन कार्ड व आधार कार्ड', mandatory: true },
      { name: 'बैंक खाता विवरण व Form 16 / AIS / TIS', mandatory: true }
    ],
    voiceKeywords: ['आईटीआर', 'इनकम टैक्स', 'टैक्स रिटर्न', 'टीडीएस रिफंड', 'itr', 'income tax', 'tds']
  },
  {
    id: 'epfo-uan-passbook',
    title: 'पीएफ पासबुक व निकासी (EPFO Member e-Sewa / UAN Portal)',
    department: 'कर्मचारी भविष्य निधि संगठन (EPFO)',
    ministryOrState: 'श्रम एवं रोजगार मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'BUSINESS_TAX',
    benefitSummary: 'पीएफ बैलेंस चेक करना, ऑनलाइन पीएफ एडवांस निकालना और नौकरी छोड़ने पर फाइनल पीएफ क्लेम',
    officialApplyUrl: 'https://unifiedportal-mem.epfindia.gov.in/memberinterface/',
    portalName: 'unifiedportal-mem.epfindia.gov.in',
    estimatedDays: 'क्लेम निपटान 3 से 7 कार्यदिवस',
    govtFee: '₹0 (निःशुल्क)',
    requiredDocuments: [
      { name: '12 अंकों का यूएएन नंबर (UAN) व पासवर्ड', mandatory: true },
      { name: 'आधार लिंक मोबाइल व बैंक खाता पासबुक', mandatory: true }
    ],
    voiceKeywords: ['पीएफ', 'ईपीएफओ', 'पीएफ पासबुक', 'पीएफ निकालना', 'pf', 'epfo', 'uan']
  },
  {
    id: 'epfo-employer-establishment',
    title: 'कंपनी ईपीएफओ पंजीकरण (EPFO Employer Shram Suvidha)',
    department: 'कर्मचारी भविष्य निधि संगठन',
    ministryOrState: 'श्रम एवं रोजगार मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'BUSINESS_TAX',
    benefitSummary: '20 से अधिक कर्मचारियों वाली कंपनियों व कारखानों हेतु अनिवार्य पीएफ कोड आवंटन',
    officialApplyUrl: 'https://shramsuvidha.gov.in/',
    portalName: 'shramsuvidha.gov.in',
    estimatedDays: 'तत्काल 1 कार्यदिवस',
    govtFee: '₹0',
    requiredDocuments: [
      { name: 'कंपनी का पैन व सर्टिफिकेट ऑफ इनकॉर्पोरेशन', mandatory: true },
      { name: 'डिजिटल सिग्नेचर (DSC)', mandatory: true }
    ],
    voiceKeywords: ['कंपनी पीएफ', 'shram suvidha', 'epfo employer']
  },
  {
    id: 'spice-plus-company-mca',
    title: 'नई कंपनी पंजीकरण (SPICe+ MCA21 Portal)',
    department: 'कॉर्पोरेट कार्य मंत्रालय (MCA)',
    ministryOrState: 'कॉर्पोरेट कार्य मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'BUSINESS_TAX',
    benefitSummary: 'प्राइवेट लिमिटेड, ओपीसी या एलएलपी कंपनी का गठन, नाम मंजूरी और CIN नंबर आवंटन',
    officialApplyUrl: 'https://www.mca.gov.in/',
    portalName: 'mca.gov.in (SPICe+)',
    estimatedDays: '5 से 10 कार्यदिवस',
    govtFee: '₹15 लाख तक पूंजी पर आरओसी फीस ₹0',
    requiredDocuments: [
      { name: 'निदेशकों का पैन व आधार कार्ड', mandatory: true },
      { name: 'डिजिटल सिग्नेचर सर्टिफिकेट (DSC)', mandatory: true },
      { name: 'कार्यालय का बिजली बिल व एनओसी', mandatory: true }
    ],
    voiceKeywords: ['कंपनी रजिस्ट्रेशन', 'प्राइवेट लिमिटेड', 'mca', 'pvt ltd', 'spice+']
  },
  {
    id: 'mca-din-number',
    title: 'डायरेक्टर पहचान संख्या (DIN DIR-3 Application)',
    department: 'कॉर्पोरेट कार्य मंत्रालय',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'BUSINESS_TAX',
    benefitSummary: 'किसी भी भारतीय कंपनी में निदेशक बनने हेतु अनिवार्य 8 अंकों का डिन नंबर प्राप्त करना',
    officialApplyUrl: 'https://www.mca.gov.in/',
    portalName: 'mca.gov.in',
    estimatedDays: 'तत्काल 1 दिन',
    govtFee: '₹500 (सरकारी फॉर्म फीस)',
    requiredDocuments: [
      { name: 'पैन कार्ड व पासपोर्ट / वोटर कार्ड', mandatory: true },
      { name: 'डिजिटल सिग्नेचर (DSC)', mandatory: true }
    ],
    voiceKeywords: ['डिन नंबर', 'din number', 'director identification']
  },
  {
    id: 'llp-incorporation-mca',
    title: 'एलएलपी पार्टनरशिप पंजीकरण (LLP FiLLiP Portal)',
    department: 'कॉर्पोरेट कार्य मंत्रालय',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'BUSINESS_TAX',
    benefitSummary: 'सीमित देयता भागीदारी (LLP) कंपनी का कानूनी गठन और पार्टनरशिप एग्रीमेंट फाइलिंग',
    officialApplyUrl: 'https://www.mca.gov.in/',
    portalName: 'mca.gov.in (LLP)',
    estimatedDays: '7 से 10 कार्यदिवस',
    govtFee: 'पार्टनरशिप पूंजी अनुसार',
    requiredDocuments: [
      { name: 'पार्टनर्स का पैन व आधार कार्ड', mandatory: true },
      { name: 'एलएलपी अनुबंध (LLP Agreement)', mandatory: true }
    ],
    voiceKeywords: ['एलएलपी', 'llp registration', 'partnership company']
  },
  {
    id: 'import-export-code-dgft',
    title: 'आयात-निर्यात कोड (Import Export Code - IEC DGFT)',
    department: 'विदेश व्यापार महानिदेशालय (DGFT)',
    ministryOrState: 'वाणिज्य एवं उद्योग मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'BUSINESS_TAX',
    benefitSummary: 'विदेशों में माल भेजने या विदेशों से आयात करने हेतु अनिवार्य 10 अंकों का आजीवन आईईसी कोड',
    officialApplyUrl: 'https://www.dgft.gov.in/',
    portalName: 'dgft.gov.in',
    estimatedDays: 'तत्काल 1 कार्यदिवस',
    govtFee: '₹500 (ऑनलाइन सरकारी शुल्क)',
    requiredDocuments: [
      { name: 'फर्म या प्रोपराइटर का पैन कार्ड', mandatory: true },
      { name: 'बैंक खाता प्रमाण पत्र / कैंसिल्ड चेक', mandatory: true }
    ],
    voiceKeywords: ['आईईसी कोड', 'एक्सपोर्ट कोड', 'iec code', 'dgft', 'import export']
  },
  {
    id: 'trademark-registration-ipindia',
    title: 'ट्रेडमार्क पंजीकरण (Trademark e-Filing IP India)',
    department: 'पेटेंट, डिजाइन और ट्रेडमार्क महानियंत्रक (CGPDTM)',
    ministryOrState: 'वाणिज्य एवं उद्योग मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'BUSINESS_TAX',
    benefitSummary: 'अपने ब्रांड नाम, लोगो और स्लोगन को चोरी होने से बचाने हेतु TM व R कानूनी ट्रेडमार्क',
    officialApplyUrl: 'https://ipindiaonline.gov.in/',
    portalName: 'ipindiaonline.gov.in',
    estimatedDays: 'प्राथमिक जांच 15 दिन / अंतिम प्रमाण 6-8 माह',
    govtFee: 'व्यक्ति/स्टार्टअप ₹4,500 / अन्य ₹9,000',
    requiredDocuments: [
      { name: 'ब्रांड लोगो की स्पष्ट तस्वीर', mandatory: true },
      { name: 'उद्यम एमएसएमई प्रमाण पत्र (50% फीस छूट हेतु)', mandatory: false },
      { name: 'आवेदक का पैन व आधार कार्ड', mandatory: true }
    ],
    voiceKeywords: ['ट्रेडमार्क', 'ब्रांड लोगो', 'trademark', 'brand name register']
  },
  {
    id: 'patent-registration-ipindia',
    title: 'पेटेंट ई-फाइलिंग (Patent Application IP India)',
    department: 'उद्योग संवर्धन और आंतरिक व्यापार विभाग',
    ministryOrState: 'वाणिज्य एवं उद्योग मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'BUSINESS_TAX',
    benefitSummary: 'नए तकनीकी आविष्कार, मशीन या फॉर्मूले पर 20 साल का एकाधिकार कानूनी पेटेंट अधिकार',
    officialApplyUrl: 'https://ipindiaonline.gov.in/',
    portalName: 'ipindiaonline.gov.in',
    estimatedDays: 'अधिसूचना व परीक्षण अनुसार',
    govtFee: 'व्यक्ति ₹1,600 / कंपनी ₹8,000',
    requiredDocuments: [
      { name: 'आविष्कार का संपूर्ण विवरण (Complete Specification)', mandatory: true },
      { name: 'ड्राइंग और दावों की प्रति (Patent Claims)', mandatory: true }
    ],
    voiceKeywords: ['पेटेंट', 'patent registration', 'आविष्कार पेटेंट']
  },
  {
    id: 'copyright-registration-gov',
    title: 'कॉपीराइट पंजीकरण (Copyright Office e-Filing)',
    department: 'कॉपीराइट कार्यालय',
    ministryOrState: 'वाणिज्य एवं उद्योग मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'BUSINESS_TAX',
    benefitSummary: 'किताब, संगीत, सॉफ्टवेयर सोर्स कोड और वीडियो पर कानूनी बौद्धिक संपदा सुरक्षा',
    officialApplyUrl: 'https://copyright.gov.in/',
    portalName: 'copyright.gov.in',
    estimatedDays: '30 दिन आपत्ति अवधि उपरांत',
    govtFee: 'साहित्य/सॉफ्टवेयर ₹500',
    requiredDocuments: [
      { name: 'कृति की मूल प्रति (PDF / Code / Audio)', mandatory: true },
      { name: 'लेखक का आधार व अनापत्ति प्रमाण पत्र', mandatory: true }
    ],
    voiceKeywords: ['कॉपीराइट', 'copyright', 'किताब कॉपीराइट']
  },
  {
    id: 'fssai-foscos-food-license',
    title: 'खाद्य लाइसेंस व पंजीकरण (FSSAI FoSCoS Food License)',
    department: 'भारतीय खाद्य सुरक्षा और मानक प्राधिकरण (FSSAI)',
    ministryOrState: 'स्वास्थ्य एवं परिवार कल्याण मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'BUSINESS_TAX',
    benefitSummary: 'होटल, ढाबा, किराना दुकान या खाद्य निर्माण हेतु अनिवार्य 14 अंकों का फूड लाइसेंस',
    officialApplyUrl: 'https://foscos.fssai.gov.in/',
    portalName: 'foscos.fssai.gov.in',
    estimatedDays: '7 से 30 कार्यदिवस',
    govtFee: 'रजिस्ट्रेशन ₹100 प्रति वर्ष / राज्य लाइसेंस ₹2,000+',
    requiredDocuments: [
      { name: 'दुकानदार का आधार या फोटो पहचान पत्र', mandatory: true },
      { name: 'दुकान का बिजली बिल या किरायानामा', mandatory: true },
      { name: 'खाद्य उत्पादों की सूची', mandatory: true }
    ],
    voiceKeywords: ['फूड लाइसेंस', 'एफएसएसएआई', 'fssai', 'food license', 'foscos']
  },
  {
    id: 'gem-seller-registration',
    title: 'गवर्नमेंट ई-मार्केटप्लेस विक्रेता पंजीकरण (GeM Seller Portal)',
    department: 'वाणिज्य विभाग',
    ministryOrState: 'वाणिज्य एवं उद्योग मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'BUSINESS_TAX',
    benefitSummary: 'सरकारी विभागों, रेलवे, सेना और पीएसयू को सीधे बिना दलाल माल और सेवाएं बेचना',
    officialApplyUrl: 'https://gem.gov.in/',
    portalName: 'gem.gov.in',
    estimatedDays: 'तत्काल (सत्यापन 2 दिन)',
    govtFee: '₹0 (पंजीकरण पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'पैन कार्ड व उद्यम रजिस्ट्रेशन', mandatory: true },
      { name: 'जीएसटी नंबर व बैंक खाता विवरण', mandatory: true }
    ],
    voiceKeywords: ['जेम पोर्टल', 'सरकारी टेंडर', 'gem portal', 'gem seller']
  },
  {
    id: 'startup-india-dpiit',
    title: 'स्टार्टअप इंडिया मान्यता (Startup India DPIIT Recognition)',
    department: 'उद्योग संवर्धन और आंतरिक व्यापार विभाग (DPIIT)',
    ministryOrState: 'वाणिज्य एवं उद्योग मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'BUSINESS_TAX',
    benefitSummary: 'नए इनोवेटिव स्टार्टअप्स को 3 साल तक आयकर छूट (80-IAC) और सरकारी फंड सहायता',
    officialApplyUrl: 'https://www.startupindia.gov.in/',
    portalName: 'startupindia.gov.in',
    estimatedDays: '2 से 4 कार्यदिवस',
    govtFee: '₹0 (निःशुल्क)',
    requiredDocuments: [
      { name: 'कंपनी इनकॉर्पोरेशन सर्टिफिकेट (CIN / LLPIN)', mandatory: true },
      { name: 'बिजनेस आइडिया व पिच डेक', mandatory: true }
    ],
    voiceKeywords: ['स्टार्टअप इंडिया', 'startup india', 'dpiit']
  },
  {
    id: 'pmegp-subsidy-loan',
    title: 'पीएमईजीपी ऋण योजना (PMEGP Subsidy Loan ₹50 Lakh)',
    department: 'खादी एवं ग्रामोद्योग आयोग (KVIC)',
    ministryOrState: 'एमएसएमई मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'BUSINESS_TAX',
    benefitSummary: 'नया उद्योग या कारखाना लगाने हेतु ₹50 लाख तक 35% सरकारी सब्सिडी वाला बैंक ऋण',
    officialApplyUrl: 'https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp',
    portalName: 'kviconline.gov.in (PMEGP)',
    estimatedDays: '30 कार्यदिवस (टास्क फोर्स अनुमोदन)',
    govtFee: '₹0 (आवेदन निःशुल्क)',
    requiredDocuments: [
      { name: 'प्रोजेक्ट रिपोर्ट (DPR)', mandatory: true },
      { name: 'आधार कार्ड, पैन कार्ड व 8वीं पास मार्कशीट', mandatory: true }
    ],
    voiceKeywords: ['पीएमईजीपी', 'खादी ग्रामोद्योग लोन', 'pmegp loan', 'pmegp']
  },
  {
    id: 'pm-vishwakarma-toolkit-loan',
    title: 'पीएम विश्वकर्मा योजना (PM Vishwakarma Toolkit & Loan)',
    department: 'सूक्ष्म, लघु और मध्यम उद्यम मंत्रालय',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'BUSINESS_TAX',
    benefitSummary: '18 पारंपरिक कारीगरों (बढ़ई, लोहार, दर्जी, मोची) को ₹15,000 टूलकिट व ₹3 लाख का सस्ता लोन',
    officialApplyUrl: 'https://pmvishwakarma.gov.in/',
    portalName: 'pmvishwakarma.gov.in',
    estimatedDays: 'ग्राम पंचायत सत्यापन उपरांत',
    govtFee: '₹0 (प्रशिक्षण व प्रमाण पत्र मुफ़्त)',
    requiredDocuments: [
      { name: 'कारीगर का आधार कार्ड व बैंक पासबुक', mandatory: true },
      { name: 'पारंपरिक व्यवसाय चयन', mandatory: true }
    ],
    voiceKeywords: ['विश्वकर्मा योजना', 'टूलकिट योजना', 'vishwakarma', 'pm vishwakarma']
  },
  {
    id: 'eway-bill-system-nic',
    title: 'ई-वे बिल प्रणाली (e-Way Bill System for Goods Transport)',
    department: 'राष्ट्रीय सूचना विज्ञान केंद्र (NIC) व CBIC',
    ministryOrState: 'वित्त मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'BUSINESS_TAX',
    benefitSummary: '₹50,000 से अधिक के माल परिवहन हेतु वाहनों के लिए इलेक्ट्रॉनिक वे-बिल जनरेट करना',
    officialApplyUrl: 'https://ewaybillgst.gov.in/',
    portalName: 'ewaybillgst.gov.in',
    estimatedDays: 'तत्काल 1 मिनट',
    govtFee: '₹0',
    requiredDocuments: [
      { name: 'टैक्स इनवॉइस / बिल ऑफ सप्लाई', mandatory: true },
      { name: 'गाड़ी नंबर अथवा ट्रांसपोर्टर आईडी', mandatory: true }
    ],
    voiceKeywords: ['ईवे बिल', 'eway bill', 'transport bill']
  },
  {
    id: 'tan-number-form49b',
    title: 'नया टैन नंबर आवंटन (TAN Application - Form 49B)',
    department: 'आयकर विभाग',
    ministryOrState: 'वित्त मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'BUSINESS_TAX',
    benefitSummary: 'कर्मचारियों और वेंडरों का टीडीएस (TDS) काटने हेतु अनिवार्य 10 अंकों का टैन नंबर',
    officialApplyUrl: 'https://www.tin-nsdl.com/services/tan/tan-introduction.html',
    portalName: 'tin-nsdl.com',
    estimatedDays: '7 कार्यदिवस',
    govtFee: '₹65 (सरकारी शुल्क)',
    requiredDocuments: [
      { name: 'संस्था या प्रोपराइटर का पैन कार्ड', mandatory: true },
      { name: 'कार्यालय का पता प्रमाण', mandatory: true }
    ],
    voiceKeywords: ['टैन नंबर', 'tan number', 'tds tan']
  }
];
