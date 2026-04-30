import { StatCard } from "@/components/StatCard";
import { analyticsHighlights } from "@/data/mockData";

export default function OrganizerAnalyticsPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-4">
        <StatCard label="Үзэгчийн тоо" value="1,024" trend="+6%" />
        <StatCard label="Газрын зураг ашиглалт" value="78%" trend="+9%" />
        <StatCard label="Захиалга" value="642" trend="+11%" />
        <StatCard label="Хариу өгөх хугацаа" value="4.2 мин" trend="-0.4" />
      </section>

      <section className="rounded-3xl border border-subtle bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Аналитикийн онцлох
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {analyticsHighlights.map((highlight) => (
            <div
              key={highlight.label}
              className="rounded-2xl border border-subtle bg-surface-muted px-4 py-3"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                {highlight.label}
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                {highlight.value}
              </p>
              <p className="text-xs text-muted">{highlight.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 h-56 rounded-3xl bg-gradient-to-br from-slate-200 to-white" />
      </section>
    </div>
  );
}
