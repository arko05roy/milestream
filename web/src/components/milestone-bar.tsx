export function MilestoneBar() {
  return (
    <div>
      {/* Route checkpoint track */}
      <div className="flex items-center gap-0">
        {/* Start node — funded */}
        <div className="relative shrink-0">
          <div className="h-3.5 w-3.5 rounded-full border-2 border-stream bg-ink" />
          <div className="absolute inset-0 rounded-full bg-stream/25 blur-[4px]" aria-hidden="true" />
        </div>
        {/* Funded segment */}
        <div className="h-px flex-[25] bg-stream" />
        {/* Split node */}
        <div className="shrink-0 h-3.5 w-3.5 rounded-full border-2 border-stream/50 bg-ink" />
        {/* Locked segment */}
        <div className="h-px flex-[75] bg-border/60" />
        {/* Delivery node — locked */}
        <div className="shrink-0 h-3.5 w-3.5 rounded-full border-2 border-border/50 bg-ink" />
      </div>

      <div className="mt-2.5 flex justify-between">
        <div className="space-y-0.5">
          <p className="font-mono text-xs font-medium text-stream">25%</p>
          <p className="text-[0.65rem] text-ghost">Job start</p>
        </div>
        <div className="space-y-0.5 text-right">
          <p className="font-mono text-xs font-medium text-ghost">75%</p>
          <p className="text-[0.65rem] text-ghost">Delivery</p>
        </div>
      </div>
    </div>
  );
}
