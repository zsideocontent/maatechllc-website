import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-16 grid sm:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <Image src="/logos/maa-icon.png" alt="MAA Tech Agency" width={28} height={28} className="rounded-md" />
            <span className="font-extrabold text-slate-800 text-sm">
              MAA TECH <span className="font-medium text-slate-400">AGENCY</span>
            </span>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
            Your dedicated tech team, without the cost of hiring one.
          </p>
        </div>

        <div>
          <h4 className="text-slate-800 font-bold text-sm mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            <li><Link href="/about" className="hover:text-slate-800 transition-colors">About</Link></li>
            <li><Link href="/case-studies" className="hover:text-slate-800 transition-colors">Case Studies</Link></li>
            <li><a href="/#pricing" className="hover:text-slate-800 transition-colors">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-slate-800 font-bold text-sm mb-4">Get In Touch</h4>
          <a href="mailto:hello@maatechllc.com" className="text-sm text-slate-500 hover:text-slate-800 transition-colors">
            hello@maatechllc.com
          </a>
        </div>
      </div>

      <div className="border-t border-slate-200/70 py-6">
        <p className="text-center text-xs text-slate-400">
          © {new Date().getFullYear()} MAA Tech Agency LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
