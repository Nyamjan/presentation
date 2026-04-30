const inventoryItems = [
  { name: "Махан шанз", stock: "20%", action: "Удахгүй нэмнэ" },
  { name: "Гурил", stock: "45%", action: "Хяналт" },
  { name: "Айраг", stock: "60%", action: "Хэвийн" },
  { name: "Сав баглаа боодол", stock: "30%", action: "Дахин захиалах" },
];

export default function VendorInventoryPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-subtle bg-white p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Нөөц</h2>
          <button className="rounded-full border border-subtle bg-white px-4 py-2 text-xs font-semibold text-slate-700">
            Нөөц шинэчлэх
          </button>
        </div>
        <div className="mt-6 space-y-3">
          {inventoryItems.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-subtle bg-surface-muted px-4 py-3 text-sm text-muted"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-900">
                  {item.name}
                </p>
                <span className="text-xs text-muted">{item.stock}</span>
              </div>
              <p className="text-xs text-muted">{item.action}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
