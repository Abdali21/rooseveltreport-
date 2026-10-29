"use client";

import Image from "next/image";
import { Maximize2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import type { ReportEvidence } from "@/data/report";

interface LightboxImageProps {
  image: ReportEvidence;
  sizes: string;
}

export function LightboxImage({ image, sizes }: LightboxImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const trigger = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    const focusFrame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
      }

      if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="dialog"
        aria-label={`Enlarge image: ${image.alt}`}
        className="group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-dark-green/10 bg-white"
        onClick={() => setIsOpen(true)}
      >
        <Image
          alt={image.alt}
          className="h-auto w-full object-contain"
          height={image.height}
          sizes={sizes}
          src={image.src}
          width={image.width}
        />
        <span
          aria-hidden="true"
          className="print-hidden absolute bottom-3 right-3 inline-flex size-10 items-center justify-center rounded-full bg-dark-green/90 text-warm-white shadow-lg transition-colors group-hover:bg-report-orange"
        >
          <Maximize2 className="size-4" strokeWidth={1.8} />
        </span>
      </button>

      {isOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Enlarged image: ${image.alt}`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-dark-green/95 p-4 sm:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <button
            ref={closeButtonRef}
            type="button"
            className="absolute right-4 top-4 z-10 inline-flex size-12 items-center justify-center rounded-full border border-warm-white/25 bg-dark-green text-warm-white transition-colors hover:bg-report-orange sm:right-6 sm:top-6"
            onClick={() => setIsOpen(false)}
          >
            <X aria-hidden="true" className="size-6" strokeWidth={1.8} />
            <span className="sr-only">Close enlarged image</span>
          </button>

          <div className="flex max-h-[calc(100svh-2rem)] max-w-[min(96rem,calc(100vw-2rem))] items-center justify-center sm:max-h-[calc(100svh-4rem)] sm:max-w-[min(96rem,calc(100vw-4rem))]">
            <Image
              alt={image.alt}
              className="max-h-[calc(100svh-2rem)] h-auto w-auto max-w-full object-contain sm:max-h-[calc(100svh-4rem)]"
              height={image.height}
              sizes="100vw"
              src={image.src}
              width={image.width}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
