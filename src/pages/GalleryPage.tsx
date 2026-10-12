import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { GALLERY_PROJECTS } from '../data/projects';
import { BUSINESS_INFO, getSiteVisitWhatsappUrl } from '../utils/whatsapp';
import {
  MapPin,
  MessageCircle,
  Phone,
  X,
  Info,
} from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filterOptions = [
    'All',
    'Bedroom',
    'Living Room',
    'Dining Room',
    'Office',
    'Kitchen',
    'Wardrobe',
    'Doors and Windows',
    'Commercial Projects',
  ];

  const filteredProjects = GALLERY_PROJECTS.filter((proj) => {
    if (selectedFilter === 'All') return true;
    return proj.category === selectedFilter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center space-y-3">
        <span className="text-xs uppercase tracking-widest text-[#B99559] font-bold">
          Craftsmanship In Action
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#3B2922]">
          Our Projects &amp; Gallery
        </h1>
        <p className="text-xs sm:text-sm text-[#252525]/70 leading-relaxed">
          Explore installation concepts and bespoke carpentry craftsmanship. Review room transformations across residential and commercial spaces in Bareilly.
        </p>

        {/* Clear Prompt-Mandated Transparency Disclaimer */}
        <div className="inline-flex items-center gap-1.5 p-2.5 px-4 bg-[#FAF8F5] border border-[#3B2922]/10 rounded-full text-[11px] text-[#252525]/70">
          <Info className="w-3.5 h-3.5 text-[#B99559] shrink-0" />
          <span>
            Demonstration Portfolio: Images represent illustrative project styles and design concepts.
          </span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#FAF8F5] rounded-xl border border-[#3B2922]/10 max-w-4xl mx-auto">
        {filterOptions.map((f) => (
          <button
            key={f}
            onClick={() => setSelectedFilter(f)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              selectedFilter === f
                ? 'bg-[#3B2922] text-[#F7F3ED] shadow-sm'
                : 'text-[#252525]/70 hover:text-[#3B2922]'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            onClick={() => setActiveProject(proj)}
            className="group bg-white rounded-2xl border border-[#3B2922]/10 overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                <img
                  src={proj.image}
                  alt={proj.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                  <span className="bg-black/70 backdrop-blur-md text-white text-[10px] font-medium px-2 py-0.5 rounded">
                    {proj.category}
                  </span>
                  {proj.isDemonstration && (
                    <span className="bg-[#B99559]/90 backdrop-blur-md text-white text-[10px] font-medium px-2 py-0.5 rounded">
                      Illustrative Concept
                    </span>
                  )}
                </div>
                <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-[#3B2922] text-[10px] font-semibold px-2 py-0.5 rounded flex items-center gap-1 shadow-sm">
                  <MapPin className="w-2.5 h-2.5 text-[#B99559]" />
                  {proj.location}
                </span>
              </div>

              {/* Information */}
              <div className="p-5 space-y-2">
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#3B2922] group-hover:text-[#B99559] transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs text-[#252525]/70 line-clamp-2">
                  {proj.description}
                </p>

                <div className="pt-2 text-[11px] text-[#252525]/60 space-y-1 border-t border-slate-100">
                  <p><strong className="text-[#3B2922]">Scope:</strong> {proj.scope}</p>
                  <p><strong className="text-[#3B2922]">Materials:</strong> {proj.materials}</p>
                </div>
              </div>
            </div>

            {/* Bottom Card Action */}
            <div className="p-5 pt-0 mt-2 flex items-center justify-between text-xs font-semibold text-[#B99559] group-hover:text-[#3B2922] transition-colors border-t border-slate-100 pt-3">
              <span>View Project Details</span>
              <span>→</span>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div
            className="bg-white rounded-2xl max-w-2xl w-full border border-[#3B2922]/15 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] bg-slate-100">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-3 right-3 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md text-white text-xs px-3 py-1 rounded">
                {activeProject.category} · {activeProject.location}
              </div>
            </div>

            <div className="p-6 space-y-4 overflow-y-auto flex-1">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#3B2922]">
                  {activeProject.title}
                </h3>
                <p className="text-xs text-[#252525]/80 mt-1 leading-relaxed">
                  {activeProject.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-[#FAF8F5] p-4 rounded-xl border border-[#3B2922]/10">
                <div>
                  <span className="text-[#252525]/60 block font-medium">Scope of Carpentry:</span>
                  <span className="font-semibold text-[#3B2922]">{activeProject.scope}</span>
                </div>
                <div>
                  <span className="text-[#252525]/60 block font-medium">Materials Deployed:</span>
                  <span className="font-semibold text-[#3B2922]">{activeProject.materials}</span>
                </div>
                <div>
                  <span className="text-[#252525]/60 block font-medium">Location:</span>
                  <span className="font-semibold text-[#3B2922]">{activeProject.location}</span>
                </div>
                <div>
                  <span className="text-[#252525]/60 block font-medium">Execution Window:</span>
                  <span className="font-semibold text-[#3B2922]">{activeProject.duration}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={getSiteVisitWhatsappUrl(activeProject.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-xs font-semibold shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Enquire for Similar Project</span>
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw1}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#3B2922] hover:bg-[#2c1d17] text-[#F7F3ED] rounded-xl text-xs font-medium transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#B99559]" />
                  <span>Call Mr. Iqbal ({BUSINESS_INFO.phone1})</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
