import T from "@/app/styles/theme";
import { Badge } from "./Badge";
import CodeBlock from "./CodeBlock";
import { SectionProps } from "@/app/types";


export default function Section({
  level,
  titleEn,
  titleBn,
  en,
  bn,
  code,
  lang,
}: SectionProps) {
  return (
    <div
      style={{
        background: T.card,
        border: `1px solid ${T.border}`,
        borderRadius: 12,
        padding: 22,
        marginBottom: 18,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          marginBottom: 12,
        }}
      >
        <Badge>{level}</Badge>
        {lang !== 'bn' && (
          <span style={{ fontWeight: 700, fontSize: 17, color: T.text }}>
            {titleEn}
          </span>
        )}
        {lang === 'both' && <span style={{ color: T.dim }}>|</span>}
        {lang !== 'en' && (
          <span style={{ fontWeight: 700, fontSize: 17, color: T.accentL }}>
            {titleBn}
          </span>
        )}
      </div>
      {lang !== 'bn' && (
        <p
          style={{
            color: T.muted,
            lineHeight: 1.8,
            marginBottom: 8,
            fontSize: 14,
          }}
        >
          {en}
        </p>
      )}
      {lang !== 'en' && (
        <p
          style={{
            color: '#c9b8ff',
            lineHeight: 1.8,
            marginBottom: 8,
            fontSize: 14,
            fontStyle: 'italic',
          }}
        >
          {bn}
        </p>
      )}
      {code && <CodeBlock code={code} />}
    </div>
  );
}
