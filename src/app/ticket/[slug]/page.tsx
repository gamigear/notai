import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
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
              ctaLabel="예매하기"
              ctaHref={`/reserve/ticket/${slug}`}
            />

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <DetailSection title="공연 소개" tone="tinted">
                <DetailBulletList
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

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/ticket" className="rounded-full border border-[#dbe1ff] bg-white px-4 py-2 text-sm font-bold text-[#4154ff] shadow-sm">
                    목록으로 돌아가기
                  </Link>
                  <Link href="/" className="rounded-full border border-[#ececf3] bg-white px-4 py-2 text-sm font-bold text-[#4b5563] shadow-sm">
                    홈으로 이동
                  </Link>
                </div>
              </DetailSection>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
