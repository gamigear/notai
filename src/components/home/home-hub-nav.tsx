import { SubpageNav } from "@/components/ui/subpage-nav";

const subpageItems = [
  { label: "투어 검색", href: "/search" },
  { label: "티켓 랭킹", href: "/ticket" },
  { label: "저장한 상품", href: "/saved" },
  { label: "마이페이지", href: "/mypage" },
  { label: "고객지원", href: "/support" },
];

export function HomeHubNav() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-2 sm:px-6 lg:px-8">
      <div className="rounded-[28px] bg-white p-5 shadow-[0_18px_56px_rgba(15,23,42,0.06)] sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4154ff]">APP FLOW FOR YOU</p>
            <h2 className="mt-2 text-2xl font-black tracking-[-0.03em] text-[#111827] sm:text-3xl">홈에서 바로 이어지는 핵심 탐색 흐름</h2>
            <p className="mt-3 text-sm leading-7 text-[#6b7280]">
              최근 본 상품, 저장한 공연, 마이페이지 흐름까지 자연스럽게 이어지도록 주요 진입점을 한곳에 정리했습니다.
            </p>
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9ca3af]">Home → Search / Ticket / Saved / MyPage / Support</p>
        </div>

        <SubpageNav items={subpageItems} />
      </div>
    </section>
  );
}
