type DetailFact = {
  label: string;
  value: string;
};

type DetailFactsProps = {
  items: DetailFact[];
};

export function DetailFacts({ items }: DetailFactsProps) {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="rounded-[20px] bg-[#fafafe] px-4 py-4 ring-1 ring-black/4">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9ca3af]">{item.label}</p>
          <p className="mt-2 text-sm font-black text-[#111827]">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
