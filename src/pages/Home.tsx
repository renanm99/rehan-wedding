import { CoupleIntro } from '../components/sections/CoupleIntro'
import { Gallery } from '../components/sections/Gallery'
import { Story } from '../components/sections/Story'
import { Location } from '../components/sections/Location'
import { CountdownSection } from '../components/sections/CountdownSection'
import { Rsvp } from '../components/sections/Rsvp'

export function Home() {
  return (
    <>
      <CoupleIntro />
      <Gallery />
      <Story />
      <Location />
      <CountdownSection />
      <Rsvp />
    </>
  )
}
