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
  formFields: FormFieldDefinition[];
  requiredUploads: string[];
}

export function getServiceWorkflowSchema(serviceId: string, serviceTitle: string): ServiceWorkflowSchema {
  const title = serviceTitle.toLowerCase();
  const id = serviceId.toLowerCase();

  // 1. भूलेख खतौनी / भू-नक्शा (शुद्ध डेटा लुकअप - नो अपलोड)
  if (title.includes('खतौनी') || title.includes('भूलेख') || title.includes('नक्शा') || id.includes('bhulekh') || id.includes('naksha')) {
    return {
      isDirectLookup: true,
      formFields: [
        {
          id: 'tehsil',
          label: 'तहसील चुनें',
          type: 'select',
          options: ['रॉबर्ट्सगंज (सदर)', 'घोरावल', 'दुद्धी', 'ओबरा'],
          required: true,
          defaultValue: 'रॉबर्ट्सगंज (सदर)'
        },
        {
          id: 'villageName',
          label: 'राजस्व ग्राम / मौजा का नाम',
          placeholder: 'उदा. उरमौरा, लोढ़ी, पन्नूगंज, चोपन',
          type: 'text',
          required: true
        },
        {
          id: 'searchBy',
          label: 'खोजने का आधार',
          type: 'select',
          options: ['खसरा / गाटा संख्या द्वारा', 'खाता संख्या द्वारा', 'खातेदार के नाम द्वारा'],
          required: true,
          defaultValue: 'खसरा / गाटा संख्या द्वारा'
        },
        {
          id: 'recordIdentifier',
          label: 'गाटा संख्या / खाता संख्या / नाम दर्ज करें',
          placeholder: 'उदा. गाटा सं. 142 अथवा राम लखन',
          type: 'text',
          required: true
        }
      ],
      requiredUploads: []
    };
  }

  // 2. आय प्रमाण पत्र
  if (title.includes('आय प्रमाण') || id.includes('income')) {
    return {
      isDirectLookup: false,
      formFields: [
        { id: 'fatherOrHusbandName', label: 'पिता / पति का नाम', placeholder: 'उदा. श्री रामेश्वर मिश्र', type: 'text', required: true },
        { id: 'profession', label: 'व्यवसाय / पेशा', type: 'select', options: ['कृषि / किसानी', 'दैनिक श्रमिक / मजदूरी', 'दुकानदार / लघु व्यवसाय', 'निजी सेवा / अन्य'], required: true, defaultValue: 'कृषि / किसानी' },
        { id: 'annualIncome', label: 'परिवार की कुल वार्षिक आय (₹)', placeholder: 'उदा. 48000', type: 'number', required: true },
        { id: 'fullAddress', label: 'स्थायी निवास का पूरा पता', placeholder: 'मकान नं., ग्राम, पोस्ट, तहसील, पिनकोड', type: 'text', required: true }
      ],
      requiredUploads: ['आवेदक की पासपोर्ट साइज फोटो', 'स्व-प्रमाणित घोषणा पत्र (Self Declaration)']
    };
  }

  // 3. जाति प्रमाण पत्र
  if (title.includes('जाति प्रमाण') || id.includes('caste')) {
    return {
      isDirectLookup: false,
      formFields: [
        { id: 'fatherName', label: 'पिता का नाम', placeholder: 'उदा. श्री रामेश्वर मिश्र', type: 'text', required: true },
        { id: 'casteCategory', label: 'जाति वर्ग', type: 'select', options: ['अन्य पिछड़ा वर्ग (OBC)', 'अनुसूचित जाति (SC)', 'अनुसूचित जनजाति (ST)'], required: true, defaultValue: 'अन्य पिछड़ा वर्ग (OBC)' },
        { id: 'subCaste', label: 'उपजाति (Sub-Caste)', placeholder: 'उदा. मौर्य, यादव, पटेल, गोंड, कोल', type: 'text', required: true },
        { id: 'fullAddress', label: 'स्थायी निवास का पूरा पता', placeholder: 'ग्राम, पोस्ट, तहसील, पिनकोड', type: 'text', required: true }
      ],
      requiredUploads: ['पासपोर्ट साइज फोटो', 'स्व-प्रमाणित घोषणा पत्र', 'पारिवारिक जाति साक्ष्य (पिता/बाबा का प्रमाण)']
    };
  }

  // 4. मूल निवास प्रमाण पत्र
  if (title.includes('निवास') || id.includes('domicile')) {
    return {
      isDirectLookup: false,
      formFields: [
        { id: 'fatherOrHusbandName', label: 'पिता / पति का नाम', placeholder: 'उदा. श्री रामेश्वर मिश्र', type: 'text', required: true },
        { id: 'residenceDuration', label: 'निवास की अवधि', placeholder: 'उदा. जन्म से अथवा 15 वर्ष', type: 'text', required: true },
        { id: 'fullAddress', label: 'स्थायी निवास का पूरा पता', placeholder: 'मकान नं., ग्राम, पोस्ट, तहसील', type: 'text', required: true }
      ],
      requiredUploads: ['आवेदक की पासपोर्ट फोटो', 'स्व-प्रमाणित घोषणा पत्र', 'निवास साक्ष्य (बिजली बिल / खतौनी / वोटर कार्ड)']
    };
  }

  // 5. बिजली बिल भुगतान व जांच (शुद्ध खाता संख्या लुकअप)
  if (title.includes('बिजली बिल') || id.includes('bill')) {
    return {
      isDirectLookup: true,
      formFields: [
        { id: 'discom', label: 'विद्युत वितरण निगम', type: 'select', options: ['पूर्वांचल विद्युत वितरण निगम (PVVNL)', 'मध्यांचल (MVVNL)', 'दक्षिणांचल (DVVNL)', 'पश्चिमांचल (PVVNL)'], required: true, defaultValue: 'पूर्वांचल विद्युत वितरण निगम (PVVNL)' },
        { id: 'accountId', label: '10 अंकों का विद्युत खाता संख्या (Account ID)', placeholder: 'उदा. 7418529630 (बिल पर अंकित)', type: 'number', required: true }
      ],
      requiredUploads: []
    };
  }

  // 6. ई-चालान जांच व भुगतान (Parivahan e-Challan - नो अपलोड)
  if (title.includes('चालान') || id.includes('challan')) {
    return {
      isDirectLookup: true,
      formFields: [
        { id: 'vehicleNo', label: 'गाड़ी नंबर (वाहन पंजीयन संख्या)', placeholder: 'उदा. UP64AB1234', type: 'text', required: true },
        { id: 'chassisLast5', label: 'चेचिस या इंजन नंबर के अंतिम 5 अंक', placeholder: 'उदा. 54321', type: 'text', required: true }
      ],
      requiredUploads: []
    };
  }

  // सामान्य डिफ़ॉल्ट
  return {
    isDirectLookup: false,
    formFields: [
      { id: 'fatherOrHusbandName', label: 'पिता / पति / अभिभावक का नाम', placeholder: 'उदा. श्री रामेश्वर मिश्र', type: 'text', required: true },
      { id: 'fullAddress', label: 'पूर्ण स्थायी पता व स्थान', placeholder: 'ग्राम, पोस्ट, तहसील, पिनकोड', type: 'text', required: true }
    ],
    requiredUploads: ['आधार कार्ड / पहचान प्रमाण', 'संबंधित सेवा का आवश्यक साक्ष्य']
  };
}
