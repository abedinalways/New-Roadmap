'use client';
import { Lang } from '@/app/types';
import { Sidebar } from './Sidebar';
import { Header } from './header';


interface GuideShellProps {
  lang: Lang;
  setLang: (l: Lang) => void;
  children: React.ReactNode;
}

export function GuideShell({ lang, setLang, children }: GuideShellProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-60 shrink-0 flex-col border-r border-border bg-card">
        <Sidebar />
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header lang={lang} setLang={setLang} />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="mx-auto max-w-3xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
