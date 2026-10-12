import React, { useState } from 'react';
import { Product, QuoteFormData } from '../types';
import { generateQuoteWhatsappUrl, BUSINESS_INFO } from '../utils/whatsapp';
import {
  X,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  FileText,
  MapPin,
  Calendar,
  Layers,
  Sparkles,
} from 'lucide-react';

interface QuoteRequestModalProps {
  initialProduct?: Product | null;
  onClose: () => void;
}

export const QuoteRequestModal: React.FC<QuoteRequestModalProps> = ({
  initialProduct,
  onClose,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    whatsapp: '',
    email: '',
    city: 'Bareilly',
    projectType: 'Residential / Home',
    category: initialProduct ? initialProduct.name : 'Beds & Bedroom',
    quantity: '1',
    approxDimensions: initialProduct ? initialProduct.dimensions : '',
    preferredMaterial: initialProduct ? initialProduct.material : 'Seasoned Teak Wood (Sagwan)',
    preferredFinish: 'Dark Walnut Polish',
    budgetRange: '₹20,000 – ₹50,000',
    completionDate: 'Within 2–3 Weeks',
    deliveryInstallationRequired: 'Yes',
    siteVisitRequired: 'Yes',
    projectDescription: initialProduct
      ? `Interested in ${initialProduct.name} (SKU: ${initialProduct.sku}). Please provide customized sizing and final installation quote.`
      : '',
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
    if (!formData.city.trim()) errs.city = 'Please specify your city or locality';
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

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitting(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 lg:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden border border-[#3B2922]/10 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#3B2922]/10 flex items-center justify-between bg-[#FAF8F5]">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#B99559]" />
            <div>
              <h3 className="font-serif text-lg font-bold text-[#3B2922]">
                Custom Furniture Quotation Request
              </h3>
              <p className="text-xs text-[#252525]/60">
                Direct to Mr. Iqbal Husain · Jouharpur, CB Ganj, Bareilly
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#252525]/60 hover:text-[#3B2922] hover:bg-black/5 rounded-full transition-colors"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 sm:p-8 flex-1">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4 max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#3B2922]">
                Quotation Request Generated!
              </h4>
              <p className="text-sm text-[#252525]/70 leading-relaxed">
                Thank you, <strong className="text-[#3B2922]">{formData.fullName}</strong>. Your custom furniture specifications have been prepared and formatted for Director Mr. Iqbal Husain.
              </p>

              <div className="p-4 bg-[#FAF8F5] rounded-xl text-left border border-[#3B2922]/10 text-xs space-y-1.5">
                <p><strong>Item / Project:</strong> {formData.category}</p>
                <p><strong>Locality:</strong> {formData.city}</p>
                <p><strong>Site Visit Requested:</strong> {formData.siteVisitRequired}</p>
                <p><strong>Material:</strong> {formData.preferredMaterial}</p>
              </div>

              <div className="pt-3 space-y-2">
                <a
                  href={lastWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-semibold text-sm shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Open in WhatsApp</span>
                </a>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-[#3B2922] hover:underline pt-2 block mx-auto"
                >
                  Edit Quotation Details
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Context Banner */}
              {initialProduct && (
                <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#B99559]/20 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-white overflow-hidden shrink-0 border border-slate-200">
                    <img
                      src={initialProduct.images[0]}
                      alt={initialProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase font-mono text-[#B99559]">Pre-filled Item</span>
                    <h5 className="font-serif text-xs font-semibold text-[#3B2922] truncate">
                      {initialProduct.name}
                    </h5>
                    <p className="text-[11px] text-[#252525]/60">SKU: {initialProduct.sku}</p>
                  </div>
                </div>
              )}

              {/* Personal Information */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#B99559]">
                  1. Contact Information
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-medium text-[#3B2922] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rajesh Sharma"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#3B2922]/20 focus:outline-none focus:border-[#B99559] text-sm"
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-600 mt-0.5">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-medium text-[#3B2922] mb-1">
                      Mobile Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9720568074"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#3B2922]/20 focus:outline-none focus:border-[#B99559] text-sm"
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-600 mt-0.5">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-medium text-[#3B2922] mb-1">
                      WhatsApp Number (if different)
                    </label>
                    <input
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="Optional"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#3B2922]/20 focus:outline-none focus:border-[#B99559] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-[#3B2922] mb-1">
                      City &amp; Locality *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. CB Ganj / Civil Lines, Bareilly"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#3B2922]/20 focus:outline-none focus:border-[#B99559] text-sm"
                    />
                    {errors.city && (
                      <p className="text-[11px] text-red-600 mt-0.5">{errors.city}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Project & Furniture Specifications */}
              <div className="space-y-3 pt-2 border-t border-[#3B2922]/10">
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#B99559]">
                  2. Furniture &amp; Project Requirements
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-medium text-[#3B2922] mb-1">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#3B2922]/20 focus:outline-none focus:border-[#B99559] text-sm bg-white"
                    >
                      <option value="Residential / Home">Residential / New Home</option>
                      <option value="Home Renovation">Home Renovation</option>
                      <option value="Corporate Office">Corporate Office / Workspace</option>
                      <option value="Retail Store / Showroom">Retail Store / Showroom</option>
                      <option value="Hotel / Restaurant">Hotel / Restaurant</option>
                      <option value="Single Room / Single Piece">Single Room / Single Furniture Piece</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-medium text-[#3B2922] mb-1">
                      Furniture Category / Item
                    </label>
                    <input
                      type="text"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      placeholder="e.g. King Bed, Modular Kitchen, Sliding Wardrobe"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#3B2922]/20 focus:outline-none focus:border-[#B99559] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-[#3B2922] mb-1">
                      Approximate Dimensions / Space Size
                    </label>
                    <input
                      type="text"
                      value={formData.approxDimensions}
                      onChange={(e) => setFormData({ ...formData, approxDimensions: e.target.value })}
                      placeholder="e.g. 10x12 ft room, or 6x6.5 ft bed"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#3B2922]/20 focus:outline-none focus:border-[#B99559] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-[#3B2922] mb-1">
                      Preferred Material
                    </label>
                    <select
                      value={formData.preferredMaterial}
                      onChange={(e) => setFormData({ ...formData, preferredMaterial: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#3B2922]/20 focus:outline-none focus:border-[#B99559] text-sm bg-white"
                    >
                      <option value="Seasoned Teak Wood (Sagwan)">Solid Teak Wood (Sagwan)</option>
                      <option value="Solid Sheesham (Indian Rosewood)">Solid Sheesham (Indian Rosewood)</option>
                      <option value="Action TESA HDHMR (Moisture Resistant)">Action TESA HDHMR</option>
                      <option value="BWP Marine Grade Plywood">BWP Marine Grade Plywood</option>
                      <option value="Heavy Gauge CRCA Steel">Heavy Sheet Steel (for Almirahs)</option>
                      <option value="Need Expert Advice / Recommendation">Need Expert Advice / Recommendation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-medium text-[#3B2922] mb-1">
                      Preferred Polish / Finish
                    </label>
                    <input
                      type="text"
                      value={formData.preferredFinish}
                      onChange={(e) => setFormData({ ...formData, preferredFinish: e.target.value })}
                      placeholder="e.g. Dark Walnut Polish, High-Gloss Acrylic, PU Matte"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#3B2922]/20 focus:outline-none focus:border-[#B99559] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-[#3B2922] mb-1">
                      Estimated Budget Range
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

              {/* Service Logistics */}
              <div className="space-y-3 pt-2 border-t border-[#3B2922]/10">
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#B99559]">
                  3. Service &amp; On-Site Measurement
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-medium text-[#3B2922] mb-1">
                      Is an on-site measurement visit required in Bareilly?
                    </label>
                    <div className="flex gap-4 pt-1">
                      <label className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="siteVisit"
                          value="Yes"
                          checked={formData.siteVisitRequired === 'Yes'}
                          onChange={() => setFormData({ ...formData, siteVisitRequired: 'Yes' })}
                          className="accent-[#3B2922]"
                        />
                        <span>Yes, send a carpenter for measurements</span>
                      </label>
                      <label className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="siteVisit"
                          value="No"
                          checked={formData.siteVisitRequired === 'No'}
                          onChange={() => setFormData({ ...formData, siteVisitRequired: 'No' })}
                          className="accent-[#3B2922]"
                        />
                        <span>No, I have exact measurements</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block font-medium text-[#3B2922] mb-1">
                      Delivery &amp; On-Site Installation Required?
                    </label>
                    <div className="flex gap-4 pt-1">
                      <label className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="delivery"
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
                          name="delivery"
                          value="No"
                          checked={formData.deliveryInstallationRequired === 'No'}
                          onChange={() => setFormData({ ...formData, deliveryInstallationRequired: 'No' })}
                          className="accent-[#3B2922]"
                        />
                        <span>Self pickup from workshop</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-[#3B2922] mb-1 text-xs">
                    Project Description / Custom Specifications
                  </label>
                  <textarea
                    rows={3}
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    placeholder="Describe any particular requirements, reference photos you have, wall alignment constraints, or special hardware needs..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#3B2922]/20 focus:outline-none focus:border-[#B99559] text-sm"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-[#3B2922] hover:bg-[#2c1d17] text-[#F7F3ED] rounded-xl font-semibold text-sm shadow-md transition-colors disabled:opacity-50"
                >
                  <MessageCircle className="w-4 h-4 text-[#B99559]" />
                  <span>Submit Quotation Request via WhatsApp</span>
                </button>
                <p className="text-[11px] text-[#252525]/60 text-center mt-2">
                  Direct message sent to Mr. Iqbal Husain ({BUSINESS_INFO.phone1}). No spam.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
