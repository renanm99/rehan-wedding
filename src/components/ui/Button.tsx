import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type CommonProps = {
  variant?: 'solid' | 'outline' | 'ghost'
  children: ReactNode
}

type LinkButtonProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>
type ButtonButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-olive'

const variantClasses: Record<NonNullable<CommonProps['variant']>, string> = {
  solid: 'bg-ink text-paper hover:bg-olive',
  outline: 'border border-olive text-olive hover:bg-olive hover:text-paper',
  ghost: 'text-ink-soft hover:text-olive',
}

function classNames(
  variant: CommonProps['variant'],
  className?: string,
): string {
  const variantClass = variantClasses[variant ?? 'solid']
  return [baseClasses, variantClass, className].filter(Boolean).join(' ')
}

export function ButtonLink({
  variant = 'solid',
  className,
  children,
  ...rest
}: LinkButtonProps) {
  return (
    <a className={classNames(variant, className)} {...rest}>
      {children}
    </a>
  )
}

export function Button({
  variant = 'solid',
  className,
  children,
  ...rest
}: ButtonButtonProps) {
  return (
    <button className={classNames(variant, className)} {...rest}>
      {children}
    </button>
  )
}
