import Image from "next/image";
import Link from "next/link";
import { mainNavLinks, quickNavItems, trendingKeywords, utilityLinks } from "./data";

const utilityHref = (label: string) => {
  if (label === "투어") return "/search";
  if (label === "티켓") return "/ticket";
  if (label === "고객센터") return "/support";
  return "/";
};

const navHref = (label: string) => {
  if (label === "투어") return "/search";
  if (label === "티켓") return "/ticket";
  if (label === "혜택") return "/mypage";
  return "/";
};

const quickHref = (label: string) => {
  if (label === "투어") return "/search";
  if (label === "티켓" || label === "공연") return "/ticket";
  if (label === "호텔" || label === "항공") return "/search";
  return "/";
};

const trendingHref = (item: string) => {
  if (item.includes("뮤지컬")) return "/ticket";
  return "/search";
};

export function Header() {
  return (
    <>
      <div className="hidden border-b border-black/5 bg-[#f5f6fa] md:block">
        <div className="mx-auto flex h-10 w-full max-w-7xl items-center justify-between px-4 text-[12px] font-medium text-[#6b7280] sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto whitespace-nowrap">
            {utilityLinks.map((link) => (
              <Link key={link} href={utilityHref(link)} className="transition hover:text-[#111827]">
                {link}
              </Link>
            ))}
          </div>
          <span className="hidden sm:block">여행과 공연, 전시 예약을 한번에</span>
        </div>
      </div>

      <div className="hidden border-b border-black/5 bg-white md:block">
        <div className="mx-auto flex h-10 w-full max-w-7xl items-center gap-4 overflow-hidden px-4 text-sm text-[#4b5563] sm:px-6 lg:px-8">
          <span className="shrink-0 rounded-full bg-[#eef1ff] px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#4154ff]">
            지금 인기
          </span>
          <div className="flex flex-wrap gap-4 whitespace-nowrap">
            {trendingKeywords.map((item) => (
              <Link key={item} href={trendingHref(item)} className="font-medium text-[#6b7280] transition hover:text-[#111827]">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b border-black/5 bg-white/92 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            <Link href="/" className="flex min-w-0 items-center gap-3">
              <Image
                src="https://tour-web-assets.interparkcdn.net/assets/int-frontend/nol-header/nol-interpark-logo-multiline.svg"
                alt="NOL 인터파크"
                width={122}
                height={44}
                className="h-9 w-auto sm:h-11"
                priority
              />
              <div className="min-w-0">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#4154ff] sm:text-[11px]">INTERPARK</p>
                <h1 className="truncate text-sm font-black tracking-[-0.03em] text-[#1c1c1e] sm:text-lg">전세계 여행 할인 & 인기 공연 예매</h1>
              </div>
            </Link>

            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <button className="hidden rounded-full border border-[#e5e7eb] bg-white px-4 py-2 text-sm font-semibold text-[#374151] md:block">
                KRW · 한국어
              </button>
              <Link href="/mypage" className="rounded-full bg-[#1c1c1e] px-4 py-2 text-xs font-semibold text-white transition hover:bg-black sm:px-5 sm:py-2.5 sm:text-sm">
                마이페이지
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <nav className="hidden flex-wrap items-center gap-6 text-sm font-bold text-[#29292d] md:flex">
              {mainNavLinks.map((link) => (
                <Link key={link} href={navHref(link)} className="transition hover:text-[#4154ff]">
                  {link}
                </Link>
              ))}
            </nav>

            <div className="hidden flex-wrap gap-2 md:flex">
              {quickNavItems.map((item) => (
                <Link
                  key={item}
                  href={quickHref(item)}
                  className="rounded-full border border-[#eceef5] bg-[#fafbff] px-3 py-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#6b7280]"
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="flex gap-2 overflow-x-auto whitespace-nowrap md:hidden">
              {mainNavLinks.map((link, index) => (
                <Link
                  key={link}
                  href={navHref(link)}
                  className={`rounded-full px-3 py-2 text-xs font-bold ${index === 0 ? "bg-[#4154ff] text-white" : "bg-[#f3f4f8] text-[#4b5563]"}`}
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
