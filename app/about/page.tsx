import type { Metadata } from "next";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

export const metadata: Metadata = {
  title: "About | MAA Tech Agency",
  description: "Why MAA Tech Agency exists, and who's behind it.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-widest text-[#6C3FF5] mb-3">
            About
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-10 text-balance">
            Why MAA Tech exists
          </h1>

          <div className="neo-raised rounded-[2rem] p-8 sm:p-10 mb-10 flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <div className="neo-pressed rounded-2xl p-2 flex-shrink-0">
              <Image
                src="/founder.png"
                alt="Muhammad Ali Ahmad, Founder of MAA Tech Agency"
                width={140}
                height={140}
                className="rounded-xl object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-slate-800 text-lg mb-1">Muhammad Ali Ahmad</p>
              <p className="text-sm text-[#6C3FF5] font-semibold mb-4">Founder, MAA Tech Agency</p>
              <p className="text-sm text-slate-500 leading-relaxed">
                MAA Tech Agency is founder-led and hands-on, not a reseller
                of other people's work. The same systems we build for
                clients, ad tracking, task management, AI-assisted support,
                run our own agency day to day.
              </p>
            </div>
          </div>

          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              Most businesses that depend on technology end up managing a
              rotating cast of freelancers instead of actually running their
              business. Every new issue means finding someone, explaining
              the stack from scratch, and hoping it gets fixed right.
            </p>
            <p>
              MAA Tech exists to remove that. One team, one point of
              contact, that already understands your business, so
              &quot;something broke&quot; turns into a message instead of a
              two-day search.
            </p>
          </div>
        </div>
      </main>
      <CTASection />
      <Footer />
    </>
  );
}
