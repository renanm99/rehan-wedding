import { useEffect, useState } from 'react'

function getRemaining(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now())
  const totalSeconds = Math.floor(diff / 1000)
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  }
}

type CountdownProps = {
  target: string
}

const pad = (n: number) => String(n).padStart(2, '0')

const units = [
  { key: 'days', label: 'dias' },
  { key: 'hours', label: 'horas' },
  { key: 'minutes', label: 'minutos' },
  { key: 'seconds', label: 'segundos' },
] as const

export function Countdown({ target }: CountdownProps) {
  const [remaining, setRemaining] = useState(() => getRemaining(new Date(target)))

  useEffect(() => {
    const timer = setInterval(() => setRemaining(getRemaining(new Date(target))), 1000)
    return () => clearInterval(timer)
  }, [target])

  const finished = remaining.days === 0 && remaining.hours === 0 && remaining.minutes === 0 && remaining.seconds === 0

  if (finished) {
    return <p className="font-display text-3xl text-olive">Chegou o grande dia!</p>
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5" role="timer" aria-live="polite">
      {units.map(({ key, label }) => (
        <div
          key={key}
          className="flex min-w-[76px] flex-col items-center rounded-2xl border border-paper-deep bg-paper/70 px-4 py-3"
        >
          <span className="font-display text-3xl font-medium tabular-nums text-ink sm:text-4xl">
            {pad(remaining[key])}
          </span>
          <span className="mt-1 text-[11px] uppercase tracking-widest text-ink-soft">
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}
