"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { Volume2 } from "lucide-react";

const PREVIEW_SECONDS = 10;

type WistiaPlayerEl = HTMLElement & {
  play?: () => void;
  pause?: () => void;
  currentTime?: number;
  muted?: boolean;
};

export default function VSL() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [engaged, setEngaged] = useState(false);
  const engagedRef = useRef(false);

  useEffect(() => {
    const player = wrapRef.current?.querySelector("wistia-player") as WistiaPlayerEl | null;
    if (!player) return;

    const onTimeUpdate = () => {
      if (!engagedRef.current && (player.currentTime ?? 0) >= PREVIEW_SECONDS) {
        player.currentTime = 0;
      }
    };

    player.addEventListener("timeupdate", onTimeUpdate);
    return () => player.removeEventListener("timeupdate", onTimeUpdate);
  }, []);

  const handleEngage = () => {
    if (engagedRef.current) return;
    engagedRef.current = true;
    setEngaged(true);

    const player = wrapRef.current?.querySelector("wistia-player") as WistiaPlayerEl | null;
    if (!player) return;
    player.muted = false;
    player.currentTime = 0;
    player.play?.();
  };

  return (
    <section className="py-16 lg:py-20">
      <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
      <Script
        src="https://fast.wistia.com/embed/sykw36g9wo.js"
        strategy="lazyOnload"
        type="module"
      />

      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div ref={wrapRef} className="relative neo-raised rounded-[2rem] p-3 sm:p-4">
          <style>{`
            wistia-player[media-id='sykw36g9wo']:not(:defined) {
              background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/sykw36g9wo/swatch');
              display: block;
              filter: blur(5px);
              padding-top: 56.25%;
              border-radius: 1.25rem;
            }
          `}</style>
          <div className="rounded-2xl overflow-hidden">
            {/* @ts-expect-error -- wistia-player is a custom element */}
            <wistia-player media-id="sykw36g9wo" aspect="1.7777777777777777" autoplay muted playsinline></wistia-player>
          </div>

          {!engaged && (
            <button
              type="button"
              onClick={handleEngage}
              aria-label="Play with sound"
              className="absolute inset-3 sm:inset-4 rounded-2xl group cursor-pointer"
            >
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full bg-black/70 text-white text-xs font-bold px-4 py-2 backdrop-blur-sm transition-transform group-hover:scale-105">
                <Volume2 size={14} />
                Tap for sound
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
