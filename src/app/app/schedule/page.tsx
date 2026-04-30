import { Badge } from "@/components/Badge";
import { scheduleItems } from "@/data/mockData";

const tabs = [
  "Бөх",
  "Сур",
  "Морин уралдаан",
  "Нээлтийн ёслол",
  "Соёлын эвент",
];

export default function SchedulePage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-subtle bg-white p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Шууд хуваарь
            </h2>
            <p className="text-sm text-muted">
              Шинэчлэл дагаж, сануулга хадгалах.
            </p>
          </div>
          <Badge tone="red">2 эвент шууд</Badge>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <span
              key={tab}
              className="rounded-full border border-subtle bg-surface-muted px-4 py-1 text-xs font-semibold text-slate-600"
            >
              {tab}
            </span>
          ))}
        </div>
        <div className="mt-6 space-y-4">
          {scheduleItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-subtle bg-surface-muted p-4"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </p>
                  <p className="text-xs text-muted">
                    {item.time} • {item.location}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge tone="green">{item.status}</Badge>
                  <button className="rounded-full border border-subtle bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                    Хадгалах
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
