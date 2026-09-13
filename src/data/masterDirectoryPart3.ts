
import { GovServiceItem } from '../types/service';

export const FINAL_REMAINING_SERVICES: GovServiceItem[] = [
  // ============================================================
  // 5. स्वास्थ्य, चिकित्सा एवं सामाजिक कल्याण (HEALTH_WELFARE - 18 Services)
  // ============================================================
  {
    id: 'ayushman-bharat-pmjay',
    title: 'आयुष्मान भारत कार्ड (PM-JAY Golden Card ₹5 Lakh)',
    department: 'राष्ट्रीय स्वास्थ्य प्राधिकरण (NHA)',
    ministryOrState: 'स्वास्थ्य एवं परिवार कल्याण मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'HEALTH_WELFARE',
    benefitSummary: 'प्रति परिवार प्रतिवर्ष ₹5,00,000 तक सरकारी व प्राइवेट सूचीबद्ध अस्पतालों में मुफ्त इलाज',
    officialApplyUrl: 'https://beneficiary.nha.gov.in/',
    portalName: 'beneficiary.nha.gov.in',
    estimatedDays: 'तत्काल 5 मिनट में डाउनलोड',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'आधार कार्ड (ओटीपी लिंक)', mandatory: true },
      { name: 'राशन कार्ड या पीएम-जय परिवार पर्ची', mandatory: true }
    ],
    voiceKeywords: ['आयुष्मान', 'आयुष्मान कार्ड', 'गोल्डन कार्ड', 'मुफ्त इलाज', 'ayushman', 'pmjay']
  },
  {
    id: 'abha-card-health-id',
    title: 'आभा कार्ड डिजिटल स्वास्थ्य खाता (ABHA Health ID)',
    department: 'आयुष्मान भारत डिजिटल मिशन (ABDM)',
    ministryOrState: 'स्वास्थ्य मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'HEALTH_WELFARE',
    benefitSummary: '14 अंकों का डिजिटल हेल्थ खाता जहाँ सभी डॉक्टर की पर्चियां व मेडिकल रिपोर्ट सुरक्षित रहती हैं',
    officialApplyUrl: 'https://abha.abdm.gov.in/',
    portalName: 'abha.abdm.gov.in',
    estimatedDays: 'तत्काल 1 मिनट',
    govtFee: '₹0 (निःशुल्क)',
    requiredDocuments: [
      { name: 'आधार कार्ड व लिंक मोबाइल नंबर', mandatory: true }
    ],
    voiceKeywords: ['आभा कार्ड', 'हेल्थ आईडी', 'abha card', 'health id']
  },
  {
    id: 'ors-aiims-opd-ticket',
    title: 'एम्स व सरकारी अस्पताल ओपीडी पर्चा बुकिंग (ORS Patient Portal)',
    department: 'राष्ट्रीय सूचना विज्ञान केंद्र (NIC) व स्वास्थ्य मंत्रालय',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'HEALTH_WELFARE',
    benefitSummary: 'एम्स (AIIMS) और बड़े सरकारी अस्पतालों में लंबी लाइन से बचकर घर बैठे ओपीडी पर्ची बुक करना',
    officialApplyUrl: 'https://ors.gov.in/',
    portalName: 'ors.gov.in',
    estimatedDays: 'तत्काल डिजिटल टोकन पर्ची',
    govtFee: '₹0 से ₹10 (अस्पताल नियमानुसार)',
    requiredDocuments: [
      { name: 'मरीज का आधार कार्ड अथवा आभा आईडी', mandatory: true },
      { name: 'मोबाइल नंबर (ओटीपी हेतु)', mandatory: true }
    ],
    voiceKeywords: ['एम्स पर्चा', 'ओपीडी पर्चा', 'aiims appointment', 'ors opd']
  },
  {
    id: 'eshram-card-national',
    title: 'ई-श्रम कार्ड (e-Shram Portal for Workers)',
    department: 'श्रम एवं रोजगार मंत्रालय',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'HEALTH_WELFARE',
    benefitSummary: 'असंगठित कामगारों (मजदूर, ड्राइवर, कारीगर) को ₹2 लाख का दुर्घटना बीमा व यूएएन कार्ड',
    officialApplyUrl: 'https://eshram.gov.in/',
    portalName: 'eshram.gov.in',
    estimatedDays: 'तत्काल 1 मिनट में डाउनलोड',
    govtFee: '₹0 (निःशुल्क)',
    requiredDocuments: [
      { name: 'आधार कार्ड व लिंक मोबाइल', mandatory: true },
      { name: 'बैंक खाता विवरण', mandatory: true }
    ],
    voiceKeywords: ['ई श्रम', 'श्रम कार्ड', 'मजदूर कार्ड', 'eshram', 'e-shram', 'shramik card']
  },
  {
    id: 'pm-jan-aushadhi-stores',
    title: 'पीएम जन औषधि 90% सस्ती जेनेरिक दवाइयां (Store Locator)',
    department: 'फार्मास्यूटिकल्स विभाग',
    ministryOrState: 'रसायन एवं उर्वरक मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'HEALTH_WELFARE',
    benefitSummary: 'बाजार से 50% से 90% कम कीमत पर उच्च गुणवत्ता वाली जेनेरिक दवाइयां व केंद्र खोजना',
    officialApplyUrl: 'https://janaushadhi.gov.in/',
    portalName: 'janaushadhi.gov.in',
    estimatedDays: 'तत्काल स्टोर पर उपलब्ध',
    govtFee: 'दवाओं पर 90% तक छूट',
    requiredDocuments: [
      { name: 'डॉक्टर का वैध पर्चा (Prescription)', mandatory: true }
    ],
    voiceKeywords: ['जन औषधि', 'सस्ती दवाई', 'janaushadhi', 'generic medical']
  },
  {
    id: 'eraktkosh-blood-bank-live',
    title: 'ई-रक्तकोश ऑनलाइन ब्लड बैंक उपलब्धता (e-Raktkosh)',
    department: 'राष्ट्रीय स्वास्थ्य मिशन (NHM)',
    ministryOrState: 'स्वास्थ्य एवं परिवार कल्याण मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'HEALTH_WELFARE',
    benefitSummary: 'आपातकाल में किसी भी ग्रुप के खून या प्लेटलेट्स की निकटतम ब्लड बैंक में लाइव उपलब्धता जांचना',
    officialApplyUrl: 'https://eraktkosh.mohfw.gov.in/',
    portalName: 'eraktkosh.mohfw.gov.in',
    estimatedDays: 'तत्काल 24x7 सेवा',
    govtFee: 'सरकारी दरों पर उपलब्ध',
    requiredDocuments: [
      { name: 'अस्पताल मांग पर्चा (Blood Requisition Form)', mandatory: true }
    ],
    voiceKeywords: ['ब्लड बैंक', 'खून उपलब्धता', 'e-raktkosh', 'blood bank']
  },
  {
    id: 'nikshay-tb-poshan',
    title: 'निक्षय पोषण योजना (Nikshay TB Patient ₹500/Month)',
    department: 'केंद्रीय टीबी प्रभाग (CTD)',
    ministryOrState: 'स्वास्थ्य मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'HEALTH_WELFARE',
    benefitSummary: 'टीबी मरीजों को इलाज के दौरान पोषण हेतु ₹500 प्रतिमाह सीधे बैंक खाते में व मुफ्त दवाइयां',
    officialApplyUrl: 'https://www.nikshay.in/',
    portalName: 'nikshay.in',
    estimatedDays: 'इलाज पंजीकरण के 15 दिन बाद',
    govtFee: 'दवाइयां 100% मुफ्त + ₹500/माह सहायता',
    requiredDocuments: [
      { name: 'मरीज का आधार कार्ड व बैंक पासबुक', mandatory: true },
      { name: 'सरकारी डॉक्टर का जांच पर्चा', mandatory: true }
    ],
    voiceKeywords: ['निक्षय', 'टीबी मरीज सहायता', 'nikshay', 'tb sahayata']
  },
  {
    id: 'notto-organ-donation-pledge',
    title: 'राष्ट्रीय अंगदान प्रतिज्ञा व डोनर कार्ड (NOTTO Donor Card)',
    department: 'राष्ट्रीय अंग और ऊतक प्रत्यारोपण संगठन (NOTTO)',
    ministryOrState: 'स्वास्थ्य मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'HEALTH_WELFARE',
    benefitSummary: 'जीवन के बाद दूसरों को जीवनदान देने हेतु अंगदान की आधिकारिक सरकारी प्रतिज्ञा और डोनर कार्ड',
    officialApplyUrl: 'https://notto.mohfw.gov.in/',
    portalName: 'notto.mohfw.gov.in',
    estimatedDays: 'तत्काल डिजिटल डोनर कार्ड',
    govtFee: '₹0 (निःशुल्क)',
    requiredDocuments: [
      { name: 'आधार कार्ड व लिंक मोबाइल', mandatory: true },
      { name: 'परिवार के एक गवाह का विवरण', mandatory: true }
    ],
    voiceKeywords: ['अंगदान', 'organ donation', 'notto donor card']
  },
  {
    id: 'udid-swavlamban-card',
    title: 'यूडीआईडी दिव्यांगता राष्ट्रीय कार्ड (Unique Disability ID - UDID)',
    department: 'दिव्यांगजन सशक्तिकरण विभाग',
    ministryOrState: 'सामाजिक न्याय और अधिकारिता मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'HEALTH_WELFARE',
    benefitSummary: 'दिव्यांग पेंशन, बस/रेलवे पास और नौकरियों में आरक्षण हेतु पूरे भारत में मान्य 1 कार्ड',
    officialApplyUrl: 'https://www.swavlambancard.gov.in/',
    portalName: 'swavlambancard.gov.in',
    estimatedDays: 'सीएमओ बोर्ड जांच उपरांत',
    govtFee: '₹0 (निःशुल्क)',
    requiredDocuments: [
      { name: 'आधार कार्ड व सीएमओ मेडिकल पर्चा', mandatory: true },
      { name: 'दिव्यांगता दर्शाती पूर्ण तस्वीर', mandatory: true }
    ],
    voiceKeywords: ['यूडीआईडी', 'udid card', 'विकलांग कार्ड', 'swavlamban']
  },
  {
    id: 'pmmvy-matru-vandana',
    title: 'प्रधानमंत्री मातृ वंदना योजना (PMMVY गर्भवती महिला ₹6,000)',
    department: 'महिला एवं बाल विकास मंत्रालय',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'HEALTH_WELFARE',
    benefitSummary: 'गर्भवती महिलाओं को पोषण सहायता हेतु ₹5,000 से ₹6,000 की सीधी नकद सहायता बैंक खाते में',
    officialApplyUrl: 'https://pmmvy.wcd.gov.in/',
    portalName: 'pmmvy.wcd.gov.in',
    estimatedDays: 'किस्त वार 30 दिन में',
    govtFee: '₹0 (निःशुल्क)',
    requiredDocuments: [
      { name: 'माता-पिता का आधार कार्ड', mandatory: true },
      { name: 'एमसीपी कार्ड (MCP Card)', mandatory: true },
      { name: 'माता का आधार लिंक बैंक खाता', mandatory: true }
    ],
    voiceKeywords: ['मातृ वंदना', 'गर्भवती सहायता', 'pmmvy', 'matru vandana']
  },
  {
    id: 'ran-rare-diseases-treatment',
    title: 'राष्ट्रीय आरोग्य निधि गंभीर बीमारी अनुदान (RAN ₹15 Lakh Grant)',
    department: 'स्वास्थ्य एवं परिवार कल्याण विभाग',
    ministryOrState: 'स्वास्थ्य मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'HEALTH_WELFARE',
    benefitSummary: 'गरीब बीपीएल परिवारों को कैंसर, हृदय व लिवर सर्जरी हेतु ₹15 लाख तक का सरकारी आर्थिक अनुदान',
    officialApplyUrl: 'https://mohfw.gov.in/',
    portalName: 'mohfw.gov.in (RAN)',
    estimatedDays: 'अस्पताल मेडिकल बोर्ड संस्तुति अनुसार',
    govtFee: '₹0 (निःशुल्क)',
    requiredDocuments: [
      { name: 'बीपीएल राशन कार्ड अथवा आय प्रमाण पत्र', mandatory: true },
      { name: 'सरकारी सुपर स्पेशलिटी अस्पताल का एस्टीमेट', mandatory: true },
      { name: 'मरीज का आधार कार्ड', mandatory: true }
    ],
    voiceKeywords: ['आरोग्य निधि', 'ran grant', 'कैंसर इलाज सहायता']
  },
  {
    id: 'cara-child-adoption-portal',
    title: 'कानूनी बच्चा गोद लेना (CARA Central Adoption Resource)',
    department: 'महिला एवं बाल विकास मंत्रालय',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'HEALTH_WELFARE',
    benefitSummary: 'अनाथ या परित्यक्त बच्चों को कानूनी व पारदर्शी तरीके से गोद लेने का एकमात्र केंद्रीय पोर्टल',
    officialApplyUrl: 'https://cara.wcd.gov.in/',
    portalName: 'cara.wcd.gov.in',
    estimatedDays: 'दत्तक ग्रहण समिति प्रक्रिया अनुसार',
    govtFee: 'कारा आधिकारिक नियमानुसार',
    requiredDocuments: [
      { name: 'दंपति का पैन, आधार व विवाह प्रमाण', mandatory: true },
      { name: 'पारिवारिक आय व मेडिकल फिटनेस प्रमाण', mandatory: true }
    ],
    voiceKeywords: ['बच्चा गोद लेना', 'cara adoption', 'dattak grahan']
  },
  {
    id: 'sakhi-one-stop-centre',
    title: 'सखी वन स्टॉप सेंटर महिला सुरक्षा (Sakhi 181 Helpline)',
    department: 'महिला एवं बाल विकास मंत्रालय',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'HEALTH_WELFARE',
    benefitSummary: 'हिंसा, प्रताड़ना या संकटग्रस्त महिलाओं को एक ही छत के नीचे 24x7 पुलिस, कानूनी व चिकित्सा सहायता',
    officialApplyUrl: 'https://wcd.nic.in/',
    portalName: 'Sakhi Helpline 181',
    estimatedDays: 'तत्काल 24 घंटे सेवा',
    govtFee: '₹0 (गोपनीय व मुफ़्त)',
    requiredDocuments: [
      { name: 'पीड़िता की मौखिक अथवा लिखित सूचना', mandatory: true }
    ],
    voiceKeywords: ['महिला हेल्पलाइन', 'सखी सेंटर', 'sakhi 181', 'women helpline']
  },
  {
    id: 'poshan-tracker-anganwadi',
    title: 'पोषण ट्रैकर आंगनवाड़ी पोषाहार (Poshan Tracker)',
    department: 'महिला एवं बाल विकास मंत्रालय',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'HEALTH_WELFARE',
    benefitSummary: 'बच्चों (0-6 वर्ष) व धात्री माताओं को आंगनवाड़ी से गर्म भोजन, सूखा राशन व वृद्धि निगरानी',
    officialApplyUrl: 'https://www.poshantracker.in/',
    portalName: 'poshantracker.in',
    estimatedDays: 'निकटतम केंद्र पर तत्काल',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'माता/पिता का आधार कार्ड', mandatory: true },
      { name: 'बच्चे का टीकाकरण कार्ड', mandatory: true }
    ],
    voiceKeywords: ['पोषण ट्रैकर', 'आंगनवाड़ी राशन', 'poshan tracker']
  },
  {
    id: 'tele-manas-mental-health',
    title: 'टेली-मानस मानसिक स्वास्थ्य हेल्पलाइन (Tele-MANAS 14416)',
    department: 'स्वास्थ्य एवं परिवार कल्याण मंत्रालय',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'HEALTH_WELFARE',
    benefitSummary: 'तनाव, अवसाद, नींद की समस्या या मानसिक परेशानी पर मनोचिकित्सक से 24 घंटे मुफ़्त बात करें',
    officialApplyUrl: 'https://telemanas.mohfw.gov.in/',
    portalName: 'telemanas.mohfw.gov.in (टोल-फ्री 14416)',
    estimatedDays: 'तत्काल 24x7 कॉल',
    govtFee: '₹0 (निःशुल्क)',
    requiredDocuments: [
      { name: 'केवल कॉल करना है (किसी कागज़ की आवश्यकता नहीं)', mandatory: false }
    ],
    voiceKeywords: ['तनाव हेल्पलाइन', 'tele manas', '14416', 'मानसिक स्वास्थ्य']
  },
  {
    id: 'nasha-mukti-kendra-helpline',
    title: 'नशा मुक्ति केंद्र सहायता हेल्पलाइन (Nasha Mukt Bharat 14446)',
    department: 'सामाजिक न्याय और अधिकारिता मंत्रालय',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'HEALTH_WELFARE',
    benefitSummary: 'शराब या नशीली दवाओं की लत छुड़ाने हेतु निकटतम सरकारी नशा मुक्ति केंद्र व काउंसलिंग',
    officialApplyUrl: 'https://nmba.dosje.gov.in/',
    portalName: 'nmba.dosje.gov.in (14446)',
    estimatedDays: 'तत्काल 24 घंटे',
    govtFee: '₹0 (मुफ़्त काउंसलिंग)',
    requiredDocuments: [
      { name: 'पीड़ित अथवा परिवार का संपर्क सूत्र', mandatory: true }
    ],
    voiceKeywords: ['नशा मुक्ति', 'nasha mukti', '14446']
  },
  {
    id: 'rare-disease-crowdfunding-portal',
    title: 'दुर्लभ बीमारी राष्ट्रीय सहायता पोर्टल (Rare Diseases Portal)',
    department: 'स्वास्थ्य मंत्रालय',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'HEALTH_WELFARE',
    benefitSummary: 'एसएमए (SMA) व दुर्लभ आनुवंशिक बीमारियों के बच्चों को ₹50 लाख तक का सरकारी इलाज अनुदान',
    officialApplyUrl: 'https://rarediseases.mohfw.gov.in/',
    portalName: 'rarediseases.mohfw.gov.in',
    estimatedDays: 'विशेषज्ञ समिति जांच उपरांत',
    govtFee: '₹0 (निःशुल्क)',
    requiredDocuments: [
      { name: 'एम्स/पीजीआई सेंटर ऑफ एक्सीलेंस मेडिकल रिपोर्ट', mandatory: true },
      { name: 'माता-पिता का आधार व आय प्रमाण', mandatory: true }
    ],
    voiceKeywords: ['दुर्लभ बीमारी', 'rare diseases', 'sma injection']
  },
  {
    id: 'mission-vatsalya-child-care',
    title: 'मिशन वात्सल्य अनाथ बाल संरक्षण योजना (₹4,000/माह)',
    department: 'महिला एवं बाल विकास मंत्रालय',
    ministryOrState: 'भारत सरकार / उत्तर प्रदेश',
    scope: 'ALL_INDIA',
    category: 'HEALTH_WELFARE',
    benefitSummary: 'माता-पिता खो चुके अनाथ बच्चों की परवरिश हेतु हर महीने ₹4,000 की सरकारी सहायता',
    officialApplyUrl: 'https://wcd.nic.in/',
    portalName: 'Mission Vatsalya Portal',
    estimatedDays: 'बाल कल्याण समिति (CWC) अनुमोदन',
    govtFee: '₹0 (निःशुल्क)',
    requiredDocuments: [
      { name: 'माता-पिता का मृत्यु प्रमाण पत्र', mandatory: true },
      { name: 'अभिभावक व बच्चे का आधार व बैंक खाता', mandatory: true }
    ],
    voiceKeywords: ['मिशन वात्सल्य', 'अनाथ सहायता', 'mission vatsalya']
  },

  // ============================================================
  // 6. कृषि, किसान, बागवानी व पशुपालन (FARMER_AGRICULTURE - 18 Services)
  // ============================================================
  {
    id: 'pm-kisan-samman-nidhi',
    title: 'पीएम किसान सम्मान निधि (PM-Kisan Portal ₹6,000/वर्ष)',
    department: 'कृषि एवं किसान कल्याण विभाग',
    ministryOrState: 'कृषि मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FARMER_AGRICULTURE',
    benefitSummary: 'किसानों को हर 4 माह पर ₹2,000 की किस्त (सालाना ₹6,000 सीधे बैंक खाते में)',
    officialApplyUrl: 'https://pmkisan.gov.in/',
    portalName: 'pmkisan.gov.in',
    estimatedDays: 'सत्यापन उपरांत आगामी किस्त में देय',
    govtFee: '₹0 (आवेदन निःशुल्क)',
    requiredDocuments: [
      { name: 'किसान का आधार कार्ड', mandatory: true },
      { name: 'जमीन की खतौनी नकल', mandatory: true },
      { name: 'डीबीटी चालू बैंक पासबुक', mandatory: true }
    ],
    voiceKeywords: ['पीएम किसान', 'किसान सम्मान निधि', 'किसान किस्त', 'pm kisan', 'kisan samman nidhi']
  },
  {
    id: 'kisan-credit-card-kcc',
    title: 'किसान क्रेडिट कार्ड सस्ता फसली ऋण (KCC Loan 4% ब्याज)',
    department: 'कृषि विभाग व नाबार्ड (NABARD)',
    ministryOrState: 'कृषि मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FARMER_AGRICULTURE',
    benefitSummary: 'खेती व खाद-बीज हेतु केवल 4% रियायती ब्याज दर पर ₹3 लाख तक का सस्ता बैंक लोन',
    officialApplyUrl: 'https://pmkisan.gov.in/',
    portalName: 'pmkisan.gov.in (KCC Portal)',
    estimatedDays: 'बैंक शाखा द्वारा 14 दिन में',
    govtFee: '₹0 (प्रोसेसिंग फीस नियम अनुसार)',
    requiredDocuments: [
      { name: 'पीएम किसान पंजीकरण संख्या', mandatory: true },
      { name: 'जमीन की अद्यतन खतौनी नकल', mandatory: true },
      { name: 'आधार कार्ड व बैंक पासबुक', mandatory: true }
    ],
    voiceKeywords: ['केसीसी', 'किसान क्रेडिट कार्ड', 'kcc', 'kisan loan']
  },
  {
    id: 'soil-health-card-portal',
    title: 'मृदा स्वास्थ्य कार्ड (Soil Health Card Scheme)',
    department: 'कृषि एवं किसान कल्याण विभाग',
    ministryOrState: 'कृषि मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FARMER_AGRICULTURE',
    benefitSummary: 'खेत की मिट्टी की मुफ़्त प्रयोगशाला जांच, कौन सी खाद कितनी डालनी है उसकी रिपोर्ट',
    officialApplyUrl: 'https://soilhealth.dac.gov.in/',
    portalName: 'soilhealth.dac.gov.in',
    estimatedDays: 'मिट्टी नमूना जांच के 15 दिन बाद',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'खेत का खसरा/गाटा संख्या', mandatory: true },
      { name: 'किसान का आधार व मोबाइल नंबर', mandatory: true }
    ],
    voiceKeywords: ['मृदा स्वास्थ्य', 'मिट्टी जांच', 'soil health', 'khad report']
  },
  {
    id: 'enam-national-agri-mandi',
    title: 'ई-नाम राष्ट्रीय कृषि मंडी (e-NAM Krishi Mandi)',
    department: 'कृषि एवं किसान कल्याण विभाग',
    ministryOrState: 'कृषि मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FARMER_AGRICULTURE',
    benefitSummary: 'देशभर की 1000+ सरकारी मंडियों में अपनी फसल को सबसे ऊंची ऑनलाइन बोली पर बेचना',
    officialApplyUrl: 'https://www.enam.gov.in/',
    portalName: 'enam.gov.in',
    estimatedDays: 'मंडी आवक के दिन ही तत्काल नीलामी',
    govtFee: '₹0 (निःशुल्क)',
    requiredDocuments: [
      { name: 'किसान का आधार कार्ड', mandatory: true },
      { name: 'बैंक पासबुक (भुगतान सीधे खाते में)', mandatory: true }
    ],
    voiceKeywords: ['ई नाम', 'मंडी', 'फसल बेचना', 'enam', 'krishi mandi']
  },
  {
    id: 'pm-fasal-bima-pmfby',
    title: 'प्रधानमंत्री फसल बीमा योजना (PMFBY Crop Insurance)',
    department: 'कृषि एवं किसान कल्याण विभाग',
    ministryOrState: 'कृषि मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FARMER_AGRICULTURE',
    benefitSummary: 'बाढ़, सूखा, ओलावृष्टि या कीटों से फसल नष्ट होने पर पूरा सरकारी मुआवजा पाना',
    officialApplyUrl: 'https://pmfby.gov.in/',
    portalName: 'pmfby.gov.in',
    estimatedDays: 'अधिसूचित सीजन अनुसार',
    govtFee: 'मात्र 1.5% से 2% प्रीमियम',
    requiredDocuments: [
      { name: 'बुवाई प्रमाण पत्र / पटवारी पर्चा', mandatory: true },
      { name: 'खसरा/खतौनी नकल व बैंक पासबुक', mandatory: true }
    ],
    voiceKeywords: ['फसल बीमा', 'pmfby', 'fasal bima', 'kisan bima']
  },
  {
    id: 'pm-kusum-solar-pump',
    title: 'पीएम कुसुम योजना (Solar Pump 90% Subsidy)',
    department: 'नवीन और नवीकरणीय ऊर्जा मंत्रालय',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'FARMER_AGRICULTURE',
    benefitSummary: 'खेतों में सिंचाई हेतु सोलर बोरिंग व पंप लगवाने पर सरकार द्वारा 90% तक भारी सब्सिडी',
    officialApplyUrl: 'https://pmkusum.mnre.gov.in/',
    portalName: 'pmkusum.mnre.gov.in',
    estimatedDays: 'राज्य कोटा व लॉटरी अनुसार',
    govtFee: 'केवल कृषक अंश (10% से 40%)',
    requiredDocuments: [
      { name: 'आधार कार्ड', mandatory: true },
      { name: 'खतौनी (कृषि भूमि प्रमाण)', mandatory: true },
      { name: 'बैंक खाता विवरण', mandatory: true }
    ],
    voiceKeywords: ['कुसुम योजना', 'सोलर पंप', 'pm kusum', 'solar pump']
  },
  {
    id: 'pm-krishi-sinchayee-drip',
    title: 'पीएम कृषि सिंचाई योजना (PMKSY ड्रिप/स्प्रिंकलर 55% सब्सिडी)',
    department: 'कृषि विभाग',
    ministryOrState: 'कृषि मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FARMER_AGRICULTURE',
    benefitSummary: 'ड्रिप व फव्वारा सिंचाई पाइप लगाने पर किसानों को 55% सीधी सरकारी सब्सिडी',
    officialApplyUrl: 'https://pmksy.gov.in/',
    portalName: 'pmksy.gov.in',
    estimatedDays: 'कृषि अधिकारी सत्यापन उपरांत',
    govtFee: 'कृषक अंश 45%',
    requiredDocuments: [
      { name: 'किसान का आधार कार्ड व खतौनी नकल', mandatory: true },
      { name: 'बोरवेल/सिंचाई स्रोत प्रमाण', mandatory: true }
    ],
    voiceKeywords: ['ड्रिप सिंचाई', 'फव्वारा सिंचाई', 'pmksy', 'drip irrigation']
  },
  {
    id: 'midh-polyhouse-horticulture',
    title: 'एकीकृत बागवानी विकास मिशन (MIDH Polyhouse 50% Subsidy)',
    department: 'बागवानी एवं खाद्य प्रसंस्करण विभाग',
    ministryOrState: 'कृषि मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FARMER_AGRICULTURE',
    benefitSummary: 'पॉलीहाउस, शेडनेट, मशरूम फार्मिंग और नए फलों के बाग लगाने पर 50% सरकारी अनुदान',
    officialApplyUrl: 'https://midh.gov.in/',
    portalName: 'midh.gov.in',
    estimatedDays: 'बागवानी विभाग भौतिक सत्यापन',
    govtFee: '₹0 (आवेदन निःशुल्क)',
    requiredDocuments: [
      { name: 'खतौनी नकल व आधार कार्ड', mandatory: true },
      { name: 'विस्तृत बागवानी प्रोजेक्ट प्रस्ताव', mandatory: true }
    ],
    voiceKeywords: ['पॉलीहाउस', 'बागवानी सब्सिडी', 'polyhouse', 'midh']
  },
  {
    id: 'honey-mission-kvic-boxes',
    title: 'राष्ट्रीय मधुमक्खी पालन हनी मिशन (KVIC Honey Mission)',
    department: 'खादी एवं ग्रामोद्योग आयोग',
    ministryOrState: 'एमएसएमई मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FARMER_AGRICULTURE',
    benefitSummary: 'किसानों को शहद उत्पादन हेतु 10 मधुमक्खी बॉक्स व कॉलोनी 80% सरकारी अनुदान पर मिलना',
    officialApplyUrl: 'https://www.kviconline.gov.in/',
    portalName: 'kviconline.gov.in',
    estimatedDays: 'प्रशिक्षण बैच उपरांत',
    govtFee: 'मात्र 20% कृषक अंश',
    requiredDocuments: [
      { name: 'आधार कार्ड व निवास प्रमाण', mandatory: true },
      { name: 'बैंक पासबुक प्रति', mandatory: true }
    ],
    voiceKeywords: ['मधुमक्खी पालन', 'हनी मिशन', 'honey mission', 'beekeeping']
  },
  {
    id: 'kisan-drone-subsidy-scheme',
    title: 'किसान ड्रोन सब्सिडी योजना (Kisan Drone Subsidy ₹5 Lakh)',
    department: 'कृषि एवं किसान कल्याण विभाग',
    ministryOrState: 'कृषि मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FARMER_AGRICULTURE',
    benefitSummary: 'खेतों में कीटनाशक और नैनो यूरिया छिड़काव हेतु कृषि ड्रोन खरीद पर ₹5 लाख (50%) अनुदान',
    officialApplyUrl: 'https://agricoop.gov.in/',
    portalName: 'agricoop.gov.in',
    estimatedDays: 'कृषि यंत्रीकरण समिति अनुमोदन',
    govtFee: 'नियम अनुसार',
    requiredDocuments: [
      { name: 'ड्रोन पायलट लाइसेंस (DGCA मान्यता प्राप्त)', mandatory: true },
      { name: 'आधार व पैन कार्ड', mandatory: true }
    ],
    voiceKeywords: ['कृषि ड्रोन', 'किसान ड्रोन', 'kisan drone', 'drone subsidy']
  },
  {
    id: 'pm-matsya-sampada-fish',
    title: 'पीएम मत्स्य संपदा योजना (मछली पालन 60% सब्सिडी)',
    department: 'मत्स्य पालन विभाग',
    ministryOrState: 'मत्स्य पालन मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FARMER_AGRICULTURE',
    benefitSummary: 'तालाब निर्माण, बायोफ्लॉक और मछली बीज पालन हेतु 40% से 60% तक भारी सरकारी अनुदान',
    officialApplyUrl: 'https://pmmsy.dof.gov.in/',
    portalName: 'pmmsy.dof.gov.in',
    estimatedDays: 'जिला मत्स्य समिति अनुमोदन',
    govtFee: '₹0 (आवेदन निःशुल्क)',
    requiredDocuments: [
      { name: 'आधार कार्ड व पैन कार्ड', mandatory: true },
      { name: 'जमीन का पट्टा अथवा तालाब दस्तावेज', mandatory: true }
    ],
    voiceKeywords: ['मछली पालन', 'मत्स्य संपदा', 'pmmsy', 'fish farming']
  },
  {
    id: 'national-livestock-mission-dairy',
    title: 'राष्ट्रीय पशुधन मिशन (डेयरी व बकरी पालन 50% सब्सिडी)',
    department: 'पशुपालन और डेयरी विभाग',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'FARMER_AGRICULTURE',
    benefitSummary: 'गाय, भैंस, बकरी और पोल्ट्री फार्म खोलने हेतु ₹50 लाख तक 50% सरकारी पूंजीगत सब्सिडी',
    officialApplyUrl: 'https://nlm.udyamimitra.in/',
    portalName: 'nlm.udyamimitra.in',
    estimatedDays: 'राज्य जांच उपरांत',
    govtFee: '₹0 (आवेदन निःशुल्क)',
    requiredDocuments: [
      { name: 'पशुपालन का प्रशिक्षण प्रमाण पत्र', mandatory: true },
      { name: 'जमीन का स्वामित्व/किरायानामा व बैंक गारंटी', mandatory: true }
    ],
    voiceKeywords: ['डेयरी लोन', 'पशुपालन सब्सिडी', 'बकरी पालन', 'dairy loan', 'nlm']
  },
  {
    id: 'smam-tractor-subsidy',
    title: 'कृषि यंत्रीकरण ट्रैक्टर व रोटावेटर सब्सिडी (SMAM Portal)',
    department: 'कृषि विभाग',
    ministryOrState: 'उत्तर प्रदेश / भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'FARMER_AGRICULTURE',
    benefitSummary: 'ट्रैक्टर, कल्टीवेटर, रोटावेटर और थ्रेशर खरीदने पर 40% से 50% तक सीधी टोकन सब्सिडी',
    officialApplyUrl: 'https://agrimachinery.nic.in/',
    portalName: 'agrimachinery.nic.in',
    estimatedDays: 'ई-लॉटरी टोकन अनुसार',
    govtFee: 'टोकन जमानत राशि (रिफंडेबल)',
    requiredDocuments: [
      { name: 'खतौनी नकल व आधार कार्ड', mandatory: true },
      { name: 'डीबीटी चालू बैंक पासबुक', mandatory: true }
    ],
    voiceKeywords: ['ट्रैक्टर सब्सिडी', 'कृषि यंत्र', 'smam tractor', 'rotavator subsidy']
  },
  {
    id: 'organic-farming-pkvy',
    title: 'परंपरागत कृषि विकास योजना जैविक खेती (PKVY Portal)',
    department: 'कृषि एवं किसान कल्याण विभाग',
    ministryOrState: 'कृषि मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FARMER_AGRICULTURE',
    benefitSummary: 'जैविक खेती करने वाले किसान समूहों को ₹50,000 प्रति हेक्टेयर सहायता व पीजीएस सर्टिफिकेट',
    officialApplyUrl: 'https://pgsindia-ncof.gov.in/',
    portalName: 'pgsindia-ncof.gov.in',
    estimatedDays: 'सत्र अनुसार',
    govtFee: '₹0',
    requiredDocuments: [
      { name: 'किसान का आधार व खतौनी नकल', mandatory: true },
      { name: 'किसान समूह (FPO) पंजीयन', mandatory: true }
    ],
    voiceKeywords: ['जैविक खेती', 'organic farming', 'pkvy']
  },
  {
    id: 'national-seeds-corporation',
    title: 'राष्ट्रीय बीज निगम प्रमाणित बीज बुकिंग (Indiaseeds NSC)',
    department: 'राष्ट्रीय बीज निगम (NSC)',
    ministryOrState: 'कृषि मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FARMER_AGRICULTURE',
    benefitSummary: 'गेहूं, धान, सरसों और दलहन के 100% शुद्ध प्रमाणित सरकारी बीज घर बैठे ऑनलाइन बुक करना',
    officialApplyUrl: 'https://indiaseeds.com/',
    portalName: 'indiaseeds.com',
    estimatedDays: 'डाक/डिलीवरी 4-5 दिन',
    govtFee: 'सरकारी बीज दर',
    requiredDocuments: [
      { name: 'किसान का नाम व पूरा पता', mandatory: true }
    ],
    voiceKeywords: ['सरकारी बीज', 'बीज बुकिंग', 'indiaseeds', 'certified seeds']
  },
  {
    id: 'kisan-rath-logistics-app',
    title: 'किसान रथ फसल परिवहन वाहन बुकिंग (Kisan Rath Portal)',
    department: 'कृषि एवं किसान कल्याण विभाग',
    ministryOrState: 'कृषि मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FARMER_AGRICULTURE',
    benefitSummary: 'खेत से मंडी तक फसल ले जाने हेतु ट्रैक्टर-ट्रॉली और ट्रक की सस्ती ऑनलाइन बुकिंग',
    officialApplyUrl: 'https://kisanrath.nic.in/',
    portalName: 'kisanrath.nic.in',
    estimatedDays: 'तत्काल उसी दिन',
    govtFee: 'ट्रांसपोर्टर द्वारा तय किराया',
    requiredDocuments: [
      { name: 'फसल की मात्रा व लोडिंग स्थान', mandatory: true }
    ],
    voiceKeywords: ['किसान रथ', 'फसल गाड़ी', 'kisan rath']
  },
  {
    id: 'agmarknet-mandi-bhav',
    title: 'एगमार्कनेट दैनिक मंडी भाव लाइव (Agmarknet Live Prices)',
    department: 'विपणन और निरीक्षण निदेशालय (DMI)',
    ministryOrState: 'कृषि मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FARMER_AGRICULTURE',
    benefitSummary: 'देश की किसी भी मंडी में गेहूं, धान, टमाटर, आलू और प्याज का आज का लाइव रेट देखना',
    officialApplyUrl: 'https://agmarknet.gov.in/',
    portalName: 'agmarknet.gov.in',
    estimatedDays: 'तत्काल 24x7 लाइव',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'मंडी व फसल का नाम चयन', mandatory: true }
    ],
    voiceKeywords: ['मंडी भाव', 'आज का भाव', 'agmarknet', 'mandi rate']
  },
  {
    id: 'pashu-aadhaar-tagging',
    title: 'पशु आधार / इनैफ पशु पंजीकरण (Pashu Aadhaar INAPH)',
    department: 'राष्ट्रीय डेयरी विकास बोर्ड (NDDB)',
    ministryOrState: 'मत्स्य पालन, पशुपालन मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FARMER_AGRICULTURE',
    benefitSummary: 'गाय व भैंस के कान में 12 अंकों का पीला टैग लगवाना, मुफ़्त टीका व नस्ल सुधार',
    officialApplyUrl: 'https://inaph.nddb.coop/',
    portalName: 'inaph.nddb.coop',
    estimatedDays: 'पशु चिकित्सक द्वारा तत्काल',
    govtFee: '₹0 (मुफ़्त सरकारी टैगिंग)',
    requiredDocuments: [
      { name: 'पशुपालक का आधार कार्ड', mandatory: true }
    ],
    voiceKeywords: ['पशु आधार', 'गाय भैंस टैग', 'pashu aadhaar', 'inaph']
  },

  // ============================================================
  // 7. परिवहन, वाहन, चालान व सड़क सेवाएं (TRANSPORT - 16 Services)
  // ============================================================
  {
    id: 'vehicle-rc-transfer-vahan',
    title: 'वाहन आरसी ट्रांसफर व एनओसी (Vahan Citizen Services)',
    department: 'सड़क परिवहन और राजमार्ग मंत्रालय',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'TRANSPORT',
    benefitSummary: 'गाड़ी का मालिकाना हक दूसरे व्यक्ति के नाम ट्रांसफर करना या दूसरे राज्य की एनओसी पाना',
    officialApplyUrl: 'https://vahan.parivahan.gov.in/vahanservice/',
    portalName: 'vahan.parivahan.gov.in',
    estimatedDays: '10 से 15 कार्यदिवस',
    govtFee: 'निर्धारित सरकारी आरटीओ शुल्क',
    requiredDocuments: [
      { name: 'मूल रजिस्ट्रेशन सर्टिफिकेट (RC)', mandatory: true },
      { name: 'वैध वाहन बीमा व प्रदूषण (PUC) पर्चा', mandatory: true },
      { name: 'क्रेता और विक्रेता का आधार कार्ड', mandatory: true }
    ],
    voiceKeywords: ['आरसी ट्रांसफर', 'गाड़ी ट्रांसफर', 'rc transfer', 'vahan noc']
  },
  {
    id: 'echallan-virtual-court-pay',
    title: 'ई-चालान भुगतान व वर्चुअल कोर्ट (e-Challan Parivahan)',
    department: 'सड़क परिवहन मंत्रालय व ई-कमेटी सुप्रीम कोर्ट',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'TRANSPORT',
    benefitSummary: 'ट्रैफिक पुलिस द्वारा काटे गए ऑनलाइन फोटो चालान को घर बैठे चेक करना व ऑनलाइन भरना',
    officialApplyUrl: 'https://echallan.parivahan.gov.in/',
    portalName: 'echallan.parivahan.gov.in',
    estimatedDays: 'तत्काल रसीद',
    govtFee: 'चालान की नियत जुर्माना राशि',
    requiredDocuments: [
      { name: 'गाड़ी संख्या या चालान नंबर', mandatory: true },
      { name: 'चेसिस नंबर के अंतिम 5 अंक', mandatory: true }
    ],
    voiceKeywords: ['चालान', 'ई चालान', 'गाड़ी का चालान', 'challan', 'echallan']
  },
  {
    id: 'hsrp-number-plate-booking',
    title: 'हाई सिक्योरिटी नंबर प्लेट व स्टीकर बुकिंग (Book My HSRP)',
    department: 'सड़क परिवहन और राजमार्ग मंत्रालय',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'TRANSPORT',
    benefitSummary: 'सभी वाहनों पर सरकार द्वारा अनिवार्य लेजर नंबर प्लेट व रंगीन होलोग्राम स्टीकर लगवाना',
    officialApplyUrl: 'https://bookmyhsrp.com/',
    portalName: 'bookmyhsrp.com',
    estimatedDays: '4 से 7 कार्यदिवस में डीलर फिटमेंट',
    govtFee: 'दोपहिया ~₹365 / चारपहिया ~₹600-₹1,100',
    requiredDocuments: [
      { name: 'वाहन की आरसी (इंजन व चेसिस नंबर हेतु)', mandatory: true }
    ],
    voiceKeywords: ['नंबर प्लेट', 'एचएसआरपी', 'hsrp', 'number plate']
  },
  {
    id: 'puc-pollution-certificate-check',
    title: 'प्रदूषण पर्चा ऑनलाइन जांच (PUC Certificate Verification)',
    department: 'सड़क परिवहन और राजमार्ग मंत्रालय',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'TRANSPORT',
    benefitSummary: 'गाड़ी के प्रदूषण प्रमाण पत्र की अंतिम तिथि देखना और ₹10,000 के चालान से बचना',
    officialApplyUrl: 'https://vahan.parivahan.gov.in/puc/',
    portalName: 'vahan.parivahan.gov.in/puc/',
    estimatedDays: 'तत्काल 1 सेकंड',
    govtFee: 'जांच ₹0',
    requiredDocuments: [
      { name: 'गाड़ी नंबर व चेसिस के अंतिम 5 अंक', mandatory: true }
    ],
    voiceKeywords: ['प्रदूषण पर्चा', 'पीयूसी', 'puc certificate', 'pollution check']
  },
  {
    id: 'national-goods-permit-truck',
    title: 'ऑल इंडिया राष्ट्रीय माल परमिट (National Permit for Trucks)',
    department: 'सड़क परिवहन और राजमार्ग मंत्रालय',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'TRANSPORT',
    benefitSummary: 'ट्रक, ट्रेलर व कमर्शियल गाड़ियों को पूरे भारत में बिना रुकावट चलने का 1 साल का परमिट',
    officialApplyUrl: 'https://vahan.parivahan.gov.in/npermit/',
    portalName: 'vahan.parivahan.gov.in/npermit/',
    estimatedDays: 'तत्काल ऑनलाइन डिजिटल परमिट',
    govtFee: 'समेकित राष्ट्रीय शुल्क ₹16,500/वर्ष',
    requiredDocuments: [
      { name: 'वाहन आरसी व वैध फिटनेस प्रमाण पत्र', mandatory: true },
      { name: 'व्यावसायिक बीमा व टैक्स रसीद', mandatory: true }
    ],
    voiceKeywords: ['नेशनल परमिट', 'ट्रक परमिट', 'national permit', 'truck permit']
  },
  {
    id: 'fancy-vip-vehicle-number',
    title: 'वीआईपी व फैंसी गाड़ी नंबर ई-नीलामी (Fancy Number Auction)',
    department: 'सड़क परिवहन और राजमार्ग मंत्रालय',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'TRANSPORT',
    benefitSummary: 'अपनी नई कार या बाइक हेतु मनपसंद वीआईपी नंबर (0001, 0786, 9999 आदि) की ऑनलाइन बोली',
    officialApplyUrl: 'https://vahan.parivahan.gov.in/fancy/',
    portalName: 'vahan.parivahan.gov.in/fancy/',
    estimatedDays: 'साप्ताहिक नीलामी परिणाम अनुसार',
    govtFee: 'नंबर श्रेणी अनुसार बेस प्राइस (₹5,000+)',
    requiredDocuments: [
      { name: 'आवेदक का आधार व नई गाड़ी बुकिंग रसीद', mandatory: true }
    ],
    voiceKeywords: ['वीआईपी नंबर', 'फैंसी नंबर', 'vip number', 'fancy number']
  },
  {
    id: 'ihmcl-fastag-dispute',
    title: 'फास्टैग रिचार्ज व गलत टोल रिफंड (IHMCL NETC FASTag)',
    department: 'भारतीय राष्ट्रीय राजमार्ग प्राधिकरण (NHAI)',
    ministryOrState: 'सड़क परिवहन मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'TRANSPORT',
    benefitSummary: 'टोल प्लाजा पर गलत कटे पैसे वापस पाना, फास्टैग ब्लैकलिस्ट हटाना व केवाईसी स्टेटस देखना',
    officialApplyUrl: 'https://ihmcl.co.in/',
    portalName: 'ihmcl.co.in',
    estimatedDays: 'तत्काल ऑनलाइन',
    govtFee: '₹0 (शिकायत निःशुल्क)',
    requiredDocuments: [
      { name: 'गाड़ी नंबर अथवा फास्टैग बारकोड आईडी', mandatory: true }
    ],
    voiceKeywords: ['फास्टैग', 'टोल रिफंड', 'fastag', 'ihmcl']
  },
  {
    id: 'international-driving-permit-idp',
    title: 'अंतरराष्ट्रीय ड्राइविंग परमिट (International Driving Permit - IDP)',
    department: 'सड़क परिवहन और राजमार्ग मंत्रालय',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'TRANSPORT',
    benefitSummary: 'विदेशों में कार या बाइक चलाने हेतु भारत सरकार द्वारा जारी आधिकारिक इंटरनेशनल लाइसेंस',
    officialApplyUrl: 'https://sarathi.parivahan.gov.in/',
    portalName: 'sarathi.parivahan.gov.in',
    estimatedDays: '7 कार्यदिवस',
    govtFee: '₹1,000 (मानक सरकारी शुल्क)',
    requiredDocuments: [
      { name: 'वैध भारतीय ड्राइविंग लाइसेंस', mandatory: true },
      { name: 'वैध पासपोर्ट और वीजा प्रति', mandatory: true },
      { name: 'मेडिकल फिटनेस Form 1A', mandatory: true }
    ],
    voiceKeywords: ['इंटरनेशनल लाइसेंस', 'idp', 'international driving license']
  },
  {
    id: 'commercial-fitness-certificate',
    title: 'व्यावसायिक वाहन फिटनेस प्रमाण पत्र (Vehicle Fitness Certificate)',
    department: 'परिवहन विभाग',
    ministryOrState: 'सड़क परिवहन मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'TRANSPORT',
    benefitSummary: 'टैक्सी, बस, ऑटो और ट्रक की सड़क सुरक्षा व ब्रेक जांच के बाद 2 या 1 साल का फिटनेस पर्चा',
    officialApplyUrl: 'https://vahan.parivahan.gov.in/',
    portalName: 'vahan.parivahan.gov.in',
    estimatedDays: 'आरटीओ भौतिक जांच के दिन',
    govtFee: 'वाहन श्रेणी अनुसार निर्धारित फीस',
    requiredDocuments: [
      { name: 'वाहन आरसी, बीमा व प्रदूषण पर्चा', mandatory: true }
    ],
    voiceKeywords: ['गाड़ी फिटनेस', 'fitness certificate', 'rto fitness']
  },
  {
    id: 'all-india-tourist-bus-permit',
    title: 'ऑल इंडिया टूरिस्ट बस परमिट (All India Tourist Bus Permit)',
    department: 'सड़क परिवहन और राजमार्ग मंत्रालय',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'TRANSPORT',
    benefitSummary: 'पर्यटक बसों को बिना किसी राज्य बॉर्डर टैक्स के पूरे भारत में घूमने का एकीकृत राष्ट्रीय परमिट',
    officialApplyUrl: 'https://vahan.parivahan.gov.in/',
    portalName: 'vahan.parivahan.gov.in',
    estimatedDays: 'तत्काल 1 कार्यदिवस',
    govtFee: 'सीट क्षमता अनुसार त्रैमासिक/वार्षिक फीस',
    requiredDocuments: [
      { name: 'बस की आरसी, फिटनेस व पर्यटक बीमा', mandatory: true }
    ],
    voiceKeywords: ['टूरिस्ट बस परमिट', 'tourist permit', 'bus permit']
  },
  {
    id: 'hypothecation-loan-removal',
    title: 'गाड़ी लोन समाप्ति / दृष्टिबंधक हटाना (RC Hypothecation Removal)',
    department: 'परिवहन विभाग',
    ministryOrState: 'सड़क परिवहन मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'TRANSPORT',
    benefitSummary: 'बैंक कार लोन पूरा होने पर आरसी से बैंक का नाम कटवाकर साफ आरसी पाना (Form 35)',
    officialApplyUrl: 'https://vahan.parivahan.gov.in/vahanservice/',
    portalName: 'vahan.parivahan.gov.in',
    estimatedDays: '7 से 10 कार्यदिवस',
    govtFee: '₹100 से ₹200 आरटीओ फीस',
    requiredDocuments: [
      { name: 'बैंक से प्राप्त फॉर्म 35 व एनओसी (NOC)', mandatory: true },
      { name: 'मूल आरसी व वैध बीमा', mandatory: true }
    ],
    voiceKeywords: ['लोन हटाना', 'rc hypothecation', 'form 35']
  },
  {
    id: 'automated-driving-test-slot',
    title: 'सेंसर युक्त ड्राइविंग टेस्ट स्लॉट बुकिंग (Automated Track Slot)',
    department: 'परिवहन विभाग',
    ministryOrState: 'सड़क परिवहन मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'TRANSPORT',
    benefitSummary: 'पक्का ड्राइविंग लाइसेंस टेस्ट देने हेतु स्वचालित कैमरे वाले ट्रैक पर अपनी पसंद का दिन चुनना',
    officialApplyUrl: 'https://sarathi.parivahan.gov.in/',
    portalName: 'sarathi.parivahan.gov.in',
    estimatedDays: 'तत्काल बुकिंग रसीद',
    govtFee: '₹0 (लाइसेंस फीस में शामिल)',
    requiredDocuments: [
      { name: 'लर्नर लाइसेंस नंबर व आवेदन संख्या', mandatory: true }
    ],
    voiceKeywords: ['ड्राइविंग टेस्ट बुकिंग', 'dl slot booking', 'driving test']
  },
  {
    id: 'road-tax-online-payment',
    title: 'वाहन रोड टैक्स ऑनलाइन भुगतान (Commercial Vehicle Road Tax)',
    department: 'परिवहन विभाग',
    ministryOrState: 'सड़क परिवहन मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'TRANSPORT',
    benefitSummary: 'कमर्शियल गाड़ियों का त्रैमासिक या वार्षिक पथकर (Road Tax) घर बैठे जमा कर रसीद पाना',
    officialApplyUrl: 'https://vahan.parivahan.gov.in/',
    portalName: 'vahan.parivahan.gov.in',
    estimatedDays: 'तत्काल 1 सेकंड में रसीद',
    govtFee: 'वाहन श्रेणी अनुसार टैक्स',
    requiredDocuments: [
      { name: 'गाड़ी नंबर व चेसिस के अंतिम 5 अंक', mandatory: true }
    ],
    voiceKeywords: ['रोड टैक्स', 'road tax', 'vahan tax pay']
  },
  {
    id: 'duplicate-rc-application',
    title: 'खोई हुई आरसी दोबारा प्राप्त करना (Duplicate RC Application)',
    department: 'परिवहन विभाग',
    ministryOrState: 'सड़क परिवहन मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'TRANSPORT',
    benefitSummary: 'गाड़ी की आरसी खोने, चोरी होने या जलने पर आरटीओ से नई मूल आरसी ऑनलाइन प्राप्त करना',
    officialApplyUrl: 'https://vahan.parivahan.gov.in/vahanservice/',
    portalName: 'vahan.parivahan.gov.in',
    estimatedDays: '15 कार्यदिवस',
    govtFee: 'गाड़ी अनुसार सरकारी शुल्क',
    requiredDocuments: [
      { name: 'थाना पुलिस शिकायत / सनहा प्रति', mandatory: true },
      { name: 'मालिक का आधार कार्ड व फॉर्म 26', mandatory: true }
    ],
    voiceKeywords: ['खोई आरसी', 'duplicate rc', 'आरसी दोबारा']
  },
  {
    id: 'driver-conductor-license',
    title: 'कंडक्टर लाइसेंस ऑनलाइन आवेदन (Conductor License Sarathi)',
    department: 'परिवहन विभाग',
    ministryOrState: 'सड़क परिवहन मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'TRANSPORT',
    benefitSummary: 'रोडवेज व सरकारी बसों में कंडक्टर की नौकरी हेतु अनिवार्य कंडक्टर लाइसेंस प्राप्त करना',
    officialApplyUrl: 'https://sarathi.parivahan.gov.in/',
    portalName: 'sarathi.parivahan.gov.in',
    estimatedDays: '15 कार्यदिवस',
    govtFee: '₹200 से ₹400',
    requiredDocuments: [
      { name: 'फर्स्ट एड (First Aid) प्रशिक्षण प्रमाण पत्र', mandatory: true },
      { name: '10वीं मार्कशीट व मेडिकल फिटनेस पर्चा', mandatory: true }
    ],
    voiceKeywords: ['कंडक्टर लाइसेंस', 'conductor license']
  },
  {
    id: 'vehicle-ownership-surrender',
    title: 'वाहन कबाड़ स्क्रैपिंग सर्टिफिकेट (Vehicle Scrappage RVSF)',
    department: 'सड़क परिवहन और राजमार्ग मंत्रालय',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'TRANSPORT',
    benefitSummary: '15 वर्ष पुरानी खटारा गाड़ी को स्क्रैप कराकर नई गाड़ी खरीद पर 25% तक रोड टैक्स छूट पाना',
    officialApplyUrl: 'https://vahan.parivahan.gov.in/',
    portalName: 'vahan.parivahan.gov.in (Scrappage)',
    estimatedDays: 'स्क्रैप सेंटर रसीद तत्काल',
    govtFee: 'स्क्रैप मूल्य मालिक को मिलता है',
    requiredDocuments: [
      { name: 'मूल आरसी व मालिक का पैन और बैंक खाता', mandatory: true }
    ],
    voiceKeywords: ['गाड़ी स्क्रैप', 'vehicle scrappage', 'purani car scrap']
  },

  // ============================================================
  // 8. शिक्षा, छात्रवृत्ति, प्रतियोगी परीक्षाएं व रोजगार (EDUCATION_CAREER - 17 Services)
  // ============================================================
  {
    id: 'upsc-one-time-registration',
    title: 'यूपीएससी वन-टाइम रजिस्ट्रेशन (UPSC OTR Portal)',
    department: 'संघ लोक सेवा आयोग (UPSC)',
    ministryOrState: 'कार्मिक, लोक शिकायत तथा पेंशन मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'EDUCATION_CAREER',
    benefitSummary: 'आईएएस (IAS), आईपीएस (IPS), एनडीए (NDA) व सीडीएस परीक्षाओं हेतु एक बार स्थायी प्रोफाइल बनाना',
    officialApplyUrl: 'https://upsconline.nic.in/upsc/OTRP/',
    portalName: 'upsconline.nic.in',
    estimatedDays: 'तत्काल OTR आईडी जारी',
    govtFee: 'पंजीकरण ₹0 / परीक्षा शुल्क ₹100',
    requiredDocuments: [
      { name: '10वीं बोर्ड प्रमाण पत्र (जन्म तिथि हेतु)', mandatory: true },
      { name: 'आधार कार्ड व फोटो-हस्ताक्षर', mandatory: true }
    ],
    voiceKeywords: ['यूपीएससी', 'upsc', 'upsc otr', 'ias form', 'nda cds']
  },
  {
    id: 'ssc-one-time-registration',
    title: 'एसएससी वन-टाइम रजिस्ट्रेशन (SSC New OTR Portal)',
    department: 'कर्मचारी चयन आयोग (SSC)',
    ministryOrState: 'कार्मिक मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'EDUCATION_CAREER',
    benefitSummary: 'सीजीएल (CGL), सीएचएसएल (CHSL), एमटीएस (MTS) और जीडी कांस्टेबल भर्ती हेतु नया OTR',
    officialApplyUrl: 'https://ssc.gov.in/',
    portalName: 'ssc.gov.in',
    estimatedDays: 'तत्काल लाइव रजिस्ट्रेशन',
    govtFee: 'पंजीकरण ₹0 / परीक्षा फीस ₹100',
    requiredDocuments: [
      { name: 'आधार कार्ड व 10वीं मार्कशीट रोल नंबर', mandatory: true },
      { name: 'लाइव वेबकैम फोटो व हस्ताक्षर', mandatory: true }
    ],
    voiceKeywords: ['एसएससी', 'ssc', 'ssc otr', 'ssc cgl', 'ssc gd']
  },
  {
    id: 'jee-main-engineering-exam',
    title: 'जेईई मेन इंजीनियरिंग प्रवेश परीक्षा (JEE Main NTA)',
    department: 'राष्ट्रीय परीक्षा एजेंसी (NTA)',
    ministryOrState: 'शिक्षा मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'EDUCATION_CAREER',
    benefitSummary: 'आईआईटी (IIT), एनआईटी (NIT) और शीर्ष इंजीनियरिंग कॉलेजों में बीटेक प्रवेश परीक्षा',
    officialApplyUrl: 'https://jeemain.nta.nic.in/',
    portalName: 'jeemain.nta.nic.in',
    estimatedDays: 'अधिसूचित आवेदन सत्र अनुसार',
    govtFee: '₹1,000 (छात्र) / ₹800 (छात्रा)',
    requiredDocuments: [
      { name: 'आधार कार्ड व 10वीं/12वीं मार्कशीट', mandatory: true },
      { name: 'पासपोर्ट फोटो व श्रेणी प्रमाण पत्र', mandatory: true }
    ],
    voiceKeywords: ['जेईई मेन', 'jee main', 'iit form', 'engineering entrance']
  },
  {
    id: 'neet-ug-medical-exam',
    title: 'नीट यूजी मेडिकल प्रवेश परीक्षा (NEET UG NTA)',
    department: 'राष्ट्रीय परीक्षा एजेंसी (NTA)',
    ministryOrState: 'स्वास्थ्य एवं परिवार कल्याण मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'EDUCATION_CAREER',
    benefitSummary: 'देशभर के सरकारी मेडिकल कॉलेजों में एमबीबीएस (MBBS) व बीडीएस में प्रवेश का एकमात्र टेस्ट',
    officialApplyUrl: 'https://exams.nta.ac.in/NEET/',
    portalName: 'exams.nta.ac.in/NEET/',
    estimatedDays: 'वार्षिक परीक्षा कैलेंडर अनुसार',
    govtFee: '₹1,700 (सामान्य) / ₹1,000 (आरक्षित)',
    requiredDocuments: [
      { name: '12वीं फिजिक्स/केमिस्ट्री/बायोलॉजी मार्कशीट', mandatory: true },
      { name: 'पोस्टकार्ड फोटो व उंगलियों के निशान', mandatory: true }
    ],
    voiceKeywords: ['नीट', 'नीट परीक्षा', 'neet ug', 'mbbs entrance']
  },
  {
    id: 'ugc-net-professor-exam',
    title: 'यूजीसी नेट प्रोफेसर व जेआरएफ पात्रता (UGC-NET Exam)',
    department: 'विश्वविद्यालय अनुदान आयोग (UGC) / NTA',
    ministryOrState: 'शिक्षा मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'EDUCATION_CAREER',
    benefitSummary: 'कॉलेजों में असिस्टेंट प्रोफेसर बनने और पीएचडी हेतु ₹37,000 मासिक जेआरएफ फेलोशिप',
    officialApplyUrl: 'https://ugcnet.nta.ac.in/',
    portalName: 'ugcnet.nta.ac.in',
    estimatedDays: 'जून व दिसंबर सत्र',
    govtFee: '₹1,150 (सामान्य) / ₹600 (OBC) / ₹325 (SC/ST)',
    requiredDocuments: [
      { name: 'मास्टर्स/पीजी डिग्री अथवा अंतिम वर्ष का रोल नंबर', mandatory: true },
      { name: 'आधार कार्ड व फोटो', mandatory: true }
    ],
    voiceKeywords: ['यूजीसी नेट', 'ugc net', 'jrf', 'professor exam']
  },
  {
    id: 'national-scholarship-portal-nsp',
    title: 'राष्ट्रीय छात्रवृत्ति पोर्टल (National Scholarship Portal - NSP)',
    department: 'उच्च शिक्षा विभाग',
    ministryOrState: 'शिक्षा मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'EDUCATION_CAREER',
    benefitSummary: 'प्री-मैट्रिक, पोस्ट-मैट्रिक और अल्पसंख्यक छात्रों को केंद्र सरकार की सीधी छात्रवृत्ति',
    officialApplyUrl: 'https://scholarships.gov.in/',
    portalName: 'scholarships.gov.in',
    estimatedDays: 'संस्थान व राज्य सत्यापन अनुसार',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'छात्र का आधार कार्ड व पिछली मार्कशीट', mandatory: true },
      { name: 'आय व जाति प्रमाण पत्र', mandatory: true },
      { name: 'कॉलेज बोनाफाइड पर्चा व बैंक खाता', mandatory: true }
    ],
    voiceKeywords: ['छात्रवृत्ति', 'वजीफा', 'scholarship', 'nsp scholarship']
  },
  {
    id: 'up-scholarship-saksham-portal',
    title: 'यूपी छात्रवृत्ति व फीस प्रतिपूर्ति (UP Scholarship Saksham Portal)',
    department: 'समाज कल्याण विभाग, उत्तर प्रदेश',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'EDUCATION_CAREER',
    benefitSummary: 'कक्षा 9, 10, 11, 12, आईटीआई, बीए, बीएससी, बीटेक की 100% कॉलेज फीस वापसी व वजीफा',
    officialApplyUrl: 'https://scholarship.up.gov.in/',
    portalName: 'scholarship.up.gov.in',
    estimatedDays: 'नवंबर से फरवरी डीबीटी भुगतान',
    govtFee: '₹0 (आवेदन निःशुल्क)',
    requiredDocuments: [
      { name: 'जाति प्रमाण, आय प्रमाण व निवास प्रमाण', mandatory: true },
      { name: 'कॉलेज फीस रसीद व गत वर्ष की मार्कशीट', mandatory: true },
      { name: 'आधार एनपीसीआई बैंक खाता', mandatory: true }
    ],
    voiceKeywords: ['यूपी स्कॉलरशिप', 'फीस वापसी', 'up scholarship', 'saksham']
  },
  {
    id: 'apaar-abc-id-card',
    title: 'अपार / एबीसी आईडी (APAAR / Academic Bank of Credits)',
    department: 'उच्च शिक्षा विभाग',
    ministryOrState: 'शिक्षा मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'EDUCATION_CAREER',
    benefitSummary: 'एक राष्ट्र, एक छात्र पहचान - स्कूल से लेकर कॉलेज तक के सभी क्रेडिट ऑनलाइन सुरक्षित',
    officialApplyUrl: 'https://www.abc.gov.in/',
    portalName: 'abc.gov.in',
    estimatedDays: 'तत्काल 1 मिनट में डाउनलोड',
    govtFee: '₹0 (आजीवन निःशुल्क)',
    requiredDocuments: [
      { name: 'आधार कार्ड व लिंक मोबाइल', mandatory: true },
      { name: 'स्कूल या कॉलेज का नाम व रोल नंबर', mandatory: true }
    ],
    voiceKeywords: ['अपार आईडी', 'abc id', 'apaar id', 'student id']
  },
  {
    id: 'pm-vidyalakshmi-education-loan',
    title: 'पीएम विद्यालक्ष्मी एजुकेशन लोन पोर्टल (Vidya Lakshmi Loan)',
    department: 'उच्च शिक्षा विभाग',
    ministryOrState: 'शिक्षा मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'EDUCATION_CAREER',
    benefitSummary: 'भारत या विदेश में पढ़ाई हेतु 40+ बैंकों से ₹7.5 लाख तक बिना किसी गारंटी के लोन पाना',
    officialApplyUrl: 'https://www.vidyalakshmi.co.in/',
    portalName: 'vidyalakshmi.co.in',
    estimatedDays: 'बैंक शाखा द्वारा 15 दिन में',
    govtFee: '₹0 (कॉमन एजुकेशन लोन फॉर्म)',
    requiredDocuments: [
      { name: 'कॉलेज एडमिशन ऑफर लेटर व फीस विवरण', mandatory: true },
      { name: 'छात्र व अभिभावक का पैन व आधार', mandatory: true }
    ],
    voiceKeywords: ['पढ़ाई लोन', 'विद्यालक्ष्मी', 'education loan', 'vidyalakshmi']
  },
  {
    id: 'ncs-job-portal-national',
    title: 'राष्ट्रीय करियर सेवा सरकारी व प्राइवेट नौकरी (NCS Job Portal)',
    department: 'रोजगार महानिदेशालय',
    ministryOrState: 'श्रम एवं रोजगार मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'EDUCATION_CAREER',
    benefitSummary: 'सरकारी नौकरियों, प्राइवेट कंपनियों व जिला रोजगार मेलों में भाग लेने हेतु सीधा पंजीकरण',
    officialApplyUrl: 'https://www.ncs.gov.in/',
    portalName: 'ncs.gov.in',
    estimatedDays: 'तत्काल जॉब सीकर आईडी जारी',
    govtFee: '₹0 (निःशुल्क)',
    requiredDocuments: [
      { name: 'आधार कार्ड व शैक्षणिक योग्यता प्रमाण', mandatory: true }
    ],
    voiceKeywords: ['नौकरी पोर्टल', 'रोजगार मेला', 'ncs', 'job portal']
  },
  {
    id: 'mgnrega-job-card-100days',
    title: 'मनरेगा 100 दिन गारंटीड काम जॉब कार्ड (MGNREGA Portal)',
    department: 'ग्रामीण विकास विभाग',
    ministryOrState: 'ग्रामीण विकास मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'EDUCATION_CAREER',
    benefitSummary: 'ग्रामीण परिवारों को हर वर्ष कम से कम 100 दिनों के गारंटीड रोजगार का कानूनी अधिकार',
    officialApplyUrl: 'https://nrega.nic.in/',
    portalName: 'nrega.nic.in',
    estimatedDays: '15 कार्यदिवस में ग्राम पंचायत द्वारा',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'परिवार के वयस्क सदस्यों का आधार कार्ड', mandatory: true },
      { name: 'डीबीटी सक्षम बैंक पासबुक', mandatory: true }
    ],
    voiceKeywords: ['मनरेगा', 'जॉब कार्ड', '100 दिन काम', 'mgnrega', 'nrega job card']
  },
  {
    id: 'bocw-shramik-labour-card',
    title: 'बीओसीडब्ल्यू लेबर कार्ड (UP BOCW Shramik Kalyan Board)',
    department: 'श्रम कल्याण विभाग',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'EDUCATION_CAREER',
    benefitSummary: 'मजदूरों की बेटियों के विवाह हेतु ₹55,000, बच्चों की छात्रवृत्ति और मुफ्त साइकिल योजना',
    officialApplyUrl: 'https://uplabour.gov.in/',
    portalName: 'uplabour.gov.in',
    estimatedDays: '20 कार्यदिवस',
    govtFee: '₹20 से ₹50 (वार्षिक सदस्यता)',
    requiredDocuments: [
      { name: 'आधार कार्ड, राशन कार्ड व बैंक पासबुक', mandatory: true },
      { name: '90 दिन निर्माण कार्य का स्व-घोषणा पत्र', mandatory: true }
    ],
    voiceKeywords: ['लेबर कार्ड', 'श्रमिक कार्ड', 'bocw', 'labour card']
  },
  {
    id: 'apprenticeship-india-training',
    title: 'शिक्षुता प्रशिक्षण व स्टाइपेंड पोर्टल (Apprenticeship India)',
    department: 'कौशल विकास और उद्यमिता मंत्रालय',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'EDUCATION_CAREER',
    benefitSummary: 'आईटीआई और डिप्लोमा धारकों को कंपनियों व रेलवे में सवेतन ऑन-द-जॉब प्रैक्टिकल ट्रेनिंग',
    officialApplyUrl: 'https://www.apprenticeshipindia.gov.in/',
    portalName: 'apprenticeshipindia.gov.in',
    estimatedDays: 'तत्काल पंजीकरण',
    govtFee: '₹0 (निःशुल्क)',
    requiredDocuments: [
      { name: 'आईटीआई/डिप्लोमा/10वीं मार्कशीट', mandatory: true },
      { name: 'आधार कार्ड व बैंक खाता (स्टाइपेंड हेतु)', mandatory: true }
    ],
    voiceKeywords: ['अप्रेंटिसशिप', 'iti training', 'apprenticeship india', 'stipend']
  },
  {
    id: 'swayam-free-online-courses',
    title: 'स्वयं निःशुल्क ऑनलाइन पाठ्यक्रम (SWAYAM MOOCs Portal)',
    department: 'उच्च शिक्षा विभाग / AICTE',
    ministryOrState: 'शिक्षा मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'EDUCATION_CAREER',
    benefitSummary: 'आईआईटी (IIT) व आईआईएम (IIM) के प्रोफेसरों द्वारा स्कूल से लेकर पीजी तक की मुफ़्त पढ़ाई',
    officialApplyUrl: 'https://swayam.gov.in/',
    portalName: 'swayam.gov.in',
    estimatedDays: 'सेमेस्टर अनुसार',
    govtFee: 'पढ़ाई 100% मुफ्त / परीक्षा फीस ₹1,000',
    requiredDocuments: [
      { name: 'ईमेल आईडी व छात्र का नाम', mandatory: true }
    ],
    voiceKeywords: ['स्वयं पोर्टल', 'मुफ्त ऑनलाइन कोर्स', 'swayam', 'free courses']
  },
  {
    id: 'pmkvy-skill-training-hub',
    title: 'प्रधानमंत्री कौशल विकास योजना (PMKVY 4.0 Free Training)',
    department: 'कौशल विकास और उद्यमिता मंत्रालय',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'EDUCATION_CAREER',
    benefitSummary: 'मुफ़्त कंप्यूटर व तकनीकी हुनर प्रशिक्षण, भारत सरकार का सर्टिफिकेट और नौकरी सहायता',
    officialApplyUrl: 'https://www.skillindiadigital.gov.in/',
    portalName: 'skillindiadigital.gov.in',
    estimatedDays: 'बैच प्रारंभ अनुसार',
    govtFee: '₹0 (पूर्णतः मुफ़्त प्रशिक्षण)',
    requiredDocuments: [
      { name: 'आधार कार्ड व मोबाइल नंबर', mandatory: true },
      { name: 'शैक्षणिक योग्यता मार्कशीट (8वीं/10वीं/12वीं)', mandatory: true }
    ],
    voiceKeywords: ['कौशल विकास', 'हुनर प्रशिक्षण', 'pmkvy', 'skill india']
  },
  {
    id: 'cuet-ug-college-entrance',
    title: 'सीयूईटी यूजी कॉलेज प्रवेश परीक्षा (CUET UG NTA)',
    department: 'राष्ट्रीय परीक्षा एजेंसी (NTA)',
    ministryOrState: 'शिक्षा मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'EDUCATION_CAREER',
    benefitSummary: 'डीयू (DU), बीएचयू (BHU), जेएनयू (JNU) और केंद्रीय विश्वविद्यालयों में बीए/बीएससी/बीकॉम दाखिला',
    officialApplyUrl: 'https://exams.nta.ac.in/CUET-UG/',
    portalName: 'exams.nta.ac.in/CUET-UG/',
    estimatedDays: 'वार्षिक परीक्षा सत्र',
    govtFee: 'विषयों की संख्या अनुसार',
    requiredDocuments: [
      { name: '10वीं व 12वीं मार्कशीट रोल नंबर', mandatory: true },
      { name: 'आधार कार्ड व पासपोर्ट फोटो', mandatory: true }
    ],
    voiceKeywords: ['सीयूईटी', 'cuet ug', 'bhu entrance', 'du admission']
  },
  {
    id: 'diksha-digital-education-app',
    title: 'दीक्षा राष्ट्रीय डिजिटल शिक्षक व छात्र मंच (DIKSHA Platform)',
    department: 'स्कूली शिक्षा और साक्षरता विभाग',
    ministryOrState: 'शिक्षा मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'EDUCATION_CAREER',
    benefitSummary: 'कक्षा 1 से 12 तक एनसीईआरटी (NCERT) और यूपी बोर्ड की सभी किताबें और वीडियो पाठ मुफ़्त में',
    officialApplyUrl: 'https://diksha.gov.in/',
    portalName: 'diksha.gov.in',
    estimatedDays: 'तत्काल ऑनलाइन',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'कक्षा व भाषा चयन', mandatory: false }
    ],
    voiceKeywords: ['दीक्षा', 'diksha', 'ncert books', 'up board books']
  },

  // ============================================================
  // 9. वित्त, पेंशन, डाकघर, पुलिस व नागरिक उपयोगिता (FINANCE_LEGAL - 26 Services)
  // ============================================================
  {
    id: 'pm-jan-dhan-yojana-zero-balance',
    title: 'प्रधानमंत्री जन धन योजना (PMJDY Zero Balance Account)',
    department: 'वित्तीय सेवाएं विभाग (DFS)',
    ministryOrState: 'वित्त मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FINANCE_LEGAL',
    benefitSummary: 'शून्य बैलेंस बैंक खाता, ₹2 लाख मुफ्त दुर्घटना बीमा और ₹10,000 ओवरड्राफ्ट सुविधा',
    officialApplyUrl: 'https://www.pmjdy.gov.in/',
    portalName: 'pmjdy.gov.in',
    estimatedDays: 'बैंक शाखा में तत्काल',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'आधार कार्ड व पासपोर्ट साइज फोटो', mandatory: true }
    ],
    voiceKeywords: ['जन धन', 'जीरो बैलेंस खाता', 'jandhan', 'pmjdy']
  },
  {
    id: 'pm-jeevan-jyoti-bima-pmjjby',
    title: 'पीएम जीवन ज्योति बीमा योजना (PMJJBY ₹2 Lakh Insurance)',
    department: 'वित्तीय सेवाएं विभाग',
    ministryOrState: 'वित्त मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FINANCE_LEGAL',
    benefitSummary: 'मात्र ₹436 सालाना में किसी भी कारण से मृत्यु होने पर परिवार को ₹2 लाख की बीमा राशि',
    officialApplyUrl: 'https://www.jansuraksha.gov.in/',
    portalName: 'jansuraksha.gov.in',
    estimatedDays: 'बैंक में तत्काल',
    govtFee: '₹436 प्रति वर्ष ऑटो-डेबिट',
    requiredDocuments: [
      { name: 'बचत बैंक खाता व आधार कार्ड (आयु 18 से 50 वर्ष)', mandatory: true }
    ],
    voiceKeywords: ['जीवन ज्योति बीमा', '436 बीमा', 'pmjjby', 'life insurance']
  },
  {
    id: 'pm-suraksha-bima-pmsby',
    title: 'पीएम सुरक्षा बीमा योजना (PMSBY ₹2 Lakh Accident Cover)',
    department: 'वित्तीय सेवाएं विभाग',
    ministryOrState: 'वित्त मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FINANCE_LEGAL',
    benefitSummary: 'मात्र ₹20 सालाना में दुर्घटना में मृत्यु या स्थायी अपंगता होने पर ₹2 लाख का बीमा',
    officialApplyUrl: 'https://www.jansuraksha.gov.in/',
    portalName: 'jansuraksha.gov.in (PMSBY)',
    estimatedDays: 'बैंक में तत्काल',
    govtFee: '₹20 प्रति वर्ष',
    requiredDocuments: [
      { name: 'बचत बैंक खाता व आधार कार्ड (आयु 18 से 70 वर्ष)', mandatory: true }
    ],
    voiceKeywords: ['सुरक्षा बीमा', '20 रुपये बीमा', 'pmsby', 'accident insurance']
  },
  {
    id: 'atal-pension-yojana-apy',
    title: 'अटल पेंशन योजना (Atal Pension Yojana - APY)',
    department: 'पेंशन निधि विनियामक और विकास प्राधिकरण (PFRDA)',
    ministryOrState: 'वित्त मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FINANCE_LEGAL',
    benefitSummary: '60 वर्ष की उम्र के बाद ₹1,000 से ₹5,000 प्रतिमाह की आजीवन पक्की सरकारी पेंशन',
    officialApplyUrl: 'https://www.npscra.nsdl.co.in/scheme-details.php',
    portalName: 'npscra.nsdl.co.in',
    estimatedDays: 'बैंक में तत्काल प्रान (PRAN) आवंटन',
    govtFee: 'उम्र अनुसार मासिक अंशदान (₹42 से ₹210)',
    requiredDocuments: [
      { name: 'बचत बैंक खाता व आधार कार्ड (आयु 18 से 40 वर्ष)', mandatory: true },
      { name: 'नॉमिनी का आधार कार्ड', mandatory: true }
    ],
    voiceKeywords: ['अटल पेंशन', 'apy', 'atal pension', 'budhapa pension']
  },
  {
    id: 'pm-mudra-loan-portal',
    title: 'प्रधानमंत्री मुद्रा योजना (PMMY Mudra Loan ₹50,000 - ₹10 Lakh)',
    department: 'वित्तीय सेवाएं विभाग',
    ministryOrState: 'वित्त मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FINANCE_LEGAL',
    benefitSummary: 'बिना किसी गारंटी या बंधक के दुकान या नया व्यापार शुरू करने हेतु शिशु, किशोर व तरुण ऋण',
    officialApplyUrl: 'https://www.udyamimitra.in/',
    portalName: 'udyamimitra.in (Mudra)',
    estimatedDays: '7 से 15 कार्यदिवस',
    govtFee: '₹0 (कोई गारंटी नहीं)',
    requiredDocuments: [
      { name: 'आधार कार्ड व पैन कार्ड', mandatory: true },
      { name: 'व्यापार प्रस्ताव व 6 माह का बैंक स्टेटमेंट', mandatory: true }
    ],
    voiceKeywords: ['मुद्रा लोन', 'बिजनेस लोन', 'mudra loan', 'pmmy']
  },
  {
    id: 'stand-up-india-loan-scheme',
    title: 'स्टैंड-अप इंडिया ऋण योजना (Stand-Up India ₹10 Lakh - ₹1 Crore)',
    department: 'वित्तीय सेवाएं विभाग',
    ministryOrState: 'वित्त मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FINANCE_LEGAL',
    benefitSummary: 'महिला उद्यमियों और एससी/एसटी वर्ग को नया कारखाना या उद्योग लगाने हेतु ₹1 करोड़ तक लोन',
    officialApplyUrl: 'https://www.standupmitra.in/',
    portalName: 'standupmitra.in',
    estimatedDays: 'बैंक परीक्षण अनुसार',
    govtFee: 'मार्जिन मनी 15%',
    requiredDocuments: [
      { name: 'जाति प्रमाण पत्र (SC/ST हेतु)', mandatory: true },
      { name: 'प्रोजेक्ट रिपोर्ट व आधार-पैन', mandatory: true }
    ],
    voiceKeywords: ['स्टैंड अप इंडिया', 'महिला उद्योग लोन', 'standup india']
  },
  {
    id: 'pm-svanidhi-vendor-loan',
    title: 'पीएम स्वनिधि स्ट्रीट वेंडर लोन (PM SVANidhi ₹10,000 - ₹50,000)',
    department: 'आवासन और शहरी कार्य मंत्रालय',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'FINANCE_LEGAL',
    benefitSummary: 'रेहड़ी, ठेला और पटरी दुकानदारों को बिना गारंटी के बेहद सस्ता व्यापारिक बैंक ऋण',
    officialApplyUrl: 'https://pmsvanidhi.mohua.gov.in/',
    portalName: 'pmsvanidhi.mohua.gov.in',
    estimatedDays: '7 से 10 कार्यदिवस',
    govtFee: '₹0 (कोई प्रोसेसिंग फीस नहीं)',
    requiredDocuments: [
      { name: 'वेंडिंग पहचान पत्र / नगर पालिका सिफ़ारिश', mandatory: true },
      { name: 'आधार कार्ड व बैंक खाता', mandatory: true }
    ],
    voiceKeywords: ['स्वनिधि', 'ठेला लोन', 'रेहड़ी लोन', 'svanidhi', 'vendor loan']
  },
  {
    id: 'sukanya-samriddhi-yojana-ssy',
    title: 'सुकन्या समृद्धि योजना (SSY बेटी खाता 8.2% ब्याज)',
    department: 'डाक विभाग व वित्तीय सेवाएं विभाग',
    ministryOrState: 'संचार एवं वित्त मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FINANCE_LEGAL',
    benefitSummary: '10 वर्ष से कम उम्र की बेटी के लिए सबसे अधिक 8.2% सरकारी ब्याज और धारा 80C टैक्स छूट',
    officialApplyUrl: 'https://www.ippbonline.com/',
    portalName: 'India Post SSY Portal',
    estimatedDays: 'तत्काल डाकघर / बैंक में',
    govtFee: 'न्यूनतम ₹250 जमा से शुरुआत',
    requiredDocuments: [
      { name: 'बालिका का जन्म प्रमाण पत्र', mandatory: true },
      { name: 'अभिभावक का आधार व पैन कार्ड', mandatory: true }
    ],
    voiceKeywords: ['सुकन्या समृद्धि', 'बेटी का खाता', 'sukanya', 'ssy']
  },
  {
    id: 'public-provident-fund-ppf',
    title: 'पब्लिक प्रॉविडेंट फंड (PPF Account - 7.1% Tax Free Return)',
    department: 'डाक विभाग व राष्ट्रीय बचत संस्थान',
    ministryOrState: 'वित्त मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FINANCE_LEGAL',
    benefitSummary: '15 वर्ष की सुरक्षित बचत, सालाना ₹1.5 लाख तक 80C छूट और पूर्णतः टैक्स-फ्री ब्याज',
    officialApplyUrl: 'https://www.ippbonline.com/',
    portalName: 'India Post PPF',
    estimatedDays: 'तत्काल डाकघर / बैंक शाखा',
    govtFee: 'न्यूनतम ₹500 वार्षिक जमा',
    requiredDocuments: [
      { name: 'आवेदक का आधार कार्ड व पैन कार्ड', mandatory: true }
    ],
    voiceKeywords: ['पीपीएफ', 'ppf account', 'public provident fund']
  },
  {
    id: 'senior-citizens-savings-scss',
    title: 'वरिष्ठ नागरिक बचत योजना (SCSS Senior Citizens 8.2% Interest)',
    department: 'डाक विभाग',
    ministryOrState: 'वित्त मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FINANCE_LEGAL',
    benefitSummary: '60 वर्ष से अधिक उम्र के बुजुर्गों को ₹30 लाख तक की जमा पर त्रैमासिक निश्चित 8.2% पेंशन ब्याज',
    officialApplyUrl: 'https://www.indiapost.gov.in/',
    portalName: 'indiapost.gov.in (SCSS)',
    estimatedDays: 'तत्काल',
    govtFee: 'न्यूनतम ₹1,000 जमा',
    requiredDocuments: [
      { name: 'उम्र 60 वर्ष प्रमाण (आधार / पेंशन पीपीओ)', mandatory: true }
    ],
    voiceKeywords: ['वरिष्ठ नागरिक बचत', 'scss', 'senior citizen scheme']
  },
  {
    id: 'mahila-samman-savings-certificate',
    title: 'महिला सम्मान बचत प्रमाण पत्र (Mahila Samman Savings 7.5%)',
    department: 'डाक विभाग',
    ministryOrState: 'वित्त मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FINANCE_LEGAL',
    benefitSummary: 'महिलाओं और बालिकाओं को 2 वर्ष की अल्पकालिक जमा पर 7.5% का आकर्षक ब्याज',
    officialApplyUrl: 'https://www.indiapost.gov.in/',
    portalName: 'indiapost.gov.in',
    estimatedDays: 'तत्काल डाकघर शाखा',
    govtFee: 'अधिकतम ₹2 लाख तक जमा',
    requiredDocuments: [
      { name: 'महिला या बालिका का आधार कार्ड', mandatory: true }
    ],
    voiceKeywords: ['महिला सम्मान बचत', 'mahila samman', 'mssc']
  },
  {
    id: 'national-savings-certificate-nsc',
    title: 'राष्ट्रीय बचत पत्र (National Savings Certificate - NSC VIII Issue)',
    department: 'डाक विभाग (DoP)',
    ministryOrState: 'संचार एवं वित्त मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FINANCE_LEGAL',
    benefitSummary: '5 वर्ष की सरकारी गारंटीड बचत, 7.7% चक्रवृद्धि ब्याज और बैंक लोन हेतु कोलैटरल मान्यता',
    officialApplyUrl: 'https://www.indiapost.gov.in/',
    portalName: 'indiapost.gov.in',
    estimatedDays: 'तत्काल डिजिटल पासबुक',
    govtFee: 'न्यूनतम ₹1,000 से शुरुआत',
    requiredDocuments: [
      { name: 'आधार कार्ड व पैन कार्ड', mandatory: true }
    ],
    voiceKeywords: ['राष्ट्रीय बचत पत्र', 'nsc', 'national savings certificate']
  },
  {
    id: 'post-office-mis-monthly-income',
    title: 'डाकघर मासिक आय योजना (Post Office Monthly Income Scheme - MIS)',
    department: 'डाक विभाग',
    ministryOrState: 'संचार मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FINANCE_LEGAL',
    benefitSummary: 'एकमुश्त जमा पर हर महीने खाते में निश्चित मासिक ब्याज (एकल खाता ₹9 लाख तक)',
    officialApplyUrl: 'https://www.indiapost.gov.in/',
    portalName: 'indiapost.gov.in',
    estimatedDays: 'तत्काल',
    govtFee: '7.4% प्रतिवर्ष मासिक देय ब्याज',
    requiredDocuments: [
      { name: 'आधार कार्ड, पैन कार्ड व बचत खाता', mandatory: true }
    ],
    voiceKeywords: ['डाकघर एमआईएस', 'mis scheme', 'monthly income scheme']
  },
  {
    id: 'jeevan-pramaan-digital-life-cert',
    title: 'जीवन प्रमाण पत्र डिजिटल सत्यापन (Jeevan Pramaan DLC Portal)',
    department: 'पेंशन एवं पेंशनभोगी कल्याण विभाग',
    ministryOrState: 'कार्मिक, लोक शिकायत तथा पेंशन मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FINANCE_LEGAL',
    benefitSummary: 'पेंशनरों को बैंक जाए बिना मोबाइल कैमरे के फेस-ऑथेंटिकेशन से घर बैठे वार्षिक जीवन प्रमाण पत्र जमा करना',
    officialApplyUrl: 'https://jeevanpramaan.gov.in/',
    portalName: 'jeevanpramaan.gov.in',
    estimatedDays: 'तत्काल 1 मिनट में पावती',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'पेंशनर का आधार कार्ड व पीपीओ नंबर (PPO Number)', mandatory: true },
      { name: 'पेंशन वितरण बैंक खाता संख्या', mandatory: true }
    ],
    voiceKeywords: ['जीवन प्रमाण पत्र', 'लाइफ सर्टिफिकेट', 'jeevan pramaan', 'pensioner certificate']
  },
  {
    id: 'nsap-national-social-pension',
    title: 'राष्ट्रीय वृद्धावस्था / विधवा / दिव्यांग पेंशन (NSAP Pension)',
    department: 'ग्रामीण विकास / समाज कल्याण विभाग',
    ministryOrState: 'ग्रामीण विकास मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FINANCE_LEGAL',
    benefitSummary: '₹1,000 से ₹1,500 हर महीने सीधे लाभार्थी के बैंक खाते में आर्थिक संबल',
    officialApplyUrl: 'https://nsap.nic.in/',
    portalName: 'nsap.nic.in',
    estimatedDays: '45 कार्यदिवस',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'आधार कार्ड (उम्र 60 वर्ष या अधिक)', mandatory: true },
      { name: 'आय प्रमाण पत्र अथवा बीपीएल राशन कार्ड', mandatory: true },
      { name: 'बैंक पासबुक (आधार डीबीटी लिंक)', mandatory: true }
    ],
    voiceKeywords: ['वृद्धा पेंशन', 'विधवा पेंशन', 'nsap pension', 'budhapa pension']
  },
  {
    id: 'sanchar-saathi-ceir-mobile-block',
    title: 'संचार साथी / खोया मोबाइल ब्लॉक व ट्रेस (Sanchar Saathi CEIR)',
    department: 'दूरसंचार विभाग (DoT)',
    ministryOrState: 'संचार मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FINANCE_LEGAL',
    benefitSummary: 'चोरी या खोए हुए मोबाइल को देशभर के सभी सिम नेटवर्क पर तुरंत ब्लॉक और ट्रेस करना',
    officialApplyUrl: 'https://www.sancharsaathi.gov.in/',
    portalName: 'sancharsaathi.gov.in',
    estimatedDays: 'तत्काल 24 घंटे में मोबाइल लॉक',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'मोबाइल फोन का 15 अंकों का IMEI नंबर', mandatory: true },
      { name: 'थाना पुलिस शिकायत / ऑनलाइन सनहा प्रति', mandatory: true },
      { name: 'मालिक का पहचान पत्र', mandatory: true }
    ],
    voiceKeywords: ['संचार साथी', 'खोया मोबाइल', 'sanchar saathi', 'ceir', 'mobile block']
  },
  {
    id: 'tafcop-sim-card-checker',
    title: 'टैफकॉप सिम चेकर (TAFCOP - आधार पर कितने सिम चालू हैं)',
    department: 'दूरसंचार विभाग (DoT)',
    ministryOrState: 'संचार मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FINANCE_LEGAL',
    benefitSummary: 'आपके आधार पर चल रहे सभी मोबाइल नंबरों की जांच और अज्ञात नंबरों को तुरंत बंद करवाना',
    officialApplyUrl: 'https://tafcop.sancharsaathi.gov.in/',
    portalName: 'tafcop.sancharsaathi.gov.in',
    estimatedDays: 'तत्काल 1 मिनट में रिपोर्ट',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'आपका वर्तमान सक्रिय मोबाइल नंबर (ओटीपी हेतु)', mandatory: true }
    ],
    voiceKeywords: ['टैफकॉप', 'सिम चेक', 'tafcop', 'aadhar par sim']
  },
  {
    id: 'ecourts-case-status-njdg',
    title: 'ई-कोर्ट केस स्टेटस व अदालती आदेश (eCourts Services)',
    department: 'न्याय विभाग व ई-कमेटी सुप्रीम कोर्ट ऑफ इंडिया',
    ministryOrState: 'विधि एवं न्याय मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FINANCE_LEGAL',
    benefitSummary: 'देशभर की किसी भी जिला अदालत या हाई कोर्ट में चल रहे मुकदमे की अगली तारीख व जज साहब का आदेश',
    officialApplyUrl: 'https://ecourts.gov.in/ecourts_home/',
    portalName: 'ecourts.gov.in',
    estimatedDays: 'तत्काल 24x7 ऑनलाइन',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: '16 अंकों की सीएनआर संख्या (CNR No) अथवा पक्षकारों का नाम', mandatory: true },
      { name: 'संबंधित न्यायालय व जनपद का नाम', mandatory: true }
    ],
    voiceKeywords: ['ई कोर्ट', 'मुकदमा तारीख', 'ecourts', 'case status', 'tarikh peshi']
  },
  {
    id: 'edaakhil-consumer-court-portal',
    title: 'ई-दाखिल उपभोक्ता अदालत (e-Daakhil Consumer Court Online)',
    department: 'उपभोक्ता मामले विभाग',
    ministryOrState: 'उपभोक्ता मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FINANCE_LEGAL',
    benefitSummary: 'घटिया सामान, वारंटी न मिलने या धोखाधड़ी पर कंपनियों के खिलाफ घर बैठे ऑनलाइन केस दर्ज करना',
    officialApplyUrl: 'https://edaakhil.nic.in/',
    portalName: 'edaakhil.nic.in',
    estimatedDays: 'अदालत द्वारा प्राथमिक नोटिस 21 दिन',
    govtFee: '₹5 लाख तक के दावों पर कोर्ट फीस ₹0',
    requiredDocuments: [
      { name: 'खरीद का बिल / कैश मेमो', mandatory: true },
      { name: 'कंपनी को भेजे गए ईमेल या शिकायत का ब्योरा', mandatory: true }
    ],
    voiceKeywords: ['उपभोक्ता फोरम', 'ई दाखिल', 'edaakhil', 'consumer court']
  },
  {
    id: 'national-consumer-helpline-1915',
    title: 'राष्ट्रीय उपभोक्ता हेल्पलाइन (National Consumer Helpline - NCH 1915)',
    department: 'उपभोक्ता मामले विभाग',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'FINANCE_LEGAL',
    benefitSummary: 'ई-कॉमर्स, एयरलाइंस, बैंक या टेलीकॉम कंपनियों की धोखाधड़ी पर सीधे मध्यस्थता व पैसे वापसी',
    officialApplyUrl: 'https://consumerhelpline.gov.in/',
    portalName: 'consumerhelpline.gov.in (1915)',
    estimatedDays: 'कंपनी द्वारा 15 से 30 दिन में समाधान',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'ऑर्डर आईडी / ट्रांजैक्शन रसीद', mandatory: true }
    ],
    voiceKeywords: ['उपभोक्ता हेल्पलाइन', '1915', 'consumer helpline', 'grahak shikayat']
  },
  {
    id: 'nalsa-free-legal-aid-lawyer',
    title: 'नालसा निःशुल्क कानूनी सहायता व वकील (NALSA Free Legal Aid)',
    department: 'राष्ट्रीय विधिक सेवा प्राधिकरण (NALSA)',
    ministryOrState: 'विधि एवं न्याय मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FINANCE_LEGAL',
    benefitSummary: 'गरीबों, महिलाओं और असहाय नागरिकों को अदालत में केस लड़ने हेतु मुफ़्त सरकारी वकील पाना',
    officialApplyUrl: 'https://nalsa.gov.in/',
    portalName: 'nalsa.gov.in',
    estimatedDays: 'जिला विधिक सेवा प्राधिकरण द्वारा 7 दिन में',
    govtFee: '₹0 (पूर्णतः निःशुल्क विधिक सेवा)',
    requiredDocuments: [
      { name: 'आवेदक का आधार कार्ड व आय प्रमाण पत्र', mandatory: true },
      { name: 'अदालती मुकदमे का विवरण / नोटिस प्रति', mandatory: true }
    ],
    voiceKeywords: ['मुफ्त वकील', 'कानूनी सहायता', 'nalsa', 'free lawyer', 'legal aid']
  },
  {
    id: 'national-cyber-crime-portal-1930',
    title: 'राष्ट्रीय साइबर अपराध 1930 हेल्पलाइन (National Cyber Crime Portal)',
    department: 'भारतीय साइबर अपराध समन्वय केंद्र (I4C)',
    ministryOrState: 'गृह मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FINANCE_LEGAL',
    benefitSummary: 'ऑनलाइन वित्तीय धोखाधड़ी (UPI/ATM ठगी) पर तत्काल पैसा बैंक में फ्रीज कराने हेतु हेल्पलाइन 1930',
    officialApplyUrl: 'https://cybercrime.gov.in/',
    portalName: 'cybercrime.gov.in (हेल्पलाइन 1930)',
    estimatedDays: 'तत्काल 2 घंटे के भीतर बैंक अलर्ट',
    govtFee: '₹0 (निःशुल्क)',
    requiredDocuments: [
      { name: 'बैंक ट्रांजैक्शन आईडी / यूटीआर नंबर (UTR No)', mandatory: true },
      { name: 'धोखाधड़ी के स्क्रीनशॉट व मैसेज', mandatory: true }
    ],
    voiceKeywords: ['साइबर क्राइम', '1930', 'ऑनलाइन ठगी', 'cyber crime', 'bank fraud']
  },
  {
    id: 'rti-online-central-portal',
    title: 'सूचना का अधिकार ऑनलाइन (RTI Online Portal)',
    department: 'कार्मिक और प्रशिक्षण विभाग (DoPT)',
    ministryOrState: 'कार्मिक, लोक शिकायत तथा पेंशन मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FINANCE_LEGAL',
    benefitSummary: 'किसी भी सरकारी विभाग से कार्यों, खर्चों और नियमों का आधिकारिक ब्योरा मांगने का कानूनी अधिकार',
    officialApplyUrl: 'https://rtionline.gov.in/',
    portalName: 'rtionline.gov.in',
    estimatedDays: '30 कार्यदिवस में उत्तर अनिवार्य',
    govtFee: '₹10 (बीपीएल कार्ड धारकों हेतु ₹0)',
    requiredDocuments: [
      { name: 'स्पष्ट लिखित प्रश्न / सूचना का विवरण', mandatory: true }
    ],
    voiceKeywords: ['आरटीआई', 'सूचना का अधिकार', 'rti online', 'rti']
  },
  {
    id: 'cpgrams-pm-grievance-portal',
    title: 'प्रधानमंत्री जन शिकायत निवारण (CPGRAMS Public Grievance)',
    department: 'प्रशासनिक सुधार और लोक शिकायत विभाग',
    ministryOrState: 'कार्मिक मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FINANCE_LEGAL',
    benefitSummary: 'सरकारी दफ्तरों में काम न होने या रिश्वतखोरी पर सीधे प्रधानमंत्री कार्यालय (PMO) को शिकायत',
    officialApplyUrl: 'https://pgportal.gov.in/',
    portalName: 'pgportal.gov.in',
    estimatedDays: '30 से 45 कार्यदिवस में निस्तारण',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'शिकायत का स्पष्ट विवरण व पूर्व पत्राचार', mandatory: true }
    ],
    voiceKeywords: ['पीजी पोर्टल', 'सीपीजीआरएएमएस', 'pgportal', 'cpgrams', 'pmo shikayat']
  },
  {
    id: 'speed-post-tracking-india-post',
    title: 'स्पीड पोस्ट ट्रैकिंग व बुकिंग (India Post Tracking Portal)',
    department: 'डाक विभाग (DoP)',
    ministryOrState: 'संचार मंत्रालय',
    scope: 'ALL_INDIA',
    category: 'FINANCE_LEGAL',
    benefitSummary: 'स्पीड पोस्ट पार्सल, आधार कार्ड डिलीवरी, पासपोर्ट व रजिस्ट्री की लाइव ट्रैकिंग स्थिति देखना',
    officialApplyUrl: 'https://www.indiapost.gov.in/_layouts/15/dop.portal.tracking/trackconsignment.aspx',
    portalName: 'indiapost.gov.in',
    estimatedDays: 'तत्काल लाइव स्टेटस',
    govtFee: 'ट्रैकिंग ₹0',
    requiredDocuments: [
      { name: '13 अंकों की कंसाइनमेंट संख्या (उदा: ED123456789IN)', mandatory: true }
    ],
    voiceKeywords: ['स्पीड पोस्ट ट्रैकिंग', 'डाक ट्रैकिंग', 'speed post', 'consignment tracking']
  },
  {
    id: 'pm-ujjwala-free-gas-connection',
    title: 'प्रधानमंत्री उज्ज्वला योजना 2.0 (मुफ्त गैस कनेक्शन व चूल्हा)',
    department: 'पेट्रोलियम और प्राकृतिक गैस मंत्रालय',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'FINANCE_LEGAL',
    benefitSummary: 'गरीब परिवारों की महिलाओं को मुफ़्त रसोई गैस सिलेंडर, रेगुलेटर और चूल्हा',
    officialApplyUrl: 'https://www.pmuy.gov.in/',
    portalName: 'pmuy.gov.in',
    estimatedDays: '15 कार्यदिवस',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'महिला मुखिया का आधार कार्ड', mandatory: true },
      { name: 'राशन कार्ड प्रति व बैंक खाता विवरण', mandatory: true }
    ],
    voiceKeywords: ['उज्ज्वला', 'गैस कनेक्शन', 'मुफ्त गैस', 'ujjwala', 'lpg gas']
  },
  {
    id: 'up-jhatpat-electricity-connection',
    title: 'झटपट नया बिजली मीटर कनेक्शन (UPPCL Jhatpat Connection)',
    department: 'उत्तर प्रदेश पावर कॉरपोरेशन लिमिटेड (UPPCL)',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'FINANCE_LEGAL',
    benefitSummary: 'घरेलू (1kW से 4kW) या दुकान के लिए ऑनलाइन नया बिजली मीटर व कनेक्शन 7 दिन में पाना',
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
    id: 'up-bijli-bill-check-pay',
    title: 'यूपी बिजली बिल देखें व ऑनलाइन भुगतान (UPPCL Bill Pay)',
    department: 'उत्तर प्रदेश पावर कॉरपोरेशन लिमिटेड (UPPCL)',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'FINANCE_LEGAL',
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
  {
    id: 'up-police-character-pcc',
    title: 'यूपी पुलिस चरित्र प्रमाण पत्र (UP Police CCTNS Character PCC)',
    department: 'उत्तर प्रदेश पुलिस तकनीकी सेवाएं (CCTNS)',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'FINANCE_LEGAL',
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
    id: 'up-cm-jansunwai-1076',
    title: 'यूपी जनसुनवाई समाधान (UP Jansunwai Anti-Corruption Portal 1076)',
    department: 'प्रशासनिक सुधार विभाग',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'FINANCE_LEGAL',
    benefitSummary: 'थाने, तहसील या ब्लॉक में काम न होने या रिश्वतखोरी पर सीधे मुख्यमंत्री कार्यालय को शिकायत',
    officialApplyUrl: 'https://jansunwai.up.nic.in/',
    portalName: 'jansunwai.up.nic.in (1076)',
    estimatedDays: '15 से 30 कार्यदिवस में निस्तारण',
    govtFee: '₹0 (पूर्णतः निःशुल्क)',
    requiredDocuments: [
      { name: 'शिकायत का स्पष्ट विवरण', mandatory: true },
      { name: 'पुराने प्रार्थना पत्र की प्रति', mandatory: false }
    ],
    voiceKeywords: ['जनसुनवाई', 'मुख्यमंत्री शिकायत', '1076', 'jansunwai', 'samadhan portal', 'shikayat']
  },
  {
    id: 'up-fcs-ration-card-portal',
    title: 'यूपी नया राशन कार्ड / संशोधन (FCS UP Ration Card Portal)',
    department: 'खाद्य एवं रसद विभाग, उत्तर प्रदेश',
    ministryOrState: 'उत्तर प्रदेश शासन',
    scope: 'UP_STATE',
    category: 'FINANCE_LEGAL',
    benefitSummary: 'पात्र गृहस्थी व अंत्योदय कार्ड द्वारा प्रति यूनिट 5 किलो मुफ्त सरकारी अनाज (गेहूं-चावल)',
    officialApplyUrl: 'https://fcs.up.gov.in/',
    portalName: 'fcs.up.gov.in',
    estimatedDays: '30 कार्यदिवस (आपूर्ति निरीक्षक जांच)',
    govtFee: '₹0 से ₹20',
    requiredDocuments: [
      { name: 'महिला मुखिया का आधार कार्ड व बैंक पासबुक', mandatory: true },
      { name: 'परिवार के सभी सदस्यों के आधार कार्ड', mandatory: true },
      { name: 'आय प्रमाण पत्र व निवास प्रमाण', mandatory: true }
    ],
    voiceKeywords: ['राशन कार्ड', 'राशन पर्ची', 'गल्ला कार्ड', 'ration card', 'fcs up', 'rasan']
  },
  {
    id: 'pm-surya-ghar-solar-subsidy',
    title: 'पीएम सूर्य घर मुफ्त बिजली योजना (PM Surya Ghar Solar Subsidy)',
    department: 'नवीन और नवीकरणीय ऊर्जा मंत्रालय',
    ministryOrState: 'भारत सरकार',
    scope: 'ALL_INDIA',
    category: 'FINANCE_LEGAL',
    benefitSummary: 'घर की छत पर सोलर पैनल लगवाने पर ₹78,000 तक सीधी बैंक सब्सिडी और 300 यूनिट मुफ्त बिजली',
    officialApplyUrl: 'https://pmsuryaghar.gov.in/',
    portalName: 'pmsuryaghar.gov.in',
    estimatedDays: 'डिस्कॉम तकनीकी स्वीकृति अनुसार',
    govtFee: 'सब्सिडी बाद केवल शेष उपकरण मूल्य',
    requiredDocuments: [
      { name: 'नवीनतम बिजली बिल की प्रति', mandatory: true },
      { name: 'आधार कार्ड व बैंक पासबुक प्रति', mandatory: true },
      { name: 'छत की स्पष्ट तस्वीर', mandatory: true }
    ],
    voiceKeywords: ['सोलर', 'सूर्य घर', 'सोलर पैनल', 'मुफ्त बिजली सब्सिडी', 'surya ghar', 'solar rooftop']
  }
];
