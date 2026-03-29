import { paritySteps, rankingCards, rankingNotices } from "./data";

export function RankingSection() {
  return (
    <section id="ranking" className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="rounded-[32px] bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)] sm:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7c3aed]">티켓 랭킹</p>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.03em] text-[#111827]">오늘 뭐 볼까? 지금 HOT한 공연</h2>
            </div>
            <span className="rounded-full bg-[#f5f3ff] px-3 py-1 text-xs font-bold text-[#7c3aed]">실시간 반영</span>
          </div>

          <p className="mt-3 max-w-lg text-sm leading-7 text-[#6b7280]">
            실시간 관심도가 높은 공연과 티켓을 한 번에 살펴보고, 예매 전환이 빠른 상품부터 먼저 확인할 수 있습니다.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {rankingNotices.map((notice) => (
              <span key={notice} className="rounded-full bg-[#f8f8fc] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#6b7280]">
                {notice}
              </span>
            ))}
          </div>

          <div className="mt-7 space-y-4">
            {rankingCards.map((card) => (
              <article key={card.rank} className="flex gap-4 rounded-[24px] bg-[#f8f8fc] p-4 ring-1 ring-black/3">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#5b3df5] text-lg font-black text-white">
                  {card.rank}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-bold text-[#111827]">{card.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#6b7280]">{card.description}</p>
                </div>
                <button className="self-center rounded-full border border-[#ddd6fe] px-3 py-2 text-xs font-bold text-[#6d28d9]">
                  예매하기
                </button>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-dashed border-[#c4b5fd] bg-[#f6f2ff] p-6 sm:p-8" id="parity">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7c3aed]">이용 안내</p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.03em] text-[#111827]">예약 전에 꼭 확인해 주세요</h2>
          <ol className="mt-6 space-y-4 text-sm leading-7 text-[#374151]">
            {paritySteps.map((step, index) => (
              <li key={step}>
                <span className="font-bold text-[#111827]">{index + 1}.</span> {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
