import BioSection from "./sections/BioSection"
import EndSection from "./sections/EndSection"
import FixedSection from "./sections/FixedSection"
import HeroSection from "./sections/HeroSection"
import ImagesSection from "./sections/ImagesSection"
import PinBackground from "./sections/PinBackground"
import PinInitialSection from "./sections/PinInitialSection"
import PinSection from "./sections/PinSection"
import SliderSection from "./sections/SliderSection"
import SpaceSection from "./sections/SpaceSection"

export default function Home() {
  return (
    <div className="h-auto w-screen bg-[#4338ca]">
      <HeroSection />
      <FixedSection />
      <PinSection />
      <PinInitialSection />
      <PinBackground />
      <SpaceSection />
      <SliderSection />
      <BioSection />
      <ImagesSection />
      <EndSection />
    </div>
  )
}
