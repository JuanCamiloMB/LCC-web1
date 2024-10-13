"use client"

import { useEffect } from "react"
import gsap from "gsap"

export default function ScreenLoader() {
  useEffect(() => {
    gsap.to(".loader-screen", {
      height: 0,
      duration: 0.6,
      delay: 2,
    })
  }, [])

  return (
    <div className="loader-screen fixed z-50 flex h-screen w-full items-center justify-center overflow-hidden bg-black" />
  )
}
