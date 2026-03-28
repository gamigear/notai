export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-black/5 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#5b3df5] text-sm font-bold text-white">
            NO
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#5b3df5]">Notai Clone Lab</p>
            <h1 className="text-lg font-bold tracking-tight">nol.interpark.com</h1>
          </div>
        </div>

        <nav className="hidden items-center gap-7 text-sm font-medium text-[#4b5563] md:flex">
          <a href="#deals">Tour ưu đãi</a>
          <a href="#ranking">Ticket ranking</a>
          <a href="#categories">Danh mục</a>
          <a href="#parity">UI parity plan</a>
        </nav>

        <button className="rounded-full bg-[#111827] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-black">
          Đăng nhập
        </button>
      </div>
    </header>
  );
}
