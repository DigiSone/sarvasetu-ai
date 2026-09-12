export interface DiscrepancyReport {
  hasConflict: boolean;
  field: string;
  valA: string;
  valB: string;
  voiceResolutionPrompt: string;
}

export class SelfHealingAffidavitEngine {
  public static detectDiscrepancy(docA: any, docB: any): DiscrepancyReport | null {
    if (docA.name && docB.name && docA.name.trim().toLowerCase() !== docB.name.trim().toLowerCase()) {
      return {
        hasConflict: true,
        field: 'NAME',
        valA: docA.name,
        valB: docB.name,
        voiceResolutionPrompt: `भैया, आपके आधार कार्ड में नाम "${docA.name}" है और दूसरे कागज़ में "${docB.name}"। आप सरकारी रिकॉर्ड में कौन सा नाम सही रखवाना चाहते हैं?`
      };
    }
    return null;
  }

  public static generateSelfDeclarationAffidavit(
    chosenName: string,
    wrongName: string,
    maskedId: string,
    consentHash: string
  ): string {
    const today = new Date().toLocaleDateString('hi-IN');
    return `सत्यनिष्ठा स्व-घोषणा पत्र (शपथ-पत्र) - मैं, ${chosenName}, पहचान पत्र संख्या ${maskedId}, घोषित करता/करती हूँ कि त्रुटिवश मेरा नाम "${wrongName}" भी दर्ज हो गया है। दोनों एक ही व्यक्ति हैं। तिथि: ${today} | हैश: ${consentHash}`;
  }
}
