const targets = [
  "Бүх хэрэглэгч",
  "Жуулчид",
  "Худалдаачид",
  "Ажилтнууд",
  "Тодорхой бүс",
];

const priorities = ["Энгийн", "Чухал", "Яаралтай"];

export default function OrganizerAnnouncementsPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-subtle bg-white p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">
            Мэдэгдлийн төв
          </h2>
          <button className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white">
            Мэдэгдэл илгээх
          </button>
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 text-xs text-muted">
            <input
              className="w-full rounded-2xl border border-subtle bg-surface-muted px-4 py-3"
              placeholder="Мэдэгдлийн гарчиг"
            />
            <textarea
              className="w-full rounded-2xl border border-subtle bg-surface-muted px-4 py-3"
              rows={4}
              placeholder="Мэдэгдлийн текст"
            />
            <div className="flex flex-wrap gap-2">
              {targets.map((target) => (
                <span
                  key={target}
                  className="rounded-full border border-subtle bg-white px-3 py-1 text-xs font-semibold text-slate-600"
                >
                  {target}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {priorities.map((priority) => (
                <span
                  key={priority}
                  className="rounded-full border border-subtle bg-white px-3 py-1 text-xs font-semibold text-slate-600"
                >
                  {priority}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-subtle bg-surface-muted p-4 text-xs text-muted">
            <p className="text-sm font-semibold text-slate-900">
              Урьдчилж харах
            </p>
            <div className="mt-3 rounded-2xl bg-white px-4 py-3">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                Чухал
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                Сурын талбайн мэдээлэл
              </p>
              <p className="text-xs text-muted">
                Сурын финалын үед B орц ашиглана уу. Дараалал 3 минут.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
