import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid sm:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <Image src="/logos/maa-icon.png" alt="MAA Tech Agency" width={32} height={32} className="rounded" />
            <span className="font-extrabold text-white">
              MAA TECH <span className="font-medium text-white/50">AGENCY</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            AI automation, web development, and growth systems for real businesses.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>AI Automation &amp; Agents</li>
            <li>Web &amp; App Development</li>
            <li>SEO &amp; Local Growth</li>
            <li>Ad Tracking &amp; Reporting</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Get In Touch</h4>
          <a href="mailto:hello@maatechllc.com" className="text-sm hover:text-white transition-colors">
            hello@maatechllc.com
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="text-center text-xs text-white/40">
          © {new Date().getFullYear()} MAA Tech Agency LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
