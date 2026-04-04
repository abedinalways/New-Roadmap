import T from "@/app/styles/theme";
import { InterviewQuestion } from "@/app/types";


interface InterviewQAProps {
  qs: InterviewQuestion[];
}

export default function InterviewQA({ qs }: InterviewQAProps) {
  return (
    <div
      style={{
        background: T.card,
        border: `1px solid ${T.yellow}44`,
        borderRadius: 12,
        padding: 22,
        marginTop: 10,
      }}
    >
      <h3 style={{ color: T.yellow, marginBottom: 14, fontSize: 16 }}>
        🎯 Interview Questions / ইন্টারভিউ প্রশ্ন
      </h3>
      {qs.map((q, i) => (
        <div
          key={i}
          style={{
            marginBottom: 12,
            paddingLeft: 12,
            borderLeft: `3px solid ${T.yellow}`,
          }}
        >
          <p
            style={{
              color: T.text,
              fontWeight: 600,
              marginBottom: 4,
              fontSize: 14,
            }}
          >
            Q{i + 1}: {q.q}
          </p>
          <p style={{ color: T.muted, fontSize: 13 }}>→ {q.a}</p>
        </div>
      ))}
    </div>
  );
}
