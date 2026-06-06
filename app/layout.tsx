import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Response Differ — Spot API changes before they break",
  description: "Monitors API responses and alerts on schema changes or new fields. Built for backend developers using third-party APIs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="44dbc853-649c-4fcc-9c92-3b422201b6d6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-mono">
        {children}
      </body>
    </html>
  );
}
