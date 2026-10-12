import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, getGeneralWhatsappUrl } from '../utils/whatsapp';
import { CATEGORIES } from '../data/categories';
import { Phone, MessageCircle, MapPin, Mail, ArrowUpRight, ShieldCheck, Hammer, Truck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId, categoryFilter?: string) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <footer className="bg-[#252525] text-[#F7F3ED] border-t border-[#3B2922]/40 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Feature Highlights Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-white/10 text-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#3B2922] flex items-center justify-center text-[#B99559] shrink-0">
              <Hammer className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Bespoke Manufacturing</h4>
              <p className="text-white/60 text-xs mt-1">
                Handcrafted solid Teak, Sheesham &amp; engineered woodwork tailored to your space.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#3B2922] flex items-center justify-center text-[#B99559] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white">On-Site Measurement</h4>
              <p className="text-white/60 text-xs mt-1">
                Free consultation and site inspection across Bareilly &amp; surrounding districts.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#3B2922] flex items-center justify-center text-[#B99559] shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Delivery &amp; Fitting</h4>
              <p className="text-white/60 text-xs mt-1">
                Professional doorstep delivery, precision carpentry assembly, and installation.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12">
          {/* Brand & Director */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h3 className="font-serif text-2xl font-bold tracking-tight text-white">
                IQBAL FURNITURE
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#B99559] font-medium mt-0.5">
                &amp; Interior Studio · Bareilly
              </p>
            </div>
            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              We specialize in custom furniture manufacturing, ready-made home &amp; office collections,
              modular kitchens, architectural wardrobes, and precision on-site woodwork installation.
            </p>

            <div className="pt-2 text-xs space-y-2 text-white/80">
              <p className="font-semibold text-[#B99559]">
                Business Director: {BUSINESS_INFO.director}
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B99559] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </p>
              <div className="flex flex-col gap-1 pt-1">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw1}`}
                  className="flex items-center gap-2 hover:text-[#B99559] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B99559]" />
                  <span>{BUSINESS_INFO.phone1}</span>
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw2}`}
                  className="flex items-center gap-2 hover:text-[#B99559] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B99559]" />
                  <span>{BUSINESS_INFO.phone2}</span>
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href={getGeneralWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-md transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                WhatsApp Us
              </a>
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-[#F7F3ED] border border-white/20 hover:bg-white/10 rounded-md transition-colors"
              >
                Request Quotation
              </button>
            </div>
          </div>

          {/* Quick Pages */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#B99559]">
              Company &amp; Services
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors"
                >
                  All Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('categories')}
                  className="hover:text-white transition-colors"
                >
                  Furniture Categories
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('custom')}
                  className="hover:text-white transition-colors"
                >
                  Custom Furniture
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors"
                >
                  On-Site Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-white transition-colors"
                >
                  Project Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-white transition-colors"
                >
                  FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Furniture Categories */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#B99559]">
              Furniture Categories
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              {CATEGORIES.slice(0, 7).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => onNavigate('products', cat.id)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Local SEO & Transparency */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#B99559]">
              Service Area &amp; Notice
            </h4>
            <p className="text-xs text-white/60 leading-relaxed">
              Serving homeowners, builders, and interior designers across Bareilly (CB Ganj, Jouharpur, Civil Lines, Izzatnagar, Rampur Garden, Pilibhit Bypass).
            </p>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-[11px] text-white/70 space-y-1">
              <span className="font-semibold text-[#B99559] block">Pricing Notice</span>
              <p>
                All prices shown are estimated starting figures. Final quotations are confirmed following site measurements, material selection, and project scope.
              </p>
            </div>
            <div className="pt-2 text-xs text-white/50 space-x-3">
              <button
                onClick={() => onNavigate('privacy')}
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <span>·</span>
              <button
                onClick={() => onNavigate('terms')}
                className="hover:text-white transition-colors"
              >
                Terms &amp; Conditions
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© {new Date().getFullYear()} Iqbal Furniture &amp; Interior Studio. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Director: Mr. Iqbal Husain · Jouharpur, CB Ganj, Bareilly, Uttar Pradesh
          </p>
        </div>
      </div>
    </footer>
  );
};
