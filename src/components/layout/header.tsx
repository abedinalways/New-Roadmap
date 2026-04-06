'use client';
import { usePathname } from 'next/navigation';
import { MobileSidebar } from './MobileSidebar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import { Lang } from '../../app/types/index';
import { cn } from '@/lib/utils';
import { ALL_NAV_ITEMS } from '@/app/constants/navGroups';

const LANG_OPTIONS: { value: Lang; label: string }[] = [
  { value: 'both', label: 'EN+বাংলা' },
  { value: 'en', label: 'English' },
  { value: 'bn', label: 'বাংলা' },
];

interface HeaderProps {
  lang: Lang;
  setLang: (l: Lang) => void;
}

export function Header({ lang, setLang }: HeaderProps) {
  const pathname = usePathname();
  const curItem = ALL_NAV_ITEMS.find(i => i.href === pathname);

  return (
    <header className="flex h-13 shrink-0 items-center gap-3 border-b border-border bg-card px-4">
      <MobileSidebar />

      {/* Breadcrumb */}
      <div className="flex flex-1 items-center gap-2 text-sm">
        {curItem && <span>{curItem.icon}</span>}
        {curItem && (
          <span className="font-semibold text-foreground">{curItem.en}</span>
        )}
        {curItem && lang !== 'en' && (
          <span className="text-muted-foreground text-xs">/ {curItem.bn}</span>
        )}
      </div>

      <Separator orientation="vertical" className="h-5" />

      {/* Language toggle */}
      <div className="flex items-center gap-1 rounded-lg bg-muted p-1">
        {LANG_OPTIONS.map(opt => (
          <button
            key={opt.value}
            onClick={() => setLang(opt.value)}
            className={cn(
              'rounded-md px-3 py-1 text-xs font-semibold transition-colors',
              lang === opt.value
                ? 'bg-violet-600 text-white'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </header>
  );
}
