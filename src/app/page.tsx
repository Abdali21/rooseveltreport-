import { ReportShell } from "@/components/layout/report-shell";
import { MonthlyOverview } from "@/components/report/monthly-overview";
import { ReportHero } from "@/components/report/report-hero";
import { ReportSection } from "@/components/report/report-section";
import { ResultsEvidence } from "@/components/report/results-evidence";
import { reportData } from "@/data/report";

export default function Home() {
  const monthlyOverview = reportData.sections[0];
  const resultsEvidence = reportData.sections[1];
  const remainingSections = reportData.sections.slice(2);

  return (
    <ReportShell>
      <main id="report-content">
        <ReportHero
          outlineItems={reportData.sections.map((section) => ({
            href: `#${section.id}`,
            label: section.outlineTitle,
          }))}
          periodDateTime={`${reportData.period.start}/${reportData.period.end}`}
          periodLabel={reportData.period.label}
          schoolName={reportData.client.toUpperCase()}
          title={reportData.hero.title}
        />

        <MonthlyOverview
          content={monthlyOverview.monthlyOverview}
          id={monthlyOverview.id}
          title={monthlyOverview.title}
        />

        <ResultsEvidence
          content={resultsEvidence.resultsEvidence}
          id={resultsEvidence.id}
          title={resultsEvidence.title}
        />

        {remainingSections.map((section, index) => (
          <ReportSection
            key={section.id}
            index={index + 3}
            section={section}
          />
        ))}
      </main>

      <footer className="border-t border-dark-green/10">
        <div className="report-container py-8 text-center text-sm text-dark-green/60">
          {reportData.client} · {reportData.period.label}
        </div>
      </footer>
    </ReportShell>
  );
}
