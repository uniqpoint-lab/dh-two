import { Mic, Plus } from 'lucide-react'

export function Composer() {
  return (
    <div className="flex items-center gap-2.5 bg-white px-3 pb-2 pt-2">
      <div className="flex size-[34px] shrink-0 items-center justify-center rounded-full bg-[#E9E9EB]">
        <Plus className="size-5 text-[#7C7C80]" strokeWidth={2.5} aria-hidden="true" />
      </div>
      <div className="flex h-[36px] flex-1 items-center justify-between rounded-full border border-[#C7C7CC] pl-3.5 pr-2.5">
        <span className="text-[17px] text-[#C4C4C6]">iMessage</span>
        <Mic className="size-5 text-[#9A9A9F]" strokeWidth={2} aria-hidden="true" />
      </div>
    </div>
  )
}
