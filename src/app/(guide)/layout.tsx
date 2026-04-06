"use client";
import { GuideShell } from "@/components/layout/GuideShell";
import { useState } from "react";
import { Lang } from "../types";


export default function GuideLayout({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("both");
  return (
    <GuideShell lang={lang} setLang={setLang}>
      {children}
    </GuideShell>
  );
}