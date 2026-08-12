import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

const navLinks = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#services", label: "Services" },
  { href: "/#proof", label: "Proof" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-[#FAFAFC]/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image src="/logos/maa-logo.png" alt="MAA Tech Agency" width={583} height={176} className="h-7 sm:h-8 w-auto" priority />
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
          className="hidden lg:inline-flex neo-btn items-center justify-center rounded-full px-6 py-2.5 text-sm font-bold text-[#6C3FF5]"
        >
          Book Your Tech Freedom Call
        </a>

        <a
          href="/contact"
          aria-label="Book your tech freedom call"
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#6C3FF5] text-white flex-shrink-0"
        >
          <Phone size={18} strokeWidth={2.25} />
        </a>
      </div>
    </header>
  );
}
