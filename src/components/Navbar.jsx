import React from 'react';
import { Home, Shield, FileText, Activity, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'Security Center', href: '#security', icon: Shield },
  { label: 'Scan', href: '#scan', icon: Activity },
  { label: 'Reports', href: '#reports', icon: FileText },
];

export default function Navbar({ onLogout }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="group inline-flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_20px_2px_rgba(34,211,238,0.8)]" />
          <span className="text-xl font-semibold tracking-widest text-white/90 group-hover:text-white transition-colors">Red Defence</span>
        </a>
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map(({ label, href, icon: Icon }) => (
            <motion.a
              key={label}
              href={href}
              whileHover={{ y: -2 }}
              className="px-3 py-2 rounded-lg text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10"
            >
              <Icon size={16} />
              {label}
            </motion.a>
          ))}
        </nav>
        <div className="md:hidden">
          {/* Simple mobile menu anchor links */}
          <details className="relative">
            <summary className="list-none cursor-pointer px-3 py-2 rounded-lg text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10">
              Menu
            </summary>
            <div className="absolute right-0 mt-2 w-56 p-2 rounded-xl bg-black/80 backdrop-blur border border-white/10 space-y-1">
              {navItems.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} className="flex items-center gap-2 px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10">
                  <Icon size={16} /> {label}
                </a>
              ))}
              <button onClick={onLogout} className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-red-300 hover:text-red-200 hover:bg-red-500/10">
                <LogOut size={16} /> Logout
              </button>
            </div>
          </details>
        </div>
        <motion.button
          onClick={onLogout}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-red-300 hover:text-red-200 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.25)]"
        >
          <LogOut size={16} /> Logout
        </motion.button>
      </div>
    </header>
  );
}
