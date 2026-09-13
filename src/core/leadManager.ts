export interface CitizenLead {
  id: string;
  name: string;
  mobile: string;
  district: string;
  serviceTitle: string;
  serviceCategory: string;
  timestamp: string;
  status: 'NEW' | 'CONTACTED' | 'COMPLETED';
}

const STORAGE_KEY = 'sarvasetu_citizen_leads';

// आपका Google Apps Script Webhook URL
export const GOOGLE_SHEET_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbxo3sA04beAafq3rLLRV03etEhHGRqp_uH6HB5aaw89WtKsAEnmJcbuh3GyJSdmLXZgow/exec';

// आपका आधिकारिक WhatsApp नंबर (बिना + या स्पेस के 91 फॉर्मेट में)
export const FOUNDER_WHATSAPP_NUMBER = '917392965992';

export class LeadManager {
  // 1. नई लीड सेव करना (लोकल स्टोरेज + ऑटोमैटिक Google Sheets बैकएंड)
  public static async saveLead(leadData: Omit<CitizenLead, 'id' | 'timestamp' | 'status'>): Promise<CitizenLead> {
    const leads = this.getAllLeads();
    const newLead: CitizenLead = {
      ...leadData,
      id: 'LEAD_' + Date.now(),
      timestamp: new Date().toLocaleString('hi-IN'),
      status: 'NEW'
    };
    leads.unshift(newLead);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));

    // Google Sheets में असीमित डेटा सिंक (Background Sync)
    try {
      await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify({
          name: newLead.name,
          mobile: newLead.mobile,
          district: newLead.district,
          serviceTitle: newLead.serviceTitle,
          serviceCategory: newLead.serviceCategory,
          timestamp: newLead.timestamp
        })
      });
    } catch (err) {
      console.error('Google Sheet Sync Error:', err);
    }

    return newLead;
  }

  // 2. संस्थापक के WhatsApp पर सीधा अलर्ट लिंक बनाना
  public static getWhatsAppAlertUrl(lead: CitizenLead): string {
    const message = `*🔔 नई सेवा सहायता अनुरोध (सर्वसेतु AI Lead)*%0A%0A*नाम:* ${lead.name}%0A*मोबाइल:* ${lead.mobile}%0A*ज़िला:* ${lead.district}%0A*सेवा:* ${lead.serviceTitle}%0A*दिनांक व समय:* ${lead.timestamp}%0A%0A_नागरिक ने फॉर्म भरने में सहायता का अनुरोध किया है।_`;
    return `https://api.whatsapp.com/send?phone=${FOUNDER_WHATSAPP_NUMBER}&text=${message}`;
  }

  // 3. सभी लीड्स प्राप्त करना
  public static getAllLeads(): CitizenLead[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  // 4. एडमिन के लिए 1-क्लिक CSV/एक्सेल डाउनलोड
  public static exportLeadsToCSV(): void {
    const leads = this.getAllLeads();
    if (leads.length === 0) {
      alert('अभी तक कोई लीड दर्ज नहीं हुई है।');
      return;
    }

    const headers = ['Lead ID', 'नाम', 'मोबाइल नंबर', 'ज़िला', 'संबंधित सेवा', 'श्रेणी', 'दिनांक व समय'];
    const rows = leads.map(l => [
      l.id,
      `"${l.name}"`,
      `"${l.mobile}"`,
      `"${l.district}"`,
      `"${l.serviceTitle}"`,
      `"${l.serviceCategory}"`,
      `"${l.timestamp}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,﻿' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `SarvaSetu_Leads_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
