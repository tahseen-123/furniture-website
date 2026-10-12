export type PageId =
  | 'home'
  | 'products'
  | 'categories'
  | 'custom'
  | 'services'
  | 'gallery'
  | 'about'
  | 'contact'
  | 'faq'
  | 'privacy'
  | 'terms';

export type PricingType = 'range' | 'starting_from' | 'quote_required' | 'per_sqft';

export interface Product {
  id: string;
  sku: string;
  name: string;
  slug: string;
  category: string;
  subcategory: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  material: string;
  dimensions: string;
  finishOptions: string[];
  estimatedMinPrice: number;
  estimatedMaxPrice: number;
  pricingType: PricingType;
  customisationAvailable: boolean;
  featured: boolean;
  availabilityStatus: 'In Stock' | 'Made to Order' | 'On-Site Custom';
  features?: string[];
  careInstructions?: string;
}

export interface CategoryInfo {
  id: string;
  name: string;
  shortName: string;
  description: string;
  subcategories: string[];
  image: string;
  startingPrice: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  scope: string;
  materials: string;
  duration: string;
  image: string;
  description: string;
  isDemonstration: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'pricing' | 'custom' | 'services' | 'delivery' | 'materials';
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  whatsapp: string;
  email: string;
  city: string;
  projectType: string;
  category: string;
  quantity: string;
  approxDimensions: string;
  preferredMaterial: string;
  preferredFinish: string;
  budgetRange: string;
  completionDate: string;
  deliveryInstallationRequired: 'Yes' | 'No';
  siteVisitRequired: 'Yes' | 'No';
  projectDescription: string;
}
