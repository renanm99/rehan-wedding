import { useState } from 'react'
import { site } from '../../data/site'
import { Section } from '../ui/Section'
import { SmartImage } from '../ui/SmartImage'
import { Lightbox } from '../ui/Lightbox'

export function Gallery() {
  const { title, subtitle, photos } = site.gallery
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  if (photos.length === 0) return null

  return (
    <Section id="galeria" eyebrow="Registros" title={title} subtitle={subtitle}>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {photos.map((photo, index) => (
          <li key={photo.src}>
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`Ampliar foto: ${photo.alt}`}
              className="group block w-full overflow-hidden rounded-2xl border border-paper-deep"
            >
              <SmartImage
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      {openIndex !== null && (
        <Lightbox
          images={photos}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </Section>
  )
}
