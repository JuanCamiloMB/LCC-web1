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

      <section id="next-section" className="h-[300px] w-full bg-red-800">
        Another Section
      </section>

      <SpaceSection />
    </div>
  )
}
