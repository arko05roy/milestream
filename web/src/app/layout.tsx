import type { Metadata } from "next";
import { IBM_Plex_Mono, Outfit, Syne } from "next/font/google";
import { Nav } from "@/components/nav";
import { SiteFooter } from "@/components/site-footer";
import { DemoStoreProvider } from "@/hooks/use-demo-store";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "MileStream — Contractor credentials on HACD",
  description:
    "PoW-backed contractor credentials on HACD. Hacash HVM milestone payments on the roadmap.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${outfit.variable} ${ibmPlexMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col antialiased">
        <DemoStoreProvider>
          <Nav />
          <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-10 sm:px-8">
            {children}
          </main>
          <SiteFooter />
        </DemoStoreProvider>
      </body>
    </html>
  );
}
