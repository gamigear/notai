import { rankingCards } from "./data";

export function RankingSection() {
  return (
    <section id="ranking" className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[32px] bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)] sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7c3aed]">티켓 랭킹</p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.03em] text-[#111827]">Hôm nay xem gì?</h2>
          <p className="mt-3 max-w-lg text-sm leading-7 text-[#6b7280]">
            Module này mô phỏng block ticket ranking của site gốc: headline rõ, danh sách nổi bật và CTA gọn.
          </p>

          <div className="mt-7 space-y-4">
            {rankingCards.map((card) => (
              <article key={card.rank} className="flex gap-4 rounded-[24px] bg-[#f8f8fc] p-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#5b3df5] text-lg font-black text-white">
                  {card.rank}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#111827]">{card.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#6b7280]">{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-dashed border-[#c4b5fd] bg-[#f6f2ff] p-6 sm:p-8" id="parity">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7c3aed]">UI parity plan</p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.03em] text-[#111827]">Các bước tiếp theo nô tài sẽ làm</h2>
          <ol className="mt-6 space-y-4 text-sm leading-7 text-[#374151]">
            <li>
              <span className="font-bold text-[#111827]">1.</span> Chạy local, chụp đối chiếu bố cục homepage giữa site gốc và bản clone.
            </li>
            <li>
              <span className="font-bold text-[#111827]">2.</span> Tách layout thành component: header, hero, category chips, deal cards, ranking block.
            </li>
            <li>
              <span className="font-bold text-[#111827]">3.</span> Dùng Frontman để tinh chỉnh spacing, typography, radius, shadow và responsive.
            </li>
            <li>
              <span className="font-bold text-[#111827]">4.</span> Sau khi homepage ổn mới mở rộng sang subpages và modernize logic React bên dưới.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
