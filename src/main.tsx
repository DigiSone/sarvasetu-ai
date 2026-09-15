import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// स्वचालित कैशे मैनेजमेंट (बिना किसी इनलाइन स्क्रिप्ट के)
(function () {
  const BUILD_TAG = 'sarvasetu_sec_1789446224';
  const savedTag = localStorage.getItem('sarvasetu_sec_build');
  if (savedTag !== BUILD_TAG) {
    if ('caches' in window) {
      caches.keys().then((names) => {
        for (const name of names) caches.delete(name);
      });
    }
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((regs) => {
        for (const r of regs) r.unregister();
      });
    }
    localStorage.setItem('sarvasetu_sec_build', BUILD_TAG);
  }
})();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
