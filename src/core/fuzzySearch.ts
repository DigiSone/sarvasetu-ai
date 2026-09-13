// लेवेनश्टाइन डिस्टेंस आधारित स्मार्ट फ़ज़ी सर्च (स्पेलिंग गलतियों को स्वतः सुधारने वाला इंजन)
export class FuzzySearchEngine {
  private static calculateDistance(a: string, b: string): number {
    const matrix: number[][] = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1, // substitution
            matrix[i][j - 1] + 1,     // insertion
            matrix[i - 1][j] + 1      // deletion
          );
        }
      }
    }
    return matrix[b.length][a.length];
  }

  // दो शब्दों के बीच समानता स्कोर (0 से 1)
  public static similarity(s1: string, s2: string): number {
    const longer = s1.length > s2.length ? s1 : s2;
    const shorter = s1.length > s2.length ? s2 : s1;
    const longerLength = longer.length;
    if (longerLength === 0) return 1.0;
    const distance = this.calculateDistance(longer.toLowerCase(), shorter.toLowerCase());
    return (longerLength - distance) / longerLength;
  }

  // कीवर्ड या वाक्य में आंशिक या मिलता-जुलता मिलान
  public static isFuzzyMatch(query: string, target: string, threshold: number = 0.62): boolean {
    const cleanQ = query.trim().toLowerCase();
    const cleanT = target.trim().toLowerCase();

    // 1. सीधा सबस्ट्रिंग मिलान
    if (cleanT.includes(cleanQ) || cleanQ.includes(cleanT)) return true;

    // 2. शब्दों के स्तर पर तुलना (उदा: aushmn -> ayushman, rasan -> ration)
    const qWords = cleanQ.split(/\s+/);
    const tWords = cleanT.split(/\s+/);

    for (const qw of qWords) {
      if (qw.length < 3) continue;
      for (const tw of tWords) {
        if (this.similarity(qw, tw) >= threshold) return true;
      }
    }

    return false;
  }
}
