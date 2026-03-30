import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
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
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span className="rounded-full bg-[#eef1ff] px-3 py-1 text-xs font-bold text-[#4154ff] shadow-sm">실시간 랭킹</span>
                <h1 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#111827]">{card.title}</h1>
                <p className="mt-3 text-sm leading-7 text-[#6b7280]">{card.description}</p>
              </div>
              <div className="rounded-[24px] bg-[#fafafe] p-5 ring-1 ring-black/4 sm:min-w-[280px]">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9ca3af]">티켓 오픈</p>
                <p className="mt-2 text-3xl font-black text-[#111827]">오늘 20:00</p>
                <Link
                  href={`/reserve/ticket/${slug}`}
                  className="mt-5 block w-full rounded-full bg-[#1c1c1e] px-5 py-3 text-center text-sm font-bold text-white shadow-[0_14px_30px_rgba(17,24,39,0.18)]"
                >
                  예매하기
                </Link>
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <section className="rounded-[24px] bg-[#fafafe] p-5 ring-1 ring-black/4">
                <h2 className="text-xl font-black text-[#111827]">공연 소개</h2>
                <div className="mt-4 space-y-3">
                  {["캐스팅 / 회차 / 좌석 정보 확장 가능", "티켓 오픈 일정과 안내 사항 노출", "공연장 위치, 관람 시간, 연령 제한 정보"].map((item) => (
                    <div key={item} className="rounded-[18px] border border-[#ececf3] bg-white px-4 py-3 text-sm text-[#374151]">
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[24px] bg-white p-5 ring-1 ring-black/4">
                <h2 className="text-xl font-black text-[#111827]">예매 안내</h2>
                <div className="mt-4 space-y-3">
                  {["회차별 좌석 오픈 시간 확인", "예매 수수료 및 취소 규정 확인", "공연 시작 전 입장 제한 여부 확인"].map((item, index) => (
                    <div key={item} className="flex gap-3 rounded-[18px] bg-[#f8f8fc] px-4 py-3 ring-1 ring-black/3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4154ff] text-xs font-bold text-white">{index + 1}</span>
                      <p className="text-sm leading-6 text-[#374151]">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/ticket" className="rounded-full border border-[#dbe1ff] bg-white px-4 py-2 text-sm font-bold text-[#4154ff] shadow-sm">
                    목록으로 돌아가기
                  </Link>
                  <Link href="/" className="rounded-full border border-[#ececf3] bg-white px-4 py-2 text-sm font-bold text-[#4b5563] shadow-sm">
                    홈으로 이동
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
