import { mainNavLinks, quickNavItems, trendingKeywords, utilityLinks } from "./data";

export function Header() {
  return (
    <>
      <div className="border-b border-black/5 bg-[#f3f4f8]/90">
        <div className="mx-auto flex h-11 w-full max-w-7xl items-center justify-between px-4 text-xs font-medium text-[#6b7280] sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto whitespace-nowrap">
            {utilityLinks.map((link) => (
              <a key={link} href="#" className="transition hover:text-[#111827]">
                {link}
              </a>
            ))}
          </div>
          <span className="hidden sm:block">Clone target · nol.interpark.com</span>
        </div>
      </div>

      <div className="border-b border-black/5 bg-white/86 backdrop-blur-sm">
        <div className="mx-auto flex h-10 w-full max-w-7xl items-center gap-4 overflow-hidden px-4 text-sm text-[#4b5563] sm:px-6 lg:px-8">
          <span className="shrink-0 rounded-full bg-[#f5f3ff] px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#7c3aed]">
            Trending now
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

      <header className="sticky top-0 z-30 border-b border-black/5 bg-white/88 backdrop-blur-md">
        <div className="mx-auto flex min-h-18 w-full max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#5b3df5] text-sm font-bold text-white shadow-[0_12px_30px_rgba(91,61,245,0.28)]">
                NO
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#5b3df5]">Notai Clone Lab</p>
                <h1 className="text-lg font-bold tracking-tight">nol.interpark.com</h1>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="hidden rounded-full border border-[#e5e7eb] bg-white px-4 py-2 text-sm font-semibold text-[#374151] md:block">
                Ngôn ngữ
              </button>
              <button className="rounded-full bg-[#111827] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-black">
                Đăng nhập
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <nav className="flex flex-wrap items-center gap-6 text-sm font-semibold text-[#374151]">
              {mainNavLinks.map((link) => (
                <a key={link} href="#" className="transition hover:text-[#111827]">
                  {link}
                </a>
              ))}
            </nav>

            <div className="flex flex-wrap gap-2">
              {quickNavItems.map((item) => (
                <span key={item} className="rounded-full bg-[#f8f8fc] px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#6b7280] ring-1 ring-black/4">
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
