import { createFileRoute, Link } from '@tanstack/react-router'
import { allJobs, allEducations } from 'content-collections'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

const skills = [
  'Shopify Development',
  'WordPress Development',
  'Elementor',
  'Landing Pages',
  'Website Speed Optimization',
  'Conversion Optimization',
  'Responsive Design',
  'Custom Theme Editing',
  'UI / UX Design',
  'Figma to Website',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Vite',
]

const stats = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '5+', label: 'Years Experience' },
  { value: '< 2s', label: 'Speed Target' },
  { value: '100%', label: 'Responsive Builds' },
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
      <div
        style={{
          paddingTop: '5rem',
          paddingBottom: '4rem',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <p className="section-label anim-fade-up" style={{ marginBottom: '1.25rem' }}>
          About
        </p>

        <h1
          className="font-display anim-fade-up anim-delay-1"
          style={{
            fontSize: 'clamp(3rem, 6vw, 5.5rem)',
            fontWeight: 300,
            lineHeight: 1.0,
            letterSpacing: '-0.01em',
            color: 'var(--cream)',
            margin: '0 0 1.5rem',
          }}
        >
          Shopify.<br />
          <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>WordPress.</em><br />
          Results.
        </h1>

        <p
          className="anim-fade-up anim-delay-2"
          style={{
            maxWidth: '760px',
            color: 'var(--cream-dim)',
            fontSize: '1rem',
            lineHeight: 1.8,
            fontWeight: 300,
            margin: 0,
          }}
        >
          I help businesses build websites that look premium, load fast, and convert better.
          From Shopify stores and WordPress websites to landing pages and speed optimization,
          the focus is always on creating digital experiences that support real business growth.
        </p>
      </div>

      {/* Bio Section */}
      <div
        className="about-grid anim-fade-up anim-delay-3"
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
            alt="Vivek Sharma"
            width={420}
            height={520}
            style={{
              width: '100%',
              height: '520px',
              objectFit: 'cover',
              objectPosition: 'top center',
              display: 'block',
              filter: 'grayscale(10%) contrast(1.05)',
              borderRadius: '18px',
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
            “A strong website should not just look good — it should build trust,
            load fast, and turn visitors into customers.”
          </p>

          <div
            style={{
              color: 'var(--cream-dim)',
              lineHeight: 1.8,
              fontSize: '0.9375rem',
              fontWeight: 300,
            }}
          >
            <p style={{ marginBottom: '1.25rem' }}>
              I work with businesses, founders, and agencies to create websites that combine
              clean design with practical performance. Whether it is a Shopify store, a
              WordPress site, or a focused landing page, my goal is to make every build easy
              to use, easy to manage, and aligned with business goals.
            </p>

            <p style={{ marginBottom: '1.25rem' }}>
              My work includes custom page builds, Elementor development, Shopify theme edits,
              conversion-focused sections, speed optimization, and ongoing website improvements.
              I believe websites should not only be visually polished but also technically sound
              and ready to scale.
            </p>

            <p>
              I enjoy creating web experiences that feel modern, structured, and effective —
              with attention to details that improve trust, usability, and long-term performance.
            </p>
          </div>

          <div
            style={{
              marginTop: '2.5rem',
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <Link to="/projects" className="btn-cream">
              View Work
            </Link>
            <Link to="/contact" className="btn-gold">
              Start a Project
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div
        style={{
          paddingTop: '4rem',
          paddingBottom: '4rem',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <p className="section-label" style={{ marginBottom: '2rem' }}>
          Highlights
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1rem',
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
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
                  fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                  color: 'var(--cream)',
                  marginBottom: '0.35rem',
                }}
              >
                {stat.value}
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
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div
        style={{
          paddingTop: '4rem',
          paddingBottom: '4rem',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <p className="section-label" style={{ marginBottom: '2rem' }}>
          Expertise
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {skills.map((skill) => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Approach */}
      <div
        style={{
          paddingTop: '4rem',
          paddingBottom: '4rem',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <p className="section-label" style={{ marginBottom: '2rem' }}>
          How I Work
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1rem',
          }}
        >
          {[
            {
              title: 'Strategy First',
              text: 'Every project starts with understanding the business goal, audience, and what the website needs to achieve.',
            },
            {
              title: 'Clean Execution',
              text: 'I focus on structured layouts, responsive builds, and a clean user experience across desktop and mobile.',
            },
            {
              title: 'Performance Focus',
              text: 'Page speed, clarity, and usability are treated as core parts of the build, not afterthoughts.',
            },
            {
              title: 'Long-Term Usability',
              text: 'Websites should be easy to update, simple to manage, and built to support future growth.',
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                border: '1px solid var(--border-subtle)',
                borderRadius: '18px',
                padding: '1.5rem',
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              <h3
                style={{
                  color: 'var(--cream)',
                  fontWeight: 500,
                  fontSize: '1rem',
                  margin: '0 0 0.75rem',
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: 'var(--cream-dim)',
                  fontSize: '0.9rem',
                  lineHeight: 1.75,
                  margin: 0,
                  fontWeight: 300,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div
        style={{
          paddingTop: '4rem',
          paddingBottom: '4rem',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <p className="section-label" style={{ marginBottom: '3rem' }}>
          Experience
        </p>

        <div className="timeline">
          {jobs.map((job) => (
            <div key={job.jobTitle} className="timeline-item">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '0.5rem',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}
              >
                <div>
                  <h3
                    style={{
                      color: 'var(--cream)',
                      fontWeight: 500,
                      fontSize: '1rem',
                      margin: '0 0 0.25rem',
                    }}
                  >
                    {job.jobTitle}
                  </h3>

                  <p
                    style={{
                      color: 'var(--gold)',
                      fontSize: '0.875rem',
                      margin: 0,
                      fontWeight: 400,
                    }}
                  >
                    {job.company} &mdash; {job.location}
                  </p>
                </div>

                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--cream-faint)',
                    paddingTop: '0.125rem',
                  }}
                >
                  {job.startDate} – {job.endDate ?? 'Present'}
                </span>
              </div>

              <p
                style={{
                  color: 'var(--cream-dim)',
                  fontSize: '0.875rem',
                  lineHeight: 1.7,
                  margin: '0.75rem 0 0',
                  fontWeight: 300,
                }}
              >
                {job.summary}
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.375rem',
                  marginTop: '0.875rem',
                }}
              >
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="skill-tag"
                    style={{ fontSize: '0.6rem', padding: '0.25rem 0.5rem' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div
        style={{
          paddingTop: '4rem',
          paddingBottom: '4rem',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <p className="section-label" style={{ marginBottom: '3rem' }}>
          Education
        </p>

        <div className="timeline">
          {educations.map((edu) => (
            <div key={edu.school} className="timeline-item">
              <h3
                style={{
                  color: 'var(--cream)',
                  fontWeight: 500,
                  fontSize: '1rem',
                  margin: '0 0 0.375rem',
                }}
              >
                {edu.school}
              </h3>

              <p
                style={{
                  color: 'var(--cream-dim)',
                  fontSize: '0.875rem',
                  lineHeight: 1.7,
                  margin: 0,
                  fontWeight: 300,
                }}
              >
                {edu.summary}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div
        style={{
          paddingTop: '4rem',
          paddingBottom: '6rem',
        }}
      >
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '2.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
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
                margin: '0 0 0.5rem',
              }}
            >
              Looking for a website that performs as well as it looks?
            </p>

            <p
              style={{
                margin: 0,
                color: 'var(--cream-dim)',
                fontSize: '0.95rem',
              }}
            >
              Let’s discuss your project, business goals, and the best way to bring it to life.
            </p>
          </div>

          <Link to="/contact" className="btn-gold">
            Get in Touch
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .photo-frame { max-width: 100% !important; }
          .photo-frame img { height: 380px !important; }
        }
      `}</style>
    </div>
  )
}