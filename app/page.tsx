import AwwardSection from "./sections/AwwardSection"
import CardsSection from "./sections/CardsSection"
import HeroSection from "./sections/HeroSection"
import PinSection from "./sections/PinSection"
import SliderSection from "./sections/SliderSection"
import SpaceSection from "./sections/SpaceSection"
import StatueSection from "./sections/StatueSection"

export default function Home() {
  return (
    <div className="h-auto w-full bg-[#4338ca]">
      <HeroSection />
      <AwwardSection />
      <PinSection />
      <CardsSection />
      <SpaceSection />
      <SliderSection />
      <StatueSection />
    </div>
  )
}
