const menuItems = [
  { name: "Алтан хуушуур багц", price: "₮7,000", status: "Идэвхтэй" },
  { name: "Айраг", price: "₮5,000", status: "Идэвхтэй" },
  { name: "Буузны гурвал", price: "₮6,500", status: "Нөөц багатай" },
  { name: "Сүүтэй цай", price: "₮4,000", status: "Дууссан" },
];

export default function VendorMenuPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-subtle bg-white p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">
            Цэсийн удирдлага
          </h2>
          <button className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white">
            Бараа нэмэх
          </button>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-subtle bg-surface-muted px-4 py-3"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-900">
                  {item.name}
                </p>
                <span className="text-xs text-muted">{item.status}</span>
              </div>
              <p className="mt-2 text-xs text-muted">{item.price}</p>
              <div className="mt-3 flex gap-2">
                <button className="rounded-full border border-subtle bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                  Засах
                </button>
                <button className="rounded-full border border-subtle bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                  Идэвхжүүлэх
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
