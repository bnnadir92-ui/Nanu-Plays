import { ProductItem, SubscriptionItem, Testimonial, FaqItem, VerificationResult } from '../types';

export const WHATSAPP_NUMBER = '213779097191';
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function getWhatsAppUrl(message: string): string {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}

export const PARTNER_BRANDS = [
  'Nimbus Suite',
  'Ledgerly Cloud',
  'Framewell UI',
  'Coursera+',
  'Pixelforge Studio',
  'DevSprint AI',
  'AudioEngine',
  'VectorSync'
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'prod-1',
    title: 'Software & OS Licenses',
    category: 'software',
    categoryLabel: 'Software & Tools',
    description: 'Genuine activation keys for design suites, productivity systems, and developer IDEs. Issued directly to your email with manufacturer confirmation.',
    tag: 'Instant Delivery (60s)',
    tagColor: 'sun',
    badgeIcon: 'key',
    priceNote: 'Best price guaranteed',
    licenseType: 'Official OEM / Retail Key',
    deliveryTime: '< 1 min',
    isPopular: true
  },
  {
    id: 'prod-2',
    title: 'Masterclass Courses & Guides',
    category: 'courses',
    categoryLabel: 'Education',
    description: 'Full-length accredited programs from verified industry veterans. Includes complete project files, lifetime updates, and real verified certificates.',
    tag: 'Lifetime Access',
    tagColor: 'grape',
    badgeIcon: 'graduation-cap',
    priceNote: 'Includes Certificate',
    licenseType: 'Direct Student License',
    deliveryTime: 'Instant',
    isPopular: true
  },
  {
    id: 'prod-3',
    title: 'Commercial UI & Doc Kits',
    category: 'templates',
    categoryLabel: 'Design & Assets',
    description: 'Design system kits, vector icon libraries, and legal business templates 100% cleared for commercial client use without royalty constraints.',
    tag: 'Commercial Use OK',
    tagColor: 'teal',
    badgeIcon: 'layout-grid',
    priceNote: 'No recurring royalties',
    licenseType: 'Unlimited Commercial License',
    deliveryTime: 'Instant download'
  },
  {
    id: 'prod-4',
    title: 'Curated Buyer Bundles',
    category: 'subscriptions',
    categoryLabel: 'Bundles',
    description: 'The highest-rated multi-tool combinations handpicked by our team. Save up to 60% compared to buying single licenses individually.',
    tag: 'Updated Monthly',
    tagColor: 'coral',
    badgeIcon: 'sparkles',
    priceNote: 'Save up to 60%',
    licenseType: 'Multi-seat Bundles',
    deliveryTime: 'Within 5 mins',
    isPopular: true
  },
  {
    id: 'prod-5',
    title: 'Freshly Onboarded Drops',
    category: 'dev',
    categoryLabel: 'Developer Tools',
    description: 'Cutting-edge AI developer tools, cloud credits, and freshly audited software partners debuting on Sparkshelf this week.',
    tag: 'Just Landed',
    tagColor: 'grape',
    badgeIcon: 'zap',
    priceNote: 'Limited inaugural quota',
    licenseType: 'Direct API & Seats',
    deliveryTime: 'Instant',
    isNew: true
  },
  {
    id: 'prod-6',
    title: 'Cloud Storage & Workspace Seats',
    category: 'software',
    categoryLabel: 'Cloud & Backup',
    description: 'Secure enterprise cloud drive expansions and team collaboration seats with uninterrupted uptime guarantees.',
    tag: 'Guaranteed Uptime',
    tagColor: 'emerald',
    badgeIcon: 'shield-check',
    priceNote: 'Flexible billing',
    licenseType: 'Official Enterprise Sub',
    deliveryTime: '< 10 mins'
  }
];

export const SUBSCRIPTIONS: SubscriptionItem[] = [
  {
    id: 'sub-netflix',
    name: 'Netflix Premium',
    slug: 'netflix',
    description: 'Ultra HD 4K streaming on your own private profile or private account. Immediate device setup with full warranty.',
    badge: '4K Ultra HD',
    accentColor: '#E50914',
    brandBg: '#E50914',
    brandText: '#FFFFFF',
    iconType: 'netflix',
    priceDisplay: 'From $4.99 / mo',
    planOptions: ['1 Month', '3 Months', '6 Months', '12 Months'],
    features: ['4K HDR + Dolby Atmos', 'Private PIN-protected profile', 'Works on TV, Mobile & PC', 'Instant replacement warranty'],
    inStock: true
  },
  {
    id: 'sub-canva',
    name: 'Canva Pro',
    slug: 'canva',
    description: 'Full creative suite with 100M+ premium stock photos, 1-click magic background remover, brand kits, and unlimited folders.',
    badge: 'Official Invite',
    accentColor: '#00C4CC',
    brandBg: '#00C4CC',
    brandText: '#0F172A',
    iconType: 'canva',
    priceDisplay: 'From $3.50 / mo',
    planOptions: ['1 Month', '6 Months', '1 Year', 'Lifetime Option'],
    features: ['100M+ premium assets', 'Background remover & resize', 'Brand kits & custom fonts', 'Added to your existing email'],
    inStock: true
  },
  {
    id: 'sub-capcut',
    name: 'CapCut Pro',
    slug: 'capcut',
    description: 'Watermark-free video exports up to 4K 60FPS, professional AI effects, auto-captions with custom styles, and cloud storage.',
    badge: 'Creator Essential',
    accentColor: '#1E1E2E',
    brandBg: '#1E1E2E',
    brandText: '#FFFFFF',
    iconType: 'capcut',
    priceDisplay: 'From $3.99 / mo',
    planOptions: ['1 Month', '3 Months', '1 Year'],
    features: ['No watermarks on export', 'All VIP transitions & filters', 'AI speech-to-text captions', 'Multi-device sync'],
    inStock: true
  },
  {
    id: 'sub-gemini',
    name: 'Gemini Advanced',
    slug: 'gemini',
    description: 'Access Google’s flagship next-gen AI with 1M-2M token context windows, deep code reasoning, and workspace integration.',
    badge: 'AI Flagship',
    accentColor: '#8E75FF',
    brandBg: '#8E75FF',
    brandText: '#FFFFFF',
    iconType: 'gemini',
    priceDisplay: 'From $7.50 / mo',
    planOptions: ['1 Month', '3 Months', '6 Months'],
    features: ['Massive token context window', 'High priority response speed', 'Integrated Google Workspace', 'Full code & data reasoning'],
    inStock: true
  },
  {
    id: 'sub-spotify',
    name: 'Spotify Premium',
    slug: 'spotify',
    description: 'Ad-free high fidelity music streaming, offline song downloads, and unlimited skips on your existing personal playlist.',
    badge: 'Lossless Audio',
    accentColor: '#1DB954',
    brandBg: '#1DB954',
    brandText: '#FFFFFF',
    iconType: 'spotify',
    priceDisplay: 'From $2.99 / mo',
    planOptions: ['3 Months', '6 Months', '1 Year'],
    features: ['Zero audio advertisements', 'Offline download support', 'Extreme quality (320kbps)', 'Keeps your playlists & history'],
    inStock: true
  },
  {
    id: 'sub-figma',
    name: 'Figma Professional',
    slug: 'figma',
    description: 'Unlimited Figma files, shared team component libraries, dev mode inspection, and version history for designers & teams.',
    badge: 'Team Ready',
    accentColor: '#F24E1E',
    brandBg: '#F24E1E',
    brandText: '#FFFFFF',
    iconType: 'figma',
    priceDisplay: 'From $8.00 / mo',
    planOptions: ['3 Months', '6 Months', '1 Year'],
    features: ['Unlimited project files', 'Dev Mode inspection & assets', 'Interactive prototypes & variables', 'Team component libraries'],
    inStock: true
  },
  {
    id: 'sub-chatgpt',
    name: 'ChatGPT Plus',
    slug: 'chatgpt',
    description: 'GPT-4o and o1 reasoning model access, custom GPTs, Dall-E 3 image generation, and live voice interactions.',
    badge: 'Top Model',
    accentColor: '#10A37F',
    brandBg: '#10A37F',
    brandText: '#FFFFFF',
    iconType: 'chatgpt',
    priceDisplay: 'From $9.99 / mo',
    planOptions: ['1 Month', '3 Months'],
    features: ['Access to GPT-4o & reasoning', 'Custom GPT creation & store', 'DALL-E 3 image generation', 'Higher rate limits'],
    inStock: true
  },
  {
    id: 'sub-youtube',
    name: 'YouTube Premium',
    slug: 'youtube',
    description: 'Enjoy YouTube and YouTube Music with no interruptions, background play on phone lock, and offline video downloads.',
    badge: 'Ad-Free Play',
    accentColor: '#FF0000',
    brandBg: '#FF0000',
    brandText: '#FFFFFF',
    iconType: 'youtube',
    priceDisplay: 'From $3.20 / mo',
    planOptions: ['3 Months', '6 Months', '1 Year'],
    features: ['Ad-free video across all devices', 'Background & lock-screen play', 'Includes YouTube Music Premium', 'Offline downloads'],
    inStock: true
  }
];

export const TESTIMONIALS_EN: Testimonial[] = [
  {
    id: 't-1',
    quote: 'Bought a design suite license expecting the usual grey-key anxiety. It registered instantly under my own official account — first time an online vendor delivered on this guarantee without hassle.',
    author: 'Maya I.',
    role: 'Freelance UI/UX Designer',
    initials: 'MI',
    avatarBg: '#FF5A43',
    rating: 5,
    productBought: 'Figma Professional & Design Bundle'
  },
  {
    id: 't-2',
    quote: 'Ordered a course bundle for my operations team. The completion certificates were genuine brand-issued credentials with traceable hashes — HR verified and accepted them immediately.',
    author: 'Daniel K.',
    role: 'Senior Operations Manager',
    initials: 'DK',
    avatarBg: '#1FBDB0',
    rating: 5,
    productBought: 'Coursera+ Executive Program'
  },
  {
    id: 't-3',
    quote: 'I checked the license reference on the product page before buying. It matched the vendor’s authentic certified distributor directory. That transparent paperwork is why I keep ordering.',
    author: 'Rana S.',
    role: 'Small Business Director',
    initials: 'RS',
    avatarBg: '#6D5BF0',
    rating: 5,
    productBought: 'Canva Pro Annual License'
  }
];

export const TESTIMONIALS_AR: Testimonial[] = [
  {
    id: 't-ar-1',
    quote: 'اشتريت اشتراك كانفا برو وتفعّل فورًا على إيميلي الشخصي، وسعر أفضل بكثير من الاشتراك المباشر. تعامل راقي وسريع وكل شيء مضمون.',
    author: 'سارة م.',
    role: 'مصممة جرافيك مستقلة',
    initials: 'سارة',
    avatarBg: '#FF5A43',
    rating: 5,
    productBought: 'كانفا برو - سنة كاملة',
    isArabic: true
  },
  {
    id: 't-ar-2',
    quote: 'تواصلت عبر واتساب واستلمت حساب نتفليكس 4K خلال دقائق معدودة. الأسعار ممتازة جداً والدعم متجاوب في أي وقت.',
    author: 'أحمد ك.',
    role: 'عميل دائم ومسوق رقمي',
    initials: 'أحمد',
    avatarBg: '#1FBDB0',
    rating: 5,
    productBought: 'نتفليكس بريميوم 4K',
    isArabic: true
  },
  {
    id: 't-ar-3',
    quote: 'أفضل متجر تعاملت معه لشراء الاشتراكات الرقمية والتراخيص الرسمية. الشفافية واضحة والتفعيل قانوني وبدون أي انقطاع.',
    author: 'لمى ع.',
    role: 'صاحبة مشروع متجر إلكتروني',
    initials: 'لمى',
    avatarBg: '#6D5BF0',
    rating: 5,
    productBought: 'كاب كات برو + جيميني',
    isArabic: true
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'How quickly do I receive my license key or account after payment?',
    answer: 'Most software licenses and digital keys are dispatched within 60 seconds of confirmation. Custom subscription activations (like adding Canva Pro to your existing email or setting up Netflix profiles) typically take 5 to 15 minutes during active support hours.'
  },
  {
    question: 'Are these licenses authentic and safe to use commercially?',
    answer: 'Yes! Every license, key, and subscription provided through Sparkshelf originates from official developer partner agreements and certified distributors. We do not use grey-market or cracked keys, meaning your licenses are 100% legal for personal and commercial usage.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We support fast, secure payments via BaridiMob, CCP, Wise, PayPal, Crypto (USDT), and bank transfers depending on your location. Simply message us on WhatsApp to select your preferred method.'
  },
  {
    question: 'What happens if a subscription stops working before the expiration period?',
    answer: 'Every product comes with our Sparkshelf Full-Term Warranty. If you ever encounter an issue, send us a WhatsApp message and we will resolve it or provide an immediate replacement within hours.'
  },
  {
    question: 'Can I link Canva Pro or Spotify to my current personal email?',
    answer: 'Yes! For apps like Canva Pro, Spotify, and YouTube Premium, we can activate the subscription directly onto your existing account so you retain all your saved designs, playlists, and histories.'
  }
];

export const SAMPLE_VERIFICATION_KEYS: Record<string, VerificationResult> = {
  'SPARK-8921-NX': {
    code: 'SPARK-8921-NX',
    status: 'verified',
    productName: 'Canva Pro Enterprise Seat',
    issuedTo: 'Client ID: #88219 (Sparkshelf Auth)',
    issueDate: 'September 2026',
    licensedVendor: 'Canva Pty Ltd (Direct Partner #CP-2026-9)',
    hash: 'SHA256: 7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069'
  },
  'SPARK-4410-FS': {
    code: 'SPARK-4410-FS',
    status: 'verified',
    productName: 'Figma Professional Team Seat',
    issuedTo: 'Client ID: #44102 (Commercial Clear)',
    issueDate: 'August 2026',
    licensedVendor: 'Figma Inc. Educational & Team License',
    hash: 'SHA256: 9b2d863f822e379461bfcdde487d60f9e1e792576b5cf0bf443c72bcfef72d73'
  },
  'SPARK-1082-CC': {
    code: 'SPARK-1082-CC',
    status: 'verified',
    productName: 'CapCut VIP Creator License',
    issuedTo: 'Client ID: #10821 (Verified Multi-Device)',
    issueDate: 'July 2026',
    licensedVendor: 'ByteDance Ltd Authorized Partner',
    hash: 'SHA256: 3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3eee4c047e7ab1c1'
  }
};
