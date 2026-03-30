import Link from "next/link";

type SubpageNavItem = {
  label: string;
  href: string;
};

type SubpageNavProps = {
  items: SubpageNavItem[];
  current?: string;
};

export function SubpageNav({ items, current }: SubpageNavProps) {
  return (
    <div className="mt-6 flex flex-wrap gap-2 rounded-[24px] bg-[#fafafe] p-3 ring-1 ring-black/4">
      {items.map((item) => {
        const active = item.href === current;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              active
                ? "bg-[#4154ff] text-white shadow-[0_10px_24px_rgba(65,84,255,0.24)]"
                : "bg-white text-[#4b5563] shadow-sm ring-1 ring-black/4 hover:-translate-y-0.5"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
