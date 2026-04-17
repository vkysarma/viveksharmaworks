import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const projectItems = [
  {
    id: 1,
    slug: 'shopify-store-redesign',
    title: 'Shopify Store Redesign',
    category: 'E-commerce',
    year: '2025',
    result: '+35% conversion uplift',
    className: 'gallery-item--feature',
    bg: 'linear-gradient(145deg, #091824 0%, #0e2f46 35%, #165872 60%, #0a3450 100%)',
    pattern: 'circles',
  },
  {
    id: 2,
    slug: 'wordpress-business-site',
    title: 'WordPress Business Website',
    category: 'WordPress',
    year: '2025',
    result: 'Faster UX & lead flow',
    className: 'gallery-item--tr1',
    bg: 'linear-gradient(165deg, #180e00 0%, #3d2200 40%, #7a4f1a 70%, #c4903a 100%)',
    pattern: 'lines',
  },
  {
    id: 3,
    slug: 'landing-page-cro',
    title: 'Landing Page Optimization',
    category: 'CRO',
    year: '2025',
    result: '+28% more inquiries',
    className: 'gallery-item--tr2',
    bg: 'linear-gradient(120deg, #080f09 0%, #0f2818 45%, #1a4a2c 80%)',
    pattern: 'grid',
  },
  {
    id: 4,
    slug: 'website-speed-optimization',
    title: 'Website Speed Optimization',
    category: 'Performance',
    year: '2025',
    result: 'Load time cut to < 2s',
    className: 'gallery-item--b1',
    bg: 'linear-gradient(150deg, #150a12 0%, #3a1530 50%, #6b2850 80%)',
    pattern: 'wave',
  },
  {
    id: 5,
    slug: 'elementor-site-build',
    title: 'Elementor Site Build',
    category: 'Web Design',
    year: '2024',
    result: 'Easy client editing',
    className: 'gallery-item--b2',
    bg: 'linear-gradient(130deg, #07091a 0%, #0f1535 40%, #192560 80%)',
    pattern: 'hex',
  },
  {
    id: 6,
    slug: 'ongoing-maintenance',
    title: 'Website Care & Support',
    category: 'Maintenance',
    year: '2024',
    result: 'Reliable monthly support',
    className: 'gallery-item--b3',
    bg: 'linear-gradient(170deg, #141210 0%, #22201a 50%, #302d26 100%)',
    pattern: 'dots',
  },
]

const services = [
  {
    title: 'Shopify Development',
    text: 'Custom Shopify builds, sections, landing pages, theme edits, and conversion-focused storefront improvements.',
  },
  {
    title: 'WordPress Development',
    text: 'High-performing WordPress websites built with Elementor, custom themes, ACF, and scalable page structures.',
  },
  {
    title: 'Speed Optimization',
    text: 'Performance-focused improvements for Core Web Vitals, script cleanup, image optimization, and faster page loads.',
  },
  {
    title: 'Landing Pages & CRO',
    text: 'Clear messaging, better CTA placement, and streamlined user flows designed to improve leads and sales.',
  },
]

function PatternSVG({ type }: { type: string }) {
  const common = {
    position: 'absolute' as const,
    inset: 0,
    width: '100%',
    height: '100%',
    opacity: 0.18,
  }

  if (type === 'circles')
    return (
      <svg
        style={common}
        viewBox="0 0 400 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="200" cy="300" r="220" stroke="white" strokeWidth="0.5" />
        <circle cx="200" cy="300" r="160" stroke="white" strokeWidth="0.5" />
        <circle cx="200" cy="300" r="100" stroke="white" strokeWidth="0.5" />
        <circle cx="200" cy="300" r="40" stroke="white" strokeWidth="0.5" />
        <line x1="200" y1="0" x2="200" y2="600" stroke="white" strokeWidth="0.4" />
        <line x1="0" y1="300" x2="400" y2="300" stroke="white" strokeWidth="0.4" />
      </svg>
    )

  if (type === 'lines')
    return (
      <svg
        style={common}
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={i} x1="0" y1={i * 16} x2="400" y2={i * 16} stroke="white" strokeWidth="0.4" />
        ))}
        <text x="30" y="150" fontFamily="serif" fontSize="160" fill="white" opacity="0.4" fontStyle="italic">
          W
        </text>
      </svg>
    )

  if (type === 'grid')
    return (
      <svg
        style={common}
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 44} y1="0" x2={i * 44} y2="300" stroke="white" strokeWidth="0.4" />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 44} x2="400" y2={i * 44} stroke="white" strokeWidth="0.4" />
        ))}
        <rect x="88" y="88" width="132" height="88" stroke="white" strokeWidth="0.8" fill="none" />
      </svg>
    )

  if (type === 'wave')
    return (
      <svg
        style={common}
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <path
            key={i}
            d={`M0,${60 + i * 28} Q100,${40 + i * 28} 200,${60 + i * 28} T400,${60 + i * 28}`}
            stroke="white"
            strokeWidth="0.5"
            fill="none"
          />
        ))}
      </svg>
    )

  if (type === 'hex')
    return (
      <svg
        style={common}
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {[
          [100, 75],
          [200, 75],
          [300, 75],
          [50, 150],
          [150, 150],
          [250, 150],
          [350, 150],
          [100, 225],
          [200, 225],
          [300, 225],
        ].map(([cx, cy], i) => (
          <polygon
            key={i}
            points={`${cx},${cy - 30} ${cx + 26},${cy - 15} ${cx + 26},${cy + 15} ${cx},${cy + 30} ${cx - 26},${cy + 15} ${cx - 26},${cy - 15}`}
            stroke="white"
            strokeWidth="0.5"
            fill="none"
          />
        ))}
      </svg>
    )

  return (
    <svg
      style={common}
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {Array.from({ length: 10 }).map((_, row) =>
        Array.from({ length: 14 }).map((_, col) => (
          <circle key={`${row}-${col}`} cx={col * 30 + 15} cy={row * 30 + 15} r="1.5" fill="white" />
        )),
      )}
    </svg>
  )
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div
      style={{
        border: '1px solid var(--border-subtle)',
        borderRadius: '18px',
        padding: '1.25rem',
        background: 'rgba(255,255,255,0.02)',
      }}
    >
      <div
        className="font-display"
        style={{
          fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
          color: 'var(--cream)',
          marginBottom: '0.35rem',
        }}
      >
        {value}
      </div>
      <div
        className="font-mono"
        style={{
          fontSize: '0.72rem',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          color: 'var(--cream-dim)',
        }}
      >
        {label}
      </div>
    </div>
  )
}

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="px-site"
        style={{
          paddingTop: '5rem',
          paddingBottom: '4rem',
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            alignItems: 'end',
            gap: '2rem',
            marginBottom: '1rem',
          }}
        >
          <div>
            <p className="section-label anim-fade-up" style={{ marginBottom: '1.25rem' }}>
              Shopify • WordPress • Performance • CRO
            </p>

            <h1
              className="font-display anim-fade-up anim-delay-1"
              style={{
                fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                fontWeight: 300,
                lineHeight: 0.95,
                letterSpacing: '-0.01em',
                color: 'var(--cream)',
                margin: 0,
              }}
            >
              High-Converting
              <br />
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Web Experiences</em>
            </h1>
          </div>

          <div className="anim-fade-up anim-delay-2" style={{ textAlign: 'right', paddingBottom: '0.5rem' }}>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#4ade80',
                display: 'inline-block',
                marginRight: '0.5rem',
                verticalAlign: 'middle',
              }}
            />
            <span
              className="font-mono"
              style={{
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--cream-dim)',
              }}
            >
              Available for freelance
            </span>
          </div>
        </div>

        <p
          className="anim-fade-up anim-delay-3"
          style={{
            color: 'var(--cream-dim)',
            fontSize: '1rem',
            lineHeight: 1.8,
            maxWidth: '700px',
            marginBottom: '2rem',
            fontWeight: 300,
          }}
        >
          I build Shopify and WordPress websites that are fast, scalable, and designed to improve
          conversions. From landing pages to full website builds, the focus is always on better user
          experience, cleaner structure, and stronger business results.
        </p>

        <div
          className="anim-fade-up anim-delay-4"
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '3rem',
          }}
        >
          <Link to="/projects" className="btn-gold">
            View Projects
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 7h12M8 2l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.9rem 1.3rem',
              borderRadius: '999px',
              border: '1px solid var(--border-subtle)',
              color: 'var(--cream)',
              textDecoration: 'none',
              fontSize: '0.9rem',
            }}
          >
            Start a Project
          </Link>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1rem',
          }}
        >
          <StatCard value="200+" label="Projects Delivered" />
          <StatCard value="< 2s" label="Typical Speed Target" />
          <StatCard value="30–40%" label="Conversion Focus" />
          <StatCard value="100%" label="Responsive Builds" />
        </div>
      </section>

      {/* Services */}
      <section
        className="px-site"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          paddingBottom: '5rem',
        }}
      >
        <div style={{ marginBottom: '2rem' }}>
          <p className="section-label" style={{ marginBottom: '0.85rem' }}>
            Services
          </p>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 300,
              color: 'var(--cream)',
              margin: 0,
            }}
          >
            What I Help Clients Build
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1rem',
          }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              style={{
                border: '1px solid var(--border-subtle)',
                borderRadius: '20px',
                padding: '1.5rem',
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              <h3
                style={{
                  color: 'var(--cream)',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  marginTop: 0,
                  marginBottom: '0.8rem',
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  color: 'var(--cream-dim)',
                  lineHeight: 1.75,
                  margin: 0,
                  fontSize: '0.95rem',
                  fontWeight: 300,
                }}
              >
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        className="px-site anim-fade-up"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          paddingBottom: '6rem',
        }}
      >
        <div style={{ marginBottom: '2rem' }}>
          <p className="section-label" style={{ marginBottom: '0.85rem' }}>
            Selected Work
          </p>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 300,
              color: 'var(--cream)',
              margin: 0,
            }}
          >
            Projects Built for Performance
          </h2>
        </div>

        <div className="gallery-grid">
          {projectItems.map((item) => (
            <Link key={item.id} to="/projects" className={`gallery-item ${item.className}`}>
              <div
                className="gallery-artwork"
                style={{
                  background: item.bg,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <PatternSVG type={item.pattern} />

                <div
                  style={{
                    position: 'absolute',
                    left: '1rem',
                    right: '1rem',
                    bottom: '1rem',
                    padding: '0.9rem 1rem',
                    borderRadius: '14px',
                    backdropFilter: 'blur(8px)',
                    background: 'rgba(10,10,10,0.24)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div
                    className="font-mono"
                    style={{
                      fontSize: '0.68rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: 'rgba(255,255,255,0.72)',
                      marginBottom: '0.45rem',
                    }}
                  >
                    {item.category}
                  </div>

                  <h3
                    style={{
                      margin: 0,
                      color: '#fff',
                      fontSize: '1.15rem',
                      fontWeight: 500,
                      marginBottom: '0.35rem',
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      color: 'rgba(255,255,255,0.8)',
                      fontSize: '0.88rem',
                    }}
                  >
                    {item.result}
                  </p>
                </div>
              </div>

              <div className="gallery-overlay">
                <span className="gallery-category">{item.category}</span>
                <h3 className="gallery-title">{item.title}</h3>
                <span className="gallery-year">{item.year}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Process */}
      <section
        className="px-site"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          paddingBottom: '5rem',
        }}
      >
        <div
          style={{
            border: '1px solid var(--border-subtle)',
            borderRadius: '24px',
            padding: '2rem',
            background: 'rgba(255,255,255,0.02)',
          }}
        >
          <p className="section-label" style={{ marginBottom: '0.85rem' }}>
            Process
          </p>

          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 300,
              color: 'var(--cream)',
              marginTop: 0,
              marginBottom: '1.5rem',
            }}
          >
            Clear, focused, and built around results
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
            }}
          >
            {[
              ['01', 'Discover', 'Understand goals, audience, pain points, and the outcome the website needs to drive.'],
              ['02', 'Design', 'Create a clean, premium layout with strong hierarchy, trust signals, and conversion-focused sections.'],
              ['03', 'Develop', 'Build responsive pages with clean structure, fast loading, and easy future editing.'],
              ['04', 'Optimize', 'Refine speed, user flow, and launch details so the site performs better after go-live.'],
            ].map(([num, title, text]) => (
              <div
                key={num}
                style={{
                  padding: '1rem',
                  borderRadius: '18px',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div
                  className="font-mono"
                  style={{
                    color: 'var(--gold)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.12em',
                    marginBottom: '0.8rem',
                  }}
                >
                  {num}
                </div>
                <h3
                  style={{
                    marginTop: 0,
                    marginBottom: '0.65rem',
                    color: 'var(--cream)',
                    fontSize: '1rem',
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    color: 'var(--cream-dim)',
                    lineHeight: 1.7,
                    fontSize: '0.92rem',
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section
        className="px-site"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          paddingBottom: '5rem',
        }}
      >
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '2.5rem 0',
          }}
        >
          <p
            className="font-display"
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              fontWeight: 300,
              lineHeight: 1.5,
              color: 'var(--cream)',
              maxWidth: '920px',
              margin: '0 auto 1rem',
              textAlign: 'center',
            }}
          >
            “Professional, responsive, and highly detail-oriented. The final website looked stronger,
            loaded faster, and gave us a much better foundation for growth.”
          </p>

          <p
            className="font-mono"
            style={{
              textAlign: 'center',
              fontSize: '0.72rem',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--cream-dim)',
              margin: 0,
            }}
          >
            Client feedback style placeholder
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="px-site"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          paddingBottom: '3rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '2.5rem',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}
      >
        <div>
          <p
            className="font-display"
            style={{
              fontSize: '1.5rem',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--cream)',
              margin: '0 0 0.5rem 0',
            }}
          >
            Ready to build a website that actually converts?
          </p>
          <p
            style={{
              margin: 0,
              color: 'var(--cream-dim)',
              fontSize: '0.95rem',
            }}
          >
            Let’s talk about your project, timeline, and the kind of results you want to achieve.
          </p>
        </div>

        <Link to="/contact" className="btn-gold">
          Start a Conversation
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1 7h12M8 2l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </section>
    </div>
  )
}