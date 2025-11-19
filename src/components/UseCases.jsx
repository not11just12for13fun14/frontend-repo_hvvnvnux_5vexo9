import React, { useState } from 'react'

const tabs = [
  {
    key: 'greenfield',
    label: 'Greenfield Development',
    points: [
      'PM requests customer dashboard',
      'Odin swarm activates (7 agents in parallel)',
      '4 hours later: 2,847 LOC, 94 tests, full deployment',
      'Result: MVP in hours vs. weeks'
    ]
  },
  {
    key: 'daily',
    label: 'Daily Developer Support',
    points: [
      '6 specialized agents: review, debug, tests, docs, refactor, security',
      'Developers focus on creative work',
      'Productivity up, burnout down'
    ]
  },
  {
    key: 'migrations',
    label: 'Enterprise Migrations (Rabobank)',
    points: [
      '4,821 projects migrated',
      '98% success rate',
      '90% time saved',
      '€2.5M cost savings',
      '3–5 years → 6–12 months'
    ]
  }
]

export default function UseCases() {
  const [active, setActive] = useState('greenfield')
  const current = tabs.find(t => t.key === active)

  return (
    <section id="use-cases" className="relative bg-[#0a0e1a] py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] to-[#151b2e]" aria-hidden />
      <div className="relative mx-auto w-full max-w-7xl px-6">
        <header className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Use Cases</h2>
          <p className="mt-3 text-gray-300">Build, support, migrate — and excel.</p>
        </header>

        <div className="mt-8 flex flex-wrap gap-3" role="tablist" aria-label="Use case tabs">
          {tabs.map(t => (
            <button key={t.key} onClick={() => setActive(t.key)} role="tab" aria-selected={active===t.key}
              className={`rounded-full px-4 py-2 text-sm border transition-colors ${active===t.key ? 'border-white/20 bg-white/10 text-white' : 'border-white/10 text-gray-300 hover:bg-white/5'}`}>
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            {current.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
