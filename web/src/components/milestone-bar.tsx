export function MilestoneBar() {
  return (
    <div>
      <div className="flex h-2 overflow-hidden rounded-full">
        <div className="w-1/4 bg-stream" />
        <div className="w-3/4 bg-stream/40" />
      </div>
      <div className="mt-2 flex justify-between text-xs text-ghost">
        <span>25% on start</span>
        <span>75% on delivery</span>
      </div>
    </div>
  );
}
