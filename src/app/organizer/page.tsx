import { Badge } from "@/components/Badge";
import { StatCard } from "@/components/StatCard";
import { analyticsHighlights, incidentReports } from "@/data/mockData";

export default function OrganizerOverview() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-4">
        <StatCard label="Бүртгэлтэй хэрэглэгч" value="1,024" trend="+8%" />
        <StatCard label="Одоо идэвхтэй" value="938" trend="+4%" />
        <StatCard label="Өнөөдрийн захиалга" value="642" trend="+11%" />
        <StatCard label="Нээлттэй дуудлага" value="6" trend="-1" />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-subtle bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">
              Шууд ослын урсгал
            </h2>
            <Badge tone="red">Яаралтай</Badge>
          </div>
          <div className="mt-4 space-y-3 text-sm text-muted">
            {incidentReports.map((report) => (
              <div
                key={`${report.type}-${report.time}`}
                className="rounded-2xl border border-subtle bg-surface-muted px-4 py-3"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {report.type}
                </p>
                <p>
                  {report.location} • {report.time}
                </p>
                <Badge tone="blue">{report.status}</Badge>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-subtle bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">
            Ачааллын газрын зураг
          </h2>
          <p className="text-sm text-muted">
            Шууд бүртгэл, газрын зургийн хэрэглээн дээр үндэслэв.
          </p>
          <div className="mt-4 h-52 rounded-3xl bg-gradient-to-br from-slate-200 to-white" />
          <div className="mt-4 rounded-2xl bg-slate-900 px-4 py-3 text-xs text-white">
            Хамгийн их ачаалал: Үндсэн хаалга • 12:10
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-subtle bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Өнөөдрийн онцлох
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
      </section>
    </div>
  );
}
