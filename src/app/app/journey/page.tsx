import { Badge } from "@/components/Badge";
import { badges } from "@/data/mockData";

const journeyTasks = [
  "Сурын талбайг ол",
  "Наадмын соёлын 3 асуултад хариулах",
  "Бөхийн нэг даваа үзэх",
  "Нэг уламжлалт хоол амсах",
  "Дурсгалын бүсээр орох",
];

export default function JourneyPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-subtle bg-white p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Наадмын тоглоомжуулсан аялал
            </h2>
            <p className="text-sm text-muted">
              Наадамтай танилцаж оноо, шагнал авна.
            </p>
          </div>
          <Badge tone="gold">1,260 оноо</Badge>
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-2xl border border-subtle bg-surface-muted p-4">
            <h3 className="text-sm font-semibold text-slate-900">Тэмдгүүд</h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {badges.map((badge) => (
                <div
                  key={badge.title}
                  className="rounded-2xl border border-subtle bg-white px-4 py-3"
                >
                  <p className="text-sm font-semibold text-slate-900">
                    {badge.title}
                  </p>
                  <p className="text-xs text-muted">{badge.status}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-subtle bg-white p-4">
            <h3 className="text-sm font-semibold text-slate-900">
              Аяллын даалгавар
            </h3>
            <div className="mt-3 space-y-2 text-xs text-muted">
              {journeyTasks.map((task) => (
                <div
                  key={task}
                  className="rounded-2xl border border-subtle bg-surface-muted px-3 py-2"
                >
                  {task}
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl bg-slate-900 px-4 py-3 text-xs text-white">
              Шагнал: Худалдаачнаас 10% хөнгөлөлтийн купон
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
