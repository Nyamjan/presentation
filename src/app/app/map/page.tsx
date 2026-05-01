"use client";
import React, { useState, useRef, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const filters = [
  { id: "all", label: "Бүгд", icon: "📍" },
  { id: "seat", label: "Суудал", icon: "💺" },
  { id: "food", label: "Хоол", icon: "🍔" },
  { id: "drink", label: "Ундаа", icon: "🥤" },
  { id: "wc", label: "00 Өрөө", icon: "🚻" },
  { id: "merch", label: "Худалдаа", icon: "🛍️" },
  { id: "parking", label: "Зогсоол", icon: "🅿️" },
  { id: "gate", label: "Гарц", icon: "🚪" },
];

// High Density Utility Data (Inside and Outside Stadium)
const utilities = [
  // --- INNER BOUNDARY (rad < 55) ---
  { id: "u1", type: "food", name: "KFC Түргэн хоол", desc: "Буянт-Ухаа салбар", angle: 275, rad: 45, status: "Нээлттэй" },
  { id: "u2", type: "wc", name: "00 / Эрэгтэй", desc: "А хэсэг", angle: 265, rad: 45, status: "Ачаалал: Бага" },
  { id: "u3", type: "wc", name: "00 / Эмэгтэй", desc: "А хэсэг", angle: 285, rad: 45, status: "Ачаалал: Дунд" },
  { id: "u4", type: "gate", name: "Хойд хаалга 1", desc: "Гол орох хэсэг", angle: 270, rad: 55, status: "Ачаалалтай" },
  { id: "u5", type: "drink", name: "Ундаа & Ус", desc: "Хүйтэн уух зүйлс", angle: 5, rad: 45, status: "Нээлттэй" },
  { id: "u6", type: "util", name: "Анхны тусламж", desc: "Эмнэлгийн цэг", angle: 350, rad: 45, status: "Бэлэн" },
  { id: "u7", type: "gate", name: "Зүүн гарц", desc: "Гарц", angle: 0, rad: 55, status: "Нээлттэй" },
  { id: "u8", type: "food", name: "CU Fried Chicken", desc: "Хязгаарлагдмал цэс", angle: 85, rad: 45, status: "Захиалга дүүрсэн" },
  { id: "u9", type: "wc", name: "00 / Нийтийн", desc: "Б хэсэг", angle: 95, rad: 45, status: "Ачаалал: Их" },
  { id: "u10", type: "gate", name: "Урд хаалга", desc: "Гарах хэсэг", angle: 90, rad: 55, status: "Ачаалалтай" },
  { id: "u11", type: "util", name: "Лавлах цэг", desc: "Мэдээлэл", angle: 170, rad: 45, status: "Нээлттэй" },
  { id: "u12", type: "food", name: "Шишхэд бэйкери", desc: "Түргэн зууш", angle: 190, rad: 45, status: "Нээлттэй" },
  { id: "u13", type: "gate", name: "Баруун гарц", desc: "VIP гарц", angle: 180, rad: 55, status: "Зөвхөн мандаттай" },

  // --- OUTSIDE STADIUM FESTIVAL GROUNDS (rad: 65 - 90) ---
  // North Food Court Area
  { id: "u14", type: "food", name: "Наадмын Алтан Хуушуур", desc: "Төв асрын хуушуур", angle: 260, rad: 70, status: "Их дараалалтай" },
  { id: "u15", type: "food", name: "Шорлог & Шарсан мах", desc: "Асар #12", angle: 270, rad: 75, status: "Нээлттэй" },
  { id: "u16", type: "food", name: "Гэрийн Хуушуур", desc: "Асар #18", angle: 280, rad: 70, status: "Нээлттэй" },
  { id: "u17", type: "drink", name: "Айраг & Гүүний саам", desc: "Уламжлалт ундаа", angle: 275, rad: 65, status: "Бэлэн" },
  { id: "u18", type: "wc", name: "Нийтийн 00 (Гадаа)", desc: "Мобайл 00", angle: 250, rad: 72, status: "Ачаалал: Бага" },
  { id: "u19", type: "parking", name: "Хойд Автозогсоол", desc: "P1: Нийтийн", angle: 270, rad: 85, status: "Бүтэн дүүрсэн" },

  // East Merch Village
  { id: "u20", type: "merch", name: "Бэлэг дурсгал", desc: "Малгай, цамц", angle: 10, rad: 68, status: "Нээлттэй" },
  { id: "u21", type: "merch", name: "Үндэсний хувцас", desc: "Гоёл чимэглэл", angle: 20, rad: 75, status: "Нээлттэй" },
  { id: "u22", type: "food", name: "Зайрмаг & Амттан", desc: "Хүүхдийн асар", angle: 5, rad: 78, status: "Нээлттэй" },
  { id: "u23", type: "wc", name: "Нийтийн 00 (Гадаа)", desc: "Зүүн бүс", angle: 35, rad: 65, status: "Ачаалал: Дунд" },
  { id: "u24", type: "parking", name: "Зүүн Автозогсоол", desc: "P2: VIP зогсоол", angle: 0, rad: 90, status: "Сул зай: 14" },

  // South Drink Stations & Sponsor Tents
  { id: "u25", type: "drink", name: "Tiger Energy Zone", desc: "Ивээн тэтгэгч", angle: 80, rad: 68, status: "Хөгжим & Тоглоом" },
  { id: "u26", type: "drink", name: "MCS Coca Cola", desc: "Амралтын бүс", angle: 100, rad: 72, status: "Урамшуулал явагдаж байна" },
  { id: "u27", type: "merch", name: "Unitel асарт хөгжөөн", desc: "Тоглоом & Бэлэг", angle: 90, rad: 80, status: "Идэвхтэй" },
  { id: "u28", type: "wc", name: "Нийтийн 00 (Гадаа)", desc: "Урд бүс", angle: 110, rad: 65, status: "Ачаалал: Их" },
  { id: "u29", type: "parking", name: "Урд Автозогсоол", desc: "P3: Нийтийн", angle: 90, rad: 95, status: "Сул зай: 82" },

  // West More Food & Medical
  { id: "u30", type: "food", name: "Халал Хуушуур", desc: "Асар #45", angle: 160, rad: 68, status: "Нээлттэй" },
  { id: "u31", type: "food", name: "Цай Цайны газар", desc: "Асар #46", angle: 170, rad: 75, status: "Нээлттэй" },
  { id: "u32", type: "util", name: "Түргэн тусламжийн машин", desc: "Эмнэлэг", angle: 190, rad: 70, status: "Зогсоол дээр" },
  { id: "u33", type: "wc", name: "Нийтийн 00 (Гадаа)", desc: "Баруун бүс", angle: 200, rad: 65, status: "Ачаалал: Бага" },
  { id: "u34", type: "drink", name: "АПУ ХК Асар", desc: "Ус ундаа", angle: 180, rad: 82, status: "Нээлттэй" },
];

export default function MapPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const containerRef = useRef(null);

  // Generate an overwhelming amount of "seats" to make it look like a real ticketing map
  const seats = useMemo(() => {
    let arr = [];
    let idCounter = 1;
    // 6 Rings of seats (radius 18 to 40)
    for (let r = 0; r < 6; r++) {
      const radius = 18 + r * 4.5;
      const numDots = Math.floor(2 * Math.PI * radius * 0.8); 
      for (let i = 0; i < numDots; i++) {
        const angle = (i / numDots) * 360;
        
        const isWalkway = (angle > 350 || angle < 10) || 
                          (angle > 80 && angle < 100) || 
                          (angle > 170 && angle < 190) || 
                          (angle > 260 && angle < 280);
        
        if (isWalkway) continue;

        let section = "A";
        if (angle > 10 && angle < 80) section = "Зүүн Өмнөд (B)";
        else if (angle > 100 && angle < 170) section = "Баруун Өмнөд (C)";
        else if (angle > 190 && angle < 260) section = "Баруун Хойд (D)";
        else if (angle > 280 && angle < 350) section = "Зүүн Хойд (A)";

        const rand = Math.random();
        let status = "available";
        let color = "bg-emerald-400";
        if (rand > 0.85) { status = "sold"; color = "bg-white/10"; }
        else if (rand > 0.70) { status = "vip"; color = "bg-[#d9a441]"; }
        else if (rand > 0.65) { status = "reserved"; color = "bg-blue-400"; }
        
        arr.push({
          id: `s-${idCounter++}`,
          type: "seat",
          section,
          row: r + 1,
          seatNum: i + 1,
          angle,
          rad: radius,
          status,
          color,
          price: status === "vip" ? "120,000₮" : "45,000₮",
        });
      }
    }
    return arr;
  }, []);

  const handleSelect = (item: any) => {
    setSelectedItem(item);
  };

  const getIconForType = (type: string) => {
    switch(type) {
      case "food": return "🍔";
      case "drink": return "🥤";
      case "wc": return "🚻";
      case "medical": return "🚑";
      case "gate": return "🚪";
      case "util": return "ℹ️";
      case "merch": return "🛍️";
      case "parking": return "🅿️";
      case "seat": return "💺";
      default: return "📍";
    }
  };

  const getPos = (angleDeg: number, radiusPct: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    const x = 50 + radiusPct * Math.cos(rad);
    const y = 50 + radiusPct * Math.sin(rad);
    return { left: `${x}%`, top: `${y}%` };
  };

  const visibleItems = useMemo(() => {
    let all = [...utilities, ...seats];
    if (activeFilter === "all") return all;
    if (activeFilter === "seat") return seats;
    return utilities.filter(u => u.type === activeFilter);
  }, [activeFilter, seats]);

  return (
    <div className="min-h-screen bg-[#000] text-slate-200 font-sans pb-[30vh] selection:bg-[#1c4fd7] selection:text-white">
      <div className="fixed top-6 right-6 z-50 flex flex-col items-end space-y-4 pointer-events-none">
        <div className="flex items-center gap-4 pointer-events-auto">
          <div className="text-right bg-[#000]/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl">
            <h2 className="text-xl font-bold tracking-tight text-white">Тасалбар & Бүдүүвч</h2>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-mono flex items-center justify-end gap-2">
              {seats.filter(s => s.status === 'available').length} суудал, {utilities.length} үйлчилгээ
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_#34d399]"></span>
            </p>
          </div>
          <Link href="/app" className="w-12 h-12 rounded-full bg-[#000]/80 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-white/10 focus:ring-2 focus:ring-[#1c4fd7] transition-colors shadow-2xl shrink-0">
            ✕
          </Link>
        </div>

        <div className="flex flex-wrap justify-end gap-2 max-w-md pointer-events-auto">
          {filters.map(f => (
            <button 
              key={f.id}
              onClick={() => { setActiveFilter(f.id); setSelectedItem(null); }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wide transition-all border shadow-lg ${activeFilter === f.id ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.4)]' : 'bg-[#0f0f0f]/80 backdrop-blur-md border-white/10 text-slate-300 hover:bg-white/20 hover:text-white'}`}
            >
              <span className="text-base leading-none">{f.icon}</span>
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* The Draggable Map Canvas directly behind Header/Filters */}
      <div 
        className="fixed inset-0 w-full h-[100dvh] bg-white dark:bg-[#050505] touch-none cursor-grab active:cursor-grabbing z-0"
        ref={containerRef}
      >
        <motion.div 
          drag
          dragConstraints={containerRef}
          dragElastic={0.4}
          className="absolute inset-x-[-100%] inset-y-[-100%] w-[300%] h-[300%]"
          initial={{ scale: 0.5, x: 0, y: 0 }}
          animate={{ scale: 0.5 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          {/* Deep Grid Background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNDBoNDBWMEgwem0zOS0xdjM4SDFWMWgzOHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] pointer-events-none"></div>

          {/* Epicenter Stadium Ring Overlay */}
          <div className="absolute left-[50%] top-[50%] w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white/5 border-dashed animate-[spin_400s_linear_infinite] pointer-events-none"></div>
          {/* Outer Festival Fence */}
          <div className="absolute left-[50%] top-[50%] w-[185%] h-[185%] -translate-x-1/2 -translate-y-1/2 rounded-[5rem] border border-red-500/10 pointer-events-none"></div>

          {/* Center Field */}
          <div className="absolute left-[50%] top-[50%] w-[15%] h-[9%] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-[#1c4fd7]/30 bg-[#1c4fd7]/5 shadow-[0_0_80px_rgba(28,79,215,0.15)] flex items-center justify-center pointer-events-none">
            <div className="w-full h-full border border-white/10 m-2 rounded-2xl flex flex-col items-center justify-center gap-2 opacity-50">
               <span className="text-xl font-bold tracking-[0.5em] text-[#1c4fd7] uppercase leading-none">FIELD</span>
            </div>
          </div>

          {/* Render Points */}
          {visibleItems.map(item => {
            const pos = getPos(item.angle, item.rad);
            const isSelected = selectedItem?.id === item.id;
            
            if (item.type === "seat") {
               return (
                 <div 
                   key={item.id}
                   onClick={(e) => { e.stopPropagation(); handleSelect(item); }}
                   className={`absolute w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform ${item.color} ${isSelected ? 'scale-[300%] ring-4 ring-white ring-offset-4 ring-offset-[#050505] z-50 relative' : 'hover:scale-150 group'}`}
                   style={pos}
                 />
               )
            } else {
               return (
                 <div 
                   key={item.id}
                   onClick={(e) => { e.stopPropagation(); handleSelect(item); }}
                   className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all z-20`}
                   style={pos}
                 >
                   <div className={`w-14 h-14 rounded-full flex items-center justify-center text-3xl border-[3px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all ${isSelected ? 'bg-white border-transparent scale-150 relative z-50' : 'bg-[#1a1a1a] border-white/30 hover:border-white hover:scale-125'}`}>
                     {getIconForType(item.type)}
                   </div>
                   {isSelected && <span className="absolute top-full left-1/2 -translate-x-1/2 mt-4 px-3 py-1.5 bg-white text-black text-sm font-bold uppercase rounded shadow-2xl tracking-widest whitespace-nowrap z-50">{item.name}</span>}
                 </div>
               )
            }
          })}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 pb-8 max-w-lg mx-auto"
          >
            <div className="bg-[#0f0f0f]/95 backdrop-blur-xl border border-white/20 rounded-[2.5rem] shadow-[0_-20px_60px_rgba(0,0,0,0.8)] overflow-hidden overflow-y-auto max-h-[80vh]">
              <div className="w-full flex justify-center pt-4 pb-2" onClick={() => setSelectedItem(null)}>
                 <div className="w-16 h-1.5 bg-white/30 rounded-full cursor-pointer hover:bg-white/50"></div>
              </div>
              
              <div className="px-6 pb-8 pt-4">
                {selectedItem.type === "seat" ? (
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="inline-flex gap-2 items-center mb-3">
                           <span className={`w-2.5 h-2.5 rounded-full ${selectedItem.status === 'available' ? 'bg-emerald-400' : selectedItem.status === 'vip' ? 'bg-[#d9a441]' : 'bg-red-500'}`}></span>
                           <span className="text-xs uppercase font-mono tracking-widest text-slate-400">
                             {selectedItem.status === 'available' ? 'Бэлэн' : selectedItem.status === 'vip' ? 'Алтан суудал' : 'Зарагдсан'}
                           </span>
                        </div>
                        <h3 className="text-4xl font-medium tracking-tight text-white line-clamp-1">Эгнээ {selectedItem.row} / {selectedItem.seatNum}</h3>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-slate-500 uppercase tracking-widest text-right mb-1">Үнэ</p>
                        <p className="text-2xl font-bold font-mono text-emerald-400">{selectedItem.price}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 border-y border-white/10 py-5 text-sm">
                       <div>
                         <p className="text-xs text-slate-500 uppercase tracking-widest mb-1.5">Хэсэг</p>
                         <p className="text-white font-medium text-lg">{selectedItem.section}</p>
                       </div>
                       <div>
                         <p className="text-xs text-slate-500 uppercase tracking-widest mb-1.5">Алхах зай</p>
                         <p className="text-white font-medium text-lg">~4 мин</p>
                       </div>
                    </div>

                    <button 
                      disabled={selectedItem.status === 'sold'}
                      className={`w-full py-5 rounded-2xl flex items-center justify-center gap-2 font-bold text-base uppercase tracking-wider transition-all
                        ${selectedItem.status === 'sold' 
                          ? 'bg-white/5 text-white/30 cursor-not-allowed border border-white/10' 
                          : 'bg-[#1c4fd7] hover:bg-[#153cac] text-white shadow-xl shadow-[#1c4fd7]/40'}`}
                    >
                      {selectedItem.status === 'sold' ? 'Уучлаарай, зарагдсан' : 'Тасалбар Шүүрч Авах →'}
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="flex gap-5 items-start">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-[1.2rem] bg-[#1a1a1a] shadow-inner border border-white/10 text-3xl shrink-0">
                        {getIconForType(selectedItem.type)}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold tracking-tight text-white leading-tight mb-2">{selectedItem.name}</h3>
                        <p className="text-sm text-slate-400">{selectedItem.desc}</p>
                      </div>
                    </div>

                    <div className="bg-[#151515] border border-white/10 rounded-2xl p-5 flex gap-4 items-center">
                       <div className="flex-1">
                         <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-2 font-mono">Шууд Төлөв</p>
                         <p className="text-base font-semibold text-white">{selectedItem.status}</p>
                       </div>
                       <div className="w-px h-10 bg-white/10"></div>
                       <div className="flex-1 text-right">
                         <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-2 font-mono">Зай</p>
                         <p className="text-base font-semibold text-emerald-400">120м одооноос</p>
                       </div>
                    </div>

                    <div className="flex gap-3 pt-3">
                      {(selectedItem.type === "food" || selectedItem.type === "drink" || selectedItem.type === "merch") && (
                        <button className="flex-1 bg-white text-black py-4 rounded-xl font-bold text-sm uppercase tracking-wide hover:bg-slate-200 transition-colors shadow-lg">
                          Цэс / Бараа Харах
                        </button>
                      )}
                      <button className="flex-1 bg-white/10 text-white border border-white/20 py-4 rounded-xl font-bold text-sm uppercase tracking-wide hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
                        <span>Зам заах</span> <span className="text-xl leading-none">↗</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .mask-edges { mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent); }
      `}</style>
    </div>
  );
}
