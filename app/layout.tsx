import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Genau — Learn German A1",
  description: "Self-paced A1 German learning for newcomers in Germany",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
