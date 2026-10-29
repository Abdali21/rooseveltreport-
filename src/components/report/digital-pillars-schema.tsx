import {
  Camera,
  CircleCheck,
  Globe2,
  MapPin,
  Megaphone,
  MessagesSquare,
  type LucideIcon,
} from "lucide-react";

interface DigitalPillar {
  icon: LucideIcon;
  services: readonly string[];
  title: string;
}

const digitalPillars = [
  {
    icon: MapPin,
    title: "Google Business Profiles",
    services: [
      "Profile support",
      "Issue resolution",
      "Posts & review management",
      "Local optimization",
      "Citations & listings",
    ],
  },
  {
    icon: Globe2,
    title: "Website",
    services: [
      "Technical support",
      "Website improvements",
      "Blog articles",
    ],
  },
  {
    icon: MessagesSquare,
    title: "Social Media",
    services: [
      "Content planning",
      "Publishing",
      "Performance tracking",
    ],
  },
  {
    icon: Camera,
    title: "Photo & Video Production",
    services: [
      "Event coverage",
      "Photography",
      "Filming",
      "Photo editing",
      "Video editing",
    ],
  },
  {
    icon: Megaphone,
    title: "Advertising",
    services: [
      "Admissions campaigns",
      "Google & Meta advertising",
      "Paid search visibility",
      "Brand awareness",
    ],
  },
] as const satisfies readonly DigitalPillar[];

function PillarCard({ pillar }: { pillar: DigitalPillar }) {
  const Icon = pillar.icon;

  return (
    <article className="relative z-10 h-full rounded-2xl border border-dark-green/12 bg-[#fffdf9] p-5 shadow-[0_14px_35px_rgba(24,59,52,0.055)] sm:p-6 xl:p-5">
      <header className="min-h-[6.75rem] border-b border-dark-green/10 pb-5">
        <span className="inline-flex size-10 items-center justify-center rounded-xl border border-report-orange/25 bg-report-orange/[0.08] text-report-orange">
          <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
        </span>
        <h4 className="mt-4 text-[1.075rem] font-semibold leading-snug tracking-[-0.018em] text-dark-green xl:text-[1.05rem]">
          {pillar.title}
        </h4>
      </header>

      <ul className="mt-5 space-y-3 text-sm leading-6 text-dark-green/70">
        {pillar.services.map((service) => (
          <li key={service} className="flex items-start gap-2.5">
            <CircleCheck
              aria-hidden="true"
              className="mt-1 size-4 shrink-0 text-dark-green/45"
              strokeWidth={1.8}
            />
            <span className="min-w-0">{service}</span>
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
          Our digital presence
        </p>
        <h3
          id="digital-pillars-heading"
          className="mt-3 text-balance text-2xl font-semibold leading-tight tracking-[-0.025em] text-warm-white sm:text-3xl"
        >
          The Work Ahead
        </h3>
        <p className="mt-4 text-base leading-7 text-warm-white/70 sm:text-lg sm:leading-8">
          The responsibilities to maintain and develop Roosevelt’s digital
          presence.
        </p>
      </header>

      <div className="mt-10 rounded-[2rem] border border-white/15 bg-white/[0.045] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 xl:px-6">
        <div className="mx-auto w-fit min-w-[15rem] rounded-2xl border border-report-orange/35 bg-warm-white px-7 py-4 text-center text-dark-green shadow-[0_14px_36px_rgba(0,0,0,0.14)] sm:min-w-[17rem]">
          <p className="text-base font-semibold tracking-[-0.015em] sm:text-lg">
            Roosevelt Private School
          </p>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-report-orange">
            Digital Presence
          </p>
        </div>

        <div
          aria-hidden="true"
          className="mx-auto h-7 w-px bg-warm-white/35 md:hidden xl:block xl:h-8"
        />

        <div className="relative md:mt-8 xl:mt-0">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-warm-white/25 md:hidden"
          />

          <div aria-hidden="true" className="absolute inset-x-0 top-0 hidden h-8 xl:block">
            <span
              className="absolute top-0 h-px bg-warm-white/35"
              style={{
                left: "calc((100% - 4rem) / 10)",
                right: "calc((100% - 4rem) / 10)",
              }}
            />
            <div className="grid h-8 grid-cols-5 gap-4">
              {digitalPillars.map((pillar) => (
                <span key={pillar.title} className="relative">
                  <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-warm-white/35" />
                </span>
              ))}
            </div>
          </div>

          <div className="relative grid gap-4 pt-0 md:grid-cols-2 md:gap-5 xl:grid-cols-5 xl:gap-4 xl:pt-8">
            {digitalPillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className={
                  index === digitalPillars.length - 1
                    ? "md:col-span-2 md:mx-auto md:w-[calc(50%_-_0.625rem)] xl:col-span-1 xl:mx-0 xl:w-auto"
                    : ""
                }
              >
                <PillarCard pillar={pillar} />
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 border-l-2 border-report-orange/70 pl-4 text-xs leading-5 text-warm-white/65 sm:text-sm sm:leading-6">
          Review management where available. Campaigns planned around
          admissions periods and other school needs.
        </p>
      </div>
    </section>
  );
}
