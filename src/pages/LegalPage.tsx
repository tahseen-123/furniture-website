import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../utils/whatsapp';

interface LegalPageProps {
  pageType: 'privacy' | 'terms';
  onNavigate: (page: PageId) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ pageType, onNavigate }) => {
  const isPrivacy = pageType === 'privacy';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Switcher Tab */}
      <div className="flex border-b border-[#3B2922]/10 gap-6">
        <button
          onClick={() => onNavigate('privacy')}
          className={`pb-3 text-sm font-semibold transition-colors border-b-2 ${
            isPrivacy
              ? 'border-[#B99559] text-[#3B2922]'
              : 'border-transparent text-[#252525]/60 hover:text-[#3B2922]'
          }`}
        >
          Privacy Policy
        </button>
        <button
          onClick={() => onNavigate('terms')}
          className={`pb-3 text-sm font-semibold transition-colors border-b-2 ${
            !isPrivacy
              ? 'border-[#B99559] text-[#3B2922]'
              : 'border-transparent text-[#252525]/60 hover:text-[#3B2922]'
          }`}
        >
          Terms &amp; Conditions
        </button>
      </div>

      {isPrivacy ? (
        <div className="bg-white rounded-2xl border border-[#3B2922]/10 p-6 sm:p-10 space-y-6 text-xs sm:text-sm text-[#252525]/80 leading-relaxed">
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B2922]">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#252525]/60">
            Last Updated: 2026 · Iqbal Furniture &amp; Interior Studio
          </p>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-[#3B2922]">1. Information We Collect</h2>
            <p>
              When you submit a custom furniture quotation request or contact us via WhatsApp or phone, you provide personal details such as your name, mobile phone number, locality in Bareilly, and project preferences. We collect this information solely to communicate with you regarding your furniture requirements.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-[#3B2922]">2. How We Use Your Information</h2>
            <p>
              Your contact details are used exclusively by Director Mr. Iqbal Husain and our workshop team to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Respond to your product inquiries and WhatsApp messages.</li>
              <li>Schedule on-site measurement appointments across Bareilly.</li>
              <li>Share personalized design drawings, timber estimates, and quotations.</li>
              <li>Coordinate furniture delivery and installation at your address.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-[#3B2922]">3. Data Sharing &amp; Protection</h2>
            <p>
              We do not sell, rent, or trade your personal information to any third-party marketing companies. Your project blueprints and contact numbers remain strictly confidential within our business operations.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-[#3B2922]">4. Contacting Us Regarding Privacy</h2>
            <p>
              If you have any questions regarding how your data is handled, you may contact Director Mr. Iqbal Husain directly at +91 9720568074 or visit our studio in Jouharpur, CB Ganj, Bareilly.
            </p>
          </section>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-[#3B2922]/10 p-6 sm:p-10 space-y-6 text-xs sm:text-sm text-[#252525]/80 leading-relaxed">
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B2922]">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs text-[#252525]/60">
            Last Updated: 2026 · Iqbal Furniture &amp; Interior Studio
          </p>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-[#3B2922]">1. Website Catalog &amp; Indicative Pricing</h2>
            <p>
              All prices displayed on this website are illustrative estimated starting ranges intended for demonstration and preliminary budgeting purposes. Because custom woodwork depends on dimensions, specific timber species (such as seasoned Sagwan, Sheesham, or HDHMR), hardware brands (Ebco, Hafele, Blum), and delivery conditions, <strong>a final binding price quotation is only established after direct consultation and on-site inspection</strong>.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-[#3B2922]">2. Custom Furniture Orders &amp; Measurements</h2>
            <p>
              For made-to-order furniture and modular cabinetry, manufacture begins only after the client approves the final dimensions, material samples, and finish selection. In cases where the client provides their own measurements without requesting an on-site visit, the client is responsible for verifying dimensional accuracy against existing entryways, elevators, and room spaces.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-[#3B2922]">3. Delivery, Fitting &amp; Installation</h2>
            <p>
              Doorstep delivery and on-site assembly schedules are agreed upon at the time of quotation. While every reasonable effort is made to adhere to estimated delivery dates, delays arising from weather disruptions, site unreadiness (such as ongoing wet civil or painting work), or raw material transit delays will be communicated proactively.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-[#3B2922]">4. Demonstration &amp; Showcase Imagery</h2>
            <p>
              Photographs within the gallery and catalog serve as design references and illustrative portfolio demonstrations of available aesthetic finishes. Real business photographs will be added as project records are cataloged.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-[#3B2922]">5. Governing Jurisdiction</h2>
            <p>
              All agreements and transactions are subject to the local legal jurisdiction of Bareilly, Uttar Pradesh, India.
            </p>
          </section>
        </div>
      )}
    </div>
  );
};
