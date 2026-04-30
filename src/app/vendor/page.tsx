import { StatCard } from "@/components/StatCard";
import { vendorOrders } from "@/data/mockData";

export default function VendorDashboard() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-3">
        <StatCard label="Өнөөдрийн захиалга" value="182" trend="+14%" />
        <StatCard label="Орлого" value="₮4.2M" trend="+8%" />
        <StatCard label="Дундаж хүлээлт" value="7.5 мин" trend="-1.2" />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-subtle bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">
            Идэвхтэй захиалгууд
          </h2>
          <div className="mt-4 space-y-3 text-sm text-muted">
            {vendorOrders.map((order) => (
              <div
                key={order.id}
                className="rounded-2xl border border-subtle bg-surface-muted px-4 py-3"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {order.id}
                </p>
                <p>{order.items}</p>
                <p>Авах цаг {order.pickup}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-subtle bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">
            Эрэлтийн товч
          </h2>
          <div className="mt-4 space-y-4 text-sm text-muted">
            <div className="rounded-2xl border border-subtle bg-surface-muted px-4 py-3">
              Хамгийн их захиалга: Алтан хуушуур багц
            </div>
            <div className="rounded-2xl border border-subtle bg-surface-muted px-4 py-3">
              Оргил цаг: 12:00 - 13:00
            </div>
            <div className="rounded-2xl border border-subtle bg-surface-muted px-4 py-3">
              Нөөц багатай: Махан шанз (20%)
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
