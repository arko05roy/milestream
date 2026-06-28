import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-stream text-ink font-medium hover:bg-stream-glow focus-visible:ring-stream",
  secondary:
    "border border-border text-frost hover:border-stream hover:text-stream focus-visible:ring-stream",
  ghost: "text-proof hover:text-stream-glow focus-visible:ring-proof",
};

export function Button({
  variant = "secondary",
  className = "",
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant }) {
  return (
    <Link
      className={`inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${styles[variant]} ${className}`}
      {...props}
    />
  );
}

export function ButtonNative({
  variant = "secondary",
  className = "",
  ...props
}: ComponentProps<"button"> & { variant?: Variant }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:opacity-50 ${styles[variant]} ${className}`}
      {...props}
    />
  );
}
