import { Badge } from "@/components/Badge";
import { incidentReports } from "@/data/mockData";

const incidentTypes = [
  "Эмнэлгийн тусламж",
  "Алдагдсан эд зүйл",
  "Цэвэрлэгээ шаардлагатай",
  "Олон нийтийн асуудал",
  "Буруу мэдээлэл",
  "Худалдаачны гомдол",
];

export default function SafetyPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-subtle bg-white p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Аюулгүй байдал ба тусламж
            </h2>
            <p className="text-sm text-muted">
              Стадионд гарсан асуудлыг шуурхай мэдээлэх боломж.
            </p>
          </div>
          <Badge tone="red">Яаралтай дуудлага: 101</Badge>
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-2xl border border-subtle bg-surface-muted p-4">
            <h3 className="text-sm font-semibold text-slate-900">
              Асуудал мэдээлэх
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {incidentTypes.map((type) => (
                <span
                  key={type}
                  className="rounded-full border border-subtle bg-white px-3 py-1 text-xs font-semibold text-slate-600"
                >
                  {type}
                </span>
              ))}
            </div>
            <div className="mt-4 space-y-3 text-xs text-muted">
              <input
                className="w-full rounded-2xl border border-subtle bg-white px-4 py-3"
                placeholder="Байршил (жишээ: B хэсэг, 2-р хаалга)"
              />
              <textarea
                className="w-full rounded-2xl border border-subtle bg-white px-4 py-3"
                rows={4}
                placeholder="Асуудлыг тайлбарлана уу"
              />
              <button className="w-full rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white">
                Мэдээлэл илгээх
              </button>
            </div>
          </div>
          <div className="rounded-2xl border border-subtle bg-white p-4">
            <h3 className="text-sm font-semibold text-slate-900">
              Хяналтын төлөв
            </h3>
            <div className="mt-3 space-y-3 text-xs text-muted">
              {incidentReports.map((report) => (
                <div
                  key={`${report.type}-${report.time}`}
                  className="rounded-2xl border border-subtle bg-surface-muted px-3 py-3"
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
        </div>
      </section>
    </div>
  );
}
