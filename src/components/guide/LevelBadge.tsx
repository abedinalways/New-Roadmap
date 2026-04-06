

import { cn }    from "@/lib/utils";
import { Badge } from "../ui/Badge";

const LEVEL_CONFIG = {
  Basic:        { label: "🟢 Basic",        className: "border-green-500/40  bg-green-500/10  text-green-400"  },
  Intermediate: { label: "🟡 Intermediate", className: "border-yellow-500/40 bg-yellow-500/10 text-yellow-400" },
  Advanced:     { label: "🔴 Advanced",     className: "border-red-500/40    bg-red-500/10    text-red-400"    },
} as const;

type Level = keyof typeof LEVEL_CONFIG;

export function LevelBadge({ level }: { level: Level }) {
  const cfg = LEVEL_CONFIG[level];
  return (
    <Badge variant="outline" className={cn("text-xs font-semibold", cfg.className)}>
      {cfg.label}
    </Badge>)
};