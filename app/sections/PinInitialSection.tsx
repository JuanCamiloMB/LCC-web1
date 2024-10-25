"use client"

import { useEffect } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import SplitType from "split-type"
import { PoppinFont, reckoner } from "../fonts"

export default function PinInitialSection() {
  useEffect(() => {
    gsap.fromTo(
      "#pin-initial-section",
      {
        scale: 0.5,
        rotate: 20,
      },
      {
        scrollTrigger: {
          trigger: "#pin-initial-section",
          start: "10% bottom",
          end: "bottom bottom",
          scrub: true,
        },

        scale: 1,
        rotate: 0,
        ease: "slow(0.7,0.7,false)",
      }
    )

    gsap.to(".awward-name", {
      scrollTrigger: {
        trigger: "#pin-initial-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      background: "white",
    })

    gsap.to(".awward-text", {
      scrollTrigger: {
        trigger: "#pin-initial-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      color: "black",
    })

    const pinInitialDescription = new SplitType(".pin-initial-description", {
      types: "lines",
      tagName: "span",
    })

    pinInitialDescription.lines?.forEach((line) => {
      const wrapper = document.createElement("div")
      wrapper.classList.add("overflow-hidden")
      line.parentNode?.insertBefore(wrapper, line)
      wrapper.appendChild(line)
    })

    const pinInitialDescription2 = new SplitType(".pin-initial-description-2", {
      types: "lines",
      tagName: "span",
    })

    pinInitialDescription2.lines?.forEach((line) => {
      const wrapper = document.createElement("div")
      wrapper.classList.add("overflow-hidden")
      line.parentNode?.insertBefore(wrapper, line)
      wrapper.appendChild(line)
    })
  }, [])

  return (
    <section
      id="pin-initial-section"
      style={{
        transform: "50% 0%",
      }}
      className="relative h-[120vh] w-screen bg-black"
    >
      <section className="flex h-full w-full flex-col items-start gap-48 p-4">
        <div className="flex w-full items-center gap-4">
          <div className="flex w-full flex-col items-start">
            <p
              className={cn(
                reckoner.className,
                "text-9xl font-bold leading-[1] tracking-wide text-indigo-400"
              )}
            >
              DESIGN <span className="title-stroke">MAT</span>TERS
              <span className="title-stroke">.</span>
            </p>
            <p
              className={cn(
                reckoner.className,
                "text-lg font-medium tracking-tight text-gray-400"
              )}
            >
              design is not just what it looks like and feels like. design is
              how it works.
            </p>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-between gap-10 md:flex-row md:items-start">
          <div className="flex h-full flex-col items-end justify-between gap-10">
            <div className="flex w-full flex-col items-start gap-2">
              <div className="overflow-hidden">
                <div
                  className={cn(
                    reckoner.className,
                    "pin-initial-text text-lg font-medium text-gray-400"
                  )}
                >
                  By <span className="text-white">Shin</span> Thant.
                </div>
              </div>
              <div className="overflow-hidden">
                <div
                  className={cn(
                    reckoner.className,
                    "pin-initial-text text-[88px] font-extrabold leading-[1] text-white"
                  )}
                >
                  FIRST RELEASE.
                </div>
              </div>
              <div className="overflow-hidden">
                <div
                  className={cn(
                    reckoner.className,
                    "pin-initial-text w-fit bg-violet-500 px-8 py-1 text-lg font-medium text-white"
                  )}
                >
                  Cool Right?
                </div>
              </div>
            </div>

            <div
              className={cn(
                reckoner.className,
                "pin-initial-description text-lg tracking-widest text-white lg:w-[400px]"
              )}
            >
              Inspired by award-winning designs from Awwwards, it combines fluid
              motion and creative interactions to create an engaging user
              journey. Each page transition is crafted with meticulous attention
              to detail, enhancing the overall aesthetic and user experience.
            </div>
          </div>

          <div className="flex h-full flex-col items-start justify-between gap-10 pr-[5%]">
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center justify-between gap-16 overflow-hidden">
                <div
                  className={cn(
                    reckoner.className,
                    "pin-initial-text text-7xl font-bold italic text-indigo-400"
                  )}
                >
                  Version.
                </div>
                <div
                  className={cn(
                    reckoner.className,
                    "pin-initial-text text-7xl font-bold text-white"
                  )}
                >
                  O.1
                </div>
              </div>
              <div
                className={cn(
                  PoppinFont.className,
                  "pin-initial-description-2 max-w-[340px] text-xs font-medium text-gray-300"
                )}
              >
                Welcome to Motion Scape, where stunning animations and smooth
                transitions come to life! Powered by GSAP (GreenSock Animation
                Platform), we specialize in creating dynamic, engaging visuals
                that elevate user experience.
              </div>
            </div>

            <div
              className={cn(
                PoppinFont.className,
                "flex flex-col items-start gap-2 overflow-hidden text-white"
              )}
            >
              <div className="overflow-hidden">
                <div className="pin-initial-text relative text-3xl font-semibold tracking-tight lg:text-4xl">
                  IT IS MY ANIMATION
                  <div className="absolute bottom-0 h-[0.5px] w-full bg-gray-200" />
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="pin-initial-text relative text-3xl font-semibold tracking-tight lg:text-4xl">
                  JOURNEY
                  <div className="absolute bottom-0 h-[0.5px] w-full bg-gray-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
