import { LightboxImage } from "@/components/report/lightbox-image";
import type {
  OrganicSearchPerformanceContent,
  OrganicSearchPeriodMetrics,
} from "@/data/report";

interface OrganicSearchPerformanceProps {
  content: OrganicSearchPerformanceContent;
}

interface MetricBarProps {
  maximum: number;
  muted?: boolean;
  value: number;
  valueLabel: string;
  year: number;
}

function MetricBar({
  maximum,
  muted = false,
  value,
  valueLabel,
  year,
}: MetricBarProps) {
  const width = `${Math.max((value / maximum) * 100, 2)}%`;

  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between gap-4 text-sm">
        <span className="font-semibold text-dark-green">{year}</span>
        <span className="font-semibold tabular-nums text-dark-green">
          {valueLabel}
        </span>
      </div>
      <div className="h-4 overflow-hidden rounded-full bg-dark-green/8">
        <div
          aria-hidden="true"
          className={`h-full rounded-full ${
            muted ? "bg-dark-green/30" : "bg-dark-green"
          }`}
          style={{ width }}
        />
      </div>
    </div>
  );
}

function MainMetricCard({
  explanation,
  growthLabel,
  heading,
  maximum,
  previous,
  current,
  supportingDetail,
  technicalLabel,
  valueFormatter,
  valueSelector,
}: {
  explanation: string;
  growthLabel: string;
  heading: string;
  maximum: number;
  previous: OrganicSearchPeriodMetrics;
  current: OrganicSearchPeriodMetrics;
  supportingDetail?: string;
  technicalLabel: string;
  valueFormatter: (value: number, year: number) => string;
  valueSelector: (period: OrganicSearchPeriodMetrics) => number;
}) {
  const previousValue = valueSelector(previous);
  const currentValue = valueSelector(current);

  return (
    <article className="rounded-3xl border border-dark-green/12 bg-warm-white p-6 shadow-sm sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-report-orange">
        {technicalLabel}
      </p>
      <h4 className="mt-3 text-balance text-2xl font-semibold tracking-[-0.03em] text-dark-green sm:text-3xl">
        {heading}
      </h4>

      <p className="mt-5 text-2xl font-semibold tabular-nums tracking-[-0.03em] text-dark-green sm:text-3xl">
        {valueFormatter(previousValue, previous.year)}
        <span aria-hidden="true" className="mx-3 text-report-orange">
          →
        </span>
        <span className="sr-only"> to </span>
        {valueFormatter(currentValue, current.year)}
      </p>

      <p className="mt-4 inline-flex rounded-full bg-report-orange/12 px-3 py-1.5 text-sm font-semibold text-dark-green">
        {growthLabel}
      </p>

      <div className="mt-7 grid gap-5" aria-label={`${heading} comparison`}>
        <MetricBar
          maximum={maximum}
          muted
          value={previousValue}
          valueLabel={valueFormatter(previousValue, previous.year)}
          year={previous.year}
        />
        <MetricBar
          maximum={maximum}
          value={currentValue}
          valueLabel={valueFormatter(currentValue, current.year)}
          year={current.year}
        />
      </div>

      <p className="mt-7 text-sm leading-6 text-dark-green/75 sm:text-base sm:leading-7">
        {explanation}
      </p>
      {supportingDetail ? (
        <p className="mt-2 text-sm font-medium leading-6 text-dark-green/60">
          {supportingDetail}
        </p>
      ) : null}
    </article>
  );
}

function EvidenceImage({ period }: { period: OrganicSearchPeriodMetrics }) {
  return (
    <figure className="min-w-0">
      <figcaption className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-report-orange">
        {period.year}
      </figcaption>
      <LightboxImage
        image={period.evidence}
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
    </figure>
  );
}

export function OrganicSearchPerformance({
  content,
}: OrganicSearchPerformanceProps) {
  const clicksAdded = content.current.clicks - content.previous.clicks;
  const clickGrowth = Math.round(
    (clicksAdded / content.previous.clicks) * 100,
  );
  const impressionGrowth = Math.round(
    ((content.current.impressions - content.previous.impressions) /
      content.previous.impressions) *
      100,
  );
  return (
    <section
      aria-labelledby="organic-search-performance-heading"
      className="border-t border-dark-green/10 bg-white"
    >
      <div className="report-container report-section-space">
        <header className="max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-report-orange">
          Website performance
        </p>
        <h3
          id="organic-search-performance-heading"
          className="mt-3 text-balance text-2xl font-semibold leading-tight tracking-[-0.025em] text-dark-green sm:text-3xl"
        >
          {content.heading}
        </h3>
        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-report-orange sm:text-base">
          {content.subtitle}
        </p>
        <p className="mt-5 text-lg leading-8 text-dark-green/75 sm:text-xl">
          {content.introduction}
        </p>
        </header>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
        <MainMetricCard
          current={content.current}
          explanation="Times our website appeared in Google Search results."
          growthLabel={`Approximately ${impressionGrowth}% more appearances`}
          heading="Appearances on Google"
          maximum={content.current.impressions}
          previous={content.previous}
          technicalLabel="Impressions"
          valueFormatter={(value, year) =>
            year === content.current.year
              ? `≈ ${value.toLocaleString("en-US")}`
              : value.toLocaleString("en-US")
          }
          valueSelector={(period) => period.impressions}
        />

        <MainMetricCard
          current={content.current}
          explanation="Clicks on our website’s results in Google Search."
          growthLabel={`${clickGrowth}% more clicks`}
          heading="Clicks from Google"
          maximum={content.current.clicks}
          previous={content.previous}
          supportingDetail={`${clicksAdded} additional clicks in the period shown.`}
          technicalLabel="Search clicks"
          valueFormatter={(value) => value.toLocaleString("en-US")}
          valueSelector={(period) => period.clicks}
        />
        </div>

        <p className="mt-6 max-w-4xl text-sm leading-6 text-dark-green/60">
        Clicks are not unique visitors, inquiries, or admissions. The totals
        combine the periods shown in each screenshot.
        </p>

        <details className="group mt-10 rounded-2xl border border-dark-green/12 bg-white">
        <summary className="cursor-pointer px-5 py-4 text-sm font-semibold text-dark-green marker:text-report-orange sm:px-6 sm:py-5 sm:text-base">
          View Google Search Console evidence
        </summary>
        <div className="grid gap-8 border-t border-dark-green/10 p-5 sm:p-6 lg:grid-cols-2">
          <EvidenceImage period={content.previous} />
          <EvidenceImage period={content.current} />
        </div>
        </details>

        <p className="mt-5 text-xs leading-5 text-dark-green/50 sm:text-sm">
          {content.sourceNote}
        </p>
      </div>
    </section>
  );
}
