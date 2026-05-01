"use client";
import React from "react";
import { motion } from "framer-motion";
import { vendors } from "@/data/mockData";
import Link from "next/link";

const menuItems = [
  { name: "Алтан хуушуур багц", price: "₮7,000", prep: "8 мин", icon: "🥟" },
  { name: "Айраг", price: "₮5,000", prep: "4 мин", icon: "🍶" },
  { name: "Уламжлалт зуушны багц", price: "₮9,000", prep: "6 мин", icon: "🍱" },
];

export default function VendorsPage() {
  return (
    <div className="min-h-screen bg-[#020202] text-slate-200 font-sans pb-24 selection:bg-[#1c4fd7] selection:text-white">
      <header className="sticky top-0 z-50 w-full bg-[#020202]/80 backdrop-blur-xl border-b border-white/5 py-4 px-6 relative overflow-hidden">
        <div className="flex justify-between items-center relative z-10 max-w-lg mx-auto">
          <Link href="/app" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
            ←
          </Link>
          <div className="text-center">
            <h1 className="text-base font-semibold text-white tracking-tight">Хоол & Ундаа</h1>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
            🛒
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-400"></span>
          </div>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 mt-6 space-y-6">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-6"
        >
          <div className="absolute top-0 left-0 p-32 bg-[#d9a441]/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white drop-shadow-md">
                Шилдэг Асрууд
              </h2>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-mono">
                Дараалал алгасмаар байна уу?
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d9a441]/30 bg-[#d9a441]/10 px-3 py-1.5 self-start md:self-auto">
              <span className="text-[10px] font-bold text-[#d9a441] uppercase tracking-wider">⚡ QPay шууд</span>
            </div>
          </div>

          <div className="mt-8 space-y-4 relative z-10">
            {vendors.map((vendor, i) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={vendor.name}
                className="group rounded-[1.5rem] border border-white/10 bg-[#111] p-5 hover:bg-[#1a1a1a] hover:border-white/20 transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0 ${i % 2 === 0 ? 'bg-orange-500/10 text-orange-400' : 'bg-[#1c4fd7]/10 text-[#1c4fd7]'}`}>
                      {i % 2 === 0 ? '🍗' : '🍺'}
                    </div>
                    <div>
                      <p className="text-base font-semibold text-white mb-1.5">
                        {vendor.name}
                      </p>
                      <p className="text-[10px] uppercase tracking-widest text-slate-400 font-mono">
                        {vendor.category} • Дараалал {vendor.queue} • {vendor.price}
                      </p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                    →
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#000] p-6 shadow-[0_-20px_60px_rgba(0,0,0,0.5)]"
        >
          <div className="relative z-10">
            <h3 className="text-lg font-bold tracking-tight text-white mb-6">
              Өнөөдрийн Түгээмэл
            </h3>
            
            <div className="space-y-3">
              {menuItems.map((item, i) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#111] border border-white/5"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-white mb-1">
                        {item.name}
                      </p>
                      <p className="text-[10px] text-emerald-400 font-mono uppercase tracking-widest">
                        {item.price} • {item.prep} бэлтгэл
                      </p>
                    </div>
                  </div>
                  <button className="rounded-xl border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-colors px-4 py-2 text-xs font-bold uppercase tracking-wide">
                    Нэмэх
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button className="w-full rounded-2xl bg-[#1c4fd7] text-white py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#153cac] transition-colors shadow-[0_10px_30px_rgba(28,79,215,0.3)]">
                QPay -ээр Тооцоо Хийх
              </button>
            </div>
            
            <div className="mt-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]"></div>
                <div>
                  <p className="text-xs text-white font-medium mb-1">Захиалга: Төлөгдсөн, бэлтгэж байна</p>
                  <p className="text-[10px] text-slate-400 font-mono tracking-wide uppercase">Хуушуурын гэрээс 7 минутын дараа авах боломжтой</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
