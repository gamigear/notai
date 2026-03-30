import Link from "next/link";
import { supportLinks } from "@/components/home/data";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
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
              <Link href="/mypage" className="w-fit rounded-full border border-[#dbe1ff] bg-white px-4 py-2 text-sm font-bold text-[#4154ff] shadow-sm">
                마이페이지로 이동
              </Link>
            }
          />

          <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <section className="rounded-[24px] bg-[#fafafe] p-5 ring-1 ring-black/4">
              <h2 className="text-xl font-black text-[#111827]">지원 메뉴</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {supportLinks.map((link) => (
                  <span key={link} className="rounded-full border border-[#ececf3] bg-white px-4 py-2 text-sm font-semibold text-[#4b5563] shadow-sm">
                    {link}
                  </span>
                ))}
              </div>
            </section>

            <section className="rounded-[24px] bg-[#fafafe] p-5 ring-1 ring-black/4">
              <h2 className="text-xl font-black text-[#111827]">빠른 도움</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {["예약 변경/취소", "결제/환불 문의", "티켓 예매 도움", "쿠폰/혜택 문의"].map((item) => (
                  <div key={item} className="rounded-[18px] border border-[#ececf3] bg-white px-4 py-4 text-sm font-semibold text-[#111827]">
                    {item}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
