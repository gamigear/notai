import Link from "next/link";
import { bookingStats, travelDeals } from "./data";
import { slugify } from "@/lib/slugify";

export function DealsSection() {
  return (
    <section id="deals" className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="rounded-[28px] bg-white p-5 shadow-[0_18px_56px_rgba(15,23,42,0.06)] sm:rounded-[34px] sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4154ff]">투어 특가</p>
            <h2 className="mt-2 text-2xl font-black tracking-[-0.03em] text-[#111827] sm:text-3xl">마감임박! 금주의 특가 여행 추천</h2>
            <p className="mt-3 text-sm leading-7 text-[#6b7280]">누구와 여행 가시나요? 동행자별 맞춤여행 상품을 모아 보여드립니다.</p>
          </div>
          <Link className="text-sm font-semibold text-[#4154ff]" href="/search">
            전체보기
          </Link>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {bookingStats.map((stat) => (
            <span key={stat} className="rounded-full bg-[#eef1ff] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#4154ff]">
              {stat}
            </span>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
          {travelDeals.map((deal) => (
            <Link
              key={deal.title}
              href={`/tour/${slugify(deal.title)}`}
              className="group overflow-hidden rounded-[24px] bg-[#fbfbfe] ring-1 ring-black/4 transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)] sm:rounded-[28px]"
            >
              <div className={`flex h-40 items-end bg-gradient-to-br ${deal.accent} p-4 sm:h-48 sm:p-5`}>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#4154ff] shadow-sm">{deal.badge}</span>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-lg font-bold leading-7 text-[#111827]">{deal.title}</h3>
                <p className="mt-2 min-h-0 text-sm leading-6 text-[#6b7280] sm:min-h-12">{deal.meta}</p>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <p className="text-base font-black text-[#ff322e]">{deal.price}</p>
                  <span className="rounded-full border border-[#dbe1ff] bg-white px-3 py-1 text-xs font-bold text-[#4154ff] shadow-sm">자세히 보기</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
