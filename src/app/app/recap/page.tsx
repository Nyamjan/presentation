import { Badge } from "@/components/Badge";

const recapItems = [
  { label: "Үзсэн эвент", value: "Нээлтийн ёслол, Бөхийн 1-р даваа" },
  { label: "Авсан тэмдэг", value: "Эхний тоглолтоо үзэв, Уламжлалт хоол амсав" },
  { label: "Захиалсан хоол", value: "Алтан хуушуур багц" },
  { label: "Дурсамжит мөч", value: "Сурын финалын мөчүүд" },
];

export default function RecapPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-subtle bg-white p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Миний өдрийн дүгнэлт
            </h2>
            <p className="text-sm text-muted">
              Таны Наадмын дүгнэлт бэлэн боллоо.
            </p>
          </div>
          <Badge tone="blue">Татахад бэлэн</Badge>
        </div>
        <div className="mt-6 grid gap-3">
          {recapItems.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-subtle bg-surface-muted px-4 py-3"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                {item.label}
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                {item.value}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white">
            Дүгнэлтийн карт татах
          </button>
          <button className="rounded-full border border-subtle bg-white px-5 py-2 text-xs font-semibold text-slate-700">
            Хуваалцах (сонголттой)
          </button>
        </div>
      </section>
    </div>
  );
}
