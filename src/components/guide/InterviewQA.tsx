import { InterviewQuestion } from "@/app/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export function InterviewQA({ qs }: { qs: InterviewQuestion[] }) {
  return (
    <Card className="mt-4 border-yellow-500/30 bg-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-base text-yellow-400">
          🎯 Interview Questions / ইন্টারভিউ প্রশ্ন
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {qs.map((q, i) => (
          <div key={i} className="border-l-2 border-yellow-500 pl-3">
            <p className="text-sm font-semibold text-foreground">
              Q{i + 1}: {q.q}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">→ {q.a}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}