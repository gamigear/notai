import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { DetailFacts } from "@/components/ui/detail-facts";
import { DetailHero } from "@/components/ui/detail-hero";
import { DetailBulletList, DetailNumberedList, DetailSection } from "@/components/ui/detail-section";
import { notFound } from "next/navigation";
import { rankingCards } from "@/components/home/data";
import { slugify } from "@/lib/slugify";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return rankingCards.map((card) => ({
    slug: slugify(card.title),
  }));
}

export default async function TicketDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const card = rankingCards.find((item) => slugify(item.title) === slug);

  if (!card) notFound();

  return (
    <main className="min-h-screen bg-[#f6f7fb] px-4 py-6 text-[#111827] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Breadcrumbs items={[{ label: "홈", href: "/" }, { label: "티켓 랭킹", href: "/ticket" }, { label: "공연 상세" }]} />

        <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_18px_56px_rgba(15,23,42,0.06)] ring-1 ring-black/4">
          <div className="h-56 bg-gradient-to-br from-[#17181f] via-[#232734] to-[#3a4256] sm:h-72" />

          <div className="p-5 sm:p-8">
            <DetailHero
              badge="실시간 랭킹"
              title={card.title}
              description={card.description}
              summaryLabel="티켓 오픈"
              summaryValue="오늘 20:00"
              ctaLabel="바로 예매하기"
              ctaHref={`/reserve/ticket/${slug}`}
            />

            <DetailFacts
              items={[
                { label: "장르", value: "뮤지컬 · 콘서트 · 클래식" },
                { label: "랭킹", value: `RANK ${card.rank}` },
                { label: "추천 이유", value: card.rank === "1" ? "최근 관심 패턴과 가장 유사" : "저장/최근 본 흐름과 연결" },
                { label: "저장 상태", value: card.rank === "3" ? "저장한 공연에서 다시 확인" : "관심 공연으로 저장 가능" },
              ]}
            />

            <div className="mt-6 rounded-[20px] bg-[#f7f8ff] px-5 py-4 ring-1 ring-[#dfe4ff]">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4154ff]">TICKET READINESS</p>
              <p className="mt-2 text-sm font-semibold text-[#111827]">랭킹, 오픈 타이밍, 최근 본 흐름이 정리돼 있어서 회차와 좌석만 확인하면 예매로 바로 이어가기 좋은 상태예요.</p>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <DetailSection title="공연 소개" tone="tinted">
                <p className="mt-4 text-sm leading-8 text-[#6b7280]">
                  공연 성격, 오픈 타이밍, 관람 전 확인 포인트를 빠르게 파악한 뒤 바로 예매 단계로 넘어갈 수 있도록 정리한 상세 화면입니다.
                </p>
                <DetailBulletList
                  className="mt-6 space-y-3"
                  items={[
                    "캐스팅 / 회차 / 좌석 정보 확장 가능",
                    "티켓 오픈 일정과 안내 사항 노출",
                    "공연장 위치, 관람 시간, 연령 제한 정보",
                  ]}
                />
              </DetailSection>

              <DetailSection title="예매 안내">
                <DetailNumberedList
                  items={[
                    "회차별 좌석 오픈 시간 확인",
                    "예매 수수료 및 취소 규정 확인",
                    "공연 시작 전 입장 제한 여부 확인",
                  ]}
                />
              </DetailSection>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <DetailSection title="관람 정보">
                <DetailBulletList
                  items={[
                    "공연장 위치와 관람 시간 안내",
                    "입장 가능 시간과 현장 수령 여부 확인",
                    "좌석 등급과 회차별 차이 확장 가능",
                  ]}
                  itemTone="soft"
                />
              </DetailSection>

              <DetailSection title="취소 / 환불 정보">
                <DetailBulletList
                  items={[
                    "예매 수수료 및 취소 가능 시점 확인",
                    "공연 임박 시 환불 제한 여부 안내",
                    "공연장 정책 및 티켓 수령 방식 정리 가능",
                  ]}
                  itemTone="soft"
                />
              </DetailSection>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <DetailSection title="추천 포인트">
                <DetailBulletList
                  items={[
                    "지금 가장 빠르게 예매가 늘고 있는 인기 공연 흐름",
                    "실시간 랭킹 기반으로 선택하기 쉬운 구조",
                    "상세에서 바로 예매 단계로 넘어가는 전환 흐름",
                  ]}
                  itemTone="soft"
                />
              </DetailSection>

              <DetailSection title="다음 단계">
                <DetailBulletList
                  items={[
                    "상세 정보 확인 후 바로 예매 단계로 이동",
                    "예매 화면에서 회차, 좌석, 예매자 정보를 입력",
                    "결제 요약에서 총액 확인 후 결제를 진행",
                  ]}
                  itemTone="soft"
                />

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/ticket" className="rounded-full border border-[#dbe1ff] bg-white px-4 py-2 text-sm font-bold text-[#4154ff] shadow-sm">
                    목록으로 돌아가기
                  </Link>
                  <Link href="/" className="rounded-full border border-[#ececf3] bg-white px-4 py-2 text-sm font-bold text-[#4b5563] shadow-sm">
                    홈으로 이동
                  </Link>
                </div>
              </DetailSection>

              <DetailSection title="이런 흐름도 함께 보기">
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    ["저장한 공연으로 이어보기", "/saved"],
                    ["투어 검색 함께 보기", "/search"],
                    ["고객지원에서 예매 도움 받기", "/support"],
                    ["티켓 랭킹 계속 보기", "/ticket"],
                  ].map(([label, href]) => (
                    <Link
                      key={label}
                      href={href}
                      className="rounded-[18px] border border-[#ececf3] bg-[#fafafe] px-4 py-4 text-sm font-semibold text-[#111827] transition hover:-translate-y-0.5 hover:bg-white"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </DetailSection>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
