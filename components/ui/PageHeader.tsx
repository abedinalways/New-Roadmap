import T from "@/app/styles/theme";
import { Lang } from "@/app/types";


interface PageHeaderProps {
  icon: string;
  en: string;
  bn: string;
  desc_en: string;
  desc_bn: string;
  lang: Lang;
}

export default function PageHeader({
  icon,
  en,
  bn,
  desc_en,
  desc_bn,
  lang,
}: PageHeaderProps) {
  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${T.accentGlow}, transparent)`,
        border: `1px solid ${T.border}`,
        borderRadius: 16,
        padding: 30,
        marginBottom: 24,
      }}
    >
      <div style={{ fontSize: 42, marginBottom: 10 }}>{icon}</div>
      {lang !== 'bn' && (
        <h1
          style={{
            fontSize: 30,
            fontWeight: 800,
            color: T.text,
            marginBottom: 6,
          }}
        >
          {en}
        </h1>
      )}
      {lang !== 'en' && (
        <h1
          style={{
            fontSize: 28,
            fontWeight: 800,
            color: T.accentL,
            marginBottom: 6,
          }}
        >
          {bn}
        </h1>
      )}
      {lang !== 'bn' && (
        <p style={{ color: T.muted, fontSize: 15 }}>{desc_en}</p>
      )}
      {lang !== 'en' && (
        <p style={{ color: '#c9b8ff', fontSize: 14, fontStyle: 'italic' }}>
          {desc_bn}
        </p>
      )}
    </div>
  );
}
