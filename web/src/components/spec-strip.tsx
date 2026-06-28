import { STATS } from "@/lib/constants";

export function SpecStrip() {
  return (
    <dl className="grid border-b border-border sm:grid-cols-4">
      {STATS.map((stat, i) => (
        <div
          key={stat.label}
          className={`flex flex-col gap-0.5 px-4 py-5 sm:px-5 ${
            i > 0 ? "border-t border-border sm:border-t-0 sm:border-l" : ""
          }`}
        >
          <dt className="text-[0.65rem] uppercase tracking-[0.12em] text-ghost">
            {stat.label}
          </dt>
          <dd className="font-display text-2xl font-bold tabular-nums text-frost sm:text-[1.65rem]">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
