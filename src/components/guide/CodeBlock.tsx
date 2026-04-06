export function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="mt-3 overflow-x-auto rounded-lg border border-border bg-[#161b22] p-4 text-[13px] leading-relaxed text-foreground">
      <code>{code.trim()}</code>
    </pre>
  );
}