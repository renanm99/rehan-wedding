import { site } from '../../data/site'
import { Section } from '../ui/Section'

export function Story() {
  const { intro, timeline } = site.story

  return (
    <Section id="historia" eyebrow="A nossa história" title="Como tudo começou">
      <p className="mx-auto mb-12 max-w-2xl text-center text-ink-soft">{intro}</p>

      <ol className="relative mx-auto max-w-2xl space-y-10 border-l border-sage pl-8 sm:pl-10">
        {timeline.map((entry) => (
          <li key={entry.year} className="relative">
            <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-olive bg-paper sm:-left-[49px]" />
            <p className="text-xs font-semibold uppercase tracking-widest text-olive">
              {entry.year}
            </p>
            <h3 className="mt-1 font-display text-2xl font-medium text-ink">
              {entry.title}
            </h3>
            <p className="mt-1 text-ink-soft">{entry.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
