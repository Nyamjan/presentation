"use client";
import Link from "next/link";
import { Badge } from "@/components/Badge";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const portalCards = [
  {
    title: "Үзэгч",
    description: "Цэнгэлдэхийн бүх мэдээлэл халаасанд байх ухаалаг хөтөч. Хоолны захиалга, шууд хуваарь ба газрын зураг.",
    href: "/app",
    color: "bg-[#c01c2d]",
    delay: 0.1,
  },
  {
    title: "Худалдаачин",
    description: "Олон дараалал үүсгэхгүйгээр ухаалгаар борлуулалт хийх, нөөцөө хянах жижиг бизнесүүдэд зориулсан шийдэл.",
    href: "/vendor",
    color: "bg-[#d9a441]",
    delay: 0.2,
  },
  {
    title: "Зохион байгуулагч",
    description: "Наадмыг бүхэлд нь хянах дижитал команд төв. Ослын шуурхай мэдээлэл, бодит цагийн төлөв байдал.",
    href: "/organizer",
    color: "bg-[#111827]",
    delay: 0.3,
  },
  {
    title: "Ивээн тэтгэгч",
    description: "Хэрэглэгчдэд лоялти хөтөлбөр санал болгож, урсгалд аналитик хийн брэндээ илүү үр дүнтэйгээр байршуулах портал.",
    href: "/sponsor",
    color: "bg-[#1c4fd7]",
    delay: 0.4,
  },
];

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={containerRef} className="flex min-h-screen flex-col bg-white dark:bg-[#050505] selection:bg-[#c01c2d] selection:text-white text-slate-200">
      <header className="fixed top-0 z-50 w-full bg-black/40 backdrop-blur-xl border-b border-white/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#c01c2d]">Naadam.OS</span>
            <span className="font-semibold text-sm tracking-tight text-white">Дижитал юнивэрс</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-400 md:flex">
            <Link href="/app" className="hover:text-white transition-colors">Үзэгчийн апп</Link>
            <Link href="/organizer" className="hover:text-white transition-colors">Команд төв</Link>
            <Link href="/dev" className="hover:text-white transition-colors">Developer Console</Link>
            <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs text-white backdrop-blur-md">Верси 1.0</span>
          </nav>
        </div>
      </header>

      <main className="relative overflow-hidden w-full flex-1">
        {/* HERO SECTION */}
        <section className="relative min-h-[95vh] flex items-center justify-center px-6 overflow-hidden">
          <motion.div 
            style={{ y: yBg }} 
            className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,_#1c4fd71a_0%,_#050505_60%)]" 
          />
          <div className="relative z-10 w-full max-w-7xl pt-24 text-center flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mb-8 inline-block rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm text-white/80 backdrop-blur-md">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#c01c2d]"></span>
                Хакатон 2026 Төсөл
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-5xl font-medium tracking-tight text-white sm:text-7xl lg:text-8xl lg:leading-[1.05] max-w-5xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              Наадам бол зүгээр л уламжлал биш.<br />
              Энэ бол амьд, <span className="italic text-[#1c4fd7]">дижитал хот.</span>
            </motion.h1>
            
            <motion.p 
              className="mt-10 max-w-2xl text-xl leading-relaxed text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              Олон мянган хүн нэг дор цугларахад үүсдэг төөрөгдлийг цэгцэлж, хүн бүрт хүртээмжтэй, ойлгомжтой экосистемийг бүтээлээ.
            </motion.p>
            
            <motion.div 
              className="mt-14 flex flex-wrap items-center justify-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Link
                href="/app"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all hover:scale-105"
              >
                Үзэгчийн Демо 
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/organizer"
                className="inline-flex items-center rounded-full px-8 py-4 text-sm font-medium text-slate-300 hover:text-white transition-colors border border-white/10 hover:bg-white/5"
              >
                Зохион байгуулагч
              </Link>
            </motion.div>
          </div>
        </section>

        {/* SCROLLYTELLING SECTION 1 */}
        <section className="relative py-40 sm:py-56 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <motion.div 
                className="sticky top-40 h-fit"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-semibold tracking-tight text-white lg:text-6xl leading-[1.1]">
                  Яагаад <br/>шинэчлэх хэрэгтэй вэ?
                </h2>
                <p className="mt-6 text-xl text-slate-400 leading-relaxed max-w-md">
                  Олон жилийн турш наадам хуучны аргаар зохион байгуулагдаж ирсэн. Хүмүүс хаана юу болж байгааг мэдэхгүй, урт дараалалд зогсож, эвентийн дата дутмаг байв.
                </p>
              </motion.div>
              
              <div className="space-y-32 pt-20 lg:pt-0">
                {[
                  { number: "01", title: "Төөрөгдөл", text: "Хэрэгцээт байгууламж, хоолны газар, суудлаа олоход хүндрэлтэй." },
                  { number: "02", title: "Хүртээмж", text: "Жуулчдад зориулсан англи хэл дээрх мэдээлэл байхгүй." },
                  { number: "03", title: "Худалдаа", text: "Худалдаачид хүмүүсийн урсгал, дарааллыг үр дүнтэй удирдаж чаддаггүй." },
                  { number: "04", title: "Хяналт", text: "Зохион байгуулагчдад шийдвэр гаргах шууд өгөгдөл, аналитик байхгүй." }
                ].map((item, i) => (
                  <motion.div 
                    key={item.number} 
                    className="flex flex-col gap-6"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                  >
                    <span className="text-sm font-mono text-white/50 border-b border-white/10 pb-4 inline-block w-full">{item.number} / Асуудал</span>
                    <h3 className="text-3xl text-white font-medium">{item.title}</h3>
                    <p className="text-xl text-slate-400">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BENTO GRID PORTALS */}
        <section className="py-40 bg-[#0a0a0a] border-t border-white/5 px-6 relative">
          <div className="mx-auto max-w-7xl">
            <motion.div 
              className="mb-20 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">Нэг систем. Дөрвөн өнцөг.</h2>
              <p className="mt-6 text-xl text-slate-400">Бид хэрэглэгч бүрт өөрт нь хамгийн их хэрэгтэй байгаа датаг ялган харуулж, нэгдмэл экосистем болгон зангидсан.</p>
            </motion.div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {portalCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: card.delay }}
                  className="h-full"
                >
                  <Link href={card.href} className="group flex flex-col justify-between h-full overflow-hidden rounded-3xl bg-white/5 p-8 hover:bg-white/10 transition-all border border-white/5 hover:border-white/20">
                    <div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-full mb-8 text-white relative overflow-hidden">
                        <div className={`absolute inset-0 ${card.color.replace('bg-[', '').replace(']', '')} opacity-20`} style={{ backgroundColor: card.color.replace('bg-[', '').replace(']', '') }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        <span className="font-mono text-2xl relative z-10">{card.title[0]}</span>
                      </div>
                      <h3 className="text-2xl font-medium text-white mb-4">{card.title}</h3>
                      <p className="text-md text-slate-400 leading-relaxed">{card.description}</p>
                    </div>
                    <div className="mt-12 flex items-center text-sm font-medium text-white/50 group-hover:text-white transition-colors">
                      Орж үзэх →
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURE SHOWCASE */}
        <section className="py-40 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block rounded-full border border-[#1c4fd7]/30 bg-[#1c4fd7]/10 px-4 py-1.5 text-xs font-medium text-[#1c4fd7] mb-6">Онцлог давуу тал</div>
              <h2 className="text-4xl font-semibold tracking-tight leading-[1.1] text-white sm:text-5xl">
                Бүх зүйл хоорондоо <br/>шууд харилцана.
              </h2>
              <div className="mt-8 space-y-6 text-lg text-slate-400">
                <p>Үзэгч хоол захиалахад худалдаачинд давхар мэдэгдэл очно. Худалдаачин захиалгаа бэлэн болох үед үзэгчид шууд дохио очихоос гадна арга хэмжээний зохион байгуулагчид эндэх ачааллыг харж байна.</p>
                <p>Осол гарах, эсвэл хүн түгжрэх үед ажилтны хуваарь гэнэт өөрчлөгдөн цэргүүд очих бөгөөд газрын зураг улаан өнгөөр асч, хүмүүсийг өөр зүг рүү чиглүүлнэ.</p>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="space-y-4 pt-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                  <div className="mb-6 h-10 w-10 outline outline-4 outline-red-500/20 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">!</div>
                  <p className="text-lg font-medium text-white">Бөөгнөрөл үүссэн</p>
                  <p className="mt-2 text-sm text-slate-400">Автомат анхааруулга</p>
                </div>
                <div className="rounded-3xl border border-white/5 bg-[#0a0a0a] p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10 font-mono text-9xl leading-none -mt-4 -mr-4 text-white">12</div>
                  <p className="text-5xl font-light tracking-tight relative z-10">12<span className="text-2xl text-white/50 tracking-normal">m</span></p>
                  <p className="mt-4 text-sm text-white/60 relative z-10">Хүлээлгийн хугацаа</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="rounded-3xl border border-transparent bg-[#d9a441] p-8 text-black aspect-square flex flex-col justify-end">
                  <p className="text-xl font-semibold leading-tight">Шууд орлогын <br/>хяналт</p>
                  <p className="mt-2 text-sm text-black/70 font-medium">Худалдаачинд</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                  <p className="text-lg font-medium text-white">Олон хэлний дэмжлэг</p>
                  <p className="mt-2 text-sm text-slate-400">AI орчуулга болон дэмжлэгтэй</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 py-12 text-center text-sm text-slate-500 bg-white dark:bg-[#050505]">
           <p>Дижитал Наадам Юнивэрс — Хакатон 2026. Монгол улсад дижитал шилжилтийг хурдасгах нь.</p>
        </footer>
      </main>
    </div>
  );
}
