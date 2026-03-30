import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { DetailFacts } from "@/components/ui/detail-facts";
import { DetailHero } from "@/components/ui/detail-hero";
import { DetailBulletList, DetailNumberedList, DetailSection } from "@/components/ui/detail-section";
import { notFound } from "next/navigation";
import { travelDeals } from "@/components/home/data";
import { slugify } from "@/lib/slugify";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return travelDeals.map((deal) => ({
    slug: slugify(deal.title),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const deal = travelDeals.find((item) => slugify(item.title) === slug);

  if (!deal) {
    return {
      title: "투어 상세 | NOL 인터파크",
      alternates: { canonical: `/tour/${slug}` },
    };
  }

  return {
    title: `${deal.title} | NOL 인터파크`,
    description: `${deal.meta} ${deal.price} 기준으로 확인하고 예약 흐름까지 바로 이어갈 수 있는 투어 상세 페이지입니다.`,
    alternates: { canonical: `/tour/${slug}` },
  };
}

export default async function TourDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const deal = travelDeals.find((item) => slugify(item.title) === slug);

  if (!deal) notFound();

  return (
    <main className="min-h-screen bg-[#f6f7fb] px-4 py-6 text-[#111827] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Breadcrumbs items={[{ label: "홈", href: "/" }, { label: "투어 검색", href: "/search" }, { label: "상품 상세" }]} />

        <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_18px_56px_rgba(15,23,42,0.06)] ring-1 ring-black/4">
          <div className={`h-56 bg-gradient-to-br ${deal.accent} sm:h-72`} />

          <div className="p-5 sm:p-8">
            <DetailHero
              badge={deal.badge}
              title={deal.title}
              description={deal.meta}
              summaryLabel="판매가"
              summaryValue={deal.price}
              ctaLabel="바로 예약하기"
              ctaHref={`/reserve/tour/${slug}`}
              accent="price"
            />

            <DetailFacts
              items={[
                { label: "출발", value: "인천 출발 · 출발 조건 확인 가능" },
                { label: "일정", value: deal.title.includes("9일") ? "9일 일정 · 장거리 비교용" : deal.title.includes("5일") ? "5일 일정 · 균형형 일정" : "4일 일정 · 짧게 다녀오기 좋음" },
                { label: "추천 이유", value: "최근 본 여행 / 저장 흐름과 가장 가까운 후보" },
                { label: "최근 활동", value: "최근 본 상품에서 다시 열람 중" },
              ]}
            />

            <div className="mt-6 rounded-[20px] bg-[#f7f8ff] px-5 py-4 ring-1 ring-[#dfe4ff]">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4154ff]">BOOKING READINESS</p>
              <p className="mt-2 text-sm font-semibold text-[#111827]">핵심 일정, 포함 조건, 최근 본 흐름까지 이미 정리돼 있어서 예약 전 마지막 비교만 하면 되는 상태예요.</p>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <DetailSection title="상품 소개" subtitle="이 상품의 분위기와 핵심 구성을 빠르게 훑는 구간입니다." tone="tinted">
                <p className="mt-4 text-sm leading-8 text-[#6b7280]">
                  여행 핵심 분위기와 포함 조건, 예약 전 확인 포인트를 한 번에 훑어본 뒤 바로 예약으로 이어질 수 있도록 정리한 상세 화면입니다.
                  실제 운영 시에는 날짜 선택, 객실/옵션 확장, 후기와 FAQ가 자연스럽게 이어지는 구조를 염두에 두고 구성했습니다.
                </p>
                <DetailBulletList
                  className="mt-6 space-y-3"
                  items={[
                    "왕복 항공권 또는 이동 포함 옵션",
                    "숙소 및 핵심 일정 요약",
                    "노쇼핑 / 출발확정 / 가족 추천 등 배지 확장 가능",
                    "취소/환불 규정 및 예약 안내 블록 추가 예정",
                  ]}
                />
              </DetailSection>

              <DetailSection title="예약 전 확인">
                <DetailNumberedList
                  items={[
                    "출발일과 인원 옵션을 확인해 주세요.",
                    "실시간 인기 상품은 조기 마감될 수 있습니다.",
                    "취소 및 환불 규정은 상품별로 다를 수 있습니다.",
                  ]}
                />
              </DetailSection>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <DetailSection title="추천 일정">
                <DetailBulletList
                  items={[
                    "DAY 1 · 출발 및 도착 후 자유시간",
                    "DAY 2 · 핵심 관광지 + 로컬 체험",
                    "DAY 3 · 자유 일정 또는 선택 투어",
                    "DAY 4+ · 귀국 또는 연장 일정",
                  ]}
                  itemTone="soft"
                />
              </DetailSection>

              <DetailSection title="포함 / 불포함 정보">
                <DetailBulletList
                  items={[
                    "포함: 핵심 일정, 숙소, 주요 이동 또는 옵션 요약",
                    "불포함: 개인 경비, 선택 관광, 일부 현지 팁",
                    "상품별 세부 조건은 예약 단계에서 추가 확장 가능",
                  ]}
                  itemTone="soft"
                />
              </DetailSection>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <DetailSection title="리뷰 & 정책">
                <DetailBulletList
                  items={[
                    "평점 9점대 후기 블록이 들어갈 자리",
                    "취소/환불 규정 요약 블록",
                    "자주 묻는 질문(FAQ) 아코디언 확장 가능",
                  ]}
                  itemTone="soft"
                />
              </DetailSection>

              <DetailSection title="다음 단계">
                <DetailBulletList
                  items={[
                    "상세 정보 확인 후 바로 예약 단계로 이동",
                    "예약 화면에서 출발일, 인원, 대표 예약자 정보를 입력",
                    "결제 요약에서 총액 확인 후 결제를 진행",
                  ]}
                  itemTone="soft"
                />

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/search" className="rounded-full border border-[#dbe1ff] bg-white px-4 py-2 text-sm font-bold text-[#4154ff] shadow-sm">
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
                    ["저장한 상품으로 이어보기", "/saved"],
                    ["실시간 공연 랭킹 보기", "/ticket"],
                    ["고객지원에서 조건 확인", "/support"],
                    ["투어 검색 계속하기", "/search"],
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
