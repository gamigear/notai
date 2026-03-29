import { bookingStats, travelDeals } from "./data";

export function DealsSection() {
  return (
    <section id="deals" className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-[34px] bg-white p-6 shadow-[0_18px_56px_rgba(15,23,42,0.06)] sm:p-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7c3aed]">투어 특가</p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.03em] text-[#111827]">Tour deals nổi bật tuần này</h2>
          </div>
          <a className="text-sm font-semibold text-[#5b3df5]" href="#">
            Xem tất cả
          </a>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {bookingStats.map((stat) => (
            <span key={stat} className="rounded-full bg-[#f5f3ff] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#7c3aed]">
              {stat}
            </span>
          ))}
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {travelDeals.map((deal) => (
            <article
              key={deal.title}
              className="group overflow-hidden rounded-[28px] bg-[#fbfbfe] ring-1 ring-black/4 transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)]"
            >
              <div className="flex h-48 items-end bg-gradient-to-br from-[#dbd4ff] via-[#b9c5ff] to-[#ffd7ef] p-5">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#5b3df5]">{deal.badge}</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold leading-7 text-[#111827]">{deal.title}</h3>
                <p className="mt-2 min-h-12 text-sm leading-6 text-[#6b7280]">{deal.meta}</p>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <p className="text-base font-black text-[#ef4444]">{deal.price}</p>
                  <span className="rounded-full bg-[#ede9fe] px-3 py-1 text-xs font-bold text-[#6d28d9]">Đặt ngay</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
