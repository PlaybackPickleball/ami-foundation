export function LeafMark({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        fill="#E0C27A"
        d="M32 4c9 11 20 20 20 33 0 12-8 21-20 23C20 58 12 49 12 37 12 24 23 15 32 4z"
      />
      <path
        d="M32 12c1 11 1 22 0 40"
        fill="none"
        stroke="#6e5424"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M32 22c7 2 13 8 16 15"
        fill="none"
        stroke="#f6e7bf"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M32 28c-6 2-12 7-15 14"
        fill="none"
        stroke="#f6e7bf"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  )
}
