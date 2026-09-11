export type ThemeMode = 'light' | 'dark';

export interface ProductItem {
  id: string;
  title: string;
  category: 'software' | 'courses' | 'templates' | 'subscriptions' | 'dev';
  categoryLabel: string;
  description: string;
  tag: string;
  tagColor: 'coral' | 'sun' | 'teal' | 'grape' | 'emerald';
  badgeIcon: string;
  priceNote?: string;
  licenseType: string;
  deliveryTime: string;
  isPopular?: boolean;
  isNew?: boolean;
}

export interface SubscriptionItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  badge: string;
  accentColor: string;
  brandBg: string;
  brandText: string;
  iconType: 'netflix' | 'canva' | 'capcut' | 'gemini' | 'spotify' | 'figma' | 'chatgpt' | 'youtube';
  priceDisplay: string;
  planOptions: string[];
  features: string[];
  inStock: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  initials: string;
  avatarBg: string;
  rating: number;
  productBought: string;
  isArabic?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  questionAr?: string;
  answerAr?: string;
}

export interface VerificationResult {
  code: string;
  status: 'verified' | 'invalid' | 'revoked';
  productName: string;
  issuedTo: string;
  issueDate: string;
  licensedVendor: string;
  hash: string;
}
