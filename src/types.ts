export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price?: string;
  duration?: string;
  badge?: string;
}

export interface TrendingCut {
  id: string;
  name: string;
  tagline: string;
  description: string;
  bestFor: string;
  imageUrl: string;
  maintenance: string;
}

export interface HighlightFeature {
  title: string;
  description: string;
}

export interface BusinessHours {
  days: string;
  hours: string;
}
