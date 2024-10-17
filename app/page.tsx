import AwwardSection from "./sections/AwwardSection"
import CardsSection from "./sections/CardsSection"
import HeroSection from "./sections/HeroSection"
import PinSection from "./sections/PinSection"
import SpaceSection from "./sections/SpaceSection"

export default function Home() {
  return (
    <div className="h-auto w-full bg-[#4338ca]">
      <HeroSection />
      <AwwardSection />
      <PinSection />
      <CardsSection />
      <SpaceSection />

      <div className="relative z-10 h-screen">
        <div className="text-7xl font-bold text-black">Hello World</div>
      </div>
    </div>
  )
}
