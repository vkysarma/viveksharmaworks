import { createRootRoute, HeadContent, Link, Outlet, Scripts, useRouterState } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Mara Vasile — Creative Director & Frontend Engineer' },
      { name: 'description', content: 'Portfolio of Mara Vasile, creative director and frontend engineer crafting digital experiences where form meets function.' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
    ],
  }),
  shellComponent: RootDocument,
  component: RootLayout,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
        <Scripts />
      </body>
    </html>
  )
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const routerState = useRouterState()
  const isActive = routerState.location.pathname === to ||
    (to !== '/' && routerState.location.pathname.startsWith(to))

  return (
    <Link to={to} className={`nav-link ${isActive ? 'active' : ''}`}>
      {children}
    </Link>
  )
}

function RootLayout() {
  return (
    <>
      <header className="site-header">
        <Link to="/" className="site-name">
          Vivek<span>.</span>Sharma
        </Link>
        <nav className="site-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Work</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main className="page-wrapper">
        <Outlet />
      </main>

      <footer className="site-footer">
        <span className="font-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--cream-faint)' }}>
          © 2024 Mara Vasile
        </span>
        <span className="font-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--cream-faint)' }}>
          Creative Direction & Engineering
        </span>
      </footer>
    </>
  )
}
