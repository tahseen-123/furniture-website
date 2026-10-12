import { Product, QuoteFormData } from '../types';

export const BUSINESS_INFO = {
  name: 'Iqbal Furniture & Interior Studio',
  director: 'Mr. IQBAL Husain',
  phone1: '+91 9720568074',
  phone2: '+91 8218116058',
  phoneRaw1: '919720568074',
  phoneRaw2: '918218116058',
  whatsappNumber: '919720568074',
  address: 'Jouharpur, CB Ganj, Bareilly, Uttar Pradesh, India',
  city: 'Bareilly',
  state: 'Uttar Pradesh',
  country: 'India',
  businessHours: 'Mon – Sat: 9:30 AM – 8:30 PM, Sun: 10:00 AM – 6:00 PM',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Jouharpur+CB+Ganj+Bareilly+Uttar+Pradesh',
  serviceArea: 'Bareilly city, CB Ganj, Civil Lines, Izzatnagar, Pilibhit Bypass, Rampur Garden, and surrounding districts across Rohilkhand (on request).',
};

export function formatInrPrice(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatPriceDisplay(product: Product): string {
  if (product.pricingType === 'quote_required') {
    return 'Quotation on Request';
  }
  if (product.pricingType === 'per_sqft') {
    return `${formatInrPrice(product.estimatedMinPrice)} – ${formatInrPrice(product.estimatedMaxPrice)} / sq.ft. (Est.)`;
  }
  if (product.pricingType === 'starting_from') {
    return `Starting from ${formatInrPrice(product.estimatedMinPrice)}`;
  }
  return `${formatInrPrice(product.estimatedMinPrice)} – ${formatInrPrice(product.estimatedMaxPrice)}`;
}

export function getProductWhatsappUrl(product: Product): string {
  const priceText = formatPriceDisplay(product);
  const message = `Hello, I am interested in ${product.name}, SKU ${product.sku}. The displayed estimated price is ${priceText}. Please share the final price, available designs, materials, delivery details, and customisation options.`;
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getCustomFurnitureWhatsappUrl(): string {
  const message = `Hello, I want custom furniture made for my home/business. Please help me with design options, site measurement, material selection, estimated cost, and installation.`;
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getGeneralWhatsappUrl(): string {
  const message = `Hello, I found your furniture website and would like to know more about your products and services.`;
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getSiteVisitWhatsappUrl(serviceName?: string): string {
  const message = serviceName
    ? `Hello, I would like to request an on-site visit and measurement for ${serviceName} in Bareilly. Please let me know available slots.`
    : `Hello, I would like to request an on-site furniture measurement and consultation visit in Bareilly.`;
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function generateQuoteWhatsappUrl(formData: QuoteFormData): string {
  const lines = [
    `*NEW CUSTOM FURNITURE QUOTATION REQUEST*`,
    `----------------------------------------`,
    `*Customer Name:* ${formData.fullName}`,
    `*Phone:* ${formData.phone}`,
    formData.whatsapp ? `*WhatsApp:* ${formData.whatsapp}` : '',
    formData.email ? `*Email:* ${formData.email}` : '',
    `*City & Locality:* ${formData.city}`,
    `*Project Type:* ${formData.projectType}`,
    `*Furniture Category:* ${formData.category}`,
    formData.quantity ? `*Quantity:* ${formData.quantity}` : '',
    formData.approxDimensions ? `*Approx Dimensions:* ${formData.approxDimensions}` : '',
    formData.preferredMaterial ? `*Preferred Material:* ${formData.preferredMaterial}` : '',
    formData.preferredFinish ? `*Preferred Finish:* ${formData.preferredFinish}` : '',
    formData.budgetRange ? `*Budget Range:* ${formData.budgetRange}` : '',
    formData.completionDate ? `*Target Completion:* ${formData.completionDate}` : '',
    `*Delivery & Fitting Required:* ${formData.deliveryInstallationRequired}`,
    `*Site Visit Required:* ${formData.siteVisitRequired}`,
    formData.projectDescription ? `*Project Details:*\n${formData.projectDescription}` : '',
    `----------------------------------------`,
    `Please review my requirements and provide an estimated quotation and next steps.`,
  ].filter(Boolean);

  const message = lines.join('\n');
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
