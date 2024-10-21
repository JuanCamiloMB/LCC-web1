"use client"

import { useEffect } from "react"
import gsap from "gsap"

export default function ImagesSection() {
  useEffect(() => {
    gsap.to("#images-section-container", {
      scrollTrigger: {
        trigger: "#images-section-container",
        start: "top top",
        endTrigger: "#contact-section-container",
        end: "20% bottom",
        pin: true,
        pinSpacing: false,
        onLeaveBack: () => {
          gsap.to(".images-section", {
            scale: 1,
          })
        },
        onEnter: () => {
          gsap.to(".images-section", {
            scale: 0.5,
          })
        },
        onEnterBack: () => {
          gsap.to(".images-section", {
            scale: 0.5,
          })
        },
      },
    })
  }, [])

  return (
    <section
      id="images-section-container"
      className="relative z-10 h-screen w-full"
    >
      <div className="images-section h-full w-full origin-center bg-green-500 text-black">
        Images Section
      </div>
    </section>
  )
}
