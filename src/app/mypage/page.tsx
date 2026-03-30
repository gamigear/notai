import Link from "next/link";
import { membershipBenefits, supportLinks } from "@/components/home/data";

export default function MyPage() {
  return (
    <main className="min-h-screen bg-[#f6f7fb] px-4 py-6 text-[#111827] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[28px] bg-white p-5 shadow-[0_18px_56px_rgba(15,23,42,0.06)] sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4154ff]">MY PAGE</p>
              <h1 className="mt-2 text-3xl font-black tracking-[-0.03em] text-[#111827]">마이페이지</h1>
              <p className="mt-3 text-sm leading-7 text-[#6b7280]">
                예약 내역, 쿠폰, 최근 본 상품, 고객지원 진입점을 담는 사용자 계정 레이어의 첫 번째 쉘입니다.
              </p>
            </div>
            <Link href="/saved" className="w-fit rounded-full border border-[#dbe1ff] bg-white px-4 py-2 text-sm font-bold text-[#4154ff] shadow-sm">
              저장한 상품 보기
            </Link>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <section className="rounded-[24px] bg-[#fafafe] p-5 ring-1 ring-black/4">
              <h2 className="text-xl font-black text-[#111827]">회원 혜택</h2>
              <div className="mt-4 space-y-3">
                {membershipBenefits.map((benefit) => (
                  <div key={benefit} className="rounded-[18px] border border-[#ececf3] bg-white px-4 py-3 text-sm text-[#374151]">
                    {benefit}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[24px] bg-[#fafafe] p-5 ring-1 ring-black/4">
              <h2 className="text-xl font-black text-[#111827]">고객지원 바로가기</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {supportLinks.map((link) => (
                  <span key={link} className="rounded-full border border-[#ececf3] bg-white px-4 py-2 text-sm font-semibold text-[#4b5563] shadow-sm">
                    {link}
                  </span>
                ))}
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "예약 내역",
                  "쿠폰함",
                  "최근 본 상품",
                  "문의 내역",
                ].map((item) => (
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
