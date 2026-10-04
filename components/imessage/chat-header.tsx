import { ChevronLeft, ChevronRight, Video } from 'lucide-react'
import { DoorDashAvatar } from './doordash-avatar'

export function ChatHeader() {
  return (
    <header className="relative flex items-start justify-between border-b border-black/10 bg-[#F6F6F6]/90 px-3 pb-2 backdrop-blur-xl">
      <div className="flex w-16 items-center pt-3 text-[#007AFF]">
        <ChevronLeft className="size-[30px] -ml-1" strokeWidth={2.5} aria-hidden="true" />
        <span className="-ml-0.5 flex h-[22px] min-w-[22px] items-center justify-center rounded-full bg-[#007AFF] px-1.5 text-[13px] font-semibold text-white">
          3
        </span>
        <span className="sr-only">Back to conversations</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <DoorDashAvatar className="size-[52px]" />
        <div className="flex items-center gap-0.5 text-[11.5px] text-black">
          <span className="font-medium">DoorDash Assistant</span>
          <ChevronRight className="size-3 text-black/35" strokeWidth={3} aria-hidden="true" />
        </div>
      </div>

      <div className="flex w-16 justify-end pt-3.5 text-[#007AFF]">
        <Video className="size-[26px]" strokeWidth={1.75} aria-hidden="true" />
        <span className="sr-only">FaceTime video</span>
      </div>
    </header>
  )
}
