import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { notFound } from "next/navigation";
import { rankingCards } from "@/components/home/data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/·/g, "-")
    .replace(/[\/\s]+/g, "-")
    .replace(/[^a-z0-9가-힣-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function generateStaticParams() {
  return rankingCards.map((card) => ({ slug: slugify(card.title) }));
}

export default async function ReserveTicketPage({ params }: PageProps) {
  const { slug } = await params;
  const card = rankingCards.find((item) => slugify(item.title) === slug);
  if (!card) notFound();

  return (
    <main className="min-h-screen bg-[#f6f7fb] px-4 py-6 text-[#111827] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Breadcrumbs items={[{ label: "홈", href: "/" }, { label: "티켓 랭킹", href: "/ticket" }, { label: "공연 상세", href: `/ticket/${slug}` }, { label: "예매" }]} />

        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <section className="rounded-[28px] bg-white p-5 shadow-[0_18px_56px_rgba(15,23,42,0.06)] sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4154ff]">TICKET RESERVATION</p>
            <h1 className="mt-2 text-3xl font-black tracking-[-0.03em] text-[#111827]">{card.title} 예매하기</h1>
            <p className="mt-3 text-sm leading-7 text-[#6b7280]">회차, 좌석, 관람자 정보를 선택하는 티켓 예매 플로우 쉘입니다.</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[["관람일", "2026-04-20"], ["회차", "19:30"], ["좌석등급", "R석 2매"], ["예매자", "Cherry"]].map(([label, value]) => (
                <div key={label} className="rounded-[18px] border border-[#ececf3] bg-[#fafafe] px-4 py-3">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9ca3af]">{label}</p>
                  <p className="mt-1 text-sm font-semibold text-[#111827]">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[24px] bg-[#fafafe] p-5 ring-1 ring-black/4">
              <h2 className="text-xl font-black text-[#111827]">예매 유의사항</h2>
              <div className="mt-4 space-y-3">
                {["회차별 티켓 오픈 일정과 매수 제한을 확인해 주세요.", "취소 마감 시간 이후에는 환불이 제한될 수 있습니다.", "공연 시작 후 입장 정책은 공연장 규정을 따릅니다."].map((item) => (
                  <div key={item} className="rounded-[18px] border border-[#ececf3] bg-white px-4 py-3 text-sm text-[#374151]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <aside className="rounded-[28px] bg-white p-5 shadow-[0_18px_56px_rgba(15,23,42,0.06)] sm:p-8">
            <h2 className="text-xl font-black text-[#111827]">결제 요약</h2>
            <div className="mt-4 space-y-3">
              {[["티켓 금액", "R석 2매"], ["예매 수수료", "12,000원"], ["할인", "-0원"]].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-[18px] bg-[#fafafe] px-4 py-3 ring-1 ring-black/3">
                  <span className="text-sm text-[#6b7280]">{label}</span>
                  <span className="text-sm font-bold text-[#111827]">{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-[22px] bg-[#1c1c1e] px-5 py-4 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/60">총 결제 예상 금액</p>
              <p className="mt-2 text-3xl font-black">256,000원</p>
            </div>
            <button className="mt-5 w-full rounded-full bg-[#4154ff] px-5 py-3 text-sm font-bold text-white shadow-[0_14px_30px_rgba(65,84,255,0.24)]">
              결제 계속하기
            </button>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href={`/ticket/${slug}`} className="rounded-full border border-[#dbe1ff] bg-white px-4 py-2 text-sm font-bold text-[#4154ff] shadow-sm">
                상세로 돌아가기
              </Link>
              <Link href="/ticket" className="rounded-full border border-[#ececf3] bg-white px-4 py-2 text-sm font-bold text-[#4b5563] shadow-sm">
                목록으로 돌아가기
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
