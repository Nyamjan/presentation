import { sponsorMetrics } from "@/data/mockData";

const sponsors = [
  { name: "СкайТэл", status: "Идэвхтэй", placement: "Нүүр карт" },
  { name: "Хаан Банк", status: "Идэвхтэй", placement: "Газрын зураг пин" },
  { name: "Ариун Ус", status: "Төлөвлөгдсөн", placement: "Аяллын шагнал" },
];

export default function OrganizerSponsorsPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-subtle bg-white p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">
            Ивээн тэтгэгчийн удирдлага
          </h2>
          <button className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white">
            Ивээн тэтгэгч нэмэх
          </button>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {sponsorMetrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-subtle bg-surface-muted px-4 py-3"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                {metric.label}
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                {metric.value}
              </p>
              <p className="text-xs text-emerald-600">{metric.trend}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 space-y-3 text-sm text-muted">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="rounded-2xl border border-subtle bg-surface-muted px-4 py-3"
            >
              <p className="text-sm font-semibold text-slate-900">
                {sponsor.name}
              </p>
              <p>
                {sponsor.status} • {sponsor.placement}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
