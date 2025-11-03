import React from 'react';
import { motion } from 'framer-motion';

const activities = [
  { id: 1, text: 'Deep scan completed - No critical threats found', time: '2m ago', tone: 'ok' },
  { id: 2, text: 'Quick scan flagged 2 suspicious domains', time: '14m ago', tone: 'warn' },
  { id: 3, text: 'User admin updated roles for 3 accounts', time: '1h ago', tone: 'info' },
];

export default function ActivityPanel() {
  return (
    <section id="scan" className="relative py-16">
      <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-6 items-start">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white/5 border border-white/10 p-5"
        >
          <h3 className="text-white/90 text-xl font-semibold">Active Scan</h3>
          <p className="text-white/60 text-sm mt-1">Deep scan on prod.red-defence.io</p>
          <div className="mt-4">
            <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
              <div className="h-3 rounded-full bg-gradient-to-r from-red-400 via-pink-500 to-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.35)]" style={{ width: '68%' }} />
            </div>
            <div className="mt-2 text-white/70 text-sm">Progress: 68%</div>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            <button className="px-4 py-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 hover:bg-red-500/30">Pause</button>
            <button className="px-4 py-3 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-200 hover:bg-cyan-500/30">View Details</button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white/5 border border-white/10 p-5"
        >
          <h3 className="text-white/90 text-xl font-semibold">Recent Activity</h3>
          <ul className="mt-4 space-y-3">
            {activities.map((a) => (
              <li key={a.id} className="flex items-start gap-3">
                <span className={`mt-1 w-2 h-2 rounded-full ${a.tone === 'ok' ? 'bg-emerald-400' : a.tone === 'warn' ? 'bg-amber-400' : 'bg-cyan-400'}`} />
                <div>
                  <p className="text-white/80">{a.text}</p>
                  <p className="text-white/50 text-xs">{a.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
