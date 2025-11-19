import React, { useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState(null)

  async function onSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setOk(null)
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    payload.consent = !!payload.consent

    try {
      const res = await fetch(`${BACKEND}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Request failed')
      setOk(true)
      e.currentTarget.reset()
    } catch (err) {
      setOk(false)
    } finally {
      setLoading(false)
    }
  }

  async function onSubscribe(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      await fetch(`${BACKEND}/api/subscribe`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      e.currentTarget.reset()
    } catch {}
  }

  return (
    <section id="contact" className="relative bg-[#0a0e1a] py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] to-[#151b2e]" aria-hidden />
      <div className="relative mx-auto w-full max-w-7xl px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Get Your Demo</h2>
          <p className="mt-3 text-gray-300">Transform your R&D from constraint to competitive weapon. Innovation at the speed of thought.</p>

          <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm text-gray-300">Name</label>
              <input name="name" required className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-gray-400" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm text-gray-300">Email</label>
              <input name="email" type="email" required className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-gray-400" placeholder="jane@company.com" />
            </div>
            <div>
              <label className="block text-sm text-gray-300">Company</label>
              <input name="company" className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-gray-400" placeholder="Acme Inc." />
            </div>
            <div>
              <label className="block text-sm text-gray-300">Role</label>
              <input name="role" className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-gray-400" placeholder="VP Engineering" />
            </div>
            <div>
              <label className="block text-sm text-gray-300">Message</label>
              <textarea name="message" rows="4" className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-gray-400" placeholder="What would you like to achieve?" />
            </div>
            <label className="inline-flex items-center gap-2 text-sm text-gray-300">
              <input name="consent" type="checkbox" defaultChecked className="h-4 w-4 rounded border-white/20 bg-white/10" />
              I agree to be contacted by Odin Labs
            </label>
            <button disabled={loading} className="mt-2 rounded-lg bg-gradient-to-r from-[#667eea] to-[#764ba2] px-6 py-3 text-white font-semibold">
              {loading ? 'Sending…' : 'Request Demo'}
            </button>
            {ok === true && <p className="text-[#10b981] text-sm">Thanks — we’ll reach out shortly.</p>}
            {ok === false && <p className="text-[#ef4444] text-sm">Something went wrong. Please try again.</p>}
          </form>
        </div>

        <aside>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold">AI Development Insights</h3>
            <p className="text-gray-300 text-sm mt-2">Join 50+ enterprises getting monthly insights.</p>
            <form onSubmit={onSubscribe} className="mt-4 flex gap-2">
              <input name="email" type="email" required placeholder="you@company.com" className="min-w-0 flex-1 rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-gray-400" />
              <button className="rounded-lg bg-white/10 px-4 py-2 text-white">Subscribe</button>
            </form>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-300">
              <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Security: SAST/DAST</div>
              <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Compliance Ready</div>
              <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Rabobank Case</div>
              <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Intercom Ready</div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
