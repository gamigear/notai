import Link from "next/link";

type DetailHeroProps = {
  badge: string;
  title: string;
  description: string;
  summaryLabel: string;
  summaryValue: string;
  ctaLabel: string;
  ctaHref: string;
  accent?: "price" | "default";
};

export function DetailHero({
  badge,
  title,
  description,
  summaryLabel,
  summaryValue,
  ctaLabel,
  ctaHref,
  accent = "default",
}: DetailHeroProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <span className="rounded-full bg-[#eef1ff] px-3 py-1 text-xs font-bold text-[#4154ff] shadow-sm">{badge}</span>
        <h1 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#111827]">{title}</h1>
        <p className="mt-3 text-sm leading-7 text-[#6b7280]">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["실시간 확인", "간편 이동", accent === "price" ? "마감 전 확인" : "좌석 변동 가능"].map((item) => (
            <span key={item} className="rounded-full bg-[#fafafe] px-3 py-1 text-xs font-semibold text-[#4b5563] ring-1 ring-black/4">
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="rounded-[24px] bg-[#fafafe] p-5 ring-1 ring-black/4 sm:min-w-[280px]">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9ca3af]">{summaryLabel}</p>
        <p className={`mt-2 text-3xl font-black ${accent === "price" ? "text-[#ff322e]" : "text-[#111827]"}`}>{summaryValue}</p>
        <p className="mt-2 text-xs font-semibold text-[#9ca3af]">실시간 가격/좌석 정보 확인 후 다음 단계로 바로 이어집니다.</p>
        <Link
          href={ctaHref}
          className="mt-5 block w-full rounded-full bg-[#1c1c1e] px-5 py-3 text-center text-sm font-bold text-white shadow-[0_14px_30px_rgba(17,24,39,0.18)]"
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
