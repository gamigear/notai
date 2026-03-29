import Image from "next/image";
import { mainNavLinks, quickNavItems, trendingKeywords, utilityLinks } from "./data";

export function Header() {
  return (
    <>
      <div className="border-b border-black/5 bg-[#f5f6fa]">
        <div className="mx-auto flex h-10 w-full max-w-7xl items-center justify-between px-4 text-[12px] font-medium text-[#6b7280] sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto whitespace-nowrap">
            {utilityLinks.map((link) => (
              <a key={link} href="#" className="transition hover:text-[#111827]">
                {link}
              </a>
            ))}
          </div>
          <span className="hidden sm:block">여행과 공연, 전시 예약을 한번에</span>
        </div>
      </div>

      <div className="border-b border-black/5 bg-white">
        <div className="mx-auto flex h-10 w-full max-w-7xl items-center gap-4 overflow-hidden px-4 text-sm text-[#4b5563] sm:px-6 lg:px-8">
          <span className="shrink-0 rounded-full bg-[#eef1ff] px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#4154ff]">
            지금 인기
          </span>
          <div className="flex flex-wrap gap-4 whitespace-nowrap">
            {trendingKeywords.map((item) => (
              <span key={item} className="font-medium text-[#6b7280]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b border-black/5 bg-white/92 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="https://tour-web-assets.interparkcdn.net/assets/int-frontend/nol-header/nol-interpark-logo-multiline.svg"
                alt="NOL 인터파크"
                width={122}
                height={44}
                className="h-11 w-auto"
                priority
              />
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#4154ff]">INTERPARK</p>
                <h1 className="text-lg font-black tracking-[-0.03em] text-[#1c1c1e]">전세계 여행 할인 & 인기 공연 예매</h1>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="hidden rounded-full border border-[#e5e7eb] bg-white px-4 py-2 text-sm font-semibold text-[#374151] md:block">
                KRW · 한국어
              </button>
              <button className="rounded-full bg-[#1c1c1e] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-black">
                로그인
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <nav className="flex flex-wrap items-center gap-6 text-sm font-bold text-[#29292d]">
              {mainNavLinks.map((link) => (
                <a key={link} href="#" className="transition hover:text-[#4154ff]">
                  {link}
                </a>
              ))}
            </nav>

            <div className="flex flex-wrap gap-2">
              {quickNavItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#eceef5] bg-[#fafbff] px-3 py-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#6b7280]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
