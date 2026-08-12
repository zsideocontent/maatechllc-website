import type { Metadata } from "next";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

export const metadata: Metadata = {
  title: "Case Studies | MAA Tech Agency",
  description: "Real MAA Tech Agency results: problem, intervention, and measurable outcome, for every client.",
};

const caseStudies = [
  {
    client: "CR8 Health",
    title: "SEO that scaled two locations to $40K/month, one to $200K",
    image: "/proof/cr8-health-seo-scale.png",
    problem: "Multiple clinic locations, inconsistent search visibility, and no clear picture of which channel actually drove revenue.",
    intervention: "A full SEO overhaul across every location, paired with a personalized Google + Meta ads tracking dashboard built from scratch.",
    result: "Two locations scaled to $40K/month each, and one location to $200K/month, all trackable in one place.",
  },
  {
    client: "Integrative Medicine US",
    title: "From low visibility to ranked #1 on Google",
    image: "/proof/integrative-med-seo.png",
    problem: "Low organic visibility and no CRM or automation connecting leads to actual follow-up.",
    intervention: "A full SEO campaign combined with a complete GoHighLevel system built from the ground up.",
    result: "Ranked #1 on Google for their core service terms, with a system that actually captures and follows up on every lead.",
  },
  {
    client: "CR8 Health",
    title: "Ad Tracking & ROAS Visibility",
    image: "/proof/cr8-health-crm.png",
    problem: "Multi-location Google Ads spend, leads, and payments lived in separate places. No unified way to see what was actually converting, or catch a disapproved ad before it cost a day of wasted spend.",
    intervention: "Built a live ad-tracking dashboard: Google Ads spend synced daily, every call/form lead logged automatically, campaign health checks running in the background.",
    result: "Real-time visibility into what's working, by location, with zero manual spreadsheet work required.",
  },
  {
    client: "Vibrant Health Center",
    title: "Website, SEO, and EHR, as one connected system",
    image: "/proof/vibrant-health.png",
    problem: "Needed a stronger web presence and a way to actually rank for local search, without disconnected tools for scheduling and records.",
    intervention: "Built their complete website with GoHighLevel integration and proper EHR integration, plus an SEO campaign.",
    result: "A single connected system for the site, scheduling, and patient records, instead of three disconnected tools.",
  },
  {
    client: "CR8 Health",
    title: "A complete clinic system, built in GoHighLevel",
    image: "/proof/cr8-ghl-automation.png",
    problem: "The sales-to-offboarding process for the clinic was manual and scattered across tools.",
    intervention: "Built a complete workflow system in GoHighLevel covering the entire client lifecycle, from first contact to offboarding.",
    result: "One system running sales, patient lifecycle, and general operations end-to-end.",
  },
  {
    client: "Integrative Medicine US",
    title: "A personalized AI voice agent",
    image: "/proof/integrative-med-voice-ai.png",
    problem: "Inbound calls needed answering around the clock, without hiring more front-desk staff.",
    intervention: "Built a personalized AI voice agent with custom actions, including escalating anything it can't confidently handle.",
    result: "Calls get handled automatically, with a clear handoff to a real person whenever one is actually needed.",
  },
  {
    client: "Uqab Corporation",
    title: "A complete tech foundation, from zero",
    image: "/proof/uqab-corporation.png",
    problem: "No unified tech foundation to support a multi-industry corporate brand.",
    intervention: "Built their entire tech infrastructure, including their website, from the ground up.",
    result: "A single reliable foundation the business can keep building on as it grows.",
  },
  {
    client: "NOXNETWORK",
    title: "Infrastructure to run an entire editor pipeline",
    image: "/proof/noxnetwork.png",
    problem: "Needed infrastructure to manage a growing roster of video editors and paid projects.",
    intervention: "Built end-to-end tech infrastructure, including a dashboard for managing editors.",
    result: "One system running the entire editor pipeline, instead of ad hoc spreadsheets and messages.",
  },
  {
    client: "MAA Tech (in-house)",
    title: "Our own AI agent layer",
    image: "/proof/maa-taskboard.png",
    problem: "Support tickets and internal tasks needed a faster, more structured way to get handled as the team grew.",
    intervention: "Built our own AI agent layer on top of our internal taskboard, handling tickets automatically where it can.",
    result: "The same AI-diagnosis-and-escalation system this website describes, running on our own day-to-day operations.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-widest text-[#6C3FF5] mb-3">
            Case Studies
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-14 text-balance">
            Real clients, real systems, real results
          </h1>

          <div className="space-y-20">
            {caseStudies.map((cs) => (
              <div key={cs.image}>
                <p className="text-xs font-bold uppercase tracking-widest text-[#6C3FF5] mb-2">
                  {cs.client}
                </p>
                <h2 className="text-2xl font-extrabold text-slate-900 mb-6 text-balance">
                  {cs.title}
                </h2>

                <div className="neo-raised rounded-[1.75rem] p-4 sm:p-5 mb-6">
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      width={900}
                      height={560}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-5">
                  <div className="neo-raised-sm rounded-2xl p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Problem</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{cs.problem}</p>
                  </div>
                  <div className="neo-raised-sm rounded-2xl p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Intervention</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{cs.intervention}</p>
                  </div>
                  <div className="neo-raised-sm rounded-2xl p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Result</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{cs.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <CTASection />
      <Footer />
    </>
  );
}
