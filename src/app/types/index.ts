
export type Lang = "both" | "en" | "bn";

export interface NavItem {
  id: string;
  href: string;
  icon: string;
  en: string;
  bn: string;
}

export interface NavGroup {
  cat: string;
  items: NavItem[];
}

export interface SectionData {
  level: "Basic" | "Intermediate" | "Advanced";
  titleEn: string;
  titleBn: string;
  en: string;
  bn: string;
  code?: string;
}

export interface InterviewQuestion {
  q: string;
  a: string;
}