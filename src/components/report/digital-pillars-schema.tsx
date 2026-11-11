import {
  Camera,
  ChartNoAxesCombined,
  CircleCheck,
  Globe2,
  MapPin,
  Megaphone,
  Network,
  SearchCheck,
  Send,
  Share2,
  type LucideIcon,
} from "lucide-react";

interface DigitalArea {
  description: string;
  icon: LucideIcon;
  title: string;
}

interface ChecklistItem {
  text: string;
}

interface StrategyStep {
  icon: LucideIcon;
  items: readonly ChecklistItem[];
  title: string;
}

const digitalAreas = [
  {
    icon: Globe2,
    title: "Website",
    description: "Campus pages, programs, admissions forms, and blog.",
  },
  {
    icon: MapPin,
    title: "Google Business Profiles",
    description:
      "Visibility on Google Search and Maps, accurate information, and contact options.",
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Instagram, Facebook, LinkedIn, and YouTube.",
  },
  {
    icon: Camera,
    title: "Visual Production",
    description:
      "A photographer and filmmaker capturing school life, events, and facilities.",
  },
] as const satisfies readonly DigitalArea[];

const strategySteps = [
  {
    icon: Camera,
    title: "Professional Photos & Videos",
    items: [
      {
        text: "Photo and video coverage of school events and activities.",
      },
      {
        text: "Edited visuals ready for the website, social media, Google Business Profiles, and advertising.",
      },
    ],
  },
  {
    icon: Send,
    title: "Content Publishing",
    items: [
      {
        text: "Instagram, Facebook, and LinkedIn posts.",
      },
      {
        text: "YouTube channel creation and video publishing featuring school events, activities, and achievements.",
      },
      {
        text: "Google Business Profile posts featuring school events and activities.",
      },
      {
        text: "Website blog articles covering school events and achievements.",
      },
      {
        text: "A publishing calendar to keep communication consistent.",
      },
    ],
  },
  {
    icon: SearchCheck,
    title: "Google Business Profile Optimization",
    items: [
      {
        text: "Professional photos and dedicated campus website links.",
      },
      {
        text: "Parent review requests and responses where reviews are available.",
      },
      {
        text: "More citations through school listings on relevant local and education directories.",
      },
      {
        text: "Ranking monitoring and ongoing profile improvements.",
      },
    ],
  },
  {
    icon: Globe2,
    title: "Visibility in AI Search · GEO",
    items: [
      {
        text: "Clear website information about each campus, its programs, languages, and services.",
      },
      {
        text: "Answers to parents’ questions about the school and admissions.",
      },
      {
        text: "Technical checks to help search and AI tools access the website.",
      },
      {
        text: "Monitoring of school mentions and website visits from AI search.",
      },
    ],
  },
  {
    icon: Megaphone,
    title: "Advertising · Awareness & Admissions",
    items: [
      {
        text: "Awareness campaigns showcasing Roosevelt’s programs, facilities, and school life.",
      },
      {
        text: "Admissions campaigns generating inquiries, calls, and campus visits.",
      },
    ],
  },
  {
    icon: ChartNoAxesCombined,
    title: "Measurement & Retention",
    items: [
      {
        text: "Ask new families how they first heard about Roosevelt.",
      },
      {
        text: "Track the percentage of existing families who leave or change schools and understand their reasons.",
      },
      {
        text: "Regular reporting to guide marketing and admissions decisions.",
      },
    ],
  },
] as const satisfies readonly StrategyStep[];

function AreaCard({ area }: { area: DigitalArea }) {
  const Icon = area.icon;

  return (
    <article className="h-full rounded-2xl border border-dark-green/12 bg-white p-5 text-dark-green shadow-[0_12px_28px_rgba(24,59,52,0.065)] sm:p-6">
      <span className="inline-flex size-11 items-center justify-center rounded-xl border border-report-orange/25 bg-report-orange/[0.09] text-report-orange">
        <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
      </span>
      <h4 className="mt-4 text-lg font-semibold leading-snug tracking-[-0.02em]">
        {area.title}
      </h4>
      <p className="mt-3 text-sm leading-6 text-dark-green/68">
        {area.description}
      </p>
    </article>
  );
}

function StrategyCard({ step }: { step: StrategyStep }) {
  const Icon = step.icon;

  return (
    <article className="rounded-[1.75rem] border border-dark-green/12 bg-[#fffdf9] p-5 text-dark-green shadow-[0_12px_30px_rgba(24,59,52,0.06)] sm:p-6 lg:p-7">
      <header className="flex items-center gap-3">
        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-report-orange/25 bg-report-orange/[0.09] text-report-orange">
          <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
        </span>
        <h5 className="text-xl font-semibold leading-snug tracking-[-0.025em] sm:text-2xl">
          {step.title}
        </h5>
      </header>

      <ul className="mt-5 space-y-3.5 text-sm leading-6 text-dark-green/72 sm:text-base sm:leading-7">
        {step.items.map((item) => (
          <li className="flex items-start gap-3" key={item.text}>
            <CircleCheck
              aria-hidden="true"
              className="mt-1 size-4 shrink-0 text-report-orange sm:mt-1.5"
              strokeWidth={2}
            />
            <span className="min-w-0">{item.text}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function DigitalPillarsSchema() {
  return (
    <section
      aria-labelledby="digital-pillars-heading"
      className="mt-12 sm:mt-14 lg:mt-16"
    >
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-report-orange">
          Ongoing digital strategy
        </p>
        <h3
          id="digital-pillars-heading"
          className="mt-3 text-balance text-2xl font-semibold leading-tight tracking-[-0.025em] text-warm-white sm:text-3xl"
        >
          Roosevelt’s Digital Priorities
        </h3>
      </header>

      <div className="mt-10 rounded-[2rem] border border-white/15 bg-[#f2ede4] px-4 py-8 shadow-[0_24px_60px_rgba(0,0,0,0.12)] sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-report-orange/35 bg-dark-green px-6 py-8 text-center text-warm-white shadow-[0_18px_45px_rgba(24,59,52,0.2)] sm:px-10 sm:py-10">
          <span className="mx-auto inline-flex size-12 items-center justify-center rounded-2xl border border-report-orange/35 bg-report-orange/10 text-report-orange">
            <Network aria-hidden="true" className="size-6" strokeWidth={1.8} />
          </span>
          <h4 className="mt-5 text-balance text-2xl font-semibold leading-tight tracking-[-0.03em] sm:text-3xl">
            A Clear Digital Vision for Roosevelt Private School
          </h4>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-warm-white/78 sm:text-base sm:leading-7">
            Help more families discover Roosevelt, turn interest into
            admissions, and strengthen relationships with existing families.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-10 xl:grid-cols-4">
          {digitalAreas.map((area) => (
            <AreaCard area={area} key={area.title} />
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-6">
          {strategySteps.map((step) => (
            <StrategyCard key={step.title} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
