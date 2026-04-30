import { Badge } from "@/components/Badge";
import { vendorOrders } from "@/data/mockData";

const columns = [
  { title: "Шинэ", tone: "blue" },
  { title: "Бэлтгэж байна", tone: "gold" },
  { title: "Бэлэн", tone: "green" },
  { title: "Дууссан", tone: "gray" },
];

export default function VendorOrdersPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-subtle bg-white p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">
            Захиалгын удирдлага
          </h2>
          <Badge tone="blue">24 идэвхтэй</Badge>
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-4">
          {columns.map((column, index) => (
            <div key={column.title} className="space-y-3">
              <Badge tone={column.tone as "blue"}>{column.title}</Badge>
              {(index === 0 ? vendorOrders : vendorOrders.slice(0, 2)).map(
                (order) => (
                  <div
                    key={`${column.title}-${order.id}`}
                    className="rounded-2xl border border-subtle bg-surface-muted px-4 py-3 text-xs text-muted"
                  >
                    <p className="text-sm font-semibold text-slate-900">
                      {order.id}
                    </p>
                    <p>{order.items}</p>
                    <p>Авах цаг {order.pickup}</p>
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
