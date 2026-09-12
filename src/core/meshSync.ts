export class PanchayatMeshSyncEngine {
  private static DB_NAME = 'SarvaSetuOfflineVault';
  private static STORE_NAME = 'pending_records';

  private static async getDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.DB_NAME, 1);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(this.STORE_NAME)) {
          db.createObjectStore(this.STORE_NAME, { keyPath: 'id', autoIncrement: true });
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  public static async saveOfflineRecord(record: any): Promise<void> {
    const db = await this.getDB();
    const tx = db.transaction(this.STORE_NAME, 'readwrite');
    tx.objectStore(this.STORE_NAME).add({
      ...record,
      savedAt: new Date().toISOString(),
      synced: false
    });
    return new Promise((resolve) => {
      tx.oncomplete = () => resolve();
    });
  }

  public static async syncPendingRecords(apiEndpoint: string): Promise<number> {
    if (!navigator.onLine) return 0;
    const db = await this.getDB();
    const tx = db.transaction(this.STORE_NAME, 'readonly');
    const records: any[] = await new Promise((resolve) => {
      const req = tx.objectStore(this.STORE_NAME).getAll();
      req.onsuccess = () => resolve(req.result || []);
    });

    let syncCount = 0;
    for (const record of records) {
      if (!record.synced) {
        try {
          const res = await fetch(apiEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(record)
          });
          if (res.ok) {
            syncCount++;
            const delTx = db.transaction(this.STORE_NAME, 'readwrite');
            delTx.objectStore(this.STORE_NAME).delete(record.id);
          }
        } catch (e) {
          console.warn('Sync pause:', e);
        }
      }
    }
    return syncCount;
  }
}
