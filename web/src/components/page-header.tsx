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
    <header className="mb-8 animate-fade-up">
      {eyebrow && (
        <p className="mb-3 inline-block border-l-2 border-stream/70 pl-3 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-stream">
          {eyebrow}
        </p>
      )}
      <h1 className="font-display text-3xl font-bold tracking-tight text-frost sm:text-4xl">
        {title}
      </h1>
      {lead && (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-ghost">{lead}</p>
      )}
      {children}
    </header>
  );
}
