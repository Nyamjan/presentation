import { type ReactNode } from "react";

const toneStyles: Record<string, string> = {
  red: "bg-red-100 text-red-700",
  blue: "bg-blue-100 text-blue-700",
  gold: "bg-amber-100 text-amber-700",
  green: "bg-emerald-100 text-emerald-700",
  gray: "bg-slate-100 text-slate-700",
};

type BadgeProps = {
  tone?: "red" | "blue" | "gold" | "green" | "gray";
  children: ReactNode;
};

export function Badge({ tone = "gray", children }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${toneStyles[tone]}`}
    >
      {children}
    </span>
  );
}
