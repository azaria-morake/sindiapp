import { useEffect, useState, useRef } from 'react'
import {
  ArrowRight,
  Fingerprint,
  Heart,
  LockKeyhole,
  Puzzle,
  ShieldCheck,
  Zap,
  X,
} from 'lucide-react'

import avatar from './assets/avatar.png'
import sindiApiLogo from './assets/sindi-api.png'
import sindi1Logo from './assets/Sindi-1.png'
import sindiChatLogo from './assets/sindi-chat.png'
import sindiDashLogo from './assets/sindi-dash.png'
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
  const [loading, setLoading] = useState(false)
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
      <Toaster />
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

        <div className="nav-right">
          <DesktopNav />
          <a className="nav-button" href="#early-access">Join early access</a>
        </div>
      </header>

      <main id="top">
        <section className="hero" id="what-is-sindi">
          <div className="hero-copy">
            <div className="hero-text-content">
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
            </div>

            <div className="hero-cta-content">
              <div className="benefits-marquee-wrapper">
                <div className="benefits">
                  <Benefit icon={<Heart size={17} fill="currentColor" />} text="No more re-telling your story." />
                  <Benefit icon={<Puzzle size={17} />} text="No more missing files." />
                  <Benefit icon={<ShieldCheck size={17} />} text="No more flying blind." />
                  
                  {/* Duplicated for mobile marquee */}
                  <div className="benefits-duplicate">
                    <Benefit icon={<Heart size={17} fill="currentColor" />} text="No more re-telling your story." />
                    <Benefit icon={<Puzzle size={17} />} text="No more missing files." />
                    <Benefit icon={<ShieldCheck size={17} />} text="No more flying blind." />
                  </div>
                </div>
              </div>

              <div className="pricing">
                <strong>Patients FREE</strong>
                <span>|</span>
                <strong className="licensed">Facilities LICENSED</strong>
              </div>

              <JoinEarlyAccessButton />

              <div className="security">
                <LockKeyhole size={13} />
                Secure. Compliant. Built for South Africa.
              </div>
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
          <ProductReveal />
        </section>

        <section className="early-access" id="early-access">
          <span className="eyebrow">Join Sindi</span>
          <h2>Help us build the <span>connected</span> health system.</h2>
          <p>Be among the first patients, facilities and healthcare professionals to experience Sindi.</p>
          <JoinEarlyAccessButton />
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

function ProductReveal() {
  const [active, setActive] = useState<'api' | 'one' | 'chat' | 'dash' | null>(null);

  return (
    <div className="product-reveal-section">
      <div className={`product-interaction-hint ${active ? 'hidden' : ''}`}>
        Click on any of the products to find out more
      </div>
      <div className={`modal-backdrop ${active ? 'active' : ''}`} onClick={() => setActive(null)} />
      <div className={`product-reveal-container ${active ? 'has-active' : ''}`}>

        {/* Sindi API Logo */}
        <div className={`logo-wrapper ${active === 'api' ? 'active' : ''} ${active && active !== 'api' ? 'hidden' : ''}`}>
          <button className="logo-btn" style={{ animationDelay: '0s' }} onClick={() => setActive(active === 'api' ? null : 'api')} aria-label="Learn about Sindi API">
            <img src={sindiApiLogo} alt="Sindi API" />
          </button>
        </div>

        {/* API Panel */}
        <div className={`product-panel api-panel ${active === 'api' ? 'open' : ''}`}>
          <button className="close-panel-btn" onClick={() => setActive(null)} aria-label="Close panel"><X size={20} /></button>
          <div className="panel-inner">
            <div className="panel-title-container">
              <img src={sindiApiLogo} alt="" className="panel-title-logo" />
              <h3>Sindi API</h3>
            </div>
            <h4>SINDI API — Secure integration gateway</h4>
            <p>No app talks directly to Sindi 1. Everything goes through Sindi API. That's how we keep it secure.</p>
            <ul>
              <li>Enforces RBAC + consent + OTP on every ID pull — blocks enumeration, rate-limits abuse</li>
              <li>Verifies device signatures for offline sync, hashes every record (SHA256 + doctor ID + timestamp)</li>
              <li>The AI boundary: Hosts our multi-model router — Gemini → Llama → DeepSeek V3 → Kimi K2. PHI never leaves Sindi. We de-identify prompts, filter responses, never log content. If one provider fails, we switch to on-prem Llama in 60 seconds.</li>
              <li>Cheap to run, expensive to copy: DeepSeek/Kimi at $0.14/1M vs $5/1M GPT-4, fine-tuned for 11 SA languages</li>
            </ul>
            <p>Sindi 1 is the truth. Sindi API is the only, secure way to reach it.</p>
          </div>
        </div>

        {/* Sindi 1 Logo */}
        <div className={`logo-wrapper ${active === 'one' ? 'active' : ''} ${active && active !== 'one' ? 'hidden' : ''}`}>
          <button className="logo-btn" style={{ animationDelay: '0.4s' }} onClick={() => setActive(active === 'one' ? null : 'one')} aria-label="Learn about Sindi 1">
            <img src={sindi1Logo} alt="Sindi 1" />
          </button>
        </div>

        {/* Sindi 1 Panel */}
        <div className={`product-panel one-panel ${active === 'one' ? 'open' : ''}`}>
          <button className="close-panel-btn" onClick={() => setActive(null)} aria-label="Close panel"><X size={20} /></button>
          <div className="panel-inner">
            <div className="panel-title-container">
              <img src={sindi1Logo} alt="" className="panel-title-logo" />
              <h3>Sindi 1</h3>
            </div>
            <h4>Sindi One (Sindi 1) — The Integration Bus:</h4>
            <p>Single logical database, physically distributed. Master patient index by SA ID/passport. FHIR-compatible, POPIA-audited. Holds longitudinal records, treatment plans, consent scopes. Any authorized facility in the country can pull by ID in &lt;10s via Sindi API. This is the data centralization layer.</p>
            <h4>Features:</h4>
            <ul>
              <li>ID-based pull anywhere in country with patient consent</li>
              <li>On-demand sync + queued writes for low-connectivity clinics</li>
              <li>Consent scopes per facility + full audit trail</li>
              <li>Foundation for all other modules</li>
            </ul>
          </div>
        </div>

        {/* Sindi Chat Logo */}
        <div className={`logo-wrapper ${active === 'chat' ? 'active' : ''} ${active && active !== 'chat' ? 'hidden' : ''}`}>
          <button className="logo-btn" style={{ animationDelay: '0.8s' }} onClick={() => setActive(active === 'chat' ? null : 'chat')} aria-label="Learn about Sindi Chat">
            <img src={sindiChatLogo} alt="Sindi Chat" />
          </button>
        </div>

        {/* Sindi Chat Panel */}
        <div className={`product-panel chat-panel ${active === 'chat' ? 'open' : ''}`}>
          <button className="close-panel-btn" onClick={() => setActive(null)} aria-label="Close panel"><X size={20} /></button>
          <div className="panel-inner">
            <div className="panel-title-container">
              <img src={sindiChatLogo} alt="" className="panel-title-logo" />
              <h3>Sindi Chat</h3>
            </div>
            <h4>SINDI CHAT — Free PWA for patients</h4>
            <p>Free for all public patients. Built for shared phones and SIM churn.</p>
            <ul>
              <li>Triage from home, join a virtual queue — don't arrive at 4am for a 10am slot</li>
              <li>In-chat booking with live clinic load</li>
              <li>View your doctor-confirmed record and ask "What did doctor mean?" — answered in isiZulu, Sesotho, Sepedi + 8 more, grounded only in your record</li>
              <li>Proactive reminders that trigger even if app not opened. We track booking_viewed — if you miss it, we push, then SMS (no diagnosis in SMS)</li>
              <li>Guardian mode: Gogo manages 3 grandchildren on one phone, each profile private</li>
            </ul>
            <p>Footnote: Free forever. Patients never pay.</p>
          </div>
        </div>

        {/* Sindi Dash Logo */}
        <div className={`logo-wrapper ${active === 'dash' ? 'active' : ''} ${active && active !== 'dash' ? 'hidden' : ''}`}>
          <button className="logo-btn" style={{ animationDelay: '1.2s' }} onClick={() => setActive(active === 'dash' ? null : 'dash')} aria-label="Learn about Sindi Dash">
            <img src={sindiDashLogo} alt="Sindi Dash" />
          </button>
        </div>

        {/* Sindi Dash Panel */}
        <div className={`product-panel dash-panel ${active === 'dash' ? 'open' : ''}`}>
          <button className="close-panel-btn" onClick={() => setActive(null)} aria-label="Close panel"><X size={20} /></button>
          <div className="panel-inner">
            <div className="panel-title-container">
              <img src={sindiDashLogo} alt="" className="panel-title-logo" />
              <h3>Sindi Dash</h3>
            </div>
            <h4>SINDI DASH — Licensed for public facilities & private GPs</h4>
            <p>Role-based Kanban that integrates admin → reception → nurse → doctor → discharge — all synced to one truth.</p>
            <ul>
              <li>No siloed books: Reception admits, nurse sees triage already synced, doctor sees full history before patient arrives</li>
              <li>Doctor → Sindi: Dictate, Sindi drafts structured note, you confirm → stored in Sindi 1. No manual file writing.</li>
              <li>Sindi → Doctor: Patient worsens at home? Auto-alert: "This interaction warrants review" + full context</li>
              <li>Live analytics dashboard for the first time: Volume per day, illnesses recorded per day (ICD-10), queue load, avg wait, no-show rate, file pull &lt;10s, throughput per staff</li>
              <li>Government licenses it per facility. Private GPs license it to pull public history with consent.</li>
            </ul>
          </div>
        </div>

      </div>

      {!active && (
        <p className="story-band-text">
          From community health centres to hospitals and GPs, Sindi is designed to make the patient journey continuous — not fragmented by geography or paperwork.
        </p>
      )}
    </div>
  )
}

type ToastData = { id: number, message: string, type: 'success' | 'error' | 'warning' }
let toastCount = 0;
let addToastFn: (toast: Omit<ToastData, 'id'>) => void = () => { };

export const toast = {
  success: (msg: string) => addToastFn({ message: msg, type: 'success' }),
  error: (msg: string) => addToastFn({ message: msg, type: 'error' }),
  warning: (msg: string) => addToastFn({ message: msg, type: 'warning' }),
}

function Toaster() {
  const [toasts, setToasts] = useState<ToastData[]>([])

  useEffect(() => {
    addToastFn = (newToast) => {
      const id = ++toastCount;
      setToasts(prev => [...prev, { ...newToast, id }]);
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id))
      }, 3500);
    }
  }, [])

  return (
    <div className="toaster-container">
      {toasts.map(t => (
        <div key={t.id} className={`toast toast-${t.type}`}>
          {t.message}
        </div>
      ))}
    </div>
  )
}

function DesktopNav() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const [cursorStyle, setCursorStyle] = useState({ left: 0, width: 0, opacity: 0 })

  useEffect(() => {
    const targetIdx = hoveredIdx !== null ? hoveredIdx : activeIdx;
    const targetEl = navRefs.current[targetIdx];
    if (targetEl) {
      setCursorStyle({
        left: targetEl.offsetLeft,
        width: targetEl.offsetWidth,
        opacity: 1
      });
    }
  }, [activeIdx, hoveredIdx])

  const links = [
    { label: 'What is Sindi', href: '#what-is-sindi' },
    { label: 'Products', href: '#products' },
    { label: 'About', href: '#about' }
  ]

  return (
    <nav className="desktop-nav" aria-label="Primary navigation" onMouseLeave={() => setHoveredIdx(null)}>
      {links.map((link, idx) => (
        <a 
          key={link.href}
          href={link.href} 
          ref={el => { navRefs.current[idx] = el }}
          className={activeIdx === idx ? 'active' : ''}
          onMouseEnter={() => setHoveredIdx(idx)}
          onClick={() => setActiveIdx(idx)}
        >
          {link.label}
        </a>
      ))}
      <div className="nav-cursor" style={{ ...cursorStyle }} />
    </nav>
  )
}

function JoinEarlyAccessButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setError(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      // Focus the input when opened
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const isValidEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
  }

  return (
    <div className={`early-access-wrapper ${isOpen ? 'open' : ''} ${error ? 'has-error' : ''}`} ref={containerRef}>
      <div className="email-slide-container">
        <input
          ref={inputRef}
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (error) setError(false)
          }}
          className="email-input"
        />
      </div>
      <button
        className="primary-button"
        onClick={async (e) => {
          e.preventDefault()
          if (!isOpen) {
            setIsOpen(true)
            setError(false)
          } else {
            if (!isValidEmail(email)) {
              setError(true)
              toast.warning("Please enter a valid email address.")
              if (inputRef.current) inputRef.current.focus()
              return
            }

            setIsSubmitting(true)
            // Mock network request
            await new Promise(resolve => setTimeout(resolve, 800))
            const success = Math.random() > 0.3 // 70% success rate

            setIsSubmitting(false)
            if (success) {
              toast.success("Success! You've been added to the list.")
              setIsOpen(false)
              setEmail('')
              setError(false)
            } else {
              toast.error("Something went wrong. Please try again.")
            }
          }
        }}
        disabled={isSubmitting}
      >
        <span>
          {!isOpen
            ? 'Join early access'
            : isSubmitting
              ? 'Submitting...'
              : 'Submit'}
        </span>
        <ArrowRight size={18} />
      </button>
    </div>
  )
}

export default App

