import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-[#6b7280]">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={`${item.label}-${index}`} className="flex items-center gap-2">
            {item.href && !isLast ? (
              <Link href={item.href} className="hover:text-[#111827]">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "font-semibold text-[#111827]" : undefined}>{item.label}</span>
            )}
            {!isLast ? <span>/</span> : null}
          </div>
        );
      })}
    </div>
  );
}
