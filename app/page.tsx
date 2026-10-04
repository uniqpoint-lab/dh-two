import { ChatHeader } from '@/components/imessage/chat-header'
import { Composer } from '@/components/imessage/composer'
import { Conversation } from '@/components/imessage/conversation'
import { IPhoneFrame } from '@/components/imessage/iphone-frame'
import { StatusBar } from '@/components/imessage/status-bar'

export default function Page() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-[#EDEDF0] px-4 py-12">
      <h1 className="sr-only">DoorDash AI assistant iMessage conversation mockup</h1>
      <IPhoneFrame>
        <div className="bg-[#F6F6F6]/90">
          <StatusBar />
          <ChatHeader />
        </div>
        <Conversation />
        <Composer />
      </IPhoneFrame>
    </main>
  )
}
