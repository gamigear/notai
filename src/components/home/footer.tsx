import { membershipBenefits, mobileQuickActions, supportLinks } from "./data";

export function Footer() {
  return (
    <>
      <footer className="mt-8 border-t border-black/5 bg-white pb-24 md:pb-0">
        <div className="mx-auto w-full max-w-7xl px-4 pt-10 pb-0 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[32px] bg-gradient-to-br from-[#5b3df5] via-[#7c3aed] to-[#a855f7] p-6 text-white shadow-[0_18px_56px_rgba(91,61,245,0.22)] sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">Final booking push</p>
              <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <h3 className="text-3xl font-black tracking-[-0.04em]">Sẵn sàng kéo bản clone tiến gần site gốc hơn nữa.</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80">
                    Homepage hiện đã có đầy đủ lớp nội dung để bước vào vòng tinh chỉnh thị giác sâu hơn bằng Frontman và
                    đối chiếu trực tiếp với nol.interpark.com.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button className="rounded-full bg-white px-5 py-3 text-sm font-bold text-[#111827]">Open Frontman</button>
                  <button className="rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white">Review homepage</button>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] bg-[#111827] p-6 text-white shadow-[0_18px_56px_rgba(15,23,42,0.18)] sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">Membership value</p>
              <h3 className="mt-3 text-3xl font-black tracking-[-0.04em]">Tạo cảm giác quay lại là có lợi.</h3>
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

        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7c3aed]">Notai Clone Lab</p>
            <h3 className="mt-3 text-2xl font-black tracking-[-0.03em] text-[#111827]">Next.js rebuild for nol.interpark.com</h3>
            <p className="mt-3 max-w-md text-sm leading-7 text-[#6b7280]">
              Dự án này ưu tiên giữ nguyên cảm giác sử dụng của website gốc trong khi thay phần frontend sang kiến trúc hiện đại,
              dễ bảo trì hơn.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-sm font-black text-[#111827]">Triển khai</p>
              <ul className="mt-3 space-y-2 text-sm text-[#6b7280]">
                <li>Homepage parity</li>
                <li>Subpage expansion</li>
                <li>Frontman visual edits</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-black text-[#111827]">Kỹ thuật</p>
              <ul className="mt-3 space-y-2 text-sm text-[#6b7280]">
                <li>Next.js App Router</li>
                <li>Tailwind CSS</li>
                <li>React modernization</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-black text-[#111827]">Mục tiêu</p>
              <ul className="mt-3 space-y-2 text-sm text-[#6b7280]">
                <li>Không đổi trải nghiệm</li>
                <li>UI parity cao</li>
                <li>Dễ bảo trì dài hạn</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-black/5 bg-[#fafafe]">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-5 text-sm text-[#6b7280] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="flex flex-wrap gap-4">
              {supportLinks.map((link) => (
                <a key={link} href="#" className="transition hover:text-[#111827]">
                  {link}
                </a>
              ))}
            </div>
            <p>© 2026 Notai Clone Lab. Built for UI parity migration.</p>
          </div>
        </div>
      </footer>

      <div className="fixed right-0 bottom-0 left-0 z-40 border-t border-black/5 bg-white/95 px-4 py-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2">
          {mobileQuickActions.map((action) => (
            <button key={action} className="flex min-w-0 flex-1 flex-col items-center gap-1 rounded-2xl bg-[#f8f8fc] px-2 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[#6b7280]">
              <span className="h-2 w-2 rounded-full bg-[#7c3aed]" />
              <span className="truncate">{action}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
