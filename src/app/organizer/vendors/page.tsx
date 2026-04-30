import { vendors } from "@/data/mockData";

export default function OrganizerVendorsPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-subtle bg-white p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">
            Худалдаачны удирдлага
          </h2>
          <button className="rounded-full border border-subtle bg-white px-4 py-2 text-xs font-semibold text-slate-700">
            Онцлох худалдаачин
          </button>
        </div>
        <div className="mt-6 space-y-3 text-sm text-muted">
          {vendors.map((vendor) => (
            <div
              key={vendor.name}
              className="flex flex-col gap-2 rounded-2xl border border-subtle bg-surface-muted px-4 py-3 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {vendor.name}
                </p>
                <p>
                  {vendor.category} • Дараалал {vendor.queue}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted">{vendor.price}</span>
                <button className="rounded-full border border-subtle bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                  Харах
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
