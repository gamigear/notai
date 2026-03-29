import Link from "next/link";
import { travelDeals } from "@/components/home/data";

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/·/g, "-")
    .replace(/[\/\s]+/g, "-")
    .replace(/[^a-z0-9가-힣-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-[#f6f7fb] px-4 py-6 text-[#111827] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[28px] bg-white p-5 shadow-[0_18px_56px_rgba(15,23,42,0.06)] sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4154ff]">SEARCH RESULTS</p>
              <h1 className="mt-2 text-3xl font-black tracking-[-0.03em] text-[#111827]">홍콩/마카오 · 싱가포르 · 유럽 특가 모아보기</h1>
              <p className="mt-3 text-sm leading-7 text-[#6b7280]">
                NOL 스타일 검색 결과 화면의 첫 번째 쉘입니다. 필터, 카드, 가격 정보, CTA 배치를 실제 흐름처럼 확장하기 위한 기반입니다.
              </p>
            </div>
            <Link
              href="/"
              className="w-fit rounded-full border border-[#dbe1ff] bg-white px-4 py-2 text-sm font-bold text-[#4154ff] shadow-sm"
            >
              홈으로 돌아가기
            </Link>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[280px_1fr]">
            <aside className="rounded-[24px] bg-[#fafafe] p-5 ring-1 ring-black/4">
              <h2 className="text-lg font-black text-[#111827]">필터</h2>
              <div className="mt-4 space-y-4">
                {[
                  ["출발 지역", "인천 출발"],
                  ["여행 기간", "4일 ~ 9일"],
                  ["동행", "친구 · 연인 / 가족"],
                  ["가격대", "70만원 ~ 610만원"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[18px] border border-[#ececf3] bg-white px-4 py-3">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9ca3af]">{label}</p>
                    <p className="mt-1 text-sm font-semibold text-[#111827]">{value}</p>
                  </div>
                ))}
              </div>
            </aside>

            <section>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                {["추천순", "낮은 가격순", "출발 임박순", "평점순"].map((sort, index) => (
                  <button
                    key={sort}
                    className={`rounded-full px-4 py-2 text-sm font-semibold ${
                      index === 0 ? "bg-[#4154ff] text-white shadow-[0_10px_24px_rgba(65,84,255,0.26)]" : "bg-white text-[#4b5563] ring-1 ring-black/5"
                    }`}
                  >
                    {sort}
                  </button>
                ))}
              </div>

              <div className="grid gap-4 xl:grid-cols-2">
                {travelDeals.map((deal) => (
                  <article key={deal.title} className="overflow-hidden rounded-[26px] bg-white shadow-[0_14px_40px_rgba(15,23,42,0.06)] ring-1 ring-black/4">
                    <div className={`h-44 bg-gradient-to-br ${deal.accent}`} />
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span className="rounded-full bg-[#eef1ff] px-3 py-1 text-xs font-bold text-[#4154ff] shadow-sm">{deal.badge}</span>
                          <h3 className="mt-3 text-xl font-black tracking-[-0.03em] text-[#111827]">{deal.title}</h3>
                        </div>
                        <span className="rounded-full border border-[#ececf3] bg-white px-3 py-1 text-xs font-bold text-[#4b5563] shadow-sm">즉시예약</span>
                      </div>

                      <p className="mt-3 text-sm leading-7 text-[#6b7280]">{deal.meta}</p>

                      <div className="mt-5 flex items-center justify-between gap-4">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9ca3af]">판매가</p>
                          <p className="mt-1 text-lg font-black text-[#ff322e]">{deal.price}</p>
                        </div>
                        <Link
                          href={`/tour/${slugify(deal.title)}`}
                          className="rounded-full bg-[#1c1c1e] px-5 py-3 text-sm font-bold text-white shadow-[0_14px_30px_rgba(17,24,39,0.18)]"
                        >
                          상품 보기
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
