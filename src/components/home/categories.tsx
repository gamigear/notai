import { portalBenefits, quickCategories } from "./data";

export function CategoriesSection() {
  return (
    <section id="categories" className="mx-auto w-full max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
      <div className="flex flex-wrap gap-3">
        {quickCategories.map((category) => (
          <span
            key={category}
            className="rounded-full border border-[#e5e7eb] bg-white px-5 py-3 text-sm font-semibold text-[#374151] shadow-sm"
          >
            {category}
          </span>
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
