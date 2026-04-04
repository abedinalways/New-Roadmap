
import T from "../styles/theme";
import { Lang } from "../types";

interface HomePageProps {
  lang: Lang;
  setPage: (id: string) => void;
}

const cards = [
  { id: "html",         icon: "🎨", en: "HTML & CSS",       bn: "HTML ও CSS",            level: "Foundation" },
  { id: "js",           icon: "💛", en: "JavaScript",       bn: "জাভাস্ক্রিপ্ট",         level: "Foundation" },
  { id: "react",        icon: "⚛️", en: "React",            bn: "রিঅ্যাক্ট",             level: "Core"       },
  { id: "nextjs",       icon: "▲",  en: "Next.js",          bn: "নেক্সট.জেএস",           level: "Core"       },
  { id: "typescript",   icon: "🔷", en: "TypeScript",       bn: "টাইপস্ক্রিপ্ট",         level: "Core"       },
  { id: "websocket",    icon: "🔌", en: "WebSocket",        bn: "ওয়েবসকেট",             level: "Advanced"   },
  { id: "gsap",         icon: "✨", en: "GSAP",             bn: "GSAP",                  level: "Advanced"   },
  { id: "performance",  icon: "🚀", en: "Performance",      bn: "পারফরম্যান্স",           level: "Advanced"   },
  { id: "testing",      icon: "🧪", en: "Testing",          bn: "টেস্টিং",               level: "Advanced"   },
  { id: "systemdesign", icon: "🏗️", en: "System Design",   bn: "সিস্টেম ডিজাইন",        level: "Senior"     },
  { id: "security",     icon: "🔒", en: "Web Security",     bn: "ওয়েব সিকিউরিটি",       level: "Senior"     },
  { id: "devops",       icon: "⚙️", en: "DevOps",          bn: "DevOps",                level: "Senior"     },
  { id: "interview",    icon: "🎯", en: "Interview Prep",   bn: "ইন্টারভিউ প্রস্তুতি",   level: "Senior"     },
];

const stats = [
  { n: "15",   label: "Topics / টপিক"   },
  { n: "3",    label: "Levels / লেভেল"  },
  { n: "2",    label: "Languages / ভাষা" },
  { n: "100+", label: "Code Examples"   },
];

export default function HomePage({ lang, setPage }: HomePageProps) {
  return (
    <div>
      <div style={{ textAlign: "center", padding: "30px 0 20px" }}>
        <div style={{ fontSize: 50 }}>👨‍💻</div>
        <h1 style={{ fontSize: 32, fontWeight: 900, color: T.text, marginTop: 10 }}>
          {lang !== "bn" && "Junior → Senior Frontend Developer"}
          {lang === "both" && <br />}
          {lang !== "en" && (
            <span style={{ color: T.accentL, fontSize: 26 }}>
              জুনিয়র থেকে সিনিয়র ফ্রন্টএন্ড ডেভেলপার
            </span>
          )}
        </h1>
        <p style={{ color: T.muted, marginTop: 10, fontSize: 15 }}>
          {lang !== "bn" && "A complete bilingual roadmap — React, Next.js, TypeScript, WebSocket, GSAP & more"}
          {lang !== "en" && (
            <span style={{ color: "#c9b8ff", fontStyle: "italic", display: "block" }}>
              সম্পূর্ণ বাংলা ও ইংরেজি গাইড — React, Next.js, TypeScript, WebSocket, GSAP এবং আরও অনেক কিছু
            </span>
          )}
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 28 }}>
        {stats.map((s, i) => (
          <div key={i} style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 12, padding: "18px 10px", textAlign: "center" }}>
            <div style={{ fontSize: 28, fontWeight: 900, color: T.accentL }}>{s.n}</div>
            <div style={{ color: T.muted, fontSize: 12, marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>

      <h2 style={{ color: T.text, marginBottom: 14, fontSize: 18 }}>📚 All Topics / সব টপিক</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 10 }}>
        {cards.map(c => (
          <div
            key={c.id}
            onClick={() => setPage(c.id)}
            onMouseEnter={e => (e.currentTarget.style.borderColor = T.accent)}
            onMouseLeave={e => (e.currentTarget.style.borderColor = T.border)}
            style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 12, padding: 16, cursor: "pointer", display: "flex", alignItems: "center", gap: 12, transition: "border-color 0.2s" }}
          >
            <span style={{ fontSize: 24 }}>{c.icon}</span>
            <div>
              {lang !== "bn" && <div style={{ color: T.text, fontWeight: 600, fontSize: 14 }}>{c.en}</div>}
              {lang !== "en" && <div style={{ color: T.accentL, fontSize: 13 }}>{c.bn}</div>}
              <span style={{ fontSize: 11, color: T.dim, background: T.border, borderRadius: 4, padding: "1px 6px", marginTop: 4, display: "inline-block" }}>{c.level}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

