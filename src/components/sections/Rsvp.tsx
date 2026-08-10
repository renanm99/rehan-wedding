import { useState } from 'react'
import type { FormEvent } from 'react'
import type { RsvpStatus } from '../../types'
import { site } from '../../data/site'
import { Section } from '../ui/Section'
import { Button } from '../ui/Button'

const inputClasses =
  'w-full rounded-xl border border-paper-deep bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:border-olive focus:outline-none focus:ring-2 focus:ring-olive/30'

export function Rsvp() {
  const { endpoint, deadline } = site.rsvp
  const [status, setStatus] = useState<RsvpStatus>('pending')
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!endpoint) return

    const form = event.currentTarget
    const data = new FormData(form)
    const payload = Object.fromEntries(data.entries())

    setSubmitting(true)
    setErrorMessage('')
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(`Resposta do servidor: ${res.status}`)
      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Erro desconhecido')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Section
      id="rsvp"
      eyebrow="RSVP"
      title="Confirme sua presença"
      subtitle={`Por favor, confirme até ${deadline}. A sua presença faz toda a diferença!`}
    >
      <div className="mx-auto max-w-xl rounded-3xl border border-paper-deep bg-paper-deep/40 p-6 sm:p-10">
        {!endpoint && (
          <p className="text-center text-sm text-ink-soft">
            O formulário ainda não foi configurado. Em breve, este espaço ficará
            disponível para a confirmação de presença.
          </p>
        )}

        {endpoint && status === 'success' && (
          <div className="text-center" role="status">
            <p className="font-display text-3xl text-olive">Obrigado!</p>
            <p className="mt-2 text-sm text-ink-soft">
              Sua presença foi confirmada. Mal podemos esperar para comemorar
              com você!
            </p>
            <Button
              variant="ghost"
              className="mt-6"
              onClick={() => setStatus('pending')}
            >
              Enviar outra resposta
            </Button>
          </div>
        )}

        {endpoint && status !== 'success' && (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-ink-soft">
                  Nome
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Seu nome completo"
                  className={inputClasses}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-ink-soft">
                  E-mail
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="voce@email.com"
                  className={inputClasses}
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-ink-soft">
                Quantas pessoas
              </span>
              <select name="guests" defaultValue="1" className={inputClasses}>
                <option value="1">1 pessoa</option>
                <option value="2">2 pessoas</option>
                <option value="3">3 pessoas</option>
                <option value="4">4 pessoas</option>
                <option value="5">5 ou mais</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-ink-soft">
                Mensagem (opcional)
              </span>
              <textarea
                name="message"
                rows={3}
                placeholder="Quer nos dizer algo?"
                className={inputClasses}
              />
            </label>

            {status === 'error' && (
              <p className="text-sm text-red-600" role="alert">
                Não foi possível enviar: {errorMessage}. Tente novamente.
              </p>
            )}

            <Button type="submit" disabled={submitting} className="w-full">
              {submitting ? 'Enviando…' : 'Confirmar presença'}
            </Button>
          </form>
        )}
      </div>
    </Section>
  )
}
