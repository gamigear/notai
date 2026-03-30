import Link from "next/link";

type ReservationSummaryProps = {
  title: string;
  rows: [string, string][];
  totalLabel: string;
  totalValue: string;
  primaryCta: string;
  backHref: string;
  backLabel: string;
  listHref: string;
  listLabel: string;
};

export function ReservationSummary({
  title,
  rows,
  totalLabel,
  totalValue,
  primaryCta,
  backHref,
  backLabel,
  listHref,
  listLabel,
}: ReservationSummaryProps) {
  return (
    <aside className="rounded-[28px] bg-white p-5 shadow-[0_18px_56px_rgba(15,23,42,0.06)] sm:p-8">
      <h2 className="text-xl font-black text-[#111827]">{title}</h2>
      <div className="mt-4 space-y-3">
        {rows.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between rounded-[18px] bg-[#fafafe] px-4 py-3 ring-1 ring-black/3">
            <span className="text-sm text-[#6b7280]">{label}</span>
            <span className="text-sm font-bold text-[#111827]">{value}</span>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-[22px] bg-[#1c1c1e] px-5 py-4 text-white">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/60">{totalLabel}</p>
        <p className="mt-2 text-3xl font-black">{totalValue}</p>
      </div>
      <button className="mt-5 w-full rounded-full bg-[#4154ff] px-5 py-3 text-sm font-bold text-white shadow-[0_14px_30px_rgba(65,84,255,0.24)]">
        {primaryCta}
      </button>
      <div className="mt-4 flex flex-wrap gap-3">
        <Link href={backHref} className="rounded-full border border-[#dbe1ff] bg-white px-4 py-2 text-sm font-bold text-[#4154ff] shadow-sm">
          {backLabel}
        </Link>
        <Link href={listHref} className="rounded-full border border-[#ececf3] bg-white px-4 py-2 text-sm font-bold text-[#4b5563] shadow-sm">
          {listLabel}
        </Link>
      </div>
    </aside>
  );
}
