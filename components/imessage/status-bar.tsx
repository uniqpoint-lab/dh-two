import { Wifi } from 'lucide-react'

function SignalBars() {
  return (
    <div className="flex h-[11px] items-end gap-[1.5px]" aria-hidden="true">
      {[4, 6, 8.5, 11].map((h) => (
        <span key={h} className="w-[3px] rounded-[1px] bg-black" style={{ height: h }} />
      ))}
    </div>
  )
}

function Battery() {
  return (
    <div className="flex items-center gap-[1px]" aria-hidden="true">
      <div className="flex h-[12.5px] w-[25px] items-center rounded-[4px] border border-black/40 p-[1.5px]">
        <div className="h-full w-[80%] rounded-[2px] bg-black" />
      </div>
      <div className="h-[4px] w-[1.5px] rounded-r-full bg-black/40" />
    </div>
  )
}

export function StatusBar() {
  return (
    <div className="relative flex h-[54px] items-center justify-between px-8 pt-[6px]">
      <span className="w-[54px] text-center text-[17px] font-semibold tracking-tight">10:58</span>
      <div className="flex items-center gap-[6px]">
        <SignalBars />
        <Wifi className="size-[17px]" strokeWidth={2.75} aria-hidden="true" />
        <Battery />
      </div>
      <span className="sr-only">Status bar: 10:58, full signal, Wi-Fi connected, battery 80%</span>
    </div>
  )
}
