import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#services", label: "Services" },
  { href: "#proof", label: "Proof" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-[#FAFAFC]/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logos/maa-icon.png" alt="MAA Tech Agency" width={32} height={32} />
          <span className="font-extrabold text-base tracking-tight text-slate-900">
            MAA TECH <span className="font-medium text-slate-500">AGENCY</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
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
          href="/contact"
          className="neo-btn inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-bold text-[#6C3FF5]"
        >
          Book Your Tech Freedom Call
        </a>
      </div>
    </header>
  );
}
