"use client"

import { useEffect } from "react"
import { disableScroll, enableScroll } from "@/lib/utils"
import gsap from "gsap"

export default function ScreenLoader() {
  useEffect(() => {
    disableScroll()

    gsap.to(".loader-screen", {
      height: 0,
      duration: 0.6,
      delay: 2,

      onComplete: () => {
        enableScroll()
        gsap.set(".loader-screen", {
          display: "none",
        })
      },
    })
  }, [])

  return (
    <div className="loader-screen fixed z-50 flex h-screen w-full items-center justify-center bg-black" />
  )
}
