import type {
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

function StatusBadge({ change }: { change: KeywordRankingChange }) {
  const className = {
    declined: "border-amber-300 bg-amber-50 text-amber-800",
    improved: "border-dark-green/20 bg-dark-green/8 text-dark-green",
    started: "border-blue-200 bg-blue-50 text-blue-800",
  }[change];

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${className}`}
    >
      {changeLabels[change]}
    </span>
  );
}

function DesktopTable({
  baselineDate,
  currentDate,
  records,
}: {
  baselineDate: string;
  currentDate: string;
  records: readonly BusinessProfileKeywordRecord[];
}) {
  return (
    <div className="hidden overflow-hidden rounded-2xl border border-dark-green/12 bg-white md:block">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-dark-green text-warm-white">
          <tr>
            <th className="px-5 py-4 font-semibold">Keyword</th>
            <th className="px-5 py-4 font-semibold">{baselineDate}</th>
            <th className="px-5 py-4 font-semibold">{currentDate}</th>
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
              <td className="px-5 py-4 font-medium text-dark-green">
                {formatPosition(record.after)}
              </td>
              <td className="px-5 py-4">
                <StatusBadge change={record.change} />
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
  records,
}: {
  baselineDate: string;
  currentDate: string;
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
            <StatusBadge change={record.change} />
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
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-report-orange">
                After · {currentDate}
              </dt>
              <dd className="mt-1.5 text-sm font-semibold text-dark-green">
                {formatPosition(record.after)}
              </dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  );
}

function SchoolRankings({
  clarification,
  school,
  sourceNote,
}: {
  clarification: string;
  school: BusinessProfileKeywordSchool;
  sourceNote: string;
}) {
  const comparisonHeadingId = `${school.id}-complete-keyword-comparison-heading`;

  return (
    <article className="mt-10 rounded-[2rem] border border-dark-green/12 bg-warm-white/80 p-5 sm:mt-12 sm:p-8 lg:p-10">
      <header className="max-w-4xl">
        <h4 className="text-balance text-2xl font-semibold tracking-[-0.03em] text-dark-green sm:text-3xl">
          {school.name}
        </h4>
        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-report-orange">
          {school.baselineDate} → {school.currentDate}
        </p>
        <p className="mt-4 text-base leading-7 text-dark-green/70 sm:text-lg">
          {school.introduction}
        </p>
      </header>

      <section aria-labelledby={comparisonHeadingId} className="mt-8 sm:mt-10">
        <h5
          id={comparisonHeadingId}
          className="text-xl font-semibold tracking-[-0.02em] text-dark-green sm:text-2xl"
        >
          Complete keyword comparison
        </h5>
        <div className="mt-6">
          <DesktopTable
            baselineDate={school.baselineDate}
            currentDate={school.currentDate}
            records={school.records}
          />
          <MobileCards
            baselineDate={school.baselineDate}
            currentDate={school.currentDate}
            records={school.records}
          />
        </div>
      </section>

      <div className="mt-6 grid gap-2 text-xs leading-5 text-dark-green/50 sm:text-sm">
        <p>{sourceNote}</p>
        <p>{clarification}</p>
      </div>
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
          <SchoolRankings
            key={school.id}
            clarification={content.clarification}
            school={school}
            sourceNote={content.sourceNote}
          />
        ))}
      </div>
    </section>
  );
}
