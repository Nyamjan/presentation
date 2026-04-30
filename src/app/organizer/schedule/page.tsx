import { Badge } from "@/components/Badge";
import { scheduleItems } from "@/data/mockData";

export default function OrganizerSchedulePage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-subtle bg-white p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">
            Эвентийн хуваарь удирдлага
          </h2>
          <button className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white">
            Эвент нэмэх
          </button>
        </div>
        <div className="mt-6 space-y-3">
          {scheduleItems.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-2xl border border-subtle bg-surface-muted px-4 py-3 text-sm text-muted md:flex-row md:items-center md:justify-between"
            >
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {item.title}
                </p>
                <p>
                  {item.time} • {item.location}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge tone="green">{item.status}</Badge>
                <button className="rounded-full border border-subtle bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                  Засах
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 h-40 rounded-3xl bg-gradient-to-br from-slate-200 to-white" />
      </section>
    </div>
  );
}
