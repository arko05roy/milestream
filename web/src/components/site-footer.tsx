export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto max-w-5xl px-5 py-8 text-sm text-ghost">
        <p>
          MSTR is a utility credential, not an investment. MileStream is not a licensed
          escrow service. Payments run through GrowStreams.
        </p>
        <p className="mt-2">
          Arko Roy —{" "}
          <a href="mailto:itsarko619@gmail.com" className="text-proof hover:text-stream">
            itsarko619@gmail.com
          </a>{" "}
          —{" "}
          <a
            href="https://x.com/notarkoroy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-proof hover:text-stream"
          >
            @notarkoroy
          </a>
        </p>
      </div>
    </footer>
  );
}
