import { SectionIntro } from "@/components/report/section-intro";
import type {
  ProposalCallout,
  ProposalFact,
  ProposalListGroup,
  ProposalOffer,
  ProposedProjectsContent,
} from "@/data/report";

interface ProposedNextProjectsProps {
  content: ProposedProjectsContent;
  number: string;
}

function ProposalFacts({ facts }: { facts: readonly ProposalFact[] }) {
  return (
    <dl
      className={`mt-7 grid overflow-hidden rounded-2xl border border-dark-green/12 bg-[#edf3ef] ${
        facts.length === 3
          ? "sm:grid-cols-3"
          : facts.length === 2
            ? "sm:grid-cols-2"
            : ""
      }`}
    >
      {facts.map((fact) => (
        <div
          className="border-b border-dark-green/12 p-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
          key={fact.label}
        >
          <dt className="text-[0.68rem] font-semibold uppercase leading-5 tracking-[0.12em] text-dark-green/58">
            {fact.label}
          </dt>
          <dd
            className={`mt-1.5 break-words font-semibold leading-snug tracking-[-0.015em] ${
              fact.emphasis
                ? "text-lg text-dark-green sm:text-xl"
                : "text-sm text-dark-green/82 sm:text-base"
            }`}
          >
            {fact.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function ProposalGroup({ group }: { group: ProposalListGroup }) {
  const headingId = `proposal-${group.heading.toLowerCase().replaceAll(" ", "-")}`;

  return (
    <section
      aria-labelledby={headingId}
      className={
        group.emphasis
          ? "rounded-2xl border border-report-orange/25 bg-report-orange/[0.07] p-5"
          : undefined
      }
    >
      <h4
        className="text-xl font-semibold leading-tight tracking-[-0.02em] text-dark-green"
        id={headingId}
      >
        {group.heading}
      </h4>
      <ul className="mt-4 space-y-3 pl-5 text-sm leading-6 text-dark-green/74 marker:text-report-orange sm:text-base sm:leading-7">
        {group.items.map((item, index) => (
          <li className="list-disc pl-1" key={`${item.label ?? item.detail}-${index}`}>
            {item.label ? (
              <strong className="font-semibold text-dark-green">
                {item.label}: {" "}
              </strong>
            ) : null}
            {item.detail}
          </li>
        ))}
      </ul>
    </section>
  );
}

function ProposalCalloutBlock({ callout }: { callout: ProposalCallout }) {
  const isOrange = callout.tone === "orange";

  return (
    <aside
      className={`rounded-2xl border p-5 ${
        isOrange
          ? "border-report-orange/30 bg-report-orange/[0.09]"
          : "border-dark-green/14 bg-dark-green/[0.045]"
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-dark-green/62">
        {callout.label}
      </p>
      <p className="mt-2 text-sm font-medium leading-6 text-dark-green sm:text-base sm:leading-7">
        {callout.body}
      </p>
    </aside>
  );
}

function ProposalCard({ offer }: { offer: ProposalOffer }) {
  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-[1.75rem] border border-dark-green/12 bg-white shadow-[0_20px_50px_rgba(24,59,52,0.08)]">
      <div aria-hidden="true" className="h-1.5 w-full bg-report-orange" />
      <div className="flex flex-1 flex-col p-5 sm:p-7 lg:p-8">
        <header className="max-w-4xl">
          <h3 className="text-balance text-2xl font-semibold leading-[1.15] tracking-[-0.03em] text-dark-green sm:text-3xl">
            Proposition {offer.number} — {offer.title}
          </h3>
          <p className="mt-4 text-sm leading-6 text-dark-green/72 sm:text-base sm:leading-7">
            <strong className="font-semibold text-dark-green">Objective:</strong>{" "}
            {offer.objective}
          </p>
        </header>

        <div className="max-w-4xl">
          <ProposalFacts facts={offer.facts} />
        </div>

        <div className="mt-8 max-w-4xl space-y-8">
          {offer.groups.map((group) => (
            <ProposalGroup group={group} key={group.heading} />
          ))}

          {offer.callouts.map((callout) => (
            <ProposalCalloutBlock callout={callout} key={callout.label} />
          ))}
        </div>

        {offer.note ? (
          <p className="mt-8 max-w-4xl border-t border-dark-green/12 pt-5 text-sm leading-6 text-dark-green/68">
            <strong className="font-semibold text-dark-green">Note:</strong>{" "}
            {offer.note}
          </p>
        ) : null}
      </div>
    </article>
  );
}

export function ProposedNextProjects({
  content,
  number,
}: ProposedNextProjectsProps) {
  const headingId = `${content.id}-title`;

  return (
    <section
      aria-labelledby={headingId}
      className="report-anchor overflow-x-clip border-b border-dark-green/10 bg-[#edf3ef]"
      id={content.id}
      tabIndex={-1}
    >
      <div className="report-container report-section-space">
        <SectionIntro
          id={headingId}
          introduction={content.introduction}
          number={number}
          title={content.title}
        />

        <div className="mt-10 grid items-stretch gap-8 lg:mt-14 lg:gap-10">
          {content.offers.map((offer) => (
            <ProposalCard key={offer.number} offer={offer} />
          ))}
        </div>
      </div>
    </section>
  );
}
