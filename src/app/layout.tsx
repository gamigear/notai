import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const primarySans = Noto_Sans_KR({
  variable: "--font-primary-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  display: "swap",
});

const secondarySans = Inter({
  variable: "--font-secondary-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Notai Clone Lab · NOL Frontend Rebuild",
  description: "Next.js frontend rebuild focused on UI parity for nol.interpark.com.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${primarySans.variable} ${secondarySans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
