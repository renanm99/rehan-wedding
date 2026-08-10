import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { site } from '../../data/site'

const navItems = [
  { to: '/', label: 'Início' },
  { to: '/#galeria', label: 'Galeria' },
  { to: '/#historia', label: 'Nossa história' },
  { to: '/#local', label: 'Local' },
  { to: '/#rsvp', label: 'RSVP' },
  { to: '/presentes', label: 'Presentes' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { monogram } = site.couple

  return (
    <header className="sticky top-0 z-40 border-b border-paper-deep bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-5 sm:px-8">
        <Link
          to="/"
          className="font-display text-2xl font-medium tracking-wide text-ink"
          onClick={() => setOpen(false)}
        >
          {monogram}
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-olive"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink hover:bg-paper-deep md:hidden"
        >
          <span className="text-2xl leading-none">{open ? '✕' : '☰'}</span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-paper-deep bg-paper md:hidden">
          <ul className="flex flex-col px-5 py-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block border-b border-paper-deep py-3 text-sm font-medium text-ink-soft last:border-0 hover:text-olive"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
