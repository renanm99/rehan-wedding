/**
 * Map navigation links. On mobile these open the device's default maps app
 * via a generic `geo:` deeplink; on desktop they open Google Maps.
 */
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false
  return (
    (typeof window.matchMedia === 'function' &&
      window.matchMedia('(pointer: coarse)').matches) ||
    /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)
  )
}

export function mapsLink(lat: number, lng: number): string {
  return isMobileDevice()
    ? `geo:0,0?q=${lat},${lng}`
    : `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
}
