import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { formatPriceDisplay } from '../utils/whatsapp';
import { Search, X, ArrowRight, Tag } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    return products.filter((p) => {
      return (
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.subcategory.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q)
      );
    }).slice(0, 8);
  }, [query, products]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center p-4 sm:pt-20 animate-in fade-in duration-150">
      <div
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-[#3B2922]/15 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#3B2922]/10 flex items-center gap-3 bg-[#FAF8F5]">
          <Search className="w-5 h-5 text-[#B99559] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by product name, SKU (e.g. IQB-BED), material, or category..."
            className="w-full bg-transparent border-none focus:outline-none text-sm sm:text-base text-[#3B2922] placeholder:text-[#252525]/40"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#252525]/40 hover:text-[#3B2922]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-medium text-[#252525]/60 hover:text-[#3B2922] px-2 py-1 rounded"
          >
            Esc
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4">
          {!query.trim() ? (
            <div className="py-6 text-center text-xs text-[#252525]/60 space-y-2">
              <p>Try searching for: "hydraulic bed", "sofa set", "sheesham dining", "wardrobe", "teak door"</p>
              <div className="flex flex-wrap justify-center gap-1.5 pt-2">
                {['King Bed', 'L-Shaped Sofa', 'Sliding Wardrobe', 'Modular Kitchen', 'Teak Door'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-2.5 py-1 bg-[#F7F3ED] hover:bg-[#EAE4D9] rounded-md text-[#3B2922] text-xs transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-8 text-center text-sm text-[#252525]/70">
              No matching furniture pieces found for "{query}".
              <p className="text-xs text-[#252525]/50 mt-1">
                Looking for custom dimensions? Submit our Custom Quotation form.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#B99559] px-2">
                Found {filtered.length} products
              </p>
              {filtered.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectProduct(item);
                    onClose();
                  }}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#FAF8F5] cursor-pointer group transition-colors border border-transparent hover:border-[#3B2922]/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-slate-100 overflow-hidden shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-[#B99559] bg-[#B99559]/10 px-1.5 py-0.5 rounded">
                        {item.sku}
                      </span>
                      <span className="text-[11px] text-[#252525]/60">
                        {item.category}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-[#3B2922] truncate group-hover:text-[#B99559] transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs font-mono text-[#3B2922] tabular-nums">
                      {formatPriceDisplay(item)}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#3B2922] group-hover:translate-x-0.5 transition-all" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
