"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const dbLogs = [
  "[14:23:01] 200 OK /api/v1/spectators/938 - 12ms",
  "[14:23:02] 200 OK /api/v1/vendors/auth - 45ms",
  "[14:23:05] 500 ERR /api/v1/hardware/gate-4 - Connection reset",
  "[14:23:08] 200 OK /api/v1/incidents/sync - 8ms",
];

export default function DevConsole() {
  const [flags, setFlags] = useState({
    mockDataMode: true,
    socketSync: false,
    stressTestMode: false,
    aiTranslation: true,
  });

  return (
    <div className="min-h-screen bg-[#050505] text-[#00ff41] font-mono p-6 selection:bg-[#00ff41] selection:text-black">
      <header className="flex justify-between items-end border-b border-[#00ff41]/20 pb-4 mb-8">
        <div>
          <h1 className="text-2xl tracking-tighter uppercase font-bold">Naadam_OS // Root_Control</h1>
          <p className="text-xs text-[#00ff41]/50 mt-1">SYS_ADMIN ID: root_0x99a</p>
        </div>
        <div className="flex gap-4 text-xs">
          <Link href="/" className="hover:bg-[#00ff41] hover:text-black px-2 py-1 transition-colors">[EXIT_TO_SURFACE]</Link>
          <span className="animate-pulse">● UPLINK_STABLE</span>
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Core System Status */}
        <section className="col-span-1 border border-[#00ff41]/20 p-4 bg-[#00ff41]/[0.02]">
          <h2 className="text-sm border-b border-[#00ff41]/20 pb-2 mb-4 uppercase">System_Load._</h2>
          <div className="space-y-4 text-sm text-[#00ff41]/80">
            <div className="flex justify-between"><span>WEB_NODES</span> <span className="text-white">12/12 ACTIVE</span></div>
            <div className="flex justify-between"><span>DB_LATENCY</span> <span>~14ms</span></div>
            <div className="flex justify-between"><span>CACHE_HIT_RATIO</span> <span className="text-white">99.4%</span></div>
            <div className="flex justify-between"><span>SOCKET_CONNS</span> <span>14,039</span></div>
            <div className="mt-4 pt-4 border-t border-[#00ff41]/20">
              <div className="w-full bg-black h-2 mt-1 border border-[#00ff41]/30">
                <div className="bg-[#00ff41] h-full w-[42%]"></div>
              </div>
              <p className="text-[10px] mt-1 text-right text-[#00ff41]/50">MEM_USAGE: 42%</p>
            </div>
          </div>
        </section>

        {/* Feature Flags / Overrides */}
        <section className="col-span-1 lg:col-span-2 border border-[#00ff41]/20 p-4 bg-[#00ff41]/[0.02]">
          <h2 className="text-sm border-b border-[#00ff41]/20 pb-2 mb-4 uppercase">Feature_Flags & Overrides._</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(flags).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between border border-[#00ff41]/10 p-3 hover:bg-[#00ff41]/10 transition-colors cursor-pointer" 
                   onClick={() => setFlags({...flags, [key]: !value})}>
                <span className="text-sm">{key}</span>
                <span className={`text-xs px-2 py-1 ${value ? 'bg-[#00ff41] text-black' : 'bg-transparent border border-[#00ff41]/40 text-[#00ff41]/40'}`}>
                  {value ? 'ENABLED' : 'DISABLED'}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
             <button className="text-xs bg-[#c01c2d] text-white px-4 py-2 hover:bg-red-700 transition uppercase tracking-widest font-bold">
               [!] Trigger_Evacuation_Mode
             </button>
             <button className="text-xs border border-[#00ff41] px-4 py-2 hover:bg-[#00ff41] hover:text-black transition uppercase">
               Flush_Redis_Cache
             </button>
          </div>
        </section>

        {/* Live Traffic Tail */}
        <section className="col-span-1 lg:col-span-3 border border-[#00ff41]/20 p-4 bg-black relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 text-[#00ff41]/30 text-xs">LIVE_TAIL -f /var/log/sys.log</div>
          <h2 className="text-sm border-b border-[#00ff41]/20 pb-2 mb-4 uppercase text-[#00ff41]/60">Traffic_Log._</h2>
          <div className="font-mono text-xs space-y-1 h-48 overflow-y-auto">
            {dbLogs.map((log, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -10 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ delay: i * 0.2 }}
                className={log.includes("ERR") ? "text-[#c01c2d]" : "text-[#00ff41]/70"}
              >
                {log}
              </motion.div>
            ))}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ repeat: Infinity, duration: 1 }}
              className="text-[#00ff41]"
            >
              _
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
}
