import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
};

export function PageIntro({ eyebrow, title, description, actions }: PageIntroProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4154ff]">{eyebrow}</p>
        <h1 className="mt-2 text-3xl font-black tracking-[-0.03em] text-[#111827]">{title}</h1>
        <p className="mt-3 text-sm leading-7 text-[#6b7280]">{description}</p>
      </div>
      {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
    </div>
  );
}
