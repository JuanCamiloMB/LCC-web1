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
        end: "40% bottom",
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
          const scale = 1 + 30 * self.progress

          gsap.to(".revealer", {
            scale,
            ease: "power1.out",
          })
        },
      },
    })
  }, [])

  return (
    <section className="pinned absolute top-[120vh] z-[2] h-screen w-screen md:top-[100vh]">
      <div
        style={{
          aspectRatio: 1,
          clipPath: "polygon(50% 0,79% 90%,2% 35%,98% 35%,21% 90%)",
        }}
        className="revealer absolute left-[35%] mt-[300px] w-[80px] -translate-x-[50%] bg-white md:left-[35%] md:w-[140px] lg:w-[160px]"
      />
    </section>
  )
}
