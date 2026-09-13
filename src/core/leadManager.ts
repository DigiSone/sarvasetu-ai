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

export class LeadManager {
  // 1. नई लीड सुरक्षित स्थानीय स्टोरेज में सेव करना
  public static saveLead(leadData: Omit<CitizenLead, 'id' | 'timestamp' | 'status'>): CitizenLead {
    const leads = this.getAllLeads();
    const newLead: CitizenLead = {
      ...leadData,
      id: 'LEAD_' + Date.now(),
      timestamp: new Date().toLocaleString('hi-IN'),
      status: 'NEW'
    };
    leads.unshift(newLead);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
    return newLead;
  }

  // 2. सभी लीड्स प्राप्त करना
  public static getAllLeads(): CitizenLead[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  // 3. एडमिन के लिए 1-क्लिक एक्सेल/CSV डाउनलोड (डेटा बैकअप)
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
