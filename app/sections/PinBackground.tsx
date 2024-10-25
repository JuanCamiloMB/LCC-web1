"use client"

import { useEffect } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import SplitType from "split-type"
import { SchibstedFont } from "../fonts"

export default function PinBackground() {
  useEffect(() => {
    const pinBgDescription = new SplitType(".pin-bg-description", {
      types: "lines",
      tagName: "span",
      lineClass: "-translate-y-[100%]",
    })

    const pinBgDescription2 = new SplitType(".pin-bg-description-2", {
      types: "lines",
      tagName: "span",
      lineClass: "-translate-y-[100%]",
    })

    if (!pinBgDescription || !pinBgDescription2) return
    ;[...pinBgDescription.lines!, ...pinBgDescription2.lines!]?.forEach(
      (line) => {
        const wrapper = document.createElement("div")
        wrapper.classList.add("overflow-hidden")
        line.parentNode?.insertBefore(wrapper, line)
        wrapper.appendChild(line)
      }
    )

    gsap.to(".pin-bg-text", {
      scrollTrigger: {
        trigger: "#pin-content-section-1",
        start: "74% bottom",
        end: "bottom bottom",
        scrub: true,
        onEnter: () => {
          gsap.to(".pin-bg-text", {
            yPercent: 100,
          })

          const tl = gsap.timeline({
            defaults: {
              stagger: 0.05,
            },
          })
          tl.to(".pin-bg-description span", {
            yPercent: 100,
          })

          const tl2 = gsap.timeline({
            defaults: {
              stagger: 0.05,
            },
          })
          tl2.to(".pin-bg-description-2 span", {
            yPercent: 100,
          })
        },
        onLeaveBack: () => {
          gsap.to(".pin-bg-text", {
            yPercent: -100,
          })

          const tl = gsap.timeline({
            defaults: {
              stagger: 0.05,
            },
          })
          tl.to(".pin-bg-description span", {
            yPercent: -100,
          })

          const tl2 = gsap.timeline({
            defaults: {
              stagger: 0.05,
            },
          })
          tl2.to(".pin-bg-description-2 span", {
            yPercent: -100,
          })
        },
      },
    })
  }, [])

  /* Last Section */
  useEffect(() => {
    gsap.to("#pin-content-section-2", {
      scrollTrigger: {
        trigger: "#pin-content-section-2",
        start: "top top",
        end: "bottom top",

        onEnter: () => {
          gsap.to("#pin-content-section-2", {
            background: "#4338ca",
            // background: "#3730a3",
          })
        },
        onLeaveBack: () => {
          gsap.to("#pin-content-section-2", {
            background: "#000000",
          })
        },
      },
    })
  }, [])

  /* Last Section Text Animation */
  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#pin-content-section-2",
      start: "80% bottom",
      end: "bottom top",
      scrub: true,
      onEnter: () => {
        gsap.to(".last-text", {
          yPercent: 100,
        })
      },
      onLeaveBack: () => {
        gsap.to(".last-text", {
          yPercent: 0,
        })
      },
    })
  }, [])

  return (
    <>
      <section
        id="pin-content-section-1"
        className={cn(
          SchibstedFont.className,
          "relative z-10 flex h-[200vh] w-screen items-center bg-black px-[4%]"
        )}
      >
        <div className="mt-[50%] flex w-full items-start justify-between">
          <div className="flex w-[30%] flex-col gap-6">
            <div className="flex flex-col gap-1">
              <div className="overflow-hidden">
                <div className="pin-bg-text -translate-y-[100%] text-5xl font-medium leading-[1] tracking-wider text-white">
                  EXPLORE
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="pin-bg-text -translate-y-[100%] text-5xl font-medium leading-[1] text-indigo-400">
                  INDEX
                </div>
              </div>
            </div>

            <div className="pin-bg-description text-sm font-normal leading-[1.5] tracking-tight text-white">
              Step into a space where creativity meets technology, and
              innovation comes to life. Whether you&apos;re here to explore my
              journey as a developer, discover the projects I&apos;ve crafted,
              or connect with my thoughts on the latest trends, there&apos;s
              something for everyone.
            </div>
          </div>
          <div className="flex w-[30%] flex-col gap-6 pr-[2%]">
            <div className="overflow-hidden">
              <div className="pin-bg-text -translate-y-[100%] text-5xl font-medium tracking-wider text-white">
                ABOUT ME
              </div>
            </div>
            <div className="pin-bg-description-2 text-sm font-normal leading-[1.5] tracking-tight text-white">
              Dive into the story behind the code: my passion for technology,
              the skills I&apos;ve honed, and the experiences that have shaped
              my career. Discover my latest blog posts, tutorials, and insights.
              Whether it&apos;s solving tricky technical challenges or sharing
              industry trends, I love contributing to the developer community.
            </div>
            <div className="overflow-hidden">
              <div className="pin-bg-text -translate-y-[100%] text-sm font-medium uppercase tracking-tight text-indigo-300">
                keep scroll
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 flex w-full items-center gap-[30%] px-[4%]">
          <div className="flex w-full items-center justify-between">
            <div className="text-xs font-semibold tracking-tight text-white">
              Design.
            </div>
            <div className="text-xs font-semibold tracking-tight text-white">
              UI/UX.
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="text-xs font-semibold tracking-tight text-white">
              Animations.
            </div>
            <div className="text-xs font-semibold tracking-tight text-white">
              Transitions.
            </div>
          </div>
        </div>
      </section>

      <section
        id="pin-content-section-2"
        className="relative z-10 h-[200vh] w-screen bg-black px-4"
      >
        <div className="flex flex-col gap-10 pt-[60%]">
          <div className="flex items-end justify-start gap-8">
            <div className="overflow-hidden">
              <div className="last-text w-[60%] -translate-y-[100%] text-[200px] font-bold leading-[1] text-white">
                VISHION
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="overflow-hidden">
                <div className="last-text w-fit -translate-y-[100%] rounded-full border px-3 py-[6px] text-[12px] uppercase leading-[1] tracking-tight text-white">
                  Strategy
                </div>
              </div>

              <div className="overflow-hidden">
                <div className="last-text w-fit -translate-y-[100%] rounded-full border px-3 py-[6px] text-[12px] uppercase leading-[1] tracking-tight text-white">
                  Artistic Direction
                </div>
              </div>

              <div className="overflow-hidden">
                <div className="last-text w-fit -translate-y-[100%] rounded-full border px-3 py-[6px] text-[12px] uppercase leading-[1] tracking-tight text-white">
                  Methodology
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row-reverse items-end justify-start gap-8">
            <div className="overflow-hidden">
              <div className="last-text -translate-y-[100%] text-[200px] font-bold leading-[1] text-white">
                CRAFT
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="overflow-hidden">
                <div className="last-text w-fit -translate-y-[100%] rounded-full border px-3 py-[6px] text-[12px] uppercase leading-[1] tracking-tight text-white">
                  Strategy
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="last-text w-fit -translate-y-[100%] rounded-full border px-3 py-[6px] text-[12px] uppercase leading-[1] tracking-tight text-white">
                  Artistic Direction
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="last-text w-fit -translate-y-[100%] rounded-full border px-3 py-[6px] text-[12px] uppercase leading-[1] tracking-tight text-white">
                  Methodology
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-end justify-start gap-8">
            <div className="overflow-hidden">
              <div className="last-text -translate-y-[100%] text-[200px] font-bold leading-[1] text-white">
                TECH
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="overflow-hidden">
                <div className="last-text w-fit -translate-y-[100%] rounded-full border px-3 py-[6px] text-[12px] uppercase leading-[1] tracking-tight text-white">
                  Fullstack development
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="last-text w-fit -translate-y-[100%] rounded-full border px-3 py-[6px] text-[12px] uppercase leading-[1] tracking-tight text-white">
                  Creative coding
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="last-text w-fit -translate-y-[100%] rounded-full border px-3 py-[6px] text-[12px] uppercase leading-[1] tracking-tight text-white">
                  cms
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
