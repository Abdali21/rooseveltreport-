import type { ReportSectionData } from "@/data/report";
import { DigitalPillarsSchema } from "@/components/report/digital-pillars-schema";
import { EvidenceGrid } from "@/components/report/evidence-grid";
import { SectionIntro } from "@/components/report/section-intro";

interface ReportSectionProps {
  index: number;
  section: ReportSectionData;
}

export function ReportSection({ index, section }: ReportSectionProps) {
  const isVisionSection = section.id === "vision-ideas";
  const hasContent =
    section.summary !== null ||
    section.highlights.length > 0 ||
    section.evidence.length > 0;
  const headingId = `${section.id}-title`;

  return (
    <section
      id={section.id}
      tabIndex={-1}
      aria-labelledby={headingId}
      className={`print-section report-anchor overflow-x-clip border-b ${
        isVisionSection
          ? "border-white/10 bg-dark-green"
          : "border-dark-green/10 bg-warm-white"
      }`}
    >
      <div className="report-container report-section-space">
        <SectionIntro
          id={headingId}
          number={String(index).padStart(2, "0")}
          tone={isVisionSection ? "dark" : "light"}
          title={section.title}
        />

        {hasContent ? (
          <div className="mt-10 max-w-4xl space-y-6 sm:mt-12">
              {section.summary ? (
                <p className="max-w-3xl text-base leading-7 text-dark-green/75">
                  {section.summary}
                </p>
              ) : null}
              {section.highlights.length > 0 ? (
                <ul className="grid gap-3 pl-5 text-dark-green/75 marker:text-report-orange">
                  {section.highlights.map((highlight) => (
                    <li key={highlight} className="list-disc pl-1 leading-7">
                      {highlight}
                    </li>
                  ))}
                </ul>
              ) : null}
              <EvidenceGrid evidence={section.evidence} />
          </div>
        ) : null}

        {isVisionSection ? <DigitalPillarsSchema /> : null}
      </div>
    </section>
  );
}
