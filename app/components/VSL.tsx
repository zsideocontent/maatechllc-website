import Script from "next/script";

export default function VSL() {
  return (
    <section className="py-16 lg:py-20">
      <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
      <Script
        src="https://fast.wistia.com/embed/sykw36g9wo.js"
        strategy="lazyOnload"
        type="module"
      />

      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="neo-raised rounded-[2rem] p-3 sm:p-4">
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
            <wistia-player media-id="sykw36g9wo" aspect="1.7777777777777777"></wistia-player>
          </div>
        </div>
      </div>
    </section>
  );
}
