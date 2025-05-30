"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { reckoner } from "../fonts"

export default function Socials() {
  const [whiteBg, setWhiteBg] = useState(false)

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#slider-section",
      start: "top bottom",
      end: "bottom top",
      onEnterBack: () => {
        setWhiteBg(false)
      },
      onEnter: () => {
        setWhiteBg(true)
      },
      onLeave: () => {
        setWhiteBg(false)
      },
      onLeaveBack: () => {
        setWhiteBg(false)
      },
    })

    gsap.to("#socials-section", {
      delay: 2.6,
      yPercent: 100,
      ease: "circ",
    })
  }, [])
  return (
    <div
      id="socials-section"
      className="fixed top-0 z-50 hidden w-screen -translate-y-[100%] justify-end bg-transparent py-5 pr-10 md:flex"
    >
      <div
        className={cn(
          reckoner.className,
          "flex items-center gap-20 transition-all"
        )}
      >
        <a
          href="https://latincybersecuritychallenge.com/"
          aria-label="Cybersecurity challenge"
          target="_blank"
          rel="noreferrer"
          className={cn(
            "relative px-2 text-lg font-medium tracking-wider text-white before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-0 before:bg-white before:transition-all before:content-[''] hover:text-black hover:before:w-full",
            { "text-black before:bg-indigo-500 hover:text-white": whiteBg }
          )}
        >
          LCC.
        </a>
        <a
          href="https://gdcfusion.org/"
          aria-label="github acc"
          target="_blank"
          rel="noreferrer"
          className={cn(
            "relative cursor-pointer bg-indigo-600 px-2 text-lg font-medium tracking-wider text-white transition-all hover:bg-indigo-500"
          )}
        >
          GDC Fusion.
        </a>
      </div>
    </div>
  )
}
