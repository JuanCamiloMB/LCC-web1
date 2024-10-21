"use client"

import { useEffect } from "react"
import gsap from "gsap"

export default function ContactSection() {
  useEffect(() => {
    gsap.to("#contact-section-container", {
      scrollTrigger: {
        trigger: "#contact-section-container",
        start: "95% bottom",
        end: "bottom top",

        onLeaveBack: () => {
          gsap.to(".contact-section", {
            scale: 0.5,
          })
        },

        onEnterBack: () => {
          gsap.to(".contact-section", {
            scale: 1,
          })
        },

        onEnter: () => {
          gsap.to(".contact-section", {
            scale: 1,
          })
        },
      },
    })
  }, [])

  return (
    <section
      id="contact-section-container"
      className="relative z-10 h-screen w-full"
    >
      <div className="contact-section h-full w-full origin-center scale-50 bg-pink-400">
        Contact Section
      </div>
    </section>
  )
}
