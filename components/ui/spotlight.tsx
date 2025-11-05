import React from "react";
import { cn } from "@/lib/utils";

export type SpotlightProps = {
  className?: string;
  fill?: string;
};

export function Spotlight({ className, fill }: SpotlightProps) {
  return (
    <svg
      className={cn(
        "pointer-events-none absolute z-1 h-[169%] w-[138%] lg:w-[84%] opacity-80",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "red"}
          fillOpacity="0.21"
        />
      </g>
    </svg>
  );
}
