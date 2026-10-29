import type { ReactNode } from "react";

interface ReportShellProps {
  children: ReactNode;
}

export function ReportShell({ children }: ReportShellProps) {
  return (
    <div className="min-h-screen bg-warm-white text-dark-green">
      <a
        href="#report-content"
        className="fixed left-4 top-4 z-50 -translate-y-24 rounded-full bg-dark-green px-4 py-2 text-sm font-semibold text-warm-white shadow-lg transition-transform focus:translate-y-0"
      >
        Skip to report content
      </a>
      {children}
    </div>
  );
}
