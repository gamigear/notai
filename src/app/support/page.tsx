import Link from "next/link";
import { supportLinks } from "@/components/home/data";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { DetailBulletList, DetailSection } from "@/components/ui/detail-section";
import { PageIntro } from "@/components/ui/page-intro";
import { SubpageNav } from "@/components/ui/subpage-nav";

const subpageItems = [
  { label: "투어 검색", href: "/search" },
  { label: "티켓 랭킹", href: "/ticket" },
  { label: "저장한 상품", href: "/saved" },
  { label: "마이페이지", href: "/mypage" },
  { label: "고객지원", href: "/support" },
];

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#f6f7fb] px-4 py-6 text-[#111827] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Breadcrumbs items={[{ label: "홈", href: "/" }, { label: "고객지원" }]} />

        <div className="rounded-[28px] bg-white p-5 shadow-[0_18px_56px_rgba(15,23,42,0.06)] sm:p-8">
          <PageIntro
            eyebrow="SUPPORT CENTER"
            title="고객지원"
            description="이용 가이드, 취소/환불, 문의 흐름, 자주 찾는 도움을 한 번에 모은 지원 허브입니다. 예약과 예매 흐름에서 막히지 않도록 연결을 정리했습니다."
            actions={
              <>
                <Link href="/mypage" className="w-fit rounded-full border border-[#dbe1ff] bg-white px-4 py-2 text-sm font-bold text-[#4154ff] shadow-sm">
                  마이페이지로 이동
                </Link>
                <Link href="/saved" className="w-fit rounded-full border border-[#ececf3] bg-white px-4 py-2 text-sm font-bold text-[#4b5563] shadow-sm">
                  저장한 상품
                </Link>
              </>
            }
          />

          <SubpageNav items={subpageItems} current="/support" />

          <div className="mt-5 rounded-[22px] bg-[#f7f8ff] px-5 py-4 ring-1 ring-[#dfe4ff]">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4154ff]">HELP RIGHT NOW</p>
            <p className="mt-2 text-sm font-semibold text-[#111827]">예약 변경/취소, 결제/환불, 티켓 예매 도움처럼 실제로 자주 이어지는 지원 흐름을 먼저 볼 수 있도록 정리했습니다.</p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["문의 내역", "2건", "당신의 최근 문의 흐름을 마이페이지와 함께 확인해 보세요"],
              ["자주 찾는 도움", "4개", "예약/환불/예매 관련 개인화된 빠른 진입점처럼 이어집니다"],
              ["연결된 흐름", "3개", "saved / mypage / search/ticket 흐름과 자연스럽게 이어집니다"],
            ].map(([label, value, desc]) => (
              <div key={label} className="rounded-[22px] bg-[#fafafe] px-5 py-4 ring-1 ring-black/4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9ca3af]">{label}</p>
                <p className="mt-2 text-2xl font-black tracking-[-0.03em] text-[#111827]">{value}</p>
                <p className="mt-2 text-sm leading-6 text-[#6b7280]">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <DetailSection title="지원 메뉴" subtitle="가장 자주 찾는 지원 카테고리를 빠르게 열어볼 수 있는 구간입니다." tone="tinted">
              <div className="mt-4 flex flex-wrap gap-2">
                {supportLinks.map((link) => (
                  <Link key={link} href="/support" className="rounded-full border border-[#ececf3] bg-white px-4 py-2 text-sm font-semibold text-[#4b5563] shadow-sm">
                    {link}
                  </Link>
                ))}
              </div>
            </DetailSection>

            <DetailSection title="빠른 도움" subtitle="실제로 가장 자주 막히는 예약/환불/예매 포인트를 먼저 확인하는 구간입니다." tone="tinted">
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  ["예약 변경/취소", "예약 흐름에서 바로 이어지는 문의"],
                  ["결제/환불 문의", "결제 요약 이후 자주 연결되는 도움"],
                  ["티켓 예매 도움", "회차/좌석/예매 흐름 지원"],
                  ["쿠폰/혜택 문의", "앱 혜택, 마이페이지와 연결"],
                ].map(([item, sub]) => (
                  <div key={item} className="rounded-[18px] border border-[#ececf3] bg-white px-4 py-4">
                    <p className="text-sm font-semibold text-[#111827]">{item}</p>
                    <p className="mt-1 text-xs font-semibold text-[#9ca3af]">{sub}</p>
                  </div>
                ))}
              </div>
            </DetailSection>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <DetailSection title="NEXT BEST ACTION" tone="tinted">
              <DetailBulletList
                items={[
                  "먼저 자주 찾는 도움말에서 스스로 해결 가능한 조건을 확인해 보세요.",
                  "결제/환불이나 예매 조건처럼 바로 막히는 항목을 우선 확인하면 좋아요.",
                  "확인이 끝나면 search, ticket, mypage 흐름으로 자연스럽게 돌아갈 수 있습니다.",
                ]}
                itemTone="soft"
              />
            </DetailSection>

            <DetailSection title="자주 찾는 도움말">
              <DetailBulletList
                items={[
                  "결제 후 예약 확정까지 걸리는 시간 안내",
                  "취소/환불 규정과 수수료 확인",
                  "티켓 오픈 시간, 좌석, 회차 선택 도움",
                  "쿠폰/혜택 적용 조건과 사용 순서",
                ]}
                itemTone="soft"
              />
            </DetailSection>

            <DetailSection title="지원 흐름 바로가기">
              <p className="mt-4 text-xs font-semibold text-[#9ca3af]">도움 확인 후 원래 하던 흐름으로 자연스럽게 돌아가기 좋은 진입점입니다.</p>
              <div className="mt-4 grid gap-3">
                {[
                  ["마이페이지", "/mypage", "문의/예약 상태와 함께 보기"],
                  ["저장한 상품", "/saved", "saved/recent 흐름과 연결"],
                  ["투어 검색", "/search", "여행 상품 흐름으로 복귀"],
                  ["티켓 랭킹", "/ticket", "공연 예매 흐름으로 복귀"],
                ].map(([label, href, sub]) => (
                  <Link
                    key={label}
                    href={href}
                    className="rounded-[18px] border border-[#ececf3] bg-[#fafafe] px-4 py-4 transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    <p className="text-sm font-semibold text-[#111827]">{label}</p>
                    <p className="mt-1 text-xs font-semibold text-[#9ca3af]">{sub}</p>
                  </Link>
                ))}
              </div>
            </DetailSection>
          </div>
        </div>
      </div>
    </main>
  );
}
