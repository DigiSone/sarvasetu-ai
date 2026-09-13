export interface StateConfig {
  code: string;
  name: string;
  hindiName: string;
  flagEmoji: string;
  servicesOverride: Record<string, { url: string; portalName: string }>;
}

export const SUPPORTED_STATES: StateConfig[] = [
  {
    code: 'UP',
    name: 'Uttar Pradesh',
    hindiName: 'उत्तर प्रदेश',
    flagEmoji: '🏛️',
    servicesOverride: {
      'bhulekh-khatoni': { url: 'https://upbhulekh.gov.in/', portalName: 'UP Bhulekh Portal' },
      'caste-certificate': { url: 'https://edistrict.up.gov.in/', portalName: 'eDistrict UP (राजस्व विभाग)' },
      'income-certificate': { url: 'https://edistrict.up.gov.in/', portalName: 'eDistrict UP' },
      'domicile-certificate': { url: 'https://edistrict.up.gov.in/', portalName: 'eDistrict UP' },
      'ration-card': { url: 'https://fcs.up.gov.in/', portalName: 'FCS UP Food Portal' },
      'new-electricity-connection': { url: 'https://upenergy.in/', portalName: 'UP Jhatpat Connection' },
      'marriage-registration': { url: 'https://igrsup.gov.in/', portalName: 'IGRS UP Marriage Portal' },
      'police-pcc': { url: 'https://cctnsup.gov.in/', portalName: 'UP Police CCTNS Citizen Portal' },
      'online-property-tax': { url: 'https://e-nagarsewaup.gov.in/', portalName: 'e-NagarSewa UP' }
    }
  },
  {
    code: 'BR',
    name: 'Bihar',
    hindiName: 'बिहार',
    flagEmoji: '🌾',
    servicesOverride: {
      'bhulekh-khatoni': { url: 'https://biharbhumi.bihar.gov.in/', portalName: 'बिहार भूमि राजस्व पोर्टल' },
      'caste-certificate': { url: 'https://serviceonline.bihar.gov.in/', portalName: 'RTPS Bihar (लोक सेवाएं)' },
      'income-certificate': { url: 'https://serviceonline.bihar.gov.in/', portalName: 'RTPS Bihar' },
      'domicile-certificate': { url: 'https://serviceonline.bihar.gov.in/', portalName: 'RTPS Bihar' },
      'ration-card': { url: 'https://epds.bihar.gov.in/', portalName: 'ePDS Bihar Food' },
      'new-electricity-connection': { url: 'https://nbpdcl.co.in/', portalName: 'सुविधा बिजली (SBPDCL/NBPDCL)' },
      'police-pcc': { url: 'https://serviceonline.bihar.gov.in/', portalName: 'बिहार पुलिस चरित्र सत्यापन' }
    }
  },
  {
    code: 'MP',
    name: 'Madhya Pradesh',
    hindiName: 'मध्य प्रदेश',
    flagEmoji: '🌳',
    servicesOverride: {
      'bhulekh-khatoni': { url: 'https://mpbhulekh.gov.in/', portalName: 'MP भूलेख पोर्टल' },
      'caste-certificate': { url: 'https://mpedistrict.gov.in/', portalName: 'MP e-District लोक सेवा' },
      'income-certificate': { url: 'https://mpedistrict.gov.in/', portalName: 'MP e-District' },
      'domicile-certificate': { url: 'https://mpedistrict.gov.in/', portalName: 'MP e-District' },
      'ration-card': { url: 'https://rationmitra.nic.in/', portalName: 'एमपी राशन मित्र पोर्टल' },
      'new-electricity-connection': { url: 'https://mpez.co.in/', portalName: 'MP पूर्व/पश्चिम विद्युत निगम' }
    }
  },
  {
    code: 'RJ',
    name: 'Rajasthan',
    hindiName: 'राजस्थान',
    flagEmoji: '🏰',
    servicesOverride: {
      'bhulekh-khatoni': { url: 'https://apnakhata.rajasthan.gov.in/', portalName: 'अपना खाता राजस्थान भूलेख' },
      'caste-certificate': { url: 'https://emitra.rajasthan.gov.in/', portalName: 'e-Mitra Rajasthan' },
      'income-certificate': { url: 'https://emitra.rajasthan.gov.in/', portalName: 'e-Mitra Rajasthan' },
      'domicile-certificate': { url: 'https://emitra.rajasthan.gov.in/', portalName: 'e-Mitra Rajasthan' },
      'ration-card': { url: 'https://food.rajasthan.gov.in/', portalName: 'खाद्य एवं नागरिक आपूर्ति राजस्थान' },
      'new-electricity-connection': { url: 'https://energy.rajasthan.gov.in/', portalName: 'डिस्कॉम राजस्थान' }
    }
  },
  {
    code: 'DL',
    name: 'Delhi',
    hindiName: 'दिल्ली (NCT)',
    flagEmoji: '🏙️',
    servicesOverride: {
      'bhulekh-khatoni': { url: 'https://dlrc.delhi.gov.in/', portalName: 'Delhi Land Records (DLRC)' },
      'caste-certificate': { url: 'https://edistrict.delhigovt.nic.in/', portalName: 'e-District Delhi Government' },
      'income-certificate': { url: 'https://edistrict.delhigovt.nic.in/', portalName: 'e-District Delhi' },
      'domicile-certificate': { url: 'https://edistrict.delhigovt.nic.in/', portalName: 'e-District Delhi' },
      'ration-card': { url: 'https://nfs.delhigov.in/', portalName: 'Delhi Food & Civil Supplies' },
      'new-electricity-connection': { url: 'https://www.bsesdelhi.com/', portalName: 'BSES / TPDDL Delhi' }
    }
  },
  {
    code: 'MH',
    name: 'Maharashtra',
    hindiName: 'महाराष्ट्र',
    flagEmoji: '🚩',
    servicesOverride: {
      'bhulekh-khatoni': { url: 'https://bhulekh.mahabhumi.gov.in/', portalName: 'महाभूलेख (MahaBhulekh)' },
      'caste-certificate': { url: 'https://aaplesarkar.mahaonline.gov.in/', portalName: 'आपले सरकार (Aaple Sarkar)' },
      'income-certificate': { url: 'https://aaplesarkar.mahaonline.gov.in/', portalName: 'आपले सरकार' },
      'domicile-certificate': { url: 'https://aaplesarkar.mahaonline.gov.in/', portalName: 'आपले सरकार' },
      'ration-card': { url: 'https://rcms.mahafood.gov.in/', portalName: 'MahaFood PDS Portal' },
      'new-electricity-connection': { url: 'https://www.mahadiscom.in/', portalName: 'महावितरण (MSEDCL)' }
    }
  },
  {
    code: 'HR',
    name: 'Haryana',
    hindiName: 'हरियाणा',
    flagEmoji: '🚜',
    servicesOverride: {
      'bhulekh-khatoni': { url: 'https://jamabandi.nic.in/', portalName: 'जमाबंदी हरियाणा भूलेख' },
      'caste-certificate': { url: 'https://saralharyana.gov.in/', portalName: 'अंत्योदय सरल हरियाणा' },
      'income-certificate': { url: 'https://saralharyana.gov.in/', portalName: 'सरल हरियाणा' },
      'domicile-certificate': { url: 'https://saralharyana.gov.in/', portalName: 'सरल हरियाणा' },
      'ration-card': { url: 'https://haryanafood.gov.in/', portalName: 'खाद्य एवं आपूर्ति विभाग हरियाणा' },
      'new-electricity-connection': { url: 'https://dhbvn.org.in/', portalName: 'DHBVN / UHBVN हरियाणा बिजली' }
    }
  },
  {
    code: 'ALL',
    name: 'National / All India',
    hindiName: 'अखिल भारतीय (केंद्र सरकार)',
    flagEmoji: '🇮🇳',
    servicesOverride: {}
  }
];
