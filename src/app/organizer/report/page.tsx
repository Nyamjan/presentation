const reportSections = [
  "Ирцийн дүгнэлт",
  "Орлого ба худалдаачны гүйцэтгэл",
  "Оролцоо ба газрын зураг ашиглалт",
  "Ослын хариу үзүүлэлт",
  "Ивээн тэтгэгчийн үр дүн",
  "Ирэх жилийн зөвлөмж",
];

export default function OrganizerReportPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-subtle bg-white p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">
            Эвентын дараах тайлан
          </h2>
          <button className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white">
            Тайлан үүсгэх
          </button>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {reportSections.map((section) => (
            <div
              key={section}
              className="rounded-2xl border border-subtle bg-surface-muted px-4 py-3 text-sm text-muted"
            >
              {section}
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-3xl border border-subtle bg-surface-muted p-5 text-xs text-muted">
          PDF маягийн тайлан, график, онцлох үзүүлэлт, дараа жилийн зөвлөмжүүдийг багтаана.
        </div>
      </section>
    </div>
  );
}
