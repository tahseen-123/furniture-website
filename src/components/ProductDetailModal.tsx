import React, { useState } from 'react';
import { Product } from '../types';
import { formatPriceDisplay, getProductWhatsappUrl, BUSINESS_INFO } from '../utils/whatsapp';
import {
  X,
  MessageCircle,
  Phone,
  FileText,
  CheckCircle2,
  Ruler,
  Layers,
  Sparkles,
  Truck,
  Shield,
  Info,
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  allProducts: Product[];
  onClose: () => void;
  onOpenQuoteWithProduct: (product: Product) => void;
  onSelectRelated: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  allProducts,
  onClose,
  onOpenQuoteWithProduct,
  onSelectRelated,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) return null;

  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const images = product.images.length > 0 ? product.images : ['/src/assets/images/craftsman_woodwork_1791774362710.jpg'];
  const activeImage = images[selectedImageIndex] || images[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 lg:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden border border-[#3B2922]/10 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-[#3B2922]/10 flex items-center justify-between bg-[#FAF8F5]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white bg-[#3B2922] px-2.5 py-1 rounded">
              SKU: {product.sku}
            </span>
            <span className="text-xs text-[#252525]/60 hidden sm:inline">
              Category: {product.category.toUpperCase()}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#252525]/60 hover:text-[#3B2922] hover:bg-black/5 rounded-full transition-colors"
            aria-label="Close product details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Image Gallery (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#F7F3ED] border border-[#3B2922]/10 shadow-inner">
                <img
                  src={activeImage}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                {product.customisationAvailable && (
                  <span className="absolute top-3 right-3 bg-[#B99559] text-white text-[11px] font-medium px-2.5 py-1 rounded shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Customizable
                  </span>
                )}
              </div>

              {/* Gallery Thumbnails if multiple */}
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                        selectedImageIndex === idx
                          ? 'border-[#B99559] shadow-sm'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} preview ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Quick Trust Indicators */}
              <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#3B2922]/10 space-y-2.5 text-xs text-[#252525]/80">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#B99559] shrink-0" />
                  <span>Doorstep delivery &amp; expert on-site fitting across Bareilly</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#B99559] shrink-0" />
                  <span>Seasoned timber &amp; termite-resistant raw materials</span>
                </div>
                <div className="flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-[#B99559] shrink-0" />
                  <span>On-site measurements available on customer request</span>
                </div>
              </div>
            </div>

            {/* Right Column: Purchasing Module & Specifications (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#B99559] font-semibold">
                  {product.subcategory || product.category}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B2922] mt-1">
                  {product.name}
                </h2>
                <p className="text-sm text-[#252525]/80 mt-2 leading-relaxed">
                  {product.fullDescription || product.shortDescription}
                </p>
              </div>

              {/* Price Callout */}
              <div className="p-4 bg-[#F7F3ED] rounded-xl border border-[#B99559]/20 space-y-1">
                <div className="flex items-baseline justify-between flex-wrap gap-2">
                  <div>
                    <span className="text-xs text-[#252525]/60 block">Estimated Price</span>
                    <span className="font-mono text-2xl sm:text-3xl font-bold text-[#3B2922] tabular-nums">
                      {formatPriceDisplay(product)}
                    </span>
                  </div>
                  <span className="text-xs bg-white text-[#3B2922] px-2.5 py-1 rounded font-medium border border-[#3B2922]/10">
                    Status: {product.availabilityStatus}
                  </span>
                </div>
                <div className="flex items-start gap-1.5 pt-2 text-[11px] text-[#252525]/70">
                  <Info className="w-3.5 h-3.5 text-[#B99559] shrink-0 mt-0.5" />
                  <span>
                    Note: Estimated indicative price. Final quotation depends on your exact dimensions,
                    timber selection, polish grade, hardware, and installation requirements.
                  </span>
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white rounded-lg border border-[#3B2922]/10 space-y-1">
                  <span className="text-[#252525]/60 flex items-center gap-1 font-medium">
                    <Layers className="w-3.5 h-3.5 text-[#B99559]" /> Material
                  </span>
                  <p className="font-semibold text-[#3B2922]">{product.material}</p>
                </div>

                <div className="p-3 bg-white rounded-lg border border-[#3B2922]/10 space-y-1">
                  <span className="text-[#252525]/60 flex items-center gap-1 font-medium">
                    <Ruler className="w-3.5 h-3.5 text-[#B99559]" /> Dimensions
                  </span>
                  <p className="font-semibold text-[#3B2922]">{product.dimensions || 'Custom as per space'}</p>
                </div>
              </div>

              {/* Available Finishes */}
              {product.finishOptions && product.finishOptions.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#3B2922]">
                    Available Finishes &amp; Polishes
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.finishOptions.map((opt, i) => (
                      <span
                        key={i}
                        className="text-xs bg-[#FAF8F5] text-[#3B2922] px-3 py-1 rounded-md border border-[#3B2922]/15"
                      >
                        {opt}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Features List */}
              {product.features && product.features.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#3B2922]">
                    Key Craftsmanship Highlights
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#252525]/80">
                    {product.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B99559] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Primary Action Buttons */}
              <div className="pt-2 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={getProductWhatsappUrl(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-semibold text-sm shadow-md transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Enquire on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      onOpenQuoteWithProduct(product);
                      onClose();
                    }}
                    className="flex items-center justify-center gap-2 py-3 px-4 bg-[#3B2922] hover:bg-[#2e1f1a] text-[#F7F3ED] rounded-xl font-medium text-sm transition-colors shadow-sm"
                  >
                    <FileText className="w-4 h-4 text-[#B99559]" />
                    <span>Request Exact Quote</span>
                  </button>
                </div>

                {/* Direct Call Strip */}
                <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#3B2922]/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <span className="text-[#3B2922] font-medium">
                    Call Director Mr. Iqbal Husain directly:
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw1}`}
                      className="inline-flex items-center gap-1 font-semibold text-[#3B2922] hover:text-[#B99559]"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#B99559]" />
                      {BUSINESS_INFO.phone1}
                    </a>
                    <span className="text-slate-300">|</span>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw2}`}
                      className="inline-flex items-center gap-1 font-semibold text-[#3B2922] hover:text-[#B99559]"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#B99559]" />
                      {BUSINESS_INFO.phone2}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <div className="pt-8 border-t border-[#3B2922]/10 space-y-4">
              <h3 className="font-serif text-lg font-semibold text-[#3B2922]">
                Related Furniture in {product.category.toUpperCase()}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedProducts.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectRelated(rel)}
                    className="cursor-pointer group p-3 rounded-xl border border-[#3B2922]/10 hover:border-[#B99559] bg-[#FAF8F5] hover:bg-white transition-all"
                  >
                    <div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 mb-2">
                      <img
                        src={rel.images[0]}
                        alt={rel.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <h4 className="font-serif text-xs font-semibold text-[#3B2922] line-clamp-1 group-hover:text-[#B99559]">
                      {rel.name}
                    </h4>
                    <p className="font-mono text-xs font-bold text-[#3B2922] mt-1 tabular-nums">
                      {formatPriceDisplay(rel)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
