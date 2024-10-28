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
        <div className="m-auto pt-[30%] text-9xl font-extrabold uppercase text-white">
          talent or
        </div>
      </section>
      <section
        id="pin-content-section-2"
        className={cn(
          SchibstedFont.className,
          "relative z-10 flex h-[150vh] w-screen flex-col items-center bg-black px-[4%] lg:flex-row"
        )}
      >
        <div className="m-auto pt-[30%] text-9xl font-extrabold uppercase text-white">
          PASSION ?
        </div>
      </section>
    </>
  )
}
