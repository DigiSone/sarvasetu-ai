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
  // 1. व्यापार, कंपनी, उद्योग, स्टार्टअप व कराधान (BUSINESS_TAX)
  // ==========================================
  {
    id: 'gst-registration',
    title: 'नया जीएसटी पंजीकरण (New GST Registration - REG-01)',
    department: 'केंद्रीय अप्रत्यक्ष कर और सीमा शुल्क बोर्ड (CBIC)',
    ministry: 'वित्त मंत्रालय',
    category: 'BUSINESS_TAX',
    benefitSummary: 'देशभर में कानूनी व्यापार और अंतर्राज्यीय बिक्री हेतु 15 अंकों का GSTIN',
    officialApplyUrl: 'https://reg.gst.gov.in/registration/',
    portalName: 'GST Common Portal (GSTN)',
    estimatedDays: '3 से 7 कार्यदिवस (आधार प्रमाणीकरण पर)',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'पैन कार्ड (व्यवसाय / प्रोपराइटर)', mandatory: true },
      { name: 'आधार कार्ड (ओटीपी लिंक)', mandatory: true },
      { name: 'व्यापार स्थल का बिजली बिल / किरायानामा', mandatory: true },
      { name: 'बैंक खाता विवरण / कैंसिल्ड चेक', mandatory: true },
      { name: 'पासपोर्ट फोटो', mandatory: true }
    ],
    voiceBriefing: 'नया जीएसटी नंबर लेने के लिए जीएसटी पोर्टल पर फॉर्म REG-01 भरा जाता है। इसके लिए पैन कार्ड, दुकान का बिजली बिल और बैंक पासबुक चाहिए।',
    keywords: ['gst', 'gstin', 'जीएसटी', 'gst registration', 'व्यापार टैक्स', 'sales tax']
  },
  {
    id: 'udyam-msme',
    title: 'उद्यम / एमएसएमई पंजीकरण (Udyam MSME Certificate)',
    department: 'सूक्ष्म, लघु और मध्यम उद्यम मंत्रालय',
    ministry: 'एमएसएमई मंत्रालय',
    category: 'BUSINESS_TAX',
    benefitSummary: 'सस्ते व्यापार ऋण, सरकारी टेंडर में वरीयता और 50% पेटेंट सब्सिडी',
    officialApplyUrl: 'https://udyamregistration.gov.in/',
    portalName: 'Udyam National Portal',
    estimatedDays: 'तत्काल (ई-सर्टिफिकेट तुरंत जारी)',
    govtFee: '₹0 (भारत सरकार द्वारा निःशुल्क)',
    requiredDocuments: [
      { name: 'प्रोपराइटर/मालिक का आधार कार्ड', mandatory: true },
      { name: 'पैन कार्ड (व्यक्तिगत अथवा फर्म)', mandatory: true },
      { name: 'बैंक खाता संख्या और IFSC', mandatory: true }
    ],
    voiceBriefing: 'छोटे उद्योगों और दुकानों के लिए उद्यम एमएसएमई सर्टिफिकेट उद्यम पोर्टल पर केवल आधार और पैन से तुरंत बनता है।',
    keywords: ['msme', 'udyam', 'उद्यम', 'उद्योग आधार', 'msme certificate', 'छोटा व्यापार']
  },
  {
    id: 'pm-vishwakarma',
    title: 'पीएम विश्वकर्मा योजना (PM Vishwakarma Toolkit & Loan)',
    department: 'सूक्ष्म, लघु और मध्यम उद्यम मंत्रालय',
    ministry: 'एमएसएमई मंत्रालय',
    category: 'BUSINESS_TAX',
    benefitSummary: '18 पारंपरिक कारीगरों (बढ़ई, लोहार, दर्जी, मोची) को ₹15,000 टूलकिट व ₹3 लाख का सस्ता लोन',
    officialApplyUrl: 'https://pmvishwakarma.gov.in/',
    portalName: 'PM Vishwakarma Portal',
    estimatedDays: 'ग्राम पंचायत व नगर निगम सत्यापन अनुसार',
    govtFee: '₹0 (प्रशिक्षण व प्रमाण पत्र निःशुल्क)',
    requiredDocuments: [
      { name: 'कारीगर का आधार कार्ड व मोबाइल नंबर', mandatory: true },
      { name: 'बैंक पासबुक (डीबीटी सक्रिय)', mandatory: true },
      { name: 'पारंपरिक व्यवसाय श्रेणी चयन', mandatory: true }
    ],
    voiceBriefing: 'पारंपरिक कारीगरों और दस्तकारों को 15000 रुपये टूलकिट और सस्ते लोन के लिए पीएम विश्वकर्मा पोर्टल पर पंजीकरण करना होता है।',
    keywords: ['vishwakarma', 'विश्वकर्मा', 'pm vishwakarma', 'toolkit yojana', 'darzi lohar karigar']
  },
  {
    id: 'pmegp-loan',
    title: 'पीएमईजीपी ऋण योजना (PMEGP Subsidy Loan ₹50 Lakh)',
    department: 'खादी एवं ग्रामोद्योग आयोग (KVIC)',
    ministry: 'एमएसएमई मंत्रालय',
    category: 'BUSINESS_TAX',
    benefitSummary: 'विनिर्माण इकाई हेतु ₹50 लाख और सेवा क्षेत्र हेतु ₹20 लाख तक 35% सरकारी सब्सिडी',
    officialApplyUrl: 'https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp',
    portalName: 'PMEGP e-Portal',
    estimatedDays: 'जिला टास्क फोर्स कमेटी द्वारा 30 दिन में',
    govtFee: '₹0 (ऑनलाइन आवेदन निःशुल्क)',
    requiredDocuments: [
      { name: 'विस्तृत प्रोजेक्ट रिपोर्ट (DPR)', mandatory: true },
      { name: 'आधार कार्ड व पैन कार्ड', mandatory: true },
      { name: 'जाति प्रमाण पत्र व शैक्षणिक योग्यता प्रमाण (8वीं पास)', mandatory: true }
    ],
    voiceBriefing: 'नया कारखाना या सेवा व्यवसाय शुरू करने हेतु 35 प्रतिशत तक सरकारी सब्सिडी पाने के लिए पीएमईजीपी पोर्टल पर आवेदन करें।',
    keywords: ['pmegp', 'kvic', 'खादी ग्रामोद्योग', 'pmegp loan', 'कारखाना सब्सिडी']
  },
  {
    id: 'startup-india',
    title: 'स्टार्टअप इंडिया मान्यता (Startup India DPIIT Recognition)',
    department: 'उद्योग संवर्धन और आंतरिक व्यापार विभाग (DPIIT)',
    ministry: 'वाणिज्य एवं उद्योग मंत्रालय',
    category: 'BUSINESS_TAX',
    benefitSummary: '3 वर्ष आयकर छूट (धारा 80-IAC), एंजेल टैक्स छूट और पेटेंट शुल्क में 80% छूट',
    officialApplyUrl: 'https://www.startupindia.gov.in/',
    portalName: 'Startup India National Hub',
    estimatedDays: '2 से 4 कार्यदिवस',
    govtFee: '₹0 (निःशुल्क मान्यता)',
    requiredDocuments: [
      { name: 'कंपनी इनकॉर्पोरेशन सर्टिफिकेट (CIN/LLPIN)', mandatory: true },
      { name: 'इनोवेटिव बिजनेस आइडिया व पिच डेक', mandatory: true },
      { name: 'कंपनी पैन कार्ड', mandatory: true }
    ],
    voiceBriefing: 'नए इनोवेटिव स्टार्टअप्स को 3 साल टैक्स छूट और सरकारी फंड के लिए स्टार्टअप इंडिया पोर्टल से मान्यता मिलती है।',
    keywords: ['startup india', 'dpiit', 'स्टार्टअप', 'angel tax exemption', 'startup grant']
  },
  {
    id: 'cgtmse-credit-guarantee',
    title: 'सीजीटीएमएसई क्रेडिट गारंटी योजना (CGTMSE Collateral-Free Loan)',
    department: 'सिडबी (SIDBI) / एमएसएमई मंत्रालय',
    ministry: 'एमएसएमई मंत्रालय',
    category: 'BUSINESS_TAX',
    benefitSummary: 'सूक्ष्म एवं लघु उद्योगों को बिना किसी तीसरी पार्टी गारंटी के ₹5 करोड़ तक का बैंक लोन',
    officialApplyUrl: 'https://www.cgtmse.in/',
    portalName: 'CGTMSE Portal',
    estimatedDays: 'सदस्य बैंक अनुमोदन अनुसार',
    govtFee: 'वार्षिक गारंटी शुल्क (AGF)',
    requiredDocuments: [
      { name: 'उद्यम पंजीकरण प्रमाण पत्र', mandatory: true },
      { name: 'व्यापार पैन व ऑडिटेड बैलेंस शीट', mandatory: true },
      { name: 'बैंक लोन प्रपोजल', mandatory: true }
    ],
    voiceBriefing: 'बिना जमीन या मकान गिरवी रखे 5 करोड़ तक के बिजनेस लोन के लिए सीजीटीएमएसई गारंटी स्कीम के तहत बैंक में आवेदन करें।',
    keywords: ['cgtmse', 'collateral free loan', 'बिना गारंटी लोन', 'sidbi', 'msme guarantee']
  },
  {
    id: 'eway-bill-gst',
    title: 'ई-वे बिल पोर्टल (e-Way Bill System for Goods Transport)',
    department: 'राष्ट्रीय सूचना विज्ञान केंद्र (NIC) / GSTN',
    ministry: 'वित्त मंत्रालय',
    category: 'BUSINESS_TAX',
    benefitSummary: '₹50,000 से अधिक के माल परिवहन हेतु कानूनी रूप से अनिवार्य इलेक्ट्रॉनिक वे-बिल',
    officialApplyUrl: 'https://ewaybillgst.gov.in/',
    portalName: 'e-Way Bill National Portal',
    estimatedDays: 'तत्काल 1 मिनट में जनरेट',
    govtFee: '₹0 (जीएसटी पंजीकृत करदाताओं हेतु)',
    requiredDocuments: [
      { name: 'टैक्स इनवॉइस / बिल ऑफ सप्लाई', mandatory: true },
      { name: 'ट्रांसपोर्टर आईडी अथवा वाहन संख्या', mandatory: true }
    ],
    voiceBriefing: 'व्यापारिक माल गाड़ी से भेजने के लिए 50 हजार से ऊपर के सामान पर ई-वे बिल पोर्टल से ई-वे बिल जनरेट किया जाता है।',
    keywords: ['eway bill', 'ईवे बिल', 'gst eway', 'माल परिवहन', 'transport bill']
  },
  {
    id: 'einvoice-system',
    title: 'ई-इनवॉइसिंग पोर्टल (e-Invoicing System / IRP Portal)',
    department: 'केंद्रीय अप्रत्यक्ष कर बोर्ड (CBIC)',
    ministry: 'वित्त मंत्रालय',
    category: 'BUSINESS_TAX',
    benefitSummary: 'बी2बी इनवॉइस के लिए आईआरएन (IRN) और क्यूआर कोड का इलेक्ट्रॉनिक सत्यापन',
    officialApplyUrl: 'https://einvoice1.gst.gov.in/',
    portalName: 'e-Invoice System (IRP)',
    estimatedDays: 'तत्काल मिलीसेकंड में प्रमाणीकरण',
    govtFee: '₹0',
    requiredDocuments: [
      { name: 'जीएसटी नंबर (GSTIN) व ई-इनवॉइसिंग क्रेडेंशियल', mandatory: true },
      { name: 'जेसन इनवॉइस डेटा पेलोड', mandatory: true }
    ],
    voiceBriefing: 'बी2बी व्यापार के लिए ई-इनवॉइसिंग पोर्टल से इनवॉइस रेफरेंस नंबर आईआरएन तुरंत सत्यापित होता है।',
    keywords: ['einvoice', 'e-invoice', 'ई इनवॉइस', 'irn portal', 'gst invoice']
  },
  {
    id: 'tan-application',
    title: 'नया टैन नंबर आवेदन (TAN Application - Form 49B)',
    department: 'आयकर विभाग (Income Tax Department)',
    ministry: 'वित्त मंत्रालय',
    category: 'BUSINESS_TAX',
    benefitSummary: 'टीडीएस (TDS) काटने और सरकारी खाते में जमा करने हेतु अनिवार्य 10 अंकों का टैन',
    officialApplyUrl: 'https://www.tin-nsdl.com/services/tan/tan-introduction.html',
    portalName: 'Protean TIN-NSDL Portal',
    estimatedDays: '7 से 10 कार्यदिवस',
    govtFee: '₹65 (सरकारी शुल्क व टैक्स)',
    requiredDocuments: [
      { name: 'फर्म / कंपनी / कटौतीकर्ता का पैन कार्ड', mandatory: true },
      { name: 'कार्यालय का पता प्रमाण', mandatory: true }
    ],
    voiceBriefing: 'कर्मचारियों या ठेकेदारों का टीडीएस काटने के लिए टैन नंबर अनिवार्य होता है, जिसे फॉर्म 49B भरकर लिया जाता है।',
    keywords: ['tan', 'form 49b', 'टैन नंबर', 'tds number', 'tin nsdl tan']
  },
  {
    id: 'lei-code-india',
    title: 'लीगल एंटिटी आइडेंटिफ़ायर (LEI Code India)',
    department: 'भारतीय रिजर्व बैंक (RBI) / CCIL',
    ministry: 'वित्त मंत्रालय',
    category: 'BUSINESS_TAX',
    benefitSummary: '₹50 करोड़ या अधिक के बड़े बैंकिंग लेनदेन और विदेशी मुद्रा व्यापार हेतु 20 अंकों का वैश्विक कोड',
    officialApplyUrl: 'https://www.ccilindia-lei.co.in/',
    portalName: 'Legal Entity Identifier India (LEIL)',
    estimatedDays: '2 से 3 कार्यदिवस',
    govtFee: '₹4,250 + GST (प्रथम वर्ष)',
    requiredDocuments: [
      { name: 'कंपनी का पैन कार्ड व सर्टिफिकेट ऑफ इनकॉर्पोरेशन', mandatory: true },
      { name: 'बोर्ड संकल्प (Board Resolution)', mandatory: true },
      { name: 'ऑडिटेड वित्तीय विवरण', mandatory: true }
    ],
    voiceBriefing: 'बड़े औद्योगिक लोन और बैंकिंग लेनदेन के लिए आरबीआई द्वारा अनिवार्य एलईआई कोड एलईआईएल पोर्टल से जारी होता है।',
    keywords: ['lei', 'lei code', 'legal entity identifier', 'rbi lei', 'बड़े लोन कोड']
  },
  {
    id: 'apeda-rcmc',
    title: 'अपीडा कृषि निर्यात पंजीकरण (APEDA RCMC Exporter Registration)',
    department: 'कृषि और प्रसंस्कृत खाद्य उत्पाद निर्यात विकास प्राधिकरण',
    ministry: 'वाणिज्य एवं उद्योग मंत्रालय',
    category: 'BUSINESS_TAX',
    benefitSummary: 'चावल, फल, सब्जियां और कृषि उत्पाद विदेशों में निर्यात करने हेतु अनिवार्य RCMC',
    officialApplyUrl: 'https://apeda.gov.in/apedawebsite/RCMC/RCMC_Index.htm',
    portalName: 'APEDA National Exporter Portal',
    estimatedDays: '3 से 5 कार्यदिवस',
    govtFee: '₹5,000 + GST',
    requiredDocuments: [
      { name: 'आयात-निर्यात कोड (IEC)', mandatory: true },
      { name: 'बैंक प्रमाण पत्र / कैंसिल्ड चेक', mandatory: true },
      { name: 'फर्म का पैन कार्ड', mandatory: true }
    ],
    voiceBriefing: 'अनाज, बासमती चावल और फल-सब्जियां विदेशों में एक्सपोर्ट करने के लिए अपीडा पोर्टल से आरसीएमसी सर्टिफिकेट प्राप्त करें।',
    keywords: ['apeda', 'rcmc', 'कृषि निर्यात', 'apeda registration', 'rice export']
  },
  {
    id: 'copyright-registration',
    title: 'कॉपीराइट पंजीकरण (Copyright Office e-Filing)',
    department: 'कॉपीराइट कार्यालय (Copyright Office)',
    ministry: 'वाणिज्य एवं उद्योग मंत्रालय',
    category: 'BUSINESS_TAX',
    benefitSummary: 'किताब, संगीत, सॉफ्टवेयर कोड, वीडियो व कलात्मक कृतियों पर कानूनी बौद्धिक संपदा अधिकार',
    officialApplyUrl: 'https://copyright.gov.in/',
    portalName: 'Copyright e-Filing Portal',
    estimatedDays: '30 दिन आपत्ति अवधि उपरांत',
    govtFee: 'साहित्य/सॉफ्टवेयर ₹500 / कलात्मक कार्य ₹2,000',
    requiredDocuments: [
      { name: 'रचना की मूल प्रति (PDF/Source Code/Audio)', mandatory: true },
      { name: 'लेखक/निर्माता का पहचान प्रमाण व एनओसी', mandatory: true }
    ],
    voiceBriefing: 'अपनी लिखी किताब, सॉफ्टवेयर कोड या संगीत को चोरी होने से बचाने के लिए कॉपीराइट पोर्टल पर ऑनलाइन पंजीकरण करें।',
    keywords: ['copyright', 'कॉपीराइट', 'book copyright', 'software copyright', 'रचना चोरी']
  },
  {
    id: 'design-registration',
    title: 'औद्योगिक डिज़ाइन पंजीकरण (Design Registration - IP India)',
    department: 'पेटेंट, डिजाइन और ट्रेडमार्क महानियंत्रक (CGPDTM)',
    ministry: 'वाणिज्य एवं उद्योग मंत्रालय',
    category: 'BUSINESS_TAX',
    benefitSummary: 'उत्पाद के अनोखे बाहरी आकार, पैटर्न या डिजाइन की 15 वर्षों तक कानूनी सुरक्षा',
    officialApplyUrl: 'https://ipindiaonline.gov.in/',
    portalName: 'IP India Design Portal',
    estimatedDays: '2 से 4 माह',
    govtFee: 'प्राकृतिक व्यक्ति/स्टार्टअप ₹1,000 / कंपनी ₹4,000',
    requiredDocuments: [
      { name: 'उत्पाद की 4 तरफा स्पष्ट तस्वीरें (2D/3D)', mandatory: true },
      { name: 'नवीनता का संक्षिप्त विवरण (Statement of Novelty)', mandatory: true }
    ],
    voiceBriefing: 'अपने बनाए उत्पाद के बाहरी रूप और डिजाइन को पेटेंट कराने हेतु डिजाइन रजिस्ट्रेशन के लिए आवेदन करें।',
    keywords: ['design registration', 'औद्योगिक डिजाइन', 'ip india design', 'product shape']
  },
  {
    id: 'mca-din-dir3',
    title: 'निदेशक पहचान संख्या (Director Identification Number - DIN / DIR-3)',
    department: 'कॉर्पोरेट कार्य मंत्रालय (MCA)',
    ministry: 'कॉर्पोरेट कार्य मंत्रालय',
    category: 'BUSINESS_TAX',
    benefitSummary: 'किसी भी भारतीय कंपनी में डायरेक्टर बनने हेतु अनिवार्य 8 अंकों का DIN',
    officialApplyUrl: 'https://www.mca.gov.in/',
    portalName: 'MCA21 Services',
    estimatedDays: 'तत्काल 1 कार्यदिवस में',
    govtFee: '₹500 (सरकारी फॉर्म फीस)',
    requiredDocuments: [
      { name: 'आवेदक का पैन कार्ड', mandatory: true },
      { name: 'आधार कार्ड / पासपोर्ट / मतदाता पहचान', mandatory: true },
      { name: 'डिजिटल सिग्नेचर सर्टिफिकेट (DSC)', mandatory: true }
    ],
    voiceBriefing: 'कंपनी में डायरेक्टर बनने के लिए एमसीए पोर्टल पर फॉर्म DIR-3 भरकर डिन नंबर प्राप्त करें।',
    keywords: ['din', 'dir3', 'director identification number', 'कंपनी डायरेक्टर', 'mca din']
  },
  {
    id: 'itr-filing',
    title: 'आयकर रिटर्न (Income Tax Return - ITR e-Filing)',
    department: 'आयकर विभाग (Income Tax Department)',
    ministry: 'वित्त मंत्रालय',
    category: 'BUSINESS_TAX',
    benefitSummary: 'टीडीएस रिफंड, बैंक लोन और वीजा हेतु आधिकारिक आय प्रमाण',
    officialApplyUrl: 'https://www.incometax.gov.in/iec/foportal/',
    portalName: 'Income Tax e-Filing Portal 2.0',
    estimatedDays: 'तत्काल ई-वेरिफिकेशन उपरांत',
    govtFee: '₹0 (नियत तिथि तक निःशुल्क)',
    requiredDocuments: [
      { name: 'पैन कार्ड', mandatory: true },
      { name: 'आधार कार्ड (पैन लिंक)', mandatory: true },
      { name: 'बैंक खाता विवरण व फॉर्म 16 / AIS / TIS', mandatory: true }
    ],
    voiceBriefing: 'आईटीआर भरने और टीडीएस रिफंड पाने के लिए आयकर ई-फाइलिंग पोर्टल पर पैन और आधार से लॉगिन करें।',
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
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'सक्रिय यूएएन (UAN) व पासवर्ड', mandatory: true },
      { name: 'आधार लिंक मोबाइल नंबर', mandatory: true },
      { name: 'बैंक खाता व कैंसिल्ड चेक (KYC अनुमोदित)', mandatory: true }
    ],
    voiceBriefing: 'पीएफ बैलेंस चेक करने या पैसे निकालने के लिए ईपीएफओ मेंबर पोर्टल पर यूएएन से लॉगिन करें।',
    keywords: ['pf', 'epfo', 'uan', 'पीएफ', 'pf balance', 'pf withdrawal']
  },
  {
    id: 'company-incorporation',
    title: 'नई कंपनी पंजीकरण (Company Registration - SPICe+ MCA)',
    department: 'कॉर्पोरेट कार्य मंत्रालय (MCA)',
    ministry: 'कॉर्पोरेट कार्य मंत्रालय',
    category: 'BUSINESS_TAX',
    benefitSummary: 'प्राइवेट लिमिटेड, ओपीसी या एलएलपी कंपनी का कानूनी गठन और CIN नंबर',
    officialApplyUrl: 'https://www.mca.gov.in/',
    portalName: 'MCA21 Portal (SPICe+)',
    estimatedDays: '5 से 10 कार्यदिवस',
    govtFee: '₹15 लाख तक अधिकृत पूंजी पर ROC शुल्क ₹0',
    requiredDocuments: [
      { name: 'सभी निदेशकों का पैन और आधार कार्ड', mandatory: true },
      { name: 'डायरेक्टर डिजिटल सिग्नेचर (DSC)', mandatory: true },
      { name: 'रजिस्टर्ड कार्यालय का बिजली बिल व एनओसी', mandatory: true }
    ],
    voiceBriefing: 'नई प्राइवेट लिमिटेड कंपनी बनाने के लिए एमसीए पोर्टल पर फॉर्म SPICe+ भरा जाता है।',
    keywords: ['company registration', 'pvt ltd', 'कंपनी', 'mca', 'spice+']
  },
  {
    id: 'import-export-code',
    title: 'आयात-निर्यात कोड (Import Export Code - IEC)',
    department: 'विदेश व्यापार महानिदेशालय (DGFT)',
    ministry: 'वाणिज्य एवं उद्योग मंत्रालय',
    category: 'BUSINESS_TAX',
    benefitSummary: 'विदेशों से सामान मंगाने या भारत से निर्यात करने हेतु अनिवार्य 10 अंकों का IEC',
    officialApplyUrl: 'https://www.dgft.gov.in/',
    portalName: 'DGFT Citizen Portal',
    estimatedDays: 'तत्काल 1 कार्यदिवस में ऑनलाइन जारी',
    govtFee: '₹500 (ऑनलाइन सरकारी शुल्क)',
    requiredDocuments: [
      { name: 'फर्म या प्रोपराइटर का पैन कार्ड', mandatory: true },
      { name: 'बैंक खाता प्रमाण पत्र / कैंसिल्ड चेक', mandatory: true },
      { name: 'व्यापार स्थल का पता प्रमाण', mandatory: true }
    ],
    voiceBriefing: 'विदेशों में व्यापार और एक्सपोर्ट-इम्पोर्ट के लिए डीजीएफटी पोर्टल पर आईईसी कोड ऑनलाइन प्राप्त करें।',
    keywords: ['iec', 'import export', 'dgft', 'निर्यात', 'आयात कोड']
  },
  {
    id: 'trademark-patent',
    title: 'ट्रेडमार्क एवं पेटेंट पंजीकरण (Intellectual Property - IP India)',
    department: 'उद्योग संवर्धन और आंतरिक व्यापार विभाग',
    ministry: 'वाणिज्य एवं उद्योग मंत्रालय',
    category: 'BUSINESS_TAX',
    benefitSummary: 'ब्रांड नाम, लोगो और नए आविष्कारों पर एकाधिकार कानूनी सुरक्षा',
    officialApplyUrl: 'https://ipindiaonline.gov.in/',
    portalName: 'IP India E-Filing Portal',
    estimatedDays: 'प्राथमिक जांच 15 दिन / अंतिम प्रमाण पत्र 6-12 माह',
    govtFee: 'व्यक्ति/स्टार्टअप हेतु ₹4,500',
    requiredDocuments: [
      { name: 'ब्रांड लोगो या ट्रेडमार्क विवरण', mandatory: true },
      { name: 'आवेदक का आधार व पैन कार्ड', mandatory: true },
      { name: 'उद्यम/एमएसएमई सर्टिफिकेट (50% फीस छूट हेतु)', mandatory: false }
    ],
    voiceBriefing: 'अपने ब्रांड लोगो या नाम को सुरक्षित करने के लिए आईपी इंडिया पोर्टल पर ट्रेडमार्क पंजीकरण करें।',
    keywords: ['trademark', 'patent', 'ट्रेडमार्क', 'brand logo', 'ip india']
  },
  {
    id: 'fssai-foscos',
    title: 'खाद्य लाइसेंस / रजिस्ट्रेशन (FSSAI FoSCoS Food License)',
    department: 'भारतीय खाद्य सुरक्षा और मानक प्राधिकरण (FSSAI)',
    ministry: 'स्वास्थ्य एवं परिवार कल्याण मंत्रालय',
    category: 'BUSINESS_TAX',
    benefitSummary: 'होटल, ढाबा, किराना दुकान या खाद्य निर्माण हेतु अनिवार्य फूड लाइसेंस',
    officialApplyUrl: 'https://foscos.fssai.gov.in/',
    portalName: 'Food Safety Compliance System (FoSCoS)',
    estimatedDays: '7 से 30 कार्यदिवस',
    govtFee: 'रजिस्ट्रेशन ₹100 प्रति वर्ष / राज्य लाइसेंस ₹2,000+',
    requiredDocuments: [
      { name: 'दुकानदार का आधार या फोटो पहचान पत्र', mandatory: true },
      { name: 'दुकान का बिजली बिल या किरायानामा', mandatory: true },
      { name: 'खाद्य उत्पादों की सूची', mandatory: true }
    ],
    voiceBriefing: 'खाने-पीने की दुकान या रेस्टोरेंट के लिए एफएसएसएआई के फोसकॉस पोर्टल पर ऑनलाइन फूड लाइसेंस बनता है।',
    keywords: ['fssai', 'food license', 'foscos', 'फूड लाइसेंस', 'खाद्य सुरक्षा']
  },
  {
    id: 'gem-portal',
    title: 'गवर्नमेंट ई-मार्केटप्लेस विक्रेता पंजीकरण (GeM Seller Portal)',
    department: 'वाणिज्य विभाग',
    ministry: 'वाणिज्य एवं उद्योग मंत्रालय',
    category: 'BUSINESS_TAX',
    benefitSummary: 'सरकारी विभागों, रेलवे और सेना को सीधे माल और सेवाएं बेचना',
    officialApplyUrl: 'https://gem.gov.in/',
    portalName: 'Government e-Marketplace (GeM)',
    estimatedDays: 'तत्काल (सत्यापन 2-3 दिन)',
    govtFee: '₹0 (पंजीकरण निःशुल्क)',
    requiredDocuments: [
      { name: 'पैन कार्ड व उद्यम रजिस्ट्रेशन', mandatory: true },
      { name: 'जीएसटी नंबर', mandatory: true },
      { name: 'बैंक खाता विवरण', mandatory: true }
    ],
    voiceBriefing: 'सरकारी विभागों में माल सप्लाई करने के लिए जेम पोर्टल पर विक्रेता के रूप में पंजीकरण करें।',
    keywords: ['gem', 'gem portal', 'सरकारी टेंडर', 'gem seller']
  },

  // ==========================================
  // 2. पहचान एवं नागरिकता (IDENTITY)
  // ==========================================
  {
    id: 'aadhaar-update',
    title: 'आधार कार्ड (अपडेट / डाउनलोड / पीवीसी कार्ड)',
    department: 'भारतीय विशिष्ट पहचान प्राधिकरण (UIDAI)',
    ministry: 'इलेक्ट्रॉनिक्स एवं सूचना प्रौद्योगिकी मंत्रालय',
    category: 'IDENTITY',
    benefitSummary: 'देशभर में मान्य 12 अंकों की डिजिटल राष्ट्रीय पहचान व पता प्रमाण',
    officialApplyUrl: 'https://myaadhaar.uidai.gov.in/',
    portalName: 'myAadhaar Portal (UIDAI)',
    estimatedDays: 'तत्काल डाउनलोड / अपडेट 15-30 दिन',
    govtFee: 'डाउनलोड ₹0 / अपडेट ₹50 / पीवीसी कार्ड ₹50',
    requiredDocuments: [
      { name: 'पहचान का प्रमाण (वोटर कार्ड/पैन/पासपोर्ट)', mandatory: true },
      { name: 'पते का प्रमाण (बिजली बिल/राशन कार्ड/पासबुक)', mandatory: true },
      { name: 'मोबाइल नंबर (ओटीपी हेतु)', mandatory: true }
    ],
    voiceBriefing: 'आधार कार्ड डाउनलोड करने या पता अपडेट करने के लिए myAadhaar आधिकारिक पोर्टल पर जाएं।',
    keywords: ['aadhaar', 'aadhar', 'आधार', 'uidai', 'myaadhaar', 'pvc aadhaar']
  },
  {
    id: 'transgender-id-card',
    title: 'ट्रांसजेंडर राष्ट्रीय पहचान पत्र (National Portal for Transgender Persons)',
    department: 'सामाजिक न्याय और अधिकारिता मंत्रालय',
    ministry: 'सामाजिक न्याय और अधिकारिता मंत्रालय',
    category: 'IDENTITY',
    benefitSummary: 'बिना किसी भौतिक परीक्षण के स्व-घोषणा आधारित आधिकारिक पहचान पत्र व प्रमाण पत्र',
    officialApplyUrl: 'https://transgender.dosje.gov.in/',
    portalName: 'National Transgender Portal',
    estimatedDays: '30 कार्यदिवस में जिला मजिस्ट्रेट द्वारा',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'स्व-घोषणा शपथ पत्र (Affidavit)', mandatory: true },
      { name: 'आधार कार्ड अथवा जन्म प्रमाण पत्र', mandatory: true },
      { name: 'पासपोर्ट साइज रंगीन फोटो', mandatory: true }
    ],
    voiceBriefing: 'किन्नर और ट्रांसजेंडर व्यक्तियों के आधिकारिक पहचान पत्र के लिए नेशनल ट्रांसजेंडर पोर्टल पर ऑनलाइन आवेदन करें।',
    keywords: ['transgender', 'किन्नर पहचान पत्र', 'transgender id', 'kinnar card', 'dosje']
  },
  {
    id: 'oci-card-service',
    title: 'प्रवासी भारतीय नागरिकता (OCI Card Registration)',
    department: 'आप्रवासन ब्यूरो (BoI)',
    ministry: 'गृह मंत्रालय',
    category: 'IDENTITY',
    benefitSummary: 'विदेशी नागरिकता प्राप्त भारतीय मूल के व्यक्तियों हेतु आजीवन भारत प्रवेश वीजा',
    officialApplyUrl: 'https://ociservices.gov.in/',
    portalName: 'OCI Services Portal',
    estimatedDays: '45 से 60 कार्यदिवस',
    govtFee: '$275 अथवा समकक्ष भारतीय मुद्रा',
    requiredDocuments: [
      { name: 'विदेशी पासपोर्ट की प्रति', mandatory: true },
      { name: 'पूर्व भारतीय नागरिकता का प्रमाण (पुराना पासपोर्ट/जन्म प्रमाण)', mandatory: true },
      { name: 'वैवाहिक प्रमाण पत्र (यदि लागू हो)', mandatory: false }
    ],
    voiceBriefing: 'विदेशों में बसे भारतीय मूल के नागरिकों को ओसीआई कार्ड लेने के लिए ओसीआई सर्विसेज पोर्टल पर ऑनलाइन आवेदन करना होता है।',
    keywords: ['oci', 'oci card', 'overseas citizen of india', 'प्रवासी भारतीय', 'nri card']
  },
  {
    id: 'e-frro-visa',
    title: 'विदेशी नागरिक पंजीकरण व वीजा विस्तार (e-FRRO Portal)',
    department: 'आप्रवासन ब्यूरो (BoI)',
    ministry: 'गृह मंत्रालय',
    category: 'IDENTITY',
    benefitSummary: 'भारत आने वाले विदेशियों का ऑनलाइन पंजीकरण, वीजा एक्सटेंशन और एग्जिट परमिट',
    officialApplyUrl: 'https://eservices.immigration.gov.in/',
    portalName: 'e-FRRO Online Portal',
    estimatedDays: '3 से 7 कार्यदिवस',
    govtFee: 'सेवा अनुसार सरकारी वीजा शुल्क',
    requiredDocuments: [
      { name: 'वैध पासपोर्ट व भारतीय वीजा प्रति', mandatory: true },
      { name: 'भारत में निवास प्रमाण / फॉर्म सी (होटल/किरायानामा)', mandatory: true }
    ],
    voiceBriefing: 'भारत में रुके विदेशी नागरिकों के वीजा विस्तार और पंजीकरण के लिए ई-एफआरआरओ पोर्टल पर बिना दफ्तर जाए आवेदन करें।',
    keywords: ['e-frro', 'frro', 'visa extension', 'विदेशी पंजीकरण', 'exit permit']
  },
  {
    id: 'egazette-name-change',
    title: 'भारत का राजपत्र नाम परिवर्तन (e-Gazette Name Change Publication)',
    department: 'प्रकाशन विभाग (Department of Publication)',
    ministry: 'आवासन और शहरी कार्य मंत्रालय',
    category: 'IDENTITY',
    benefitSummary: 'पासपोर्ट, बैंक और शैक्षणिक मार्कशीट में नाम सुधारने हेतु कानूनी राजपत्र अधिसूचना',
    officialApplyUrl: 'https://egazette.gov.in/',
    portalName: 'eGazette National Portal',
    estimatedDays: '15 से 20 कार्यदिवस',
    govtFee: '₹1,100 से ₹1,700 (अधिसूचना अनुसार)',
    requiredDocuments: [
      { name: 'नोटरी द्वारा प्रमाणित शपथ पत्र (Name Change Affidavit)', mandatory: true },
      { name: 'दो समाचार पत्रों में प्रकाशित मूल विज्ञापन', mandatory: true },
      { name: 'आधार कार्ड व पैन कार्ड प्रति', mandatory: true }
    ],
    voiceBriefing: 'अपना नाम बदलने या सुधारने के लिए भारत के आधिकारिक ई-गज़ट पोर्टल पर सरकारी गजट प्रकाशित कराया जाता है।',
    keywords: ['egazette', 'name change', 'नाम परिवर्तन', 'राजपत्र', 'gazette notification']
  },
  {
    id: 'pan-new',
    title: 'नया पैन कार्ड (Form 49A / Instant e-PAN)',
    department: 'आयकर विभाग (Income Tax Department)',
    ministry: 'वित्त मंत्रालय',
    category: 'IDENTITY',
    benefitSummary: 'बैंक खाता, लोन और वित्तीय लेनदेन हेतु अनिवार्य 10 अंकों का पैन',
    officialApplyUrl: 'https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html',
    portalName: 'Protean NSDL Portal',
    estimatedDays: 'तत्काल (e-PAN 10 मिनट) / भौतिक कार्ड 10 दिन',
    govtFee: 'e-PAN ₹0 / भौतिक कार्ड ₹107',
    requiredDocuments: [
      { name: 'आधार कार्ड', mandatory: true },
      { name: 'सादे कागज़ पर हस्ताक्षर की फोटो', mandatory: true }
    ],
    voiceBriefing: 'नया पैन कार्ड एनएसडीएल पोर्टल से ऑनलाइन बनता है। आधार कार्ड और हस्ताक्षर की फोटो तैयार रखें।',
    keywords: ['pan', 'pan card', 'पैन कार्ड', 'nsdl', 'utiitsl', 'form 49a']
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
    title: 'राशन कार्ड (NFSA नया आवेदन / राशन पर्ची)',
    department: 'खाद्य एवं रसद विभाग',
    ministry: 'उपभोक्ता मामले, खाद्य और सार्वजनिक वितरण मंत्रालय',
    category: 'IDENTITY',
    benefitSummary: 'प्रति यूनिट 5 किलो मुफ्त सरकारी अनाज (गेहूं, चावल)',
    officialApplyUrl: 'https://nfsa.gov.in/',
    portalName: 'National Food Security Portal (NFSA)',
    estimatedDays: '30 कार्यदिवस',
    govtFee: '₹0 से ₹20 (राज्य अनुसार)',
    requiredDocuments: [
      { name: 'परिवार के मुखिया का आधार कार्ड', mandatory: true },
      { name: 'सभी पारिवारिक सदस्यों के आधार', mandatory: true },
      { name: 'आय प्रमाण पत्र व बैंक पासबुक', mandatory: true }
    ],
    voiceBriefing: 'राशन कार्ड के लिए एनएफएसए पोर्टल से आवेदन करें। परिवार के सभी सदस्यों का आधार अनिवार्य है।',
    keywords: ['ration', 'ration card', 'राशन कार्ड', 'nfsa', 'राशन']
  },
  {
    id: 'pancard-aadhaar-link',
    title: 'पैन-आधार लिंक स्थिति (PAN-Aadhaar Link Check)',
    department: 'आयकर विभाग (Income Tax Department)',
    ministry: 'वित्त मंत्रालय',
    category: 'IDENTITY',
    benefitSummary: 'पैन कार्ड को निष्क्रिय होने से बचाने और बैंक लेनदेन सुचारू रखने हेतु जांच',
    officialApplyUrl: 'https://eportal.incometax.gov.in/iec/foservices/#/pre-login/link-aadhaar-status',
    portalName: 'Income Tax e-Filing Link Service',
    estimatedDays: 'तत्काल 1 सेकंड में',
    govtFee: 'स्थिति जांच ₹0',
    requiredDocuments: [
      { name: 'पैन कार्ड नंबर', mandatory: true },
      { name: 'आधार कार्ड नंबर', mandatory: true }
    ],
    voiceBriefing: 'आपका पैन कार्ड आधार से लिंक है या नहीं, यह जानने के लिए इनकम टैक्स पोर्टल पर पैन और आधार नंबर डालकर स्टेटस चेक करें।',
    keywords: ['pan aadhaar link', 'link aadhaar', 'पैन आधार लिंक']
  },

  // ==========================================
  // 3. स्वास्थ्य, चिकित्सा एवं सामाजिक सुरक्षा (HEALTH_WELFARE)
  // ==========================================
  {
    id: 'ors-aiims-appointment',
    title: 'एम्स व सरकारी अस्पताल ओपीडी पर्चा (ORS Patient Portal)',
    department: 'राष्ट्रीय सूचना विज्ञान केंद्र (NIC) / स्वास्थ्य मंत्रालय',
    ministry: 'स्वास्थ्य एवं परिवार कल्याण मंत्रालय',
    category: 'HEALTH_WELFARE',
    benefitSummary: 'एम्स (AIIMS) और केंद्र/राज्य के बड़े सरकारी अस्पतालों में लंबी लाइन से बचकर घर बैठे ओपीडी पर्चा बुक करना',
    officialApplyUrl: 'https://ors.gov.in/',
    portalName: 'Online Registration System (ORS)',
    estimatedDays: 'तत्काल डिजिटल ओपीडी पर्ची',
    govtFee: '₹0 से ₹10 (अस्पताल नियमानुसार)',
    requiredDocuments: [
      { name: 'मरीज का आधार कार्ड / आभा आईडी', mandatory: true },
      { name: 'मोबाइल नंबर (ओटीपी हेतु)', mandatory: true }
    ],
    voiceBriefing: 'एम्स या बड़े सरकारी अस्पताल में डॉक्टर को दिखाने के लिए ओआरएस पोर्टल से घर बैठे ओपीडी पर्चा बुक करें।',
    keywords: ['ors', 'aiims appointment', 'ओपीडी पर्चा', 'सरकारी अस्पताल पर्ची', 'ehospital']
  },
  {
    id: 'cara-child-adoption',
    title: 'कानूनी बच्चा गोद लेना (CARA Central Adoption Resource Authority)',
    department: 'महिला एवं बाल विकास मंत्रालय',
    ministry: 'महिला एवं बाल विकास मंत्रालय',
    category: 'HEALTH_WELFARE',
    benefitSummary: 'भारत में अनाथ या परित्यक्त बच्चों को कानूनी व पारदर्शी तरीके से गोद लेने का एकमात्र आधिकारिक मंच',
    officialApplyUrl: 'https://cara.wcd.gov.in/',
    portalName: 'CARINGS Portal (CARA)',
    estimatedDays: 'दत्तक ग्रहण समिति एवं अदालत के माध्यम से',
    govtFee: 'कारा के आधिकारिक दिशा-निर्देश अनुसार',
    requiredDocuments: [
      { name: 'दंपति/अभिभावक का पैन व आधार कार्ड', mandatory: true },
      { name: 'विवाह प्रमाण पत्र व पारिवारिक आय प्रमाण', mandatory: true },
      { name: 'मेडिकल फिटनेस प्रमाण पत्र', mandatory: true }
    ],
    voiceBriefing: 'बच्चा कानूनी रूप से गोद लेने के लिए महिला एवं बाल विकास मंत्रालय के आधिकारिक कारा पोर्टल पर पंजीकरण करें।',
    keywords: ['cara', 'child adoption', 'बच्चा गोद लेना', 'carings', 'dattak grahan']
  },
  {
    id: 'rashtriya-arogya-nidhi',
    title: 'राष्ट्रीय आरोग्य निधि (Rashtriya Arogya Nidhi - RAN Treatment Grant)',
    department: 'स्वास्थ्य एवं परिवार कल्याण विभाग',
    ministry: 'स्वास्थ्य एवं परिवार कल्याण मंत्रालय',
    category: 'HEALTH_WELFARE',
    benefitSummary: 'गरीबी रेखा से नीचे के मरीजों को कैंसर, हृदय व दुर्लभ बीमारियों के इलाज हेतु ₹15 लाख तक की सीधी सरकारी आर्थिक मदद',
    officialApplyUrl: 'https://mohfw.gov.in/',
    portalName: 'MoHFW Financial Assistance Portal',
    estimatedDays: 'अस्पताल मेडिकल बोर्ड संस्तुति अनुसार',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'बीपीएल राशन कार्ड अथवा आय प्रमाण पत्र', mandatory: true },
      { name: 'सरकारी सुपर-स्पेशलिटी अस्पताल का इलाज प्राक्कलन (Cost Estimate)', mandatory: true },
      { name: 'मरीज का आधार कार्ड', mandatory: true }
    ],
    voiceBriefing: 'गंभीर बीमारियों के इलाज के लिए 15 लाख रुपये तक की सरकारी सहायता पाने हेतु राष्ट्रीय आरोग्य निधि में आवेदन किया जाता है।',
    keywords: ['ran', 'arogya nidhi', 'आरोग्य निधि', 'cancer sahayata', 'muft ilaj grant']
  },
  {
    id: 'one-stop-centre-sakhi',
    title: 'वन स्टॉप सेंटर सखी (Sakhi One Stop Centre for Women in Distress)',
    department: 'महिला एवं बाल विकास मंत्रालय',
    ministry: 'महिला एवं बाल विकास मंत्रालय',
    category: 'HEALTH_WELFARE',
    benefitSummary: 'हिंसा, प्रताड़ना या संकटग्रस्त महिलाओं को एक ही छत के नीचे 24x7 पुलिस, कानूनी, चिकित्सा व आश्रय सहायता',
    officialApplyUrl: 'https://wcd.nic.in/',
    portalName: 'Sakhi Women Helpline 181',
    estimatedDays: 'तत्काल 24 घंटे आपात सेवा',
    govtFee: '₹0 (पूर्णतः निःशुल्क व गोपनीय)',
    requiredDocuments: [
      { name: 'पीड़िता की मौखिक अथवा लिखित सूचना', mandatory: true }
    ],
    voiceBriefing: 'किसी भी संकट या प्रताड़ना से पीड़ित महिला की तत्काल मदद के लिए 181 पर कॉल करें या सखी वन स्टॉप सेंटर से संपर्क करें।',
    keywords: ['sakhi', 'one stop centre', 'महिला हेल्पलाइन 181', 'mahila sahayata', 'women crisis']
  },
  {
    id: 'poshan-tracker',
    title: 'पोषण ट्रैकर (Poshan Tracker Anganwadi Services)',
    department: 'महिला एवं बाल विकास मंत्रालय',
    ministry: 'महिला एवं बाल विकास मंत्रालय',
    category: 'HEALTH_WELFARE',
    benefitSummary: 'गर्भवती महिलाओं, धात्री माताओं और 0-6 वर्ष के बच्चों को आंगनवाड़ी से गर्म भोजन, राशन व वृद्धि निगरानी',
    officialApplyUrl: 'https://www.poshantracker.in/',
    portalName: 'Poshan Tracker National Portal',
    estimatedDays: 'निकटतम आंगनवाड़ी केंद्र पर तत्काल',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'माता/पिता का आधार कार्ड', mandatory: true },
      { name: 'बच्चे का जन्म प्रमाण / टीकाकरण कार्ड', mandatory: true }
    ],
    voiceBriefing: 'बच्चों और गर्भवती महिलाओं के मुफ्त आंगनवाड़ी राशन और पोषण हेतु पोषण ट्रैकर पोर्टल पर पंजीकृत कराएं।',
    keywords: ['poshan tracker', 'पोषण ट्रैकर', 'anganwadi ration', 'आंगनवाड़ी पोषाहार', 'dhatri mata']
  },
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
    voiceBriefing: 'आयुष्मान कार्ड से 5 लाख तक का अस्पताल में मुफ्त इलाज मिलता है। एनएचए के बेनिफिशियरी पोर्टल पर ई-केवाईसी करें।',
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
      { name: 'आधार कार्ड व लिंक मोबाइल', mandatory: true },
      { name: 'बैंक खाता विवरण', mandatory: true }
    ],
    voiceBriefing: 'मजदूर, मिस्त्री और रेहड़ी-पटरी वाले ई-श्रम पोर्टल पर सीधे आधार और बैंक खाते से निःशुल्क कार्ड बनाएं।',
    keywords: ['eshram', 'e-shram', 'ई श्रम', 'shramik card', 'मजदूर कार्ड']
  },
  {
    id: 'janaushadhi-medicines',
    title: 'पीएम जन औषधि सस्ती दवाइयां (Janaushadhi Store Locator)',
    department: 'फार्मास्यूटिकल्स विभाग',
    ministry: 'रसायन एवं उर्वरक मंत्रालय',
    category: 'HEALTH_WELFARE',
    benefitSummary: 'बाजार से 50% से 90% कम कीमत पर उच्च गुणवत्ता वाली जेनेरिक दवाइयां',
    officialApplyUrl: 'https://janaushadhi.gov.in/',
    portalName: 'PMBJP National Portal',
    estimatedDays: 'तत्काल निकटतम केंद्र पर',
    govtFee: 'ब्रांडेड दवाइयों से 90% तक सस्ती',
    requiredDocuments: [
      { name: 'डॉक्टर का वैध पर्चा (Prescription)', mandatory: true }
    ],
    voiceBriefing: 'सस्ती जेनेरिक दवाइयों के लिए जन औषधि केंद्र खोजें। यहाँ बाजार से 90% तक कम दाम में दवाइयां मिलती हैं।',
    keywords: ['janaushadhi', 'जन औषधि', 'सस्ती दवाई', 'generic medicines', 'pmbjp']
  },
  {
    id: 'eraktkosh-blood',
    title: 'ई-रक्तकोश (e-Raktkosh Online Blood Bank Availability)',
    department: 'राष्ट्रीय स्वास्थ्य मिशन (NHM)',
    ministry: 'स्वास्थ्य एवं परिवार कल्याण मंत्रालय',
    category: 'HEALTH_WELFARE',
    benefitSummary: 'निकटतम सरकारी व प्राइवेट ब्लड बैंकों में किसी भी ग्रुप के ब्लड की लाइव उपलब्धता',
    officialApplyUrl: 'https://eraktkosh.mohfw.gov.in/',
    portalName: 'e-Raktkosh Blood Portal',
    estimatedDays: 'तत्काल 24x7 सेवा',
    govtFee: 'सरकारी दरों पर सरकारी ब्लड बैंक में उपलब्ध',
    requiredDocuments: [
      { name: 'अस्पताल मांग पर्चा (Blood Requisition Form)', mandatory: true },
      { name: 'मरीज का पहचान पत्र', mandatory: true }
    ],
    voiceBriefing: 'आपातकाल में खून या प्लेटलेट्स की उपलब्धता जानने के लिए ई-रक्तकोश पोर्टल पर अपने जिले के ब्लड बैंक चेक करें।',
    keywords: ['blood bank', 'e-raktkosh', 'रक्त बैंक', 'ब्लड उपलब्धता', 'khoon']
  },
  {
    id: 'nikshay-tb',
    title: 'निक्षय पोषण योजना (Nikshay TB Patient ₹500/Month)',
    department: 'केंद्रीय टीबी प्रभाग (CTD)',
    ministry: 'स्वास्थ्य एवं परिवार कल्याण मंत्रालय',
    category: 'HEALTH_WELFARE',
    benefitSummary: 'टीबी मरीजों को इलाज के दौरान पोषण हेतु ₹500 प्रतिमाह सीधे बैंक खाते में',
    officialApplyUrl: 'https://www.nikshay.in/',
    portalName: 'Ni-kshay Portal',
    estimatedDays: 'इलाज शुरू होने के 15 दिन बाद',
    govtFee: 'इलाज व दवाइयां 100% मुफ्त + ₹500/माह सहायता',
    requiredDocuments: [
      { name: 'मरीज का आधार कार्ड', mandatory: true },
      { name: 'बैंक पासबुक विवरण (डीबीटी लिंक)', mandatory: true },
      { name: 'सरकारी डॉक्टर का जांच पर्चा', mandatory: true }
    ],
    voiceBriefing: 'टीबी के मरीजों को पोषण सहायता के लिए निक्षय पोर्टल पर डॉक्टर द्वारा पंजीकृत कर ₹500 प्रति माह दिया जाता है।',
    keywords: ['nikshay', 'निक्षय', 'tb yojana', 'टीबी मरीज सहायता', 'poshan yojana']
  },
  {
    id: 'notto-organ-donor',
    title: 'राष्ट्रीय अंगदान प्रतिज्ञा (NOTTO Organ Donor Pledge)',
    department: 'राष्ट्रीय अंग और ऊतक प्रत्यारोपण संगठन (NOTTO)',
    ministry: 'स्वास्थ्य एवं परिवार कल्याण मंत्रालय',
    category: 'HEALTH_WELFARE',
    benefitSummary: 'जीवन के बाद दूसरों को जीवनदान देने हेतु अंगदान का आधिकारिक डिजिटल डोनर कार्ड',
    officialApplyUrl: 'https://notto.mohfw.gov.in/',
    portalName: 'NOTTO National Portal',
    estimatedDays: 'तत्काल डोनर कार्ड डाउनलोड',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'आधार कार्ड व लिंक मोबाइल नंबर', mandatory: true },
      { name: 'परिवार के एक साक्षी का विवरण', mandatory: true }
    ],
    voiceBriefing: 'अंगदान की प्रतिज्ञा लेने और अपना राष्ट्रीय डोनर कार्ड प्राप्त करने के लिए नोटो पोर्टल पर पंजीकरण करें।',
    keywords: ['notto', 'organ donation', 'अंगदान', 'donor card']
  },
  {
    id: 'udid-divyang',
    title: 'यूडीआईडी दिव्यांगता कार्ड (Unique Disability ID - UDID)',
    department: 'दिव्यांगजन सशक्तिकरण विभाग',
    ministry: 'सामाजिक न्याय और अधिकारिता मंत्रालय',
    category: 'HEALTH_WELFARE',
    benefitSummary: 'दिव्यांग पेंशन, बस/रेलवे पास और नौकरियों में आरक्षण हेतु 1 राष्ट्रीय कार्ड',
    officialApplyUrl: 'https://www.swavlambancard.gov.in/',
    portalName: 'Swavlamban UDID Portal',
    estimatedDays: 'सीएमओ मेडिकल बोर्ड जांच उपरांत',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'आधार कार्ड', mandatory: true },
      { name: 'सीएमओ द्वारा जारी मेडिकल पर्चा', mandatory: true },
      { name: 'दिव्यांगता दर्शाती पूर्ण फोटो', mandatory: true }
    ],
    voiceBriefing: 'दिव्यांगजनों के लिए स्वावलंबन पोर्टल पर यूडीआईडी कार्ड बनता है, जो पूरे भारत में मान्य होता है।',
    keywords: ['udid', 'divyang', 'विकलांग कार्ड', 'divyangjan', 'swavlamban']
  },
  {
    id: 'pmmvy-matru',
    title: 'प्रधानमंत्री मातृ वंदना योजना (PMMVY गर्भवती सहायता)',
    department: 'महिला एवं बाल विकास मंत्रालय',
    ministry: 'महिला एवं बाल विकास मंत्रालय',
    category: 'HEALTH_WELFARE',
    benefitSummary: 'गर्भवती महिलाओं को पोषण सहायता हेतु ₹5,000 से ₹6,000 की सीधी नकद सहायता',
    officialApplyUrl: 'https://pmmvy.wcd.gov.in/',
    portalName: 'PMMVY Citizen Portal',
    estimatedDays: 'किस्त वार 30 दिन में',
    govtFee: '₹0 (निःशुल्क)',
    requiredDocuments: [
      { name: 'माता और पिता का आधार कार्ड', mandatory: true },
      { name: 'एमसीपी कार्ड (Mother-Child Protection Card)', mandatory: true },
      { name: 'माता का बैंक खाता (आधार डीबीटी लिंक)', mandatory: true }
    ],
    voiceBriefing: 'गर्भवती महिलाओं को पोषण सहायता के लिए मातृ वंदना पोर्टल पर सीधे बैंक खाते में आर्थिक मदद मिलती है।',
    keywords: ['pmmvy', 'गर्भवती', 'मातृ वंदना', 'matru vandana', 'prashav']
  },

  // ==========================================
  // 4. कृषि, पशुपालन, बागवानी व किसान कल्याण (AGRICULTURE)
  // ==========================================
  {
    id: 'pm-krishi-sinchayee',
    title: 'पीएम कृषि सिंचाई योजना (PMKSY ड्रिप/स्प्रिंकलर 55% सब्सिडी)',
    department: 'कृषि एवं किसान कल्याण विभाग',
    ministry: 'कृषि एवं किसान कल्याण मंत्रालय',
    category: 'AGRICULTURE',
    benefitSummary: 'खेतों में ड्रिप और फव्वारा सिंचाई उपकरण लगाने हेतु लघु/सीमांत किसानों को 55% सरकारी सब्सिडी',
    officialApplyUrl: 'https://pmksy.gov.in/',
    portalName: 'PMKSY National Portal',
    estimatedDays: 'जिला कृषि अधिकारी सत्यापन उपरांत',
    govtFee: 'केवल कृषक अंश (45%)',
    requiredDocuments: [
      { name: 'किसान का आधार कार्ड', mandatory: true },
      { name: 'खतौनी (कृषि भूमि प्रमाण)', mandatory: true },
      { name: 'बैंक पासबुक व सिंचाई स्रोत प्रमाण (बोरवेल/नलकूप)', mandatory: true }
    ],
    voiceBriefing: 'फव्वारा और ड्रिप सिंचाई उपकरण पर 55% सब्सिडी पाने के लिए पीएम कृषि सिंचाई पोर्टल पर ऑनलाइन आवेदन करें।',
    keywords: ['pmksy', 'ड्रिप सिंचाई', 'drip irrigation', 'fawwara sinchai', 'sprinkler subsidy']
  },
  {
    id: 'midh-horticulture',
    title: 'एकीकृत बागवानी विकास मिशन (MIDH Horticulture Subsidy)',
    department: 'कृषि एवं किसान कल्याण विभाग',
    ministry: 'कृषि एवं किसान कल्याण मंत्रालय',
    category: 'AGRICULTURE',
    benefitSummary: 'पॉलीहाउस, शेडनेट, मशरूम उत्पादन और आम/अमरूद के नए बाग लगाने पर 50% तक पूंजीगत अनुदान',
    officialApplyUrl: 'https://midh.gov.in/',
    portalName: 'MIDH Horticulture Portal',
    estimatedDays: 'बागवानी विभाग भौतिक सत्यापन अनुसार',
    govtFee: '₹0 (आवेदन निःशुल्क)',
    requiredDocuments: [
      { name: 'खतौनी की नकल', mandatory: true },
      { name: 'आधार कार्ड व बैंक खाता विवरण', mandatory: true },
      { name: 'विस्तृत बागवानी प्रोजेक्ट प्रस्ताव', mandatory: true }
    ],
    voiceBriefing: 'पॉलीहाउस लगाने और फलों-सब्जियों के नए बाग लगाने पर 50 प्रतिशत तक सरकारी अनुदान हेतु बागवानी पोर्टल पर आवेदन करें।',
    keywords: ['midh', 'polyhouse', 'बागवानी सब्सिडी', 'mushroom farming', 'fal bagh']
  },
  {
    id: 'honey-mission-beekeeping',
    title: 'राष्ट्रीय मधुमक्खी पालन मिशन (Honey Mission / Beekeeping KVIC)',
    department: 'खादी एवं ग्रामोद्योग आयोग (KVIC)',
    ministry: 'एमएसएमई मंत्रालय',
    category: 'AGRICULTURE',
    benefitSummary: 'किसानों को 10 मधुमक्खी बॉक्स, कॉलोनी व टूलकिट 80% सरकारी अनुदान पर उपलब्ध कराना',
    officialApplyUrl: 'https://www.kviconline.gov.in/',
    portalName: 'KVIC Honey Mission Portal',
    estimatedDays: 'प्रशिक्षण बैच उपरांत',
    govtFee: 'मात्र 20% कृषक अंश',
    requiredDocuments: [
      { name: 'आधार कार्ड', mandatory: true },
      { name: 'कृषि भूमि प्रमाण अथवा निवास प्रमाण', mandatory: true },
      { name: 'बैंक पासबुक', mandatory: true }
    ],
    voiceBriefing: 'शहद उत्पादन और मधुमक्खी पालन का व्यवसाय शुरू करने के लिए हनी मिशन पोर्टल पर आवेदन करके सरकारी बक्से प्राप्त करें।',
    keywords: ['honey mission', 'मधुमक्खी पालन', 'beekeeping', 'kvic honey', 'shahad palan']
  },
  {
    id: 'kisan-drone-subsidy',
    title: 'किसान ड्रोन सब्सिडी योजना (Kisan Drone Subsidy Scheme)',
    department: 'कृषि एवं किसान कल्याण विभाग',
    ministry: 'कृषि एवं किसान कल्याण मंत्रालय',
    category: 'AGRICULTURE',
    benefitSummary: 'खेतों में कीटनाशक और नैनो यूरिया छिड़काव हेतु ड्रोन खरीद पर ₹5 लाख (50%) तक अनुदान',
    officialApplyUrl: 'https://agricoop.gov.in/',
    portalName: 'Agri Cooperation Portal',
    estimatedDays: 'कृषि यंत्रीकरण समिति अनुमोदन अनुसार',
    govtFee: 'नियम अनुसार',
    requiredDocuments: [
      { name: 'ड्रोन पायलट लाइसेंस (DGCA मान्यता प्राप्त)', mandatory: true },
      { name: 'आधार व पैन कार्ड', mandatory: true },
      { name: 'कृषि भूमि खतौनी / एफपीओ प्रमाण पत्र', mandatory: true }
    ],
    voiceBriefing: 'खेती में खाद छिड़कने वाले कृषि ड्रोन पर 50 प्रतिशत तक की सरकारी सब्सिडी पाने हेतु किसान ड्रोन योजना में आवेदन करें।',
    keywords: ['kisan drone', 'कृषि ड्रोन', 'drone subsidy', 'nano urea drone', 'chhidkaw drone']
  },
  {
    id: 'pm-kisan',
    title: 'पीएम किसान सम्मान निधि (नया किसान पंजीकरण / e-KYC)',
    department: 'कृषि एवं किसान कल्याण विभाग',
    ministry: 'कृषि एवं किसान कल्याण मंत्रालय',
    category: 'AGRICULTURE',
    benefitSummary: 'हर 4 माह में ₹2,00,0 की किस्त (सालाना ₹6,000 सीधे बैंक खाते में)',
    officialApplyUrl: 'https://pmkisan.gov.in/',
    portalName: 'PM-Kisan National Portal',
    estimatedDays: 'सत्यापन उपरांत आगामी किस्त में देय',
    govtFee: '₹0 (पंजीकरण निःशुल्क)',
    requiredDocuments: [
      { name: 'आधार कार्ड', mandatory: true },
      { name: 'खतौनी / जमीन के कागजात', mandatory: true },
      { name: 'डीबीटी चालू बैंक पासबुक', mandatory: true }
    ],
    voiceBriefing: 'पीएम किसान योजना में सालाना 6000 रुपये मिलते हैं। पीएम किसान पोर्टल पर आधार और खतौनी से आवेदन करें।',
    keywords: ['pm kisan', 'pmkisan', 'किसान', 'सम्मान निधि', 'kisan kist']
  },
  {
    id: 'kisan-credit-card',
    title: 'किसान क्रेडिट कार्ड (Kisan Credit Card - KCC Loan)',
    department: 'कृषि एवं किसान कल्याण विभाग',
    ministry: 'कृषि एवं किसान कल्याण मंत्रालय',
    category: 'AGRICULTURE',
    benefitSummary: 'खेती और खाद-बीज हेतु केवल 4% रियायती ब्याज दर पर ₹3 लाख तक का सस्ता लोन',
    officialApplyUrl: 'https://pmkisan.gov.in/',
    portalName: 'PM-Kisan KCC Services',
    estimatedDays: 'बैंक शाखा द्वारा 14 दिन में',
    govtFee: '₹0 (बैंक प्रोसेसिंग शुल्क नियम अनुसार)',
    requiredDocuments: [
      { name: 'पीएम किसान पंजीकरण संख्या', mandatory: true },
      { name: 'जमीन की अद्यतन खतौनी नकल', mandatory: true },
      { name: 'आधार कार्ड व बैंक पासबुक', mandatory: true }
    ],
    voiceBriefing: 'सस्ते फसली ऋण के लिए किसान क्रेडिट कार्ड का फॉर्म पीएम किसान पोर्टल से डाउनलोड कर बैंक में जमा करें।',
    keywords: ['kcc', 'kisan credit card', 'केसीसी', 'किसान लोन', 'kheti loan']
  },
  {
    id: 'soil-health-card',
    title: 'मृदा स्वास्थ्य कार्ड (Soil Health Card Scheme)',
    department: 'कृषि एवं किसान कल्याण विभाग',
    ministry: 'कृषि एवं किसान कल्याण मंत्रालय',
    category: 'AGRICULTURE',
    benefitSummary: 'खेत की मिट्टी की निशुल्क जांच, उचित खाद और उर्वरक की सटीक वैज्ञानिक सलाह',
    officialApplyUrl: 'https://soilhealth.dac.gov.in/',
    portalName: 'Soil Health Card Portal',
    estimatedDays: 'मिट्टी नमूना जांच के 15 दिन बाद',
    govtFee: '₹0 (सरकारी कृषि प्रयोगशाला में मुफ्त)',
    requiredDocuments: [
      { name: 'खेत का खसरा/गाटा संख्या', mandatory: true },
      { name: 'किसान का आधार कार्ड व मोबाइल', mandatory: true }
    ],
    voiceBriefing: 'खेत की मिट्टी में कौन सी खाद डालनी चाहिए, यह जानने के लिए सॉइल हेल्थ कार्ड पोर्टल पर अपनी रिपोर्ट चेक करें।',
    keywords: ['soil health', 'मृदा स्वास्थ्य', 'मिट्टी जांच', 'khad report']
  },
  {
    id: 'enam-krishi-mandi',
    title: 'ई-नाम राष्ट्रीय कृषि बाजार (e-NAM Krishi Mandi)',
    department: 'कृषि एवं किसान कल्याण विभाग',
    ministry: 'कृषि एवं किसान कल्याण मंत्रालय',
    category: 'AGRICULTURE',
    benefitSummary: 'देशभर की 1000+ सरकारी मंडियों में अपनी फसल को सबसे ऊंची ऑनलाइन बोली पर बेचना',
    officialApplyUrl: 'https://www.enam.gov.in/',
    portalName: 'National Agriculture Market (e-NAM)',
    estimatedDays: 'मंडी आवक के दिन ही तत्काल नीलामी',
    govtFee: '₹0 (पंजीकरण निःशुल्क)',
    requiredDocuments: [
      { name: 'किसान का आधार कार्ड', mandatory: true },
      { name: 'बैंक पासबुक (भुगतान सीधे खाते में)', mandatory: true }
    ],
    voiceBriefing: 'अपनी फसल को देशभर के व्यापारियों को सबसे ऊंचे दाम पर बेचने के लिए ई-नाम पोर्टल पर पंजीकरण करें।',
    keywords: ['enam', 'e-nam', 'मंडी', 'krishi mandi', 'फसल बेचना', 'fasal bhav']
  },
  {
    id: 'pm-matsya-sampada',
    title: 'पीएम मत्स्य संपदा योजना (मछली पालन 60% सब्सिडी)',
    department: 'मत्स्य पालन विभाग',
    ministry: 'मत्स्य पालन, पशुपालन और डेयरी मंत्रालय',
    category: 'AGRICULTURE',
    benefitSummary: 'तालाब निर्माण, बायोफ्लॉक और मछली पालन व्यवसाय हेतु 40% से 60% तक सरकारी अनुदान',
    officialApplyUrl: 'https://pmmsy.dof.gov.in/',
    portalName: 'PMMSY National Portal',
    estimatedDays: 'जिला मत्स्य समिति अनुमोदन अनुसार',
    govtFee: '₹0 (आवेदन निःशुल्क)',
    requiredDocuments: [
      { name: 'आधार कार्ड व पैन कार्ड', mandatory: true },
      { name: 'जमीन का पट्टा अथवा तालाब दस्तावेज', mandatory: true },
      { name: 'विस्तृत प्रोजेक्ट रिपोर्ट (DPR)', mandatory: true }
    ],
    voiceBriefing: 'मछली पालन का काम शुरू करने और तालाब पर सरकारी सब्सिडी पाने के लिए पीएम मत्स्य संपदा पोर्टल पर आवेदन करें।',
    keywords: ['pmmsy', 'मछली पालन', 'matsya sampada', 'fish farming', 'machli palan']
  },
  {
    id: 'livestock-dairy-loan',
    title: 'राष्ट्रीय पशुधन मिशन (डेयरी व पशुपालन सब्सिडी)',
    department: 'पशुपालन और डेयरी विभाग',
    ministry: 'मत्स्य पालन, पशुपालन और डेयरी मंत्रालय',
    category: 'AGRICULTURE',
    benefitSummary: 'गाय, भैंस, बकरी और मुर्गी पालन हेतु ₹50 लाख तक 50% पूंजीगत सब्सिडी',
    officialApplyUrl: 'https://nlm.udyamimitra.in/',
    portalName: 'National Livestock Mission (NLM)',
    estimatedDays: 'राज्य स्तरीय जांच उपरांत',
    govtFee: '₹0 (आवेदन निःशुल्क)',
    requiredDocuments: [
      { name: 'आवेदक का आधार व पैन कार्ड', mandatory: true },
      { name: 'पशुपालन का प्रशिक्षण प्रमाण पत्र', mandatory: true },
      { name: 'जमीन का स्वामित्व/किरायानामा व बैंक गारंटी', mandatory: true }
    ],
    voiceBriefing: 'डेयरी, बकरी या पोल्ट्री फार्म खोलने के लिए 50% सरकारी सब्सिडी हेतु नेशनल लाइवस्टॉक मिशन पोर्टल पर आवेदन करें।',
    keywords: ['nlm', 'dairy loan', 'पशुपालन', 'डेयरी सब्सिडी', 'bakri palan']
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
    estimatedDays: 'राज्यवार कोटा अनुसार',
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
  // 5. भूमि, राजस्व, आवास व शहरी/ग्रामीण प्रशासन (REVENUE_HOUSING)
  // ==========================================
  {
    id: 'swamitva-property-card',
    title: 'स्वामित्व योजना घरौनी (SWAMITVA Rural Property Card)',
    department: 'पंचायती राज मंत्रालय',
    ministry: 'पंचायती राज मंत्रालय',
    category: 'REVENUE_HOUSING',
    benefitSummary: 'गांव की आबादी भूमि पर बने मकानों का ड्रोन सर्वे द्वारा कानूनी मालिकाना हक (घरौनी प्रमाण पत्र)',
    officialApplyUrl: 'https://swamitva.nic.in/',
    portalName: 'SWAMITVA National Portal',
    estimatedDays: 'ग्राम ड्रोन सर्वे उपरांत',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'ग्राम प्रधान / पंचायत सचिव सत्यापन', mandatory: true },
      { name: 'परिवार के मुखिया का आधार कार्ड', mandatory: true }
    ],
    voiceBriefing: 'गांव में अपने पैतृक मकान की सरकारी घरौनी और कानूनी दस्तावेज देखने हेतु स्वामित्व पोर्टल पर जांच करें।',
    keywords: ['swamitva', 'घरौनी', 'स्वामित्व योजना', 'gharauni', 'gramin makan registry']
  },
  {
    id: 'up-rera-complaint',
    title: 'रेरा बिल्डर शिकायत (RERA Real Estate Consumer Complaint)',
    department: 'रियल एस्टेट विनियामक प्राधिकरण (RERA)',
    ministry: 'आवासन और शहरी कार्य मंत्रालय',
    category: 'REVENUE_HOUSING',
    benefitSummary: 'फ्लैट/प्लॉट का पजेशन न मिलने या बिल्डर धोखाधड़ी पर ब्याज सहित पूरा पैसा वापस पाना',
    officialApplyUrl: 'https://www.up-rera.in/',
    portalName: 'UP RERA Citizen Portal',
    estimatedDays: 'अदालती सुनवाई 60 दिन में',
    govtFee: '₹1,000 (शिकायत शुल्क)',
    requiredDocuments: [
      { name: 'बिल्डर बायर एग्रीमेंट (BBA Copy)', mandatory: true },
      { name: 'भुगतान रसीदें / बैंक स्टेटमेंट', mandatory: true },
      { name: 'शिकायतकर्ता का आधार कार्ड', mandatory: true }
    ],
    voiceBriefing: 'अगर बिल्डर ने फ्लैट पर कब्जा नहीं दिया है या धोखाधड़ी की है, तो रेरा पोर्टल पर ऑनलाइन केस दर्ज कराएं।',
    keywords: ['rera', 'रेरा', 'builder complaint', 'flat possession', 'up rera']
  },
  {
    id: 'encumbrance-certificate',
    title: 'भारमुक्त प्रमाण पत्र (Encumbrance Certificate - EC 12/15 Year)',
    department: 'स्टाम्प एवं पंजीकरण विभाग',
    ministry: 'राजस्व विभाग',
    category: 'REVENUE_HOUSING',
    benefitSummary: 'जमीन या मकान खरीदने से पहले यह जांचना कि उस पर कोई बैंक लोन या मुकदमा तो नहीं है',
    officialApplyUrl: 'https://igrsup.gov.in/',
    portalName: 'State IGRS Portal',
    estimatedDays: '3 से 7 कार्यदिवस',
    govtFee: '₹100 से ₹200 (वर्षों की अवधि अनुसार)',
    requiredDocuments: [
      { name: 'संपत्ति का पूरा पता, खसरा संख्या या बाउंड्री चौहद्दी', mandatory: true },
      { name: 'आवेदक का आधार कार्ड', mandatory: true }
    ],
    voiceBriefing: 'प्लॉट या मकान पर कोई बैंक कर्ज या विवाद तो नहीं है, यह पक्का करने के लिए आईजीआरएस से भारमुक्त प्रमाण पत्र निकालें।',
    keywords: ['encumbrance certificate', 'ec', 'भारमुक्त प्रमाण पत्र', 'no loan on property', 'igrs ec']
  },
  {
    id: 'certified-registry-copy',
    title: 'बैनामा प्रमाणित नकल (Certified Copy of Registered Deed)',
    department: 'स्टाम्प एवं पंजीकरण विभाग',
    ministry: 'राजस्व विभाग',
    category: 'REVENUE_HOUSING',
    benefitSummary: 'पुराने बैनामे, दानपत्र या वसीयत की उप-निबंधक कार्यालय द्वारा सत्यापित आधिकारिक डिजिटल कॉपी',
    officialApplyUrl: 'https://igrsup.gov.in/',
    portalName: 'IGRS Certified Copy Service',
    estimatedDays: 'तत्काल ऑनलाइन डाउनलोड',
    govtFee: '₹100 प्रति विलेख',
    requiredDocuments: [
      { name: 'रजिस्ट्री विलेख संख्या (Deed No) व वर्ष', mandatory: true },
      { name: 'उप-निबंधक कार्यालय (SRO) का नाम', mandatory: true }
    ],
    voiceBriefing: 'खोए हुए बैनामे या पुरानी रजिस्ट्री की कानूनी सत्यापित नकल आईजीआरएस पोर्टल से तुरंत ऑनलाइन प्राप्त करें।',
    keywords: ['registry copy', 'बैनामा नकल', 'certified copy', 'igrs bainama', 'deed copy']
  },
  {
    id: 'section-80-143-land-conversion',
    title: 'गैर-कृषि भूमि परिवर्तन (Land Conversion - 143/Section 80)',
    department: 'राजस्व परिषद (Board of Revenue)',
    ministry: 'राजस्व विभाग',
    category: 'REVENUE_HOUSING',
    benefitSummary: 'खेती की जमीन को व्यावसायिक, आवासीय या औद्योगिक घोषित कराने हेतु एसडीएम न्यायालय आदेश',
    officialApplyUrl: 'https://vaad.up.nic.in/',
    portalName: 'Revenue Court Management (Vaad Portal)',
    estimatedDays: '45 कार्यदिवस (तहसीलदार जांच उपरांत)',
    govtFee: 'सर्किल रेट अनुसार निर्धारित गैर-कृषि शुल्क',
    requiredDocuments: [
      { name: 'मूल खतौनी नकल व खसरा नक्शा', mandatory: true },
      { name: 'प्रस्तावित निर्माण का ब्लूप्रिंट', mandatory: true },
      { name: 'खातेदार का आधार कार्ड', mandatory: true }
    ],
    voiceBriefing: 'खेती की जमीन पर दुकान, पेट्रोल पंप या मकान बनाने के लिए धारा 80 या 143 के तहत गैर-कृषि दर्ज कराने हेतु आवेदन करें।',
    keywords: ['section 80', 'धारा 143', 'गैर कृषि', 'land conversion', '143 aadesh']
  },
  {
    id: 'online-property-tax',
    title: 'नगर निगम गृहकर ऑनलाइन भुगतान (Municipal Property Tax)',
    department: 'नगर विकास विभाग (समस्त नगर निगम / पालिका)',
    ministry: 'आवासन और शहरी कार्य मंत्रालय',
    category: 'REVENUE_HOUSING',
    benefitSummary: 'घर या दुकान का वार्षिक हाउस टैक्स, वाटर टैक्स देखना और 10% छूट के साथ ऑनलाइन रसीद पाना',
    officialApplyUrl: 'https://e-nagarsewaup.gov.in/',
    portalName: 'e-NagarSewa Municipal Portal',
    estimatedDays: 'तत्काल 1 सेकंड में रसीद',
    govtFee: 'असेसमेंट अनुसार गृहकर',
    requiredDocuments: [
      { name: 'भवन संख्या (House No) अथवा संपत्ति आईडी', mandatory: true },
      { name: 'वार्ड व जोन का नाम', mandatory: true }
    ],
    voiceBriefing: 'अपने घर का म्युनिसिपल हाउस टैक्स ऑनलाइन जमा करने और सरकारी रसीद पाने के लिए ई-नगरसेवा पोर्टल पर जाएं।',
    keywords: ['property tax', 'गृहकर', 'house tax', 'nagar nigam tax', 'water tax']
  },
  {
    id: 'water-sewerage-connection',
    title: 'नया जल व सीवर कनेक्शन (Municipal Water & Sewerage Line)',
    department: 'जल संस्थान / नगर पालिका परिषद',
    ministry: 'आवासन और शहरी कार्य मंत्रालय',
    category: 'REVENUE_HOUSING',
    benefitSummary: 'घर या प्रतिष्ठान में नगर निगम की शुद्ध पेयजल पाइपलाइन व सीवरेज लाइन कनेक्शन',
    officialApplyUrl: 'https://e-nagarsewaup.gov.in/',
    portalName: 'e-NagarSewa Jal Sansthan',
    estimatedDays: '15 कार्यदिवस',
    govtFee: 'दूरी व पाइप साइज अनुसार',
    requiredDocuments: [
      { name: 'मकान का गृहकर बिल अथवा रजिस्ट्री प्रति', mandatory: true },
      { name: 'आवेदक का आधार कार्ड व पासपोर्ट फोटो', mandatory: true }
    ],
    voiceBriefing: 'सरकारी मीठे पानी का नल और सीवर कनेक्शन लगवाने के लिए नगर निगम के पोर्टल पर ऑनलाइन आवेदन करें।',
    keywords: ['water connection', 'जल कनेक्शन', 'sewer connection', 'nal connection', 'jal sansthan']
  },
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
    voiceBriefing: 'जन्म प्रमाण पत्र भारत सरकार के सीआरएस पोर्टल पर बनता है। 21 दिन के भीतर यह बिल्कुल मुफ्त बनता है।',
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
      { name: 'अस्पताल मृत्यु पर्ची अथवा श्मशान रसीद', mandatory: true },
      { name: 'मृतक का आधार कार्ड', mandatory: true }
    ],
    voiceBriefing: 'मृत्यु प्रमाण पत्र के लिए सीआरएस पोर्टल पर अस्पताल पर्ची और मृतक के आधार कार्ड से आवेदन करें।',
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
      { name: 'आधार कार्ड व राशन कार्ड', mandatory: true }
    ],
    voiceBriefing: 'जाति प्रमाण पत्र राज्य के ई-डिस्ट्रिक्ट पोर्टल पर ऑनलाइन बनता है। लेखपाल जांच के बाद डिजिटल साइन कॉपी मिलती है।',
    keywords: ['caste certificate', 'जाति प्रमाण पत्र', 'obc', 'sc', 'st', 'ews']
  },
  {
    id: 'income-certificate',
    title: 'आय प्रमाण पत्र (Income Certificate)',
    department: 'राजस्व विभाग (समस्त राज्य सरकारें)',
    ministry: 'कार्मिक, लोक शिकायत तथा पेंशन मंत्रालय',
    category: 'REVENUE_HOUSING',
    benefitSummary: 'छात्रवृत्ति, फीस माफी, मुफ्त राशन और पेंशन पात्रता हेतु पारिवारिक आय का प्रमाण',
    officialApplyUrl: 'https://edistrict.gov.in/',
    portalName: 'State e-District Portal',
    estimatedDays: '7 से 15 कार्यदिवस',
    govtFee: '₹15 से ₹30',
    requiredDocuments: [
      { name: 'स्व-प्रमाणित आय घोषणा पत्र', mandatory: true },
      { name: 'आधार कार्ड व वेतन पर्ची/राशन कार्ड', mandatory: true }
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
    benefitSummary: 'सरकारी नौकरियों और शिक्षण संस्थानों में राज्य के मूल निवासी होने का प्रमाण',
    officialApplyUrl: 'https://edistrict.gov.in/',
    portalName: 'State e-District Portal',
    estimatedDays: '7 से 15 कार्यदिवस',
    govtFee: '₹15 से ₹30',
    requiredDocuments: [
      { name: 'आधार कार्ड / वोटर आईडी', mandatory: true },
      { name: 'बिजली बिल / पानी बिल / निवास प्रमाण', mandatory: true }
    ],
    voiceBriefing: 'निवास प्रमाण पत्र से प्रमाणित होता है कि आप उस राज्य के स्थायी निवासी हैं। यह ई-डिस्ट्रिक्ट से बनता है।',
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
    voiceBriefing: 'जमीन की खतौनी या भूलेख देखने के लिए भूलेख पोर्टल पर जाएं और खाता संख्या डालकर तत्काल नकल निकालें।',
    keywords: ['bhulekh', 'khatauni', 'भूलेख', 'खतौनी', 'खसरा', 'khasra', 'जमीन की नकल']
  },
  {
    id: 'marriage-registration',
    title: 'विवाह पंजीकरण (Online Marriage Certificate - IGRS)',
    department: 'स्टाम्प एवं पंजीकरण विभाग',
    ministry: 'विधि एवं न्याय मंत्रालय',
    category: 'REVENUE_HOUSING',
    benefitSummary: 'पति-पत्नी के वैवाहिक संबंध का कानूनी प्रमाण पत्र (पासपोर्ट/वीजा/बीमा हेतु अनिवार्य)',
    officialApplyUrl: 'https://igrsup.gov.in/',
    portalName: 'IGRS Marriage Portal',
    estimatedDays: '7 से 15 कार्यदिवस',
    govtFee: '₹100 से ₹250 (नियत अवधि अनुसार)',
    requiredDocuments: [
      { name: 'वर और वधू दोनों का आधार कार्ड', mandatory: true },
      { name: 'शादी का कार्ड / शपथ पत्र', mandatory: true },
      { name: 'शादी की युगल फोटो व दो गवाहों के आधार', mandatory: true }
    ],
    voiceBriefing: 'विवाह प्रमाण पत्र के लिए आईजीआरएस पोर्टल पर वर-वधू के आधार और शादी के कार्ड के साथ ऑनलाइन पंजीकरण करें।',
    keywords: ['marriage certificate', 'विवाह पंजीकरण', 'shadi certificate', 'igrs marriage']
  },
  {
    id: 'estamp-shcil',
    title: 'ई-स्टाम्प पेपर खरीद (Online e-Stamp Paper - SHCIL)',
    department: 'स्टॉक होल्डिंग कॉर्पोरेशन ऑफ इंडिया (SHCIL)',
    ministry: 'वित्त मंत्रालय',
    category: 'REVENUE_HOUSING',
    benefitSummary: 'शपथ पत्र, किरायानामा, अनुबंध और एग्रीमेंट हेतु कानूनी डिजिटल स्टाम्प',
    officialApplyUrl: 'https://www.shcilestamp.com/',
    portalName: 'SHCIL e-Stamp Portal',
    estimatedDays: 'तत्काल ऑनलाइन प्रिंट',
    govtFee: 'स्टाम्प मूल्य अनुसार (उदा. ₹10, ₹50, ₹100)',
    requiredDocuments: [
      { name: 'प्रथम पक्ष और द्वितीय पक्ष का नाम व पता', mandatory: true },
      { name: 'स्टाम्प का उद्देश्य (Affidavit / Agreement)', mandatory: true }
    ],
    voiceBriefing: 'शपथ पत्र या एग्रीमेंट के लिए ई-स्टाम्प पेपर स्टॉक होल्डिंग की आधिकारिक वेबसाइट से तुरंत ऑनलाइन निकाला जा सकता है।',
    keywords: ['estamp', 'e-stamp', 'स्टाम्प पेपर', 'shcil', 'affidavit stamp']
  },
  {
    id: 'property-mutation',
    title: 'दाखिल खारिज / नामांतरण (Property Mutation - e-Dakhil)',
    department: 'राजस्व विभाग (समस्त राज्य सरकारें)',
    ministry: 'ग्रामीण विकास मंत्रालय',
    category: 'REVENUE_HOUSING',
    benefitSummary: 'जमीन या मकान खरीदने अथवा वरासत के बाद राजस्व रिकॉर्ड में अपना नाम चढ़वाना',
    officialApplyUrl: 'https://vaad.up.nic.in/',
    portalName: 'Revenue Court Management (RCCMS / Vaad)',
    estimatedDays: '35 से 45 कार्यदिवस (बिना आपत्ति)',
    govtFee: 'नाममात्र अदालती शुल्क',
    requiredDocuments: [
      { name: 'पंजीकृत बैनामा (Registry Copy)', mandatory: true },
      { name: 'पूर्व खतौनी नकल व क्रेता-विक्रेता आधार', mandatory: true }
    ],
    voiceBriefing: 'जमीन की रजिस्ट्री के बाद सरकारी खतौनी में अपना नाम दर्ज कराने के लिए राजस्व वाद पोर्टल पर दाखिल खारिज की अर्जी लगाएं।',
    keywords: ['mutation', 'dakhil kharij', 'दाखिल खारिज', 'नामांतरण', 'vaad portal']
  },
  {
    id: 'pm-awas',
    title: 'प्रधानमंत्री आवास योजना (PMAY ग्रामीण / शहरी पक्का मकान)',
    department: 'आवासन और ग्रामीण विकास मंत्रालय',
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
    voiceBriefing: 'पक्का मकान बनवाने की सरकारी सब्सिडी के लिए पीएम आवास पोर्टल पर ऑनलाइन आवेदन करें।',
    keywords: ['pmay', 'awas', 'आवास', 'pm awas', 'colony', 'मकान']
  },

  // ==========================================
  // 6. परिवहन, वाहन, फास्टैग व राजमार्ग सेवाएं (TRANSPORT)
  // ==========================================
  {
    id: 'fastag-online',
    title: 'फास्टैग रिचार्ज व ऑनलाइन विवाद समाधान (IHMCL NETC FASTag)',
    department: 'भारतीय राष्ट्रीय राजमार्ग प्राधिकरण (NHAI)',
    ministry: 'सड़क परिवहन और राजमार्ग मंत्रालय',
    category: 'TRANSPORT',
    benefitSummary: 'टोल प्लाजा पर गलत कटे टोल का रिफंड पाना, फास्टैग स्टेटस चेक और ब्लैकलिस्ट हटाना',
    officialApplyUrl: 'https://ihmcl.co.in/',
    portalName: 'IHMCL FASTag Portal',
    estimatedDays: 'तत्काल ऑनलाइन',
    govtFee: '₹0 (विवाद निवारण निःशुल्क)',
    requiredDocuments: [
      { name: 'वाहन पंजीकरण संख्या (गाड़ी नंबर)', mandatory: true },
      { name: 'फास्टैग बारकोड आईडी अथवा पंजीकृत मोबाइल', mandatory: true }
    ],
    voiceBriefing: 'टोल पर गलत कटे पैसे वापस पाने या फास्टैग स्टेटस चेक करने के लिए आईएचएमसीएल फास्टैग पोर्टल पर शिकायत दर्ज करें।',
    keywords: ['fastag', 'फास्टैग', 'toll refund', 'ihmcl fastag', 'netc']
  },
  {
    id: 'national-goods-permit',
    title: 'ऑल इंडिया राष्ट्रीय माल परमिट (National Permit for Goods Vehicles)',
    department: 'सड़क परिवहन और राजमार्ग मंत्रालय',
    ministry: 'सड़क परिवहन और राजमार्ग मंत्रालय',
    category: 'TRANSPORT',
    benefitSummary: 'ट्रक, ट्रेलर और व्यावसायिक मालवाहक गाड़ियों को पूरे भारत में बिना रुकावट चलने का राष्ट्रीय परमिट',
    officialApplyUrl: 'https://vahan.parivahan.gov.in/npermit/',
    portalName: 'National Permit Online Portal',
    estimatedDays: 'फीस जमा करते ही तत्काल डिजिटल परमिट',
    govtFee: 'समेकित राष्ट्रीय शुल्क ₹16,500/वर्ष',
    requiredDocuments: [
      { name: 'वाहन आरसी व वैध फिटनेस प्रमाण पत्र', mandatory: true },
      { name: 'व्यावसायिक बीमा व टैक्स रसीद', mandatory: true }
    ],
    voiceBriefing: 'ट्रकों के लिए ऑल इंडिया नेशनल परमिट वाहन पोर्टल से ऑनलाइन फीस जमा करके तत्काल निकाला जाता है।',
    keywords: ['national permit', 'truck permit', 'ऑल इंडिया परमिट', 'goods permit', 'parivahan permit']
  },
  {
    id: 'puc-certificate-verification',
    title: 'प्रदूषण प्रमाण पत्र ऑनलाइन जांच (PUC Certificate Verification)',
    department: 'सड़क परिवहन और राजमार्ग मंत्रालय',
    ministry: 'सड़क परिवहन और राजमार्ग मंत्रालय',
    category: 'TRANSPORT',
    benefitSummary: 'गाड़ी के धुएं के प्रदूषण प्रमाण पत्र की वैधता तिथि जांचना और ₹10,000 के चालान से बचना',
    officialApplyUrl: 'https://vahan.parivahan.gov.in/puc/',
    portalName: 'Vahan PUC Portal',
    estimatedDays: 'तत्काल 1 सेकंड में',
    govtFee: 'जांच ₹0',
    requiredDocuments: [
      { name: 'गाड़ी संख्या (Registration Number)', mandatory: true },
      { name: 'चेसिस नंबर के अंतिम 5 अंक', mandatory: true }
    ],
    voiceBriefing: 'अपनी गाड़ी का प्रदूषण प्रमाण पत्र कब तक मान्य है, यह जानने के लिए वाहन पीयूसी पोर्टल पर गाड़ी नंबर डालकर चेक करें।',
    keywords: ['puc', 'प्रदूषण पर्चा', 'pollution certificate', 'vahan puc']
  },
  {
    id: 'fancy-number-auction',
    title: 'वीआईपी / फैंसी गाड़ी नंबर नीलामी (Fancy Vehicle Number Booking)',
    department: 'सड़क परिवहन और राजमार्ग मंत्रालय',
    ministry: 'सड़क परिवहन और राजमार्ग मंत्रालय',
    category: 'TRANSPORT',
    benefitSummary: 'अपनी नई कार या बाइक के लिए मनपसंद या वीआईपी नंबर (जैसे 0001, 0786, 9999) की ऑनलाइन बुकिंग',
    officialApplyUrl: 'https://vahan.parivahan.gov.in/fancy/',
    portalName: 'Parivahan Fancy Number Auction',
    estimatedDays: 'साप्ताहिक ई-नीलामी परिणाम अनुसार',
    govtFee: 'नंबर श्रेणी अनुसार बेस प्राइस (उदा. ₹5,000 से ₹1,00,000)',
    requiredDocuments: [
      { name: 'आवेदक का आधार व मोबाइल नंबर', mandatory: true },
      { name: 'नई गाड़ी की बुकिंग रसीद', mandatory: true }
    ],
    voiceBriefing: 'गाड़ी के लिए मनपसंद वीआईपी नंबर बुक करने हेतु परिवहन विभाग के फैंसी नंबर पोर्टल पर ई-नीलामी में भाग लें।',
    keywords: ['fancy number', 'vip number', 'गाड़ी का वीआईपी नंबर', '0001 number', 'vahan fancy']
  },
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
      { name: 'आधार कार्ड (घर बैठे बिना आरटीओ टेस्ट हेतु)', mandatory: true },
      { name: 'आयु प्रमाण पत्र व 10वीं मार्कशीट', mandatory: true }
    ],
    voiceBriefing: 'ड्राइविंग लाइसेंस के लिए सारथी परिवहन पोर्टल से आवेदन करें। आधार से घर बैठे लर्नर लाइसेंस का ऑनलाइन टेस्ट दे सकते हैं।',
    keywords: ['dl', 'driving license', 'ड्राइविंग लाइसेंस', 'sarathi', 'parivahan']
  },
  {
    id: 'international-driving-permit',
    title: 'अंतरराष्ट्रीय ड्राइविंग परमिट (International Driving Permit - IDP)',
    department: 'सड़क परिवहन और राजमार्ग मंत्रालय',
    ministry: 'सड़क परिवहन और राजमार्ग मंत्रालय',
    category: 'TRANSPORT',
    benefitSummary: 'विदेशों में गाड़ी चलाने हेतु भारत सरकार द्वारा जारी वैध ड्राइविंग परमिट',
    officialApplyUrl: 'https://sarathi.parivahan.gov.in/',
    portalName: 'Sarathi IDP Services',
    estimatedDays: '7 कार्यदिवस',
    govtFee: '₹1,000 (मानक सरकारी शुल्क)',
    requiredDocuments: [
      { name: 'वैध भारतीय ड्राइविंग लाइसेंस', mandatory: true },
      { name: 'वैध पासपोर्ट और वीजा की प्रति', mandatory: true },
      { name: 'मेडिकल फिटनेस फॉर्म 1A', mandatory: true }
    ],
    voiceBriefing: 'विदेश में गाड़ी चलाने के लिए अंतरराष्ट्रीय ड्राइविंग परमिट हेतु सारथी पोर्टल पर पासपोर्ट और भारतीय डीएल के साथ आवेदन करें।',
    keywords: ['idp', 'international dl', 'विदेश ड्राइविंग', 'parivahan idp']
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
    id: 'echallan-payment',
    title: 'ई-चालान भुगतान व वर्चुअल कोर्ट (e-Challan & Virtual Court)',
    department: 'सड़क परिवहन और राजमार्ग मंत्रालय / ई-कमेटी सुप्रीम कोर्ट',
    ministry: 'सड़क परिवहन और राजमार्ग मंत्रालय',
    category: 'TRANSPORT',
    benefitSummary: 'ट्रैफिक पुलिस द्वारा काटे गए ऑनलाइन चालान की जांच व वर्चुअल कोर्ट में भुगतान',
    officialApplyUrl: 'https://echallan.parivahan.gov.in/',
    portalName: 'Parivahan eChallan Gateway',
    estimatedDays: 'तत्काल ऑनलाइन रसीद',
    govtFee: 'चालान की नियत जुर्माना राशि',
    requiredDocuments: [
      { name: 'गाड़ी संख्या या चालान नंबर', mandatory: true },
      { name: 'चेसिस नंबर अथवा इंजन नंबर के अंतिम 5 अंक', mandatory: true }
    ],
    voiceBriefing: 'गाड़ी का चालान चेक करने और घर बैठे ऑनलाइन भरने के लिए ई-चालान पोर्टल पर गाड़ी नंबर दर्ज करें।',
    keywords: ['challan', 'echallan', 'चालान', 'traffic challan', 'virtual court']
  },
  {
    id: 'hsrp-plate',
    title: 'हाई सिक्योरिटी नंबर प्लेट (HSRP Booking & Color Sticker)',
    department: 'सड़क परिवहन और राजमार्ग मंत्रालय',
    ministry: 'सड़क परिवहन और राजमार्ग मंत्रालय',
    category: 'TRANSPORT',
    benefitSummary: 'सभी वाहनों पर सरकार द्वारा अनिवार्य लेजर नंबर प्लेट व रंगीन स्टीकर',
    officialApplyUrl: 'https://bookmyhsrp.com/',
    portalName: 'Book My HSRP Portal',
    estimatedDays: '4 से 7 कार्यदिवस में डीलर फिटमेंट',
    govtFee: 'दोपहिया ~₹365 / चारपहिया ~₹600-₹1,100',
    requiredDocuments: [
      { name: 'वाहन की आरसी (इंजन व चेसिस नंबर हेतु)', mandatory: true },
      { name: 'मोबाइल नंबर (ओटीपी हेतु)', mandatory: true }
    ],
    voiceBriefing: 'गाड़ी में हाई सिक्योरिटी नंबर प्लेट लगवाने के लिए बुक-माय-एचएसआरपी पोर्टल पर ऑनलाइन बुकिंग करें।',
    keywords: ['hsrp', 'number plate', 'एचएसआरपी', 'नंबर प्लेट', 'security plate']
  },

  // ==========================================
  // 7. पेंशन, डाकघर बचत, ऋण, बीमा व जन सुरक्षा (FINANCE_PENSION)
  // ==========================================
  {
    id: 'public-provident-fund',
    title: 'पब्लिक प्रॉविडेंट फंड (PPF Account - 7.1% Tax Free Return)',
    department: 'डाक विभाग / राष्ट्रीय बचत संस्थान (NSI)',
    ministry: 'वित्त मंत्रालय',
    category: 'FINANCE_PENSION',
    benefitSummary: '15 वर्ष की सरकारी गारंटीड सुरक्षित बचत, धारा 80C आयकर छूट और पूर्णतः टैक्स-फ्री ब्याज',
    officialApplyUrl: 'https://www.ippbonline.com/',
    portalName: 'India Post / National Savings',
    estimatedDays: 'तत्काल डाकघर अथवा बैंक शाखा में',
    govtFee: 'न्यूनतम ₹500 वार्षिक जमा से शुरुआत',
    requiredDocuments: [
      { name: 'आवेदक का आधार कार्ड व पैन कार्ड', mandatory: true },
      { name: 'पासपोर्ट साइज रंगीन फोटो', mandatory: true }
    ],
    voiceBriefing: 'सुरक्षित और टैक्स-फ्री ब्याज पाने के लिए डाकघर या सरकारी बैंक में पीपीएफ यानी पब्लिक प्रॉविडेंट फंड खाता खुलवाएं।',
    keywords: ['ppf', 'public provident fund', 'पीपीएफ', 'tax free savings', '80c investment']
  },
  {
    id: 'senior-citizens-savings-scheme',
    title: 'वरिष्ठ नागरिक बचत योजना (SCSS Senior Citizens 8.2% Interest)',
    department: 'डाक विभाग / वित्तीय सेवाएं विभाग',
    ministry: 'वित्त मंत्रालय',
    category: 'FINANCE_PENSION',
    benefitSummary: '60 वर्ष से अधिक उम्र के बुजुर्गों को ₹30 लाख तक की जमा पर त्रैमासिक निश्चित 8.2% पेंशन ब्याज',
    officialApplyUrl: 'https://www.indiapost.gov.in/',
    portalName: 'India Post Senior Citizen Portal',
    estimatedDays: 'तत्काल डाकघर / बैंक शाखा में',
    govtFee: 'न्यूनतम ₹1,000 जमा',
    requiredDocuments: [
      { name: 'उम्र 60 वर्ष प्रमाण (आधार/पैन/पेंशन पीपीओ)', mandatory: true },
      { name: 'बैंक/डाकघर बचत खाता पासबुक', mandatory: true }
    ],
    voiceBriefing: '60 वर्ष से अधिक उम्र के नागरिकों को सबसे अधिक 8.2 प्रतिशत तिमाही पेंशन ब्याज हेतु डाकघर में एससीएसएस खाता खोलना चाहिए।',
    keywords: ['scss', 'senior citizen scheme', 'वरिष्ठ नागरिक बचत', 'bujurg pension byaj']
  },
  {
    id: 'mahila-samman-certificate',
    title: 'महिला सम्मान बचत प्रमाण पत्र (Mahila Samman Savings Certificate)',
    department: 'डाक विभाग / राष्ट्रीय बचत संस्थान',
    ministry: 'वित्त मंत्रालय',
    category: 'FINANCE_PENSION',
    benefitSummary: 'महिलाओं एवं बालिकाओं को 2 वर्ष की अल्पकालिक जमा पर 7.5% का आकर्षक ब्याज',
    officialApplyUrl: 'https://www.indiapost.gov.in/',
    portalName: 'India Post Savings Hub',
    estimatedDays: 'तत्काल डाकघर शाखा में',
    govtFee: 'अधिकतम ₹2 लाख तक जमा',
    requiredDocuments: [
      { name: 'महिला या बालिका का आधार कार्ड', mandatory: true },
      { name: 'पैन कार्ड (यदि उपलब्ध हो)', mandatory: false }
    ],
    voiceBriefing: 'महिलाओं और बालिकाओं के लिए 2 साल में साढ़े सात प्रतिशत ब्याज देने वाली महिला सम्मान बचत योजना डाकघर में उपलब्ध है।',
    keywords: ['mahila samman', 'महिला सम्मान बचत', 'mssc', 'women savings', 'post office mahila']
  },
  {
    id: 'national-savings-certificate',
    title: 'राष्ट्रीय बचत पत्र (NSC - National Savings Certificate VIII Issue)',
    department: 'डाक विभाग (DoP)',
    ministry: 'संचार एवं वित्त मंत्रालय',
    category: 'FINANCE_PENSION',
    benefitSummary: '5 वर्ष की सरकारी लॉक-इन बचत, 7.7% चक्रवृद्धि ब्याज और बैंक लोन हेतु कोलैटरल मान्यता',
    officialApplyUrl: 'https://www.indiapost.gov.in/',
    portalName: 'India Post NSC Portal',
    estimatedDays: 'तत्काल डिजिटल पासबुक जारी',
    govtFee: 'न्यूनतम ₹1,000 से शुरुआत (कोई अधिकतम सीमा नहीं)',
    requiredDocuments: [
      { name: 'आधार कार्ड व पैन कार्ड', mandatory: true }
    ],
    voiceBriefing: 'सरकारी गारंटीड 5 साल की बचत और बैंक लोन की सिक्योरिटी के लिए डाकघर से एनएससी यानी राष्ट्रीय बचत पत्र खरीदें।',
    keywords: ['nsc', 'राष्ट्रीय बचत पत्र', 'national savings certificate', 'post office nsc']
  },
  {
    id: 'post-office-mis',
    title: 'डाकघर मासिक आय योजना (Post Office Monthly Income Scheme - MIS)',
    department: 'डाक विभाग (DoP)',
    ministry: 'संचार मंत्रालय',
    category: 'FINANCE_PENSION',
    benefitSummary: 'एकमुश्त जमा पर हर महीने खाते में निश्चित मासिक ब्याज (एकल खाता ₹9 लाख, संयुक्त ₹15 लाख तक)',
    officialApplyUrl: 'https://www.indiapost.gov.in/',
    portalName: 'India Post MIS Gateway',
    estimatedDays: 'तत्काल',
    govtFee: '7.4% प्रतिवर्ष मासिक देय ब्याज',
    requiredDocuments: [
      { name: 'आधार कार्ड व पैन कार्ड', mandatory: true },
      { name: 'डाकघर बचत बैंक खाता', mandatory: true }
    ],
    voiceBriefing: 'हर महीने निश्चित ब्याज पेंशन की तरह पाने के लिए डाकघर में एमआईएस यानी मंथली इनकम स्कीम में खाता खोलें।',
    keywords: ['mis', 'pomis', 'post office mis', 'मासिक आय योजना', 'monthly interest scheme']
  },
  {
    id: 'jeevan-pramaan-patra',
    title: 'जीवन प्रमाण पत्र (Jeevan Pramaan - Digital Life Certificate)',
    department: 'पेंशन एवं पेंशनभोगी कल्याण विभाग',
    ministry: 'कार्मिक, लोक शिकायत तथा पेंशन मंत्रालय',
    category: 'FINANCE_PENSION',
    benefitSummary: 'पेंशनरों को बैंक जाए बिना मोबाइल कैमरे के फेस-ऑथेंटिकेशन से घर बैठे वार्षिक जीवन प्रमाण पत्र जमा करना',
    officialApplyUrl: 'https://jeevanpramaan.gov.in/',
    portalName: 'Jeevan Pramaan National Portal',
    estimatedDays: 'तत्काल 1 मिनट में डिजिटल पावती',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'पेंशनर का आधार कार्ड व पीपीओ नंबर (PPO Number)', mandatory: true },
      { name: 'पेंशन वितरण बैंक खाता संख्या', mandatory: true }
    ],
    voiceBriefing: 'पेंशन जारी रखने के लिए जीवन प्रमाण पत्र जमा करना अनिवार्य है। जीवन प्रमाण पोर्टल से घर बैठे चेहरे से सत्यापन करें।',
    keywords: ['jeevan pramaan', 'life certificate', 'जीवन प्रमाण पत्र', 'pensioner dlc', 'ppo life certificate']
  },
  {
    id: 'pmjdy-jan-dhan',
    title: 'प्रधानमंत्री जन धन योजना (PMJDY Zero Balance Account)',
    department: 'वित्तीय सेवाएं विभाग (DFS)',
    ministry: 'वित्त मंत्रालय',
    category: 'FINANCE_PENSION',
    benefitSummary: 'शून्य बैलेंस बैंक खाता, ₹2 लाख मुफ्त दुर्घटना बीमा और ₹10,000 ओवरड्राफ्ट सुविधा',
    officialApplyUrl: 'https://www.pmjdy.gov.in/',
    portalName: 'PMJDY National Portal',
    estimatedDays: 'बैंक शाखा में तत्काल',
    govtFee: '₹0 (पूर्णतः निःशुल्क खाता)',
    requiredDocuments: [
      { name: 'आधार कार्ड', mandatory: true },
      { name: 'पासपोर्ट साइज रंगीन फोटो', mandatory: true }
    ],
    voiceBriefing: 'जीरो बैलेंस सरकारी जन धन खाता खोलने के लिए जन धन पोर्टल पर जाएं या बैंक में केवल आधार कार्ड लेकर जाएं।',
    keywords: ['jandhan', 'pmjdy', 'जन धन', 'zero balance account', 'जनधन खाता']
  },
  {
    id: 'pmjjby-life-insurance',
    title: 'पीएम जीवन ज्योति बीमा योजना (PMJJBY ₹2 Lakh Life Insurance)',
    department: 'वित्तीय सेवाएं विभाग (DFS)',
    ministry: 'वित्त मंत्रालय',
    category: 'FINANCE_PENSION',
    benefitSummary: 'मात्र ₹436 सालाना में किसी भी कारण से मृत्यु होने पर परिवार को ₹2 लाख की बीमा राशि',
    officialApplyUrl: 'https://www.jansuraksha.gov.in/',
    portalName: 'Jan Suraksha National Portal',
    estimatedDays: 'बैंक में तत्काल ऑटो-डेबिट सक्षम',
    govtFee: '₹436 प्रति वर्ष (बैंक खाते से ऑटो-डेबिट)',
    requiredDocuments: [
      { name: 'बचत बैंक खाता पासबुक', mandatory: true },
      { name: 'आधार कार्ड (आयु 18 से 50 वर्ष)', mandatory: true }
    ],
    voiceBriefing: 'केवल 436 रुपये में 2 लाख का जीवन बीमा पाने के लिए जन सुरक्षा पोर्टल से फॉर्म भरकर अपने बैंक में जमा करें।',
    keywords: ['pmjjby', 'जीवन ज्योति', 'life insurance', 'jansuraksha', '436 bima']
  },
  {
    id: 'pmsby-accident-insurance',
    title: 'पीएम सुरक्षा बीमा योजना (PMSBY ₹2 Lakh Accident Cover)',
    department: 'वित्तीय सेवाएं विभाग (DFS)',
    ministry: 'वित्त मंत्रालय',
    category: 'FINANCE_PENSION',
    benefitSummary: 'मात्र ₹20 सालाना में दुर्घटना में मृत्यु या स्थायी दिव्यांगता पर ₹2,00,000 का बीमा',
    officialApplyUrl: 'https://www.jansuraksha.gov.in/',
    portalName: 'Jan Suraksha National Portal',
    estimatedDays: 'बैंक में तत्काल',
    govtFee: '₹20 प्रति वर्ष',
    requiredDocuments: [
      { name: 'बचत बैंक खाता पासबुक', mandatory: true },
      { name: 'आधार कार्ड (आयु 18 से 70 वर्ष)', mandatory: true }
    ],
    voiceBriefing: 'मात्र 20 रुपये में 2 लाख का दुर्घटना बीमा पाने के लिए जन सुरक्षा पोर्टल पर सुरक्षा बीमा योजना एक्टिवेट करें।',
    keywords: ['pmsby', 'सुरक्षा बीमा', 'accident insurance', '20 rupay bima']
  },
  {
    id: 'atal-pension-yojana',
    title: 'अटल पेंशन योजना (Atal Pension Yojana - APY)',
    department: 'पेंशन निधि विनियामक और विकास प्राधिकरण (PFRDA)',
    ministry: 'वित्त मंत्रालय',
    category: 'FINANCE_PENSION',
    benefitSummary: '60 वर्ष की उम्र के बाद ₹1,000 से ₹5,000 प्रतिमाह की आजीवन गारंटीड सरकारी पेंशन',
    officialApplyUrl: 'https://www.npscra.nsdl.co.in/scheme-details.php',
    portalName: 'NPS CRA / APY Portal',
    estimatedDays: 'बैंक में तत्काल प्रान (PRAN) आवंटन',
    govtFee: 'उम्र अनुसार मासिक अंशदान (उदा. ₹42 से ₹210)',
    requiredDocuments: [
      { name: 'बचत बैंक खाता', mandatory: true },
      { name: 'आधार कार्ड (आयु 18 से 40 वर्ष)', mandatory: true },
      { name: 'नामांकित व्यक्ति (Nominee) का आधार', mandatory: true }
    ],
    voiceBriefing: 'बुढ़ापे में हर महीने 5000 रुपये तक पक्की सरकारी पेंशन के लिए अटल पेंशन योजना में अपना खाता खुलवाएं।',
    keywords: ['apy', 'atal pension', 'अटल पेंशन', 'pension scheme', 'pfrda']
  },
  {
    id: 'mudra-loan',
    title: 'प्रधानमंत्री मुद्रा योजना (PMMY Mudra Loan ₹50,000 - ₹10 Lakh)',
    department: 'वित्तीय सेवाएं विभाग (DFS)',
    ministry: 'वित्त मंत्रालय',
    category: 'FINANCE_PENSION',
    benefitSummary: 'बिना किसी गारंटी के नया व्यापार शुरू करने या बढ़ाने हेतु शिशु, किशोर और तरुण ऋण',
    officialApplyUrl: 'https://www.udyamimitra.in/',
    portalName: 'Udyami Mitra Mudra Portal',
    estimatedDays: '7 से 15 कार्यदिवस',
    govtFee: '₹0 (कोई बंधक या गारंटी नहीं)',
    requiredDocuments: [
      { name: 'आधार कार्ड व पैन कार्ड', mandatory: true },
      { name: 'व्यापार प्रस्ताव / प्रोजेक्ट रिपोर्ट', mandatory: true },
      { name: 'गत 6 माह का बैंक स्टेटमेंट', mandatory: true }
    ],
    voiceBriefing: 'बिना गारंटी 10 लाख तक के व्यापार लोन के लिए उद्यमी मित्र पोर्टल पर पीएम मुद्रा योजना में ऑनलाइन आवेदन करें।',
    keywords: ['mudra loan', 'मुद्रा लोन', 'pmmy', 'business loan', 'udyamimitra']
  },
  {
    id: 'stand-up-india',
    title: 'स्टैंड-अप इंडिया योजना (Stand-Up India ₹10 Lakh - ₹1 Crore)',
    department: 'वित्तीय सेवाएं विभाग (DFS)',
    ministry: 'वित्त मंत्रालय',
    category: 'FINANCE_PENSION',
    benefitSummary: 'अनुसूचित जाति (SC), जनजाति (ST) एवं महिला उद्यमियों को ग्रीनफील्ड उद्योग हेतु बड़ा बैंक ऋण',
    officialApplyUrl: 'https://www.standupmitra.in/',
    portalName: 'Stand-Up Mitra Portal',
    estimatedDays: 'बैंक परीक्षण अनुसार',
    govtFee: 'न्यूनतम मार्जिन मनी 15%',
    requiredDocuments: [
      { name: 'जाति प्रमाण पत्र (SC/ST हेतु)', mandatory: true },
      { name: 'विस्तृत बिजनेस प्रोजेक्ट रिपोर्ट (DPR)', mandatory: true },
      { name: 'पैन और आधार कार्ड', mandatory: true }
    ],
    voiceBriefing: 'महिला और एससी-एसटी उद्यमियों को 1 करोड़ तक के लोन के लिए स्टैंड-अप मित्र पोर्टल पर ऑनलाइन अप्लाई करना होता है।',
    keywords: ['standup india', 'महिला लोन', 'sc st loan', 'स्टैंड अप इंडिया']
  },
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
    voiceBriefing: 'वृद्धावस्था या विधवा पेंशन के लिए समाज कल्याण विभाग के एनएसएपी पोर्टल पर ऑनलाइन आवेदन करें।',
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
      { name: 'आधार कार्ड व बैंक खाता', mandatory: true }
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
    benefitSummary: '10 वर्ष से कम उम्र की बेटी के लिए सबसे अधिक 8.2% ब्याज दर और आयकर छूट',
    officialApplyUrl: 'https://www.ippbonline.com/',
    portalName: 'India Post / National Savings',
    estimatedDays: 'तत्काल डाकघर / बैंक शाखा में',
    govtFee: 'न्यूनतम ₹250 जमा से शुरुआत',
    requiredDocuments: [
      { name: 'बालिका का जन्म प्रमाण पत्र', mandatory: true },
      { name: 'अभिभावक का आधार व पैन कार्ड', mandatory: true }
    ],
    voiceBriefing: '10 वर्ष तक की बेटियों के उज्ज्वल भविष्य के लिए सुकन्या समृद्धि खाता डाकघर या बैंक में खुलवाया जाता है।',
    keywords: ['sukanya', 'ssy', 'सुकन्या समृद्धि', 'beti khata', 'kanya yojana']
  },

  // ==========================================
  // 8. शिक्षा, छात्रवृत्ति, प्रतियोगी परीक्षाएं व रोजगार (EDUCATION_SKILL)
  // ==========================================
  {
    id: 'upsc-otr-portal',
    title: 'यूपीएससी वन-टाइम रजिस्ट्रेशन (UPSC OTR Portal)',
    department: 'संघ लोक सेवा आयोग (UPSC)',
    ministry: 'कार्मिक, लोक शिकायत तथा पेंशन मंत्रालय',
    category: 'EDUCATION_SKILL',
    benefitSummary: 'आईएएस (IAS), आईपीएस (IPS), एनडीए (NDA) और सीडीएस परीक्षाओं हेतु एक बार स्थायी प्रोफाइल पंजीकरण',
    officialApplyUrl: 'https://upsconline.nic.in/upsc/OTRP/',
    portalName: 'UPSC Online OTR Portal',
    estimatedDays: 'तत्काल OTR आईडी जारी',
    govtFee: 'पंजीकरण ₹0 / परीक्षा शुल्क ₹100 (महिला/SC/ST ₹0)',
    requiredDocuments: [
      { name: '10वीं बोर्ड प्रमाण पत्र (जन्म तिथि हेतु)', mandatory: true },
      { name: 'फोटो पहचान पत्र (आधार कार्ड/वोटर आईडी)', mandatory: true },
      { name: 'पासपोर्ट फोटो व हस्ताक्षर प्रति', mandatory: true }
    ],
    voiceBriefing: 'आईएएस, आईपीएस और एनडीए जैसी सिविल सेवा परीक्षाओं में बैठने के लिए यूपीएससी ओटीआर पोर्टल पर अपना प्रोफाइल बनाएं।',
    keywords: ['upsc', 'upsc otr', 'यूपीएससी', 'civil services', 'ias ips form', 'nda cds']
  },
  {
    id: 'ssc-otr-portal',
    title: 'एसएससी वन-टाइम रजिस्ट्रेशन (SSC New OTR Portal)',
    department: 'कर्मचारी चयन आयोग (SSC)',
    ministry: 'कार्मिक, लोक शिकायत तथा पेंशन मंत्रालय',
    category: 'EDUCATION_SKILL',
    benefitSummary: 'सीजीएल (CGL), सीएचएसएल (CHSL), एमटीएस (MTS) और जीडी कांस्टेबल भर्ती हेतु अनिवार्य नया OTR',
    officialApplyUrl: 'https://ssc.gov.in/',
    portalName: 'Staff Selection Commission (SSC)',
    estimatedDays: 'तत्काल लाइव रजिस्ट्रेशन',
    govtFee: 'पंजीकरण ₹0 / परीक्षा फीस ₹100',
    requiredDocuments: [
      { name: 'आधार कार्ड नंबर', mandatory: true },
      { name: '10वीं मार्कशीट रोल नंबर व उत्तीर्ण वर्ष', mandatory: true },
      { name: 'लाइव वेबकैम फोटो व हस्ताक्षर', mandatory: true }
    ],
    voiceBriefing: 'एसएससी सीजीएल, जीडी और सीएचएसएल भर्ती में आवेदन करने के लिए एसएससी के नए पोर्टल पर ओटीआर पूरा करें।',
    keywords: ['ssc', 'ssc otr', 'एसएससी', 'ssc cgl', 'ssc gd', 'chsl form']
  },
  {
    id: 'jee-main-nta',
    title: 'जेईई मेन इंजीनियरिंग प्रवेश परीक्षा (JEE Main NTA)',
    department: 'राष्ट्रीय परीक्षा एजेंसी (NTA)',
    ministry: 'शिक्षा मंत्रालय',
    category: 'EDUCATION_SKILL',
    benefitSummary: 'आईआईटी (IIT), एनआईटी (NIT) और देश के शीर्ष इंजीनियरिंग कॉलेजों में बीटेक प्रवेश परीक्षा',
    officialApplyUrl: 'https://jeemain.nta.nic.in/',
    portalName: 'JEE Main NTA Portal',
    estimatedDays: 'अधिसूचित आवेदन सत्र अनुसार',
    govtFee: '₹1,000 (छात्र) / ₹800 (छात्रा)',
    requiredDocuments: [
      { name: 'आधार कार्ड व 10वीं/12वीं मार्कशीट', mandatory: true },
      { name: 'पासपोर्ट साइज रंगीन फोटो व हस्ताक्षर', mandatory: true },
      { name: 'श्रेणी प्रमाण पत्र (EWS/OBC/SC/ST)', mandatory: false }
    ],
    voiceBriefing: 'आईआईटी और एनआईटी में बीटेक में दाखिले के लिए जेईई मेन का फॉर्म एनटीए पोर्टल से ऑनलाइन भरा जाता है।',
    keywords: ['jee', 'jee main', 'जेईई मेन', 'iit entrance', 'btech admission', 'nta jee']
  },
  {
    id: 'neet-ug-nta',
    title: 'नीट यूजी मेडिकल प्रवेश परीक्षा (NEET UG Medical Exam)',
    department: 'राष्ट्रीय परीक्षा एजेंसी (NTA)',
    ministry: 'स्वास्थ्य एवं परिवार कल्याण मंत्रालय',
    category: 'EDUCATION_SKILL',
    benefitSummary: 'देशभर के सरकारी मेडिकल कॉलेजों में एमबीबीएस (MBBS) और बीडीएस (BDS) में प्रवेश का एकमात्र टेस्ट',
    officialApplyUrl: 'https://exams.nta.ac.in/NEET/',
    portalName: 'NEET UG NTA Portal',
    estimatedDays: 'वार्षिक परीक्षा कैलेंडर अनुसार',
    govtFee: '₹1,700 (सामान्य) / ₹1,600 (OBC) / ₹1,000 (SC/ST)',
    requiredDocuments: [
      { name: 'आधार कार्ड व 12वीं भौतिकी/रसायन/जीवविज्ञान मार्कशीट', mandatory: true },
      { name: 'पोस्टकार्ड फोटो व दोनों हाथों के उंगलियों के निशान', mandatory: true }
    ],
    voiceBriefing: 'डॉक्टर बनने और एमबीबीएस में एडमिशन पाने के लिए नीट यूजी का ऑनलाइन फॉर्म एनटीए पोर्टल पर भरें।',
    keywords: ['neet', 'neet ug', 'नीट परीक्षा', 'mbbs entrance', 'nta neet', 'doctor exam']
  },
  {
    id: 'ugc-net-nta',
    title: 'यूजीसी नेट प्रोफेसर व जेआरएफ पात्रता (UGC-NET Exam)',
    department: 'विश्वविद्यालय अनुदान आयोग (UGC) / NTA',
    ministry: 'शिक्षा मंत्रालय',
    category: 'EDUCATION_SKILL',
    benefitSummary: 'कॉलेजों में असिस्टेंट प्रोफेसर बनने और पीएचडी हेतु मासिक जेआरएफ फेलोशिप (₹37,000/माह)',
    officialApplyUrl: 'https://ugcnet.nta.ac.in/',
    portalName: 'UGC NET NTA Portal',
    estimatedDays: 'वार्षिक जून व दिसंबर सत्र',
    govtFee: '₹1,150 (सामान्य) / ₹600 (EWS/OBC) / ₹325 (SC/ST)',
    requiredDocuments: [
      { name: 'मास्टर्स/पीजी डिग्री अथवा अंतिम वर्ष का रोल नंबर', mandatory: true },
      { name: 'आधार कार्ड व फोटो', mandatory: true }
    ],
    voiceBriefing: 'कॉलेज में प्रोफेसर बनने और पीएचडी स्कॉलरशिप पाने के लिए यूजीसी नेट का फॉर्म ऑनलाइन भरें।',
    keywords: ['ugc net', 'यूजीसी नेट', 'jrf', 'assistant professor', 'phd fellowship']
  },
  {
    id: 'pm-vidyalakshmi-loan',
    title: 'पीएम विद्यालक्ष्मी एजुकेशन लोन (PM Vidya Lakshmi Education Loan)',
    department: 'उच्च शिक्षा विभाग',
    ministry: 'शिक्षा मंत्रालय',
    category: 'EDUCATION_SKILL',
    benefitSummary: 'भारत या विदेश में उच्च शिक्षा हेतु 40+ बैंकों से ₹7.5 लाख तक बिना किसी कोलैटरल गारंटी के पढ़ाई लोन',
    officialApplyUrl: 'https://www.vidyalakshmi.co.in/',
    portalName: 'Vidya Lakshmi Portal',
    estimatedDays: 'बैंक शाखा द्वारा 15 दिन में',
    govtFee: '₹0 (कॉमन एजुकेशन लोन फॉर्म)',
    requiredDocuments: [
      { name: 'कॉलेज एडमिशन ऑफर लेटर व फीस स्ट्रक्चर', mandatory: true },
      { name: 'छात्र व अभिभावक का पैन व आधार कार्ड', mandatory: true },
      { name: '10वीं, 12वीं व स्नातक मार्कशीट', mandatory: true }
    ],
    voiceBriefing: 'इंजीनियरिंग, मेडिकल या एमबीए की पढ़ाई के लिए बिना गारंटी बैंक लोन हेतु विद्यालक्ष्मी पोर्टल पर आवेदन करें।',
    keywords: ['vidyalakshmi', 'education loan', 'पढ़ाई लोन', 'vidya lakshmi', 'student loan']
  },
  {
    id: 'national-scholarship',
    title: 'राष्ट्रीय छात्रवृत्ति पोर्टल (National Scholarship Portal - NSP)',
    department: 'उच्च शिक्षा विभाग',
    ministry: 'शिक्षा मंत्रालय',
    category: 'EDUCATION_SKILL',
    benefitSummary: 'प्री-मैट्रिक, पोस्ट-मैट्रिक और उच्च शिक्षा हेतु सीधी सरकारी छात्रवृत्ति',
    officialApplyUrl: 'https://scholarships.gov.in/',
    portalName: 'National Scholarship Portal (NSP)',
    estimatedDays: 'संस्थान एवं राज्य सत्यापन अनुसार',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'छात्र का आधार कार्ड', mandatory: true },
      { name: 'पिछली कक्षा की मार्कशीट', mandatory: true },
      { name: 'आय प्रमाण पत्र व जाति प्रमाण', mandatory: true },
      { name: 'बैंक खाता व कॉलेज बोनाफाइड पर्चा', mandatory: true }
    ],
    voiceBriefing: 'सरकारी छात्रवृत्ति पाने के लिए राष्ट्रीय छात्रवृत्ति पोर्टल एनएसपी पर अपनी मार्कशीट और आय प्रमाण के साथ आवेदन करें।',
    keywords: ['scholarship', 'nsp', 'छात्रवृत्ति', 'वजीफा', 'vazifa', 'scholarships']
  },
  {
    id: 'apaar-abc-id',
    title: 'अपार / एबीसी आईडी (APAAR / Academic Bank of Credits)',
    department: 'उच्च शिक्षा विभाग',
    ministry: 'शिक्षा मंत्रालय',
    category: 'EDUCATION_SKILL',
    benefitSummary: 'एक राष्ट्र, एक छात्र पहचान - स्कूल से कॉलेज तक के सभी क्रेडिट ऑनलाइन सुरक्षित',
    officialApplyUrl: 'https://www.abc.gov.in/',
    portalName: 'Academic Bank of Credits Portal',
    estimatedDays: 'तत्काल 1 मिनट में डाउनलोड',
    govtFee: '₹0 (आजीवन निःशुल्क)',
    requiredDocuments: [
      { name: 'आधार कार्ड', mandatory: true },
      { name: 'स्कूल या कॉलेज का नाम व रोल नंबर', mandatory: true }
    ],
    voiceBriefing: 'अपार आईडी सभी छात्रों की डिजिटल पढ़ाई का खाता है। इसे एबीसी पोर्टल से आधार द्वारा तुरंत बनाएं।',
    keywords: ['apaar', 'abc id', 'अपार आईडी', 'student id', 'academic bank']
  },
  {
    id: 'ncs-job-portal',
    title: 'राष्ट्रीय करियर सेवा (National Career Service - NCS Job Portal)',
    department: 'रोजगार महानिदेशालय',
    ministry: 'श्रम एवं रोजगार मंत्रालय',
    category: 'EDUCATION_SKILL',
    benefitSummary: 'सरकारी व प्राइवेट नौकरियों के लिए सीधा पंजीकरण और रोजगार मेलों में भाग लेना',
    officialApplyUrl: 'https://www.ncs.gov.in/',
    portalName: 'National Career Service Portal',
    estimatedDays: 'तत्काल जॉब सीकर आईडी जारी',
    govtFee: '₹0 (निःशुल्क)',
    requiredDocuments: [
      { name: 'आधार कार्ड व मोबाइल नंबर', mandatory: true },
      { name: 'बायोडाटा / शैक्षणिक प्रमाण पत्र', mandatory: true }
    ],
    voiceBriefing: 'सरकारी और प्राइवेट नौकरियों के सीधे अवसरों के लिए नेशनल करियर सर्विस एनसीएस पोर्टल पर अपना पंजीकरण करें।',
    keywords: ['ncs', 'job portal', 'नौकरी', 'career service', 'rojgar mela']
  },
  {
    id: 'mgnrega-job-card',
    title: 'मनरेगा जॉब कार्ड (MGNREGA 100 Days Work Card)',
    department: 'ग्रामीण विकास विभाग',
    ministry: 'ग्रामीण विकास मंत्रालय',
    category: 'EDUCATION_SKILL',
    benefitSummary: 'ग्रामीण परिवारों को हर वर्ष कम से कम 100 दिनों के गारंटीड अकुशल रोजगार का कानूनी अधिकार',
    officialApplyUrl: 'https://nrega.nic.in/',
    portalName: 'MGNREGA State / National Portal',
    estimatedDays: '15 कार्यदिवस में ग्राम पंचायत द्वारा',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'परिवार के सभी वयस्क सदस्यों का आधार कार्ड', mandatory: true },
      { name: 'डीबीटी सक्षम बैंक पासबुक', mandatory: true },
      { name: 'राशन कार्ड प्रति', mandatory: true }
    ],
    voiceBriefing: 'गांव में 100 दिन के गारंटीड काम के लिए मनरेगा पोर्टल या ग्राम पंचायत में मनरेगा जॉब कार्ड बनवाएं।',
    keywords: ['mgnrega', 'nrega', 'मनरेगा', 'जॉब कार्ड', 'job card', '100 din kam']
  },
  {
    id: 'bocw-shramik-card',
    title: 'भवन एवं सन्निर्माण कर्मकार कल्याण बोर्ड (BOCW Labour Card)',
    department: 'श्रम कल्याण विभाग (समस्त राज्य सरकारें)',
    ministry: 'श्रम एवं रोजगार मंत्रालय',
    category: 'EDUCATION_SKILL',
    benefitSummary: 'मजदूरों की बेटियों के विवाह हेतु ₹55,000, साइकिल सहायता और बच्चों की छात्रवृत्ति',
    officialApplyUrl: 'https://uplabour.gov.in/',
    portalName: 'State BOCW Labour Welfare Board',
    estimatedDays: '20 कार्यदिवस',
    govtFee: '₹20 से ₹50 (वार्षिक सदस्यता)',
    requiredDocuments: [
      { name: 'आधार कार्ड व राशन कार्ड', mandatory: true },
      { name: '90 दिन निर्माण कार्य करने का स्व-घोषणा पत्र', mandatory: true },
      { name: 'बैंक खाता विवरण', mandatory: true }
    ],
    voiceBriefing: 'मजदूरों और कारीगरों के कल्याण हेतु लेबर कार्ड बीओसीडब्ल्यू पोर्टल पर बनता है, जिससे बेटी की शादी और साइकिल जैसी कई सहायता मिलती हैं।',
    keywords: ['bocw', 'labour card', 'लेबर कार्ड', 'श्रमिक कार्ड', 'shramik kalyan']
  },
  {
    id: 'apprenticeship-india',
    title: 'शिक्षुता पोर्टल (Apprenticeship India Training & Stipend)',
    department: 'कौशल विकास और उद्यमिता मंत्रालय',
    ministry: 'कौशल विकास मंत्रालय',
    category: 'EDUCATION_SKILL',
    benefitSummary: 'आईटीआई और डिप्लोमा धारकों को कंपनियों व रेलवे में सवेतन ऑन-द-जॉब प्रैक्टिकल ट्रेनिंग',
    officialApplyUrl: 'https://www.apprenticeshipindia.gov.in/',
    portalName: 'Apprenticeship India Hub',
    estimatedDays: 'तत्काल पंजीकरण',
    govtFee: '₹0 (निःशुल्क)',
    requiredDocuments: [
      { name: 'आईटीआई/डिप्लोमा/10वीं मार्कशीट', mandatory: true },
      { name: 'आधार कार्ड व बैंक खाता (स्टाइपेंड हेतु)', mandatory: true }
    ],
    voiceBriefing: 'कंपनियों और सरकारी कारखानों में ट्रेनिंग और स्टाइपेंड पाने के लिए अप्रेंटिसशिप इंडिया पोर्टल पर प्रोफाइल बनाएं।',
    keywords: ['apprenticeship', 'अप्रेंटिसशिप', 'iti training', 'stipend']
  },
  {
    id: 'swayam-free-courses',
    title: 'स्वयं निःशुल्क ऑनलाइन पाठ्यक्रम (SWAYAM MOOCs Courses)',
    department: 'उच्च शिक्षा विभाग / AICTE',
    ministry: 'शिक्षा मंत्रालय',
    category: 'EDUCATION_SKILL',
    benefitSummary: 'आईआईटी (IIT) व आईआईएम (IIM) के प्रोफेसरों द्वारा स्कूल से लेकर पीजी तक की मुफ्त पढ़ाई और सर्टिफिकेट',
    officialApplyUrl: 'https://swayam.gov.in/',
    portalName: 'SWAYAM Central Portal',
    estimatedDays: 'सेमेस्टर अनुसार',
    govtFee: 'पढ़ाई 100% मुफ्त / केवल परीक्षा फीस ₹1,000',
    requiredDocuments: [
      { name: 'ईमेल आईडी व छात्र का नाम', mandatory: true }
    ],
    voiceBriefing: 'देश के सर्वश्रेष्ठ प्रोफेसरों से मुफ्त ऑनलाइन कोर्स करने और सर्टिफिकेट पाने के लिए स्वयं पोर्टल पर एनरोल करें।',
    keywords: ['swayam', 'free online courses', 'स्वयं पोर्टल', 'moocs', 'iit courses']
  },
  {
    id: 'pmkvy-skill',
    title: 'प्रधानमंत्री कौशल विकास योजना (PMKVY Free Skill Training)',
    department: 'कौशल विकास और उद्यमिता मंत्रालय',
    ministry: 'कौशल विकास मंत्रालय',
    category: 'EDUCATION_SKILL',
    benefitSummary: 'मुफ्त तकनीकी व वोकेशनल ट्रेनिंग, सरकारी सर्टिफिकेट और रोजगार सहायता',
    officialApplyUrl: 'https://www.skillindiadigital.gov.in/',
    portalName: 'Skill India Digital Hub',
    estimatedDays: 'बैच प्रारंभ अनुसार',
    govtFee: '₹0 (पूर्णतः मुफ्त प्रशिक्षण)',
    requiredDocuments: [
      { name: 'आधार कार्ड व मोबाइल नंबर', mandatory: true },
      { name: 'शैक्षणिक योग्यता मार्कशीट', mandatory: true }
    ],
    voiceBriefing: 'मुफ्त कंप्यूटर और वोकेशनल हुनर सीखने के लिए स्किल इंडिया डिजिटल पोर्टल पर कौशल विकास योजना में पंजीकरण करें।',
    keywords: ['pmkvy', 'skill india', 'कौशल विकास', 'free training', 'हुनर']
  },

  // ==========================================
  // 9. कानूनी, पुलिस, उपभोक्ता, शिकायत व नागरिक उपयोगिता (UTILITY_LEGAL)
  // ==========================================
  {
    id: 'national-consumer-helpline',
    title: 'राष्ट्रीय उपभोक्ता हेल्पलाइन (National Consumer Helpline - NCH 1915)',
    department: 'उपभोक्ता मामले विभाग',
    ministry: 'उपभोक्ता मामले, खाद्य और सार्वजनिक वितरण मंत्रालय',
    category: 'UTILITY_LEGAL',
    benefitSummary: 'ई-कॉमर्स, एयरलाइंस, बैंक या टेलीकॉम कंपनियों की धोखाधड़ी पर सीधे मध्यस्थता व पैसे वापसी',
    officialApplyUrl: 'https://consumerhelpline.gov.in/',
    portalName: 'National Consumer Helpline Portal',
    estimatedDays: 'कंपनी द्वारा 15 से 30 दिन में समाधान',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'ऑर्डर आईडी / ट्रांजैक्शन रसीद', mandatory: true },
      { name: 'कंपनी को की गई ईमेल शिकायत का विवरण', mandatory: true }
    ],
    voiceBriefing: 'किसी कंपनी या ऑनलाइन शॉपिंग में ठगी होने पर 1915 पर कॉल करें या उपभोक्ता हेल्पलाइन पर सीधी शिकायत दर्ज करें।',
    keywords: ['nch', '1915', 'उपभोक्ता हेल्पलाइन', 'consumer helpline', 'shopping fraud']
  },
  {
    id: 'nalsa-legal-aid',
    title: 'नालसा निःशुल्क कानूनी सहायता (NALSA Free Legal Aid & Lawyer)',
    department: 'राष्ट्रीय विधिक सेवा प्राधिकरण (NALSA)',
    ministry: 'विधि एवं न्याय मंत्रालय',
    category: 'UTILITY_LEGAL',
    benefitSummary: 'गरीबों, महिलाओं, बच्चों व जेल बंदियों को अदालत में केस लड़ने हेतु मुफ्त सरकारी वकील',
    officialApplyUrl: 'https://nalsa.gov.in/',
    portalName: 'NALSA Legal Aid Portal',
    estimatedDays: 'जिला विधिक सेवा प्राधिकरण द्वारा 7 दिन में',
    govtFee: '₹0 (पूर्णतः निःशुल्क विधिक सेवा)',
    requiredDocuments: [
      { name: 'आवेदक का आधार कार्ड', mandatory: true },
      { name: 'आय प्रमाण पत्र (वार्षिक आय ₹3 लाख से कम)', mandatory: true },
      { name: 'अदालती मुकदमे का विवरण / नोटिस प्रति', mandatory: true }
    ],
    voiceBriefing: 'अगर वकील करने के पैसे नहीं हैं, तो अदालत में मुफ्त सरकारी वकील पाने के लिए नालसा पोर्टल पर ऑनलाइन अर्जी लगाएं।',
    keywords: ['nalsa', 'free lawyer', 'मुफ्त सरकारी वकील', 'legal aid', 'कानूनी सहायता']
  },
  {
    id: 'sanchar-saathi-ceir',
    title: 'संचार साथी / खोया मोबाइल ब्लॉक (Sanchar Saathi - CEIR Portal)',
    department: 'दूरसंचार विभाग (DoT)',
    ministry: 'संचार मंत्रालय',
    category: 'UTILITY_LEGAL',
    benefitSummary: 'चोरी या खोए हुए मोबाइल को देशभर के सभी सिम नेटवर्क पर तुरंत ब्लॉक और ट्रेस करना',
    officialApplyUrl: 'https://www.sancharsaathi.gov.in/',
    portalName: 'Sanchar Saathi / CEIR Portal',
    estimatedDays: 'तत्काल 24 घंटे में मोबाइल लॉक',
    govtFee: '₹0 (पूर्णतः निःशुल्क सेवा)',
    requiredDocuments: [
      { name: 'मोबाइल फोन का IMEI नंबर (बिल या बॉक्स से)', mandatory: true },
      { name: 'थाना पुलिस शिकायत / ऑनलाइन सनहा प्रति', mandatory: true },
      { name: 'मालिक का पहचान पत्र', mandatory: true }
    ],
    voiceBriefing: 'अगर आपका मोबाइल चोरी हो गया है तो संचार साथी पोर्टल पर जाकर उसका IMEI नंबर ब्लॉक कर दें ताकि कोई उसका गलत उपयोग न कर सके।',
    keywords: ['sanchar saathi', 'ceir', 'खोया मोबाइल', 'mobile block', 'chori mobile']
  },
  {
    id: 'tafcop-sim-check',
    title: 'टैफकॉप सिम चेकर (TAFCOP - आपके नाम पर कितने सिम चालू हैं)',
    department: 'दूरसंचार विभाग (DoT)',
    ministry: 'संचार मंत्रालय',
    category: 'UTILITY_LEGAL',
    benefitSummary: 'आपके आधार पर चल रहे सभी मोबाइल नंबरों की जांच और अज्ञात नंबरों को तुरंत बंद करवाना',
    officialApplyUrl: 'https://tafcop.sancharsaathi.gov.in/',
    portalName: 'TAFCOP Citizen Portal',
    estimatedDays: 'तत्काल 1 मिनट में लाइव रिपोर्ट',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'आपका वर्तमान सक्रिय मोबाइल नंबर (ओटीपी हेतु)', mandatory: true }
    ],
    voiceBriefing: 'आपके आधार नंबर पर कितने सिम कार्ड चल रहे हैं, यह जानने के लिए टैफकॉप पोर्टल पर अपना मोबाइल नंबर डालकर ओटीपी से चेक करें।',
    keywords: ['tafcop', 'sim check', 'आधार पर सिम', 'fake sim block', 'sanchar sim']
  },
  {
    id: 'rooftop-solar-subsidy',
    title: 'पीएम सूर्य घर मुफ्त बिजली योजना (National Rooftop Solar Subsidy)',
    department: 'नवीन और नवीकरणीय ऊर्जा मंत्रालय',
    ministry: 'नवीन और नवीकरणीय ऊर्जा मंत्रालय',
    category: 'UTILITY_LEGAL',
    benefitSummary: 'घर की छत पर सोलर पैनल लगाने पर ₹78,000 तक की सीधी बैंक सब्सिडी और 300 यूनिट मुफ्त बिजली',
    officialApplyUrl: 'https://pmsuryaghar.gov.in/',
    portalName: 'PM Surya Ghar National Portal',
    estimatedDays: 'डिस्कॉम तकनीकी स्वीकृति अनुसार',
    govtFee: 'सब्सिडी बाद केवल शेष लागत',
    requiredDocuments: [
      { name: 'नवीनतम बिजली बिल की प्रति (उपभोक्ता संख्या)', mandatory: true },
      { name: 'आधार कार्ड व बैंक पासबुक', mandatory: true },
      { name: 'छत की स्पष्ट फोटो', mandatory: true }
    ],
    voiceBriefing: 'घर पर सोलर पैनल लगवाने और 78000 रुपये की सरकारी सब्सिडी पाने के लिए पीएम सूर्य घर पोर्टल पर बिजली बिल के साथ आवेदन करें।',
    keywords: ['surya ghar', 'solar rooftop', 'सोलर सब्सिडी', 'मुफ्त बिजली', 'solar panel']
  },
  {
    id: 'new-electricity-connection',
    title: 'नया बिजली कनेक्शन (Online Electricity Connection - Jhatpat / Discom)',
    department: 'विद्युत वितरण निगम (समस्त राज्य डिस्कॉम)',
    ministry: 'विद्युत मंत्रालय',
    category: 'UTILITY_LEGAL',
    benefitSummary: 'घरेलू, दुकान या ट्यूबवेल हेतु घर बैठे ऑनलाइन नया बिजली मीटर व कनेक्शन',
    officialApplyUrl: 'https://www.upenergy.in/',
    portalName: 'State Discom Online Portal',
    estimatedDays: '7 कार्यदिवस में मीटर स्थापना',
    govtFee: 'लोड अनुसार निर्धारित सुरक्षा निधि व प्रोसेसिंग फीस',
    requiredDocuments: [
      { name: 'आधार कार्ड / पहचान प्रमाण', mandatory: true },
      { name: 'मकान की रजिस्ट्री / खतौनी / किरायानामा', mandatory: true },
      { name: 'पासपोर्ट साइज फोटो', mandatory: true }
    ],
    voiceBriefing: 'घर या दुकान के लिए नया बिजली कनेक्शन लेने हेतु बिजली विभाग के पोर्टल पर झटपट कनेक्शन योजना में आवेदन करें।',
    keywords: ['electricity connection', 'बिजली कनेक्शन', 'new meter', 'bijli connection', 'jhatpat']
  },
  {
    id: 'ecourts-case-status',
    title: 'ई-कोर्ट केस स्टेटस (eCourts National Judicial Data Grid)',
    department: 'न्याय विभाग / ई-कमेटी सुप्रीम कोर्ट ऑफ इंडिया',
    ministry: 'विधि एवं न्याय मंत्रालय',
    category: 'UTILITY_LEGAL',
    benefitSummary: 'देशभर की किसी भी जिला अदालत या हाई कोर्ट में लंबित मुकदमे की अगली तारीख और आदेश की कॉपी',
    officialApplyUrl: 'https://ecourts.gov.in/ecourts_home/',
    portalName: 'eCourts Services Portal',
    estimatedDays: 'तत्काल 24x7 ऑनलाइन',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'सीएनआर संख्या (CNR Number) अथवा पक्षकारों का नाम', mandatory: true },
      { name: 'संबंधित न्यायालय व जनपद का नाम', mandatory: true }
    ],
    voiceBriefing: 'कोर्ट में चल रहे अपने मुकदमे की तारीख और जज साहब का आदेश देखने के लिए ई-कोर्ट्स पोर्टल पर सीएनआर नंबर से सर्च करें।',
    keywords: ['ecourts', 'case status', 'मुकदमा तारीख', 'court order', 'tarikh peshi']
  },
  {
    id: 'edaakhil-consumer-court',
    title: 'ई-दाखिल उपभोक्ता अदालत (e-Daakhil Online Consumer Court)',
    department: 'उपभोक्ता मामले विभाग',
    ministry: 'उपभोक्ता मामले, खाद्य और सार्वजनिक वितरण मंत्रालय',
    category: 'UTILITY_LEGAL',
    benefitSummary: 'खराब सामान, धोखाधड़ी या वारंटी न मिलने पर कंपनियों के खिलाफ घर बैठे ऑनलाइन केस दर्ज करना',
    officialApplyUrl: 'https://edaakhil.nic.in/',
    portalName: 'e-Daakhil Portal',
    estimatedDays: 'अदालत द्वारा प्राथमिक नोटिस 21 दिन में',
    govtFee: '₹5 लाख तक के दावों पर कोर्ट फीस ₹0 (निःशुल्क)',
    requiredDocuments: [
      { name: 'खरीद का बिल / कैश मेमो', mandatory: true },
      { name: 'कंपनी को भेजे गए ईमेल या शिकायत का ब्योरा', mandatory: true },
      { name: 'शिकायतकर्ता का आधार कार्ड', mandatory: true }
    ],
    voiceBriefing: 'अगर किसी कंपनी ने आपको घटिया सामान दिया है या वारंटी नहीं दी है, तो ई-दाखिल पोर्टल पर घर बैठे उपभोक्ता केस दर्ज करें।',
    keywords: ['edaakhil', 'consumer court', 'उपभोक्ता फोरम', 'consumer case', 'grahak adalat']
  },
  {
    id: 'police-pcc',
    title: 'पुलिस चरित्र प्रमाण पत्र (Police Character Certificate - PCC)',
    department: 'राज्य पुलिस विभाग (CCTNS)',
    ministry: 'गृह मंत्रालय',
    category: 'UTILITY_LEGAL',
    benefitSummary: 'सरकारी नौकरी, पासपोर्ट, शस्त्र लाइसेंस और सीएससी सेंटर खोलने हेतु चरित्र सत्यापन',
    officialApplyUrl: 'https://cctnsup.gov.in/',
    portalName: 'CCTNS Citizen Police Portal',
    estimatedDays: '15 कार्यदिवस (थाना रिपोर्ट उपरांत)',
    govtFee: '₹50 (ऑनलाइन सरकारी फीस)',
    requiredDocuments: [
      { name: 'आधार कार्ड / निवास प्रमाण', mandatory: true },
      { name: 'पासपोर्ट साइज फोटो', mandatory: true }
    ],
    voiceBriefing: 'पुलिस चरित्र प्रमाण पत्र के लिए अपने राज्य के पुलिस पोर्टल पर आवेदन करें। थाने से जांच के बाद ऑनलाइन सर्टिफिकेट मिलता है।',
    keywords: ['pcc', 'character certificate', 'पुलिस वेरिफिकेशन', 'charitra praman patra']
  },
  {
    id: 'cyber-crime',
    title: 'राष्ट्रीय साइबर अपराध रिपोर्टिंग (National Cyber Crime 1930)',
    department: 'भारतीय साइबर अपराध समन्वय केंद्र (I4C)',
    ministry: 'गृह मंत्रालय',
    category: 'UTILITY_LEGAL',
    benefitSummary: 'ऑनलाइन वित्तीय धोखाधड़ी (UPI/ATM ठगी) पर तत्काल पैसा फ्रीज कराने हेतु हेल्पलाइन 1930',
    officialApplyUrl: 'https://cybercrime.gov.in/',
    portalName: 'National Cyber Crime Reporting Portal',
    estimatedDays: 'तत्काल प्राथमिक जांच व बैंक अलर्ट',
    govtFee: '₹0 (निःशुल्क)',
    requiredDocuments: [
      { name: 'बैंक ट्रांजैक्शन आईडी / UTR नंबर', mandatory: true },
      { name: 'धोखाधड़ी के स्क्रीनशॉट / मैसेज', mandatory: true },
      { name: 'शिकायतकर्ता का आधार व मोबाइल', mandatory: true }
    ],
    voiceBriefing: 'अगर आपके बैंक या यूपीआई से ऑनलाइन धोखाधड़ी हुई है, तो तुरंत 1930 डायल करें या साइबर क्राइम पोर्टल पर शिकायत दर्ज करें।',
    keywords: ['cyber crime', 'साइबर क्राइम', '1930', 'ऑनलाइन ठगी', 'bank fraud']
  },
  {
    id: 'rti-online',
    title: 'सूचना का अधिकार (RTI Online Application)',
    department: 'कार्मिक और प्रशिक्षण विभाग (DoPT)',
    ministry: 'कार्मिक, लोक शिकायत तथा पेंशन मंत्रालय',
    category: 'UTILITY_LEGAL',
    benefitSummary: 'किसी भी सरकारी विभाग से कार्यों, खर्चों और नियमों का आधिकारिक ब्योरा मांगने का कानूनी अधिकार',
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
    benefitSummary: 'सरकारी विभागों में काम न होने या रिश्वतखोरी पर सीधे केंद्र सरकार को सीधी शिकायत',
    officialApplyUrl: 'https://pgportal.gov.in/',
    portalName: 'CPGRAMS Portal (pgportal)',
    estimatedDays: '30 से 45 कार्यदिवस में निस्तारण',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'शिकायत का संक्षिप्त विवरण', mandatory: true },
      { name: 'संबंधित कागजात / पुराने आवेदन की प्रति', mandatory: false }
    ],
    voiceBriefing: 'अगर किसी भी सरकारी दफ्तर में आपका काम अटका है तो पीजी पोर्टल यानी सी-पीजीआरएएमएस पर सीधे केंद्र को ऑनलाइन शिकायत दर्ज कराएं।',
    keywords: ['cpgrams', 'pgportal', 'शिकायत', 'grievance', 'जनसुनवाई', 'jansunwai']
  },
  {
    id: 'speed-post-tracking',
    title: 'स्पीड पोस्ट ट्रैकिंग व बुकिंग (India Post Tracking & Services)',
    department: 'डाक विभाग (DoP)',
    ministry: 'संचार मंत्रालय',
    category: 'UTILITY_LEGAL',
    benefitSummary: 'स्पीड पोस्ट, रजिस्टर्ड डाक, आधार कार्ड पार्सल और पासपोर्ट की लाइव ट्रैकिंग',
    officialApplyUrl: 'https://www.indiapost.gov.in/_layouts/15/dop.portal.tracking/trackconsignment.aspx',
    portalName: 'India Post Official Gateway',
    estimatedDays: 'तत्काल लाइव स्टेटस',
    govtFee: 'ट्रैकिंग ₹0',
    requiredDocuments: [
      { name: '13 अंकों की कंसाइनमेंट संख्या (उदा: ED123456789IN)', mandatory: true }
    ],
    voiceBriefing: 'अपने स्पीड पोस्ट पार्सल, आधार कार्ड या पासपोर्ट का लाइव स्टेटस जानने के लिए इंडिया पोस्ट पोर्टल पर कंसाइनमेंट नंबर डालें।',
    keywords: ['speed post', 'india post', 'डाक ट्रैकिंग', 'consignment tracking', 'dak']
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
    voiceBriefing: 'डिजिलॉकर में आपके मार्कशीट, आरसी, बीमा और ड्राइविंग लाइसेंस कानूनी रूप से सुरक्षित रहते हैं।',
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
      { name: 'बैंक खाता विवरण (डीबीटी लिंक)', mandatory: true }
    ],
    voiceBriefing: 'मुफ्त गैस कनेक्शन के लिए गरीब परिवार की महिलाएं पीएम उज्ज्वला पोर्टल पर ऑनलाइन नए गैस कनेक्शन हेतु आवेदन करें।',
    keywords: ['ujjwala', 'gas connection', 'उज्ज्वला', 'lpg gas', 'मुफ्त गैस']
  }
];

export const CATEGORY_METADATA: Record<string, { title: string; icon: string; color: string }> = {
  BUSINESS_TAX: { title: 'जीएसटी, व्यापार व टैक्स', icon: '💼', color: 'emerald' },
  IDENTITY: { title: 'पहचान एवं नागरिकता', icon: '🪪', color: 'orange' },
  HEALTH_WELFARE: { title: 'स्वास्थ्य व सामाजिक सुरक्षा', icon: '🏥', color: 'red' },
  AGRICULTURE: { title: 'कृषि, पशुपालन व बागवानी', icon: '🌾', color: 'lime' },
  REVENUE_HOUSING: { title: 'भूमि, आवास एवं प्रमाण पत्र', icon: '🏡', color: 'amber' },
  TRANSPORT: { title: 'परिवहन एवं वाहन सेवा', icon: '🚗', color: 'blue' },
  FINANCE_PENSION: { title: 'पेंशन, बचत, ऋण व जन सुरक्षा', icon: '💰', color: 'indigo' },
  EDUCATION_SKILL: { title: 'शिक्षा, परीक्षा व रोजगार', icon: '🎓', color: 'cyan' },
  UTILITY_LEGAL: { title: 'कानूनी, पुलिस व उपयोगिता', icon: '⚖️', color: 'purple' }
};
