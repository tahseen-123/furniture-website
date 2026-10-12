import React, { useState } from 'react';
import { QuoteFormData } from '../types';
import { generateQuoteWhatsappUrl, BUSINESS_INFO, getCustomFurnitureWhatsappUrl } from '../utils/whatsapp';
import {
  Sparkles,
  CheckCircle2,
  MessageCircle,
  Phone,
  Ruler,
  Layers,
  Palette,
  Clock,
  Shield,
  FileText,
} from 'lucide-react';

export const CustomFurniturePage: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    whatsapp: '',
    email: '',
    city: 'Bareilly',
    projectType: 'Residential / Home',
    category: 'Full Home Furniture Package',
    quantity: '1',
    approxDimensions: '',
    preferredMaterial: 'Seasoned Teak Wood (Sagwan)',
    preferredFinish: 'Dark Walnut Polish',
    budgetRange: '₹50,000 – ₹1,00,000',
    completionDate: 'Within 3–4 Weeks',
    deliveryInstallationRequired: 'Yes',
    siteVisitRequired: 'Yes',
    projectDescription: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastWhatsappUrl, setLastWhatsappUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your name';
    if (!formData.phone.trim() || !/^\+?[0-9]{10,13}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.city.trim()) errs.city = 'Please specify your city or locality in Bareilly';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    const whatsappUrl = generateQuoteWhatsappUrl(formData);
    setLastWhatsappUrl(whatsappUrl);
    setIsSubmitted(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Hero Header */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#B99559] font-bold">
          Bespoke Manufacturing &amp; Woodcraft
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#3B2922] leading-tight">
          Your Ideas. Our Craftsmanship.
        </h1>
        <p className="text-sm sm:text-base text-[#252525]/80 leading-relaxed">
          Request furniture made according to your exact room blueprint, preferred design photos, dimensions, timber selection, and budget. Handcrafted in Jouharpur, CB Ganj, Bareilly.
        </p>
      </div>

      {/* 4 Pillars of Custom Manufacturing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-5 bg-white rounded-xl border border-[#3B2922]/10 space-y-2">
          <Ruler className="w-6 h-6 text-[#B99559]" />
          <h3 className="font-serif text-base font-semibold text-[#3B2922]">Exact Dimensions</h3>
          <p className="text-xs text-[#252525]/70 leading-relaxed">
            Eliminate awkward wall gaps. Built to precise millimetres for your room contours and beam offsets.
          </p>
        </div>

        <div className="p-5 bg-white rounded-xl border border-[#3B2922]/10 space-y-2">
          <Layers className="w-6 h-6 text-[#B99559]" />
          <h3 className="font-serif text-base font-semibold text-[#3B2922]">Timber &amp; Core Choices</h3>
          <p className="text-xs text-[#252525]/70 leading-relaxed">
            Choose between solid Sagwan (Teak), Sheesham, high-density HDHMR, or BWP waterproof ply.
          </p>
        </div>

        <div className="p-5 bg-white rounded-xl border border-[#3B2922]/10 space-y-2">
          <Palette className="w-6 h-6 text-[#B99559]" />
          <h3 className="font-serif text-base font-semibold text-[#3B2922]">Polishes &amp; Fabrics</h3>
          <p className="text-xs text-[#252525]/70 leading-relaxed">
            From hand-rubbed wax and PU matte coats to imported velvets and spill-resistant linens.
          </p>
        </div>

        <div className="p-5 bg-white rounded-xl border border-[#3B2922]/10 space-y-2">
          <Clock className="w-6 h-6 text-[#B99559]" />
          <h3 className="font-serif text-base font-semibold text-[#3B2922]">Timely Delivery</h3>
          <p className="text-xs text-[#252525]/70 leading-relaxed">
            Clear committed schedules with regular fabrication updates directly from Director Mr. Iqbal Husain.
          </p>
        </div>
      </div>

      {/* Custom Scope Breakdown */}
      <div className="bg-[#FAF8F5] rounded-2xl border border-[#3B2922]/10 p-8 sm:p-10 space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase font-bold text-[#B99559]">What We Customize</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B2922] mt-1">
            End-to-End Made-to-Order Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-[#252525]/90">
          {[
            'Custom King & Queen Bed Designs with Hydraulic Lift',
            'Sofa Sets with Tailored Seating Depth & Density',
            'Floor-to-Ceiling Sliding & Hinged Wardrobes',
            'Heavy-Duty Steel & Wooden Locker Almirahs',
            '6, 8, & 10-Seater Solid Wood Dining Tables',
            'Modular Kitchen Cabinetry with Branded Tandems',
            'Director Executive Desks & Office Workstations',
            'Solid Wood Main Entrance Doors & Window Chaukhats',
            'Turnkey 2BHK/3BHK Full Home Interior Woodwork',
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 p-3 bg-white rounded-lg border border-[#3B2922]/5">
              <CheckCircle2 className="w-4 h-4 text-[#B99559] shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Quotation Request Form Container */}
      <div className="bg-white rounded-2xl border border-[#3B2922]/15 shadow-xl p-6 sm:p-10 lg:p-12 space-y-8">
        <div className="border-b border-[#3B2922]/10 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B2922]">
              Custom Furniture Quotation Form
            </h2>
            <p className="text-xs sm:text-sm text-[#252525]/70 mt-1">
              Fill in your specifications below. On submission, an organized request will be generated for Mr. Iqbal Husain on WhatsApp.
            </p>
          </div>
          <div className="text-xs text-right hidden sm:block">
            <span className="text-[#B99559] font-semibold">Immediate Assistance?</span>
            <p className="font-bold text-[#3B2922]">{BUSINESS_INFO.phone1}</p>
          </div>
        </div>

        {isSubmitted ? (
          <div className="py-12 text-center max-w-lg mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#3B2922]">
              Quotation Request Ready!
            </h3>
            <p className="text-xs sm:text-sm text-[#252525]/70 leading-relaxed">
              Your details have been assembled for Director Mr. Iqbal Husain. If WhatsApp did not open automatically, please click below.
            </p>

            <a
              href={lastWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 px-6 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-semibold text-sm shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Open in WhatsApp</span>
            </a>

            <div className="pt-4">
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-xs text-[#3B2922] hover:underline"
              >
                ← Edit Form Details
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Client Info */}
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B99559] block">
                1. Customer &amp; Contact Details
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                <div>
                  <label className="block font-semibold text-[#3B2922] mb-1">
                    Customer Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Mohd. Tariq"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#3B2922]/20 focus:outline-none focus:border-[#B99559] text-sm"
                  />
                  {errors.fullName && <p className="text-[11px] text-red-600 mt-0.5">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block font-semibold text-[#3B2922] mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9720568074"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#3B2922]/20 focus:outline-none focus:border-[#B99559] text-sm"
                  />
                  {errors.phone && <p className="text-[11px] text-red-600 mt-0.5">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block font-semibold text-[#3B2922] mb-1">
                    WhatsApp Number (optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="If different from mobile"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#3B2922]/20 focus:outline-none focus:border-[#B99559] text-sm"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#3B2922] mb-1">
                    Email Address (optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#3B2922]/20 focus:outline-none focus:border-[#B99559] text-sm"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-semibold text-[#3B2922] mb-1">
                    City &amp; Locality *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Jouharpur / CB Ganj / Civil Lines, Bareilly"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#3B2922]/20 focus:outline-none focus:border-[#B99559] text-sm"
                  />
                  {errors.city && <p className="text-[11px] text-red-600 mt-0.5">{errors.city}</p>}
                </div>
              </div>
            </div>

            {/* Step 2: Project Specifications */}
            <div className="space-y-4 pt-4 border-t border-[#3B2922]/10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B99559] block">
                2. Project &amp; Material Specifications
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                <div>
                  <label className="block font-semibold text-[#3B2922] mb-1">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#3B2922]/20 focus:outline-none focus:border-[#B99559] text-sm bg-white"
                  >
                    <option value="Residential / New Home">Residential / New Home</option>
                    <option value="Home Renovation">Home Renovation</option>
                    <option value="Office / Commercial Interior">Office / Commercial Interior</option>
                    <option value="Hotel / Restaurant">Hotel / Restaurant</option>
                    <option value="Showroom / Retail Shop">Showroom / Retail Shop</option>
                    <option value="Single Furniture Piece">Single Furniture Piece</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-[#3B2922] mb-1">
                    Furniture Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#3B2922]/20 focus:outline-none focus:border-[#B99559] text-sm bg-white"
                  >
                    <option value="Beds & Bedroom Furniture">Beds & Bedroom Furniture</option>
                    <option value="Sofas & Living Room">Sofas & Living Room</option>
                    <option value="Wardrobes & Closets">Wardrobes & Closets</option>
                    <option value="Modular Kitchen Cabinets">Modular Kitchen Cabinets</option>
                    <option value="Dining Tables & Chairs">Dining Tables & Chairs</option>
                    <option value="Almirahs & Steel Storage">Almirahs & Steel Storage</option>
                    <option value="Office Desks & Workstations">Office Desks & Workstations</option>
                    <option value="Doors, Windows & Partitions">Doors, Windows & Partitions</option>
                    <option value="Full Home Furniture Package">Full Home Furniture Package</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-[#3B2922] mb-1">
                    Approximate Dimensions / Space
                  </label>
                  <input
                    type="text"
                    value={formData.approxDimensions}
                    onChange={(e) => setFormData({ ...formData, approxDimensions: e.target.value })}
                    placeholder="e.g. 10x12 ft room or 6x6.5 ft bed"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#3B2922]/20 focus:outline-none focus:border-[#B99559] text-sm"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#3B2922] mb-1">
                    Preferred Material
                  </label>
                  <select
                    value={formData.preferredMaterial}
                    onChange={(e) => setFormData({ ...formData, preferredMaterial: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#3B2922]/20 focus:outline-none focus:border-[#B99559] text-sm bg-white"
                  >
                    <option value="Solid Teak Wood (Sagwan)">Solid Teak Wood (Sagwan)</option>
                    <option value="Solid Sheesham (Indian Rosewood)">Solid Sheesham (Indian Rosewood)</option>
                    <option value="Action TESA HDHMR">Action TESA HDHMR (Moisture Resistant)</option>
                    <option value="BWP Grade Marine Plywood">BWP Grade Marine Plywood</option>
                    <option value="Heavy Sheet CRCA Steel">Heavy Sheet CRCA Steel</option>
                    <option value="Need Guidance from Mr. Iqbal">Need Guidance from Mr. Iqbal</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-[#3B2922] mb-1">
                    Preferred Finish / Colour
                  </label>
                  <input
                    type="text"
                    value={formData.preferredFinish}
                    onChange={(e) => setFormData({ ...formData, preferredFinish: e.target.value })}
                    placeholder="e.g. Dark Walnut, Honey Teak, White PU, Fluted"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#3B2922]/20 focus:outline-none focus:border-[#B99559] text-sm"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#3B2922] mb-1">
                    Budget Range
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#3B2922]/20 focus:outline-none focus:border-[#B99559] text-sm bg-white"
                  >
                    <option value="Under ₹25,000">Under ₹25,000</option>
                    <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
                    <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>
                    <option value="₹1,00,000 – ₹2,50,000">₹1,00,000 – ₹2,50,000</option>
                    <option value="₹2,50,000+ (Full Home / Turnkey)">₹2,50,000+ (Full Home / Turnkey)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 3: Logistics & Scope */}
            <div className="space-y-4 pt-4 border-t border-[#3B2922]/10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B99559] block">
                3. Site Visit &amp; Installation
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
                <div className="p-4 bg-[#FAF8F5] rounded-xl space-y-2">
                  <span className="font-semibold text-[#3B2922] block">
                    Do you need an on-site measurement visit in Bareilly?
                  </span>
                  <div className="flex gap-4 pt-1">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="siteVisitRequired"
                        value="Yes"
                        checked={formData.siteVisitRequired === 'Yes'}
                        onChange={() => setFormData({ ...formData, siteVisitRequired: 'Yes' })}
                        className="accent-[#3B2922]"
                      />
                      <span>Yes, visit my property</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="siteVisitRequired"
                        value="No"
                        checked={formData.siteVisitRequired === 'No'}
                        onChange={() => setFormData({ ...formData, siteVisitRequired: 'No' })}
                        className="accent-[#3B2922]"
                      />
                      <span>No, I have dimensions</span>
                    </label>
                  </div>
                </div>

                <div className="p-4 bg-[#FAF8F5] rounded-xl space-y-2">
                  <span className="font-semibold text-[#3B2922] block">
                    Delivery &amp; On-Site Fitting Required?
                  </span>
                  <div className="flex gap-4 pt-1">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="deliveryReq"
                        value="Yes"
                        checked={formData.deliveryInstallationRequired === 'Yes'}
                        onChange={() => setFormData({ ...formData, deliveryInstallationRequired: 'Yes' })}
                        className="accent-[#3B2922]"
                      />
                      <span>Yes, delivery &amp; fitting</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="deliveryReq"
                        value="No"
                        checked={formData.deliveryInstallationRequired === 'No'}
                        onChange={() => setFormData({ ...formData, deliveryInstallationRequired: 'No' })}
                        className="accent-[#3B2922]"
                      />
                      <span>Self pickup</span>
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#3B2922] mb-1 text-xs">
                  Project Description / Special Requests
                </label>
                <textarea
                  rows={4}
                  value={formData.projectDescription}
                  onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                  placeholder="Tell us more about the room layout, Pinterest inspiration images you have, special hardware (Hafele/Blum), or target completion timeframe..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#3B2922]/20 focus:outline-none focus:border-[#B99559] text-sm"
                />
              </div>
            </div>

            {/* Submission Actions */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-[#3B2922] hover:bg-[#2c1d17] text-[#F7F3ED] rounded-xl font-bold text-sm shadow-xl transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 text-[#B99559]" />
                <span>Submit Quotation Request via WhatsApp</span>
              </button>
              <p className="text-center text-xs text-[#252525]/60 mt-2">
                Your request will be pre-formatted and sent directly to Director Mr. Iqbal Husain ({BUSINESS_INFO.phone1}).
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
