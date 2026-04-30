"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const navItems = [
  { label: "Нүүр", href: "/app" },
  { label: "Газрын зураг", href: "/app/map" },
  { label: "Хуваарь", href: "/app/schedule" },
  { label: "Хоол", href: "/app/vendors" },
  { label: "Тусламж", href: "/app/safety" },
];

type SpectatorShellProps = {
  children: ReactNode;
};

export function SpectatorShell({ children }: SpectatorShellProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[var(--background)] pb-20">
      <header className="sticky top-0 z-10 border-b border-subtle bg-[var(--background)]/90 px-6 py-4 backdrop-blur">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Дижитал Наадам Юнивэрс
            </p>
            <h1 className="text-lg font-semibold text-slate-900">
              Үзэгчийн вэб апп
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-full border border-subtle bg-white px-3 py-1 text-xs font-semibold text-slate-700">
              МОН
            </button>
            <button className="rounded-full border border-subtle bg-white px-3 py-1 text-xs font-semibold text-slate-700">
              АНГЛИ
            </button>
          </div>
        </div>
      </header>

      <main className="px-6 py-6">{children}</main>

      <nav className="fixed bottom-4 left-1/2 z-20 w-[min(92vw,520px)] -translate-x-1/2 rounded-full border border-subtle bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-1 transition ${
                  isActive ? "bg-slate-900 text-white" : "hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
