"use client"

import { useEffect } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { Ebgramond } from "../fonts"

export default function SliderSection() {
  useEffect(() => {
    gsap.to(".header-icon #inner-1,#inner-2,#path-1,#path-2", {
      scrollTrigger: {
        trigger: "#slider-cards-section",
        start: "top bottom",
        end: "bottom top",
      },
      fill: "black",
    })

    gsap.to("#slider-cards-section", {
      scrollTrigger: {
        trigger: "#slider-section",
        start: "top top",
        endTrigger: "#slider-space",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      },
    })

    gsap.to(".slider-cards-wrapper", {
      scrollTrigger: {
        trigger: "#slider-section",
        start: "top top",
        end: () => "+=800",
        scrub: true,
      },
      xPercent: -70,
    })
  }, [])

  /* Grid Animation */

  useEffect(() => {
    gsap.to(".grid-section", {
      scrollTrigger: {
        trigger: "#slider-cards-section",
        start: "center bottom",
        endTrigger: "#slider-section",
        end: "bottom top",
      },

      opacity: 1,
    })

    const tl = gsap.timeline()
    tl.to(".scaler", {
      duration: 1,
      scale: 1,

      ease: "power1.inOut",
      stagger: {
        amount: 1.5,
        grid: [12, 8],
        ease: "none",
        from: "center",
      },

      scrollTrigger: {
        trigger: "#slider-space",
        start: "60% bottom",
        end: "bottom bottom",
        scrub: true,
      },
    })

    tl.to(".grid-section", {
      scrollTrigger: {
        trigger: "#slider-space",
        start: "80% bottom",
        end: "bottom bottom",
        scrub: true,
      },
      zIndex: 3,
    })

    tl.to(".scaler-wrapper", {
      scrollTrigger: {
        trigger: "#slider-space",
        start: "80% bottom",
        end: "bottom bottom",
        scrub: true,
      },
      border: "transparent",
    })
  }, [])

  return (
    <>
      <section
        id="slider-section"
        className="relative z-10 h-screen w-screen overflow-hidden bg-white"
      >
        <div
          id="slider-cards-section"
          className="absolute top-0 z-[2] flex h-full w-full flex-col items-start gap-[12%] p-10"
        >
          <div
            className={cn(
              Ebgramond.className,
              "w-2/4 text-4xl font-bold text-black"
            )}
          >
            We don’t just design; we engineer your success by leveraging
            data-driven insights and creative innovation. We take ownership of
            your business.
          </div>
          <div className="slider-cards-wrapper ml-[65%] flex flex-nowrap items-center gap-4 overflow-visible">
            {[...new Array(5)].map((_, index) => {
              return (
                <div
                  key={index}
                  className={cn(
                    "card h-[450px] w-[300px] shrink-0 bg-indigo-600"
                  )}
                >
                  Card
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid-section absolute top-0 z-[1] grid h-full w-full grid-cols-12 grid-rows-8 opacity-0">
          {[...new Array(100)].map((_, index) => (
            <div
              key={index}
              className="scaler-wrapper col-span-1 h-full w-full border-[0.1px] border-gray-100"
            >
              <div className="scaler h-full w-full origin-center scale-0 bg-indigo-500" />
            </div>
          ))}
        </div>
      </section>

      <section id="slider-space" className="relative z-[-1] h-[150vh] w-full" />
    </>
  )
}
