import { StatCard } from "@/components/StatCard";
import { sponsorMetrics } from "@/data/mockData";

export default function SponsorDashboard() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-4">
        {sponsorMetrics.map((metric) => (
          <StatCard
            key={metric.label}
            label={metric.label}
            value={metric.value}
            trend={metric.trend}
          />
        ))}
      </section>

      <section className="rounded-3xl border border-subtle bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Ивээн тэтгэгчийн сорилтын үзүүлэлт
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            "СкайТэл-ийн асарт зочлох",
            "Дижитал хайгуулын сорилтыг гүйцээх",
            "Худалдаачнаас 10% купон ашиглах",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-subtle bg-surface-muted px-4 py-3 text-sm text-muted"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="mt-6 h-48 rounded-3xl bg-gradient-to-br from-slate-200 to-white" />
      </section>
    </div>
  );
}
