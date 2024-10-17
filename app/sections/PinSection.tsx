"use client"

import { useEffect } from "react"
import gsap from "gsap"

export default function PinSection() {
  useEffect(() => {
    gsap.to(".pinned", {
      scrollTrigger: {
        trigger: ".pinned",
        start: "top top",
        endTrigger: "#space-section",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      },
    })

    gsap.to(".pinned", {
      scrollTrigger: {
        trigger: ".pinned",
        start: "top top",
        endTrigger: "#space-section",
        end: "top bottom",
        onUpdate: (self) => {
          const rotation = self.progress * 360
          gsap.to(".revealer", { rotation })
        },
      },
    })

    gsap.to(".pinned", {
      scrollTrigger: {
        trigger: ".pinned",
        start: "top top",
        endTrigger: "#cards-section",
        end: "bottom bottom",
        onUpdate: (self) => {
          const progress = self.progress
          const clipPath = `polygon(
            ${45 - 45 * progress}% ${0 + 0 * progress}%,
            ${55 + 45 * progress}% ${0 + 0 * progress}%,
            ${55 + 45 * progress}% ${100 - 0 * progress}%,
            ${45 - 45 * progress}% ${100 - 0 * progress}%
            )`
          gsap.to(".revealer-1, .revealer-2", {
            clipPath: clipPath,
            ease: "none",
            duration: 0,
          })
        },
      },
    })

    gsap.to("#cards-section", {
      scrollTrigger: {
        trigger: "#cards-section",
        start: "bottom bottom",
        endTrigger: "#space-section",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      },
    })

    gsap.to(".pinned", {
      scrollTrigger: {
        trigger: "#cards-section",
        start: "bottom bottom",
        endTrigger: "#space-section",
        end: "20% bottom",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress
          const left = 35 + 15 * progress
          gsap.to(".revealer", {
            left: `${left}%`,
            ease: "none",
            duration: 0,
          })
        },
      },
    })

    gsap.to(".revealer", {
      scrollTrigger: {
        trigger: "#space-section",
        start: "top center",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const scale = 1 + 12 * self.progress

          gsap.to(".revealer", {
            scale,
            ease: "none",
            duration: 0,
          })
        },
      },
    })
  }, [])

  return (
    <section className="pinned absolute top-[100vh] z-[2] h-screen w-full">
      <div className="revealer absolute left-[35%] mt-[300px] h-[120px] w-[120px] -translate-x-[50%]">
        <div
          className="revealer-1 absolute left-0 top-0 h-full w-full bg-white"
          style={{
            clipPath: "polygon(45% 0%, 55% 0%, 55% 100%, 45% 100%)",
          }}
        />
        <div
          className="revealer-2 absolute left-0 top-0 h-full w-full rotate-90 bg-white"
          style={{
            clipPath: "polygon(45% 0%, 55% 0%, 55% 100%, 45% 100%)",
          }}
        />
      </div>
    </section>
  )
}
