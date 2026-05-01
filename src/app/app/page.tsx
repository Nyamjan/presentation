"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { quickActions, scheduleItems, vendors } from "@/data/mockData";

export default function SpectatorHome() {
  return (
    <div className="min-h-screen bg-[#020202] text-slate-200 font-sans pb-24 selection:bg-[#1c4fd7] selection:text-white">
      {/* Dynamic Header */}
      <header className="sticky top-0 z-50 w-full bg-[#020202]/80 backdrop-blur-xl border-b border-white/5 py-4 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1c4fd7]/10 to-transparent"></div>
        <div className="flex justify-between items-center relative z-10 max-w-lg mx-auto">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/10 flex items-center justify-center font-semibold text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]">
               А
             </div>
             <div>
               <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">Ая • Ticket #4002</p>
               <h1 className="text-base font-semibold text-white tracking-tight">Төв цэнгэлдэх</h1>
             </div>
          </div>
          <Link href="/">
            <div className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-semibold text-white backdrop-blur-md">
              ● Live
            </div>
          </Link>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 mt-6 space-y-6">
        
        {/* Next Up Hero */}
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-6">
          <div className="absolute top-0 right-0 p-32 bg-[#1c4fd7]/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1c4fd7]/30 bg-[#1c4fd7]/10 px-3 py-1.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#1c4fd7] animate-pulse"></span>
              <span className="text-xs font-semibold text-[#1c4fd7]">18 минутын дараа</span>
            </div>
            
            <h2 className="text-3xl font-medium tracking-tight text-white mb-1">
              Морин уралдаан
            </h2>
            <p className="text-slate-400 text-sm mb-6 flex items-center gap-2">
              <span className="opacity-70">📍</span> Хүй долоо худаг
            </p>

            <button className="w-full rounded-2xl bg-white text-black py-4 text-sm font-semibold hover:bg-slate-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.15)]">
              Мэдээлэл харах →
            </button>
          </div>
        </section>

        {/* Utilitarian Quick Actions (Bento) */}
        <section className="grid grid-cols-2 gap-3">
          {[
            { title: "Миний тасалбар", icon: "🎫", colSpan: "col-span-2" },
            { title: "Хоол захиалах", icon: "🍱", colSpan: "col-span-1" },
            { title: "Цэнгэлдэх газрын зураг", icon: "🗺️", colSpan: "col-span-1" },
          ].map((action, i) => (
             <motion.div 
               key={i}
               whileTap={{ scale: 0.97 }}
               className={`${action.colSpan} cursor-pointer rounded-[2rem] bg-white/5 border border-white/5 p-5 hover:bg-white/10 transition-colors flex flex-col justify-between min-h-[120px]`}
             >
               <span className="text-2xl">{action.icon}</span>
               <span className="text-sm font-medium text-white mt-4">{action.title}</span>
             </motion.div>
          ))}
        </section>

        {/* Schedule List */}
        <section>
          <div className="flex items-center justify-between mb-4">
             <h3 className="text-lg font-semibold text-white tracking-tight">Өнөөдрийн хөтөлбөр</h3>
             <span className="text-xs font-medium text-slate-500 uppercase tracking-widest cursor-pointer hover:text-white">Бүгд →</span>
          </div>
          <div className="space-y-3">
            {scheduleItems.slice(0, 3).map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0a0a0a] p-4 flex items-center justify-between"
              >
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex flex-col items-center justify-center border border-white/5">
                    <span className="text-[10px] text-slate-500 font-mono">{item.time.split('-')[0].trim()}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white group-hover:text-[#1c4fd7] transition-colors">{item.title}</p>
                    <p className="text-xs text-slate-400 mt-1">{item.location}</p>
                  </div>
                </div>
                <div className="px-2 py-1 bg-white/5 text-[10px] rounded text-slate-400 font-medium uppercase border border-white/5">
                  {item.status}
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
