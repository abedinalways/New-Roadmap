export type Lang = 'both' | 'en' | 'bn';

export interface NavItem {
  id: string;
  icon: string;
  en: string;
  bn: string;
}

export interface NavGroup {
  cat: string;
  items: NavItem[];
}

export interface SectionProps {
  level: 'Basic' | 'Intermediate' | 'Advanced';
  titleEn: string;
  titleBn: string;
  en: string;
  bn: string;
  code?: string;
  lang: Lang;
}

export interface InterviewQuestion {
  q: string;
  a: string;
}

export interface PageProps {
  lang: Lang;
}
