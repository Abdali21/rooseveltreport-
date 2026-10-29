import { Check } from "lucide-react";

import type {
  MonthlyOverviewContent,
  ReportListGroup,
  ReportSectionId,
} from "@/data/report";
import { SectionIntro } from "@/components/report/section-intro";

interface MonthlyOverviewProps {
  content: MonthlyOverviewContent;
  id: ReportSectionId;
  title: string;
}

interface OverviewGroupProps {
  group: ReportListGroup;
}

function OverviewGroup({ group }: OverviewGroupProps) {
  const isOngoing = group.status === "ongoing";

  return (
    <section
      aria-labelledby={`monthly-overview-${group.title.toLowerCase().replaceAll(" ", "-")}`}
      className={`min-w-0 rounded-2xl border p-5 shadow-[0_12px_30px_rgba(24,59,52,0.035)] sm:p-6 ${
        isOngoing
          ? "border-report-orange/30 bg-white/[0.85]"
          : "border-dark-green/10 bg-white/75"
      }`}
    >
      <h4
        id={`monthly-overview-${group.title.toLowerCase().replaceAll(" ", "-")}`}
        className={`text-lg font-semibold leading-snug tracking-[-0.015em] ${
          isOngoing ? "text-report-orange" : "text-dark-green"
        }`}
      >
        {group.title}
      </h4>
      <ul className="mt-5 space-y-3 text-base leading-7 text-dark-green/75">
        {group.items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="mt-1.5 inline-flex size-[1.125rem] shrink-0 items-center justify-center rounded-full bg-dark-green/8 text-dark-green"
            >
              <Check className="size-3" strokeWidth={2.2} />
            </span>
            <span className="min-w-0 break-words">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function MonthlyOverview({
  content,
  id,
  title,
}: MonthlyOverviewProps) {
  const headingId = `${id}-title`;

  return (
    <section
      id={id}
      tabIndex={-1}
      aria-labelledby={headingId}
      className="report-anchor overflow-x-clip border-b border-dark-green/10 bg-[#edf3ef]"
    >
      <div className="report-container report-section-space">
        <SectionIntro id={headingId} number="01" title={title} />

        <div className="mt-12 sm:mt-14 lg:mt-16">
          <h3 className="text-balance text-2xl font-semibold leading-tight tracking-[-0.025em] text-dark-green sm:text-3xl">
            {content.website.heading}
          </h3>
          <div className="mt-8 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
            {content.website.groups.map((group) => (
              <OverviewGroup key={group.title} group={group} />
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-dark-green/15 pt-12 sm:mt-20 sm:pt-14 lg:mt-24 lg:pt-16">
          <h3 className="text-balance text-2xl font-semibold leading-tight tracking-[-0.025em] text-dark-green sm:text-3xl">
            {content.google.heading}
          </h3>
          <div className="mt-8 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
            {content.google.groups.map((group) => (
              <OverviewGroup key={group.title} group={group} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
