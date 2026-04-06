import { Card, CardContent } from "@/components/ui/card";
import { LevelBadge }        from "./LevelBadge";
import { CodeBlock }         from "./CodeBlock";
import { Lang, SectionData } from "@/app/types";


interface TopicSectionProps extends SectionData {
  lang: Lang;
}

export function TopicSection({ level, titleEn, titleBn, en, bn, code, lang }: TopicSectionProps) {
  return (
    <Card className="mb-4 border-border bg-card">
      <CardContent className="p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <LevelBadge level={level} />
          {lang !== "bn" && (
            <span className="font-bold text-foreground">{titleEn}</span>
          )}
          {lang === "both" && <span className="text-muted-foreground">|</span>}
          {lang !== "en" && (
            <span className="font-bold text-violet-400">{titleBn}</span>
          )}
        </div>
        {lang !== "bn" && (
          <p className="text-sm leading-relaxed text-muted-foreground">{en}</p>
        )}
        {lang !== "en" && (
          <p className="mt-1 text-sm italic leading-relaxed text-violet-300">{bn}</p>
        )}
        {code && <CodeBlock code={code} />}
      </CardContent>
    </Card>
  );
}