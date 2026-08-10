import { useEffect, useCallback } from 'react'
import type { GalleryImage } from '../../types'

type LightboxProps = {
  images: GalleryImage[]
  index: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const image = images[index]
  const total = images.length

  const prev = useCallback(() => onNavigate((index - 1 + total) % total), [index, total, onNavigate])
  const next = useCallback(() => onNavigate((index + 1) % total), [index, total, onNavigate])

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') prev()
      if (event.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  if (!image) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar"
        className="absolute right-4 top-4 rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20"
      >
        Fechar ✕
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          prev()
        }}
        aria-label="Anterior"
        className="absolute left-2 rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20 sm:left-6"
      >
        ‹
      </button>

      <img
        src={image.src}
        alt={image.alt}
        onClick={(event) => event.stopPropagation()}
        className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl"
      />

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          next()
        }}
        aria-label="Próxima"
        className="absolute right-2 rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20 sm:right-6"
      >
        ›
      </button>

      <span className="absolute bottom-4 text-sm text-white/70">
        {index + 1} / {total}
      </span>
    </div>
  )
}
