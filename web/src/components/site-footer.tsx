export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:px-8 md:grid-cols-[1fr_auto] md:items-end">
        <p className="max-w-lg text-sm leading-relaxed text-ghost">
          MSTR is a utility credential, not an investment. MileStream is not a
          licensed escrow service. Payments run through GrowStreams.
        </p>
        <div className="text-sm text-ghost md:text-right">
          <p className="font-medium text-frost/80">Arko Roy</p>
          <p className="mt-1">
            <a
              href="mailto:itsarko619@gmail.com"
              className="text-proof underline-offset-2 hover:text-stream hover:underline"
            >
              itsarko619@gmail.com
            </a>
            {" · "}
            <a
              href="https://x.com/notarkoroy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-proof underline-offset-2 hover:text-stream hover:underline"
            >
              @notarkoroy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
