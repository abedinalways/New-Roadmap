"use client";
import { useLang } from "@/src/app/hooks/useLang";
import { InterviewQuestion, SectionData } from "@/src/app/types";
import { PageHeader, TopicSection } from "@/src/components/guide";
import { InterviewQA } from "@/src/components/ui";
import { useContext }    from "react";
// NOTE: lang comes from (guide)/layout.tsx via Context
// Simplest approach: use a LangContext
   // (see below)




const sections: SectionData[] = [
  {
    level: "Basic", titleEn: "Semantic HTML5", titleBn: "সেমান্টিক HTML5",
    en: "Use meaningful tags: <header>, <nav>, <main>, <article>, <footer>. Semantic HTML improves SEO, accessibility, and code readability.",
    bn: "অর্থপূর্ণ ট্যাগ ব্যবহার করুন। সেমান্টিক HTML SEO, অ্যাক্সেসিবিলিটি এবং কোড পঠনযোগ্যতা উন্নত করে।",
    code: `<header>
  <nav aria-label="Main navigation">
    <ul><li><a href="/">Home</a></li></ul>
  </nav>
</header>
<main>
  <article><h1>Title</h1><p>Content</p></article>
  <aside>Related</aside>
</main>
<footer>© 2025</footer>`,
  },
  {
    level: "Basic", titleEn: "CSS Flexbox & Grid", titleBn: "CSS ফ্লেক্সবক্স ও গ্রিড",
    en: "Flexbox = 1D (row/column). Grid = 2D (rows AND columns). Use Flexbox for navbars and card rows; Grid for full-page layouts.",
    bn: "Flexbox একমাত্রিক, Grid দ্বিমাত্রিক। Navbar এ Flexbox, পেজ লেআউটে Grid ব্যবহার করুন।",
    code: `.navbar { display: flex; justify-content: space-between; align-items: center; }
.layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-areas: "sidebar main";
  height: 100vh;
}`,
  },
  {
    level: "Advanced", titleEn: "CSS Architecture — BEM", titleBn: "CSS আর্কিটেকচার — BEM",
    en: "BEM (Block__Element--Modifier) prevents specificity wars and makes CSS scalable. In React projects prefer CSS Modules or Tailwind utility classes.",
    bn: "BEM specificity সমস্যা রোধ করে এবং CSS scalable করে। React এ CSS Modules বা Tailwind ব্যবহার করুন।",
    code: `.card { }              /* Block */
.card__title { }       /* Element */
.card--featured { }    /* Modifier */
h1 { font-size: clamp(1.5rem, 4vw, 3rem); }`,
  },
];

const qs: InterviewQuestion[] = [
  { q: "em vs rem vs vh vs vw?",            a: "em → parent, rem → root, vh/vw → viewport. Use rem for typography, vh/vw for viewport layouts." },
  { q: "Explain the CSS Box Model.",         a: "content + padding + border + margin. box-sizing: border-box includes padding & border in width." },
  { q: "Flexbox vs Grid?",                  a: "Flexbox = 1D component layouts. Grid = 2D page layouts. Both can be combined." },
];

export default function HtmlPage() {
  const lang = useLang(); // get lang from context
  return (
    <div>
      <PageHeader icon="🎨" en="HTML & CSS — Complete Guide" bn="HTML ও CSS — সম্পূর্ণ গাইড"
        desc_en="From semantic markup to advanced CSS architecture."
        desc_bn="সেমান্টিক মার্কআপ থেকে অ্যাডভান্সড CSS আর্কিটেকচার।"
        lang={lang} />
      {sections.map((s, i) => <TopicSection key={i} {...s} lang={lang} />)}
      <InterviewQA qs={qs} />
    </div>
  );
}
