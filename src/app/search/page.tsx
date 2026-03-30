import Link from "next/link";
import { bookingStats, travelDeals } from "@/components/home/data";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { DetailBulletList, DetailSection } from "@/components/ui/detail-section";
import { PageIntro } from "@/components/ui/page-intro";
import { slugify } from "@/lib/slugify";
import { SubpageNav } from "@/components/ui/subpage-nav";

const filterGroups = [
  {
    title: "기본 조건",
    items: [
      ["출발 지역", "인천 출발"],
      ["여행 기간", "4일 ~ 9일"],
      ["동행", "친구 · 연인 / 가족"],
      ["가격대", "70만원 ~ 610만원"],
    ],
  },
  {
    title: "추천 포인트",
    items: [
      ["상품 타입", "노쇼핑 / 실속형 / 가족 추천"],
      ["예약 상태", "즉시예약 가능"],
      ["분위기", "도시여행 · 휴양 · 공연 연계"],
    ],
  },
];

const sortOptions = ["추천순", "낮은 가격순", "출발 임박순", "평점순"];

const subpageItems = [
  { label: "투어 검색", href: "/search" },
  { label: "티켓 랭킹", href: "/ticket" },
  { label: "저장한 상품", href: "/saved" },
  { label: "마이페이지", href: "/mypage" },
  { label: "고객지원", href: "/support" },
];

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-[#f6f7fb] px-4 py-6 text-[#111827] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Breadcrumbs items={[{ label: "홈", href: "/" }, { label: "투어 검색" }]} />

        <div className="rounded-[28px] bg-white p-5 shadow-[0_18px_56px_rgba(15,23,42,0.06)] sm:p-8">
          <PageIntro
            eyebrow="SEARCH RESULTS"
            title="홍콩/마카오 · 싱가포르 · 유럽 특가 모아보기"
            description="실시간 특가, 최근 본 흐름, 추천 이유, 예약 가능 상태를 함께 보여주는 투어 탐색 허브입니다. 비교 후 상세와 예약 단계로 자연스럽게 이어집니다."
            actions={
              <Link
                href="/"
                className="w-fit rounded-full border border-[#dbe1ff] bg-white px-4 py-2 text-sm font-bold text-[#4154ff] shadow-sm"
              >
                홈으로 돌아가기
              </Link>
            }
          />

          <SubpageNav items={subpageItems} current="/search" />

          <div className="mt-4 flex flex-wrap gap-2">
            {["인천 출발", "4일 ~ 9일", "친구 · 연인 / 가족", `${travelDeals.length}개 상품`].map((chip, index) => (
              <span
                key={chip}
                className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] ${
                  index === 3 ? "bg-[#4154ff] text-white shadow-[0_10px_24px_rgba(65,84,255,0.26)]" : "bg-[#eef1ff] text-[#4154ff]"
                }`}
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {bookingStats.map((item) => (
              <div key={item} className="rounded-[22px] bg-[#fafafe] px-5 py-4 ring-1 ring-black/4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9ca3af]">SEARCH INSIGHT</p>
                <p className="mt-2 text-base font-black tracking-[-0.02em] text-[#111827]">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[300px_1fr]">
            <aside className="space-y-4">
              {filterGroups.map((group) => (
                <DetailSection key={group.title} title={group.title} tone="tinted">
                  <div className="mt-4 space-y-3">
                    {group.items.map(([label, value]) => (
                      <div key={label} className="rounded-[18px] border border-[#ececf3] bg-white px-4 py-3">
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9ca3af]">{label}</p>
                        <p className="mt-1 text-sm font-semibold text-[#111827]">{value}</p>
                      </div>
                    ))}
                  </div>
                </DetailSection>
              ))}

              <DetailSection title="예약 전에 보기">
                <DetailBulletList
                  items={[
                    "실시간 인기 상품은 조기 마감될 수 있어요.",
                    "도시형/휴양형/가족형 상품을 같이 비교해 보세요.",
                    "상세 페이지에서 일정, 정책, 예약 흐름을 바로 이어갈 수 있습니다.",
                  ]}
                  itemTone="soft"
                />
              </DetailSection>
            </aside>

            <section>
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-[#6b7280]">
                    총 <span className="font-black text-[#111827]">{travelDeals.length}개</span> 상품을 찾았어요
                  </p>
                  <p className="mt-1 text-xs font-semibold text-[#9ca3af]">가격, 일정, 추천 이유, 최근 본 흐름을 함께 비교하면서 다음 상품을 고르기 좋아요.</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {sortOptions.map((sort, index) => (
                    <button
                      key={sort}
                      className={`rounded-full px-4 py-2 text-sm font-semibold ${
                        index === 0 ? "bg-[#4154ff] text-white shadow-[0_10px_24px_rgba(65,84,255,0.26)]" : "bg-white text-[#4b5563] ring-1 ring-black/5"
                      }`}
                    >
                      {sort}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 xl:grid-cols-2">
                {travelDeals.map((deal, index) => (
                  <article key={deal.title} className="overflow-hidden rounded-[26px] bg-white shadow-[0_14px_40px_rgba(15,23,42,0.06)] ring-1 ring-black/4">
                    <div className={`h-44 bg-gradient-to-br ${deal.accent}`} />
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-[#eef1ff] px-3 py-1 text-xs font-bold text-[#4154ff] shadow-sm">{deal.badge}</span>
                            <span className="rounded-full border border-[#ececf3] bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#4b5563] shadow-sm">
                              {index < 2 ? "인기" : "추천"}
                            </span>
                            {index === 0 ? (
                              <span className="rounded-full bg-[#fff3d6] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#9a6700] shadow-sm">
                                최근 본 상품
                              </span>
                            ) : null}
                            {index === 1 ? (
                              <span className="rounded-full bg-[#e7f8ec] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#1f7a3d] shadow-sm">
                                저장됨
                              </span>
                            ) : null}
                            {index === 2 ? (
                              <span className="rounded-full bg-[#ffe8f3] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#b4236b] shadow-sm">
                                추천 이유 있음
                              </span>
                            ) : null}
                          </div>
                          <h3 className="mt-3 text-xl font-black tracking-[-0.03em] text-[#111827]">{deal.title}</h3>
                        </div>
                        <span className="rounded-full border border-[#ececf3] bg-white px-3 py-1 text-xs font-bold text-[#4b5563] shadow-sm">즉시예약</span>
                      </div>

                      <p className="mt-3 text-sm leading-7 text-[#6b7280]">{deal.meta}</p>

                      <div className="mt-4 grid gap-2 sm:grid-cols-3">
                        {[
                          ["출발", "인천"],
                          ["일정", deal.title.includes("9일") ? "9일" : deal.title.includes("5일") ? "5일" : "4일"],
                          ["흐름", "상세 후 예약"],
                        ].map(([label, value]) => (
                          <div key={label} className="rounded-[16px] bg-[#fafafe] px-3 py-3 ring-1 ring-black/4">
                            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#9ca3af]">{label}</p>
                            <p className="mt-1 text-sm font-bold text-[#111827]">{value}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {[
                          index === 0 ? "오늘 인기급상승" : "출발확인 쉬움",
                          "상세 일정 확인",
                          index % 2 === 0 ? "가족/연인 추천" : "실속 구성",
                        ].map((point) => (
                          <span key={point} className="rounded-full bg-[#fafafe] px-3 py-1 text-xs font-semibold text-[#4b5563] ring-1 ring-black/4">
                            {point}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 rounded-[16px] bg-[#f7f8ff] px-4 py-3 ring-1 ring-[#dfe4ff]">
                        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#4154ff]">WHY NOW</p>
                        <p className="mt-1 text-sm font-semibold text-[#111827]">
                          {index === 0
                            ? "최근 본 흐름과 가장 가까워서 지금 다시 비교하기 좋은 상품이에요."
                            : index === 1
                              ? "저장해 둔 흐름이 있어 조건만 다시 확인하면 바로 이어가기 쉬워요."
                              : "추천 이유와 일정 구성이 또렷해서 새 후보로 빠르게 판단하기 좋아요."}
                        </p>
                      </div>

                      <div className="mt-5 flex items-end justify-between gap-4">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9ca3af]">판매가</p>
                          <p className="mt-1 text-lg font-black text-[#ff322e]">{deal.price}</p>
                          <p className="mt-1 text-xs text-[#9ca3af]">카드할인 · 쿠폰 적용 전 기준</p>
                        </div>
                        <div className="flex flex-col gap-2 sm:items-end">
                          <Link
                            href={`/tour/${slugify(deal.title)}`}
                            className="rounded-full bg-[#1c1c1e] px-5 py-3 text-sm font-bold text-white shadow-[0_14px_30px_rgba(17,24,39,0.18)]"
                          >
                            자세히 보기
                          </Link>
                          <span className="text-xs font-semibold text-[#6b7280]">상세 → 예약 흐름으로 바로 연결</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
