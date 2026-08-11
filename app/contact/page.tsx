import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import QualifyForm from "../components/QualifyForm";

export const metadata: Metadata = {
  title: "Book Your Tech Freedom Call | MAA Tech Agency",
  description: "A short, no-pitch assessment of your current technical setup and needs.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="contact" className="flex-1 py-20">
        <div className="mx-auto max-w-xl px-6 lg:px-10 text-center mb-10">
          <p className="text-sm font-bold uppercase tracking-widest text-[#6C3FF5] mb-3">
            Book Your Tech Freedom Call
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 text-balance">
            15 minutes. No pitch deck.
          </h1>
          <p className="text-slate-500 leading-relaxed">
            We&apos;ll talk through your current setup, what&apos;s actually
            costing you time, and whether we&apos;re the right fit, before
            anything is decided.
          </p>
        </div>
        <div className="mx-auto max-w-xl px-6 lg:px-10">
          <QualifyForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
