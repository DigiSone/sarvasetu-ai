export class BiometricVerifier {
  public static calculateLivenessDelta(
    ctx1: CanvasRenderingContext2D,
    ctx2: CanvasRenderingContext2D,
    width: number,
    height: number
  ): { isLive: boolean; confidence: number } {
    const data1 = ctx1.getImageData(0, 0, width, height).data;
    const data2 = ctx2.getImageData(0, 0, width, height).data;

    let changedPixels = 0;
    const step = 4 * 16;

    for (let i = 0; i < data1.length; i += step) {
      const diff = Math.abs(data1[i] - data2[i]) +
                   Math.abs(data1[i + 1] - data2[i + 1]) +
                   Math.abs(data1[i + 2] - data2[i + 2]);
      if (diff > 45) {
        changedPixels++;
      }
    }

    const totalSamples = data1.length / step;
    const ratio = changedPixels / totalSamples;

    const isLive = ratio >= 0.012 && ratio <= 0.22;
    const confidence = Math.min(99, Math.round(ratio * 700 + 40));

    return { isLive, confidence };
  }
}
