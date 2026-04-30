import Link from "next/link";
import { Badge } from "@/components/Badge";
import { SectionHeading } from "@/components/SectionHeading";

const problems = [
  "Олон хүнтэй бүсүүдэд хэрэгцээт байгууламж олоход хүндрэлтэй.",
  "Жуулчдад хэл болон байнга өөрчлөгдөх хуваарь хүндрэлтэй.",
  "Худалдаачид эрэлт, дарааллыг үр дүнтэй удирдаж чаддаггүй.",
  "Зохион байгуулагчдад нэгтгэсэн бодит хугацааны өгөгдөл дутмаг.",
  "Ажилтнуудын зохицуулалт, ослын хариу арга хэмжээ салангид.",
  "Ивээн тэтгэгчдийн дижитал нөлөөллийг хэмжихэд хүндрэлтэй.",
  "Эвентын дараах тайлан гаргалт гар ажиллагаатай, удаан.",
];

const portalCards = [
  {
    title: "Үзэгчийн туршлага",
    description: "Интерактив газрын зураг, шууд хуваарь, хоолны захиалга, өдрийн дүгнэлт.",
  },
  {
    title: "Худалдаачны үйл ажиллагаа",
    description: "Захиалга, нөөцийн анхааруулга, орлогын ойлголт.",
  },
  {
    title: "Зохион байгуулагчийн команд төв",
    description: "Шууд хяналтын самбар, ослын удирдлага, багийн зохицуулалт.",
  },
  {
    title: "Ивээн тэтгэгч ба түншийн төв",
    description: "Кампанит ажлын үр дүн, идэвхжүүлэлт, шагналын хяналт.",
  },
];

const features = [
  "Стадионы интерактив газрын зураг",
  "Шууд хуваарь",
  "Дижитал захиалга",
  "Олон хэлт туслах",
  "Аюулгүй байдлын мэдээлэл",
  "Наадмын тоглоомжуулсан аялал",
  "Худалдаачны портал",
  "Ивээн тэтгэгчийн менежер",
  "Зохион байгуулагчийн команд төв",
  "Эвентын дараах аналитик",
];

const demoRoutes = [
  { title: "Үзэгчийн харагдац", href: "/app" },
  { title: "Худалдаачны харагдац", href: "/vendor" },
  { title: "Зохион байгуулагчийн харагдац", href: "/organizer" },
  { title: "Ивээн тэтгэгчийн харагдац", href: "/sponsor" },
  { title: "Ажилтны харагдац", href: "/staff" },
];

const businessModel = [
  "Стадион операторуудад лиценз",
  "Худалдаачны гүйлгээний шимтгэл ба премиум байршуулалт",
  "Ивээн тэтгэгчийн байршуулалт, брэнд сорилтууд",
  "Премиум аналитик, тайлангийн багц",
  "Бусад эвентэд зориулсан брэндгүй платформ",
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-[var(--background)]">
      <header className="border-b border-subtle bg-white/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
              Дижитал Наадам Юнивэрс
            </p>
            <h1 className="text-lg font-semibold text-slate-900">
              Наадам Операцийн Систем
            </h1>
          </div>
          <div className="hidden items-center gap-3 text-sm font-semibold text-slate-700 md:flex">
            <Link href="/app" className="hover:text-slate-900">
              Үзэгчийн демо
            </Link>
            <Link href="/organizer" className="hover:text-slate-900">
              Зохион байгуулагчийн самбар
            </Link>
            <button className="rounded-full border border-subtle px-4 py-2">
              Хакатон 2026
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-24 px-6 py-16">
        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <Badge tone="red">Дижитал Төв Цэнгэлдэх</Badge>
            <h2 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Наадам, орчин үеийн дижитал хот шиг зохион байгуулагдана.
            </h2>
            <p className="text-lg text-muted">
              Төв цэнгэлдэхэд үзэгч, худалдаачин, ивээн тэтгэгч, зохион байгуулагчдад зориулсан вэб суурьтай үйл ажиллагааны систем. 1,000+
              оролцогчийн хэрэгцээнд нийцсэн, премиум, гар утсанд төвлөрсөн туршлага.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/app"
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
              >
                Үзэгчийн демо үзэх
              </Link>
              <Link
                href="/organizer"
                className="rounded-full border border-subtle bg-white px-6 py-3 text-sm font-semibold text-slate-700"
              >
                Зохион байгуулагчийн самбар нээх
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-subtle bg-white p-6 shadow-lg">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Шууд хуваарь",
                  detail: "3 эвент шууд явагдаж байна",
                },
                {
                  title: "Хоолны захиалга",
                  detail: "12 идэвхтэй дараалал",
                },
                {
                  title: "Газрын зураг анхааруулга",
                  detail: "Хойд ариун цэврийн өрөө ачаалалтай",
                },
                {
                  title: "Аналитик",
                  detail: "940 хэрэглэгч идэвхтэй",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-subtle bg-slate-50 p-4"
                >
                  <p className="text-sm font-semibold text-slate-900">
                    {card.title}
                  </p>
                  <p className="mt-2 text-sm text-muted">{card.detail}</p>
                  <div className="mt-4 h-20 rounded-xl bg-gradient-to-br from-slate-200 to-white" />
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-subtle bg-slate-900 px-5 py-4 text-white">
              <p className="text-sm font-semibold">
                Үйл ажиллагааны мэдээ: Ослын дуудлагыг 4 минутанд шийдсэн
              </p>
              <p className="text-xs text-white/70">
                Үзэгчийн мэдээлэл, ажилтан, худалдаачдын бодит цагийн уялдаа.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <SectionHeading
            eyebrow="Асуудал"
            title="Наадмын олон түмэн хурдан хөдөлнө. Харин зохицуулалт хоцордог."
            description="Дижитал Наадам Юнивэрс нь үзэгч, худалдаачин, зохион байгуулалтын бүх мэдээллийг нэг эх сурвалжаас нэгтгэнэ."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {problems.map((problem) => (
              <div
                key={problem}
                className="rounded-2xl border border-subtle bg-white p-4 text-sm text-muted"
              >
                {problem}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <SectionHeading
            eyebrow="Нэгдсэн шийдэл"
            title="Нэг платформ. Олон портал. Задаргаа үгүй."
            description="Бүх оролцогч өөрийн хэрэгцээнд нийцсэн орчинд, нэг дата дээр ажиллана."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {portalCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-subtle bg-surface p-5 shadow-sm"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="Үндсэн боломжууд"
            title="Дижитал стадионы бүх хэрэгцээ нэг дор."
            description="Хакатоны нөхцөлд бодитой, үзүүлэн хийхэд бэлэн бүтэц."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-subtle bg-white px-4 py-5 text-sm font-semibold text-slate-900 shadow-sm"
              >
                {feature}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Яагаад Монголд тохирох вэ"
            title="Монголд тохируулсан, дэлхийд бэлэн."
            description="Ухаалаг утасанд суурилсан, олон хэлтэй, өргөжих боломжтой платформ."
          />
          <div className="rounded-3xl border border-subtle bg-white p-6">
            <ul className="space-y-4 text-sm text-muted">
              {[
                "Апп суулгах шаардлагагүй, шууд вэбээр ажиллана.",
                "Олон хүнтэй орчинд үзэгч, жуулчин, үйлчилгээний багийг нэгтгэнэ.",
                "Олон хэл ба соёлын тайлбарыг дэмжинэ.",
                "Концерт, үзэсгэлэн, спортын эвентэд өргөжүүлж болно.",
                "Ослын хариу, орлогын урсгалыг бодит цагт сайжруулна.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--naadam-blue)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="Демо чиглэлүүд"
            title="Тус бүрийн туршлагад нэвтрэх."
            description="Бүх портал хоорондоо холбогдсон, шууд демонд бэлэн."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {demoRoutes.map((route) => (
              <Link
                key={route.title}
                href={route.href}
                className="rounded-2xl border border-subtle bg-surface px-4 py-5 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                {route.title}
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <SectionHeading
            eyebrow="Бизнес загвар"
            title="Наадам бүрт тогтвортой ажиллах бүтэц."
            description="Орлогын урсгалуудыг платформд суурилуулсан."
          />
          <div className="rounded-3xl border border-subtle bg-white p-6">
            <ul className="space-y-4 text-sm text-muted">
              {businessModel.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--naadam-gold)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-3xl border border-subtle bg-slate-900 px-8 py-12 text-white">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/60">
                Сүүлчийн уриалга
              </p>
              <h2 className="mt-2 text-3xl font-semibold">
                Дижитал цэнгэлдэхийг нээе.
              </h2>
              <p className="mt-3 text-sm text-white/70">
                Хакатоны демо болон ирээдүйн өргөтгөлд бэлэн.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/app"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900"
              >
                Үзэгчийн демо
              </Link>
              <Link
                href="/organizer"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white"
              >
                Зохион байгуулагчийн самбар
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
