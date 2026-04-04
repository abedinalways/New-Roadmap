import T from "@/app/styles/theme";
import { Lang, NavItem } from "@/app/types";


interface HeaderProps {
  curItem: NavItem | undefined;
  lang: Lang;
  setLang: (l: Lang) => void;
  onToggleSidebar: () => void;
}

const LANG_OPTIONS: [Lang, string][] = [
  ['both', 'EN+বাংলা'],
  ['en', 'English'],
  ['bn', 'বাংলা'],
];

export default function Header({
  curItem,
  lang,
  setLang,
  onToggleSidebar,
}: HeaderProps) {
  return (
    <div
      style={{
        height: 52,
        background: T.sidebar,
        borderBottom: `1px solid ${T.border}`,
        display: 'flex',
        alignItems: 'center',
        padding: '0 16px',
        gap: 12,
        flexShrink: 0,
      }}
    >
      {/* Sidebar toggle */}
      <button
        onClick={onToggleSidebar}
        style={{
          background: 'none',
          border: 'none',
          color: T.muted,
          cursor: 'pointer',
          fontSize: 18,
          padding: 4,
        }}
      >
        ☰
      </button>

      {/* Breadcrumb */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 6 }}>
        {curItem && <span style={{ fontSize: 14 }}>{curItem.icon}</span>}
        {curItem && (
          <span style={{ color: T.text, fontSize: 14, fontWeight: 600 }}>
            {curItem.en}
          </span>
        )}
        {curItem && lang !== 'en' && (
          <span style={{ color: T.dim, fontSize: 12 }}>/ {curItem.bn}</span>
        )}
      </div>

      {/* Language toggle */}
      <div
        style={{
          display: 'flex',
          gap: 4,
          background: T.card,
          borderRadius: 8,
          padding: 3,
        }}
      >
        {LANG_OPTIONS.map(([v, label]) => (
          <button
            key={v}
            onClick={() => setLang(v)}
            style={{
              padding: '4px 10px',
              borderRadius: 6,
              border: 'none',
              cursor: 'pointer',
              fontSize: 11,
              fontWeight: 600,
              background: lang === v ? T.accent : 'transparent',
              color: lang === v ? '#fff' : T.muted,
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
