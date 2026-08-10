import { Link } from 'react-router-dom'
import { site } from '../../data/site'

export function Footer() {
  const { monogram } = site.couple

  return (
    <footer className="border-t border-paper-deep py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-3 px-5 text-center sm:px-8">
        <p className="font-display text-2xl text-ink">{monogram}</p>
        <p className="text-sm text-ink-soft">{site.date.label}</p>
        <nav className="mt-2">
          <Link to="/" className="text-xs text-ink-soft underline-offset-2 hover:text-olive hover:underline">
            Início
          </Link>
          <span className="mx-3 text-sand">•</span>
          <Link to="/presentes" className="text-xs text-ink-soft underline-offset-2 hover:text-olive hover:underline">
            Presentes
          </Link>
        </nav>
      </div>
    </footer>
  )
}
