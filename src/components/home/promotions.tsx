import { appBenefits, liveIssues, promoBanners, themeCollections } from "./data";

export function PromotionsSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="grid gap-5 sm:gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          {promoBanners.map((banner) => (
            <article
              key={banner.title}
              className={`rounded-[28px] bg-gradient-to-br ${banner.accent} p-5 text-white shadow-[0_18px_56px_rgba(15,23,42,0.10)] sm:rounded-[32px] sm:p-8`}
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">{banner.eyebrow}</p>
              <h3 className="mt-4 text-2xl font-black tracking-[-0.04em]">{banner.title}</h3>
              <p className="mt-4 max-w-sm text-sm leading-7 text-white/78">{banner.description}</p>
              <button className="mt-8 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#111827] shadow-sm">지금 보기</button>
            </article>
          ))}
        </div>

        <div className="rounded-[28px] bg-white p-5 shadow-[0_18px_56px_rgba(15,23,42,0.06)] sm:rounded-[32px] sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4154ff]">테마 큐레이션</p>
              <h3 className="mt-2 text-2xl font-black tracking-[-0.03em] text-[#111827] sm:text-3xl">기분에 맞는 여행을 골라보세요</h3>
            </div>
            <span className="w-fit rounded-full bg-[#eef1ff] px-3 py-1 text-xs font-bold text-[#4154ff]">3개 큐레이션</span>
          </div>

          <div className="mt-6 space-y-4">
            {themeCollections.map((collection) => (
              <article key={collection.title} className="rounded-[22px] bg-[#f8f8fc] p-4 ring-1 ring-black/3 sm:rounded-[26px] sm:p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4154ff]">{collection.subtitle}</p>
                    <h4 className="mt-2 text-xl font-black tracking-[-0.03em] text-[#111827]">{collection.title}</h4>
                  </div>
                  <button className="rounded-full border border-[#dbe1ff] bg-white px-3 py-2 text-xs font-bold text-[#4154ff] shadow-sm">
                    더보기
                  </button>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {collection.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#eceef5] bg-white px-3 py-2 text-sm font-semibold text-[#374151] shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-5 sm:mt-6 sm:gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[28px] bg-[#1c1c1e] p-5 text-white shadow-[0_18px_56px_rgba(15,23,42,0.16)] sm:rounded-[32px] sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/60">실시간 이슈</p>
              <h3 className="mt-2 text-2xl font-black tracking-[-0.03em] sm:text-3xl">지금 가장 많이 보고 있는 상품</h3>
            </div>
            <span className="w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/80">LIVE</span>
          </div>

          <div className="mt-6 space-y-3">
            {liveIssues.map((issue, index) => (
              <article key={issue} className="flex gap-4 rounded-[22px] border border-white/8 bg-white/6 p-4 sm:rounded-[24px]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/12 text-sm font-black text-white">
                  0{index + 1}
                </div>
                <p className="text-sm leading-7 text-white/78">{issue}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] bg-white p-5 shadow-[0_18px_56px_rgba(15,23,42,0.06)] sm:rounded-[32px] sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4154ff]">앱 혜택</p>
              <h3 className="mt-2 text-2xl font-black tracking-[-0.03em] text-[#111827] sm:text-3xl">앱에서 누릴 수 있는 편리한 기능</h3>
            </div>
            <span className="w-fit rounded-full bg-[#eef1ff] px-3 py-1 text-xs font-bold text-[#4154ff]">회원혜택</span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {appBenefits.map((benefit) => (
              <article key={benefit.title} className="rounded-[22px] bg-[#f8f8fc] p-4 ring-1 ring-black/3 sm:rounded-[24px] sm:p-5">
                <h4 className="text-lg font-black tracking-[-0.03em] text-[#111827]">{benefit.title}</h4>
                <p className="mt-3 text-sm leading-7 text-[#6b7280]">{benefit.description}</p>
                <button className="mt-5 rounded-full border border-[#ececf3] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#4b5563] shadow-sm">
                  자세히 보기
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
