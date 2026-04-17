import { createFileRoute, Link } from '@tanstack/react-router'
import { allJobs, allEducations } from 'content-collections'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

const skills = [
  'React', 'TypeScript', 'TanStack', 'Tailwind CSS',
  'Figma', 'Motion Design', 'Brand Systems', 'Design Systems',
  'Node.js', 'Vite', 'CSS Architecture', 'Accessibility',
  'User Research', 'Prototyping', 'WebGL', 'SVG Animation',
]

function AboutPage() {
  const jobs = [...allJobs].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  )
  const educations = [...allEducations].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  )

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }} className="px-site">
      {/* Header */}
      <div style={{ paddingTop: '5rem', paddingBottom: '4rem', borderBottom: '1px solid var(--border-subtle)' }}>
        <p className="section-label anim-fade-up" style={{ marginBottom: '1.25rem' }}>About</p>
        <h1
          className="font-display anim-fade-up anim-delay-1"
          style={{
            fontSize: 'clamp(3rem, 6vw, 5.5rem)',
            fontWeight: 300,
            lineHeight: 1.0,
            letterSpacing: '-0.01em',
            color: 'var(--cream)',
            margin: '0 0 2rem',
          }}
        >
          Designer.<br />
          <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Engineer.</em><br />
          Collaborator.
        </h1>
      </div>

      {/* Bio Section */}
      <div
        className="about-grid anim-fade-up anim-delay-2"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          paddingTop: '4rem',
          paddingBottom: '5rem',
          borderBottom: '1px solid var(--border-subtle)',
          alignItems: 'start',
        }}
      >
        {/* Photo */}
        <div className="photo-frame" style={{ maxWidth: '420px' }}>
          <img
            src="/.netlify/images?url=/headshot-on-white.jpg&w=840&q=85&fit=cover"
            alt="Mara Vasile"
            width={420}
            height={520}
            style={{
              width: '100%',
              height: '520px',
              objectFit: 'cover',
              objectPosition: 'top center',
              display: 'block',
              filter: 'grayscale(20%) contrast(1.05)',
            }}
          />
        </div>

        {/* Bio text */}
        <div>
          <p
            className="font-display"
            style={{
              fontSize: '1.625rem',
              fontWeight: 300,
              lineHeight: 1.55,
              color: 'var(--cream)',
              marginBottom: '2rem',
            }}
          >
            "I believe the best digital experiences are invisible — they feel
            inevitable, as if they couldn't have existed any other way."
          </p>
          <div style={{ color: 'var(--cream-dim)', lineHeight: 1.8, fontSize: '0.9375rem', fontWeight: 300 }}>
            <p style={{ marginBottom: '1.25rem' }}>
              Based in Lisbon, Portugal, I work at the intersection of design and
              engineering to build interfaces that are both beautiful and technically
              sound. Over the past seven years, I've collaborated with startups, agencies,
              and established brands across Europe and North America.
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              My practice spans brand identity, design systems, and interactive web
              experiences. I'm equally comfortable in Figma crafting a visual language
              as I am in a codebase architecting a component library.
            </p>
            <p>
              When I'm not building things, I'm photographing architecture, studying
              typographic history, and drinking too much espresso.
            </p>
          </div>

          <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/projects" className="btn-cream">View Work</Link>
            <Link to="/contact" className="btn-gold">Get in Touch</Link>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div style={{ paddingTop: '4rem', paddingBottom: '4rem', borderBottom: '1px solid var(--border-subtle)' }}>
        <p className="section-label" style={{ marginBottom: '2rem' }}>Expertise</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {skills.map((skill) => (
            <span key={skill} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div style={{ paddingTop: '4rem', paddingBottom: '4rem', borderBottom: '1px solid var(--border-subtle)' }}>
        <p className="section-label" style={{ marginBottom: '3rem' }}>Experience</p>
        <div className="timeline">
          {jobs.map((job) => (
            <div key={job.jobTitle} className="timeline-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <h3 style={{ color: 'var(--cream)', fontWeight: 500, fontSize: '1rem', margin: '0 0 0.25rem' }}>
                    {job.jobTitle}
                  </h3>
                  <p style={{ color: 'var(--gold)', fontSize: '0.875rem', margin: 0, fontWeight: 400 }}>
                    {job.company} &mdash; {job.location}
                  </p>
                </div>
                <span className="font-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cream-faint)', paddingTop: '0.125rem' }}>
                  {job.startDate} – {job.endDate ?? 'Present'}
                </span>
              </div>
              <p style={{ color: 'var(--cream-dim)', fontSize: '0.875rem', lineHeight: 1.7, margin: '0.75rem 0 0', fontWeight: 300 }}>
                {job.summary}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginTop: '0.875rem' }}>
                {job.tags.map((tag) => (
                  <span key={tag} className="skill-tag" style={{ fontSize: '0.6rem', padding: '0.25rem 0.5rem' }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
        <p className="section-label" style={{ marginBottom: '3rem' }}>Education</p>
        <div className="timeline">
          {educations.map((edu) => (
            <div key={edu.school} className="timeline-item">
              <h3 style={{ color: 'var(--cream)', fontWeight: 500, fontSize: '1rem', margin: '0 0 0.375rem' }}>
                {edu.school}
              </h3>
              <p style={{ color: 'var(--cream-dim)', fontSize: '0.875rem', lineHeight: 1.7, margin: 0, fontWeight: 300 }}>
                {edu.summary}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .photo-frame { max-width: 100% !important; }
          .photo-frame img { height: 380px !important; }
          .photo-frame::before { display: none; }
        }
      `}</style>
    </div>
  )
}
