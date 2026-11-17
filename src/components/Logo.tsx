import { FOUNDATION_NAME } from '../content/constants'
import { publicPath } from '../publicPath'

type LogoProps = {
  variant: 'on-dark' | 'on-light'
  className?: string
}

export function Logo({ variant, className = '' }: LogoProps) {
  const src = publicPath(variant === 'on-dark' ? 'logo-on-dark.png' : 'logo-on-light.png')
  return <img src={src} alt={FOUNDATION_NAME} className={`w-auto ${className}`} />
}
