"use client"

import { useEffect } from "react"
import gsap from "gsap"

export default function ImagesSection() {
  /* Layout Transition */
  useEffect(() => {
    gsap.to("#images-section-container", {
      scrollTrigger: {
        trigger: "#images-section-container",
        start: "top top",
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

    gsap.to("#images-section-container", {
      scrollTrigger: {
        trigger: "#images-section-container",
        start: "bottom bottom",
        end: "bottom top",
        scrub: true,
        markers: true,
      },
      yPercent: 25,
      ease: "none",
    })
  }, [])

  /* Image Scroll */
  useEffect(() => {
    gsap.to(".left-section", {
      scrollTrigger: {
        trigger: "#images-section-container",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      yPercent: -200,
    })

    gsap.to(".right-section", {
      scrollTrigger: {
        trigger: "#images-section-container",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      yPercent: -140,
    })
  }, [])

  return (
    <section
      id="images-section-container"
      className="relative z-10 h-[400vh] bg-white"
    >
      <div className="images-section sticky top-0 h-screen origin-center scale-50 overflow-hidden">
        {/* Hero Content */}
        <div className="relative m-auto flex h-full items-center bg-orange-300 text-white">
          Hello World
        </div>

        {/* Images Left */}
        <div
          className="left-section absolute z-[1] p-14"
          style={{
            inset: "0% auto 0% 0%",
          }}
        >
          <div className="flex flex-col gap-[16vw] pt-[70vh] will-change-transform">
            <div className="relative w-[22vw] bg-red-200 pt-[120%]">Card 1</div>

            <div className="relative w-[22vw] bg-red-200 pt-[120%]">Card 2</div>

            <div className="relative left-[4vw] mt-[-10vw] w-[20vw] bg-red-200 pt-[120%]">
              Card 3
            </div>

            <div className="relative left-[64vw] top-[-73.4vw] mt-[-45vw] w-[20vw] bg-red-200 pt-[120%]">
              Card 4
            </div>

            <div className="relative left-[58vw] mt-[-75vw] w-[22vw] bg-red-200 pt-[120%]">
              Card 5
            </div>

            <div className="relative left-[64vw] mt-[-10vw] w-[20vw] bg-red-200 pt-[120%]">
              Card 6
            </div>
          </div>
        </div>

        {/* Images Right */}
        <div
          className="right-section absolute z-[0]"
          style={{
            inset: "0% 0% 0% auto",
          }}
        >
          <div className="flex flex-col gap-[16vw] pt-[70vh] will-change-transform">
            <div className="relative right-[60vw] top-[14vw] w-[18vw] bg-orange-500 pt-[120%] text-white opacity-75">
              Card 1
            </div>

            <div className="relative right-[58vw] mt-[5vw] w-[22vw] bg-orange-500 pt-[120%] text-white opacity-75">
              Card 2
            </div>

            <div className="relative right-[5vw] top-[-70vw] w-[20vw] bg-orange-500 pt-[120%] text-white opacity-75">
              Card 3
            </div>

            <div className="relative right-[15vw] top-[-80vw] w-[20vw] bg-orange-500 pt-[100%] text-white opacity-75">
              Card 4
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
