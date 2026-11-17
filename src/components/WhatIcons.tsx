import type { ReactNode } from 'react'

type WhatIconName = 'hand' | 'book' | 'store' | 'people'

function IconFrame({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden="true">
      {children}
    </svg>
  )
}

const pine = 'text-pine'
const gold = 'text-gold'
const pen = {
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function WhatIcon({ name }: { name: WhatIconName }) {
  if (name === 'hand') {
    return (
      <IconFrame>
        <g className={pine} {...pen}>
          <path d="M11 15.5V8.5a1.5 1.5 0 0 1 3 0V15" />
          <path d="M14 15V7.5a1.5 1.5 0 0 1 3 0V15" />
          <path d="M17 15V9.5a1.5 1.5 0 0 1 3 0V16" />
          <path d="M8 16.5V13a1.5 1.5 0 0 1 3 0v2.5" />
        </g>
        <path className={gold} {...pen} d="M8 17.5c.4 4.6 3.2 7.5 8 7.5s7.4-2.6 8-6.5v-2.5" />
      </IconFrame>
    )
  }

  if (name === 'book') {
    return (
      <IconFrame>
        <g className={pine} {...pen}>
          <path d="M16 8.5C12.8 7 9.4 6.6 6 7.4V24c3.4-.8 6.8-.4 10 1.1V8.5z" />
          <path d="M16 8.5V25.1" />
        </g>
        <path className={gold} {...pen} d="M16 8.5c3.2-1.5 6.6-1.9 10-.9V24c-3.4-.8-6.8-.4-10 1.1" />
      </IconFrame>
    )
  }

  if (name === 'store') {
    return (
      <IconFrame>
        <g className={pine} {...pen}>
          <path d="M6 13 8.2 7h15.6L26 13" />
          <path d="M6 13h20" />
          <path d="M7.5 13.5V25h17V13.5" />
        </g>
        <path className={gold} {...pen} d="M13 25v-6h6v6" />
      </IconFrame>
    )
  }

  return (
    <IconFrame>
      <g className={pine} {...pen}>
        <circle cx="10" cy="9" r="2.2" />
        <circle cx="22" cy="9" r="2.2" />
        <path d="M5.2 21c.7-3.2 2.8-4.8 4.8-4.8s4.1 1.6 4.8 4.8" />
        <path d="M17.2 21c.7-3.2 2.8-4.8 4.8-4.8s4.1 1.6 4.8 4.8" />
      </g>
      <path className={gold} {...pen} d="M13.5 15.5h5" />
    </IconFrame>
  )
}
