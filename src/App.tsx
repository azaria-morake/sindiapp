import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Fingerprint,
  Heart,
  LockKeyhole,
  Puzzle,
  ShieldCheck,
  Zap,
} from 'lucide-react'

import avatar from './assets/avatar.png'
import clinic from './assets/clinic.png'
import hospital from './assets/hospital.png'
import gp from './assets/gp.png'
import patient from './assets/support.png'
import community from './assets/community.png'
import support from './assets/phone.png'

const nodes = [
  { className: 'node-clinic', label: 'Clinic', image: clinic },
  { className: 'node-hospital', label: 'Hospital', image: hospital },
  { className: 'node-gp', label: 'GP', image: gp },
  { className: 'node-patient', label: 'Patient', image: patient },
  {
    className: 'node-community',
    label: <>Community<br />Health Centre</>,
    image: community,
  },
  {
    className: 'node-support',
    label: <>Anytime<br />Support</>,
    image: support,
  },
]

function App() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProgress((current) => {
        const next = Math.min(current + Math.random() * 8 + 2, 100)
        if (next >= 100) {
          window.clearInterval(timer)
          window.setTimeout(() => setLoading(false), 450)
        }
        return next
      })
    }, 90)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <>
      <div className={`loader ${loading ? '' : 'loader--hidden'}`} aria-hidden={!loading}>
        <div className="loader-pattern" />
        <div className="loader-content">
          <img className="loader-avatar" src={avatar} alt="Sindi" />
          <h1>SINDI</h1>
          <p className="loader-tagline">One ID. Any facility. Anywhere.</p>

          <div className="loader-icons">
            <img src={clinic} alt="" />
            <img src={support} alt="" />
            <img src={community} alt="" />
            <img src={gp} alt="" />
            <img src={hospital} alt="" />
          </div>

          <div className="loading-meta">
            <span>Loading Sindi...</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="loading-track">
            <div className="loading-bar" style={{ width: `${progress}%` }} />
          </div>
          <p className="loader-bottom">Building a healthier South Africa.</p>
        </div>
      </div>

      <header className="navbar">
        <a className="brand" href="#top" aria-label="Sindi home">
          <img src={avatar} alt="" />
          <span>SINDI</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a className="active" href="#what-is-sindi">What is Sindi</a>
          <a href="#products">Products</a>
          <a href="#facilities">For Facilities</a>
          <a href="#patients">For Patients</a>
          <a href="#about">About</a>
        </nav>

        <a className="nav-button" href="#early-access">Join early access</a>
      </header>

      <main id="top">
        <section className="hero" id="what-is-sindi">
          <div className="hero-copy">
            <span className="eyebrow">What is Sindi</span>

            <h2>
              One ID.<br />
              Any facility.<br />
              Anywhere<span className="red-dot">.</span>
            </h2>

            <p className="hero-subtitle">
              The integration layer South African public health has waited for.
            </p>

            <div className="red-line" />

            <div className="hero-body">
              <p>Sindi is a large-scale distributed health ecosystem connecting patients, facilities, and GPs.</p>
              <p>Today, the patient moves, the record does not. HPRS holds only demographics. TIER.Net is HIV-only and offline. Gauteng is scanning 800M paper pages because files disappear.</p>
              <p>Sindi fixes that with <strong>3 products, 1 truth: Sindi One.</strong></p>
            </div>

            <div className="benefits">
              <Benefit icon={<Heart size={17} fill="currentColor" />} text={<>No more<br />re-telling your story.</>} />
              <Benefit icon={<Puzzle size={17} />} text={<>No more<br />missing files.</>} />
              <Benefit icon={<ShieldCheck size={17} />} text={<>No more<br />flying blind.</>} />
            </div>

            <div className="pricing">
              <strong>Patients FREE</strong>
              <span>|</span>
              <strong className="licensed">Facilities LICENSED</strong>
            </div>

            <a className="primary-button" href="#early-access">
              <span>Join early access</span>
              <ArrowRight size={18} />
            </a>

            <div className="security">
              <LockKeyhole size={13} />
              Secure. Compliant. Built for South Africa.
            </div>
          </div>

          <Network />
        </section>

        <section className="product-strip" id="products">
          <Feature icon={<Fingerprint />} title="One Patient ID" text="A single, trusted identity that follows you anywhere." />
          <Feature icon={<Puzzle />} title="Interoperable" text="Connects systems, facilities and people." />
          <Feature icon={<Zap />} title="Real-time Access" text="The right information, when it’s needed." />
          <Feature icon={<ShieldCheck />} title="Built for South Africa" text="Compliant, local and designed for scale." />
        </section>

        <section className="story-band" id="facilities">
          <div>
            <span className="eyebrow">One connected system</span>
            <h2>The patient moves.<br />The record moves too.</h2>
          </div>
          <p>From community health centres to hospitals and GPs, Sindi is designed to make the patient journey continuous — not fragmented by geography or paperwork.</p>
        </section>

        <section className="early-access" id="early-access">
          <span className="eyebrow">Join Sindi</span>
          <h2>Help us build the <span>connected</span> health system.</h2>
          <p>Be among the first patients, facilities and healthcare professionals to experience Sindi.</p>
          <a className="primary-button" href="mailto:hello@sindi.co.za">
            <span>Join early access</span>
            <ArrowRight size={18} />
          </a>
        </section>
      </main>

      <footer id="about">
        <div className="footer-brand">
          <img src={avatar} alt="" />
          <strong>SINDI</strong>
        </div>
        <p>© 2026 Sindi Health (Pty) Ltd. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="mailto:hello@sindi.co.za">Contact</a>
        </div>
      </footer>
    </>
  )
}

function Benefit({ icon, text }: { icon: React.ReactNode; text: React.ReactNode }) {
  return (
    <div className="benefit">
      <div className="benefit-icon">{icon}</div>
      <span>{text}</span>
    </div>
  )
}

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="product-feature">
      <div className="feature-icon">{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

function Network() {
  return (
    <div className="network" aria-label="Sindi connected healthcare network">
      <div className="network-map" />
      <div className="skyline" />

      <svg className="connections" viewBox="0 0 700 650" preserveAspectRatio="none" aria-hidden="true">
        <path d="M350 325 C350 230 260 180 190 120" />
        <path d="M350 325 C440 245 520 180 570 125" />
        <path d="M350 325 C465 315 550 300 610 270" />
        <path d="M350 325 C450 410 530 475 580 535" />
        <path d="M350 325 C270 400 190 475 130 530" />
        <path d="M350 325 C275 290 200 250 105 235" />
      </svg>

      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />

      <div className="network-center">
        <img src={avatar} alt="Sindi" />
      </div>

      {nodes.map((node) => (
        <div className={`network-node ${node.className}`} key={node.className}>
          <div className="node-icon">
            <img src={node.image} alt="" />
          </div>
          <span>{node.label}</span>
        </div>
      ))}
    </div>
  )
}

export default App
