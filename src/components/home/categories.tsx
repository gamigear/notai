import { categoryGrid, destinationHighlights, portalBenefits, quickCategories } from "./data";

export function CategoriesSection() {
  return (
    <section id="categories" className="mx-auto w-full max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
      <div className="rounded-[30px] bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.05)] sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#7c3aed]">Popular destinations</p>
            <h3 className="mt-2 text-2xl font-black tracking-[-0.03em] text-[#111827]">Khối khám phá nhanh theo điểm đến</h3>
          </div>
          <button className="w-fit rounded-full border border-[#ddd6fe] px-4 py-2 text-sm font-bold text-[#6d28d9]">
            Xem tất cả destination
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {destinationHighlights.map((destination) => (
            <span
              key={destination}
              className="rounded-full border border-[#e5e7eb] bg-[#fafafe] px-4 py-2 text-sm font-semibold text-[#374151]"
            >
              {destination}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {quickCategories.map((category) => (
          <span
            key={category}
            className="rounded-full border border-[#e5e7eb] bg-white px-5 py-3 text-sm font-semibold text-[#374151] shadow-sm"
          >
            {category}
          </span>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {categoryGrid.map((item) => (
          <article key={item.title} className="rounded-[28px] bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#7c3aed]">Category lane</p>
            <h3 className="mt-3 text-xl font-black tracking-[-0.03em] text-[#111827]">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[#6b7280]">{item.desc}</p>
            <button className="mt-5 rounded-full border border-[#ececf3] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#4b5563]">
              Explore
            </button>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {portalBenefits.map((benefit) => (
          <article key={benefit.title} className="rounded-[28px] bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#7c3aed]">Portal principle</p>
            <h3 className="mt-3 text-xl font-black tracking-[-0.03em] text-[#111827]">{benefit.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[#6b7280]">{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
