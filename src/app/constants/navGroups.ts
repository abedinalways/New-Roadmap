import { NavGroup } from "../types";

export const NAV_GROUPS: NavGroup[] = [
  {
    cat: "🚀 Get Started / শুরু",
    items: [
      { id: "home",    href: "/home",    icon: "🏠",  en: "Home",    bn: "হোম" },
      { id: "roadmap", href: "/roadmap", icon: "🗺️", en: "Roadmap", bn: "রোডম্যাপ" },
    ],
  },
  {
    cat: "📌 Foundation / ভিত্তি",
    items: [
      { id: "html", href: "/html",       icon: "🎨", en: "HTML & CSS",  bn: "HTML ও CSS" },
      { id: "js",   href: "/javascript", icon: "💛", en: "JavaScript",  bn: "জাভাস্ক্রিপ্ট" },
    ],
  },
  {
    cat: "⚛️ Core Skills / মূল দক্ষতা",
    items: [
      { id: "react",      href: "/react",      icon: "⚛️", en: "React",      bn: "রিঅ্যাক্ট" },
      { id: "nextjs",     href: "/nextjs",     icon: "▲",  en: "Next.js",    bn: "নেক্সট.জেএস" },
      { id: "typescript", href: "/typescript", icon: "🔷", en: "TypeScript", bn: "টাইপস্ক্রিপ্ট" },
    ],
  },
  {
    cat: "🔥 Advanced / অ্যাডভান্সড",
    items: [
      { id: "websocket",   href: "/websocket",   icon: "🔌", en: "WebSocket",        bn: "ওয়েবসকেট" },
      { id: "gsap",        href: "/gsap",        icon: "✨", en: "GSAP & Animation", bn: "GSAP ও অ্যানিমেশন" },
      { id: "performance", href: "/performance", icon: "🚀", en: "Performance",      bn: "পারফরম্যান্স" },
      { id: "testing",     href: "/testing",     icon: "🧪", en: "Testing",          bn: "টেস্টিং" },
    ],
  },
  {
    cat: "👑 Senior Level / সিনিয়র",
    items: [
      { id: "systemdesign", href: "/system-design", icon: "🏗️", en: "System Design",       bn: "সিস্টেম ডিজাইন" },
      { id: "security",     href: "/security",      icon: "🔒", en: "Web Security",         bn: "ওয়েব সিকিউরিটি" },
      { id: "devops",       href: "/devops",        icon: "⚙️", en: "DevOps & Build Tools", bn: "DevOps ও বিল্ড টুলস" },
      { id: "interview",    href: "/interview",     icon: "🎯", en: "Interview Prep",       bn: "ইন্টারভিউ প্রস্তুতি" },
    ],
  },
];

export const ALL_NAV_ITEMS = NAV_GROUPS.flatMap((g) => g.items);