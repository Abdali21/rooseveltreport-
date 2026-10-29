import Image from "next/image";

import type { ReportEvidence } from "@/data/report";

interface EvidenceGridProps {
  evidence: readonly ReportEvidence[];
}

export function EvidenceGrid({ evidence }: EvidenceGridProps) {
  if (evidence.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {evidence.map((item) => (
        <figure
          key={item.src}
          className="overflow-hidden rounded-2xl border border-dark-green/10 bg-warm-white"
        >
          <Image
            alt={item.alt}
            className="h-auto w-full"
            height={item.height}
            sizes="(min-width: 768px) 50vw, 100vw"
            src={item.src}
            width={item.width}
          />
          {item.caption ? (
            <figcaption className="border-t border-dark-green/10 px-4 py-3 text-sm leading-6 text-dark-green/65">
              {item.caption}
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}
