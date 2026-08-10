import { site } from '../../data/site'

export function CoupleIntro() {
  const { partner1, partner2, heroImage, monogram } = site.couple
  const { label, venue } = site.date

  return (
    <section className="relative overflow-hidden">
      {heroImage && (
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-paper/60 via-paper/20 to-paper" />

      <div className="relative mx-auto flex min-h-[70vh] w-full max-w-5xl flex-col items-center justify-center px-5 py-24 text-center sm:min-h-[80vh] sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-olive">
          Vamos nos casar
        </p>

        <h1 className="mt-5 font-display text-5xl font-medium leading-tight text-ink sm:text-7xl">
          {partner1}
          <span className="mx-3 text-sand">·</span>
          {partner2}
        </h1>

        <p className="mt-4 font-display text-2xl italic text-olive sm:text-3xl">
          {monogram}
        </p>

        <span className="my-8 block h-px w-24 bg-sand" aria-hidden="true" />

        <div className="flex flex-col items-center gap-2 text-sm">
          <p className="text-lg font-medium tracking-wide text-ink">{label}</p>
          {venue && <p className="text-ink-soft">{venue}</p>}
        </div>
      </div>
    </section>
  )
}
