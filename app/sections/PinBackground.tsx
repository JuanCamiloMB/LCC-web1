"use client"

import { cn } from "@/lib/utils"
import { SchibstedFont } from "../fonts"

export default function PinBackground() {
  return (
    <>
      <section
        id="pin-content-section-1"
        className={cn(
          SchibstedFont.className,
          "relative z-10 flex h-[150vh] w-screen flex-col items-center bg-black px-[4%] lg:flex-row"
        )}
      >
        <div className="m-auto hidden pt-[30%] text-9xl font-extrabold uppercase text-gray-300 md:block">
          talent or
        </div>
        <div className="m-auto block pt-[30%] text-9xl font-extrabold uppercase text-gray-300 opacity-20 md:hidden md:opacity-100">
          01
        </div>
      </section>
      <section
        id="pin-content-section-2"
        className={cn(
          SchibstedFont.className,
          "relative z-10 flex h-[150vh] w-screen flex-col items-center bg-black px-[4%] lg:flex-row"
        )}
      >
        <div className="m-auto hidden pt-[30%] text-9xl font-extrabold uppercase text-gray-300 md:block">
          HARD WORK
        </div>
        <div className="m-auto block pt-[30%] text-9xl font-extrabold uppercase text-gray-300 opacity-20 md:hidden md:opacity-100">
          02
        </div>
      </section>
    </>
  )
}
