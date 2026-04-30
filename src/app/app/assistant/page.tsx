import { Badge } from "@/components/Badge";

const languages = ["Монгол", "Англи", "Хятад", "Орос", "Солонгос"];

const questions = [
  "Миний суудал хаана вэ?",
  "Хамгийн ойрын ариун цэврийн өрөө хаана байна?",
  "Одоо ямар эвент болж байна вэ?",
  "Хоол хэрхэн захиалах вэ?",
  "Энэ Наадмын уламжлал юу гэсэн утгатай вэ?",
];

const culturalCards = [
  "Бөх: Монголын хамгийн эртний үндэсний спорт.",
  "Сур: Уламжлалт нум сумтай харвааны тэмцээн.",
  "Морин уралдаан: Тэсвэр, хурдыг тэмдэглэдэг спорт.",
];

export default function AssistantPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-subtle bg-white p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Олон хэлт жуулчны туслах
            </h2>
            <p className="text-sm text-muted">
              Жуулчдад зориулсан бодит цагийн зөвлөгөө, тайлбар.
            </p>
          </div>
          <Badge tone="blue">Хэл сонгох боломжтой</Badge>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {languages.map((language) => (
            <span
              key={language}
              className="rounded-full border border-subtle bg-surface-muted px-3 py-1 text-xs font-semibold text-slate-600"
            >
              {language}
            </span>
          ))}
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-subtle bg-surface-muted p-4">
            <div className="space-y-3 text-sm">
              <div className="rounded-2xl bg-white px-4 py-3 text-slate-900">
                Сайн байна уу! Юугаар туслах вэ?
              </div>
              <div className="rounded-2xl bg-[var(--naadam-blue)]/10 px-4 py-3 text-slate-700">
                Хамгийн ойрын ариун цэврийн өрөө хаана байна?
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-slate-900">
                Хойд ариун цэврийн өрөө 3 минутын алхамд байна. Зам заах уу?
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <input
                className="flex-1 rounded-full border border-subtle bg-white px-4 py-2 text-xs"
                placeholder="Асуултаа бичнэ үү..."
              />
              <button className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white">
                Илгээх
              </button>
            </div>
          </div>
          <div className="space-y-3">
            <div className="rounded-2xl border border-subtle bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">
                Санал болгож буй асуултууд
              </p>
              <div className="mt-3 space-y-2 text-xs text-muted">
                {questions.map((question) => (
                  <div
                    key={question}
                    className="rounded-full border border-subtle bg-surface-muted px-3 py-2"
                  >
                    {question}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-subtle bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">
                Соёлын тайлбар
              </p>
              <div className="mt-3 space-y-2 text-xs text-muted">
                {culturalCards.map((card) => (
                  <div
                    key={card}
                    className="rounded-2xl border border-subtle bg-surface-muted px-3 py-2"
                  >
                    {card}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
