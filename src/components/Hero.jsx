import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-stretch overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Neon gradients */}
      <div className="pointer-events-none absolute -inset-40 bg-[radial-gradient(circle_at_20%_20%,rgba(239,68,68,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.15),transparent_40%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_30px_rgba(34,211,238,0.25)]"
          >
            Defend with Precision.
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-500 to-cyan-300">Red Defence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-4 text-lg text-white/80 max-w-xl"
          >
            A modern cybersecurity platform with real-time scanning, actionable insights, and a neon cyberpunk aesthetic.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3">
            <motion.a
              href="#security"
              whileHover={{ y: -2 }}
              className="px-5 py-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 shadow-[0_0_35px_rgba(239,68,68,0.35)] hover:bg-red-500/30"
            >
              Enter Security Center
            </motion.a>
            <motion.a
              href="#scan"
              whileHover={{ y: -2 }}
              className="px-5 py-3 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-200 shadow-[0_0_35px_rgba(34,211,238,0.35)] hover:bg-cyan-500/30"
            >
              Start a Scan
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
