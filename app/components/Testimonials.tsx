const testimonials = [
  {
    name: "Jeremy",
    business: "Ridgeback Builders — Construction",
    video: "/testimonials/testimonial-1.mp4",
    poster: "/testimonials/testimonial-1-poster.jpg",
  },
  {
    name: "Jason",
    business: "Vending Business",
    video: "/testimonials/testimonial-2.mp4",
    poster: "/testimonials/testimonial-2-poster.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[minmax(0,1fr)_auto] gap-16 items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-[#6C3FF5] mb-3">
            In Their Words
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-5 text-balance">
            Client testimonials
          </h2>
          <p className="text-slate-500 leading-relaxed max-w-md">
            Real clients, on camera, unscripted. We'd rather show you two
            honest 30-second clips than write copy that sounds good and
            proves nothing.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 w-full lg:w-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 w-full lg:w-56"
            >
              <video
                controls
                preload="metadata"
                poster={t.poster}
                className="w-full aspect-[9/16] object-cover bg-black"
              >
                <source src={t.video} type="video/mp4" />
              </video>
              <div className="p-4">
                <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                <p className="text-xs text-slate-500">{t.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
