export function SampleMark({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-coral px-2 py-0.5 text-[0.65rem] font-semibold tracking-[0.16em] text-white uppercase">
      {label}
    </span>
  )
}
