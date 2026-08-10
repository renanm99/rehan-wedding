import type { SiteConfig } from '../types'

/**
 * Single source of truth for all site content.
 * Edit text, dates, links and image paths here — not inside components.
 */
export const site: SiteConfig = {
  couple: {
    partner1: 'Renan',
    partner2: '…',
    monogram: 'R & …',
    heroImage: '/aquarela.jpeg',
  },
  date: {
    iso: '2027-05-15T17:00:00-03:00',
    label: '15 de maio de 2027',
    venue: 'Sítio Recanto das Flores',
  },
  venue: {
    name: 'Sítio Recanto das Flores',
    address: 'Estrada das Hortênsias, km 12 — Zona Rural, Monte Verde, MG',
    mapEmbedUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=-46.05%2C-22.9%2C-45.95%2C-22.8&layer=mapnik&marker=-22.85%2C-46.0',
    mapLink: 'https://www.openstreetmap.org/?mlat=-22.85&mlon=-46.0#map=13/-22.85/-46.0',
    photos: [
      { src: '/images/venue-1.jpg', alt: 'Fachada do sítio' },
      { src: '/images/venue-2.jpg', alt: 'Salão de festas ao ar livre' },
    ],
    routes: {
      byCar: 'Pela rodovia MG-129, acesso pela estrada das Hortênsias no km 12. A estrada é de terra nos últimos 2 km, mas é tranquila para carros baixos.',
      byTransit: 'Linha 3902 Monte Verde Centro → entrada do sítio (parada a 400m do portão). Ônibus de hora em hora aos sábados.',
      parking: 'Estacionamento gratuito no local para ~120 carros, com manobrista na entrada do portão principal.',
    },
  },
  story: {
    intro: 'Tudo começou em um café… e desde então cada página dessa história tem sido a nossa favorita. Abaixo, um pequeno resumo dos nossos capítulos preferidos.',
    timeline: [
      {
        year: '2019',
        title: 'O primeiro encontro',
        text: 'Nos conhecemos em uma cafeteria e a conversa não acabou nem quando o café esfriou.',
      },
      {
        year: '2021',
        title: 'Morando juntos',
        text: 'Depois de dois anos de idas e vindas entre cidades, finalmente dividimos o mesmo endereço.',
      },
      {
        year: '2025',
        title: 'O pedido',
        text: 'Uma viagem, um anel e a resposta mais fácil que já demos na vida.',
      },
    ],
  },
  gallery: {
    title: 'Pré-wedding',
    subtitle: 'Alguns registros antes do grande dia',
    photos: [
      { src: '/images/gallery-1.jpg', alt: 'Nosso ensaio no parque' },
      { src: '/images/gallery-2.jpg', alt: 'Momento na praia' },
      { src: '/images/gallery-3.jpg', alt: 'Risada entre amigos' },
      { src: '/images/gallery-4.jpg', alt: 'Pôr do sol juntos' },
    ],
  },
  rsvp: {
    endpoint: '',
    deadline: '30 de abril de 2027',
  },
  gifts: {
    api: {
      baseUrl: import.meta.env.VITE_GIFTS_API_URL ?? '',
      token: import.meta.env.VITE_GIFTS_API_TOKEN ?? '',
    },
    checkoutBaseUrl: 'https://lista-de-presentes.example.com/checkout',
    fallback: [
      {
        id: 'air-fryer',
        name: 'Air fryer',
        description: 'Para as nossas noites de quinta-feira em casa.',
        price: 399.9,
        currency: 'BRL',
      },
      {
        id: 'viagem-de-lua-de-mel',
        name: 'Lua de mel (diária)',
        description: 'Ajude com uma diária da nossa viagem dos sonhos.',
        price: 250,
        currency: 'BRL',
      },
      {
        id: 'jogo-de-cama',
        name: 'Jogo de cama king',
        description: 'Para começar bem cada manhã de casados.',
        price: 189.9,
        currency: 'BRL',
      },
    ],
  },
}
