const tasks = [
  { title: "Алдагдсан эд зүйл", zone: "B хэсэг", priority: "Яаралтай" },
  { title: "Цэвэрлэгээ шаардлагатай", zone: "Хоолны бүс", priority: "Дунд" },
  { title: "Мэдээллийн асуулт", zone: "Сурын талбай", priority: "Энгийн" },
];

export default function StaffPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-subtle bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">Миний даалгавар</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {tasks.map((task) => (
            <div
              key={`${task.title}-${task.zone}`}
              className="rounded-2xl border border-subtle bg-surface-muted px-4 py-3"
            >
              <p className="text-sm font-semibold text-slate-900">
                {task.title}
              </p>
              <p className="text-xs text-muted">
                {task.zone} • {task.priority}
              </p>
              <div className="mt-3 flex gap-2">
                <button className="rounded-full border border-subtle bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                  Хүлээн авах
                </button>
                <button className="rounded-full border border-subtle bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                  Явцтай
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-subtle bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Дэлгэрэнгүй дуудлага
        </h2>
        <div className="mt-4 rounded-2xl border border-subtle bg-surface-muted px-4 py-3 text-sm text-muted">
          <p className="text-sm font-semibold text-slate-900">Алдагдсан эд зүйл</p>
          <p>Байршил: B хэсэг • Мэдээлсэн: Үзэгч</p>
          <p className="mt-2">
            Тайлбар: Хүүхдийн цүнх алдагдсан. Хүлээн авах цэгт хүргэнэ үү.
          </p>
          <div className="mt-3 flex gap-2">
            <button className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
              Шийдэж байна
            </button>
            <button className="rounded-full border border-subtle bg-white px-3 py-1 text-xs font-semibold text-slate-600">
              Шийдсэн
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
