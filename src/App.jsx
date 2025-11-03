import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsGrid from './components/StatsGrid';
import ActivityPanel from './components/ActivityPanel';

export default function App() {
  useEffect(() => {
    const id = setTimeout(() => {
      toast.info('Welcome to Red Defence — preview mode', { theme: 'dark' });
    }, 500);
    return () => clearTimeout(id);
  }, []);

  const handleLogout = () => {
    toast.warn('Authentication required to logout in preview', { theme: 'dark' });
  };

  const badgeClasses = (risk) => {
    if (risk === 'High') return 'bg-red-500/10 border-red-500/40 text-red-200';
    if (risk === 'Medium') return 'bg-amber-500/10 border-amber-500/40 text-amber-200';
    return 'bg-emerald-500/10 border-emerald-500/40 text-emerald-200';
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,rgba(2,6,23,1),#000)] text-white">
      <Navbar onLogout={handleLogout} />
      <Hero />
      <main>
        <StatsGrid />
        <ActivityPanel />
        <section id="reports" className="relative py-16">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_80%,rgba(239,68,68,0.08),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(34,211,238,0.08),transparent_40%)]" />
          <div className="relative max-w-7xl mx-auto px-4">
            <h3 className="text-white/90 text-xl font-semibold">Reports</h3>
            <p className="text-white/70 mt-2 max-w-2xl">Generate, review, and export detailed security reports with clear risk levels. Full functionality will activate once authentication is connected.</p>
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              {[{ risk: 'High' }, { risk: 'Medium' }, { risk: 'Low' }].map((r) => (
                <div key={r.risk} className="rounded-2xl bg-white/5 border border-white/10 p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),0_0_35px_rgba(239,68,68,0.06)]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/70 text-sm">Risk Level</p>
                      <p className="text-white text-lg font-semibold">{r.risk}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs border ${badgeClasses(r.risk)}`}>Badge</span>
                  </div>
                  <p className="text-white/70 mt-3 text-sm">Sample report summary showcasing vulnerabilities and mitigations.</p>
                  <div className="mt-4 flex gap-2">
                    <button className="px-3 py-2 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-200">Export HTML</button>
                    <button className="px-3 py-2 rounded-lg bg-red-500/20 border border-red-500/40 text-red-200">Export PDF</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <ToastContainer position="bottom-right" />
    </div>
  );
}
