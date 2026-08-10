import { site } from '../../data/site'
import { Section } from '../ui/Section'
import { SmartImage } from '../ui/SmartImage'
import { ButtonLink } from '../ui/Button'
import { googleMapsDirectionsUrl, wazeDirectionsUrl } from '../../lib/maps'

const routeDetails = [
  { title: 'De carro', body: 'byCar' },
  { title: 'Transporte público', body: 'byTransit' },
  { title: 'Estacionamento', body: 'parking' },
] as const

export function Location() {
  const { name, address, mapEmbedUrl, mapLink, gps, photos, routes } = site.venue

  return (
    <Section
      id="local"
      eyebrow="O local"
      title={name}
      subtitle={address}
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          {photos.map((photo) => (
            <SmartImage
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="w-full rounded-2xl border border-paper-deep object-cover"
            />
          ))}
        </div>

        <div className="flex flex-col">
          {routeDetails.map(({ title, body }) => (
            <div
              key={title}
              className="border-b border-paper-deep py-5 first:pt-0"
            >
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest text-olive">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-soft">{routes[body]}</p>
            </div>
          ))}

          <div className="mt-6 overflow-hidden rounded-2xl border border-paper-deep">
            <iframe
              src={mapEmbedUrl}
              title="Mapa do local"
              loading="lazy"
              className="h-64 w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
            >
              Abrir no mapa
            </ButtonLink>
            <ButtonLink
              href={googleMapsDirectionsUrl(gps.lat, gps.lng)}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
            >
              Google Maps
            </ButtonLink>
            <ButtonLink
              href={wazeDirectionsUrl(gps.lat, gps.lng)}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
            >
              Waze
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  )
}
