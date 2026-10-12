import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../utils/whatsapp';
import {
  MapPin,
  Hammer,
  ShieldCheck,
  Ruler,
  CheckCircle2,
  Compass,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#B99559] font-bold">
          Our Heritage &amp; Commitment
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#3B2922]">
          About Iqbal Furniture &amp; Interior Studio
        </h1>
        <p className="text-sm sm:text-base text-[#252525]/80 leading-relaxed">
          A dedicated furniture manufacturing, selling, and on-site furniture installation enterprise based in Jouharpur, CB Ganj, Bareilly, Uttar Pradesh.
        </p>
      </div>

      {/* Leadership Profile */}
      <div className="bg-white rounded-2xl border border-[#3B2922]/10 p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5">
          <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#FAF8F5] border border-[#3B2922]/10 shadow-inner">
            <img
              src="/src/assets/images/craftsman_woodwork_1791774362710.jpg"
              alt="Craftsmanship at Iqbal Furniture Workshop"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-3 text-center">
            <h3 className="font-serif text-lg font-bold text-[#3B2922]">Mr. IQBAL Husain</h3>
            <p className="text-xs text-[#B99559] font-semibold uppercase tracking-wider">Business Director</p>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-5">
          <div>
            <span className="text-xs uppercase font-mono text-[#B99559] font-bold">Director's Philosophy</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B2922] mt-1">
              "Honest Materials, Real Craftsmanship, No Shortcuts."
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#252525]/80 leading-relaxed">
            At <strong>Iqbal Furniture &amp; Interior Studio</strong>, we believe furniture should neither be disposable nor out of touch with real household requirements. Located in Jouharpur, CB Ganj, Bareilly, we combine traditional Indian carpentry craftsmanship with contemporary modular techniques.
          </p>

          <p className="text-xs sm:text-sm text-[#252525]/80 leading-relaxed">
            Whether crafting an individual king size hydraulic storage bed or executing complete turnkey interior carpentry for a newly constructed villa, Director Mr. Iqbal Husain personally inspects the raw timber seasoning, hardware quality, and on-site assembly alignment.
          </p>

          <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#3B2922]/10 flex flex-wrap gap-4 text-xs">
            <div>
              <span className="text-[#252525]/60 block font-medium">Headquarters &amp; Workshop:</span>
              <span className="font-semibold text-[#3B2922]">{BUSINESS_INFO.address}</span>
            </div>
            <div>
              <span className="text-[#252525]/60 block font-medium">Direct Inquiries:</span>
              <span className="font-semibold text-[#3B2922]">{BUSINESS_INFO.phone1} / {BUSINESS_INFO.phone2}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Core Focus Areas */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase font-bold text-[#B99559]">What Guides Us</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B2922] mt-1">
            Our Key Service Pillars
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl border border-[#3B2922]/10 space-y-2.5">
            <Hammer className="w-6 h-6 text-[#B99559]" />
            <h3 className="font-serif text-lg font-bold text-[#3B2922]">Functional Everyday Designs</h3>
            <p className="text-xs text-[#252525]/75 leading-relaxed">
              We design furniture meant for real families—incorporating hydraulic gas-lift storage, wipe-clean stain-proof fabrics, and heavy-duty drawer runners.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-[#3B2922]/10 space-y-2.5">
            <Compass className="w-6 h-6 text-[#B99559]" />
            <h3 className="font-serif text-lg font-bold text-[#3B2922]">Contemporary &amp; Traditional Styles</h3>
            <p className="text-xs text-[#252525]/75 leading-relaxed">
              From fluted minimalist consoles and Scandinavian silhouettes to heritage Sagwan wood hand-carved sofas and almirahs.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-[#3B2922]/10 space-y-2.5">
            <Ruler className="w-6 h-6 text-[#B99559]" />
            <h3 className="font-serif text-lg font-bold text-[#3B2922]">Customer-Specific Measurements</h3>
            <p className="text-xs text-[#252525]/75 leading-relaxed">
              Never compromised by pre-fabricated sizes. We visit your site in Bareilly to measure exact wall dimensions, beam recesses, and ceiling heights.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-[#3B2922]/10 space-y-2.5">
            <ShieldCheck className="w-6 h-6 text-[#B99559]" />
            <h3 className="font-serif text-lg font-bold text-[#3B2922]">Material &amp; Polish Transparency</h3>
            <p className="text-xs text-[#252525]/75 leading-relaxed">
              Clients are informed transparently about timber types—seasoned Sagwan (Teak Wood), genuine Sheesham, Action TESA HDHMR, or BWP ply.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-[#3B2922]/10 space-y-2.5">
            <CheckCircle2 className="w-6 h-6 text-[#B99559]" />
            <h3 className="font-serif text-lg font-bold text-[#3B2922]">Home &amp; Office Solutions</h3>
            <p className="text-xs text-[#252525]/75 leading-relaxed">
              Equally experienced in residential master bedroom suites as in commercial executive desks, conference tables, and hospital lounges.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-[#3B2922]/10 space-y-2.5">
            <MapPin className="w-6 h-6 text-[#B99559]" />
            <h3 className="font-serif text-lg font-bold text-[#3B2922]">On-Site Installation Team</h3>
            <p className="text-xs text-[#252525]/75 leading-relaxed">
              Our own skilled carpenters assemble and align modular wardrobes, doors, kitchens, and cabinetry directly at your location.
            </p>
          </div>
        </div>
      </div>

      {/* Workshop Location Notice */}
      <div className="bg-[#FAF8F5] rounded-2xl border border-[#3B2922]/10 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h3 className="font-serif text-2xl font-bold text-[#3B2922]">
            Visit Us or Request a Consultation in Bareilly
          </h3>
          <p className="text-xs text-[#252525]/70 max-w-xl">
            Located in Jouharpur, CB Ganj. Open Monday through Saturday (9:30 AM – 8:30 PM) and Sunday (10:00 AM – 6:00 PM).
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => onNavigate('contact')}
            className="px-5 py-2.5 bg-[#3B2922] hover:bg-[#2c1d17] text-[#F7F3ED] rounded-xl text-xs font-semibold"
          >
            Contact Details &amp; Directions
          </button>
          <button
            onClick={onOpenQuote}
            className="px-5 py-2.5 bg-[#B99559] hover:bg-[#a68249] text-white rounded-xl text-xs font-semibold"
          >
            Request Quotation
          </button>
        </div>
      </div>
    </div>
  );
};
