import { StatCard } from "@/components/StatCard";

const insights = [
  { label: "Шилдэг бүтээгдэхүүн", value: "Алтан хуушуур багц", detail: "82 захиалга" },
  { label: "Оргил цаг", value: "12:00 - 13:00", detail: "Борлуулалтын 42%" },
  { label: "Дундаж хүлээлт", value: "7.5 мин", detail: "1.2 мин буурсан" },
];

export default function VendorAnalyticsPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-3">
        <StatCard label="Цагийн орлого" value="₮520K" trend="+9%" />
        <StatCard label="Цагийн захиалга" value="38" trend="+5%" />
        <StatCard label="Алдсан борлуулалт" value="₮120K" trend="-3%" />
      </section>

      <section className="rounded-3xl border border-subtle bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Худалдаачны аналитик
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {insights.map((insight) => (
            <div
              key={insight.label}
              className="rounded-2xl border border-subtle bg-surface-muted px-4 py-3"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                {insight.label}
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                {insight.value}
              </p>
              <p className="text-xs text-muted">{insight.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 h-48 rounded-3xl bg-gradient-to-br from-slate-200 to-white" />
      </section>
    </div>
  );
}
