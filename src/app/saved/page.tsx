import Link from "next/link";
import { appBenefits, rankingCards, travelDeals } from "@/components/home/data";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { DetailBulletList, DetailSection } from "@/components/ui/detail-section";
import { PageIntro } from "@/components/ui/page-intro";
import { slugify } from "@/lib/slugify";
import { SubpageNav } from "@/components/ui/subpage-nav";

const subpageItems = [
  { label: "투어 검색", href: "/search" },
  { label: "티켓 랭킹", href: "/ticket" },
  { label: "저장한 상품", href: "/saved" },
  { label: "마이페이지", href: "/mypage" },
  { label: "고객지원", href: "/support" },
];

export default function SavedPage() {
  return (
    <main className="min-h-screen bg-[#f6f7fb] px-4 py-6 text-[#111827] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Breadcrumbs items={[{ label: "홈", href: "/" }, { label: "저장한 상품" }]} />

        <div className="rounded-[28px] bg-white p-5 shadow-[0_18px_56px_rgba(15,23,42,0.06)] sm:p-8">
          <PageIntro
            eyebrow="SAVED ITEMS"
            title="저장한 상품"
            description="저장한 여행과 공연, 최근 본 흐름, 다시 이어볼 행동을 한곳에 모은 개인 저장 허브입니다. 탐색과 전환 사이를 자연스럽게 이어줍니다."
            actions={
              <>
                <Link href="/mypage" className="w-fit rounded-full border border-[#dbe1ff] bg-white px-4 py-2 text-sm font-bold text-[#4154ff] shadow-sm">
                  마이페이지로 이동
                </Link>
                <Link href="/search" className="w-fit rounded-full border border-[#ececf3] bg-white px-4 py-2 text-sm font-bold text-[#4b5563] shadow-sm">
                  여행 더 보기
                </Link>
              </>
            }
          />

          <SubpageNav items={subpageItems} current="/saved" />

          <div className="mt-5 rounded-[22px] bg-[#f7f8ff] px-5 py-4 ring-1 ring-[#dfe4ff]">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4154ff]">NOW RESUMING</p>
            <p className="mt-2 text-sm font-semibold text-[#111827]">저장한 여행 2건, 저장한 공연 2건, 최근 본 흐름 3건이 함께 정리되어 있어서 바로 비교하고 다시 이어가기 좋습니다.</p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["저장한 여행", "2개", "최근 살펴본 여행 흐름을 바로 이어갈 수 있어요"],
              ["저장한 티켓", "2개", "최근 본 공연과 저장한 공연을 함께 비교해 보세요"],
              ["최근 활동", "3건", "당신이 최근 본 상품 / 저장한 공연 흐름이 반영돼 있어요"],
            ].map(([label, value, desc]) => (
              <div key={label} className="rounded-[22px] bg-[#fafafe] px-5 py-4 ring-1 ring-black/4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9ca3af]">{label}</p>
                <p className="mt-2 text-2xl font-black tracking-[-0.03em] text-[#111827]">{value}</p>
                <p className="mt-2 text-sm leading-6 text-[#6b7280]">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <DetailSection title="저장한 여행" tone="tinted">
              <div className="mt-4 space-y-3">
                {travelDeals.slice(0, 2).map((deal, index) => (
                  <Link
                    key={deal.title}
                    href={`/tour/${slugify(deal.title)}`}
                    className="block rounded-[18px] border border-[#ececf3] bg-white px-4 py-4 transition hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9ca3af]">{deal.badge}</p>
                      <span className="rounded-full bg-[#e7f8ec] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#1f7a3d] shadow-sm">
                        저장됨
                      </span>
                      {index === 0 ? (
                        <span className="rounded-full bg-[#fff3d6] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#9a6700] shadow-sm">
                          최근 본 상품
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mt-2 text-lg font-black text-[#111827]">{deal.title}</h3>
                    <p className="mt-2 text-sm text-[#6b7280]">{deal.price}</p>
                    <p className="mt-2 text-xs font-semibold text-[#9ca3af]">상세 → 예약 흐름으로 다시 이어가기</p>
                  </Link>
                ))}
              </div>
            </DetailSection>

            <DetailSection title="저장한 티켓" tone="tinted">
              <div className="mt-4 space-y-3">
                {rankingCards.slice(0, 2).map((card, index) => (
                  <Link
                    key={card.title}
                    href={`/ticket/${slugify(card.title)}`}
                    className="block rounded-[18px] border border-[#ececf3] bg-white px-4 py-4 transition hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9ca3af]">RANK {card.rank}</p>
                      <span className="rounded-full bg-[#e7f8ec] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#1f7a3d] shadow-sm">
                        저장됨
                      </span>
                      {index === 1 ? (
                        <span className="rounded-full bg-[#fff3d6] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#9a6700] shadow-sm">
                          최근 본 공연
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mt-2 text-lg font-black text-[#111827]">{card.title}</h3>
                    <p className="mt-2 text-sm text-[#6b7280]">{card.description}</p>
                    <p className="mt-2 text-xs font-semibold text-[#9ca3af]">상세 → 예매 흐름으로 다시 이어가기</p>
                  </Link>
                ))}
              </div>
            </DetailSection>
          </div>

          <DetailSection title="앱에서 이어보기" className="mt-6">
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {appBenefits.map((benefit) => (
                <div key={benefit.title} className="rounded-[18px] bg-[#fafafe] px-4 py-4 ring-1 ring-black/3">
                  <h3 className="text-lg font-black text-[#111827]">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#6b7280]">{benefit.description}</p>
                </div>
              ))}
            </div>
          </DetailSection>

          <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <DetailSection title="NEXT BEST ACTION" tone="tinted">
              <DetailBulletList
                items={[
                  "저장한 여행과 공연 중 하나를 골라 상세에서 조건을 다시 비교해 보세요.",
                  "최근 본 흐름이 붙은 상품부터 확인하면 결정이 더 빨라집니다.",
                  "비교가 끝나면 상세 → 예약/예매 단계로 바로 이어가면 좋아요.",
                ]}
                itemTone="soft"
              />
            </DetailSection>

            <DetailSection title="저장함 활용 팁">
              <DetailBulletList
                items={[
                  "관심 상품을 저장해두고 가격/오픈 일정을 다시 확인해 보세요.",
                  "마이페이지에서 예약 내역과 함께 비교하면 전환 흐름이 자연스러워집니다.",
                  "투어와 티켓을 함께 저장해 두면 주말/휴가 계획을 한 번에 정리하기 좋아요.",
                ]}
              />
            </DetailSection>

            <DetailSection title="바로 이어보기">
              <p className="mt-4 text-xs font-semibold text-[#9ca3af]">저장 흐름을 끊지 않고 다음 단계로 바로 이어가기 좋은 진입점만 모았습니다.</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  ["투어 검색 계속 보기", "/search", "다른 여행 후보까지 이어서 비교"],
                  ["티켓 랭킹 다시 보기", "/ticket", "저장한 공연과 현재 랭킹 함께 확인"],
                  ["마이페이지로 이동", "/mypage", "예약 내역과 저장 흐름을 같이 보기"],
                  ["고객지원 바로가기", "/support", "조건 확인 후 다시 결정 이어가기"],
                ].map(([label, href, sub]) => (
                  <Link
                    key={label}
                    href={href}
                    className="rounded-[18px] border border-[#ececf3] bg-[#fafafe] px-4 py-4 transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    <p className="text-sm font-semibold text-[#111827]">{label}</p>
                    <p className="mt-1 text-xs font-semibold text-[#9ca3af]">{sub}</p>
                  </Link>
                ))}
              </div>
            </DetailSection>
          </div>
        </div>
      </div>
    </main>
  );
}
