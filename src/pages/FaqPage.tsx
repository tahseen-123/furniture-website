import React, { useState } from 'react';
import { FAQS } from '../data/faqs';
import { getGeneralWhatsappUrl, BUSINESS_INFO } from '../utils/whatsapp';
import { ChevronDown, MessageCircle, Phone } from 'lucide-react';

export const FaqPage: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = FAQS.filter((faq) => {
    if (selectedCategory === 'all') return true;
    return faq.category === selectedCategory;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-xs uppercase tracking-widest text-[#B99559] font-bold">
          Common Questions
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#3B2922]">
          Frequently Asked Questions
        </h1>
        <p className="text-xs sm:text-sm text-[#252525]/70 max-w-xl mx-auto leading-relaxed">
          Clear answers regarding pricing estimates, on-site measurements across Bareilly, custom orders, timber selection, and delivery logistics.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-2">
        {[
          { id: 'all', label: 'All Questions' },
          { id: 'pricing', label: 'Pricing & Estimates' },
          { id: 'custom', label: 'Custom Orders' },
          { id: 'services', label: 'On-Site Measurements' },
          { id: 'materials', label: 'Timber & Materials' },
          { id: 'delivery', label: 'Delivery & Fitting' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedCategory(tab.id)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              selectedCategory === tab.id
                ? 'bg-[#3B2922] text-[#F7F3ED]'
                : 'bg-white border border-[#3B2922]/15 text-[#252525]/80 hover:bg-[#FAF8F5]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-white rounded-xl border border-[#3B2922]/10 overflow-hidden transition-all shadow-sm"
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 group"
              >
                <span className="font-serif text-base sm:text-lg font-semibold text-[#3B2922] group-hover:text-[#B99559] transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#B99559] shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#252525]/80 leading-relaxed border-t border-[#3B2922]/5">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still Have Questions Banner */}
      <div className="p-8 bg-[#FAF8F5] rounded-2xl border border-[#3B2922]/10 text-center space-y-4">
        <h3 className="font-serif text-xl font-bold text-[#3B2922]">
          Have a specific furniture question not answered here?
        </h3>
        <p className="text-xs text-[#252525]/70 max-w-md mx-auto">
          Contact Director Mr. Iqbal Husain directly for immediate assistance.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <a
            href={getGeneralWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#25D366] text-white rounded-lg text-xs font-semibold"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>Ask on WhatsApp</span>
          </a>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw1}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#3B2922] text-[#F7F3ED] rounded-lg text-xs font-semibold"
          >
            <Phone className="w-3.5 h-3.5 text-[#B99559]" />
            <span>Call {BUSINESS_INFO.phone1}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
