import { Lang } from "../../app/types/index";

interface PageHeaderProps {
  icon: string;
  en: string;
  bn: string;
  desc_en: string;
  desc_bn: string;
  lang: Lang;
}

export function PageHeader({ icon, en, bn, desc_en, desc_bn, lang }: PageHeaderProps) {
  return (
    <div className="mb-6 rounded-xl border border-border bg-gradient-to-br from-violet-600/10 to-transparent p-7">
      <div className="mb-3 text-4xl">{icon}</div>
      {lang !== "bn" && (
        <h1 className="text-2xl font-extrabold text-foreground">{en}</h1>
      )}
      {lang !== "en" && (
        <h1 className="text-xl font-extrabold text-violet-400">{bn}</h1>
      )}
      {lang !== "bn" && (
        <p className="mt-2 text-sm text-muted-foreground">{desc_en}</p>
      )}
      {lang !== "en" && (
        <p className="mt-1 text-sm italic text-violet-300">{desc_bn}</p>
      )}
    </div>
  );
}