"use client";

/**
 * <ClinicVideo> — Lazy-loaded HTML5 video player for the clinic tour clip
 * that ships from public/media/. Kept as a small client component so the
 * rest of the About section stays server-rendered.
 */

import { useState } from "react";

export function ClinicVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-[color:var(--color-brand-navy)] aspect-video shadow-[var(--shadow-elevated)]">
      <video
        src="/media/rutherford-clinic-of-chiropractic-gbsug8zma-a0e0qr-1.mp4"
        poster="/media/chiropractic-care-murfreesboro-tn.jpg"
        controls={playing}
        preload="metadata"
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        onPlay={() => setPlaying(true)}
      >
        <track kind="captions" />
      </video>

      {!playing && (
        <button
          type="button"
          onClick={(e) => {
            const video = e.currentTarget
              .previousElementSibling as HTMLVideoElement | null;
            if (video) {
              video.controls = true;
              void video.play();
              setPlaying(true);
            }
          }}
          aria-label="Play clinic tour"
          className="absolute inset-0 grid place-items-center bg-black/25 hover:bg-black/15 transition-colors"
        >
          <span className="grid h-20 w-20 place-items-center rounded-full bg-white/95 text-[color:var(--color-brand-blue)] shadow-[var(--shadow-elevated)] transition-transform duration-300 hover:scale-105">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
