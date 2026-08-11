import Script from "next/script";

const videos = [
  { mediaId: "7xs8re946a", aspect: 0.5660377358490566 },
  { mediaId: "t8qc1fvn71", aspect: 0.5625 },
];

export default function Testimonials() {
  return (
    <section id="proof" className="py-24">
      <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
      {videos.map((v) => (
        <Script
          key={v.mediaId}
          src={`https://fast.wistia.com/embed/${v.mediaId}.js`}
          strategy="lazyOnload"
          type="module"
        />
      ))}

      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[minmax(0,1fr)_auto] gap-16 items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-[#6C3FF5] mb-3">
            Proof
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-5 text-balance">
            Real clients, on camera
          </h2>
          <p className="text-slate-500 leading-relaxed max-w-md">
            No stock testimonials, no written quotes we typed ourselves.
            Two clients, unscripted, on what actually changed.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 w-full lg:w-auto">
          {videos.map((v) => (
            <div key={v.mediaId} className="neo-raised rounded-2xl overflow-hidden p-2 w-full lg:w-56">
              <style>{`
                wistia-player[media-id='${v.mediaId}']:not(:defined) {
                  background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${v.mediaId}/swatch');
                  display: block;
                  filter: blur(5px);
                  padding-top: ${(1 / v.aspect) * 100}%;
                  border-radius: 1rem;
                }
              `}</style>
              {/* @ts-expect-error -- wistia-player is a custom element */}
              <wistia-player media-id={v.mediaId} aspect={v.aspect}></wistia-player>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
