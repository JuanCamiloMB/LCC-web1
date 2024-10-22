import AwwardSection from "./sections/AwwardSection"
import BioSection from "./sections/BioSection"
import CardsSection from "./sections/CardsSection"
import EndSection from "./sections/EndSection"
import HeroSection from "./sections/HeroSection"
import ImagesSection from "./sections/ImagesSection"
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
      <BioSection />
      <ImagesSection />
      <EndSection />
    </div>
  )
}
