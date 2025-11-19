import React from 'react'

const categories = [
  { title: 'Velocity', points: ['10x sprint velocity', '85% cycle time reduction'] },
  { title: 'Quality', points: ['90%+ coverage', '75% fewer bugs'] },
  { title: 'Team', points: ['65% satisfaction increase', '80% less burnout'] },
  { title: 'Business', points: ['90% faster time-to-market', '400% ROI year 1'] },
]

export default function ROI() {
  return (
    <section id="roi" className="relative bg-[#0a0e1a] py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] to-[#151b2e]" aria-hidden />
      <div className="relative mx-auto w-full max-w-7xl px-6">
        <header className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">ROI & Metrics</h2>
          <p className="mt-3 text-gray-300">Outcomes you can measure from week one.</p>
        </header>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-semibold">{c.title}</h3>
              <ul className="mt-3 space-y-2 text-gray-300 text-sm">
                {c.points.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
