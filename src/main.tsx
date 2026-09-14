import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorText: string;
}

class SafeErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, errorText: '' };
  }

  static getDerivedStateFromError(error: any): ErrorBoundaryState {
    return { hasError: true, errorText: error?.message || 'अज्ञात समस्या' };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error('Application Error:', error, errorInfo);
  }

  handleForceReload = () => {
    if ('caches' in window) {
      caches.keys().then((names) => {
        names.forEach((name) => caches.delete(name));
      });
    }
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((reg) => reg.unregister());
      });
    }
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', background: '#fff7ed', fontFamily: 'sans-serif' }}>
          <div style={{ maxWidth: '420px', width: '100%', background: '#ffffff', border: '2px solid #fed7aa', borderRadius: '24px', padding: '24px', textAlign: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
            <div style={{ width: '48px', height: '48px', background: '#fee2e2', color: '#dc2626', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', fontSize: '24px' }}>
              ⚠️
            </div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: 900, color: '#0f172a' }}>अपडेट प्रक्रिया पूर्ण करें</h3>
            <p style={{ margin: '0 0 16px 0', fontSize: '12px', color: '#64748b', lineHeight: 1.5 }}>
              पोर्टल का नया वर्शन तैनात हो चुका है। कृपया नीचे दिए बटन पर क्लिक करके ताज़ा वर्शन लोड करें।
            </p>
            <button
              onClick={this.handleForceReload}
              style={{ width: '100%', padding: '12px', background: '#ea580c', color: '#ffffff', border: 'none', borderRadius: '12px', fontSize: '13px', fontWeight: 900, cursor: 'pointer' }}
            >
              🔄 ताज़ा पोर्टल लोड करें (Clear & Reload)
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SafeErrorBoundary>
      <App />
    </SafeErrorBoundary>
  </React.StrictMode>
);
