import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { DetailBulletList, DetailSection } from "@/components/ui/detail-section";
import { PageIntro } from "@/components/ui/page-intro";
import { ReservationSummary } from "@/components/ui/reservation-summary";
import { SubpageNav } from "@/components/ui/subpage-nav";
import { notFound } from "next/navigation";
import { travelDeals } from "@/components/home/data";
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
  return travelDeals.map((deal) => ({ slug: slugify(deal.title) }));
}

export default async function ReserveTourPage({ params }: PageProps) {
  const { slug } = await params;
  const deal = travelDeals.find((item) => slugify(item.title) === slug);
  if (!deal) notFound();

  return (
    <main className="min-h-screen bg-[#f6f7fb] px-4 py-6 text-[#111827] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Breadcrumbs items={[{ label: "홈", href: "/" }, { label: "투어 검색", href: "/search" }, { label: "상품 상세", href: `/tour/${slug}` }, { label: "예약" }]} />

        <div className="rounded-[28px] bg-white p-5 shadow-[0_18px_56px_rgba(15,23,42,0.06)] sm:p-8">
          <PageIntro
            eyebrow="TOUR RESERVATION"
            title={`${deal.title} 예약하기`}
            description="출발일, 인원, 대표 예약자 정보를 입력하는 예약 플로우 쉘입니다."
          />

          <SubpageNav items={subpageItems} current="/search" />
        </div>

        <div className="mt-6 rounded-[20px] bg-[#f7f8ff] px-5 py-4 ring-1 ring-[#dfe4ff]">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4154ff]">FINAL CHECK</p>
          <p className="mt-2 text-sm font-semibold text-[#111827]">대표 예약자 정보와 출발 조건이 이미 정리돼 있어서 총액과 규정만 다시 보면 결제 단계로 이어가기 좋은 상태예요.</p>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <section className="space-y-6">
            <DetailSection title="예약 정보 입력" tone="tinted">
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {[["출발일", "2026-04-18"], ["인원", "성인 2명"], ["대표 예약자", "Cherry"], ["연락처", "+82 10-0000-0000"]].map(([label, value]) => (
                  <div key={label} className="rounded-[18px] border border-[#ececf3] bg-white px-4 py-3">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9ca3af]">{label}</p>
                    <p className="mt-1 text-sm font-semibold text-[#111827]">{value}</p>
                  </div>
                ))}
              </div>
            </DetailSection>

            <DetailSection title="예약 전 확인">
              <DetailBulletList
                items={[
                  "출발일, 포함사항, 옵션을 다시 확인해 주세요.",
                  "항공/숙소/현지 사정에 따라 일정이 변경될 수 있습니다.",
                  "취소 및 환불 규정은 상품 상세 정책을 따라요.",
                ]}
              />
            </DetailSection>

            <DetailSection title="안심 예약 포인트">
              <DetailBulletList
                items={[
                  "실시간 예약 가능 여부를 기준으로 다음 단계로 이어집니다.",
                  "결제 직전 총액과 조건을 다시 확인할 수 있어요.",
                  "변동 가능 정보는 요약 영역에서 한 번 더 안내합니다.",
                ]}
                itemTone="soft"
              />
            </DetailSection>

            <DetailSection title="다음에 같이 보면 좋은 흐름">
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  ["저장한 상품 다시 보기", "/saved"],
                  ["다른 투어 비교하기", "/search"],
                  ["고객지원에서 규정 확인", "/support"],
                  ["실시간 공연도 살펴보기", "/ticket"],
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
            rows={[["상품가", deal.price], ["수수료", "0원"], ["쿠폰", "-0원"]]}
            totalLabel="총 결제 예상 금액"
            totalValue={deal.price}
            primaryCta="결제 계속하기"
            backHref={`/tour/${slug}`}
            backLabel="상세로 돌아가기"
            listHref="/search"
            listLabel="목록으로 돌아가기"
          />
        </div>
      </div>
    </main>
  );
}
