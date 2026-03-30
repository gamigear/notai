import Link from "next/link";
import { supportLinks } from "@/components/home/data";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { DetailBulletList, DetailSection } from "@/components/ui/detail-section";
import { PageIntro } from "@/components/ui/page-intro";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#f6f7fb] px-4 py-6 text-[#111827] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Breadcrumbs items={[{ label: "홈", href: "/" }, { label: "고객지원" }]} />

        <div className="rounded-[28px] bg-white p-5 shadow-[0_18px_56px_rgba(15,23,42,0.06)] sm:p-8">
          <PageIntro
            eyebrow="SUPPORT CENTER"
            title="고객지원"
            description="이용 가이드, 취소/환불, 문의 내역, 자주 묻는 질문으로 확장할 수 있는 고객지원 허브 쉘입니다."
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

          <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <DetailSection title="지원 메뉴" tone="tinted">
              <div className="mt-4 flex flex-wrap gap-2">
                {supportLinks.map((link) => (
                  <span key={link} className="rounded-full border border-[#ececf3] bg-white px-4 py-2 text-sm font-semibold text-[#4b5563] shadow-sm">
                    {link}
                  </span>
                ))}
              </div>
            </DetailSection>

            <DetailSection title="빠른 도움" tone="tinted">
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {["예약 변경/취소", "결제/환불 문의", "티켓 예매 도움", "쿠폰/혜택 문의"].map((item) => (
                  <div key={item} className="rounded-[18px] border border-[#ececf3] bg-white px-4 py-4 text-sm font-semibold text-[#111827]">
                    {item}
                  </div>
                ))}
              </div>
            </DetailSection>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
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

            <DetailSection title="관련 페이지 바로가기">
              <div className="mt-4 grid gap-3">
                {[
                  ["마이페이지", "/mypage"],
                  ["저장한 상품", "/saved"],
                  ["투어 검색", "/search"],
                  ["티켓 랭킹", "/ticket"],
                ].map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    className="rounded-[18px] border border-[#ececf3] bg-[#fafafe] px-4 py-4 text-sm font-semibold text-[#111827] transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    {label}
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
