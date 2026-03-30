import Link from "next/link";
import { paritySteps, rankingCards, rankingNotices } from "./data";
import { slugify } from "@/lib/slugify";

export function RankingSection() {
  return (
    <section id="ranking" className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="grid gap-5 sm:gap-6 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="rounded-[28px] bg-white p-5 shadow-[0_16px_50px_rgba(15,23,42,0.06)] sm:rounded-[32px] sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4154ff]">티켓 랭킹</p>
              <h2 className="mt-2 text-2xl font-black tracking-[-0.03em] text-[#111827] sm:text-3xl">오늘 뭐볼까? 지금 HOT한 공연</h2>
            </div>
            <Link href="/ticket" className="w-fit rounded-full bg-[#eef1ff] px-3 py-1 text-xs font-bold text-[#4154ff]">
              전체 랭킹 보기
            </Link>
          </div>

          <p className="mt-3 max-w-lg text-sm leading-7 text-[#6b7280]">
            실시간 관심도가 높은 공연과 티켓을 한 번에 살펴보고, 랭킹 흐름과 저장 상태, 최근 관심 패턴을 함께 보며 빠르게 비교할 수 있습니다.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {rankingNotices.map((notice) => (
              <span key={notice} className="rounded-full bg-[#f8f8fc] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#6b7280]">
                {notice}
              </span>
            ))}
          </div>

          <div className="mt-6 space-y-3 sm:mt-7 sm:space-y-4">
            {rankingCards.map((card) => (
              <article key={card.rank} className="flex gap-3 rounded-[20px] bg-[#f8f8fc] p-4 ring-1 ring-black/3 sm:gap-4 sm:rounded-[24px]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#4154ff] text-base font-black text-white sm:h-14 sm:w-14 sm:text-lg">
                  {card.rank}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-bold text-[#111827]">{card.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#6b7280]">{card.description}</p>
                </div>
                <Link
                  href={`/ticket/${slugify(card.title)}`}
                  className="self-center rounded-full border border-[#dbe1ff] bg-white px-3 py-2 text-xs font-bold text-[#4154ff] shadow-sm"
                >
                  자세히 보기
                </Link>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-dashed border-[#cfd8ff] bg-[#f6f8ff] p-5 sm:rounded-[32px] sm:p-8" id="parity">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4154ff]">이용 안내</p>
          <h2 className="mt-2 text-2xl font-black tracking-[-0.03em] text-[#111827] sm:text-3xl">예약 전에 꼭 확인해 주세요</h2>
          <ol className="mt-6 space-y-4 text-sm leading-7 text-[#374151]">
            {paritySteps.map((step, index) => (
              <li key={step}>
                <span className="font-bold text-[#111827]">{index + 1}.</span> {step}
              </li>
            ))}
          </ol>
          <Link
            href="/support"
            className="mt-6 inline-flex rounded-full border border-[#dbe1ff] bg-white px-4 py-2 text-sm font-bold text-[#4154ff] shadow-sm"
          >
            고객지원 바로가기
          </Link>
        </div>
      </div>
    </section>
  );
}
