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
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.3!2d-46.6147!3d-23.3777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDIyJzM5LjciUyA0NsKwMzYnNTIuOSJX!5e0!3m2!1spt-BR!2sbr!4v1600000000000',
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
        year: '2023',
        title: 'Namoro',
        text: 'O início de uma linda história de amor, com muitas risadas e momentos inesquecíveis.',
      },
      {
        year: '2024',
        title: 'O pedido',
        text: 'Debaixo do céu estrelado do Atacama, em uma viagem inesquecível, o pedido de casamento aconteceu.',
      },
      {
        year: '2026',
        title: 'Preparativos',
        text: 'Inicio do planejamento do casamento, com muitas ideias e sonhos para o grande dia.',
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
