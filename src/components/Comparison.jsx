import React from 'react'

export default function Comparison() {
  return (
    <section id="compare" className="relative bg-[#0a0e1a] py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] to-[#151b2e]" aria-hidden />
      <div className="relative mx-auto w-full max-w-7xl px-6">
        <header className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Why Odin Labs Wins</h2>
          <p className="mt-3 text-gray-300">Not a code assistant — a full-stack autonomous swarm.</p>
        </header>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold">Traditional Tools</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li>• Line suggestions</li>
              <li>• Templates, generators</li>
              <li>• Fixed workflows</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold">Odin Agent Swarms</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li>• Full-stack autonomy</li>
              <li>• Multi-agent coordination</li>
              <li>• Context-aware intelligence</li>
            </ul>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              {['True Autonomy','Swarm Intelligence','Org Learning','Enterprise-Grade'].map(x => (
                <span key={x} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-center text-gray-200">{x}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
