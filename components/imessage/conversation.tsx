import { MessageBubble } from './message-bubble'

const priceLines = [
  { label: 'Subtotal', value: '$30.00' },
  { label: 'Delivery Fee', value: '$2.99' },
  { label: 'Service Fee', value: '$3.00' },
  { label: 'Tax & Tip', value: '$5.50' },
]

export function Conversation() {
  return (
    <div className="flex flex-1 flex-col gap-[3px] overflow-hidden bg-white px-4 pt-3">
      <p className="mb-2 text-center text-[11.5px] text-[#8E8E93]">
        <span className="font-semibold">Text Message</span>
        <br />
        Today 10:45 AM
      </p>

      <MessageBubble from="agent">
        {
          '📅 I noticed you have a calendar meeting from 12:00 PM to 3:00 PM today. Would you like me to order your regular salad to arrive by 11:30 AM? Reply YES or NO.'
        }
      </MessageBubble>

      <div className="mt-3">
        <MessageBubble from="user">Yes</MessageBubble>
        <p className="mt-[3px] pr-1 text-right text-[11.5px] font-medium text-[#8E8E93]">Delivered</p>
      </div>

      <div className="mt-2">
        <MessageBubble from="agent">
          <span className="font-semibold">{'🎉 Order Booked!'}</span>
          {' Your lunch is on the way from Mendocino Farms.\n⏱️ ETA: 10 minutes'}
          <span className="mt-[11px] block font-semibold">Price Summary:</span>
          <span className="block">
            {priceLines.map((line) => (
              <span key={line.label} className="block">
                {`• ${line.label}: ${line.value}`}
              </span>
            ))}
            <span className="block font-semibold">{'• Total: $41.49'}</span>
          </span>
        </MessageBubble>
      </div>
    </div>
  )
}
