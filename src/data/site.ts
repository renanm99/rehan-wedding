import type { SiteConfig } from '../types'

/**
 * Single source of truth for all site content.
 * Edit text, dates, links and image paths here — not inside components.
 */
export const site: SiteConfig = {
  couple: {
    partner1: 'Renan',
    partner2: 'Hannah',
    monogram: 'R & H',
    heroImage: '/aquarela.jpeg',
  },
  date: {
    iso: '2027-10-11T18:00:00-03:00',
    label: '11 de outubro de 2027',
    venue: 'Recanto Callegari',
  },
  venue: {
    name: 'Recanto Callegari',
    address: 'Av. Parque Petrópolis, 365 — Serra da Cantareira, Mairiporã, SP, 07600-000',
    mapEmbedUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=-46.6197%2C-23.3827%2C-46.6097%2C-23.3727&layer=mapnik&marker=-23.3777%2C-46.6147',
    mapLink: 'https://www.openstreetmap.org/?mlat=-23.3777&mlon=-46.6147#map=16/-23.3777/-46.6147',
    gps: { lat: -23.3777, lng: -46.6147 },
    photos: [
      { src: '/images/venue-1.jpg', alt: 'Fachada do Recanto Callegari' },
      { src: '/images/venue-2.jpg', alt: 'Área externa do Recanto Callegari' },
    ],
    routes: {
      byCar: 'Acesso com asfalto até a porta, pela Av. Parque Petrópolis, na região da Serra da Cantareira. Os percursos oficiais (via Zona Norte e via Fernão Dias) estão no site do buffet e evitam os trechos de terra.',
      byTransit: 'Recomendamos carro ou transporte por aplicativo (Uber/táxi), a cerca de 40 minutos da zona norte de São Paulo. Para grupos, dá para fretar vans ou ônibus até o local.',
      parking: 'Estacionamento no próprio local, com acesso asfaltado e espaço para carros, vans e ônibus de convidados.',
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
    deadline: '30 de setembro de 2027',
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
