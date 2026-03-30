import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { DetailBulletList, DetailSection } from "@/components/ui/detail-section";
import { PageIntro } from "@/components/ui/page-intro";
import { ReservationSummary } from "@/components/ui/reservation-summary";
import { SubpageNav } from "@/components/ui/subpage-nav";
import { notFound } from "next/navigation";
import { rankingCards } from "@/components/home/data";
import { slugify } from "@/lib/slugify";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const subpageItems = [
  { label: "투어 검색", href: "/search" },
  { label: "티켓 랭킹", href: "/ticket" },
  { label: "저장한 상품", href: "/saved" },
  { label: "마이페이지", href: "/mypage" },
  { label: "고객지원", href: "/support" },
];

export function generateStaticParams() {
  return rankingCards.map((card) => ({ slug: slugify(card.title) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const card = rankingCards.find((item) => slugify(item.title) === slug);

  if (!card) {
    return {
      title: "티켓 예매 | NOL 인터파크",
      alternates: { canonical: `/reserve/ticket/${slug}` },
    };
  }

  return {
    title: `${card.title} 예매하기 | NOL 인터파크`,
    description: `${card.title}의 회차, 좌석, 예매자 정보를 확인하고 결제 단계로 이어가는 티켓 예매 페이지입니다.`,
    alternates: { canonical: `/reserve/ticket/${slug}` },
  };
}

export default async function ReserveTicketPage({ params }: PageProps) {
  const { slug } = await params;
  const card = rankingCards.find((item) => slugify(item.title) === slug);
  if (!card) notFound();

  return (
    <main className="min-h-screen bg-[#f6f7fb] px-4 py-6 text-[#111827] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Breadcrumbs items={[{ label: "홈", href: "/" }, { label: "티켓 랭킹", href: "/ticket" }, { label: "공연 상세", href: `/ticket/${slug}` }, { label: "예매" }]} />

        <div className="rounded-[28px] bg-white p-5 shadow-[0_18px_56px_rgba(15,23,42,0.06)] sm:p-8">
          <PageIntro
            eyebrow="TICKET RESERVATION"
            title={`${card.title} 예매하기`}
            description="회차, 좌석, 관람자 정보를 선택하는 티켓 예매 플로우 쉘입니다."
          />

          <SubpageNav items={subpageItems} current="/ticket" />
        </div>

        <div className="mt-6 rounded-[20px] bg-[#f7f8ff] px-5 py-4 ring-1 ring-[#dfe4ff]">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4154ff]">FINAL CHECK</p>
          <p className="mt-2 text-sm font-semibold text-[#111827]">관람일, 회차, 좌석 정보가 이미 정리돼 있어서 수수료와 취소 조건만 다시 보면 결제 단계로 바로 이어가기 좋은 상태예요.</p>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <section className="space-y-6">
            <DetailSection title="예매 정보 입력" subtitle="회차와 좌석, 예매자 정보를 결제 전에 한 번 더 정리하는 구간입니다." tone="tinted">
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {[["관람일", "2026-04-20"], ["회차", "19:30"], ["좌석등급", "R석 2매"], ["예매자", "Cherry"]].map(([label, value]) => (
                  <div key={label} className="rounded-[18px] border border-[#ececf3] bg-white px-4 py-3">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9ca3af]">{label}</p>
                    <p className="mt-1 text-sm font-semibold text-[#111827]">{value}</p>
                  </div>
                ))}
              </div>
            </DetailSection>

            <DetailSection title="예매 유의사항">
              <DetailBulletList
                items={[
                  "회차별 티켓 오픈 일정과 매수 제한을 확인해 주세요.",
                  "취소 마감 시간 이후에는 환불이 제한될 수 있습니다.",
                  "공연 시작 후 입장 정책은 공연장 규정을 따릅니다.",
                ]}
              />
            </DetailSection>

            <DetailSection title="안심 예매 포인트">
              <DetailBulletList
                items={[
                  "실시간 좌석/회차 기준으로 예매 흐름이 이어집니다.",
                  "결제 전 수수료와 총액을 다시 확인할 수 있어요.",
                  "좌석/오픈 상황이 변동될 수 있다는 점을 요약 영역에서 안내합니다.",
                ]}
                itemTone="soft"
              />
            </DetailSection>

            <DetailSection title="다음에 같이 보면 좋은 흐름">
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  ["저장한 공연 다시 보기", "/saved"],
                  ["다른 공연 비교하기", "/ticket"],
                  ["고객지원에서 예매 도움 받기", "/support"],
                  ["투어 상품도 살펴보기", "/search"],
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
          </section>

          <ReservationSummary
            title="결제 요약"
            rows={[["선택 좌석", "R석 2매"], ["예매 수수료", "12,000원"], ["적용 할인", "-0원"]]}
            totalLabel="총 결제 예상 금액"
            totalValue="256,000원"
            primaryCta="결제 계속하기"
            backHref={`/ticket/${slug}`}
            backLabel="상세로 돌아가기"
            listHref="/ticket"
            listLabel="목록으로 돌아가기"
          />
        </div>
      </div>
    </main>
  );
}
