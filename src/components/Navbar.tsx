import React, { useState } from 'react';
import { PageId } from '../types';
import { CATEGORIES } from '../data/categories';
import { BUSINESS_INFO, getGeneralWhatsappUrl } from '../utils/whatsapp';
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  Search,
  ChevronDown,
  ArrowRight,
  MapPin,
  Clock,
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId, categoryFilter?: string) => void;
  onOpenSearch: () => void;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch,
  onOpenQuote,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const navLinks: { label: string; page: PageId }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Products', page: 'products' },
    { label: 'Custom Furniture', page: 'custom' },
    { label: 'Our Services', page: 'services' },
    { label: 'Projects Gallery', page: 'gallery' },
    { label: 'About Us', page: 'about' },
    { label: 'Contact Us', page: 'contact' },
  ];

  const handleNavLinkClick = (page: PageId) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
  };

  const handleCategoryClick = (catId: string) => {
    onNavigate('products', catId);
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#3B2922]/10 transition-all">
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#3B2922] text-[#F7F3ED] text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-xs font-normal">
            <span className="flex items-center gap-1.5 opacity-90">
              <MapPin className="w-3.5 h-3.5 text-[#B99559]" />
              Jouharpur, CB Ganj, Bareilly
            </span>
            <span className="hidden sm:inline-block opacity-40">|</span>
            <span className="hidden sm:flex items-center gap-1.5 opacity-90">
              <Clock className="w-3.5 h-3.5 text-[#B99559]" />
              {BUSINESS_INFO.businessHours}
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto text-xs">
            <span className="text-[#B99559] font-medium hidden md:inline">
              Director: {BUSINESS_INFO.director}
            </span>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw1}`}
              className="flex items-center gap-1 hover:text-[#B99559] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#B99559]" />
              <span>{BUSINESS_INFO.phone1}</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw2}`}
              className="hidden lg:flex items-center gap-1 hover:text-[#B99559] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#B99559]" />
              <span>{BUSINESS_INFO.phone2}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Brand Wordmark */}
          <button
            onClick={() => handleNavLinkClick('home')}
            className="text-left group focus:outline-none"
          >
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#3B2922] group-hover:text-[#B99559] transition-colors">
                IQBAL FURNITURE
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-widest text-[#B99559] uppercase font-medium">
                & Interior Studio · Bareilly
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              if (link.page === 'products') {
                return (
                  <div
                    key={link.page}
                    className="relative"
                    onMouseEnter={() => setIsMegaMenuOpen(true)}
                    onMouseLeave={() => setIsMegaMenuOpen(false)}
                  >
                    <button
                      onClick={() => handleNavLinkClick('products')}
                      className={`flex items-center gap-1 text-sm font-medium transition-colors py-2 ${
                        isActive
                          ? 'text-[#3B2922] font-semibold border-b-2 border-[#B99559]'
                          : 'text-[#252525]/80 hover:text-[#3B2922]'
                      }`}
                    >
                      <span>Products</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isMegaMenuOpen ? 'rotate-180 text-[#B99559]' : ''
                        }`}
                      />
                    </button>

                    {/* Products Mega Menu Dropdown */}
                    {isMegaMenuOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-white rounded-xl shadow-2xl border border-[#3B2922]/10 p-6 grid grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-2 duration-150">
                        {CATEGORIES.slice(0, 9).map((cat) => (
                          <div
                            key={cat.id}
                            onClick={() => handleCategoryClick(cat.id)}
                            className="group/cat cursor-pointer p-2.5 rounded-lg hover:bg-[#F7F3ED] transition-colors"
                          >
                            <h4 className="text-xs font-semibold text-[#3B2922] group-hover/cat:text-[#B99559] transition-colors flex items-center justify-between">
                              {cat.name}
                              <span className="text-[10px] text-[#B99559] font-normal">
                                From {cat.startingPrice}
                              </span>
                            </h4>
                            <p className="text-[11px] text-[#252525]/60 mt-1 line-clamp-2">
                              {cat.description}
                            </p>
                          </div>
                        ))}
                        <div className="col-span-3 pt-3 mt-1 border-t border-slate-100 flex items-center justify-between">
                          <button
                            onClick={() => handleNavLinkClick('categories')}
                            className="text-xs font-semibold text-[#3B2922] hover:text-[#B99559] flex items-center gap-1"
                          >
                            Browse All 12 Categories <ArrowRight className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => handleNavLinkClick('products')}
                            className="text-xs text-[#B99559] font-medium hover:underline"
                          >
                            View Entire Catalogue (60+ Items) →
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.page}
                  onClick={() => handleNavLinkClick(link.page)}
                  className={`text-sm font-medium transition-colors py-2 whitespace-nowrap ${
                    isActive
                      ? 'text-[#3B2922] font-semibold border-b-2 border-[#B99559]'
                      : 'text-[#252525]/80 hover:text-[#3B2922]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2.5 text-[#3B2922] hover:text-[#B99559] hover:bg-[#3B2922]/5 rounded-full transition-colors"
              aria-label="Search furniture products"
              title="Search products"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Custom Quote Trigger */}
            <button
              onClick={onOpenQuote}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-[#3B2922] border border-[#3B2922]/30 rounded-lg hover:bg-[#3B2922]/5 transition-colors whitespace-nowrap"
            >
              Get Custom Quote
            </button>

            {/* WhatsApp Enquiry CTA */}
            <a
              href={getGeneralWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-lg shadow-sm transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span className="hidden md:inline">WhatsApp Enquiry</span>
              <span className="md:hidden">WhatsApp</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#3B2922] hover:bg-[#3B2922]/5 rounded-lg transition-colors ml-1"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#3B2922]/10 bg-[#FAF8F5] px-4 pt-4 pb-6 space-y-4 max-h-[85vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#3B2922]/10">
            <button
              onClick={() => {
                onOpenSearch();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 py-2 px-3 bg-white border border-[#3B2922]/15 rounded-lg text-xs font-medium text-[#3B2922]"
            >
              <Search className="w-4 h-4 text-[#B99559]" />
              Search Products
            </button>
            <button
              onClick={() => {
                onOpenQuote();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 py-2 px-3 bg-[#3B2922] text-[#F7F3ED] rounded-lg text-xs font-medium"
            >
              Custom Quote
            </button>
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNavLinkClick(link.page)}
                className={`text-left py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === link.page
                    ? 'bg-[#3B2922] text-[#F7F3ED] font-semibold'
                    : 'text-[#252525] hover:bg-[#3B2922]/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#3B2922]/10">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#B99559] mb-2 px-1">
              Top Categories
            </h4>
            <div className="grid grid-cols-2 gap-1.5">
              {CATEGORIES.slice(0, 8).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className="text-left text-xs py-1.5 px-2.5 rounded bg-white/60 hover:bg-white text-[#3B2922] truncate"
                >
                  {cat.shortName}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-[#3B2922]/10 text-xs text-[#252525]/80 space-y-2">
            <p className="font-semibold text-[#3B2922]">Director: {BUSINESS_INFO.director}</p>
            <p className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#B99559]" />
              <a href={`tel:${BUSINESS_INFO.phoneRaw1}`}>{BUSINESS_INFO.phone1}</a> /{' '}
              <a href={`tel:${BUSINESS_INFO.phoneRaw2}`}>{BUSINESS_INFO.phone2}</a>
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#B99559]" />
              <span>{BUSINESS_INFO.address}</span>
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
