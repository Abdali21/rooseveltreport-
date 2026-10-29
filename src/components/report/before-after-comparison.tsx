"use client";

import Image from "next/image";
import { useState } from "react";

import { LightboxImage } from "@/components/report/lightbox-image";
import type {
  ReportBeforeAfterBlock,
  ReportGallery,
  ReportSupportingDetail,
  ReportWebsiteComparison,
  ReportWebsiteComparisonSection,
} from "@/data/report";

interface BeforeAfterComparisonProps {
  comparison: ReportWebsiteComparison;
}

function ComparisonGallery({
  gallery,
  variant,
}: {
  gallery: ReportGallery;
  variant: ReportBeforeAfterBlock["variant"];
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = gallery.images[selectedIndex] ?? gallery.images[0];

  return (
    <figure className="min-w-0">
      <figcaption className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-report-orange">
        {gallery.label}
      </figcaption>

      <div
        className={
          variant === "mobile"
            ? "mx-auto w-full max-w-[25rem]"
            : "w-full"
        }
      >
        <LightboxImage
          image={selected.image}
          sizes={
            variant === "mobile"
              ? "(min-width: 1024px) 400px, min(400px, 100vw)"
              : "(min-width: 1024px) 50vw, 100vw"
          }
        />
      </div>

      {gallery.images.length > 1 ? (
        <div
          aria-label={`${gallery.label} image choices`}
          className="mt-4 flex flex-wrap justify-center gap-3 lg:justify-start"
          role="group"
        >
          {gallery.images.map((item, index) => {
            const isSelected = selectedIndex === index;

            return (
              <button
                key={item.image.src}
                type="button"
                aria-pressed={isSelected}
                className={`min-w-0 rounded-xl border bg-white p-2 text-left transition-colors ${
                  isSelected
                    ? "border-report-orange ring-2 ring-report-orange/25"
                    : "border-dark-green/15 hover:border-dark-green/45"
                }`}
                onClick={() => setSelectedIndex(index)}
              >
                <span className="flex items-center gap-2.5">
                  <span className="flex h-12 w-14 shrink-0 items-center justify-center overflow-hidden rounded-md bg-warm-white sm:h-14 sm:w-16">
                    <Image
                      alt=""
                      aria-hidden="true"
                      className="h-full w-full object-contain"
                      height={item.image.height}
                      sizes="64px"
                      src={item.image.src}
                      width={item.image.width}
                    />
                  </span>
                  <span
                    className={`max-w-36 text-xs font-semibold leading-5 sm:text-sm ${
                      isSelected ? "text-dark-green" : "text-dark-green/65"
                    }`}
                  >
                    {item.label}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      ) : null}
    </figure>
  );
}

function ComparisonBlock({
  block,
  comparisonId,
}: {
  block: ReportBeforeAfterBlock;
  comparisonId: string;
}) {
  const headingId = `${comparisonId}-${block.heading.toLowerCase()}-heading`;

  return (
    <section
      aria-labelledby={headingId}
      className="border-t border-dark-green/15 pt-10 sm:pt-12"
    >
      <h5
        id={headingId}
        className="text-balance text-xl font-semibold tracking-[-0.02em] text-dark-green sm:text-2xl"
      >
        {block.heading}
      </h5>

      <div
        className={
          block.layout === "stacked"
            ? "mt-7 grid gap-8 sm:gap-10"
            : "mt-7 grid items-start gap-10 lg:grid-cols-2 lg:gap-8"
        }
      >
        <ComparisonGallery gallery={block.previous} variant={block.variant} />
        <ComparisonGallery gallery={block.current} variant={block.variant} />
      </div>

      {block.caption ? (
        <p className="mx-auto mt-7 max-w-3xl text-center text-sm leading-6 text-dark-green/70 sm:text-base sm:leading-7">
          {block.caption}
        </p>
      ) : null}
    </section>
  );
}

function SupportingDetail({
  comparisonId,
  detail,
}: {
  comparisonId: string;
  detail: ReportSupportingDetail;
}) {
  const headingId = `${comparisonId}-${detail.id}-heading`;

  return (
    <section
      aria-labelledby={headingId}
      className="mt-16 border-t border-dark-green/15 pt-10 sm:mt-20 sm:pt-12"
    >
      <h5
        id={headingId}
        className="text-center text-lg font-semibold tracking-[-0.015em] text-dark-green sm:text-xl"
      >
        {detail.label}
      </h5>

      <div
        className={
          detail.variant === "mobile"
            ? "mx-auto mt-6 w-full max-w-xs"
            : "mt-6 w-full"
        }
      >
        <LightboxImage
          image={detail.image}
          sizes={
            detail.variant === "mobile"
              ? "(min-width: 640px) 448px, 100vw"
              : "100vw"
          }
        />
      </div>

      <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-6 text-dark-green/70 sm:text-base sm:leading-7">
        {detail.caption}
      </p>
    </section>
  );
}

function ComparisonSection({
  comparisonId,
  isFirst,
  section,
}: {
  comparisonId: string;
  isFirst: boolean;
  section: ReportWebsiteComparisonSection;
}) {
  const headingId = `${comparisonId}-${section.id}-heading`;
  const sectionId = `${comparisonId}-${section.id}`;

  return (
    <section
      aria-labelledby={headingId}
      className={
        isFirst
          ? "mt-10 sm:mt-12"
          : "mt-20 border-t border-dark-green/15 pt-14 sm:mt-24 sm:pt-16"
      }
    >
      <h4
        id={headingId}
        className="text-balance text-2xl font-semibold tracking-[-0.025em] text-dark-green sm:text-3xl"
      >
        {section.heading}
      </h4>

      <div className="mt-8 grid gap-16 sm:mt-10 sm:gap-20">
        {section.blocks.map((block) => (
          <ComparisonBlock
            key={block.heading}
            block={block}
            comparisonId={sectionId}
          />
        ))}
      </div>

      {section.details?.map((detail) => (
        <SupportingDetail
          key={detail.id}
          comparisonId={sectionId}
          detail={detail}
        />
      ))}

      {section.note ? (
        <p className="mt-12 text-center text-xs font-medium uppercase tracking-[0.12em] text-dark-green/50 sm:text-sm">
          {section.note}
        </p>
      ) : null}
    </section>
  );
}

export function BeforeAfterComparison({
  comparison,
}: BeforeAfterComparisonProps) {
  const headingId = `${comparison.id}-heading`;

  return (
    <section
      aria-labelledby={headingId}
      className="border-t border-dark-green/10 bg-warm-white"
    >
      <div className="report-container report-section-space">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-report-orange">
          Website evidence
        </p>
        <h3
          id={headingId}
          className="mt-3 text-balance text-2xl font-semibold leading-tight tracking-[-0.025em] text-dark-green sm:text-3xl"
        >
          {comparison.heading}
        </h3>

        <div>
          {comparison.sections.map((section, index) => (
            <ComparisonSection
              key={section.id}
              comparisonId={comparison.id}
              isFirst={index === 0}
              section={section}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
