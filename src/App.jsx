import React, { useRef } from 'react'
import Hero from './components/Hero'
import ValueProps from './components/ValueProps'
import HowItWorks from './components/HowItWorks'
import UseCases from './components/UseCases'
import ROI from './components/ROI'
import Comparison from './components/Comparison'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-[#0a0e1a]/70">
      <div className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 text-white font-semibold">
          <span className="inline-grid place-items-center h-8 w-8 rounded-lg bg-gradient-to-br from-[#667eea] to-[#764ba2]">O</span>
          Odin Labs
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <a href="#how" className="hover:text-white">How it Works</a>
          <a href="#use-cases" className="hover:text-white">Use Cases</a>
          <a href="#roi" className="hover:text-white">ROI</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>
        <a href="#contact" className="rounded-md bg-gradient-to-r from-[#667eea] to-[#764ba2] px-4 py-2 text-white text-sm font-semibold">Get Demo</a>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-[#0a0e1a] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-400 grid md:grid-cols-3 gap-6">
        <div>
          <div className="flex items-center gap-2 text-white font-semibold">
            <span className="inline-grid place-items-center h-8 w-8 rounded-lg bg-gradient-to-br from-[#667eea] to-[#764ba2]">O</span>
            Odin Labs
          </div>
          <p className="mt-3">Client: Rabobank</p>
          <p className="mt-1">© {new Date().getFullYear()} Odin Labs. All rights reserved.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-white font-medium">Company</h4>
            <ul className="mt-2 space-y-1">
              <li><a href="#use-cases" className="hover:text-white">Use Cases</a></li>
              <li><a href="#roi" className="hover:text-white">ROI</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium">Legal</h4>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
            </ul>
          </div>
        </div>
        <div>
          <h4 className="text-white font-medium">Contact</h4>
          <p className="mt-2">hello@odin-labs.ai</p>
          <div className="mt-3 flex gap-2">
            <a href="#contact" className="rounded-md bg-white/10 px-3 py-2 text-white">Get Your Demo</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  const contactRef = useRef(null)
  const handleCTAClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      <Header />
      <main>
        <Hero onCTAClick={handleCTAClick} />
        <ValueProps />
        <HowItWorks />
        <UseCases />
        <ROI />
        <Comparison />
        <FAQ />
        <Contact ref={contactRef} />
      </main>
      <Footer />
    </div>
  )
}

export default App
