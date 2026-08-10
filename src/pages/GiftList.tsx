import { useEffect, useState } from 'react'
import type { GiftItem } from '../types'
import { site } from '../data/site'
import { fetchGiftList, giftCheckoutUrl, formatPrice } from '../lib/api'
import { Section } from '../components/ui/Section'
import { SmartImage } from '../components/ui/SmartImage'
import { ButtonLink } from '../components/ui/Button'

export function GiftList() {
  const [gifts, setGifts] = useState<GiftItem[]>(site.gifts.fallback)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    fetchGiftList().then((items) => {
      if (!active) return
      setGifts(items)
      setLoading(false)
    })
    return () => {
      active = false
    }
  }, [])

  return (
    <Section
      eyebrow="Lista de presentes"
      title="Presentes"
      subtitle="A sua presença já é o melhor presente. Mas, se quiser nos presentear, escolha um item abaixo — a confirmação e o pagamento são feitos com segurança pelo nosso serviço externo."
    >
      {loading && (
        <p className="py-16 text-center text-ink-soft">Carregando presentes…</p>
      )}

      {!loading && gifts.length === 0 && (
        <p className="py-16 text-center text-ink-soft">
          A lista de presentes ainda não foi publicada.
        </p>
      )}

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {gifts.map((gift) => (
          <li
            key={gift.id}
            className="flex flex-col rounded-3xl border border-paper-deep bg-paper-deep/40 p-6"
          >
            {gift.image && (
              <SmartImage
                src={gift.image}
                alt={gift.name}
                loading="lazy"
                className="mb-4 aspect-[4/3] w-full rounded-2xl object-cover"
              />
            )}
            <h3 className="font-display text-2xl font-medium text-ink">
              {gift.name}
            </h3>
            <p className="mt-1 flex-1 text-sm text-ink-soft">{gift.description}</p>
            <p className="mt-4 text-lg font-semibold text-olive">
              {formatPrice(gift.price, gift.currency)}
            </p>
            <ButtonLink
              href={giftCheckoutUrl(gift)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full"
            >
              Presentear
            </ButtonLink>
          </li>
        ))}
      </ul>
    </Section>
  )
}
