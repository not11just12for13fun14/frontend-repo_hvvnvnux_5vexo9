import React from 'react'

const items = [
  {
    icon: '🏗️',
    title: 'Greenfield Development',
    desc: 'Build projects and features from requirements in hours, not weeks.'
  },
  {
    icon: '👥',
    title: 'Daily Developer Support',
    desc: 'AI pair programming at scale: review, debug, tests, docs, refactors.'
  },
  {
    icon: '🔄',
    title: 'Enterprise Migrations',
    desc: '4,821 projects migrated with 98% success and massive time savings.'
  },
  {
    icon: '📊',
    title: 'R&D KPI Excellence',
    desc: 'Optimize coverage, bugs, stability, delivery and team satisfaction.'
  }
]

export default function ValueProps() {
  return (
    <section id="value" className="relative bg-[#0a0e1a] py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] to-[#151b2e]" aria-hidden />
      <div className="relative mx-auto w-full max-w-7xl px-6">
        <header className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Beyond Automation: Intelligent Agent Swarms</h2>
          <p className="mt-3 text-gray-300">Your AI development team, working 24/7.</p>
        </header>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <article key={it.title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors focus-within:ring-2 focus-within:ring-indigo-400">
              <div className="text-2xl" aria-hidden>{it.icon}</div>
              <h3 className="mt-3 font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{it.desc}</p>
              <span className="mt-4 inline-block text-sm font-medium bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">Learn more →</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
