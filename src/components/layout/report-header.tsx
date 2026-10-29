import { CalendarDays, School } from "lucide-react";

interface ReportHeaderProps {
  client: string;
  periodDateTime: string;
  periodLabel: string;
  title: string;
}

export function ReportHeader({
  client,
  periodDateTime,
  periodLabel,
  title,
}: ReportHeaderProps) {
  return (
    <header className="bg-dark-green text-warm-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-end lg:px-12 lg:py-20">
        <div className="max-w-3xl">
          <p className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-report-orange">
            <School aria-hidden="true" className="size-4" strokeWidth={1.8} />
            {client}
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </div>
        <p className="flex w-fit items-center gap-2 rounded-full border border-warm-white/20 bg-warm-white/5 px-4 py-2 text-sm font-medium">
          <CalendarDays
            aria-hidden="true"
            className="size-4 text-report-orange"
          />
          <time dateTime={periodDateTime}>{periodLabel}</time>
        </p>
      </div>
    </header>
  );
}
