const oldWaySteps = [
  "Find a developer",
  "Check availability",
  "Explain the business",
  "Explain the tech stack",
  "Give access to systems",
  "Wait",
  "Hope it's fixed correctly",
  "Repeat next time",
];

const problemExamples = [
  "Website breaks",
  "Integration fails",
  "Automation stops working",
  "API breaks",
  "CRM issue",
  "New feature needed",
];

export default function Problem() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-[#6C3FF5] mb-3">
            The Problem
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 text-balance">
            Something breaks. Then the real problem starts.
          </h2>
          <p className="text-slate-500 leading-relaxed">
            A five-minute fix turns into a one or two day business
            interruption, not because the fix is hard, but because of
            everything that happens before someone even starts on it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-4xl mx-auto mb-14">
          <div className="neo-pressed rounded-3xl p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">
              The Old Way
            </p>
            <ol className="space-y-3">
              {oldWaySteps.map((step, i) => (
                <li key={step} className="flex items-center gap-3 text-sm text-slate-500">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-white text-[11px] font-bold text-slate-400 flex items-center justify-center">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
            {problemExamples.map((p) => (
              <span
                key={p}
                className="neo-raised-sm rounded-full px-4 py-2 text-sm font-semibold text-slate-600"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        <p className="text-center text-lg font-bold text-slate-800 max-w-xl mx-auto text-balance">
          Recognize this? That&apos;s exactly what MAA Tech removes.
        </p>
      </div>
    </section>
  );
}
