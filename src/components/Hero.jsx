import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const gradient = 'from-[#667eea] to-[#764ba2]'

export default function Hero({ onCTAClick }) {
  return (
    <section id="hero" className="relative overflow-hidden min-h-[92vh] flex items-center bg-[#0a0e1a]">
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] to-[#151b2e] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(102,126,234,0.15),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(118,75,162,0.15),transparent_40%)]" />
      </div>

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 sm:py-28 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 backdrop-blur">
                <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-tr from-[#10b981] to-emerald-400" />
                AI Agent Swarms for Enterprise Development
              </div>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
                Odin Labs <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>AI Agent Swarms</span>
              </h1>
              <p className="mt-5 text-lg text-gray-300 max-w-xl">
                Innovation is the new competitive edge. Autonomous AI agents that transform how your teams build, migrate, and scale software.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">
                <div className="text-sm text-gray-300/90">🏗️ Build New</div>
                <div className="text-sm text-gray-300/90">👥 Daily Development</div>
                <div className="text-sm text-gray-300/90">🔄 Migrations</div>
                <div className="text-sm text-gray-300/90">📊 R&D Excellence</div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button onClick={onCTAClick} className={`rounded-lg bg-gradient-to-r ${gradient} px-6 py-3 text-white font-semibold shadow-lg shadow-indigo-900/30 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-[#0a0e1a]`}>
                  Get Your Demo
                </button>
                <a href="#how" className="rounded-lg bg-white/10 px-6 py-3 text-white font-semibold hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#0a0e1a]">
                  See Odin in Action
                </a>
              </div>

              <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4" aria-label="Key performance stats">
                {[
                  { label: 'Velocity', value: '10x' },
                  { label: 'Quality', value: '98%' },
                  { label: 'Availability', value: '24/7' },
                  { label: 'Parallel', value: '∞' },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>{s.value}</div>
                    <div className="text-xs text-gray-400 mt-1">{s.label}</div>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-3xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-indigo-500/10 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-4 text-gray-400 text-sm" role="status" aria-label="Trusted by">
          <span>Trusted by enterprises like</span>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-[#10b981]" />
            Rabobank
          </div>
        </div>
      </div>
    </section>
  )
}
