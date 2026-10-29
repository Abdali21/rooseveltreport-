import { ArrowDownRight } from "lucide-react";
import Image from "next/image";

interface HeroOutlineItem {
  href?: `#${string}`;
  label: string;
}

interface ReportHeroProps {
  outlineItems: readonly HeroOutlineItem[];
  periodDateTime: string;
  periodLabel: string;
  schoolName: string;
  title: string;
}

export function ReportHero({
  outlineItems,
  periodDateTime,
  periodLabel,
  schoolName,
  title,
}: ReportHeroProps) {
  return (
    <section
      aria-labelledby="report-title"
      className="report-hero overflow-hidden border-b border-white/10 bg-dark-green text-warm-white"
    >
      <div className="report-container py-10 sm:py-14 lg:py-16">
        <div className="flex items-center gap-3 border-b border-white/12 pb-6 sm:pb-7">
          <span
            aria-hidden="true"
            className="h-7 w-1 rounded-full bg-report-orange"
          />
          <p className="min-w-0 text-xs font-semibold uppercase tracking-[0.2em] text-warm-white/80 sm:text-sm">
            {schoolName}
          </p>
          <span aria-hidden="true" className="ml-auto hidden h-px w-28 bg-white/15 sm:block" />
        </div>

        <div className="grid items-center gap-12 py-12 sm:py-14 lg:grid-cols-[minmax(0,0.62fr)_minmax(30rem,1fr)] lg:gap-14 lg:py-16 xl:gap-20">
          <header className="max-w-3xl">
            <div
              aria-hidden="true"
              className="mb-8 h-0.5 w-10 rounded-full bg-report-orange"
            />

            <h1
              id="report-title"
              className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-warm-white lg:whitespace-nowrap"
            >
              {title}
            </h1>

            <p className="mt-6 text-base font-normal leading-7 text-[#cbd8d2]">
              <time dateTime={periodDateTime}>{periodLabel}</time>
            </p>
          </header>

          <div className="relative min-w-0">
            <div
              aria-hidden="true"
              className="absolute -inset-8 bg-[radial-gradient(circle_at_center,rgba(249,246,241,0.13),transparent_68%)]"
            />
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 h-full w-full rounded-[1.6rem] border border-white/10 bg-white/[0.045] sm:-right-4 sm:-top-4"
            />

            <figure className="relative rounded-[1.5rem] border border-white/15 bg-warm-white p-3 shadow-[0_28px_70px_rgba(3,20,16,0.36)] sm:p-4">
              <figcaption className="mb-3 flex items-center gap-2.5 px-1 text-xs font-semibold uppercase tracking-[0.14em] text-dark-green/65 sm:text-sm">
                <span
                  aria-hidden="true"
                  className="size-2 rounded-full bg-report-orange"
                />
                Website Final version
              </figcaption>
              <div className="overflow-hidden rounded-xl border border-dark-green/10 bg-white">
                <Image
                  alt="Completed Roosevelt Private School homepage with school information, contact options, and photos for Kindergarten, Primary, Collège, and Lycée"
                  className="h-auto w-full object-contain"
                  height={879}
                  priority
                  sizes="(min-width: 1280px) 650px, (min-width: 1024px) 55vw, 100vw"
                  src="/images/report/website/homepage-after-desktop-hero.png"
                  width={1789}
                />
              </div>
            </figure>
          </div>
        </div>

        <nav aria-label="Report chapters" className="border-t border-white/12 pt-7 sm:pt-8">
          <ol className="grid gap-3 sm:grid-cols-3 sm:gap-4">
            {outlineItems.map((item, index) => {
              const number = String(index + 1).padStart(2, "0");
              const content = (
                <>
                  <span className="text-xs font-semibold tabular-nums tracking-[0.14em] text-report-orange sm:text-sm">
                    {number}
                  </span>
                  <span className="mt-6 text-lg font-semibold leading-snug tracking-[-0.02em] text-warm-white sm:text-xl">
                    {item.label}
                  </span>
                  <ArrowDownRight
                    aria-hidden="true"
                    className="absolute bottom-5 right-5 size-5 text-warm-white/45 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:text-report-orange"
                    strokeWidth={1.8}
                  />
                </>
              );

              return (
                <li key={`${number}-${item.label}`} className="min-w-0">
                  {item.href ? (
                    <a
                      href={item.href}
                      aria-label={`${number} — ${item.label}`}
                      className="group relative flex min-h-32 flex-col rounded-2xl border border-white/12 bg-white/[0.055] p-5 pr-12 transition-[background-color,border-color] duration-200 hover:border-white/25 hover:bg-white/[0.085] focus-visible:border-report-orange focus-visible:bg-white/[0.085] sm:p-6 sm:pr-12"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="relative flex min-h-32 flex-col rounded-2xl border border-white/12 bg-white/[0.055] p-5 pr-12 sm:p-6 sm:pr-12">
                      {content}
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
}
