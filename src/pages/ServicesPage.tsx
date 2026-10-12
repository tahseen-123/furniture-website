import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, getSiteVisitWhatsappUrl, getGeneralWhatsappUrl } from '../utils/whatsapp';
import {
  Ruler,
  Compass,
  Hammer,
  DoorOpen,
  UtensilsCrossed,
  Truck,
  Building2,
  Home,
  RefreshCw,
  MessageCircle,
  Phone,
} from 'lucide-react';

interface ServicesPageProps {
  onOpenQuote: () => void;
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuote, onNavigate }) => {
  const servicesList = [
    {
      id: 'site-measurement',
      icon: Ruler,
      title: 'Furniture Site Measurement',
      desc: 'Accurate laser and manual site measurement across Bareilly to map wall alignments, skirting dimensions, ceiling heights, and switchboard locations.',
      benefits: 'Guarantees zero margin of error; eliminates awkward gaps between furniture and masonry.',
      process: '1. Appointment scheduled → 2. Carpenter arrives with measuring kit → 3. Dimensions recorded → 4. 2D/3D layout prepared.',
      costFactors: 'Location distance in Bareilly, number of rooms measured, and structural complexity.',
    },
    {
      id: 'custom-design',
      icon: Compass,
      title: 'Custom Furniture Design',
      desc: 'Converting your Pinterest photos, architectural blueprints, or hand sketches into build-ready structural carpentry drawings.',
      benefits: 'Visual clarity before timber is cut; bespoke matching to existing room aesthetics.',
      process: '1. Requirement review → 2. Wood & finish sampling → 3. Design approval → 4. Workshop execution.',
      costFactors: 'Elaborateness of carving, multi-tier mechanisms, and material selection.',
    },
    {
      id: 'manufacturing',
      icon: Hammer,
      title: 'Furniture Manufacturing in Workshop',
      desc: 'Precision timber cutting, joinery, and spray finishing at our Jouharpur, CB Ganj manufacturing workshop by veteran craftsmen.',
      benefits: 'Seasoned hardwoods, controlled temperature polishing, and rigorous structural testing.',
      process: '1. Timber seasoning → 2. Mortise & tenon joinery → 3. Sanding & primer → 4. PU/Melamyne topcoat.',
      costFactors: 'Wood species (Sagwan Teak vs Sheesham vs HDHMR), hardware grade, and finish type.',
    },
    {
      id: 'wardrobe-fitting',
      icon: Home,
      title: 'Floor-to-Ceiling Wardrobe Installation',
      desc: 'Seamless built-in sliding and hinged wardrobes fitted flush against bedroom walls and ceiling lofts with zero dust crevices.',
      benefits: 'Maximized vertical storage, integrated soft-closing dampers, and custom sensor illumination.',
      process: '1. Carcass assembly → 2. Track leveling → 3. Shutter alignment → 4. Interior accessory fitting.',
      costFactors: 'Running foot width, sliding vs hinged mechanism, mirror/fluted glass shutters.',
    },
    {
      id: 'modular-kitchen',
      icon: UtensilsCrossed,
      title: 'Modular Kitchen Installation',
      desc: 'Turnkey installation of BWP marine grade and HDHMR modular kitchen carcasses, soft-close tandem boxes, and quartz counters.',
      benefits: '100% moisture-resistant, termite-proof, with ergonomic layout for Indian cooking styles.',
      process: '1. Base carcass leveling → 2. Wall unit anchoring → 3. Drawer tracks → 4. Counter & sink fitting.',
      costFactors: 'Running square footage, acrylic vs laminate shutters, and basket wire brands (Hafele, Blum, Ebco).',
    },
    {
      id: 'door-window',
      icon: DoorOpen,
      title: 'Solid Wood Door & Window Fitting',
      desc: 'Chaukhat frame anchoring, carved entrance door mounting, mortise lock installation, and double jali shutter fitting.',
      benefits: 'Acoustic dampening, high home security, and weather-resistant external longevity.',
      process: '1. Chaukhat plumbing & alignment → 2. Shutter planning → 3. Heavy-duty hinge fitting → 4. Lock installation.',
      costFactors: 'Door thickness (32mm vs 38mm), Sagwan carving depth, and hardware specifications.',
    },
    {
      id: 'office-fitout',
      icon: Building2,
      title: 'Office & Commercial Furniture Installation',
      desc: 'Turnkey installation of executive director tables, staff modular workstations, conference rooms, and reception counters.',
      benefits: 'Minimum commercial downtime, integrated wire raceways, and professional corporate aesthetic.',
      process: '1. Blueprint analysis → 2. Off-site prefabrication → 3. Rapid on-site assembly → 4. Cable grommet check.',
      costFactors: 'Total workstation count, partition fabric type, and laminate grade.',
    },
    {
      id: 'assembly-delivery',
      icon: Truck,
      title: 'Doorstep Delivery & Furniture Assembly',
      desc: 'Protective foam bubble packing, safe transit in closed trucks, and careful carrying into your floor flat or bungalow.',
      benefits: 'Zero transit scratches, professional unpacking, and clean disposal of packing debris.',
      process: '1. Multi-layer foam wrapping → 2. Transit in dedicated vehicle → 3. Room placement → 4. Assembly & cleanup.',
      costFactors: 'Floor elevation (staircase vs elevator), delivery distance from CB Ganj, and item volume.',
    },
    {
      id: 'upgrades-repair',
      icon: RefreshCw,
      title: 'Furniture Upgrades & Refinishing',
      desc: 'Re-polishing worn timber, replacing drawer channels with soft-close tracks, and re-upholstering sofa sets (subject to availability).',
      benefits: 'Restores antique family heirlooms and breathes new life into structurally sound solid timber.',
      process: '1. Condition evaluation → 2. Stripping old polish/fabric → 3. Structural tightening → 4. Fresh spray polish.',
      costFactors: 'Condition of existing timber, foam replacement requirement, and fabric selection.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#B99559] font-bold">
          End-to-End Carpentry &amp; Fitout
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#3B2922]">
          On-Site Furniture Services
        </h1>
        <p className="text-sm sm:text-base text-[#252525]/80 leading-relaxed">
          From precise laser measurements in your home to workshop manufacturing and meticulous on-site assembly in Bareilly, our master carpentry team delivers complete solutions.
        </p>

        <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#3B2922]/10 inline-block text-xs text-[#252525]/70 max-w-xl">
          <strong className="text-[#3B2922]">Service Area Notice:</strong> On-site services are currently provided across Bareilly city, CB Ganj, Civil Lines, Izzatnagar, Rampur Garden, and surrounding Rohilkhand towns on request.
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map((svc) => {
          const IconComp = svc.icon;
          return (
            <div
              key={svc.id}
              className="bg-white rounded-2xl border border-[#3B2922]/10 p-6 flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] text-[#B99559] flex items-center justify-center border border-[#3B2922]/10">
                  <IconComp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#3B2922]">{svc.title}</h3>
                  <p className="text-xs text-[#252525]/75 mt-1.5 leading-relaxed">{svc.desc}</p>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-2 text-xs">
                  <div>
                    <span className="font-semibold text-[#3B2922]">Why it matters:</span>
                    <p className="text-[#252525]/70 mt-0.5">{svc.benefits}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-[#3B2922]">Workflow:</span>
                    <p className="text-[#252525]/70 mt-0.5">{svc.process}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-[#B99559]">Pricing Factors:</span>
                    <p className="text-[#252525]/70 mt-0.5">{svc.costFactors}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <a
                  href={getSiteVisitWhatsappUrl(svc.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-lg text-xs font-semibold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>Book Visit</span>
                </a>
                <button
                  onClick={onOpenQuote}
                  className="flex-1 py-2 px-3 bg-[#3B2922] hover:bg-[#2c1d17] text-[#F7F3ED] rounded-lg text-xs font-medium transition-colors"
                >
                  Get Quote
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Direct Booking Strip */}
      <div className="rounded-2xl bg-[#3B2922] text-[#F7F3ED] p-8 sm:p-12 text-center space-y-4">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold">
          Need an on-site carpenter for your Bareilly property?
        </h2>
        <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto leading-relaxed">
          Director Mr. Iqbal Husain personally oversees client appointments and ensures accurate site assessments before any cutting or manufacturing begins.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw1}`}
            className="px-6 py-3 bg-[#B99559] hover:bg-[#a68249] text-white rounded-xl font-semibold text-xs transition-colors flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call {BUSINESS_INFO.phone1}</span>
          </a>
          <a
            href={getGeneralWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-semibold text-xs transition-colors flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>
      </div>
    </div>
  );
};
