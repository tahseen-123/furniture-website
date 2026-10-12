import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { CATEGORIES } from '../data/categories';
import { ProductCard } from '../components/ProductCard';
import { Search, SlidersHorizontal, X, RotateCcw, Filter } from 'lucide-react';

interface ProductsPageProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (catId: string) => void;
  onViewProduct: (product: Product) => void;
  onOpenQuote: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onViewProduct,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [maxPrice, setMaxPrice] = useState<number>(100000);
  const [customOnly, setCustomOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Extract unique materials
  const allMaterials = useMemo(() => {
    const list = new Set<string>();
    products.forEach((p) => {
      if (p.material.includes('Teak') || p.material.includes('Sagwan')) list.add('Teak / Sagwan Wood');
      else if (p.material.includes('Sheesham')) list.add('Sheesham Wood');
      else if (p.material.includes('HDHMR')) list.add('Action TESA HDHMR');
      else if (p.material.includes('Marine Ply') || p.material.includes('Ply')) list.add('BWP Marine Ply');
      else if (p.material.includes('Steel') || p.material.includes('Metal')) list.add('Steel / Metal');
    });
    return Array.from(list);
  }, [products]);

  // Filtered & Sorted list
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category
        if (selectedCategory !== 'all' && p.category !== selectedCategory) {
          return false;
        }

        // Search Query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const matchName = p.name.toLowerCase().includes(q);
          const matchSku = p.sku.toLowerCase().includes(q);
          const matchCat = p.category.toLowerCase().includes(q);
          const matchSub = p.subcategory.toLowerCase().includes(q);
          const matchMat = p.material.toLowerCase().includes(q);
          if (!matchName && !matchSku && !matchCat && !matchSub && !matchMat) {
            return false;
          }
        }

        // Material
        if (selectedMaterial !== 'all') {
          if (selectedMaterial === 'Teak / Sagwan Wood' && !p.material.includes('Teak') && !p.material.includes('Sagwan')) return false;
          if (selectedMaterial === 'Sheesham Wood' && !p.material.includes('Sheesham')) return false;
          if (selectedMaterial === 'Action TESA HDHMR' && !p.material.includes('HDHMR')) return false;
          if (selectedMaterial === 'BWP Marine Ply' && !p.material.includes('Ply')) return false;
          if (selectedMaterial === 'Steel / Metal' && !p.material.includes('Steel') && !p.material.includes('Metal')) return false;
        }

        // Price Filter (only if pricing is not quote_required or starting under maxPrice)
        if (p.pricingType !== 'quote_required' && p.estimatedMinPrice > maxPrice) {
          return false;
        }

        // Custom only
        if (customOnly && !p.customisationAvailable) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') {
          return a.estimatedMinPrice - b.estimatedMinPrice;
        }
        if (sortBy === 'price-desc') {
          return b.estimatedMinPrice - a.estimatedMinPrice;
        }
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        }
        // Default: featured first
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [products, selectedCategory, searchQuery, selectedMaterial, maxPrice, customOnly, sortBy]);

  const handleResetFilters = () => {
    onSelectCategory('all');
    setSearchQuery('');
    setSelectedMaterial('all');
    setMaxPrice(100000);
    setCustomOnly(false);
    setSortBy('featured');
  };

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    searchQuery.trim() !== '' ||
    selectedMaterial !== 'all' ||
    maxPrice < 100000 ||
    customOnly ||
    sortBy !== 'featured';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Page Header */}
      <div className="border-b border-[#3B2922]/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-wider text-[#B99559] font-bold">
            Catalogue &amp; Pricing in INR (₹)
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#3B2922] mt-1">
            Complete Furniture Collection
          </h1>
          <p className="text-xs sm:text-sm text-[#252525]/70 mt-1 max-w-2xl">
            Explore ready-made and custom furniture across Bareilly. All prices are estimated starting figures; final quotes are confirmed according to required dimensions, materials, and hardware.
          </p>
        </div>

        {/* Mobile Filter Toggle & Product Count */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 py-2 px-3.5 bg-white border border-[#3B2922]/20 rounded-lg text-xs font-semibold text-[#3B2922]"
          >
            <Filter className="w-4 h-4 text-[#B99559]" />
            <span>Filters</span>
            {hasActiveFilters && (
              <span className="w-2 h-2 rounded-full bg-[#B99559]" />
            )}
          </button>

          <span className="text-xs font-mono text-[#252525]/60 tabular-nums">
            Showing {filteredProducts.length} of {products.length} products
          </span>
        </div>
      </div>

      {/* Main Grid: Sidebar Filters (desktop) + Products Display */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Desktop Sidebar Filters */}
        <aside className="hidden lg:block space-y-6 bg-white p-6 rounded-2xl border border-[#3B2922]/10 sticky top-28">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="font-serif text-base font-semibold text-[#3B2922] flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-[#B99559]" />
              Filters
            </h3>
            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="text-xs text-[#B99559] hover:underline flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                Reset All
              </button>
            )}
          </div>

          {/* Search Box */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#3B2922] uppercase tracking-wider block">
              Search Catalogue
            </label>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Product name, SKU, wood..."
                className="w-full pl-8 pr-3 py-2 text-xs rounded-lg border border-[#3B2922]/20 focus:outline-none focus:border-[#B99559]"
              />
              <Search className="w-3.5 h-3.5 text-[#252525]/40 absolute left-2.5 top-2.5" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-2 text-slate-400 hover:text-slate-700"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Category Selector */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-[#3B2922] uppercase tracking-wider block">
              Categories
            </label>
            <div className="space-y-1 max-h-60 overflow-y-auto pr-1 text-xs">
              <button
                onClick={() => onSelectCategory('all')}
                className={`w-full text-left py-1.5 px-2.5 rounded-lg transition-colors flex items-center justify-between ${
                  selectedCategory === 'all'
                    ? 'bg-[#3B2922] text-[#F7F3ED] font-semibold'
                    : 'text-[#252525]/80 hover:bg-[#FAF8F5]'
                }`}
              >
                <span>All Categories</span>
                <span className="font-mono text-[10px] opacity-75">{products.length}</span>
              </button>

              {CATEGORIES.map((cat) => {
                const count = products.filter((p) => p.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => onSelectCategory(cat.id)}
                    className={`w-full text-left py-1.5 px-2.5 rounded-lg transition-colors flex items-center justify-between ${
                      selectedCategory === cat.id
                        ? 'bg-[#3B2922] text-[#F7F3ED] font-semibold'
                        : 'text-[#252525]/80 hover:bg-[#FAF8F5]'
                    }`}
                  >
                    <span className="truncate">{cat.name}</span>
                    <span className="font-mono text-[10px] opacity-75">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Material Filter */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <label className="text-xs font-semibold text-[#3B2922] uppercase tracking-wider block">
              Material Type
            </label>
            <select
              value={selectedMaterial}
              onChange={(e) => setSelectedMaterial(e.target.value)}
              className="w-full p-2 text-xs rounded-lg border border-[#3B2922]/20 focus:outline-none focus:border-[#B99559] bg-white"
            >
              <option value="all">All Materials</option>
              {allMaterials.map((mat) => (
                <option key={mat} value={mat}>
                  {mat}
                </option>
              ))}
            </select>
          </div>

          {/* Maximum Estimated Price Slider */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <div className="flex justify-between items-center text-xs">
              <label className="font-semibold text-[#3B2922] uppercase tracking-wider">
                Max Budget
              </label>
              <span className="font-mono font-bold text-[#3B2922] tabular-nums">
                ₹{maxPrice.toLocaleString('en-IN')}
              </span>
            </div>
            <input
              type="range"
              min="5000"
              max="150000"
              step="5000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-[#3B2922]"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-mono">
              <span>₹5k</span>
              <span>₹1.5 Lakh+</span>
            </div>
          </div>

          {/* Customisation Toggle */}
          <div className="pt-2 border-t border-slate-100">
            <label className="flex items-center gap-2 text-xs text-[#3B2922] cursor-pointer">
              <input
                type="checkbox"
                checked={customOnly}
                onChange={(e) => setCustomOnly(e.target.checked)}
                className="rounded accent-[#3B2922]"
              />
              <span className="font-medium">Customizable Sizes Only</span>
            </label>
          </div>
        </aside>

        {/* Right Content: Sort Bar + Products Grid (3 cols) */}
        <div className="lg:col-span-3 space-y-6">
          {/* Sorting & Quick Filter Pills Bar */}
          <div className="bg-white p-3.5 rounded-xl border border-[#3B2922]/10 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-[#252525]/60 font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#FAF8F5] border border-[#3B2922]/15 rounded-lg py-1 px-2.5 font-medium text-[#3B2922] focus:outline-none"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High (₹)</option>
                <option value="price-desc">Price: High to Low (₹)</option>
                <option value="name">Product Name (A-Z)</option>
              </select>
            </div>

            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="text-xs text-[#B99559] hover:underline flex items-center gap-1 font-medium ml-auto"
              >
                Clear all active filters
              </button>
            )}
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#3B2922]/10 p-8 space-y-3">
              <h3 className="font-serif text-xl font-semibold text-[#3B2922]">
                No products match your current filters
              </h3>
              <p className="text-xs text-[#252525]/70 max-w-md mx-auto">
                Try widening your price range or clearing material filters. If you need a specific custom size or design not listed here, we manufacture it on order.
              </p>
              <button
                onClick={handleResetFilters}
                className="mt-3 px-4 py-2 bg-[#3B2922] text-[#F7F3ED] rounded-lg text-xs font-medium hover:bg-[#2c1d17]"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewDetails={onViewProduct}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filters Slide-Over Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end animate-in fade-in duration-150">
          <div className="bg-white w-full max-w-xs h-full p-6 overflow-y-auto space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-serif text-lg font-bold text-[#3B2922]">Filter Products</h3>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-1 text-slate-400 hover:text-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Category */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#3B2922] uppercase tracking-wider block">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => onSelectCategory(e.target.value)}
                  className="w-full p-2 text-xs rounded-lg border border-slate-200 bg-white"
                >
                  <option value="all">All Categories</option>
                  {CATEGORIES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Material */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#3B2922] uppercase tracking-wider block">
                  Material
                </label>
                <select
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                  className="w-full p-2 text-xs rounded-lg border border-slate-200 bg-white"
                >
                  <option value="all">All Materials</option>
                  {allMaterials.map((mat) => (
                    <option key={mat} value={mat}>
                      {mat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Max Price */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-[#3B2922]">Max Budget</span>
                  <span className="font-mono">₹{maxPrice.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="150000"
                  step="5000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[#3B2922]"
                />
              </div>

              {/* Custom checkbox */}
              <div>
                <label className="flex items-center gap-2 text-xs text-[#3B2922]">
                  <input
                    type="checkbox"
                    checked={customOnly}
                    onChange={(e) => setCustomOnly(e.target.checked)}
                    className="accent-[#3B2922]"
                  />
                  <span>Custom Sizes Only</span>
                </label>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-100">
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full py-2.5 bg-[#3B2922] text-[#F7F3ED] rounded-lg text-xs font-semibold"
              >
                Apply Filters ({filteredProducts.length} Results)
              </button>
              <button
                onClick={handleResetFilters}
                className="w-full py-2 text-xs text-[#252525]/60 hover:underline"
              >
                Reset All Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
