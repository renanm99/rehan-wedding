/**
 * Universal map navigation links. On mobile these open the installed
 * Google Maps / Waze app; on desktop they fall back to the web version.
 */
export function googleMapsDirectionsUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
}

export function wazeDirectionsUrl(lat: number, lng: number): string {
  return `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`
}
