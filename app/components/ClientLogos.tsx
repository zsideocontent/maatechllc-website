import Image from "next/image";

const logos = [
  { src: "/logos/clients/cr8health.png", alt: "CR8 Health", h: 26, dark: true },
  { src: "/logos/clients/uqab.png", alt: "Uqab Corporation", h: 40, dark: true },
  { src: "/logos/clients/integrative-medicine.png", alt: "Integrative Medicine US", h: 36 },
  { src: "/logos/clients/vibrant-health.png", alt: "Vibrant Health Center", h: 46, dark: true },
];

export default function ClientLogos() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/60 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
          Trusted by businesses we actually run tech for
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className={`flex items-center justify-center rounded-xl px-5 py-3 ${
                logo.dark ? "bg-slate-800" : ""
              }`}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={logo.h}
                style={{ height: logo.h, width: "auto" }}
                className="object-contain grayscale-0 opacity-90"
              />
            </div>
          ))}
          <div className="flex items-center justify-center px-5 py-3">
            <span className="text-2xl font-black tracking-tight text-slate-800">
              NOX<span className="text-[#6C3FF5]">NETWORK</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
