
"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button }   from "@/components/ui/button";
import { Menu }     from "lucide-react";
import { Sidebar }  from "./Sidebar";

export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-60 p-0 bg-card border-border">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}