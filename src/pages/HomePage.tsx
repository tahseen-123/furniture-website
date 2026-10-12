import React from 'react';
import { PageId, Product } from '../types';
import { CATEGORIES } from '../data/categories';
import { GALLERY_PROJECTS } from '../data/projects';
import { ProductCard } from '../components/ProductCard';
import {
  BUSINESS_INFO,
  getGeneralWhatsappUrl,
  getCustomFurnitureWhatsappUrl,
  getSiteVisitWhatsappUrl,
} from '../utils/whatsapp';
import {
  ArrowRight,
  MessageCircle,
  Phone,
  Ruler,
  Truck,
  Hammer,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Layers,
  Calendar,
} from 'lucide-react';

interface HomePageProps {
  bestsellers: Product[];
  onNavigate: (page: PageId, categoryFilter?: string) => void;
  onViewProduct: (product: Product) => void;
  onOpenQuote: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  bestsellers,
  onNavigate,
  onViewProduct,
  onOpenQuote,
}) => {
  return (
    <div className="space-y-20 sm:space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[580px] lg:min-h-[660px] flex items-center bg-[#252525] text-white overflow-hidden">
        {/* Background Image with Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_luxury_living_1791774344822.jpg"
            alt="Luxury living room furniture Bareilly"
            className="w-full h-full object-cover object-center brightness-75 scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-2xl space-y-6">
            {/* Brand Kicker */}
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B99559] font-medium">
              <span>Jouharpur, CB Ganj · Bareilly, UP</span>
              <span aria-hidden="true">·</span>
              <span>Director: {BUSINESS_INFO.director}</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Furniture That Makes Your House Feel Like Home.
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xl">
              Discover beautifully designed furniture, made-to-order solutions, and professional on-site furniture services for every space. Handcrafted timber, modern modular cabinetry, and precision installation.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('products')}
                className="px-6 py-3.5 bg-[#B99559] hover:bg-[#a68249] text-white rounded-xl font-semibold text-sm transition-colors shadow-lg flex items-center gap-2"
              >
                <span>Explore Our Collection</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenQuote}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 rounded-xl font-medium text-sm backdrop-blur-sm transition-colors"
              >
                Get a Custom Quote
              </button>

              <a
                href={getGeneralWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-semibold text-sm transition-colors shadow-md flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Trust Points Strip */}
            <div className="pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-white/90">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B99559] shrink-0" />
                <span>Ready-Made Furniture</span>
              </div>
              <div className="flex items-center gap-2">
                <Hammer className="w-4 h-4 text-[#B99559] shrink-0" />
                <span>Custom Manufacturing</span>
              </div>
              <div className="flex items-center gap-2">
                <Ruler className="w-4 h-4 text-[#B99559] shrink-0" />
                <span>On-Site Measurement</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#B99559] shrink-0" />
                <span>Delivery &amp; Installation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED CATEGORIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#B99559] font-bold">
              Browse by Department
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B2922] mt-1">
              Featured Furniture Categories
            </h2>
            <p className="text-xs sm:text-sm text-[#252525]/70 mt-1">
              From luxurious master bedroom beds to turnkey modular kitchens and custom wooden doors.
            </p>
          </div>
          <button
            onClick={() => onNavigate('categories')}
            className="text-xs sm:text-sm font-semibold text-[#3B2922] hover:text-[#B99559] flex items-center gap-1.5 transition-colors shrink-0"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onNavigate('products', cat.id)}
              className="group relative rounded-xl overflow-hidden bg-white border border-[#3B2922]/10 cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-serif text-base font-semibold text-[#3B2922] group-hover:text-[#B99559] transition-colors">
                    {cat.shortName}
                  </h3>
                  <p className="text-[11px] text-[#252525]/60 mt-1 line-clamp-2">
                    {cat.description}
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[#B99559] font-semibold">
                    Starts {cat.startingPrice}
                  </span>
                  <span className="text-[#3B2922] group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. BESTSELLING PRODUCTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#B99559] font-bold">
              Popular Selections
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B2922] mt-1">
              Bestselling Furniture
            </h2>
            <p className="text-xs sm:text-sm text-[#252525]/70 mt-1">
              Handcrafted in Bareilly with estimated indicative pricing. Ready to customize or order directly.
            </p>
          </div>
          <button
            onClick={() => onNavigate('products')}
            className="text-xs sm:text-sm font-semibold text-[#3B2922] hover:text-[#B99559] flex items-center gap-1.5 transition-colors shrink-0"
          >
            <span>Browse Full Catalogue (60+ Items)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellers.slice(0, 8).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewProduct}
            />
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="bg-[#FAF8F5] border-y border-[#3B2922]/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider text-[#B99559] font-bold">
              Our Core Principles
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B2922] mt-1">
              Why Homeowners &amp; Businesses Choose Us
            </h2>
            <p className="text-xs sm:text-sm text-[#252525]/70 mt-2">
              Under the direct leadership of Mr. Iqbal Husain, our focus remains squarely on dependable craftsmanship, genuine timber, and clear pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl border border-[#3B2922]/10 space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] text-[#B99559] flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#3B2922]">Quality Materials</h3>
              <p className="text-xs text-[#252525]/70 leading-relaxed">
                We manufacture with seasoned Sagwan (Teak Wood), genuine Sheesham, high-density Action TESA HDHMR, and BWP marine grade plywood.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-[#3B2922]/10 space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] text-[#B99559] flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#3B2922]">Modern &amp; Traditional Designs</h3>
              <p className="text-xs text-[#252525]/70 leading-relaxed">
                Whether you prefer clean Nordic minimalism, fluted contemporary lines, or royal carved wooden classics, we build to match your aesthetic.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-[#3B2922]/10 space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] text-[#B99559] flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#3B2922]">Custom Sizes &amp; Finishes</h3>
              <p className="text-xs text-[#252525]/70 leading-relaxed">
                Never settle for standard sizes that leave awkward gaps. Every bed, wardrobe, sofa, and kitchen can be sized down to the exact inch.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-[#3B2922]/10 space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] text-[#B99559] flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#3B2922]">Transparent Price Estimates</h3>
              <p className="text-xs text-[#252525]/70 leading-relaxed">
                No hidden costs. We provide clear breakdown estimates for wood, fabric, hardware, and fitting before starting work.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-[#3B2922]/10 space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] text-[#B99559] flex items-center justify-center font-bold">
                05
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#3B2922]">On-Site Measurements</h3>
              <p className="text-xs text-[#252525]/70 leading-relaxed">
                Our expert carpenters visit your home or office across Bareilly to measure wall dimensions, check alignment, and review blueprints.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-[#3B2922]/10 space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] text-[#B99559] flex items-center justify-center font-bold">
                06
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#3B2922]">Professional Fitting &amp; Personal Support</h3>
              <p className="text-xs text-[#252525]/70 leading-relaxed">
                Direct interaction with Director Mr. Iqbal Husain. Our in-house installation team ensures seamless alignment on every door, hinge, and drawer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CUSTOM FURNITURE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#3B2922] text-[#F7F3ED] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#B99559] font-bold">
                Bespoke Carpentry &amp; Woodwork
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Your Ideas. Our Craftsmanship.
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                Every home has unique architecture. We manufacture custom furniture tailored precisely according to your room space, preferred design photograph, dimensions, material, polish, and budget.
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs text-white/90 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B99559] shrink-0" />
                  <span>Custom Bed &amp; Headboard Sizes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B99559] shrink-0" />
                  <span>Floor-to-Ceiling Wardrobes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B99559] shrink-0" />
                  <span>Modular Kitchens to Layout</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B99559] shrink-0" />
                  <span>Solid Wood Doors &amp; Chaukhats</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={onOpenQuote}
                  className="px-6 py-3.5 bg-[#B99559] hover:bg-[#a68249] text-white rounded-xl font-semibold text-sm transition-colors shadow-lg"
                >
                  Request Custom Furniture
                </button>
                <a
                  href={getCustomFurnitureWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-medium text-sm transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-white/15 shadow-2xl">
                <img
                  src="/src/assets/images/craftsman_woodwork_1791774362710.jpg"
                  alt="Craftsman finishing dining table Bareilly"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ON-SITE SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider text-[#B99559] font-bold">
            Complete Execution Process
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B2922] mt-1">
            How Our On-Site Service Works
          </h2>
          <p className="text-xs sm:text-sm text-[#252525]/70 mt-2">
            A clear, 7-step journey from initial discussion to final installation in your home or office.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Initial Contact',
              desc: 'Call us or message on WhatsApp to discuss your requirements and rough ideas.',
            },
            {
              step: '02',
              title: 'Design & Budget Consultation',
              desc: 'We explore design styles, finishes, and understand your target budget parameters.',
            },
            {
              step: '03',
              title: 'Site Visit & Measurement',
              desc: 'Our carpenter visits your property in Bareilly to take precision measurements.',
            },
            {
              step: '04',
              title: 'Material Finalisation',
              desc: 'Select your preferred timber, laminate sheets, hardware hinges, and upholstery fabric.',
            },
            {
              step: '05',
              title: 'Transparent Quotation',
              desc: 'We provide an itemized quote detailing fabrication, hardware, and installation.',
            },
            {
              step: '06',
              title: 'Manufacturing in Workshop',
              desc: 'Master carpenters build and finish your furniture at our Jouharpur, CB Ganj facility.',
            },
            {
              step: '07',
              title: 'Delivery & Fitting',
              desc: 'On-schedule delivery, professional on-site assembly, and final client signoff.',
            },
          ].map((item) => (
            <div
              key={item.step}
              className="p-5 bg-white rounded-xl border border-[#3B2922]/10 space-y-2 relative"
            >
              <span className="font-mono text-xs text-[#B99559] font-bold tracking-wider">
                STEP {item.step}
              </span>
              <h3 className="font-serif text-base font-semibold text-[#3B2922]">{item.title}</h3>
              <p className="text-xs text-[#252525]/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}

          {/* Quick Service CTA Card */}
          <div className="p-5 bg-[#FAF8F5] rounded-xl border border-[#B99559]/30 space-y-3 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-[#3B2922] font-bold">READY TO START?</span>
              <h3 className="font-serif text-base font-semibold text-[#3B2922] mt-1">
                Book an On-Site Visit
              </h3>
              <p className="text-xs text-[#252525]/70 mt-1">
                Have an expert inspect your space in Bareilly today.
              </p>
            </div>
            <a
              href={getSiteVisitWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-lg transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Request Measurement Visit</span>
            </a>
          </div>
        </div>
      </section>

      {/* 7. PROJECT GALLERY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#B99559] font-bold">
              Inspiration &amp; Real Installations
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B2922] mt-1">
              Recent Project Installations
            </h2>
            <p className="text-xs sm:text-sm text-[#252525]/70 mt-1">
              Sample work across residential and commercial spaces in Bareilly. (Demonstration portfolio).
            </p>
          </div>
          <button
            onClick={() => onNavigate('gallery')}
            className="text-xs sm:text-sm font-semibold text-[#3B2922] hover:text-[#B99559] flex items-center gap-1.5 transition-colors shrink-0"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GALLERY_PROJECTS.slice(0, 3).map((proj) => (
            <div
              key={proj.id}
              onClick={() => onNavigate('gallery')}
              className="group rounded-xl overflow-hidden bg-white border border-[#3B2922]/10 cursor-pointer hover:shadow-lg transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md text-white text-[10px] px-2 py-0.5 rounded">
                  {proj.category}
                </span>
                <span className="absolute bottom-2.5 right-2.5 bg-[#B99559] text-white text-[10px] px-2 py-0.5 rounded font-medium">
                  {proj.location}
                </span>
              </div>
              <div className="p-4 space-y-1.5">
                <h4 className="font-serif text-base font-semibold text-[#3B2922] group-hover:text-[#B99559] transition-colors">
                  {proj.title}
                </h4>
                <p className="text-xs text-[#252525]/70 line-clamp-2">{proj.scope}</p>
                <div className="pt-2 text-[11px] text-[#B99559] font-medium flex items-center justify-between">
                  <span>Materials: {proj.materials}</span>
                  <span className="text-[#3B2922]">View Project →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CUSTOMER TESTIMONIALS SECTION */}
      <section className="bg-[#FAF8F5] border-y border-[#3B2922]/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-wider text-[#B99559] font-bold">
              Customer Feedback
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B2922] mt-1">
              Customer Experiences &amp; Reviews
            </h2>
            <p className="text-xs sm:text-sm text-[#252525]/60 mt-1">
              Verified customer feedback placeholder. As real reviews are collected, they will appear here.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl border border-[#3B2922]/10 space-y-3">
              <div className="text-[#B99559] text-sm">★★★★★</div>
              <p className="text-xs text-[#252525]/80 leading-relaxed italic">
                "Got a custom hydraulic king bed and sliding wardrobe manufactured for our new home in Civil Lines. Mr. Iqbal personally supervised the on-site measurements and installation."
              </p>
              <div className="pt-2 border-t border-slate-100 text-xs">
                <span className="font-semibold text-[#3B2922] block">Bareilly Homeowner</span>
                <span className="text-slate-400 text-[11px]">Civil Lines, Bareilly</span>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl border border-[#3B2922]/10 space-y-3">
              <div className="text-[#B99559] text-sm">★★★★★</div>
              <p className="text-xs text-[#252525]/80 leading-relaxed italic">
                "Solid Sheesham 6-seater dining table set was built to exact custom dimensions. The polish finish and wood quality surpassed what we saw in typical retail shops."
              </p>
              <div className="pt-2 border-t border-slate-100 text-xs">
                <span className="font-semibold text-[#3B2922] block">Residential Client</span>
                <span className="text-slate-400 text-[11px]">Pilibhit Bypass, Bareilly</span>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl border border-[#3B2922]/10 space-y-3">
              <div className="text-[#B99559] text-sm">★★★★★</div>
              <p className="text-xs text-[#252525]/80 leading-relaxed italic">
                "Our clinic reception counter and staff work desks were completed on schedule. Very courteous carpenters and clean on-site assembly work."
              </p>
              <div className="pt-2 border-t border-slate-100 text-xs">
                <span className="font-semibold text-[#3B2922] block">Commercial Client</span>
                <span className="text-slate-400 text-[11px]">Station Road, Bareilly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#252525] text-white p-8 sm:p-12 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#B99559] font-bold">
            Get Started Today
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-2xl mx-auto">
            Let's Create Furniture That Fits Your Space.
          </h2>
          <p className="text-sm text-white/80 max-w-xl mx-auto leading-relaxed">
            Whether you want ready-made pieces, custom wooden manufacturing, or an on-site measurement visit in Bareilly, we are just a call or message away.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw1}`}
              className="px-6 py-3.5 bg-[#3B2922] hover:bg-[#4a342b] border border-[#B99559]/40 text-white rounded-xl font-semibold text-sm transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#B99559]" />
              <span>Call Now ({BUSINESS_INFO.phone1})</span>
            </a>

            <a
              href={getGeneralWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-semibold text-sm transition-colors shadow-md flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Us</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="px-6 py-3.5 bg-[#B99559] hover:bg-[#a68249] text-white rounded-xl font-semibold text-sm transition-colors shadow-md"
            >
              Request a Site Visit
            </button>
          </div>

          <p className="text-xs text-white/50 pt-2">
            Address: {BUSINESS_INFO.address} · Director: {BUSINESS_INFO.director}
          </p>
        </div>
      </section>
    </div>
  );
};
