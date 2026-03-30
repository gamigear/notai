import Link from "next/link";
import { appBenefits, rankingCards, travelDeals } from "@/components/home/data";

export default function SavedPage() {
  return (
    <main className="min-h-screen bg-[#f6f7fb] px-4 py-6 text-[#111827] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[28px] bg-white p-5 shadow-[0_18px_56px_rgba(15,23,42,0.06)] sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4154ff]">SAVED ITEMS</p>
              <h1 className="mt-2 text-3xl font-black tracking-[-0.03em] text-[#111827]">저장한 상품</h1>
              <p className="mt-3 text-sm leading-7 text-[#6b7280]">
                관심 있는 여행, 티켓, 앱 혜택을 다시 빠르게 이어볼 수 있도록 구성한 저장함 쉘입니다.
              </p>
            </div>
            <Link href="/mypage" className="w-fit rounded-full bg-[#1c1c1e] px-5 py-3 text-sm font-bold text-white shadow-[0_14px_30px_rgba(17,24,39,0.18)]">
              마이페이지로 이동
            </Link>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="rounded-[24px] bg-[#fafafe] p-5 ring-1 ring-black/4">
              <h2 className="text-xl font-black text-[#111827]">저장한 여행</h2>
              <div className="mt-4 space-y-3">
                {travelDeals.slice(0, 2).map((deal) => (
                  <div key={deal.title} className="rounded-[18px] border border-[#ececf3] bg-white px-4 py-4">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9ca3af]">{deal.badge}</p>
                    <h3 className="mt-2 text-lg font-black text-[#111827]">{deal.title}</h3>
                    <p className="mt-2 text-sm text-[#6b7280]">{deal.price}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[24px] bg-[#fafafe] p-5 ring-1 ring-black/4">
              <h2 className="text-xl font-black text-[#111827]">저장한 티켓</h2>
              <div className="mt-4 space-y-3">
                {rankingCards.slice(0, 2).map((card) => (
                  <div key={card.title} className="rounded-[18px] border border-[#ececf3] bg-white px-4 py-4">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9ca3af]">RANK {card.rank}</p>
                    <h3 className="mt-2 text-lg font-black text-[#111827]">{card.title}</h3>
                    <p className="mt-2 text-sm text-[#6b7280]">{card.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="mt-6 rounded-[24px] bg-white p-5 ring-1 ring-black/4">
            <h2 className="text-xl font-black text-[#111827]">앱에서 이어보기</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {appBenefits.map((benefit) => (
                <div key={benefit.title} className="rounded-[18px] bg-[#fafafe] px-4 py-4 ring-1 ring-black/3">
                  <h3 className="text-lg font-black text-[#111827]">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#6b7280]">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
