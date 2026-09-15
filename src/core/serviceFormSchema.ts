export interface FormFieldDefinition {
  id: string;
  label: string;
  placeholder?: string;
  type: 'text' | 'number' | 'select';
  options?: string[];
  required: boolean;
  defaultValue?: string;
}

export interface ServiceWorkflowSchema {
  isDirectLookup: boolean;
  searchGuidance: string;
  formFields: FormFieldDefinition[];
  requiredUploads: string[];
}

export function getServiceWorkflowSchema(serviceId: string, serviceTitle: string): ServiceWorkflowSchema {
  const title = serviceTitle.toLowerCase();
  const id = serviceId.toLowerCase();

  // 1. भूलेख खतौनी / भू-नक्शा
  if (title.includes('खतौनी') || title.includes('भूलेख') || title.includes('नक्शा') || id.includes('bhulekh') || id.includes('naksha')) {
    return {
      isDirectLookup: true,
      searchGuidance: 'खतौनी व भू-नक्शा हेतु किसी दस्तावेज़ अपलोड की आवश्यकता नहीं है। अपनी तहसील, ग्राम और गाटा संख्या दर्ज करें।',
      formFields: [
        { id: 'tehsil', label: 'तहसील चुनें', type: 'select', options: ['रॉबर्ट्सगंज (सदर)', 'घोरावल', 'दुद्धी', 'ओबरा'], required: true, defaultValue: 'रॉबर्ट्सगंज (सदर)' },
        { id: 'villageName', label: 'राजस्व ग्राम / मौजा का नाम', placeholder: 'उदा. उरमौरा, लोढ़ी, पन्नूगंज, चोपन', type: 'text', required: true },
        { id: 'searchBy', label: 'खोजने का आधार', type: 'select', options: ['खसरा / गाटा संख्या द्वारा', 'खाता संख्या द्वारा', 'खातेदार के नाम द्वारा'], required: true, defaultValue: 'खसरा / गाटा संख्या द्वारा' },
        { id: 'recordIdentifier', label: 'गाटा संख्या / खाता संख्या / नाम दर्ज करें', placeholder: 'उदा. गाटा सं. 142 अथवा राम लखन', type: 'text', required: true }
      ],
      requiredUploads: []
    };
  }

  // 2. दाखिल-खारिज / नामांतरण / वरासत
  if (title.includes('दाखिल') || title.includes('नामांतरण') || title.includes('वरासत') || title.includes('धारा 80')) {
    return {
      isDirectLookup: false,
      searchGuidance: 'नामांतरण/वरासत हेतु विलेख (बैनामा/वसीयत) व खतौनी विवरण भरें।',
      formFields: [
        { id: 'tehsil', label: 'संबंधित तहसील', type: 'select', options: ['रॉबर्ट्सगंज (सदर)', 'घोरावल', 'दुद्धी', 'ओबरा'], required: true, defaultValue: 'रॉबर्ट्सगंज (सदर)' },
        { id: 'villageName', label: 'ग्राम / मौजा', placeholder: 'ग्राम का नाम', type: 'text', required: true },
        { id: 'gataNumber', label: 'गाटा / खसरा संख्या', placeholder: 'उदा. 245/1', type: 'text', required: true },
        { id: 'deedNumber', label: 'रजिस्ट्री विलेख संख्या व दिनांक', placeholder: 'उदा. 1042/2026', type: 'text', required: true }
      ],
      requiredUploads: ['पंजीकृत बैनामा / वसीयत की प्रति', 'वर्तमान खतौनी नकल']
    };
  }

  // 3. आय प्रमाण पत्र
  if (title.includes('आय प्रमाण') || id.includes('income')) {
    return {
      isDirectLookup: false,
      searchGuidance: 'आय प्रमाण पत्र हेतु पिता/पति का नाम, पेशा व वार्षिक आय विवरण भरें।',
      formFields: [
        { id: 'fatherOrHusbandName', label: 'पिता / पति का नाम', placeholder: 'उदा. श्री रामेश्वर मिश्र', type: 'text', required: true },
        { id: 'profession', label: 'व्यवसाय / पेशा', type: 'select', options: ['कृषि / किसानी', 'दैनिक श्रमिक / मजदूरी', 'दुकानदार / लघु व्यवसाय', 'निजी सेवा / अन्य'], required: true, defaultValue: 'कृषि / किसानी' },
        { id: 'annualIncome', label: 'परिवार की कुल वार्षिक आय (₹)', placeholder: 'उदा. 48000', type: 'number', required: true },
        { id: 'fullAddress', label: 'स्थायी निवास का पूरा पता', placeholder: 'मकान नं., ग्राम, पोस्ट, तहसील, पिनकोड', type: 'text', required: true }
      ],
      requiredUploads: ['आवेदक की पासपोर्ट साइज फोटो', 'स्व-प्रमाणित घोषणा पत्र (Self Declaration)']
    };
  }

  // 4. जाति प्रमाण पत्र
  if (title.includes('जाति प्रमाण') || id.includes('caste')) {
    return {
      isDirectLookup: false,
      searchGuidance: 'जाति प्रमाण पत्र हेतु अपनी श्रेणी एवं उपजाति का सही विवरण दर्ज करें।',
      formFields: [
        { id: 'fatherName', label: 'पिता का नाम', placeholder: 'उदा. श्री रामेश्वर मिश्र', type: 'text', required: true },
        { id: 'casteCategory', label: 'जाति वर्ग', type: 'select', options: ['अन्य पिछड़ा वर्ग (OBC)', 'अनुसूचित जाति (SC)', 'अनुसूचित जनजाति (ST)'], required: true, defaultValue: 'अन्य पिछड़ा वर्ग (OBC)' },
        { id: 'subCaste', label: 'उपजाति (Sub-Caste)', placeholder: 'उदा. मौर्य, यादव, पटेल, गोंड, कोल', type: 'text', required: true },
        { id: 'fullAddress', label: 'स्थायी निवास का पूरा पता', placeholder: 'ग्राम, पोस्ट, तहसील, पिनकोड', type: 'text', required: true }
      ],
      requiredUploads: ['पासपोर्ट साइज फोटो', 'स्व-प्रमाणित घोषणा पत्र', 'पारिवारिक जाति साक्ष्य (पिता/बाबा का प्रमाण)']
    };
  }

  // 5. मूल निवास प्रमाण पत्र
  if (title.includes('निवास') || id.includes('domicile')) {
    return {
      isDirectLookup: false,
      searchGuidance: 'निवास प्रमाण पत्र हेतु वर्तमान पते पर रहने की समयावधि दर्ज करें।',
      formFields: [
        { id: 'fatherOrHusbandName', label: 'पिता / पति का नाम', placeholder: 'उदा. श्री रामेश्वर मिश्र', type: 'text', required: true },
        { id: 'residenceDuration', label: 'निवास की अवधि', placeholder: 'उदा. जन्म से अथवा 15 वर्ष', type: 'text', required: true },
        { id: 'fullAddress', label: 'स्थायी निवास का पूरा पता', placeholder: 'मकान नं., ग्राम, पोस्ट, तहसील', type: 'text', required: true }
      ],
      requiredUploads: ['आवेदक की पासपोर्ट फोटो', 'स्व-प्रमाणित घोषणा पत्र', 'निवास साक्ष्य (बिजली बिल / खतौनी / वोटर कार्ड)']
    };
  }

  // 6. बिजली बिल भुगतान व जांच
  if (title.includes('बिजली बिल') || id.includes('bill')) {
    return {
      isDirectLookup: true,
      searchGuidance: 'बिजली बिल जांच व भुगतान हेतु किसी अपलोड की आवश्यकता नहीं है। अपना 10-अंकीय खाता नंबर दर्ज करें।',
      formFields: [
        { id: 'discom', label: 'विद्युत वितरण निगम', type: 'select', options: ['पूर्वांचल विद्युत वितरण निगम (PVVNL)', 'मध्यांचल (MVVNL)', 'दक्षिणांचल (DVVNL)', 'पश्चिमांचल (PVVNL)'], required: true, defaultValue: 'पूर्वांचल विद्युत वितरण निगम (PVVNL)' },
        { id: 'accountId', label: '10 अंकों का विद्युत खाता संख्या (Account ID)', placeholder: 'उदा. 7418529630 (बिल पर अंकित)', type: 'number', required: true }
      ],
      requiredUploads: []
    };
  }

  // 7. ई-चालान जांच व भुगतान
  if (title.includes('चालान') || id.includes('challan')) {
    return {
      isDirectLookup: true,
      searchGuidance: 'चालान जांच हेतु वाहन संख्या और चेचिस नंबर दर्ज करें। कोई अपलोड नहीं चाहिए।',
      formFields: [
        { id: 'vehicleNo', label: 'गाड़ी नंबर (वाहन पंजीयन संख्या)', placeholder: 'उदा. UP64AB1234', type: 'text', required: true },
        { id: 'chassisLast5', label: 'चेचिस या इंजन नंबर के अंतिम 5 अंक', placeholder: 'उदा. 54321', type: 'text', required: true }
      ],
      requiredUploads: []
    };
  }

  // 8. पीएम किसान सम्मान निधि
  if (title.includes('पीएम किसान') || title.includes('pm kisan') || id.includes('kisan')) {
    return {
      isDirectLookup: true,
      searchGuidance: 'पीएम किसान ₹6,000 किस्त व e-KYC स्थिति जांचने हेतु केवल 12-अंकीय आधार नंबर दर्ज करें।',
      formFields: [
        { id: 'aadhaarNo', label: '12-अंकीय आधार संख्या', placeholder: 'उदा. 1234 5678 9012', type: 'text', required: true },
        { id: 'farmerMobile', label: 'आधार से लिंक मोबाइल नंबर', placeholder: 'उदा. 9876543210', type: 'text', required: true }
      ],
      requiredUploads: []
    };
  }

  // 9. आयुष्मान भारत ₹5 लाख कार्ड (PMJAY / ABHA)
  if (title.includes('आयुष्मान') || title.includes('abha') || id.includes('ayushman')) {
    return {
      isDirectLookup: true,
      searchGuidance: 'आयुष्मान भारत पात्रता जांच व आभा आईडी बनाने हेतु आधार संख्या या राशन कार्ड नंबर दर्ज करें।',
      formFields: [
        { id: 'searchMode', label: 'खोजने का विकल्प', type: 'select', options: ['राशन कार्ड संख्या द्वारा', 'आधार संख्या द्वारा', 'पीएम-जय परिवार आईडी द्वारा'], required: true, defaultValue: 'राशन कार्ड संख्या द्वारा' },
        { id: 'idNumber', label: 'राशन कार्ड / आधार / PMJAY नंबर दर्ज करें', placeholder: 'उदा. 219876543210', type: 'text', required: true }
      ],
      requiredUploads: []
    };
  }

  // 10. सामान्य डिफ़ॉल्ट (अन्य सभी सेवाओं हेतु)
  return {
    isDirectLookup: false,
    searchGuidance: 'सेवा का आवेदन प्रपत्र तैयार करने हेतु आवश्यक विवरण भरें।',
    formFields: [
      { id: 'fatherOrHusbandName', label: 'पिता / पति / अभिभावक का नाम', placeholder: 'उदा. श्री रामेश्वर मिश्र', type: 'text', required: true },
      { id: 'fullAddress', label: 'पूर्ण स्थायी पता व स्थान', placeholder: 'ग्राम, पोस्ट, तहसील, पिनकोड', type: 'text', required: true }
    ],
    requiredUploads: ['आधार कार्ड / पहचान प्रमाण', 'संबंधित सेवा का आवश्यक साक्ष्य']
  };
}
