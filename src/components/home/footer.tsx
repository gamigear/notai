import Image from "next/image";
import { membershipBenefits, mobileQuickActions, supportLinks } from "./data";

export function Footer() {
  return (
    <>
      <footer className="mt-8 border-t border-black/5 bg-white pb-24 md:pb-0">
        <div className="mx-auto w-full max-w-7xl px-4 pt-8 pb-0 sm:px-6 sm:pt-10 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[28px] bg-gradient-to-br from-[#4154ff] via-[#6b4ef7] to-[#a94df5] p-5 text-white shadow-[0_18px_56px_rgba(65,84,255,0.22)] sm:rounded-[32px] sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">앱 혜택</p>
              <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <h3 className="text-2xl font-black tracking-[-0.04em] sm:text-3xl">앱에서 더 빠르게, 더 큰 혜택으로 예약하세요.</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80">
                    실시간 인기 상품 확인부터 쿠폰 적용, 저장한 상품 다시 보기까지. 여행과 공연 예매를 더 빠르게 이어갈 수 있도록
                    주요 혜택을 한곳에 담았습니다.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button className="rounded-full bg-white px-5 py-3 text-sm font-bold text-[#111827] shadow-sm">앱 혜택 보기</button>
                  <button className="rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white">최근 본 상품</button>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] bg-[#1c1c1e] p-5 text-white shadow-[0_18px_56px_rgba(15,23,42,0.18)] sm:rounded-[32px] sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">Membership value</p>
              <h3 className="mt-3 text-2xl font-black tracking-[-0.04em] sm:text-3xl">다시 찾을수록 더 편리해집니다.</h3>
              <div className="mt-5 space-y-3">
                {membershipBenefits.map((benefit) => (
                  <div key={benefit} className="rounded-[22px] border border-white/10 bg-white/6 px-4 py-3 text-sm font-medium text-white/80">
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <Image
              src="https://tour-web-assets.interparkcdn.net/assets/int-frontend/nol-header/nol-interpark-logo-multiline.svg"
              alt="NOL 인터파크"
              width={122}
              height={44}
              className="h-11 w-auto"
            />
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-[#4154ff]">NOL SERVICE</p>
            <h3 className="mt-3 text-2xl font-black tracking-[-0.03em] text-[#111827]">여행, 공연, 레저 예약을 한 곳에서.</h3>
            <p className="mt-3 max-w-md text-sm leading-7 text-[#6b7280]">
              원하는 상품을 빠르게 찾고, 실시간 인기 흐름을 확인하며, 더 쉬운 예약 경험으로 이어질 수 있도록 메인 화면을
              구성했습니다.
            </p>
            <div className="mt-5 flex items-center gap-4 opacity-80">
              <Image
                src="https://tour-web-assets.interparkcdn.net/assets/int-frontend/nol-footer/partner-nol.svg"
                alt="NOL"
                width={52}
                height={20}
                className="h-5 w-auto"
              />
              <Image
                src="https://tour-web-assets.interparkcdn.net/assets/int-frontend/nol-footer/partner-triple.svg"
                alt="TRIPLE"
                width={73}
                height={20}
                className="h-5 w-auto"
              />
            </div>
            <div className="mt-6 text-sm leading-7 text-[#6b7280]">
              <p>(주)놀유니버스</p>
              <p>서울특별시 강남구 테헤란로 146</p>
              <p>고객센터 1588-1555 · 평일 09:00 - 18:00</p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-sm font-black text-[#111827]">서비스</p>
              <ul className="mt-3 space-y-2 text-sm text-[#6b7280]">
                <li>해외여행</li>
                <li>숙소 예약</li>
                <li>공연 예매</li>
                <li>레저 · 액티비티</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-black text-[#111827]">혜택</p>
              <ul className="mt-3 space-y-2 text-sm text-[#6b7280]">
                <li>앱 전용 쿠폰</li>
                <li>실시간 랭킹</li>
                <li>저장한 상품</li>
                <li>회원 전용 프로모션</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-black text-[#111827]">고객지원</p>
              <ul className="mt-3 space-y-2 text-sm text-[#6b7280]">
                <li>도움말 센터</li>
                <li>취소/환불 안내</li>
                <li>이용 가이드</li>
                <li>공지사항</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-black/5 bg-[#fafafe]">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-[#6b7280] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="flex flex-wrap gap-4">
              {supportLinks.map((link) => (
                <a key={link} href="#" className="transition hover:text-[#111827]">
                  {link}
                </a>
              ))}
            </div>
            <p>© 2026 NOL INTERPARK Clone Lab. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <div className="fixed right-0 bottom-0 left-0 z-40 border-t border-black/5 bg-white/95 px-3 py-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2">
          {mobileQuickActions.map((action, index) => (
            <button
              key={action}
              className={`flex min-w-0 flex-1 flex-col items-center gap-1 rounded-2xl px-2 py-2 text-[11px] font-bold uppercase tracking-[0.08em] ${
                index === 0 ? "bg-[#1c1c1e] text-white" : "bg-[#f8f8fc] text-[#6b7280]"
              }`}
            >
              <span className={`h-2 w-2 rounded-full ${index === 0 ? "bg-white" : "bg-[#4154ff]"}`} />
              <span className="truncate">{action}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
