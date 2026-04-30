const placements = [
  "Нүүр карт",
  "Газрын зураг пин",
  "Худалдаачны промо",
  "Тоглоомжуулсан шагнал",
];

export default function SponsorCampaignsPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-subtle bg-white p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">
            Кампанит ажил үүсгэх
          </h2>
          <button className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white">
            Кампанит ажил эхлүүлэх
          </button>
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 text-xs text-muted">
            <input
              className="w-full rounded-2xl border border-subtle bg-surface-muted px-4 py-3"
              placeholder="Кампанит ажлын нэр"
            />
            <textarea
              className="w-full rounded-2xl border border-subtle bg-surface-muted px-4 py-3"
              rows={4}
              placeholder="Ивээн тэтгэгчийн мессеж"
            />
            <div className="flex flex-wrap gap-2">
              {placements.map((placement) => (
                <span
                  key={placement}
                  className="rounded-full border border-subtle bg-white px-3 py-1 text-xs font-semibold text-slate-600"
                >
                  {placement}
                </span>
              ))}
            </div>
            <input
              className="w-full rounded-2xl border border-subtle bg-surface-muted px-4 py-3"
              placeholder="Идэвхтэй хугацаа (7 сарын 10 - 7 сарын 13)"
            />
          </div>
          <div className="rounded-2xl border border-subtle bg-surface-muted p-4 text-xs text-muted">
            <p className="text-sm font-semibold text-slate-900">
              Байршлын урьдчилсан харагдац
            </p>
            <div className="mt-3 rounded-2xl bg-white px-4 py-3">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                СкайТэл шагнал
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                СкайТэл-ийн асарт зочлоход 20 оноо авна.
              </p>
              <p className="text-xs text-muted">
                Дурсгалын бүсэд 10% хөнгөлөлт ашиглана.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
