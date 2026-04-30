const staffAssignments = [
  { name: "Бат-Эрдэнэ", zone: "Үндсэн хаалга", task: "Олон нийтийн урсгал" },
  { name: "Ану", zone: "B хэсэг", task: "Алдагдсан эд зүйл" },
  { name: "Тэмүүлэн", zone: "Хоолны бүс", task: "Дарааллын тусламж" },
  { name: "Нараа", zone: "Сурын талбай", task: "Мэдээллийн тусламж" },
];

export default function OrganizerStaffPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-subtle bg-white p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">
            Ажилтан ба сайн дурын зохицуулалт
          </h2>
          <button className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white">
            Мэдэгдэл түгээх
          </button>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {staffAssignments.map((staff) => (
            <div
              key={staff.name}
              className="rounded-2xl border border-subtle bg-surface-muted px-4 py-3"
            >
              <p className="text-sm font-semibold text-slate-900">
                {staff.name}
              </p>
              <p className="text-xs text-muted">
                {staff.zone} • {staff.task}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 h-36 rounded-3xl bg-gradient-to-br from-slate-200 to-white" />
      </section>
    </div>
  );
}
