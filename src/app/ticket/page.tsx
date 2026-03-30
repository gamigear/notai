import Link from "next/link";
import { rankingCards } from "@/components/home/data";

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/·/g, "-")
    .replace(/[\/\s]+/g, "-")
    .replace(/[^a-z0-9가-힣-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function TicketPage() {
  return (
    <main className="min-h-screen bg-[#f6f7fb] px-4 py-6 text-[#111827] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex items-center gap-2 text-sm text-[#6b7280]">
          <Link href="/" className="hover:text-[#111827]">홈</Link>
          <span>/</span>
          <span className="font-semibold text-[#111827]">티켓 랭킹</span>
        </div>

        <div className="rounded-[28px] bg-white p-5 shadow-[0_18px_56px_rgba(15,23,42,0.06)] sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4154ff]">TICKET RANKING</p>
              <h1 className="mt-2 text-3xl font-black tracking-[-0.03em] text-[#111827]">오늘 뭐볼까? 지금 HOT한 공연</h1>
              <p className="mt-3 text-sm leading-7 text-[#6b7280]">
                공연 · 전시 · 콘서트 카테고리를 위한 별도 티켓 흐름 쉘입니다. 랭킹 기반 탐색과 상세 페이지 이동 흐름을 확장합니다.
              </p>
            </div>
            <Link href="/" className="w-fit rounded-full border border-[#dbe1ff] bg-white px-4 py-2 text-sm font-bold text-[#4154ff] shadow-sm">
              홈으로 돌아가기
            </Link>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {["뮤지컬", "콘서트", "클래식", `${rankingCards.length}개 랭킹`].map((chip, index) => (
              <span
                key={chip}
                className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] ${
                  index === 3 ? "bg-[#4154ff] text-white shadow-[0_10px_24px_rgba(65,84,255,0.26)]" : "bg-[#eef1ff] text-[#4154ff]"
                }`}
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-4 xl:grid-cols-3">
            {rankingCards.map((card) => (
              <article key={card.rank} className="overflow-hidden rounded-[26px] bg-white shadow-[0_14px_40px_rgba(15,23,42,0.06)] ring-1 ring-black/4">
                <div className="flex h-40 items-end bg-gradient-to-br from-[#17181f] via-[#232734] to-[#3a4256] p-5">
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#111827] shadow-sm">RANK {card.rank}</span>
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-black tracking-[-0.03em] text-[#111827]">{card.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#6b7280]">{card.description}</p>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <span className="rounded-full border border-[#ececf3] bg-white px-3 py-1 text-xs font-bold text-[#4b5563] shadow-sm">실시간 예매</span>
                    <Link
                      href={`/ticket/${slugify(card.title)}`}
                      className="rounded-full bg-[#1c1c1e] px-5 py-3 text-sm font-bold text-white shadow-[0_14px_30px_rgba(17,24,39,0.18)]"
                    >
                      상세 보기
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
