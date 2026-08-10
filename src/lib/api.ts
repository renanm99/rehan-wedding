import type { GiftItem } from '../types'
import { site } from '../data/site'

/**
 * Thin client for the external gift/payment API.
 * All the heavy lifting (checkout, payment, PIX, etc.) stays on the
 * external service — this module only lists gifts and links out to
 * the provider's checkout. Swap providers by editing `site.gifts.api`.
 */
export async function fetchGiftList(): Promise<GiftItem[]> {
  const { baseUrl, token } = site.gifts.api
  if (!baseUrl) return site.gifts.fallback

  try {
    const res = await fetch(`${baseUrl}/gifts`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    })
    if (!res.ok) throw new Error(`Gift API responded ${res.status}`)
    const data: unknown = await res.json()

    if (Array.isArray(data)) return data as GiftItem[]
    if (data && typeof data === 'object' && Array.isArray((data as { gifts?: unknown }).gifts)) {
      return (data as { gifts: GiftItem[] }).gifts
    }
    throw new Error('Unexpected gift API payload')
  } catch (err) {
    console.error('Could not load gifts from API, using fallback list.', err)
    return site.gifts.fallback
  }
}

export function giftCheckoutUrl(gift: GiftItem): string {
  if (gift.checkoutUrl) return gift.checkoutUrl
  return `${site.gifts.checkoutBaseUrl}/${encodeURIComponent(gift.id)}`
}

export function formatPrice(value: number, currency: string): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency,
  }).format(value)
}
