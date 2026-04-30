import { Badge } from "@/components/Badge";
import { mapLocations } from "@/data/mockData";

const filters = [
  "Хоол",
  "Ариун цэврийн өрөө",
  "Орох хэсэг",
  "Гарах хэсэг",
  "Анхны тусламж",
  "Мэдээлэл",
  "Дурсгал",
  "Суудлын хэсэг",
];

export default function MapPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-subtle bg-white p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Стадионы интерактив газрын зураг
            </h2>
            <p className="text-sm text-muted">
              Хайлт, шүүлтүүрээр шаардлагатай байршлыг олно.
            </p>
          </div>
          <Badge tone="blue">Олон нийтийн бодит өгөгдөл</Badge>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <span
              key={filter}
              className="rounded-full border border-subtle bg-surface-muted px-3 py-1 text-xs font-semibold text-slate-600"
            >
              {filter}
            </span>
          ))}
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative h-64 rounded-3xl bg-gradient-to-br from-slate-200 to-white">
            <div className="absolute left-6 top-6 rounded-full bg-[var(--naadam-red)] px-3 py-1 text-xs font-semibold text-white">
              Таны байршил
            </div>
            <div className="absolute right-6 top-16 rounded-full bg-[var(--naadam-blue)] px-3 py-1 text-xs font-semibold text-white">
              Сурын талбай
            </div>
            <div className="absolute bottom-8 left-12 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
              Хоолны бүс
            </div>
          </div>
          <div className="space-y-3">
            {mapLocations.map((location) => (
              <div
                key={location.name}
                className="rounded-2xl border border-subtle bg-surface-muted p-4"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {location.name}
                </p>
                <p className="text-xs text-muted">
                  {location.category} • {location.walkTime} алхалт
                </p>
                <p className="text-xs text-muted">Дараалал: {location.queue}</p>
              </div>
            ))}
          </div>
        </div>
        <button className="mt-6 rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white">
          Намайг хүргээрэй
        </button>
      </section>
    </div>
  );
}
