import React from 'react'

const steps = [
  { title: 'Spawn', desc: '“Build a new checkout flow” activates architect, frontend, backend, test, DevOps agents.' },
  { title: 'Parallel Execution', desc: '5 agents work simultaneously — minutes, not days.' },
  { title: 'Quality Validation', desc: 'Automated review before human oversight.' },
  { title: 'Human Approval → Deploy', desc: 'Review, approve, iterate, deploy.' }
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative bg-[#0a0e1a] py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] to-[#151b2e]" aria-hidden />
      <div className="relative mx-auto w-full max-w-7xl px-6">
        <header className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Agent Swarms in Action</h2>
          <p className="mt-3 text-gray-300">2 weeks traditional → 4 hours with Odin.</p>
        </header>

        <ol className="mt-10 relative border-l border-white/10 pl-6 space-y-8">
          {steps.map((s, idx) => (
            <li key={idx} className="relative">
              <span className="absolute -left-[10px] top-1.5 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2]" />
              <h3 className="text-white font-semibold">{idx + 1}. {s.title}</h3>
              <p className="text-gray-300 mt-1 text-sm">{s.desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl p-6 bg-white/5 border border-white/10">
            <h4 className="text-white font-semibold">Before</h4>
            <p className="text-gray-300 mt-2"><span className="text-[#ef4444] font-medium">2 weeks</span>, handoffs, bottlenecks, context switches.</p>
          </div>
          <div className="rounded-xl p-6 bg-white/5 border border-white/10">
            <h4 className="text-white font-semibold">After</h4>
            <p className="text-gray-300 mt-2"><span className="text-[#10b981] font-medium">4 hours</span>, parallel agents, automated QA, smooth deploys.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
