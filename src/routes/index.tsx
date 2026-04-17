import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const galleryItems = [
  {
    id: 1,
    slug: 'meridian',
    title: 'Meridian',
    category: 'Brand Identity',
    year: '2024',
    className: 'gallery-item--feature',
    bg: 'linear-gradient(145deg, #091824 0%, #0e2f46 35%, #165872 60%, #0a3450 100%)',
    pattern: 'circles',
  },
  {
    id: 2,
    slug: 'aurelius',
    title: 'Aurelius',
    category: 'Type Design',
    year: '2024',
    className: 'gallery-item--tr1',
    bg: 'linear-gradient(165deg, #180e00 0%, #3d2200 40%, #7a4f1a 70%, #c4903a 100%)',
    pattern: 'lines',
  },
  {
    id: 3,
    slug: 'verdana',
    title: 'Verdana',
    category: 'Editorial Design',
    year: '2023',
    className: 'gallery-item--tr2',
    bg: 'linear-gradient(120deg, #080f09 0%, #0f2818 45%, #1a4a2c 80%)',
    pattern: 'grid',
  },
  {
    id: 4,
    slug: 'solaris',
    title: 'Solaris',
    category: 'Motion Design',
    year: '2023',
    className: 'gallery-item--b1',
    bg: 'linear-gradient(150deg, #150a12 0%, #3a1530 50%, #6b2850 80%)',
    pattern: 'wave',
  },
  {
    id: 5,
    slug: 'cerulean',
    title: 'Cerulean',
    category: 'Web Experience',
    year: '2023',
    className: 'gallery-item--b2',
    bg: 'linear-gradient(130deg, #07091a 0%, #0f1535 40%, #192560 80%)',
    pattern: 'hex',
  },
  {
    id: 6,
    slug: 'ashen',
    title: 'Ashen',
    category: 'Photography',
    year: '2022',
    className: 'gallery-item--b3',
    bg: 'linear-gradient(170deg, #141210 0%, #22201a 50%, #302d26 100%)',
    pattern: 'dots',
  },
]

function PatternSVG({ type }: { type: string }) {
  const common = { position: 'absolute' as const, inset: 0, width: '100%', height: '100%', opacity: 0.18 }
  if (type === 'circles') return (
    <svg style={common} viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <circle cx="200" cy="300" r="220" stroke="white" strokeWidth="0.5"/>
      <circle cx="200" cy="300" r="160" stroke="white" strokeWidth="0.5"/>
      <circle cx="200" cy="300" r="100" stroke="white" strokeWidth="0.5"/>
      <circle cx="200" cy="300" r="40" stroke="white" strokeWidth="0.5"/>
      <line x1="200" y1="0" x2="200" y2="600" stroke="white" strokeWidth="0.4"/>
      <line x1="0" y1="300" x2="400" y2="300" stroke="white" strokeWidth="0.4"/>
    </svg>
  )
  if (type === 'lines') return (
    <svg style={common} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      {Array.from({ length: 20 }).map((_, i) => (
        <line key={i} x1="0" y1={i * 16} x2="400" y2={i * 16} stroke="white" strokeWidth="0.4"/>
      ))}
      <text x="30" y="150" fontFamily="serif" fontSize="160" fill="white" opacity="0.4" fontStyle="italic">A</text>
    </svg>
  )
  if (type === 'grid') return (
    <svg style={common} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      {Array.from({ length: 10 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 44} y1="0" x2={i * 44} y2="300" stroke="white" strokeWidth="0.4"/>
      ))}
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 44} x2="400" y2={i * 44} stroke="white" strokeWidth="0.4"/>
      ))}
      <rect x="88" y="88" width="132" height="88" stroke="white" strokeWidth="0.8" fill="none"/>
    </svg>
  )
  if (type === 'wave') return (
    <svg style={common} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      {Array.from({ length: 8 }).map((_, i) => (
        <path key={i} d={`M0,${60 + i * 28} Q100,${40 + i * 28} 200,${60 + i * 28} T400,${60 + i * 28}`} stroke="white" strokeWidth="0.5" fill="none"/>
      ))}
    </svg>
  )
  if (type === 'hex') return (
    <svg style={common} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      {[
        [100, 75], [200, 75], [300, 75],
        [50, 150], [150, 150], [250, 150], [350, 150],
        [100, 225], [200, 225], [300, 225],
      ].map(([cx, cy], i) => (
        <polygon key={i} points={`${cx},${cy! - 30} ${cx! + 26},${cy! - 15} ${cx! + 26},${cy! + 15} ${cx},${cy! + 30} ${cx! - 26},${cy! + 15} ${cx! - 26},${cy! - 15}`} stroke="white" strokeWidth="0.5" fill="none"/>
      ))}
    </svg>
  )
  // dots
  return (
    <svg style={common} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      {Array.from({ length: 10 }).map((_, row) =>
        Array.from({ length: 14 }).map((_, col) => (
          <circle key={`${row}-${col}`} cx={col * 30 + 15} cy={row * 30 + 15} r="1.5" fill="white"/>
        ))
      )}
    </svg>
  )
}

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="px-site" style={{ paddingTop: '5rem', paddingBottom: '4rem', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end', gap: '2rem', marginBottom: '1rem' }}>
          <div>
            <p className="section-label anim-fade-up" style={{ marginBottom: '1.25rem' }}>
              Creative Director &amp; Frontend Engineer
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
              Selected<br />
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Works</em>
            </h1>
          </div>
          <div className="anim-fade-up anim-delay-2" style={{ textAlign: 'right', paddingBottom: '0.5rem' }}>
            <div style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#4ade80',
              display: 'inline-block',
              marginRight: '0.5rem',
              verticalAlign: 'middle',
            }} />
            <span className="font-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--cream-dim)' }}>
              Available for freelance
            </span>
          </div>
        </div>
        <p
          className="anim-fade-up anim-delay-3"
          style={{
            color: 'var(--cream-dim)',
            fontSize: '1rem',
            lineHeight: 1.7,
            maxWidth: '520px',
            marginBottom: '3rem',
            fontWeight: 300,
          }}
        >
          rafting digital experiences where rigorous structure meets expressive
          form — from brand systems to interactive interfaces.
        </p>
      </section>

      {/* Gallery */}
      <section className="px-site anim-fade-up anim-delay-4" style={{ maxWidth: '1400px', margin: '0 auto', paddingBottom: '6rem' }}>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <Link
              key={item.id}
              to="/projects"
              className={`gallery-item ${item.className}`}
            >
              <div
                className="gallery-artwork"
                style={{ background: item.bg, position: 'relative' }}
              >
                <PatternSVG type={item.pattern} />
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

      {/* Bottom CTA strip */}
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
        <p className="font-display" style={{ fontSize: '1.5rem', fontWeight: 300, fontStyle: 'italic', color: 'var(--cream-dim)', margin: 0 }}>
          Have a project in mind?
        </p>
        <Link to="/contact" className="btn-gold">
          Start a Conversation
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </Link>
      </section>
    </div>
  )
}
