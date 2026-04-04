import T from "@/app/styles/theme";


interface CodeBlockProps {
  code: string;
}

export default function CodeBlock({ code }: CodeBlockProps) {
  return (
    <pre
      style={{
        background: T.code,
        border: `1px solid ${T.border}`,
        borderRadius: 8,
        padding: 16,
        overflowX: "auto",
        fontSize: 13,
        color: "#e6edf3",
        lineHeight: 1.7,
        marginTop: 10,
        marginBottom: 4,
      }}
    >
      <code>{code.trim()}</code>
    </pre>
  );
}