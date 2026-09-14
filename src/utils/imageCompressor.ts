export async function compressGovernmentImage(
  file: File, 
  maxSizeKB: number = 50
): Promise<{ base64: string; blob: Blob; sizeKB: number; width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        // सरकारी पोर्टल मानक अनुपात (अधिकतम 800px चौड़ाई)
        const maxDim = 800;
        if (width > height && width > maxDim) {
          height = Math.round((height * maxDim) / width);
          width = maxDim;
        } else if (height > maxDim) {
          width = Math.round((width * maxDim) / height);
          height = maxDim;
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) return reject('Canvas context error');

        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);

        // क्रमशः गुणवत्ता घटाकर 50KB के अंदर लाना
        let quality = 0.85;
        const iterate = () => {
          canvas.toBlob(
            (blob) => {
              if (!blob) return reject('Blob error');
              const sizeKB = Math.round(blob.size / 1024);
              if (sizeKB <= maxSizeKB || quality <= 0.15) {
                const base64 = canvas.toDataURL('image/jpeg', quality);
                resolve({ base64, blob, sizeKB, width, height });
              } else {
                quality -= 0.10;
                iterate();
              }
            },
            'image/jpeg',
            quality
          );
        };
        iterate();
      };
      img.onerror = (err) => reject(err);
    };
    reader.onerror = (err) => reject(err);
  });
}
