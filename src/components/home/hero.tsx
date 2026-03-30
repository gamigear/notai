import Link from "next/link";
import { companionOptions, heroStats, searchFields, searchTabs, serviceShortcuts } from "./data";

const shortcutHref = (title: string) => {
  if (title === "티켓") return "/ticket";
  return "/search";
};

const companionHref = (title: string) => {
  if (title === "친구 · 연인") return "/search";
  if (title === "가족 여행") return "/search";
  return "/saved";
};

export function HeroSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pt-4 pb-8 sm:px-6 sm:pt-5 sm:pb-10 lg:px-8">
      <div className="grid gap-4 sm:gap-5 lg:grid-cols-[1.28fr_0.72fr]">
        <div className="overflow-hidden rounded-[28px] bg-gradient-to-br from-[#4154ff] via-[#6a59ff] to-[#9f63ff] p-5 text-white shadow-[0_24px_72px_rgba(65,84,255,0.20)] sm:rounded-[36px] sm:p-8">
          <div className="inline-flex rounded-full bg-white/16 px-3 py-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase text-white/90 sm:px-4 sm:text-xs">
            오늘의 특가
          </div>

          <div className="mt-4 max-w-2xl sm:mt-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/72 sm:text-sm">Tour · Stay · Ticket · Leisure</p>
            <h2 className="mt-3 text-[28px] font-black leading-tight tracking-[-0.05em] sm:text-5xl">
              누구와 여행 가시나요? 동행자별 맞춤여행과 지금 HOT한 공연을 한눈에.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/82 sm:text-base">
              여행과 공연, 전시 예약을 한번에. 취향에 맞는 상품을 빠르게 찾고 바로 예약할 수 있도록 핵심 정보만 또렷하게
              보여줍니다.
            </p>
          </div>

          <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <article key={stat.label} className="rounded-[20px] border border-white/12 bg-white/10 p-4 backdrop-blur-sm sm:rounded-[22px]">
                <p className="text-2xl font-black tracking-[-0.04em] text-white">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/70">{stat.label}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-[24px] bg-white p-4 text-[#111827] shadow-[0_20px_50px_rgba(17,24,39,0.12)] sm:mt-7 sm:rounded-[30px] sm:p-5">
            <div className="flex flex-wrap gap-2">
              {searchTabs.map((tab, index) => (
                <Link
                  key={tab}
                  href={tab === "티켓" ? "/ticket" : "/search"}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition duration-150 ${
                    index === 0
                      ? "bg-[#4154ff] text-white shadow-[0_10px_24px_rgba(65,84,255,0.26)]"
                      : "bg-[#f3f4f8] text-[#4b5563] hover:bg-[#e9edf8]"
                  }`}
                >
                  {tab}
                </Link>
              ))}
            </div>

            <div className="mt-4 grid gap-3 lg:grid-cols-[1.15fr_0.95fr_1fr_auto]">
              {searchFields.map((field, index) => (
                <button
                  key={field.label}
                  className="rounded-[18px] border border-[#ececf3] bg-[#fafafe] px-4 py-3 text-left transition duration-150 hover:border-[#dbe1ff] hover:bg-white hover:shadow-sm sm:rounded-[22px]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9ca3af]">{field.label}</p>
                      <p className="mt-1 text-sm font-semibold text-[#111827]">{field.value}</p>
                      <p className="mt-1 text-[11px] font-medium text-[#9ca3af]">{field.hint}</p>
                    </div>
                    <span className={`mt-1 h-2.5 w-2.5 rounded-full ${index === 0 ? "bg-[#4154ff]" : "bg-[#d1d5db]"}`} />
                  </div>
                </button>
              ))}
              <Link
                href="/search"
                className="rounded-[18px] bg-[#1c1c1e] px-6 py-4 text-center text-sm font-bold text-white shadow-[0_14px_30px_rgba(17,24,39,0.18)] transition duration-150 hover:bg-black hover:shadow-[0_18px_34px_rgba(17,24,39,0.22)] active:translate-y-px sm:rounded-[22px]"
              >
                검색
              </Link>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:mt-5 sm:grid-cols-3">
            {companionOptions.map((item) => (
              <Link key={item.title} href={companionHref(item.title)} className="rounded-[20px] border border-white/15 bg-white/12 p-4 backdrop-blur-sm sm:rounded-[24px] sm:p-5">
                <h3 className="text-base font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/78">{item.description}</p>
                <span className="mt-4 inline-flex rounded-full bg-white/14 px-3 py-1 text-xs font-bold text-white/90">
                  흐름 보기
                </span>
              </Link>
            ))}
          </div>
        </div>

        <aside className="grid gap-4 sm:gap-5">
          <div className="rounded-[24px] bg-white p-5 shadow-[0_16px_50px_rgba(15,23,42,0.06)] sm:rounded-[30px] sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4154ff]">Shortcut services</p>
                <h3 className="mt-2 text-xl font-black tracking-[-0.03em] text-[#111827] sm:text-2xl">자주 찾는 카테고리</h3>
              </div>
              <span className="rounded-full bg-[#eef1ff] px-3 py-1 text-xs font-bold text-[#4154ff]">6 items</span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {serviceShortcuts.map((item) => (
                <Link key={item.title} href={shortcutHref(item.title)} className={`rounded-[20px] bg-gradient-to-br ${item.accent} p-4 sm:rounded-[24px]`}>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#6b7280]">{item.subtitle}</p>
                  <h4 className="mt-6 text-base font-black text-[#111827]">{item.title}</h4>
                  <span className="mt-3 inline-flex rounded-full bg-white/70 px-3 py-1 text-[11px] font-bold text-[#111827]">바로 가기</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] bg-[#1c1c1e] p-5 text-white shadow-[0_16px_50px_rgba(15,23,42,0.16)] sm:rounded-[30px] sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">NOL 혜택</p>
            <h3 className="mt-3 text-xl font-bold sm:text-2xl">앱 전용 쿠폰과 실시간 랭킹으로 더 빠르게.</h3>
            <p className="mt-3 text-sm leading-6 text-white/72">
              실시간 인기 상품과 특가를 빠르게 확인하고, 자주 찾는 카테고리로 바로 이동해 예약까지 이어지는 흐름을
              자연스럽게 구성했습니다.
            </p>
            <Link href="/mypage" className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-[#111827] shadow-sm">
              혜택 보러가기
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
