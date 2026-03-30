import type { ReactNode } from "react";

type DetailSectionProps = {
  title: string;
  children: ReactNode;
  tone?: "tinted" | "plain";
};

export function DetailSection({ title, children, tone = "plain" }: DetailSectionProps) {
  return (
    <section className={`rounded-[24px] p-5 ring-1 ring-black/4 ${tone === "tinted" ? "bg-[#fafafe]" : "bg-white"}`}>
      <h2 className="text-xl font-black text-[#111827]">{title}</h2>
      {children}
    </section>
  );
}

type DetailBulletListProps = {
  items: string[];
  className?: string;
  itemTone?: "plain" | "soft";
};

export function DetailBulletList({ items, className = "mt-4 space-y-3", itemTone = "plain" }: DetailBulletListProps) {
  return (
    <div className={className}>
      {items.map((item) => (
        <div
          key={item}
          className={`rounded-[18px] border border-[#ececf3] px-4 py-3 text-sm text-[#374151] ${itemTone === "soft" ? "bg-[#fafafe]" : "bg-white"}`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

type DetailNumberedListProps = {
  items: string[];
  className?: string;
};

export function DetailNumberedList({ items, className = "mt-4 space-y-3" }: DetailNumberedListProps) {
  return (
    <div className={className}>
      {items.map((item, index) => (
        <div key={item} className="flex gap-3 rounded-[18px] bg-[#f8f8fc] px-4 py-3 ring-1 ring-black/3">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4154ff] text-xs font-bold text-white">{index + 1}</span>
          <p className="text-sm leading-6 text-[#374151]">{item}</p>
        </div>
      ))}
    </div>
  );
}
