"use client";
import React from "react";
import { motion } from "framer-motion";
import { incidentReports } from "@/data/mockData";
import Link from "next/link";

const incidentTypes = [
  "Эмнэлгийн тусламж",
  "Алдагдсан эд зүйл",
  "Цэвэрлэгээ шаардлагатай",
  "Журам зөрчсөн",
];

export default function SafetyPage() {
  return (
    <div className="min-h-screen bg-[#020202] text-slate-200 font-sans pb-24 selection:bg-[#1c4fd7] selection:text-white">
      <header className="sticky top-0 z-50 w-full bg-[#020202]/80 backdrop-blur-xl border-b border-white/5 py-4 px-6 relative overflow-hidden">
        <div className="flex justify-between items-center relative z-10 max-w-lg mx-auto">
          <Link href="/app" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
            ←
          </Link>
          <div className="text-center">
            <h1 className="text-base font-semibold text-white tracking-tight">Аюулгүй байдал</h1>
          </div>
          <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 hover:bg-red-500/20 transition-colors relative">
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            🚨
          </div>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 mt-6 space-y-6">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-6"
        >
          <div className="absolute top-0 right-0 p-32 bg-red-500/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider">Яаралтай дуудлага: 101</span>
            </div>
            
            <h2 className="text-2xl font-bold tracking-tight text-white mb-2">
              Асуудал Мэдээлэх
            </h2>
            <p className="text-sm text-slate-400 mb-6">
              Стадионд гарсан асуудлыг шуурхай мэдээлж тусламж авах боломж.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {incidentTypes.map((type) => (
                <button
                  key={type}
                  className="rounded-xl border border-white/10 bg-[#151515] px-4 py-2.5 text-xs font-semibold text-slate-300 hover:bg-white/20 transition-all uppercase tracking-wide"
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="space-y-3">
              <input
                className="w-full rounded-2xl border border-white/10 bg-[#000] px-4 py-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                placeholder="Байршил (жишээ: B хэсэг, 2-р хаалга)"
              />
              <textarea
                className="w-full rounded-2xl border border-white/10 bg-[#000] px-4 py-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-red-500 resize-none"
                rows={4}
                placeholder="Асуудлыг тайлбарлана уу..."
              />
              <button className="w-full rounded-2xl bg-red-600 text-white py-4 mt-2 text-sm font-bold uppercase tracking-widest hover:bg-red-700 transition-colors shadow-[0_10px_30px_rgba(220,38,38,0.2)]">
                Мэдээлэл Илгээх
              </button>
            </div>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-[2rem] border border-white/10 bg-[#111] p-6 relative overflow-hidden"
        >
          <h3 className="text-sm font-bold tracking-tight text-white mb-4 uppercase">
            Таны мэдээллүүд
          </h3>
          <div className="space-y-3">
            {incidentReports.map((report) => (
              <div
                key={`${report.type}-${report.time}`}
                className="rounded-[1.5rem] border border-white/5 bg-[#1a1a1a] p-4"
              >
                <div className="flex justify-between items-start mb-2">
                  <p className="text-sm font-semibold text-white">
                    {report.type}
                  </p>
                  <span className="px-2 py-1 rounded-md bg-[#1c4fd7]/10 text-[#1c4fd7] border border-[#1c4fd7]/20 text-[10px] font-bold uppercase tracking-widest">
                    {report.status}
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">
                  {report.location} • {report.time}
                </p>
              </div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
