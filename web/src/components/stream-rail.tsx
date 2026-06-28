import { STREAM_STEPS } from "@/lib/constants";

type ActiveStep = "form" | "verify" | "paid" | null;

export function StreamRail({ active = null }: { active?: ActiveStep }) {
  const activeIndex = active
    ? STREAM_STEPS.findIndex((s) => s.key === active)
    : -1;

  return (
    <div className="relative w-full" aria-hidden="true">
      <div className="absolute left-[8%] right-[8%] top-5 h-px bg-border" />
      <div
        className="absolute left-[8%] top-5 h-px bg-stream transition-all duration-700 ease-out motion-reduce:transition-none"
        style={{
          width:
            activeIndex >= 0
              ? `${(activeIndex / (STREAM_STEPS.length - 1)) * 84}%`
              : "0%",
        }}
      />
      <ol className="relative flex justify-between">
        {STREAM_STEPS.map((step, i) => {
          const lit = activeIndex >= i;
          return (
            <li key={step.key} className="flex flex-col items-center gap-2">
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-xs font-mono font-medium transition-all duration-500 motion-reduce:transition-none ${
                  lit
                    ? "border-stream bg-stream/15 text-stream-glow shadow-[0_0_20px_rgba(212,146,42,0.25)]"
                    : "border-border bg-ink text-ghost"
                }`}
              >
                {step.label.slice(0, 1)}
              </span>
              <span
                className={`text-center text-[0.7rem] font-medium uppercase tracking-wider ${
                  lit ? "text-stream" : "text-ghost"
                }`}
              >
                {step.label}
              </span>
              <span className="hidden text-center text-[0.65rem] text-ghost sm:block">
                {step.desc}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
