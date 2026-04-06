"use client";
import Link           from "next/link";
import { usePathname } from "next/navigation";
import { ScrollArea }  from "@/components/ui/scroll-area";
import { cn }          from "@/lib/utils";
import { NAV_GROUPS } from "@/app/constants/navGroups";


export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="border-b border-border px-4 py-4">
        <p className="text-sm font-extrabold tracking-widest text-violet-400">
          👨‍💻 SENIOR FRONTEND
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Complete Guide • বাংলা + English
        </p>
      </div>

      {/* Nav */}
      <ScrollArea className="flex-1 px-2 py-2">
        {NAV_GROUPS.map((group) => (
          <div key={group.cat} className="mb-2">
            <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              {group.cat}
            </p>
            {group.items.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
                    active
                      ? "bg-violet-600/20 text-violet-400 font-semibold border-l-2 border-violet-500"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <span>{item.icon}</span>
                  <span>{item.en}</span>
                </Link>
              );
            })}
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}
