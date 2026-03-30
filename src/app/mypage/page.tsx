import Link from "next/link";
import { membershipBenefits, supportLinks } from "@/components/home/data";
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

export default function MyPage() {
  return (
    <main className="min-h-screen bg-[#f6f7fb] px-4 py-6 text-[#111827] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Breadcrumbs items={[{ label: "홈", href: "/" }, { label: "마이페이지" }]} />

        <div className="rounded-[28px] bg-white p-5 shadow-[0_18px_56px_rgba(15,23,42,0.06)] sm:p-8">
          <PageIntro
            eyebrow="MY PAGE"
            title="마이페이지"
            description="예약 내역, 쿠폰, 최근 본 상품, 고객지원 진입점을 담는 사용자 계정 레이어의 첫 번째 쉘입니다."
            actions={
              <>
                <Link href="/saved" className="w-fit rounded-full border border-[#dbe1ff] bg-white px-4 py-2 text-sm font-bold text-[#4154ff] shadow-sm">
                  저장한 상품 보기
                </Link>
                <Link href="/support" className="w-fit rounded-full border border-[#ececf3] bg-white px-4 py-2 text-sm font-bold text-[#4b5563] shadow-sm">
                  고객지원
                </Link>
              </>
            }
          />

          <SubpageNav items={subpageItems} current="/mypage" />

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["예약 내역", "4건", "투어/티켓 흐름을 다시 이어볼 수 있어요"],
              ["저장한 상품", "4개", "저장함과 최근 본 흐름이 연결돼 있어요"],
              ["문의 내역", "2건", "고객지원으로 바로 이어지는 상태 허브입니다"],
            ].map(([label, value, desc]) => (
              <div key={label} className="rounded-[22px] bg-[#fafafe] px-5 py-4 ring-1 ring-black/4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9ca3af]">{label}</p>
                <p className="mt-2 text-2xl font-black tracking-[-0.03em] text-[#111827]">{value}</p>
                <p className="mt-2 text-sm leading-6 text-[#6b7280]">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <DetailSection title="회원 혜택" tone="tinted">
              <DetailBulletList items={membershipBenefits} />
            </DetailSection>

            <DetailSection title="고객지원 바로가기" tone="tinted">
              <div className="mt-4 flex flex-wrap gap-2">
                {supportLinks.map((link) => (
                  <Link
                    key={link}
                    href="/support"
                    className="rounded-full border border-[#ececf3] bg-white px-4 py-2 text-sm font-semibold text-[#4b5563] shadow-sm"
                  >
                    {link}
                  </Link>
                ))}
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  ["예약 내역", "최근 예약 흐름 다시 보기"],
                  ["쿠폰함", "앱 혜택과 함께 확인"],
                  ["최근 본 상품", "saved/recent 흐름 이어보기"],
                  ["문의 내역", "지원 흐름 바로 이동"],
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
            <DetailSection title="계정에서 자주 이어보기">
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  ["저장한 상품", "/saved", "saved state 이어보기"],
                  ["고객지원", "/support", "문의 흐름 바로 이동"],
                  ["투어 검색", "/search", "여행 탐색 계속하기"],
                  ["티켓 랭킹", "/ticket", "공연 탐색 계속하기"],
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

            <DetailSection title="이용 팁">
              <DetailBulletList
                items={[
                  "여행과 티켓을 저장해두면 마이페이지에서 빠르게 비교할 수 있어요.",
                  "고객지원 바로가기를 통해 취소/환불 문의 흐름을 바로 이어갈 수 있습니다.",
                  "예약 내역, 쿠폰함, 문의 내역을 한 화면에서 묶어 보는 방향으로 확장하기 좋은 구조입니다.",
                ]}
                itemTone="soft"
              />
            </DetailSection>
          </div>
        </div>
      </div>
    </main>
  );
}
