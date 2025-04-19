
import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <div className="font-bold text-2xl bg-aqua-600 text-white px-2 py-1 rounded">
        TX
      </div>
    </div>
  );
}
