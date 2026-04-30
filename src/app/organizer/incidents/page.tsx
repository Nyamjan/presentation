import { Badge } from "@/components/Badge";
import { incidentReports } from "@/data/mockData";

const severity = ["Шинэ", "Хуваарилагдсан", "Шийдэж байна", "Шийдсэн"];

export default function OrganizerIncidentsPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-subtle bg-white p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Ослын төв</h2>
          <Badge tone="red">6 нээлттэй</Badge>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {severity.map((level) => (
            <span
              key={level}
              className="rounded-full border border-subtle bg-surface-muted px-3 py-1 text-xs font-semibold text-slate-600"
            >
              {level}
            </span>
          ))}
        </div>
        <div className="mt-6 space-y-3">
          {incidentReports.map((report) => (
            <div
              key={`${report.type}-${report.time}`}
              className="rounded-2xl border border-subtle bg-surface-muted px-4 py-3 text-sm text-muted"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {report.type}
                  </p>
                  <p>
                    {report.location} • {report.time}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge tone="blue">{report.status}</Badge>
                  <button className="rounded-full border border-subtle bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                    Хуваарилах
                  </button>
                </div>
              </div>
              <p className="mt-2 text-xs text-muted">
                Хариу өгөх зорилт: 5 минут
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
