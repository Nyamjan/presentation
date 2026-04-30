import { Badge } from "@/components/Badge";
import { vendors } from "@/data/mockData";

const menuItems = [
  { name: "Алтан хуушуур багц", price: "₮7,000", prep: "8 мин" },
  { name: "Айраг", price: "₮5,000", prep: "4 мин" },
  { name: "Уламжлалт зуушны багц", price: "₮9,000", prep: "6 мин" },
];

export default function VendorsPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-subtle bg-white p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Хоол болон худалдаачны захиалга
            </h2>
            <p className="text-sm text-muted">
              Дараалал алгасаж, бэлэн болмогц авах боломжтой.
            </p>
          </div>
          <Badge tone="gold">QPay загвар</Badge>
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            {vendors.map((vendor) => (
              <div
                key={vendor.name}
                className="rounded-2xl border border-subtle bg-surface-muted p-4"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {vendor.name}
                </p>
                <p className="text-xs text-muted">
                  {vendor.category} • Дараалал {vendor.queue}
                </p>
                <p className="text-xs text-muted">{vendor.price}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-subtle bg-surface-muted p-4">
            <h3 className="text-sm font-semibold text-slate-900">
              Өнөөдрийн түгээмэл
            </h3>
            <div className="mt-3 space-y-3">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between text-xs text-muted"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {item.name}
                    </p>
                    <p>
                      {item.price} • {item.prep} бэлтгэл
                    </p>
                  </div>
                  <button className="rounded-full border border-subtle bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                    Нэмэх
                  </button>
                </div>
              ))}
            </div>
            <button className="mt-5 w-full rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white">
              Тооцоо (загвар)
            </button>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-subtle bg-white p-4 text-xs text-muted">
          Захиалгын төлөв: <span className="font-semibold text-slate-900">Бэлтгэж байна</span> •
          Хуушуурын гэрээс 7 минутын дараа авах.
        </div>
      </section>
    </div>
  );
}
