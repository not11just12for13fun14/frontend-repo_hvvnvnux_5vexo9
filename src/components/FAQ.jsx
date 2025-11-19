import React, { useState } from 'react'

const faqs = [
  { q: 'How does code get to production?', a: 'Standard PR workflow with human approval. Automated tests/checks gate merges and deploys.' },
  { q: 'Security & trust?', a: 'SAST/DAST, dependency scanning, policy checks. More consistent than human-only code.' },
  { q: 'Tech stack specificity?', a: 'Learns your codebase, patterns, and conventions to produce idiomatic code.' },
  { q: 'Replace developers?', a: 'No. Multiplies effectiveness — teams report 65% higher satisfaction.' },
  { q: 'ROI & timeline?', a: 'Week 1 gains, 400% ROI in year one typical.' },
  { q: 'Onboarding process?', a: 'Four phases: discovery, prioritization, execution, learning. Value in days.' }
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="relative bg-[#0a0e1a] py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] to-[#151b2e]" aria-hidden />
      <div className="relative mx-auto w-full max-w-4xl px-6">
        <header className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Frequently Asked Questions</h2>
          <p className="mt-3 text-gray-300">Still have questions? Get your demo — we’ll show you live.</p>
        </header>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="rounded-xl border border-white/10 bg-white/5">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full text-left px-5 py-4 text-white font-medium flex items-center justify-between">
                <span>{f.q}</span>
                <span aria-hidden className="text-gray-400">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-gray-300 text-sm">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
