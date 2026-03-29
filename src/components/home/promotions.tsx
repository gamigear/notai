import { appBenefits, liveIssues, promoBanners, themeCollections } from "./data";

export function PromotionsSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-6 md:grid-cols-2">
          {promoBanners.map((banner) => (
            <article
              key={banner.title}
              className={`rounded-[32px] bg-gradient-to-br ${banner.accent} p-6 text-white shadow-[0_18px_56px_rgba(15,23,42,0.10)] sm:p-8`}
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">{banner.eyebrow}</p>
              <h3 className="mt-4 text-2xl font-black tracking-[-0.04em]">{banner.title}</h3>
              <p className="mt-4 max-w-sm text-sm leading-7 text-white/78">{banner.description}</p>
              <button className="mt-8 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#111827]">Khám phá ngay</button>
            </article>
          ))}
        </div>

        <div className="rounded-[32px] bg-white p-6 shadow-[0_18px_56px_rgba(15,23,42,0.06)] sm:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7c3aed]">Themed curation</p>
              <h3 className="mt-2 text-3xl font-black tracking-[-0.03em] text-[#111827]">Chọn theo mood du lịch</h3>
            </div>
            <span className="rounded-full bg-[#f5f3ff] px-3 py-1 text-xs font-bold text-[#7c3aed]">3 bộ sưu tập</span>
          </div>

          <div className="mt-6 space-y-4">
            {themeCollections.map((collection) => (
              <article key={collection.title} className="rounded-[26px] bg-[#f8f8fc] p-5 ring-1 ring-black/3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#7c3aed]">{collection.subtitle}</p>
                    <h4 className="mt-2 text-xl font-black tracking-[-0.03em] text-[#111827]">{collection.title}</h4>
                  </div>
                  <button className="rounded-full border border-[#ddd6fe] px-3 py-2 text-xs font-bold text-[#6d28d9]">
                    Xem thêm
                  </button>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {collection.items.map((item) => (
                    <span key={item} className="rounded-full bg-white px-3 py-2 text-sm font-semibold text-[#374151] shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[32px] bg-[#111827] p-6 text-white shadow-[0_18px_56px_rgba(15,23,42,0.16)] sm:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/60">Live issues</p>
              <h3 className="mt-2 text-3xl font-black tracking-[-0.03em]">Những gì đang nóng lúc này</h3>
            </div>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/80">Realtime vibe</span>
          </div>

          <div className="mt-6 space-y-3">
            {liveIssues.map((issue, index) => (
              <article key={issue} className="flex gap-4 rounded-[24px] border border-white/8 bg-white/6 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/12 text-sm font-black text-white">
                  0{index + 1}
                </div>
                <p className="text-sm leading-7 text-white/78">{issue}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] bg-white p-6 shadow-[0_18px_56px_rgba(15,23,42,0.06)] sm:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7c3aed]">App & loyalty</p>
              <h3 className="mt-2 text-3xl font-black tracking-[-0.03em] text-[#111827]">Các lợi ích giữ chân người dùng</h3>
            </div>
            <span className="rounded-full bg-[#f5f3ff] px-3 py-1 text-xs font-bold text-[#7c3aed]">Retention layer</span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {appBenefits.map((benefit) => (
              <article key={benefit.title} className="rounded-[24px] bg-[#f8f8fc] p-5 ring-1 ring-black/3">
                <h4 className="text-lg font-black tracking-[-0.03em] text-[#111827]">{benefit.title}</h4>
                <p className="mt-3 text-sm leading-7 text-[#6b7280]">{benefit.description}</p>
                <button className="mt-5 rounded-full border border-[#ececf3] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#4b5563]">
                  Learn more
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
