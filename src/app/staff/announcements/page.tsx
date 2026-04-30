const updates = [
  {
    title: "Сурын талбайн урсгал",
    detail: "B орцоор ирж буй үзэгчийг мэдээллийн цэг рүү чиглүүлнэ үү.",
    time: "10 минутын өмнө",
  },
  {
    title: "Хоолны бүсийн ачаалал",
    detail: "Дараалал 10 минут хүрсэн тул нэмэлт зохицуулалт хэрэгтэй.",
    time: "25 минутын өмнө",
  },
];

export default function StaffAnnouncementsPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-subtle bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Дотоод мэдэгдэл
        </h2>
        <div className="mt-4 space-y-3 text-sm text-muted">
          {updates.map((update) => (
            <div
              key={update.title}
              className="rounded-2xl border border-subtle bg-surface-muted px-4 py-3"
            >
              <p className="text-sm font-semibold text-slate-900">
                {update.title}
              </p>
              <p>{update.detail}</p>
              <p className="text-xs text-muted">{update.time}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
