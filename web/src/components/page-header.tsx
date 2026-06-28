export function PageHeader({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="mb-8">
      {eyebrow && (
        <p className="mb-2 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-ghost">
          {eyebrow}
        </p>
      )}
      <h1 className="font-display text-3xl font-bold tracking-tight text-frost sm:text-4xl">
        {title}
      </h1>
      {lead && <p className="mt-3 max-w-2xl text-base leading-relaxed text-ghost">{lead}</p>}
      {children}
    </header>
  );
}
