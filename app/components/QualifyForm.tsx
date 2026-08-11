"use client";

import { useState } from "react";

export default function QualifyForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/qualify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="neo-raised rounded-[2rem] p-10 text-center">
        <h3 className="text-xl font-bold text-slate-800 mb-2">Got it.</h3>
        <p className="text-slate-500">
          We&apos;ll reach out to schedule your Tech Freedom Call shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="neo-raised rounded-[2rem] p-8 sm:p-10">
      <div className="space-y-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
            Full name
          </label>
          <input
            name="name" type="text" required
            className="w-full neo-pressed rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
            Work email
          </label>
          <input
            name="email" type="email" required
            className="w-full neo-pressed rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
            Company
          </label>
          <input
            name="company" type="text"
            className="w-full neo-pressed rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
            What's currently the biggest technical headache?
          </label>
          <textarea
            name="biggestProblem" rows={3}
            className="w-full neo-pressed rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
          />
        </div>
        <button
          type="submit" disabled={status === "submitting"}
          className="w-full rounded-full bg-[#6C3FF5] px-6 py-4 text-sm font-bold text-white hover:bg-[#5a32d4] transition-colors disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Book Your Tech Freedom Call →"}
        </button>
        {status === "error" && (
          <p className="text-sm text-red-500 text-center">Something went wrong, please try again.</p>
        )}
      </div>
    </form>
  );
}
