import { quickCategories } from "./data";

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
    </section>
  );
}
