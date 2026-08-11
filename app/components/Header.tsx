import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logos/maa-icon.png" alt="MAA Tech Agency" width={36} height={36} className="rounded" />
          <span className="font-extrabold text-lg tracking-tight text-slate-900">
            MAA TECH <span className="font-medium text-slate-500">AGENCY</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-[#6C3FF5] px-6 py-2.5 text-sm font-bold text-white hover:bg-[#5a32d4] transition-colors"
        >
          Book a Call
        </a>
      </div>
    </header>
  );
}
