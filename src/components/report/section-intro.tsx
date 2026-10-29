interface SectionIntroProps {
  id: string;
  introduction?: string;
  number: string;
  tone?: "dark" | "light";
  title: string;
}

export function SectionIntro({
  introduction,
  id,
  number,
  tone = "light",
  title,
}: SectionIntroProps) {
  const isDark = tone === "dark";

  return (
    <header className="max-w-4xl">
      <div className="flex items-center gap-4">
        <p className="text-sm font-semibold tabular-nums tracking-[0.16em] text-report-orange">
          {number}
        </p>
        <span aria-hidden="true" className="h-px w-12 bg-report-orange/65" />
      </div>
      <h2
        id={id}
        className={`mt-5 text-balance text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.045em] ${
          isDark ? "text-warm-white" : "text-dark-green"
        }`}
      >
        {title}
      </h2>
      {introduction ? (
        <p
          className={`mt-5 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8 ${
            isDark ? "text-warm-white/70" : "text-dark-green/70"
          }`}
        >
          {introduction}
        </p>
      ) : null}
    </header>
  );
}
