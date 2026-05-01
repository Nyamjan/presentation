"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const languages = ["Монгол", "Англи", "Хятад", "Орос", "Солонгос"];

const questions = [
  "Миний суудал хаана вэ?",
  "Хамгийн ойрын ариун цэврийн өрөө?",
  "Одоо ямар эвент болж байна вэ?",
];

const culturalCards = [
  "Бөх: Монголын хамгийн эртний үндэсний спорт.",
  "Сур: Уламжлалт нум сумтай харвааны тэмцээн.",
];

export default function AssistantPage() {
  return (
    <div className="min-h-screen bg-[#020202] text-slate-200 font-sans pb-24 selection:bg-[#1c4fd7] selection:text-white">
      <header className="sticky top-0 z-50 w-full bg-[#020202]/80 backdrop-blur-xl border-b border-white/5 py-4 px-6 relative overflow-hidden">
        <div className="flex justify-between items-center relative z-10 max-w-lg mx-auto">
          <Link href="/app" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
            ←
          </Link>
          <div className="text-center">
            <h1 className="text-base font-semibold text-white tracking-tight">Туслах</h1>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors relative">
            🌐
          </div>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 mt-6 space-y-6">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-6"
        >
          <div className="absolute top-0 right-0 p-32 bg-[#1c4fd7]/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">AI Туслах шууд</span>
            </div>
            
            <h2 className="text-2xl font-bold tracking-tight text-white mb-2">
              Олон хэлт жуулчны туслах
            </h2>
            <p className="text-sm text-slate-400 mb-6">
              Жуулчдад зориулсан бодит цагийн зөвлөгөө, тайлбар.
            </p>

            <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-hide -mx-6 px-6 mask-edges">
              {languages.map((language, i) => (
                <button
                  key={language}
                  className={`flex-shrink-0 rounded-full border ${i === 0 ? 'border-white bg-white text-black' : 'border-white/10 bg-[#151515] text-slate-300 hover:bg-white/20'} px-5 py-2 text-xs font-bold uppercase tracking-wide transition-all`}
                >
                  {language}
                </button>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-[2rem] border border-white/10 bg-[#111] p-5 relative overflow-hidden"
        >
          <div className="space-y-4 text-sm relative z-10 mb-6">
            <div className="rounded-2xl rounded-tl-sm bg-[#1a1a1a] border border-white/5 py-3 px-4 text-slate-200 max-w-[85%] self-start shadow-xl">
              Сайн байна уу! Юугаар туслах вэ?
            </div>
            <div className="rounded-2xl rounded-tr-sm bg-[#1c4fd7] py-3 px-4 text-white max-w-[85%] ml-auto shadow-xl">
              Хамгийн ойрын ариун цэврийн өрөө хаана байна?
            </div>
            <div className="rounded-2xl rounded-tl-sm bg-[#1a1a1a] border border-white/5 py-3 px-4 text-slate-200 max-w-[85%] self-start shadow-xl">
              Хойд ариун цэврийн өрөө 3 минутын алхамд байна. Зам заах уу?
            </div>
          </div>
          
          <div className="relative z-10 flex gap-2">
            <input
              className="flex-1 rounded-2xl border border-white/10 bg-[#000] px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#1c4fd7]"
              placeholder="Асуултаа бичнэ үү..."
            />
            <button className="rounded-2xl bg-white px-5 py-3 text-sm font-bold text-black hover:bg-slate-200 transition-colors">
              Илгээх
            </button>
          </div>
        </motion.section>

        <div className="grid gap-4 sm:grid-cols-2">
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-6"
          >
            <p className="text-sm font-bold tracking-tight text-white mb-4 uppercase">
              Санал болгож буй асуултууд
            </p>
            <div className="space-y-2">
              {questions.map((question) => (
                <div
                  key={question}
                  className="rounded-xl border border-white/5 bg-[#1a1a1a] p-4 text-sm text-slate-300 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                >
                  {question}
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-6"
          >
            <p className="text-sm font-bold tracking-tight text-white mb-4 uppercase">
              Соёлын тайлбар
            </p>
            <div className="space-y-3">
              {culturalCards.map((card) => (
                <div
                  key={card}
                  className="rounded-xl border border-[#d9a441]/20 bg-[#d9a441]/5 p-4 text-sm text-[#d9a441]"
                >
                  {card}
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .mask-edges { mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent); }
      `}</style>
    </div>
  );
}
