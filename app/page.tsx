import CardsSection from "./sections/CardsSection"
import HeroSection from "./sections/HeroSection"

export default function Home() {
  return (
    <div className="h-auto w-full bg-[#4338ca]">
      <HeroSection />
      <CardsSection />
    </div>
  )
}
