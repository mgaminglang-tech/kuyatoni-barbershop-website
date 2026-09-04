import { ServiceItem, TrendingCut, HighlightFeature, BusinessHours } from '../types';

export const SHOP_INFO = {
  name: 'Kuya Toni Barber House',
  tagline: 'Sharp Cuts. Clean Style. Real Confidence.',
  subheadline: 'Quality barber services, fresh fades, and trending cuts at Kuya Toni Barber House.',
  shortTagline: 'Clean Cuts. Fresh Style.',
  addressPlaceholder: 'Adelfa Street, Brgy. Sisiman, Mariveles, Bataan',
  displayAddress: 'Adelfa Street, Brgy. Sisiman, Mariveles, Bataan',
  phonePlaceholder: '09393319224',
  displayPhone: '+63 939 331 9224',
  facebookLink: 'https://www.facebook.com/kua.toni.2024',
  facebookHandle: 'fb.com/kua.toni.2024',
  messengerLink: 'https://www.facebook.com/messages/e2ee/t/7431227703590551',
  barberName: 'Kuya Toni',
  barberTitle: 'Owner & Master Barber',
  barberBio: 'Kuya Toni is dedicated to delivering clean, stylish, and confidence-boosting cuts for every client. From classic haircuts to modern fades, he focuses on quality, consistency, and a welcoming customer experience.',
  portraitUrl: '/images/haircuts/kuya-toni-portrait.png',
  logoUrl: '/images/haircuts/logo.png',
  walkInNotice: 'Walk-ins welcome • Clean service • Local trusted barber',
};

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Trending Cuts', href: '#trending-cuts' },
  { name: 'Meet Barber', href: '#barber' },
  { name: 'Visit Us', href: '#visit-us' },
];

export const ABOUT_HIGHLIGHTS: HighlightFeature[] = [
  {
    title: 'Clean and precise cuts',
    description: 'Every hairline, taper, and blend is finished with steady hands and exacting attention to detail.',
  },
  {
    title: 'Friendly service',
    description: 'A genuine, respectful neighborhood atmosphere where every client feels right at home.',
  },
  {
    title: 'Trend-aware styles',
    description: 'Constantly updated with modern fades, crops, tapers, and classic gentleman aesthetics.',
  },
  {
    title: 'Comfortable barbershop experience',
    description: 'Clean sanitized chairs, premium hair products, relaxing vibes, and a hassle-free visit.',
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'classic-haircut',
    title: 'Classic Haircut',
    description: 'Timeless scissor and clipper cut tailored to your natural head shape and personal style.',
    duration: '30 mins',
    badge: 'Walk-in Ready',
  },
  {
    id: 'fade-cut',
    title: 'Fade Cut',
    description: 'Precision low, mid, or high skin fade seamlessly blended for an ultra-sharp finish.',
    duration: '40 mins',
    badge: 'Walk-in Ready',
  },
  {
    id: 'kids-haircut',
    title: 'Kids Haircut',
    description: 'Patient, gentle, and stylish cuts for young gentlemen in a fun and calm setting.',
    duration: '25 mins',
    badge: 'Walk-in Ready',
  },
  {
    id: 'beard-trim',
    title: 'Beard Trim',
    description: 'Sculpting, clean line-ups, cheek contouring, and hot towel finish for healthy facial hair.',
    duration: '20 mins',
    badge: 'Walk-in Ready',
  },
  {
    id: 'haircut-beard',
    title: 'Haircut + Beard',
    description: 'Full signature transformation pairing a custom haircut with complete beard shaping.',
    duration: '50 mins',
    badge: 'Walk-in Ready',
  },
  {
    id: 'basic-grooming',
    title: 'Basic Grooming',
    description: 'Neck cleanup, eyebrow tidy, refreshing hair wash, and light styling pomade finish.',
    duration: '20 mins',
    badge: 'Walk-in Ready',
  },
];

export const TRENDING_CUTS: TrendingCut[] = [
  {
    id: 'textured-crop',
    name: 'Textured Crop',
    tagline: 'Modern forward fringe with razor-sharp blunt finish',
    description: 'Choppy textured layers on top with a seamless skin fade along the temples and nape.',
    bestFor: 'Straight to slightly wavy hair, angular face shapes',
    maintenance: 'Low to Medium (Pomade/Matte Clay)',
    imageUrl: '/images/haircuts/textured-crop.png',
  },
  {
    id: 'low-taper-fade',
    name: 'Low Taper Fade',
    tagline: 'Subtle gradient drop around the sideburns and neckline',
    description: 'Preserves maximum natural fullness along the temple while delivering a clean gradient at the edges.',
    bestFor: 'All hair types, school/office gentleman wear',
    maintenance: 'Low maintenance, easy daily style',
    imageUrl: '/images/haircuts/low-taper-fade.png',
  },
  {
    id: 'mid-fade-quiff',
    name: 'Mid Fade Quiff',
    tagline: 'Voluminous upward sweep paired with mid skin transition',
    description: 'Combines dynamic crown height with clean, disciplined mid-level fading for a bold silhouette.',
    bestFor: 'Medium length hair, round or oval facial profiles',
    maintenance: 'Medium (Blow dry & styling cream)',
    imageUrl: '/images/haircuts/mid-fade-quiff.png',
  },
  {
    id: 'curly-top-fade',
    name: 'Curly Top Fade',
    tagline: 'Defined natural texture contrasted with sharp faded sides',
    description: 'Highlights natural ringlets or coiled texture on top while keeping the sides remarkably crisp.',
    bestFor: 'Naturally wavy, curly, or coily hair textures',
    maintenance: 'Moisturizing curl cream & diffuser',
    imageUrl: '/images/haircuts/curly-top-fade.png',
  },
  {
    id: 'slick-back-undercut',
    name: 'Slick Back Undercut',
    tagline: 'Classic refined gentleman finish with high-contrast edge',
    description: 'High disconnected undercut allowing longer crown hair to flow backwards with glossy authority.',
    bestFor: 'Straight and thick hair seeking a commanding presence',
    maintenance: 'High shine water-based pomade',
    imageUrl: '/images/haircuts/slick-back-undercut.png',
  },
  {
    id: 'buzz-cut',
    name: 'Buzz Cut',
    tagline: 'Minimalist military precision with sharp perimeter lineup',
    description: 'Uniform short clipper length on top paired with a smooth graduation down to the skin.',
    bestFor: 'Athletic lifestyle, sharp jawlines, effortless morning routine',
    maintenance: 'Zero daily styling required',
    imageUrl: '/images/haircuts/buzz-cut.png',
  },
];

export const BUSINESS_HOURS: BusinessHours[] = [
  { days: 'Monday – Saturday', hours: '9:00 AM – 8:00 PM' },
  { days: 'Sunday', hours: '10:00 AM – 6:00 PM' },
];
