import { supportLinks } from "./data";

export function Footer() {
  return (
    <footer className="mt-8 border-t border-black/5 bg-white">
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
  );
}
