import Link from "next/link";
import { Badge } from "@/components/Badge";
import { StatCard } from "@/components/StatCard";
import { quickActions, scheduleItems, vendors } from "@/data/mockData";

export default function SpectatorHome() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-subtle bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-muted">Сайн байна уу, Ая</p>
            <h2 className="text-2xl font-semibold text-slate-900">
              Өнөөдөр Төв цэнгэлдэхэд
            </h2>
          </div>
          <Badge tone="blue">Дараагийн эвент 18 минутын дараа</Badge>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {scheduleItems.slice(0, 3).map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-subtle bg-surface-muted p-4"
            >
              <p className="text-sm font-semibold text-slate-900">
                {item.title}
              </p>
              <p className="mt-2 text-xs text-muted">
                {item.time} • {item.location}
              </p>
              <Badge tone="green">{item.status}</Badge>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <StatCard label="Идэвхтэй үзэгч" value="938" trend="+4%" />
        <StatCard label="Идэвхтэй дараалал" value="12" trend="-6%" />
        <StatCard label="Шийдсэн дуудлага" value="14" trend="+2" />
      </section>

      <section className="rounded-3xl border border-subtle bg-white p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">
            Товч үйлдлүүд
          </h3>
          <Badge tone="gold">Товчилсон зам</Badge>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {quickActions.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className="rounded-2xl border border-subtle bg-surface-muted px-4 py-3 text-sm font-semibold text-slate-700"
            >
              {action.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-subtle bg-slate-900 p-6 text-white">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-semibold">Чухал мэдэгдэл</h3>
            <p className="text-sm text-white/70">
              Морин уралдааны мэдээлэл 14:00 цагаас шууд хуваарь дээр гарна.
            </p>
          </div>
          <Link
            href="/app/schedule"
            className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900"
          >
            Хуваарь нээх
          </Link>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-subtle bg-white p-6">
          <h3 className="text-lg font-semibold text-slate-900">
            Дараагийн санал
          </h3>
          <p className="mt-2 text-sm text-muted">
            Сурын талбай руу очихыг зөвлөж байна. Явган хугацаа: 6 минут.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <Badge tone="blue">Зам бэлэн</Badge>
            <span className="text-xs text-muted">Ачаалал: дунд</span>
          </div>
          <div className="mt-6 h-32 rounded-2xl bg-gradient-to-br from-slate-200 to-white" />
        </div>
        <div className="rounded-3xl border border-subtle bg-white p-6">
          <h3 className="text-lg font-semibold text-slate-900">
            Онцлох худалдаачин
          </h3>
          <p className="mt-2 text-sm text-muted">
            {vendors[0].name} • Дараалал {vendors[0].queue}
          </p>
          <div className="mt-4 space-y-3 text-sm text-muted">
            <p>Онцлох хоол: Алтан хуушуур багц</p>
            <p>Шагнал: +30 оноо</p>
          </div>
          <Link
            href="/app/vendors"
            className="mt-6 inline-flex rounded-full border border-subtle bg-white px-4 py-2 text-xs font-semibold text-slate-700"
          >
            Захиалах
          </Link>
        </div>
      </section>
    </div>
  );
}
