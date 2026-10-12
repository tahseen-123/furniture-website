import React, { useState } from 'react';
import { getGeneralWhatsappUrl, BUSINESS_INFO } from '../utils/whatsapp';
import { MessageCircle, Phone, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showCallMenu, setShowCallMenu] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Quick Phone Call Popover */}
      {showCallMenu && (
        <div className="bg-white rounded-xl shadow-2xl border border-[#3B2922]/15 p-3.5 space-y-2 animate-in fade-in slide-in-from-bottom-2 text-xs w-60">
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
            <span className="font-semibold text-[#3B2922]">Call Director Mr. Iqbal</span>
            <button
              onClick={() => setShowCallMenu(false)}
              className="text-slate-400 hover:text-slate-700"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw1}`}
            className="flex items-center gap-2 p-2 rounded-lg bg-[#FAF8F5] hover:bg-[#F3EFEA] text-[#3B2922] font-semibold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#B99559]" />
            <span>{BUSINESS_INFO.phone1}</span>
          </a>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw2}`}
            className="flex items-center gap-2 p-2 rounded-lg bg-[#FAF8F5] hover:bg-[#F3EFEA] text-[#3B2922] font-semibold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#B99559]" />
            <span>{BUSINESS_INFO.phone2}</span>
          </a>
          <p className="text-[10px] text-slate-400 text-center">Jouharpur, CB Ganj, Bareilly</p>
        </div>
      )}

      {/* Floating Action Cluster */}
      <div className="flex items-center gap-2">
        {/* Quick Call Button */}
        <button
          onClick={() => setShowCallMenu(!showCallMenu)}
          className="w-11 h-11 rounded-full bg-[#3B2922] text-[#F7F3ED] shadow-lg hover:bg-[#2c1d17] flex items-center justify-center transition-all hover:scale-105"
          title="Call Mr. Iqbal Husain"
          aria-label="Call business"
        >
          <Phone className="w-5 h-5 text-[#B99559]" />
        </button>

        {/* WhatsApp Button */}
        <a
          href={getGeneralWhatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 py-2.5 px-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-xl transition-all duration-300 hover:scale-105"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white shrink-0" />
          <span className="text-xs font-semibold tracking-wide pr-1 hidden sm:inline">
            WhatsApp Us
          </span>
        </a>
      </div>
    </div>
  );
};
