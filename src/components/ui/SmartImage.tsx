import { useState } from 'react'
import type { ImgHTMLAttributes } from 'react'

type SmartImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  alt: string
}

/** Renders an image but hides it entirely if the file fails to load. */
export function SmartImage({ src, alt, ...rest }: SmartImageProps) {
  const [failed, setFailed] = useState(false)
  if (failed) return null
  return <img src={src} alt={alt} onError={() => setFailed(true)} {...rest} />
}
