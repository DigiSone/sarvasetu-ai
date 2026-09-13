import { ApplicationRecord } from './types';

export class ReceiptGenerator {
  public static generateReceiptCanvas(record: ApplicationRecord): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 800;
    const ctx = canvas.getContext('2d');
    if (!ctx) return canvas;

    // पृष्ठभूमि (व्हाइट व बॉर्डर)
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // शीर्ष हेडर
    ctx.fillStyle = '#ea580c';
    ctx.fillRect(0, 0, canvas.width, 16);
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, 16, canvas.width, 70);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 22px sans-serif';
    ctx.fillText('सर्वसेतु - राष्ट्रीय नागरिक पावती रसीद', 30, 58);

    // सेवा का नाम
    ctx.fillStyle = '#ea580c';
    ctx.font = 'bold 20px sans-serif';
    const title = record.service === 'AYUSHMAN' 
      ? 'आयुष्मान भारत गोल्डेन कार्ड (PM-JAY)' 
      : 'नया स्थायी खाता संख्या (PAN Form 49A)';
    ctx.fillText(title, 30, 130);

    // पावती विवरण
    ctx.fillStyle = '#475569';
    ctx.font = '14px monospace';
    ctx.fillText(`पावती संख्या (Ack ID): ${record.ackNumber}`, 30, 160);
    ctx.fillText(`आवेदन तिथि: ${record.submittedAt}`, 30, 185);

    // विभाजक रेखा
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(30, 205);
    ctx.lineTo(570, 205);
    ctx.stroke();

    // नागरिक विवरण
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText('आवेदक का विवरण (e-KYC Verified):', 30, 240);

    ctx.font = '15px sans-serif';
    ctx.fillStyle = '#334155';
    ctx.fillText(`पूरा नाम: ${record.fullName}`, 30, 275);
    ctx.fillText(`जन्मतिथि: ${record.dob}`, 30, 305);
    ctx.fillText(`लिंग: ${record.gender}`, 30, 335);
    ctx.fillText(`पहचान संख्या: ${record.maskedAadhaar}`, 30, 365);
    ctx.fillText(`संलग्न दस्तावेज़: ${record.secondaryDocType}`, 30, 395);
    ctx.fillText(`बायोमेट्रिक स्कोर: ${record.livenessConfidence}% (UIDAI Passed)`, 30, 425);

    // नागरिक की फोटो (यदि उपलब्ध हो)
    if (record.selfiePhoto) {
      const img = new Image();
      img.src = record.selfiePhoto;
      ctx.drawImage(img, 430, 240, 130, 150);
      ctx.strokeStyle = '#ea580c';
      ctx.strokeRect(430, 240, 130, 150);
    }

    // मुहर / डिजिटल सत्यापन बॉक्स
    ctx.fillStyle = '#ecfdf5';
    ctx.fillRect(30, 470, 540, 110);
    ctx.strokeStyle = '#10b981';
    ctx.strokeRect(30, 470, 540, 110);

    ctx.fillStyle = '#065f46';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText('✓ डिजिटल सत्यापन मुहर (Verified Record)', 50, 505);
    ctx.font = '13px sans-serif';
    ctx.fillText('यह अभिलेख सूचना प्रौद्योगिकी अधिनियम 2000 के अंतर्गत प्रमाणित है।', 50, 535);
    ctx.fillText('सत्यापन हेतु किसी भौतिक हस्ताक्षर की आवश्यकता नहीं है।', 50, 555);

    // पादलेख बारकोड रेखाएं
    ctx.fillStyle = '#0f172a';
    for (let x = 30; x < 570; x += 6) {
      const w = (x % 12 === 0) ? 3 : 1.5;
      ctx.fillRect(x, 630, w, 50);
    }

    ctx.font = '12px monospace';
    ctx.fillStyle = '#64748b';
    ctx.fillText(`*${record.ackNumber}*`, 240, 700);

    ctx.font = '11px sans-serif';
    ctx.fillText('सर्वसेतु AI - अंत्योदय नागरिक अधिकारिता मंच | निःशुल्क जनसेवा', 130, 770);

    return canvas;
  }
}
