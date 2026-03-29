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
  title: "NOL 인터파크 | 전세계 여행 할인 & 인기 공연 예매",
  description:
    "여행과 공연, 전시 예약을 한번에 | 항공, 전세계 숙소, 액티비티 특가 | 연극, 뮤지컬, 콘서트, 클래식 티켓 예매까지",
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
