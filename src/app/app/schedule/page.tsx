"use client";
import React from "react";
import { motion } from "framer-motion";
import { scheduleItems } from "@/data/mockData";
import Link from "next/link";

const tabs = [
  "Бөх",
  "Сур",
  "Морин уралдаан",
  "Нээлтийн ёслол",
  "Соёлын эвент",
];

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-[#020202] text-slate-200 font-sans pb-24 selection:bg-[#1c4fd7] selection:text-white">
      <header className="sticky top-0 z-50 w-full bg-[#020202]/80 backdrop-blur-xl border-b border-white/5 py-4 px-6 relative overflow-hidden">
        <div className="flex justify-between items-center relative z-10 max-w-lg mx-auto">
          <Link href="/app" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
            ←
          </Link>
          <div className="text-center">
            <h1 className="text-base font-semibold text-white tracking-tight">Хуваарь</h1>
          </div>
          <div className="w-10 h-10"></div>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 mt-6 space-y-6">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-6"
        >
          <div className="absolute top-0 right-0 p-32 bg-[#1c4fd7]/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white drop-shadow-md">
                Шууд хуваарь
              </h2>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-mono">
                Шижигнэсэн цагийн хуваарь
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1.5 self-start md:self-auto">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">2 эвент шууд</span>
            </div>
          </div>

          <div className="mt-6 flex overflow-x-auto pb-2 gap-2 scrollbar-hide -mx-6 px-6 relative z-10 mask-edges">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                className={`flex-shrink-0 rounded-xl border ${i === 0 ? 'border-white bg-white text-black' : 'border-white/10 bg-[#151515] text-slate-300 hover:bg-white/20'} px-5 py-2.5 text-xs font-semibold uppercase tracking-wide transition-all`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-8 space-y-4 relative z-10">
            {scheduleItems.map((item, i) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={item.title}
                className="group rounded-[1.5rem] border border-white/10 bg-[#111] p-5 hover:bg-[#1a1a1a] hover:border-white/20 transition-all cursor-pointer"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg shrink-0">
                      {i % 2 === 0 ? '🏇' : '🤼'}
                    </div>
                    <div>
                      <p className="text-base font-semibold text-white mb-1">
                        {item.title}
                      </p>
                      <p className="text-[11px] uppercase tracking-widest text-slate-400 font-mono">
                        {item.time} • {item.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest">
                      {item.status}
                    </span>
                    <button className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white transition-colors group-hover:bg-white group-hover:text-black">
                      <span className="text-lg leading-none">+</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .mask-edges { mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent); }
      `}</style>
    </div>
  );
}
