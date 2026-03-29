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
  metadataBase: new URL("https://notai-gamigear-gamigears-projects.vercel.app"),
  title: "NOL 인터파크 | 전세계 여행 할인 & 인기 공연 예매",
  description:
    "여행과 공연, 전시 예약을 한번에 | 항공, 전세계 숙소, 액티비티 특가 | 연극, 뮤지컬, 콘서트, 클래식 티켓 예매까지",
  keywords: [
    "놀유니버스",
    "nol",
    "놀인터파크",
    "인터파크",
    "인터파크투어",
    "인터파크티켓",
    "여행",
    "호텔",
    "레저",
    "티켓",
    "뮤지컬",
    "연극",
    "콘서트",
    "전시",
    "공연",
    "항공권",
    "해외여행",
    "국내여행",
    "제주도",
    "홍콩",
    "오사카",
    "싱가포르",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NOL 인터파크 | 전세계 여행 할인 & 인기 공연 예매",
    description:
      "여행과 공연, 전시 예약을 한번에 | 항공, 전세계 숙소, 액티비티 특가 | 연극, 뮤지컬, 콘서트, 클래식 티켓 예매까지",
    url: "/",
    siteName: "NOL 인터파크",
    images: [
      {
        url: "https://ticketimage.interpark.com/TicketImage/og/og_interpark.png",
        width: 1200,
        height: 630,
        alt: "NOL 인터파크",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOL 인터파크 | 전세계 여행 할인 & 인기 공연 예매",
    description:
      "여행과 공연, 전시 예약을 한번에 | 항공, 전세계 숙소, 액티비티 특가 | 연극, 뮤지컬, 콘서트, 클래식 티켓 예매까지",
    images: ["https://ticketimage.interpark.com/TicketImage/og/og_interpark.png"],
  },
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
