import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Activity, CheckCircle, HeartPulse } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';

const chartData = [
  { name: 'Mon', scans: 20 },
  { name: 'Tue', scans: 35 },
  { name: 'Wed', scans: 28 },
  { name: 'Thu', scans: 40 },
  { name: 'Fri', scans: 45 },
  { name: 'Sat', scans: 38 },
  { name: 'Sun', scans: 52 },
];

const cards = [
  {
    title: 'Total Scans',
    value: '1,248',
    icon: Shield,
    glow: 'shadow-[0_0_25px_rgba(34,211,238,0.45)]',
    border: 'border-cyan-400/40',
    bg: 'bg-cyan-500/10',
  },
  {
    title: 'Active Threats',
    value: '7',
    icon: Activity,
    glow: 'shadow-[0_0_25px_rgba(239,68,68,0.45)]',
    border: 'border-red-500/40',
    bg: 'bg-red-500/10',
  },
  {
    title: 'Resolved Issues',
    value: '1,103',
    icon: CheckCircle,
    glow: 'shadow-[0_0_25px_rgba(168,85,247,0.45)]',
    border: 'border-fuchsia-500/40',
    bg: 'bg-fuchsia-500/10',
  },
  {
    title: 'System Health',
    value: '96%',
    icon: HeartPulse,
    glow: 'shadow-[0_0_25px_rgba(34,197,94,0.45)]',
    border: 'border-emerald-500/40',
    bg: 'bg-emerald-500/10',
  },
];

export default function StatsGrid() {
  return (
    <section id="security" className="relative py-16 md:py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_15%_10%,rgba(239,68,68,0.08),transparent_40%),radial-gradient(circle_at_85%_15%,rgba(34,211,238,0.08),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between gap-4 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Security Center</h2>
          <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-2xl ${c.bg} border ${c.border} ${c.glow} p-4`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/70 text-sm">{c.title}</p>
                  <p className="mt-1 text-2xl font-semibold text-white">{c.value}</p>
                </div>
                <c.icon className="text-white/70" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 rounded-2xl bg-white/5 border border-white/10 p-4">
            <h3 className="text-white/80 font-medium mb-2">Scan Activity</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="cya" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.5} />
                      <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Tooltip contentStyle={{ background: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12 }} labelStyle={{ color: 'white' }} itemStyle={{ color: '#22d3ee' }} />
                  <Area type="monotone" dataKey="scans" stroke="#22d3ee" fillOpacity={1} fill="url(#cya)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
            <h3 className="text-white/80 font-medium mb-3">Quick Actions</h3>
            <div className="flex flex-col gap-2">
              <button className="px-4 py-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 hover:bg-red-500/30">Start Scan</button>
              <button className="px-4 py-3 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-200 hover:bg-cyan-500/30">View Reports</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
