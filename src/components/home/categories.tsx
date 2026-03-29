import { categoryGrid, destinationHighlights, portalBenefits, quickCategories } from "./data";

export function CategoriesSection() {
  return (
    <section id="categories" className="mx-auto w-full max-w-7xl px-4 pb-4 sm:px-6 sm:pb-6 lg:px-8">
      <div className="rounded-[24px] bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.05)] sm:rounded-[30px] sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#4154ff]">인기 여행지</p>
            <h3 className="mt-2 text-xl font-black tracking-[-0.03em] text-[#111827] sm:text-2xl">지금 많이 찾는 여행지를 빠르게 둘러보세요</h3>
          </div>
          <button className="w-fit rounded-full border border-[#dbe1ff] px-4 py-2 text-sm font-bold text-[#4154ff]">
            전체 여행지 보기
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

      <div className="mt-5 flex flex-wrap gap-3 sm:mt-6">
        {quickCategories.map((category) => (
          <span
            key={category}
            className="rounded-full border border-[#e5e7eb] bg-white px-5 py-3 text-sm font-semibold text-[#374151] shadow-sm"
          >
            {category}
          </span>
        ))}
      </div>

      <div className="mt-5 grid gap-4 sm:mt-6 lg:grid-cols-4">
        {categoryGrid.map((item) => (
          <article key={item.title} className="rounded-[24px] bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.05)] sm:rounded-[28px] sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4154ff]">추천 카테고리</p>
            <h3 className="mt-3 text-xl font-black tracking-[-0.03em] text-[#111827]">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[#6b7280]">{item.desc}</p>
            <button className="mt-5 rounded-full border border-[#ececf3] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#4b5563]">
              자세히 보기
            </button>
          </article>
        ))}
      </div>

      <div className="mt-5 grid gap-4 sm:mt-6 lg:grid-cols-3">
        {portalBenefits.map((benefit) => (
          <article key={benefit.title} className="rounded-[24px] bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.05)] sm:rounded-[28px] sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4154ff]">서비스 특징</p>
            <h3 className="mt-3 text-xl font-black tracking-[-0.03em] text-[#111827]">{benefit.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[#6b7280]">{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
