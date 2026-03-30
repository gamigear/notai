import Link from "next/link";
import { rankingCards, rankingNotices } from "@/components/home/data";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { DetailBulletList, DetailSection } from "@/components/ui/detail-section";
import { PageIntro } from "@/components/ui/page-intro";
import { slugify } from "@/lib/slugify";
import { SubpageNav } from "@/components/ui/subpage-nav";

const ticketQuickFilters = ["뮤지컬", "콘서트", "클래식", `${rankingCards.length}개 랭킹`];
const ticketSortOptions = ["실시간 랭킹", "예매 많은 순", "관심 급상승", "오픈 임박순"];
const ticketInsights = [
  "지금 가장 빠르게 예매가 늘고 있는 공연을 바로 확인할 수 있어요.",
  "저녁 시간대 관심 급상승 작품부터 상세 → 예매 흐름으로 이어집니다.",
  "랭킹, 회차, 오픈 정보 중심으로 빠르게 비교하는 티켓 전용 쉘입니다.",
];

const subpageItems = [
  { label: "투어 검색", href: "/search" },
  { label: "티켓 랭킹", href: "/ticket" },
  { label: "저장한 상품", href: "/saved" },
  { label: "마이페이지", href: "/mypage" },
  { label: "고객지원", href: "/support" },
];

export default function TicketPage() {
  return (
    <main className="min-h-screen bg-[#f6f7fb] px-4 py-6 text-[#111827] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Breadcrumbs items={[{ label: "홈", href: "/" }, { label: "티켓 랭킹" }]} />

        <div className="rounded-[28px] bg-white p-5 shadow-[0_18px_56px_rgba(15,23,42,0.06)] sm:p-8">
          <PageIntro
            eyebrow="TICKET RANKING"
            title="오늘 뭐볼까? 지금 HOT한 공연"
            description="실시간 랭킹, 최근 본 공연, 저장 상태, 추천 이유를 함께 보여주는 티켓 탐색 허브입니다. 비교 후 상세와 예매 단계로 자연스럽게 이어집니다."
            actions={
              <Link href="/" className="w-fit rounded-full border border-[#dbe1ff] bg-white px-4 py-2 text-sm font-bold text-[#4154ff] shadow-sm">
                홈으로 돌아가기
              </Link>
            }
          />

          <SubpageNav items={subpageItems} current="/ticket" />

          <div className="mt-4 flex flex-wrap gap-2">
            {ticketQuickFilters.map((chip, index) => (
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
            {rankingNotices.map((item) => (
              <div key={item} className="rounded-[22px] bg-[#fafafe] px-5 py-4 ring-1 ring-black/4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9ca3af]">LIVE SIGNAL</p>
                <p className="mt-2 text-base font-black tracking-[-0.02em] text-[#111827]">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[280px_1fr]">
            <aside className="space-y-4">
              <DetailSection title="빠른 필터" tone="tinted">
                <div className="mt-4 space-y-3">
                  {[
                    ["카테고리", "뮤지컬 · 콘서트 · 클래식"],
                    ["상태", "실시간 예매 가능"],
                    ["시간대", "저녁 시간대 관심 급상승"],
                    ["관심도", "상위 랭킹 위주 추천"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-[18px] border border-[#ececf3] bg-white px-4 py-3">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9ca3af]">{label}</p>
                      <p className="mt-1 text-sm font-semibold text-[#111827]">{value}</p>
                    </div>
                  ))}
                </div>
              </DetailSection>

              <DetailSection title="예매 전에 보기">
                <DetailBulletList items={ticketInsights} itemTone="soft" />
              </DetailSection>
            </aside>

            <section>
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm font-semibold text-[#6b7280]">
                  총 <span className="font-black text-[#111827]">{rankingCards.length}개</span> 공연이 실시간 랭킹에 있어요
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {ticketSortOptions.map((sort, index) => (
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

              <div className="grid gap-4 xl:grid-cols-3">
                {rankingCards.map((card, index) => (
                  <article key={card.rank} className="overflow-hidden rounded-[26px] bg-white shadow-[0_14px_40px_rgba(15,23,42,0.06)] ring-1 ring-black/4">
                    <div className="flex h-40 items-end bg-gradient-to-br from-[#17181f] via-[#232734] to-[#3a4256] p-5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#111827] shadow-sm">RANK {card.rank}</span>
                        <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
                          {index === 0 ? "HOT" : index === 1 ? "FAST" : "PICK"}
                        </span>
                        {index === 1 ? (
                          <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
                            최근 본 공연
                          </span>
                        ) : null}
                        {index === 2 ? (
                          <span className="rounded-full bg-[#9be7b1]/25 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
                            저장됨
                          </span>
                        ) : null}
                        {index === 0 ? (
                          <span className="rounded-full bg-[#ffd7ea]/25 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
                            추천 이유 있음
                          </span>
                        ) : null}
                      </div>
                    </div>
                    <div className="p-5">
                      <h2 className="text-xl font-black tracking-[-0.03em] text-[#111827]">{card.title}</h2>
                      <p className="mt-3 text-sm leading-7 text-[#6b7280]">{card.description}</p>

                      <div className="mt-4 grid gap-2 sm:grid-cols-3">
                        {[
                          ["랭킹", `${card.rank}위`],
                          ["상태", index === 0 ? "오늘 오픈" : "실시간 예매"],
                          ["좌석", index === 2 ? "여유" : "빠름"],
                        ].map(([label, value]) => (
                          <div key={label} className="rounded-[16px] bg-[#fafafe] px-3 py-3 ring-1 ring-black/4">
                            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#9ca3af]">{label}</p>
                            <p className="mt-1 text-sm font-bold text-[#111827]">{value}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {[
                          "실시간 랭킹",
                          index === 0 ? "최근 관심 패턴 기반 추천" : "예매 흐름 연결",
                          index === 2 ? "좌석 여유" : "상세 정보 확인",
                        ].map((tag) => (
                          <span key={tag} className="rounded-full bg-[#fafafe] px-3 py-1 text-xs font-semibold text-[#4b5563] ring-1 ring-black/4">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5 flex items-center justify-between gap-4">
                        <div>
                          <span className="rounded-full border border-[#ececf3] bg-white px-3 py-1 text-xs font-bold text-[#4b5563] shadow-sm">실시간 예매</span>
                          <p className="mt-2 text-xs font-semibold text-[#9ca3af]">상세 → 예매 흐름으로 바로 연결</p>
                        </div>
                        <Link
                          href={`/ticket/${slugify(card.title)}`}
                          className="rounded-full bg-[#1c1c1e] px-5 py-3 text-sm font-bold text-white shadow-[0_14px_30px_rgba(17,24,39,0.18)]"
                        >
                          자세히 보기
                        </Link>
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
