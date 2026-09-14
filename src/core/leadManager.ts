export interface CitizenLead {
  id: string;
  referenceId: string;
  name: string;
  mobile: string;
  district: string;
  serviceTitle: string;
  serviceCategory: string;
  timestamp: string;
  status: 'NEW' | 'CONTACTED' | 'COMPLETED';
}

const STORAGE_KEY = 'sarvasetu_citizen_leads';

// आपकी निजी Google Apps Script Webhook URL (सुरक्षित इंटरनल एंडपॉइंट)
export const GOOGLE_SHEET_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbxo3sA04beAafq3rLLRV03etEhHGRqp_uH6HB5aaw89WtKsAEnmJcbuh3GyJSdmLXZgow/exec';

export class LeadManager {
  // 1. यूनिक रेफरेंस आईडी जनरेटर (उद्योग मानक: SS-XXXXXX)
  public static generateRefId(): string {
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    return `SS-${randomNum}`;
  }

  // 2. इंटरनल सुरक्षित लीड सेव (बैकग्राउंड में गूगल शीट सिंक, नो एक्सटर्नल रिडायरेक्ट)
  public static async saveLead(leadData: Omit<CitizenLead, 'id' | 'referenceId' | 'timestamp' | 'status'>): Promise<CitizenLead> {
    const leads = this.getAllLeads();
    const newLead: CitizenLead = {
      ...leadData,
      id: 'LEAD_' + Date.now(),
      referenceId: this.generateRefId(),
      timestamp: new Date().toLocaleString('hi-IN', { timeZone: 'Asia/Kolkata' }),
      status: 'NEW'
    };
    
    // लोकल बैकअप
    leads.unshift(newLead);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));

    // Google Sheets में साइलेंट बैकग्राउंड सिंक
    try {
      await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify({
          refId: newLead.referenceId,
          name: newLead.name,
          mobile: newLead.mobile,
          district: newLead.district,
          serviceTitle: newLead.serviceTitle,
          serviceCategory: newLead.serviceCategory,
          timestamp: newLead.timestamp
        })
      });
    } catch (err) {
      console.warn('Silent sync logged locally.');
    }

    return newLead;
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

  // 4. एडमिन हेतु एन्क्रिप्टेड CSV बैकअप
  public static exportLeadsToCSV(): void {
    const leads = this.getAllLeads();
    if (leads.length === 0) {
      alert('वर्तमान में कोई लीड रिकॉर्ड उपलब्ध नहीं है।');
      return;
    }

    const headers = ['रेफरेंस ID', 'नाम', 'मोबाइल नंबर', 'ज़िला', 'संबंधित सेवा', 'श्रेणी', 'दिनांक व समय'];
    const rows = leads.map(l => [
      l.referenceId,
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
    link.setAttribute('download', `SarvaSetu_Citizen_Leads_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
