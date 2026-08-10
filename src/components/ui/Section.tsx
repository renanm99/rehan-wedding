import type { ReactNode } from 'react'

type SectionProps = {
  id?: string
  eyebrow?: string
  title?: string
  subtitle?: string
  children: ReactNode
  className?: string
}

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = '',
}: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        {(eyebrow || title) && (
          <header className="mb-10 text-center sm:mb-14">
            {eyebrow && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-olive">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-4xl font-medium text-ink sm:text-5xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mx-auto mt-4 max-w-xl text-ink-soft">{subtitle}</p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}
