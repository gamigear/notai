import Link from "next/link";
import { notFound } from "next/navigation";
import { travelDeals } from "@/components/home/data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/·/g, "-")
    .replace(/[\/\s]+/g, "-")
    .replace(/[^a-z0-9가-힣-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function generateStaticParams() {
  return travelDeals.map((deal) => ({
    slug: slugify(deal.title),
  }));
}

export default async function TourDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const deal = travelDeals.find((item) => slugify(item.title) === slug);

  if (!deal) notFound();

  return (
    <main className="min-h-screen bg-[#f6f7fb] px-4 py-6 text-[#111827] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex items-center gap-2 text-sm text-[#6b7280]">
          <Link href="/" className="hover:text-[#111827]">홈</Link>
          <span>/</span>
          <Link href="/search" className="hover:text-[#111827]">투어 검색</Link>
          <span>/</span>
          <span className="font-semibold text-[#111827]">상품 상세</span>
        </div>

        <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_18px_56px_rgba(15,23,42,0.06)] ring-1 ring-black/4">
          <div className={`h-56 bg-gradient-to-br ${deal.accent} sm:h-72`} />

          <div className="p-5 sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span className="rounded-full bg-[#eef1ff] px-3 py-1 text-xs font-bold text-[#4154ff] shadow-sm">{deal.badge}</span>
                <h1 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#111827]">{deal.title}</h1>
                <p className="mt-3 text-sm leading-7 text-[#6b7280]">{deal.meta}</p>
              </div>
              <div className="rounded-[24px] bg-[#fafafe] p-5 ring-1 ring-black/4 sm:min-w-[280px]">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9ca3af]">판매가</p>
                <p className="mt-2 text-3xl font-black text-[#ff322e]">{deal.price}</p>
                <Link
                  href={`/reserve/tour/${slug}`}
                  className="mt-5 block w-full rounded-full bg-[#1c1c1e] px-5 py-3 text-center text-sm font-bold text-white shadow-[0_14px_30px_rgba(17,24,39,0.18)]"
                >
                  예약하기
                </Link>
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <section className="rounded-[24px] bg-[#fafafe] p-5 ring-1 ring-black/4">
                <h2 className="text-xl font-black text-[#111827]">상품 소개</h2>
                <p className="mt-4 text-sm leading-8 text-[#6b7280]">
                  이 페이지는 NOL 스타일 투어 상세 화면을 확장하기 위한 첫 번째 쉘입니다. 실제 상품 상세, 포함 사항, 불포함 사항,
                  취소/환불 규정, 리뷰, FAQ, 날짜 선택 모듈을 붙일 수 있도록 레이아웃을 먼저 구성했습니다.
                </p>
                <div className="mt-6 space-y-3">
                  {["왕복 항공권 또는 이동 포함 옵션", "숙소 및 핵심 일정 요약", "노쇼핑 / 출발확정 / 가족 추천 등 배지 확장 가능", "취소/환불 규정 및 예약 안내 블록 추가 예정"].map((item) => (
                    <div key={item} className="rounded-[18px] border border-[#ececf3] bg-white px-4 py-3 text-sm text-[#374151]">
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[24px] bg-white p-5 ring-1 ring-black/4">
                <h2 className="text-xl font-black text-[#111827]">예약 전 확인</h2>
                <div className="mt-4 space-y-3">
                  {["출발일과 인원 옵션을 확인해 주세요.", "실시간 인기 상품은 조기 마감될 수 있습니다.", "취소 및 환불 규정은 상품별로 다를 수 있습니다."].map((item, index) => (
                    <div key={item} className="flex gap-3 rounded-[18px] bg-[#f8f8fc] px-4 py-3 ring-1 ring-black/3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4154ff] text-xs font-bold text-white">{index + 1}</span>
                      <p className="text-sm leading-6 text-[#374151]">{item}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <section className="rounded-[24px] bg-white p-5 ring-1 ring-black/4">
                <h2 className="text-xl font-black text-[#111827]">추천 일정</h2>
                <div className="mt-4 space-y-3">
                  {["DAY 1 · 출발 및 도착 후 자유시간", "DAY 2 · 핵심 관광지 + 로컬 체험", "DAY 3 · 자유 일정 또는 선택 투어", "DAY 4+ · 귀국 또는 연장 일정"].map((item) => (
                    <div key={item} className="rounded-[18px] border border-[#ececf3] bg-[#fafafe] px-4 py-3 text-sm text-[#374151]">
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[24px] bg-white p-5 ring-1 ring-black/4">
                <h2 className="text-xl font-black text-[#111827]">리뷰 & 정책</h2>
                <div className="mt-4 space-y-3">
                  {["평점 9점대 후기 블록이 들어갈 자리", "취소/환불 규정 요약 블록", "자주 묻는 질문(FAQ) 아코디언 확장 가능"].map((item) => (
                    <div key={item} className="rounded-[18px] border border-[#ececf3] bg-[#fafafe] px-4 py-3 text-sm text-[#374151]">
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/search" className="rounded-full border border-[#dbe1ff] bg-white px-4 py-2 text-sm font-bold text-[#4154ff] shadow-sm">
                    목록으로 돌아가기
                  </Link>
                  <Link href="/" className="rounded-full border border-[#ececf3] bg-white px-4 py-2 text-sm font-bold text-[#4b5563] shadow-sm">
                    홈으로 이동
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
