import React from 'react';
import { PageId } from '../types';
import { CATEGORIES } from '../data/categories';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CategoriesPageProps {
  onSelectCategory: (categoryId: string) => void;
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const CategoriesPage: React.FC<CategoriesPageProps> = ({
  onSelectCategory,
  onNavigate,
  onOpenQuote,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-wider text-[#B99559] font-bold">
          Departments &amp; Solutions
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3B2922]">
          Furniture Categories
        </h1>
        <p className="text-xs sm:text-sm text-[#252525]/70 leading-relaxed">
          From ready-made home pieces to custom architectural woodwork, discover all categories manufactured and installed by Iqbal Furniture &amp; Interior Studio in Bareilly.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="group bg-white rounded-2xl border border-[#3B2922]/10 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Category Image */}
              <div className="aspect-[16/9] overflow-hidden bg-slate-100 relative">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs font-mono px-2.5 py-1 rounded">
                  Starts {cat.startingPrice}
                </span>
              </div>

              {/* Information */}
              <div className="p-6 space-y-3">
                <h3 className="font-serif text-xl font-bold text-[#3B2922] group-hover:text-[#B99559] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-[#252525]/70 leading-relaxed">
                  {cat.description}
                </p>

                {/* Subcategories tags */}
                <div className="pt-2">
                  <span className="text-[11px] font-semibold text-[#3B2922] uppercase tracking-wider block mb-1.5">
                    Included Subcategories:
                  </span>
                  <div className="flex flex-wrap gap-1 text-[11px] text-[#252525]/80">
                    {cat.subcategories.slice(0, 6).map((sub, i) => (
                      <span key={i} className="bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#3B2922]/10">
                        {sub}
                      </span>
                    ))}
                    {cat.subcategories.length > 6 && (
                      <span className="text-[#B99559] font-medium px-1 py-0.5">
                        +{cat.subcategories.length - 6} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 pt-0 mt-2 flex items-center justify-between border-t border-slate-100 pt-4">
              <button
                onClick={() => onSelectCategory(cat.id)}
                className="text-xs font-semibold text-[#3B2922] hover:text-[#B99559] flex items-center gap-1 transition-colors"
              >
                <span>Browse Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onOpenQuote}
                className="text-xs text-[#B99559] hover:underline"
              >
                Custom Quote
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bespoke Quote Banner */}
      <div className="rounded-2xl bg-[#3B2922] text-[#F7F3ED] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <span className="text-xs uppercase font-mono tracking-widest text-[#B99559]">
            Have a unique floor plan or custom piece?
          </span>
          <h3 className="font-serif text-2xl font-bold">
            We manufacture custom sizes across every category
          </h3>
          <p className="text-xs text-white/70 max-w-xl">
            Share reference sketches or request an on-site visit in Bareilly. Director Mr. Iqbal Husain personally evaluates custom projects.
          </p>
        </div>
        <button
          onClick={onOpenQuote}
          className="px-6 py-3 bg-[#B99559] hover:bg-[#a68249] text-white rounded-xl font-semibold text-xs uppercase tracking-wider shrink-0 transition-colors shadow-lg"
        >
          Request Custom Estimate
        </button>
      </div>
    </div>
  );
};
