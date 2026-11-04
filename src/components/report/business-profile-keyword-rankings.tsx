import {
  Globe2,
  MapPin,
  Monitor,
  Ruler,
  Search,
} from "lucide-react";

import type {
  BusinessProfileCompetitionStat,
  BusinessProfileKeywordRankingsContent,
  BusinessProfileKeywordRecord,
  BusinessProfileKeywordSchool,
  KeywordRankingChange,
  KeywordRankingPosition,
} from "@/data/report";

interface BusinessProfileKeywordRankingsProps {
  content: BusinessProfileKeywordRankingsContent;
}

const changeLabels: Record<KeywordRankingChange, string> = {
  declined: "Declined",
  improved: "Improved",
  started: "Started ranking",
};

function formatPosition(position: KeywordRankingPosition) {
  if (!position.ranked) {
    return "Not ranked";
  }

  return `Page ${position.page} · Position ${position.position}`;
}

function StatusBadge({
  change,
  label,
}: {
  change: KeywordRankingChange;
  label?: string;
}) {
  const className = {
    declined: "border-amber-300 bg-amber-50 text-amber-800",
    improved: "border-dark-green/20 bg-dark-green/8 text-dark-green",
    started: "border-blue-200 bg-blue-50 text-blue-800",
  }[change];

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${className}`}
    >
      {label ?? changeLabels[change]}
    </span>
  );
}

function PositionValue({
  emphasize = false,
  position,
}: {
  emphasize?: boolean;
  position: KeywordRankingPosition;
}) {
  const value = formatPosition(position);

  if (emphasize) {
    return (
      <span className="inline-flex rounded-full bg-dark-green px-2.5 py-1 font-semibold text-warm-white shadow-[0_4px_10px_rgba(24,59,52,0.15)]">
        {value}
      </span>
    );
  }

  return value;
}

function CompetitionStatCard({
  stat,
}: {
  stat: BusinessProfileCompetitionStat;
}) {
  return (
    <aside
      aria-label={stat.heading}
      className="grid gap-6 rounded-[2rem] bg-dark-green p-6 shadow-[0_18px_40px_rgba(24,59,52,0.18)] sm:grid-cols-[13rem_minmax(0,1fr)] sm:items-center sm:gap-8 sm:p-8 lg:p-10 xl:grid-cols-[17rem_minmax(0,1fr)] xl:gap-10"
    >
      <p className="whitespace-nowrap text-6xl font-semibold leading-none tracking-[-0.06em] text-report-orange sm:text-7xl xl:text-8xl">
        {stat.value}
      </p>
      <div className="min-w-0">
        <h4 className="text-xl font-semibold leading-snug tracking-[-0.02em] text-white sm:text-2xl">
          {stat.heading}
        </h4>
      </div>
    </aside>
  );
}

const methodologyItems = [
  {
    Icon: Search,
    label: "Source",
    value: "Manual Google Business Profile ranking checks",
  },
  { Icon: MapPin, label: "Location", value: "Kawacim" },
  { Icon: Monitor, label: "Device", value: "Desktop" },
  { Icon: Globe2, label: "Browser", value: "Chrome Incognito" },
  {
    Icon: Ruler,
    label: "Measurement",
    value: "Positions reflect the recorded checks on each date",
  },
] as const;

function RankingMethodology() {
  return (
    <dl className="grid gap-x-6 gap-y-4 rounded-2xl border border-dark-green/10 bg-white/65 p-4 text-sm sm:p-5 md:grid-cols-2">
      {methodologyItems.map(({ Icon, label, value }) => (
        <div className="flex min-w-0 gap-3" key={label}>
          <Icon
            aria-hidden="true"
            className="mt-0.5 size-4 shrink-0 text-report-orange"
            strokeWidth={1.8}
          />
          <div className="min-w-0 leading-5">
            <dt className="font-semibold text-dark-green">{label}</dt>
            <dd className="text-dark-green/65">{value}</dd>
          </div>
        </div>
      ))}
    </dl>
  );
}

function DesktopTable({
  baselineDate,
  currentDate,
  emphasizeCurrentResults,
  highlightCurrentPositions,
  records,
}: {
  baselineDate: string;
  currentDate: string;
  emphasizeCurrentResults: boolean;
  highlightCurrentPositions?: readonly number[];
  records: readonly BusinessProfileKeywordRecord[];
}) {
  return (
    <div className="hidden overflow-hidden rounded-2xl border border-dark-green/12 bg-white md:block">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-dark-green text-warm-white">
          <tr>
            <th className="px-5 py-4 font-semibold">Keyword</th>
            <th className="px-5 py-4 font-semibold">{baselineDate}</th>
            <th
              className={`px-5 py-4 font-semibold ${
                emphasizeCurrentResults ? "bg-report-orange/25" : ""
              }`}
            >
              {currentDate}
            </th>
            <th className="px-5 py-4 font-semibold">Change</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr
              key={record.keyword}
              className="border-t border-dark-green/10 first:border-t-0"
            >
              <th className="px-5 py-4 font-semibold text-dark-green">
                {record.keyword}
              </th>
              <td className="px-5 py-4 text-dark-green/70">
                {formatPosition(record.before)}
              </td>
              <td
                className={`px-5 py-4 font-medium text-dark-green ${
                  emphasizeCurrentResults
                    ? "bg-dark-green/[0.045] font-semibold"
                    : ""
                }`}
              >
                <PositionValue
                  emphasize={
                    record.after.ranked &&
                    (highlightCurrentPositions
                      ? highlightCurrentPositions.includes(
                          record.after.position,
                        )
                      : emphasizeCurrentResults && record.after.page === 1)
                  }
                  position={record.after}
                />
              </td>
              <td className="px-5 py-4">
                <StatusBadge
                  change={record.change}
                  label={record.changeLabel}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MobileCards({
  baselineDate,
  currentDate,
  emphasizeCurrentResults,
  highlightCurrentPositions,
  records,
}: {
  baselineDate: string;
  currentDate: string;
  emphasizeCurrentResults: boolean;
  highlightCurrentPositions?: readonly number[];
  records: readonly BusinessProfileKeywordRecord[];
}) {
  return (
    <div className="grid gap-4 md:hidden">
      {records.map((record) => (
        <article
          key={record.keyword}
          className="rounded-2xl border border-dark-green/12 bg-white p-5"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h5 className="max-w-[18rem] font-semibold text-dark-green">
              {record.keyword}
            </h5>
            <StatusBadge
              change={record.change}
              label={record.changeLabel}
            />
          </div>
          <dl className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-dark-green/45">
                Before · {baselineDate}
              </dt>
              <dd className="mt-1.5 text-sm font-medium text-dark-green/70">
                {formatPosition(record.before)}
              </dd>
            </div>
            <div
              className={
                emphasizeCurrentResults
                  ? "border-l-2 border-report-orange/50 pl-3"
                  : undefined
              }
            >
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-report-orange">
                After · {currentDate}
              </dt>
              <dd className="mt-1.5 text-sm font-semibold text-dark-green">
                <PositionValue
                  emphasize={
                    record.after.ranked &&
                    (highlightCurrentPositions
                      ? highlightCurrentPositions.includes(
                          record.after.position,
                        )
                      : emphasizeCurrentResults && record.after.page === 1)
                  }
                  position={record.after}
                />
              </dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  );
}

function SchoolRankings({
  school,
}: {
  school: BusinessProfileKeywordSchool;
}) {
  return (
    <article className="rounded-[2rem] border border-dark-green/12 bg-warm-white/80 p-5 sm:p-8 lg:p-10">
      <header className="max-w-4xl">
        <h4 className="text-balance text-2xl font-semibold tracking-[-0.03em] text-dark-green sm:text-3xl">
          {school.name}
        </h4>
        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-report-orange">
          Baseline · {school.baselineDate}
        </p>
      </header>

      <section
        aria-label="Keyword ranking comparison"
        className="mt-6 sm:mt-8"
      >
        <RankingMethodology />
        <div className="mt-5">
          <DesktopTable
            baselineDate={school.baselineDate}
            currentDate={school.currentDate}
            emphasizeCurrentResults={Boolean(
              school.emphasizeCurrentResults,
            )}
            highlightCurrentPositions={school.highlightCurrentPositions}
            records={school.records}
          />
          <MobileCards
            baselineDate={school.baselineDate}
            currentDate={school.currentDate}
            emphasizeCurrentResults={Boolean(
              school.emphasizeCurrentResults,
            )}
            highlightCurrentPositions={school.highlightCurrentPositions}
            records={school.records}
          />
        </div>
      </section>
    </article>
  );
}

export function BusinessProfileKeywordRankings({
  content,
}: BusinessProfileKeywordRankingsProps) {
  return (
    <section
      aria-labelledby="business-profile-keyword-rankings-heading"
      className="border-t border-dark-green/10 bg-[#edf3ef]"
    >
      <div className="report-container report-section-space">
        <header className="max-w-4xl border-l-4 border-report-orange pl-5 sm:pl-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-report-orange">
            Local visibility
          </p>
          <h3
            id="business-profile-keyword-rankings-heading"
            className="mt-3 text-balance text-2xl font-semibold leading-tight tracking-[-0.025em] text-dark-green sm:text-3xl"
          >
            {content.heading}
          </h3>
        </header>

        {content.schools.map((school) => (
          <div className="mt-10 space-y-4 sm:mt-12 sm:space-y-5" key={school.id}>
            {school.competitionStat ? (
              <CompetitionStatCard stat={school.competitionStat} />
            ) : null}
            <SchoolRankings school={school} />
          </div>
        ))}
      </div>
    </section>
  );
}
