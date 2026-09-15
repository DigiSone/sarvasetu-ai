export class LeadManager {
  public static generateRefId(): string {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `SS-${Date.now().toString(36).slice(-3).toUpperCase()}-${code}`;
  }

  public static async saveLead(data: {
    name: string;
    mobile: string;
    district: string;
    serviceTitle: string;
    serviceCategory?: string;
  }): Promise<void> {
    try {
      const stored = JSON.parse(localStorage.getItem('sarvasetu_leads') || '[]');
      stored.unshift({ ...data, id: this.generateRefId(), timestamp: new Date().toISOString() });
      localStorage.setItem('sarvasetu_leads', JSON.stringify(stored.slice(0, 100)));
    } catch (e) {}
  }
}
