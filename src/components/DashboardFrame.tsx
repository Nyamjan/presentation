"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type NavItem = {
  label: string;
  href: string;
  badge?: string;
};

type DashboardFrameProps = {
  brand: string;
  description: string;
  navItems: NavItem[];
  user: string;
  status: string;
  children: ReactNode;
};

export function DashboardFrame({
  brand,
  description,
  navItems,
  user,
  status,
  children,
}: DashboardFrameProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#0b1220]">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 flex-col border-r border-white/10 bg-[#0b1220] px-6 py-8 text-white lg:flex">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/40">
              Дижитал Наадам Юнивэрс
            </p>
            <h1 className="text-xl font-semibold">{brand}</h1>
            <p className="text-sm text-white/60">{description}</p>
          </div>

          <nav className="mt-10 flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between rounded-xl px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-white/15 text-white"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge ? (
                    <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/70">
                      {item.badge}
                    </span>
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto space-y-4 rounded-2xl bg-white/10 p-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">
              Идэвхтэй профайл
              </p>
              <p className="mt-2 text-sm font-semibold">{user}</p>
              <p className="text-xs text-white/60">{status}</p>
            </div>
            <div className="rounded-xl bg-white/10 px-3 py-2 text-xs text-white/70">
              Хакатоны демо учраас бодит хугацааны өгөгдлийг загварчилсан.
            </div>
          </div>
        </aside>

        <div className="flex min-h-screen flex-1 flex-col bg-[var(--background)]">
          <header className="sticky top-0 z-10 flex items-center justify-between border-b border-subtle bg-[var(--background)]/90 px-6 py-4 backdrop-blur">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                {brand}
              </p>
              <p className="text-lg font-semibold text-slate-900">
                {description}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
              Шууд ажиллагаа
              </span>
              <button className="rounded-full border border-subtle bg-white px-4 py-2 text-xs font-semibold text-slate-700">
                Мэдэгдэл илгээх
              </button>
            </div>
          </header>
          <main className="flex-1 px-6 py-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
