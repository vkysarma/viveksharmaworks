import { createFileRoute } from '@tanstack/react-router'
import { allProjects } from 'content-collections'

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
})

const projectGradients = [
  'linear-gradient(135deg, #091520 0%, #0f2d3d 40%, #1a4a5a 100%)',
  'linear-gradient(160deg, #180e00 0%, #3d2200 40%, #c4903a 100%)',
  'linear-gradient(120deg, #080f09 0%, #0f2818 45%, #1a4a2c 80%)',
  'linear-gradient(150deg, #150a12 0%, #3a1530 50%, #6b2850 80%)',
  'linear-gradient(130deg, #07091a 0%, #0f1535 40%, #192560 80%)',
  'linear-gradient(170deg, #141210 0%, #22201a 50%, #302d26 100%)',
]

const projectPatterns = [
  { d: 'M0,50 Q100,30 200,50 T400,50', type: 'wave' },
  { type: 'grid' },
  { type: 'circles' },
  { type: 'lines' },
  { type: 'hex' },
  { type: 'dots' },
]

function MiniPattern({ type, index }: { type: string; index: number }) {
  const s = { position: 'absolute' as const, inset: 0, width: '100%', height: '100%', opacity: 0.2 }
  if (type === 'grid') return (
    <svg style={s} viewBox="0 0 400 225" fill="none" preserveAspectRatio="xMidYMid slice">
      {Array.from({ length: 9 }).map((_, i) => <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="225" stroke="white" strokeWidth="0.5"/>)}
      {Array.from({ length: 6 }).map((_, i) => <line key={`h${i}`} x1="0" y1={i * 50} x2="400" y2={i * 50} stroke="white" strokeWidth="0.5"/>)}
    </svg>
  )
  if (type === 'circles') return (
    <svg style={s} viewBox="0 0 400 225" fill="none" preserveAspectRatio="xMidYMid slice">
      <circle cx="200" cy="112" r="100" stroke="white" strokeWidth="0.5"/>
      <circle cx="200" cy="112" r="65" stroke="white" strokeWidth="0.5"/>
      <circle cx="200" cy="112" r="30" stroke="white" strokeWidth="0.5"/>
    </svg>
  )
  if (type === 'wave') return (
    <svg style={s} viewBox="0 0 400 225" fill="none" preserveAspectRatio="xMidYMid slice">
      {Array.from({ length: 6 }).map((_, i) => (
        <path key={i} d={`M0,${50 + i * 30} Q100,${35 + i * 30} 200,${50 + i * 30} T400,${50 + i * 30}`} stroke="white" strokeWidth="0.5" fill="none"/>
      ))}
    </svg>
  )
  if (type === 'lines') return (
    <svg style={s} viewBox="0 0 400 225" fill="none" preserveAspectRatio="xMidYMid slice">
      {Array.from({ length: 10 }).map((_, i) => <line key={i} x1={i * 44} y1="0" x2={i * 44 - 100} y2="225" stroke="white" strokeWidth="0.5"/>)}
    </svg>
  )
  if (type === 'hex') return (
    <svg style={s} viewBox="0 0 400 225" fill="none" preserveAspectRatio="xMidYMid slice">
      {[[100,75],[200,75],[300,75],[50,140],[150,140],[250,140],[350,140]].map(([cx,cy],i) => (
        <polygon key={i} points={`${cx},${cy!-28} ${cx!+24},${cy!-14} ${cx!+24},${cy!+14} ${cx},${cy!+28} ${cx!-24},${cy!+14} ${cx!-24},${cy!-14}`} stroke="white" strokeWidth="0.5" fill="none"/>
      ))}
    </svg>
  )
  return (
    <svg style={s} viewBox="0 0 400 225" fill="none" preserveAspectRatio="xMidYMid slice">
      {Array.from({ length: 7 }).map((_, row) => Array.from({ length: 14 }).map((_, col) => (
        <circle key={`${row}-${col}`} cx={col * 30 + 15} cy={row * 30 + 15} r="1.5" fill="white"/>
      )))}
    </svg>
  )
}

function ProjectsPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }} className="px-site">
      {/* Header */}
      <div style={{ paddingTop: '5rem', paddingBottom: '4rem', borderBottom: '1px solid var(--border-subtle)' }}>
        <p className="section-label anim-fade-up" style={{ marginBottom: '1.25rem' }}>Selected Work</p>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
          <h1
            className="font-display anim-fade-up anim-delay-1"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
              color: 'var(--cream)',
              margin: 0,
            }}
          >
            Projects &<br /><em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Case Studies</em>
          </h1>
          <p className="anim-fade-up anim-delay-2" style={{ color: 'var(--cream-dim)', fontSize: '0.9375rem', maxWidth: '340px', lineHeight: 1.7, fontWeight: 300, margin: 0 }}>
            A curated selection of work across brand identity, design systems, and digital experiences.
          </p>
        </div>
      </div>

      {/* Projects grid */}
      <div
        className="anim-fade-up anim-delay-3"
        style={{
          paddingTop: '3rem',
          paddingBottom: '6rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {allProjects.map((project, index) => (
          <article key={project._meta.path} className="project-card">
            {/* Artwork */}
            <div className="project-card-image">
              <div style={{
                background: projectGradients[index % projectGradients.length],
                position: 'relative',
                width: '100%',
                height: '100%',
              }}>
                <MiniPattern type={projectPatterns[index % projectPatterns.length].type} index={index} />
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.75rem', gap: '1rem' }}>
                <h2 style={{ color: 'var(--cream)', fontSize: '1.125rem', fontWeight: 500, margin: 0, lineHeight: 1.3 }}>
                  {project.title}
                </h2>
                <div style={{ display: 'flex', gap: '0.75rem', flexShrink: 0 }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--cream-faint)', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--cream-faint)')}
                      aria-label="GitHub repository"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--gold-dim)', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--gold-dim)')}
                      aria-label="Live site"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
                    </a>
                  )}
                </div>
              </div>

              <p style={{ color: 'var(--cream-dim)', fontSize: '0.875rem', lineHeight: 1.65, margin: '0 0 1.25rem', fontWeight: 300 }}>
                {project.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                {project.tags.map((tag) => (
                  <span key={tag} className="skill-tag" style={{ fontSize: '0.6rem', padding: '0.25rem 0.5rem' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
