import React, { useState } from 'react';
import { Product } from '../types';
import { formatPriceDisplay, getProductWhatsappUrl } from '../utils/whatsapp';
import { MessageCircle, Eye, Hammer, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
}) => {
  const [imageError, setImageError] = useState(false);
  const primaryImage = product.images[0];

  return (
    <div className="group flex flex-col bg-white rounded-xl border border-[#3B2922]/10 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Product Image Slot */}
      <div className="relative aspect-[4/3] bg-[#FAF8F5] overflow-hidden cursor-pointer" onClick={() => onViewDetails(product)}>
        {!imageError && primaryImage ? (
          <img
            src={primaryImage}
            alt={product.name}
            onError={() => setImageError(true)}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#FAF8F5] to-[#EFEAE1] text-[#3B2922]">
            <Hammer className="w-10 h-10 text-[#B99559] mb-2 stroke-[1.5]" />
            <span className="font-serif text-sm font-semibold text-center">{product.name}</span>
            <span className="text-[11px] text-[#252525]/50 mt-1">Iqbal Woodcraft Studio</span>
          </div>
        )}

        {/* Quiet Top Meta Overlay */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
          <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-mono tracking-wider px-2 py-0.5 rounded">
            {product.sku}
          </span>
          {product.customisationAvailable && (
            <span className="bg-[#B99559]/90 backdrop-blur-md text-white text-[10px] font-medium px-2 py-0.5 rounded flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" />
              Custom Sizes
            </span>
          )}
        </div>
      </div>

      {/* Product Information */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        {/* Category & Status */}
        <div className="flex items-center gap-2 text-xs text-[#252525]/60 mb-1.5">
          <span className="uppercase tracking-wider text-[11px] font-medium text-[#B99559]">
            {product.subcategory || product.category}
          </span>
          <span aria-hidden="true">·</span>
          <span className="text-[11px]">{product.availabilityStatus}</span>
        </div>

        {/* Product Title */}
        <h3
          onClick={() => onViewDetails(product)}
          className="font-serif text-base sm:text-lg font-semibold text-[#3B2922] group-hover:text-[#B99559] transition-colors cursor-pointer line-clamp-1"
          title={product.name}
        >
          {product.name}
        </h3>

        {/* Material Specification */}
        <p className="text-xs text-[#252525]/70 mt-1 line-clamp-1">
          <span className="font-medium text-[#3B2922]">Material:</span> {product.material}
        </p>

        {/* Price Baseline */}
        <div className="mt-3 pt-3 border-t border-[#3B2922]/5">
          <div className="flex flex-col">
            <span className="text-[11px] text-[#252525]/60">Estimated Price</span>
            <span className="font-mono tabular-nums text-base sm:text-lg font-bold text-[#3B2922]">
              {formatPriceDisplay(product)}
            </span>
          </div>
        </div>

        {/* Interactive Action Controls */}
        <div className="mt-4 pt-2 grid grid-cols-2 gap-2">
          <button
            onClick={() => onViewDetails(product)}
            className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium text-[#3B2922] bg-[#F7F3ED] hover:bg-[#EAE4D9] rounded-lg transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-[#3B2922]" />
            <span>Details</span>
          </button>

          <a
            href={getProductWhatsappUrl(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-lg transition-colors shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
