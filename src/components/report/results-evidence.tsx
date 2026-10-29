import type {
  ReportComparisonImage,
  ReportEvidence,
  ReportProfileComparison,
  ReportSectionId,
  ResultsEvidenceContent,
} from "@/data/report";
import { BeforeAfterComparison } from "@/components/report/before-after-comparison";
import { BusinessProfileKeywordRankings } from "@/components/report/business-profile-keyword-rankings";
import { LightboxImage } from "@/components/report/lightbox-image";
import { OrganicSearchPerformance } from "@/components/report/organic-search-performance";
import { SectionIntro } from "@/components/report/section-intro";

interface ResultsEvidenceProps {
  content: ResultsEvidenceContent;
  id: ReportSectionId;
  title: string;
}

interface EvidenceFigureProps {
  image: ReportEvidence;
}

interface ComparisonFigureProps {
  evidence: ReportComparisonImage;
}

function EvidenceGroupHeading({
  eyebrow,
  heading,
  id,
}: {
  eyebrow: string;
  heading: string;
  id: string;
}) {
  return (
    <header className="max-w-4xl">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-report-orange">
        {eyebrow}
      </p>
      <h3
        id={id}
        className="mt-3 text-balance text-2xl font-semibold leading-tight tracking-[-0.025em] text-dark-green sm:text-3xl"
      >
        {heading}
      </h3>
    </header>
  );
}

function EvidenceFigure({ image }: EvidenceFigureProps) {
  return (
    <figure className="mt-8 sm:mt-10">
      <LightboxImage image={image} sizes="(min-width: 1280px) 1184px, 100vw" />
      {image.caption ? (
        <figcaption className="mt-4 text-sm font-medium text-dark-green/65 sm:text-base">
          {image.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function ComparisonFigure({ evidence }: ComparisonFigureProps) {
  return (
    <figure className="min-w-0">
      <figcaption className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-report-orange">
        {evidence.label}
      </figcaption>
      <LightboxImage image={evidence.image} sizes="(min-width: 1024px) 50vw, 100vw" />
    </figure>
  );
}

function ProfileComparison({ profile }: { profile: ReportProfileComparison }) {
  return (
    <article className="border-t border-dark-green/15 pt-10 sm:pt-12">
      <h4 className="text-balance text-xl font-semibold tracking-[-0.02em] text-dark-green sm:text-2xl">
        {profile.name}
      </h4>
      <div className="mt-7 grid gap-10 lg:grid-cols-2 lg:gap-8">
        <ComparisonFigure evidence={profile.previous} />
        <ComparisonFigure evidence={profile.current} />
      </div>
      {profile.note ? (
        <p className="mt-7 max-w-4xl border-l-2 border-report-orange pl-4 text-sm leading-6 text-dark-green/70 sm:text-base sm:leading-7">
          {profile.note}
        </p>
      ) : null}
    </article>
  );
}

export function ResultsEvidence({
  content,
  id,
  title,
}: ResultsEvidenceProps) {
  const headingId = `${id}-title`;

  return (
    <section
      id={id}
      tabIndex={-1}
      aria-labelledby={headingId}
      className="report-anchor overflow-x-clip"
    >
      <div className="bg-white">
        <div className="report-container report-section-space">
          <SectionIntro id={headingId} number="02" title={title} />

          <section
            aria-labelledby="google-search-heading"
            className="mt-12 sm:mt-14 lg:mt-16"
          >
            <EvidenceGroupHeading
              eyebrow="Search appearance"
              heading={content.search.heading}
              id="google-search-heading"
            />
            <EvidenceFigure image={content.search.image} />
          </section>

          <section
            aria-labelledby="google-maps-heading"
            className="mt-16 border-t border-dark-green/15 pt-12 sm:mt-20 sm:pt-14 lg:mt-24 lg:pt-16"
          >
            <EvidenceGroupHeading
              eyebrow="Location visibility"
              heading={content.maps.heading}
              id="google-maps-heading"
            />
            <EvidenceFigure image={content.maps.image} />
          </section>

          <section
            aria-labelledby="profile-comparisons-heading"
            className="mt-16 border-t border-dark-green/15 pt-12 sm:mt-20 sm:pt-14 lg:mt-24 lg:pt-16"
          >
            <EvidenceGroupHeading
              eyebrow="Profile evidence"
              heading={content.comparisons.heading}
              id="profile-comparisons-heading"
            />
            <div className="mt-10 grid gap-16 sm:mt-12 sm:gap-20">
              {content.comparisons.profiles.map((profile) => (
                <ProfileComparison key={profile.name} profile={profile} />
              ))}
            </div>
          </section>
        </div>
      </div>

        <BusinessProfileKeywordRankings
          content={content.businessProfileRankings}
        />

        <BeforeAfterComparison comparison={content.website} />

        <OrganicSearchPerformance content={content.organicSearch} />
    </section>
  );
}
