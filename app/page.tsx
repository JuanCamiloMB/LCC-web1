// import BioSection from "./sections/BioSection"
// import EndSection from "./sections/EndSection"
import FixedSection from "./sections/FixedSection"
import HeroSection from "./sections/HeroSection"
// import ImagesSection from "./sections/ImagesSection"
import PinBackground from "./sections/PinBackground"

// import SliderSection from "./sections/SliderSection"
// import SpaceSection from "./sections/SpaceSection"
// import StatueSection from "./sections/StatueSection"

export default function Home() {
  return (
    <div className="h-auto w-full bg-[#4338ca]">
      <HeroSection />
      <FixedSection />

      <PinBackground />
      {/* <SpaceSection />
      <SliderSection />
      <StatueSection />
      <BioSection />
      <ImagesSection />
      <EndSection /> */}
    </div>
  )
}
