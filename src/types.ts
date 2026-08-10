export type GalleryImage = {
  src: string
  alt: string
}

export type TimelineEntry = {
  year: string
  title: string
  text: string
}

export type GiftItem = {
  id: string
  name: string
  description: string
  price: number
  currency: string
  image?: string
  checkoutUrl?: string
}

export type RsvpStatus = 'pending' | 'success' | 'error'

export type SiteConfig = {
  couple: {
    partner1: string
    partner2: string
    monogram: string
    heroImage?: string
  }
  date: {
    iso: string
    label: string
    venue?: string
  }
  venue: {
    name: string
    address: string
    mapEmbedUrl: string
    mapLink: string
    photos: GalleryImage[]
    routes: {
      byCar: string
      byTransit: string
      parking: string
    }
  }
  story: {
    intro: string
    timeline: TimelineEntry[]
  }
  gallery: {
    title: string
    subtitle: string
    photos: GalleryImage[]
  }
  rsvp: {
    endpoint: string
    deadline: string
  }
  gifts: {
    api: {
      baseUrl: string
      token: string
    }
    checkoutBaseUrl: string
    fallback: GiftItem[]
  }
}
