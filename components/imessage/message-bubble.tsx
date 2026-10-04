import { cn } from '@/lib/utils'

type MessageBubbleProps = {
  from: 'agent' | 'user'
  tail?: boolean
  children: React.ReactNode
}

export function MessageBubble({ from, tail = true, children }: MessageBubbleProps) {
  const isUser = from === 'user'
  return (
    <div className={cn('flex w-full', isUser ? 'justify-end' : 'justify-start')}>
      <div
        className={cn(
          'imessage-bubble relative max-w-[78%] whitespace-pre-line rounded-[19px] px-[13px] py-[7px] text-[17px] leading-[22px] tracking-[-0.2px]',
          isUser ? 'bubble-user bg-[#0A84FF] text-white' : 'bubble-agent bg-[#E9E9EB] text-black',
          tail && 'has-tail',
        )}
      >
        {children}
      </div>
    </div>
  )
}
