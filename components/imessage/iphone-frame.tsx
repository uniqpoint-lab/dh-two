export function IPhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-[68px] bg-[#1C1C1E] p-[14px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.35),0_0_0_2px_#3A3A3C,inset_0_0_0_1px_#4A4A4D]">
      <span aria-hidden="true" className="absolute -left-[3px] top-[120px] h-8 w-[3px] rounded-l bg-[#2C2C2E]" />
      <span aria-hidden="true" className="absolute -left-[3px] top-[180px] h-16 w-[3px] rounded-l bg-[#2C2C2E]" />
      <span aria-hidden="true" className="absolute -left-[3px] top-[256px] h-16 w-[3px] rounded-l bg-[#2C2C2E]" />
      <span aria-hidden="true" className="absolute -right-[3px] top-[200px] h-24 w-[3px] rounded-r bg-[#2C2C2E]" />

      <div className="relative flex h-[852px] w-[393px] flex-col overflow-hidden rounded-[55px] bg-white">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[11px] z-20 h-[37px] w-[125px] -translate-x-1/2 rounded-full bg-black"
        />
        {children}
        <div aria-hidden="true" className="flex justify-center bg-white pb-2 pt-3">
          <span className="h-[5px] w-[139px] rounded-full bg-black" />
        </div>
      </div>
    </div>
  )
}
