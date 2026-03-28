import { travelDeals } from "./data";

export function DealsSection() {
  return (
    <section id="deals" className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7c3aed]">투어 특가</p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.03em] text-[#111827]">Tour deals nổi bật tuần này</h2>
        </div>
        <a className="text-sm font-semibold text-[#5b3df5]" href="#">
          Xem tất cả
        </a>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {travelDeals.map((deal) => (
          <article
            key={deal.title}
            className="group overflow-hidden rounded-[28px] bg-white shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
          >
            <div className="flex h-48 items-end bg-gradient-to-br from-[#dbd4ff] via-[#b9c5ff] to-[#ffd7ef] p-5">
              <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#5b3df5]">{deal.badge}</span>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold leading-7 text-[#111827]">{deal.title}</h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-[#6b7280]">{deal.meta}</p>
              <p className="mt-5 text-base font-black text-[#ef4444]">{deal.price}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
