// Every page follows this exact same pattern.
// Just copy this file, rename it, and replace sections[] and qs[].


import { PageProps, SectionProps, InterviewQuestion } from '../types';
import T from '../styles/theme';
import { InterviewQA, PageHeader, Section } from '@/components/ui';

const sections: Omit<SectionProps, 'lang'>[] = [
  {
    level: 'Basic',
    titleEn: 'Semantic HTML5',
    titleBn: 'সেমান্টিক HTML5',
    en: 'Use meaningful tags: <header>, <nav>, <main>, <section>, <article>, <aside>, <footer>. Semantic HTML improves SEO, accessibility (screen readers), and code readability.',
    bn: 'অর্থপূর্ণ ট্যাগ ব্যবহার করুন। সেমান্টিক HTML SEO, অ্যাক্সেসিবিলিটি এবং কোড পঠনযোগ্যতা উন্নত করে।',
    code: `<header>
  <nav aria-label="Main navigation">
    <ul><li><a href="/">Home</a></li></ul>
  </nav>
</header>
<main>
  <article>
    <h1>Post Title</h1>
    <p>Content here...</p>
  </article>
  <aside>Related links</aside>
</main>
<footer>© 2025</footer>`,
  },
  {
    level: 'Basic',
    titleEn: 'CSS Flexbox & Grid',
    titleBn: 'CSS ফ্লেক্সবক্স ও গ্রিড',
    en: 'Flexbox is one-dimensional (row or column). Grid is two-dimensional (rows AND columns).',
    bn: 'Flexbox একমাত্রিক (row বা column)। Grid দ্বিমাত্রিক (row এবং column উভয়)।',
    code: `.navbar { display: flex; justify-content: space-between; align-items: center; }
.layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-areas: "sidebar main";
  height: 100vh;
}`,
  },
  // Add more sections here...
];

const qs: InterviewQuestion[] = [
  {
    q: 'What is the difference between em, rem, vh, vw?',
    a: 'em is relative to parent font-size, rem to root font-size, vh/vw to viewport dimensions.',
  },
  {
    q: 'Explain the CSS Box Model.',
    a: 'Every element = content + padding + border + margin. box-sizing: border-box is recommended.',
  },
  // Add more questions here...
];

export default function HtmlCssPage({ lang }: PageProps) {
  return (
    <div>
      <PageHeader
        icon="🎨"
        en="HTML & CSS — Complete Guide"
        bn="HTML ও CSS — সম্পূর্ণ গাইড"
        desc_en="From semantic markup to advanced CSS architecture."
        desc_bn="সেমান্টিক মার্কআপ থেকে অ্যাডভান্সড CSS আর্কিটেকচার পর্যন্ত।"
        lang={lang}
      />
      {sections.map((s, i) => (
        <Section key={i} {...s} lang={lang} />
      ))}
      <InterviewQA qs={qs} />
    </div>
  );
}
