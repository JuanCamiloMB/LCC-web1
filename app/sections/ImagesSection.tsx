"use client"

import { useEffect } from "react"
import gsap from "gsap"

export default function ImagesSection() {
  /* Layout Transition */
  useEffect(() => {
    gsap.to("#images-section-container", {
      scrollTrigger: {
        trigger: "#images-section-container",
        start: "95% bottom",
        end: "bottom top",

        onLeaveBack: () => {
          gsap.to(".images-section", {
            scale: 0.5,
          })
        },

        onEnterBack: () => {
          gsap.to(".images-section", {
            scale: 1,
          })
        },

        onEnter: () => {
          gsap.to(".images-section", {
            scale: 1,
          })
        },
      },
    })
  }, [])

  return (
    <section
      id="images-section-container"
      className="relative z-10 h-screen w-full bg-white"
    >
      <div className="images-section h-full w-full origin-center scale-50 bg-black p-10">
        Contact Section
      </div>
    </section>
  )
}
