import { site } from '../../data/site'
import { Countdown } from '../ui/Countdown'
import { Section } from '../ui/Section'

export function CountdownSection() {
  return (
    <Section
      id="contagem"
      eyebrow="Faltam"
      title="Contagem regressiva"
      className="bg-mist/60"
    >
      <Countdown target={site.date.iso} />
    </Section>
  )
}
