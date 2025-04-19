
import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="font-bold text-2xl bg-aqua-600 text-white px-2 py-1 rounded">
        AQC
      </div>
      <span className="font-semibold text-xl hidden sm:inline text-aqua-700">
        AquaCommerce
      </span>
    </div>
  );
}
