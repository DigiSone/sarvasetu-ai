import React, { useState } from 'react';
import { X, Send, Bot, User, ArrowRight } from 'lucide-react';
import { GovServiceItem } from '../types/service';
import { VoiceEngine } from '../core/voiceEngine';

interface Props {
  services: GovServiceItem[];
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (service: GovServiceItem) => void;
}

interface ChatMsg {
  sender: 'bot' | 'user';
  text: string;
  matchedService?: GovServiceItem;
}

export const SarvaMitraAssistant: React.FC<Props> = ({ services, isOpen, onClose, onSelectService }) => {
  const [messages, setMessages] = useState<ChatMsg[]>([
    {
      sender: 'bot',
      text: 'प्रणाम! मैं आपका सर्वमित्र AI नागरिक सलाहकार हूँ। अपनी समस्या या आवश्यक सेवा यहाँ लिखें (उदा: खतौनी, आय प्रमाण पत्र, बिजली बिल, राशन कार्ड आदि)।'
    }
  ]);
  const [inputText, setInputText] = useState('');

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const query = inputText.trim();
    if (!query) return;

    const userMsg: ChatMsg = { sender: 'user', text: query };
    setMessages((prev) => [...prev, userMsg]);
    setInputText('');

    const cleanQ = query.toLowerCase();
    const found = services.find((s) => {
      const inTitle = s.title.toLowerCase().includes(cleanQ);
      const inDept = s.department.toLowerCase().includes(cleanQ);
      const inKW = s.voiceKeywords.some((kw) => cleanQ.includes(kw.toLowerCase()) || kw.toLowerCase().includes(cleanQ));
      return inTitle || inDept || inKW;
    });

    setTimeout(() => {
      if (found) {
        const botReply: ChatMsg = {
          sender: 'bot',
          text: `आपकी आवश्यकता के लिए "${found.title}" उपलब्ध है। विभाग: ${found.department}। सरकारी शुल्क: ${found.govtFee} और समय सीमा: ${found.estimatedDays} है। विवरण देखने हेतु नीचे टैप करें:`,
          matchedService: found
        };
        setMessages((prev) => [...prev, botReply]);
        VoiceEngine.speak(`${found.title} सेवा मिल गई है। विवरण नीचे दिया गया है।`);
      } else {
        const botReply: ChatMsg = {
          sender: 'bot',
          text: `"${query}" से संबंधित सेवा सीधे नहीं मिली। कृपया स्पष्ट नाम लिखें जैसे: खतौनी, आय, निवास, आधार, पैन, राशन या बिजली।`
        };
        setMessages((prev) => [...prev, botReply]);
        VoiceEngine.speak('कृपया सेवा का नाम स्पष्ट लिखें।');
      }
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center sm:p-4">
      <div className="bg-white rounded-t-3xl sm:rounded-3xl max-w-md w-full h-[85vh] sm:h-[620px] flex flex-col shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95">
        <div className="p-3.5 bg-gradient-to-r from-orange-600 to-amber-600 text-white flex items-center justify-between shrink-0 rounded-t-3xl">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-amber-200" />
            </div>
            <div>
              <h3 className="text-sm font-black leading-tight">सर्वमित्र AI नागरिक सलाहकार</h3>
              <span className="text-[10px] text-orange-100 font-bold block">174 सरकारी सेवाओं का त्वरित मार्गदर्शक</span>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 text-white/80 hover:text-white rounded-xl">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 overflow-y-auto space-y-3 flex-1 text-xs bg-slate-50">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2 ${m.sender === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 ${
                m.sender === 'user' ? 'bg-slate-900 text-white' : 'bg-orange-100 text-orange-700'
              }`}>
                {m.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div className={`max-w-[80%] p-3 rounded-2xl leading-relaxed ${
                m.sender === 'user'
                  ? 'bg-slate-900 text-white rounded-tr-none'
                  : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-xs'
              }`}>
                <p>{m.text}</p>
                {m.matchedService && (
                  <button
                    onClick={() => {
                      onClose();
                      onSelectService(m.matchedService!);
                    }}
                    className="mt-2.5 w-full p-2 bg-orange-50 hover:bg-orange-100 border border-orange-200 text-orange-950 font-black rounded-xl text-[11px] flex items-center justify-between transition active:scale-95"
                  >
                    <span className="truncate pr-1">📋 कागज़ात सूची व सीधा आवेदन</span>
                    <ArrowRight className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSend} className="p-3 border-t border-slate-200 bg-white flex items-center gap-2 shrink-0">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="अपनी समस्या या योजना का नाम लिखें..."
            className="flex-1 px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-orange-500"
          />
          <button
            type="submit"
            className="p-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl transition active:scale-95 shadow-sm"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
