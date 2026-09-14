import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { VoiceEngine } from '../core/voiceEngine';

interface Props {
  fontSizeLevel: number;
  setFontSizeLevel: React.Dispatch<React.SetStateAction<number>>;
  isHighContrast: boolean;
  setIsHighContrast: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AccessibilityBar: React.FC<Props> = ({
  fontSizeLevel,
  setFontSizeLevel,
  isHighContrast,
  setIsHighContrast,
}) => {
  const handleFontChange = (delta: number) => {
    setFontSizeLevel((prev) => Math.min(Math.max(prev + delta, -1), 2));
  };

  const toggleContrast = () => {
    setIsHighContrast((prev) => !prev);
    VoiceEngine.speak(!isHighContrast ? "उच्च कंट्रास्ट मोड सक्रिय" : "सामान्य मोड सक्रिय");
  };

  return (
    <div className={`border-b text-[11px] font-bold py-1 px-3 sm:px-6 transition-colors ${
      isHighContrast ? 'bg-black text-yellow-300 border-yellow-500' : 'bg-slate-100 text-slate-700 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline font-mono uppercase tracking-wider text-[10px] bg-slate-200 px-1.5 py-0.5 rounded text-slate-800">
            GIGW 3.0 / W3C
          </span>
          <span className="truncate">राष्ट्रीय डिजिटल नागरिक सेवा सेतु | भारत सरकार DPI मानक</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="flex items-center bg-white/80 rounded-lg border border-slate-300 overflow-hidden text-slate-900 font-mono">
            <button
              onClick={() => handleFontChange(-1)}
              title="अक्षर छोटे करें"
              className="px-2 py-0.5 hover:bg-slate-200 active:bg-slate-300 border-r border-slate-300"
            >
              A-
            </button>
            <button
              onClick={() => setFontSizeLevel(0)}
              title="सामान्य आकार"
              className="px-2 py-0.5 hover:bg-slate-200 active:bg-slate-300 border-r border-slate-300 font-black"
            >
              A
            </button>
            <button
              onClick={() => handleFontChange(1)}
              title="अक्षर बड़े करें"
              className="px-2 py-0.5 hover:bg-slate-200 active:bg-slate-300 font-bold"
            >
              A+
            </button>
          </div>

          <button
            onClick={toggleContrast}
            title="कंट्रास्ट बदलें"
            className={`px-2 py-0.5 rounded-lg border flex items-center gap-1 transition ${
              isHighContrast
                ? 'bg-yellow-400 text-black border-yellow-500 font-black'
                : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-200'
            }`}
          >
            {isHighContrast ? <Sun className="w-3 h-3" /> : <Moon className="w-3 h-3 text-slate-600" />}
            <span className="hidden sm:inline">{isHighContrast ? 'सामान्य' : 'कंट्रास्ट'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
