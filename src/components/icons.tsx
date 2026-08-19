import type { SVGProps } from "react";

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg className="ico-wa" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2zm5.82 14.12c-.25.7-1.45 1.33-2 1.38-.51.05-1.15.24-3.88-.81-3.27-1.29-5.38-4.62-5.54-4.83-.16-.22-1.33-1.77-1.33-3.38 0-1.61.84-2.4 1.14-2.73.3-.33.65-.41.87-.41h.62c.2 0 .47-.08.73.56.27.65.91 2.24.99 2.4.08.16.13.35.03.57-.65 1.3-1.34 1.25-.99 1.85.86 1.48 1.72 2 3.03 2.65.22.11.35.09.48-.05.13-.15.55-.64.7-.86.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.42.26.06.1.06.55-.19 1.25z" />
    </svg>
  );
}

export function SunRays({ className = "sunrays" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" aria-hidden="true">
      <g fill="none" stroke="#FFB520" strokeWidth="2.2">
        <circle cx="100" cy="100" r="34" />
        <g strokeLinecap="round">
          <line x1="100" y1="34" x2="100" y2="14" />
          <line x1="100" y1="186" x2="100" y2="166" />
          <line x1="34" y1="100" x2="14" y2="100" />
          <line x1="186" y1="100" x2="166" y2="100" />
          <line x1="147" y1="53" x2="161" y2="39" />
          <line x1="53" y1="147" x2="39" y2="161" />
          <line x1="147" y1="147" x2="161" y2="161" />
          <line x1="53" y1="53" x2="39" y2="39" />
        </g>
      </g>
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FFB520"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

const strokeProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export const iconesDiferencial = {
  reserva: (
    <svg {...strokeProps} aria-hidden="true">
      <path d="M17 2l4 4-4 4" />
      <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
      <path d="M7 22l-4-4 4-4" />
      <path d="M21 13v1a4 4 0 0 1-4 4H3" />
    </svg>
  ),
  escudo: (
    <svg {...strokeProps} aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  pin: (
    <svg {...strokeProps} aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
} as const;

export type IconeDiferencial = keyof typeof iconesDiferencial;
