import { companionOptions } from "./data";

export function HeroSection() {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 pt-6 pb-10 sm:px-6 lg:grid-cols-[1.35fr_0.65fr] lg:px-8">
      <div className="overflow-hidden rounded-[32px] bg-gradient-to-br from-[#5b3df5] via-[#7848ff] to-[#9c6bff] p-8 text-white shadow-[0_24px_80px_rgba(91,61,245,0.24)] sm:p-10">
        <div className="inline-flex rounded-full bg-white/16 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase text-white/90">
          Frontend parity rebuild
        </div>
        <div className="mt-6 max-w-2xl">
          <h2 className="text-3xl font-black leading-tight tracking-[-0.03em] sm:text-5xl">
            Giữ nguyên trải nghiệm cũ, nâng cấp frontend bằng Next.js.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
            Đây là homepage scaffold đầu tiên cho dự án clone nol.interpark.com. Mục tiêu là dựng lại layout,
            nhịp spacing và cách phân tầng nội dung trước khi tinh chỉnh pixel-perfect bằng Frontman.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {companionOptions.map((item) => (
            <article key={item.title} className="rounded-[24px] border border-white/15 bg-white/12 p-5 backdrop-blur-sm">
              <h3 className="text-base font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/78">{item.description}</p>
            </article>
          ))}
        </div>
      </div>

      <aside className="grid gap-6">
        <div className="rounded-[28px] bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7c3aed]">Clone checklist</p>
          <ul className="mt-4 space-y-3 text-sm text-[#374151]">
            <li>• Chụp màn hình desktop / tablet / mobile của site gốc</li>
            <li>• Dựng lại layout và component bằng Next.js App Router</li>
            <li>• Dùng Frontman để kéo spacing, typography và alignment cho sát</li>
            <li>• Modernize dần phần React sau khi UI đã ổn định</li>
          </ul>
        </div>

        <div className="rounded-[28px] bg-[#111827] p-6 text-white shadow-[0_16px_50px_rgba(15,23,42,0.16)]">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">Giai đoạn hiện tại</p>
          <h3 className="mt-3 text-2xl font-bold">Phase 01 · Homepage Scaffold</h3>
          <p className="mt-3 text-sm leading-6 text-white/72">
            Mục tiêu ngay lúc này là tái tạo cấu trúc portal: hero, deal cards, ranking modules và quick categories.
          </p>
        </div>
      </aside>
    </section>
  );
}
