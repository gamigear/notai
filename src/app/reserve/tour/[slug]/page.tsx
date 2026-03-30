import Link from "next/link";
import { notFound } from "next/navigation";
import { travelDeals } from "@/components/home/data";

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
  return travelDeals.map((deal) => ({ slug: slugify(deal.title) }));
}

export default async function ReserveTourPage({ params }: PageProps) {
  const { slug } = await params;
  const deal = travelDeals.find((item) => slugify(item.title) === slug);
  if (!deal) notFound();

  return (
    <main className="min-h-screen bg-[#f6f7fb] px-4 py-6 text-[#111827] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex items-center gap-2 text-sm text-[#6b7280]">
          <Link href="/" className="hover:text-[#111827]">홈</Link>
          <span>/</span>
          <Link href="/search" className="hover:text-[#111827]">투어 검색</Link>
          <span>/</span>
          <Link href={`/tour/${slug}`} className="hover:text-[#111827]">상품 상세</Link>
          <span>/</span>
          <span className="font-semibold text-[#111827]">예약</span>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <section className="rounded-[28px] bg-white p-5 shadow-[0_18px_56px_rgba(15,23,42,0.06)] sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4154ff]">TOUR RESERVATION</p>
            <h1 className="mt-2 text-3xl font-black tracking-[-0.03em] text-[#111827]">{deal.title} 예약하기</h1>
            <p className="mt-3 text-sm leading-7 text-[#6b7280]">출발일, 인원, 대표 예약자 정보를 입력하는 예약 플로우 쉘입니다.</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[ ["출발일", "2026-04-18"], ["인원", "성인 2명"], ["대표 예약자", "Cherry"], ["연락처", "+82 10-0000-0000"] ].map(([label, value]) => (
                <div key={label} className="rounded-[18px] border border-[#ececf3] bg-[#fafafe] px-4 py-3">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9ca3af]">{label}</p>
                  <p className="mt-1 text-sm font-semibold text-[#111827]">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[24px] bg-[#fafafe] p-5 ring-1 ring-black/4">
              <h2 className="text-xl font-black text-[#111827]">예약 전 확인</h2>
              <div className="mt-4 space-y-3">
                {["출발일, 포함사항, 옵션을 다시 확인해 주세요.", "항공/숙소/현지 사정에 따라 일정이 변경될 수 있습니다.", "취소 및 환불 규정은 상품 상세 정책을 따라요."].map((item) => (
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
              {[["상품가", deal.price], ["수수료", "0원"], ["쿠폰", "-0원"]].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-[18px] bg-[#fafafe] px-4 py-3 ring-1 ring-black/3">
                  <span className="text-sm text-[#6b7280]">{label}</span>
                  <span className="text-sm font-bold text-[#111827]">{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-[22px] bg-[#1c1c1e] px-5 py-4 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/60">총 결제 예상 금액</p>
              <p className="mt-2 text-3xl font-black">{deal.price}</p>
            </div>
            <button className="mt-5 w-full rounded-full bg-[#4154ff] px-5 py-3 text-sm font-bold text-white shadow-[0_14px_30px_rgba(65,84,255,0.24)]">
              결제 계속하기
            </button>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href={`/tour/${slug}`} className="rounded-full border border-[#dbe1ff] bg-white px-4 py-2 text-sm font-bold text-[#4154ff] shadow-sm">
                상세로 돌아가기
              </Link>
              <Link href="/search" className="rounded-full border border-[#ececf3] bg-white px-4 py-2 text-sm font-bold text-[#4b5563] shadow-sm">
                목록으로 돌아가기
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
