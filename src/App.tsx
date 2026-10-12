import React, { useState } from 'react';
import { PageId, Product } from './types';
import { SAMPLE_PRODUCTS } from './data/products';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProductDetailModal } from './components/ProductDetailModal';
import { QuoteRequestModal } from './components/QuoteRequestModal';
import { SearchModal } from './components/SearchModal';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { CustomFurniturePage } from './pages/CustomFurniturePage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { LegalPage } from './pages/LegalPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProductModal, setActiveProductModal] = useState<Product | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteInitialProduct, setQuoteInitialProduct] = useState<Product | null>(null);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  // Scroll to top on page transition
  const navigateTo = (page: PageId, categoryFilter?: string) => {
    setCurrentPage(page);
    if (categoryFilter) {
      setSelectedCategory(categoryFilter);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (product?: Product) => {
    setQuoteInitialProduct(product || null);
    setIsQuoteModalOpen(true);
  };

  const handleSelectCategoryFromHub = (catId: string) => {
    setSelectedCategory(catId);
    setCurrentPage('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const bestsellers = SAMPLE_PRODUCTS.filter((p) => p.featured);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3ED] text-[#252525] antialiased">
      {/* Sticky Top Header Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            bestsellers={bestsellers}
            onNavigate={navigateTo}
            onViewProduct={(prod) => setActiveProductModal(prod)}
            onOpenQuote={() => handleOpenQuote()}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            products={SAMPLE_PRODUCTS}
            selectedCategory={selectedCategory}
            onSelectCategory={(cat) => setSelectedCategory(cat)}
            onViewProduct={(prod) => setActiveProductModal(prod)}
            onOpenQuote={() => handleOpenQuote()}
          />
        )}

        {currentPage === 'categories' && (
          <CategoriesPage
            onSelectCategory={handleSelectCategoryFromHub}
            onNavigate={navigateTo}
            onOpenQuote={() => handleOpenQuote()}
          />
        )}

        {currentPage === 'custom' && <CustomFurniturePage />}

        {currentPage === 'services' && (
          <ServicesPage
            onOpenQuote={() => handleOpenQuote()}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'gallery' && <GalleryPage />}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenQuote={() => handleOpenQuote()}
          />
        )}

        {currentPage === 'contact' && <ContactPage />}

        {currentPage === 'faq' && <FaqPage />}

        {(currentPage === 'privacy' || currentPage === 'terms') && (
          <LegalPage pageType={currentPage} onNavigate={navigateTo} />
        )}
      </main>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={activeProductModal}
        allProducts={SAMPLE_PRODUCTS}
        onClose={() => setActiveProductModal(null)}
        onOpenQuoteWithProduct={(prod) => handleOpenQuote(prod)}
        onSelectRelated={(prod) => setActiveProductModal(prod)}
      />

      {/* Quotation Request Modal */}
      {isQuoteModalOpen && (
        <QuoteRequestModal
          initialProduct={quoteInitialProduct}
          onClose={() => {
            setIsQuoteModalOpen(false);
            setQuoteInitialProduct(null);
          }}
        />
      )}

      {/* Quick Search Modal */}
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        products={SAMPLE_PRODUCTS}
        onSelectProduct={(prod) => setActiveProductModal(prod)}
      />

      {/* Floating Lead CTAs (WhatsApp & Phone) */}
      <FloatingWhatsApp />

      {/* Unified Global Footer */}
      <Footer onNavigate={navigateTo} onOpenQuote={() => handleOpenQuote()} />
    </div>
  );
}
