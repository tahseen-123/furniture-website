import React, { useState } from 'react';
import { BUSINESS_INFO, getGeneralWhatsappUrl } from '../utils/whatsapp';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
  Navigation,
  Building,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    locality: '',
    interest: 'General Enquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [whatsappGeneratedUrl, setWhatsappGeneratedUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.phone.trim()) return;

    const lines = [
      `*CUSTOMER INQUIRY VIA WEBSITE*`,
      `--------------------------------`,
      `*Name:* ${formState.name}`,
      `*Phone:* ${formState.phone}`,
      formState.locality ? `*Locality:* ${formState.locality}` : '',
      `*Interest:* ${formState.interest}`,
      formState.message ? `*Message:* ${formState.message}` : '',
      `--------------------------------`,
      `Inquiry for Iqbal Furniture & Interior Studio, Bareilly.`,
    ].filter(Boolean);

    const waUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
    setWhatsappGeneratedUrl(waUrl);
    setSubmitted(true);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Page Header */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#B99559] font-bold">
          Get In Touch With Us
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#3B2922]">
          Contact Our Bareilly Studio
        </h1>
        <p className="text-sm sm:text-base text-[#252525]/80 leading-relaxed">
          Reach out directly to Director Mr. Iqbal Husain for ready-made purchases, bespoke manufacturing quotations, or to schedule an on-site furniture measurement visit.
        </p>
      </div>

      {/* Primary Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Phone Numbers */}
        <div className="bg-white rounded-2xl border border-[#3B2922]/10 p-6 space-y-4 shadow-sm flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] text-[#B99559] flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-[#B99559] uppercase tracking-wider block">
                Direct Phone Lines
              </span>
              <h3 className="font-serif text-lg font-bold text-[#3B2922] mt-0.5">
                Speak with Mr. Iqbal Husain
              </h3>
            </div>
            <p className="text-xs text-[#252525]/70">
              Immediate telephone assistance for pricing estimates and order status.
            </p>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw1}`}
              className="flex items-center justify-between p-2 rounded-lg bg-[#FAF8F5] hover:bg-[#F3EFEA] text-[#3B2922] font-semibold transition-colors"
            >
              <span>{BUSINESS_INFO.phone1}</span>
              <span className="text-[11px] text-[#B99559]">Call Now →</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw2}`}
              className="flex items-center justify-between p-2 rounded-lg bg-[#FAF8F5] hover:bg-[#F3EFEA] text-[#3B2922] font-semibold transition-colors"
            >
              <span>{BUSINESS_INFO.phone2}</span>
              <span className="text-[11px] text-[#B99559]">Call Now →</span>
            </a>
          </div>
        </div>

        {/* Card 2: WhatsApp Chat */}
        <div className="bg-white rounded-2xl border border-[#3B2922]/10 p-6 space-y-4 shadow-sm flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] text-[#25D366] flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-[#25D366] uppercase tracking-wider block">
                Instant Messaging
              </span>
              <h3 className="font-serif text-lg font-bold text-[#3B2922] mt-0.5">
                Official WhatsApp Enquiry
              </h3>
            </div>
            <p className="text-xs text-[#252525]/70">
              Send reference photos, floor plans, or room sketches for rapid price estimation.
            </p>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <a
              href={getGeneralWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Start WhatsApp Conversation</span>
            </a>
          </div>
        </div>

        {/* Card 3: Address & Studio */}
        <div className="bg-white rounded-2xl border border-[#3B2922]/10 p-6 space-y-4 shadow-sm flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] text-[#B99559] flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-[#B99559] uppercase tracking-wider block">
                Workshop &amp; Facility
              </span>
              <h3 className="font-serif text-lg font-bold text-[#3B2922] mt-0.5">
                Jouharpur, CB Ganj, Bareilly
              </h3>
            </div>
            <p className="text-xs text-[#252525]/70">
              {BUSINESS_INFO.address}
            </p>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-[#3B2922] hover:text-[#B99559] transition-colors"
            >
              <Navigation className="w-3.5 h-3.5 text-[#B99559]" />
              <span>Get Directions on Maps</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Grid: Interactive Contact Form & Studio Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Form (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-[#3B2922]/10 p-6 sm:p-10 shadow-sm space-y-6">
          <div>
            <span className="text-xs uppercase font-mono text-[#B99559] font-bold">
              Send a Direct Message
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#3B2922] mt-1">
              Have Questions? Let Us Know
            </h2>
            <p className="text-xs text-[#252525]/70 mt-1">
              We respond promptly with detailed answers, wood availability, and site measurement slots.
            </p>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#3B2922]">
                Inquiry Sent to Mr. Iqbal Husain
              </h4>
              <p className="text-xs text-[#252525]/70 max-w-sm mx-auto">
                Thank you, {formState.name}. Your message is being processed. Click below if you need to open WhatsApp again.
              </p>
              <div className="pt-2">
                <a
                  href={whatsappGeneratedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-2.5 px-5 bg-[#25D366] text-white rounded-lg text-xs font-semibold"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Open in WhatsApp</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-[#3B2922] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Amit Kumar"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#3B2922]/20 focus:outline-none focus:border-[#B99559] text-sm"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#3B2922] mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="e.g. 9720568074"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#3B2922]/20 focus:outline-none focus:border-[#B99559] text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-[#3B2922] mb-1">
                    Your Locality in Bareilly
                  </label>
                  <input
                    type="text"
                    value={formState.locality}
                    onChange={(e) => setFormState({ ...formState, locality: e.target.value })}
                    placeholder="e.g. Civil Lines, CB Ganj, Janakpuri"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#3B2922]/20 focus:outline-none focus:border-[#B99559] text-sm"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#3B2922] mb-1">
                    Area of Interest
                  </label>
                  <select
                    value={formState.interest}
                    onChange={(e) => setFormState({ ...formState, interest: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#3B2922]/20 focus:outline-none focus:border-[#B99559] text-sm bg-white"
                  >
                    <option value="General Furniture Purchase">General Furniture Purchase</option>
                    <option value="Custom Bedroom Furniture">Custom Bedroom Furniture</option>
                    <option value="Living Room / Sofa Set">Living Room / Sofa Set</option>
                    <option value="Modular Kitchen Planning">Modular Kitchen Planning</option>
                    <option value="Wardrobe & Storage Fitout">Wardrobe &amp; Storage Fitout</option>
                    <option value="Doors & Window Fitting">Doors &amp; Window Fitting</option>
                    <option value="Office / Commercial Work">Office / Commercial Work</option>
                    <option value="Schedule On-Site Measurement Visit">Schedule On-Site Measurement Visit</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#3B2922] mb-1">
                  Message / Details
                </label>
                <textarea
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell us what you are looking for..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#3B2922]/20 focus:outline-none focus:border-[#B99559] text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-[#3B2922] hover:bg-[#2c1d17] text-[#F7F3ED] rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-[#B99559]" />
                <span>Submit Inquiry via WhatsApp</span>
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Studio Hours & Service Area (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Business Hours */}
          <div className="bg-[#FAF8F5] rounded-2xl border border-[#3B2922]/10 p-6 space-y-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#B99559]" />
              <h3 className="font-serif text-lg font-bold text-[#3B2922]">Workshop &amp; Studio Hours</h3>
            </div>
            <div className="space-y-2 text-xs text-[#252525]/80">
              <div className="flex justify-between py-1.5 border-b border-[#3B2922]/10">
                <span className="font-semibold text-[#3B2922]">Monday – Saturday</span>
                <span>9:30 AM – 8:30 PM</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#3B2922]/10">
                <span className="font-semibold text-[#3B2922]">Sunday</span>
                <span>10:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="font-semibold text-[#3B2922]">Site Visits</span>
                <span>By appointment (All 7 Days)</span>
              </div>
            </div>
          </div>

          {/* Service Area */}
          <div className="bg-white rounded-2xl border border-[#3B2922]/10 p-6 space-y-3">
            <div className="flex items-center gap-2">
              <Building className="w-5 h-5 text-[#B99559]" />
              <h3 className="font-serif text-lg font-bold text-[#3B2922]">Service Area Coverage</h3>
            </div>
            <p className="text-xs text-[#252525]/70 leading-relaxed">
              We proudly serve private residences, interior architects, commercial businesses, and builders across:
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px] text-[#3B2922]">
              {[
                'CB Ganj',
                'Jouharpur',
                'Civil Lines Bareilly',
                'Izzatnagar',
                'Pilibhit Bypass Road',
                'Rampur Garden',
                'Janakpuri',
                'Mahanagar Colony',
                'Clutterbuckganj Industrial Area',
                'Station Road',
                'Subhash Nagar',
                'Delapeer',
              ].map((loc) => (
                <span key={loc} className="bg-[#FAF8F5] px-2.5 py-1 rounded-md border border-[#3B2922]/10">
                  {loc}
                </span>
              ))}
            </div>
          </div>

          {/* Local SEO Keywords Block */}
          <div className="p-4 bg-white rounded-xl border border-slate-100 text-[11px] text-[#252525]/60 space-y-1">
            <span className="font-semibold text-[#3B2922] block">Bareilly Local Furniture Solutions:</span>
            <p>
              Furniture shop in Bareilly · Custom furniture in Bareilly · Wooden furniture in CB Ganj Bareilly · Sofa shop in Bareilly · Bed and wardrobe in Bareilly · Office furniture in Bareilly · Modular kitchen furniture Bareilly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
