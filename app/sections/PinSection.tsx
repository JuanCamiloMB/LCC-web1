"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import SplitType from "split-type"

gsap.registerPlugin(ScrollTrigger)

const images = [
  "https://media1.tenor.com/m/FDTJutYHbe4AAAAC/src-src-nft.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWY1NnF3bWFraW5peXBocWl5c2tocDBjNXFldWIzM2J1c2ZrdG9oOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6hu26DVZ0Hvk4IXkIN/giphy.webp",
  "https://media1.tenor.com/m/1lRrrfpbzFcAAAAd/robot-chase.gif",
]

export default function PinSection() {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  /* Box Scale Animation */
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

    gsap.to(".pin-box", {
      scaleX: 0.9,
      scaleY: 1.7,
      ease: "none",
      duration: 5,
      immediateRender: false,
      scrollTrigger: {
        trigger: "#pin-content-section-1",
        start: "32% bottom",
        end: "80% bottom",
        scrub: true,
      },
    })

    let mm = gsap.matchMedia()

    /* Desktop */
    mm.add("(min-width: 800px)", () => {
      gsap.to(".pin-box", {
        scaleX: 1.4,
        scaleY: 1.2,
        ease: "none",
        duration: 5,

        immediateRender: false,
        scrollTrigger: {
          trigger: "#pin-content-section-2",
          start: "32% bottom",
          end: "80% bottom",
          scrub: true,
        },
      })
    })

    mm.add("(min-width: 800px)", () => {
      gsap.to(".pin-box", {
        scrollTrigger: {
          trigger: "#space-section",
          start: "20% bottom",
          end: "bottom top",
          scrub: true,
          immediateRender: false,

          onUpdate: (self) => {
            const scale = 1 + 10 * self.progress

            gsap.to(".pin-box", {
              scale,
              ease: "none",
            })
          },
        },
      })
    })

    /* Mobile */
    mm.add("(max-width: 799px)", () => {
      gsap.to(".pin-box", {
        scaleX: 0.9,
        scaleY: 1.9,
        ease: "none",
        duration: 5,
        immediateRender: false,
        scrollTrigger: {
          trigger: "#pin-content-section-2",
          start: "32% bottom",
          end: "80% bottom",
          scrub: true,
        },
      })
    })

    mm.add("(max-width: 799px)", () => {
      gsap.to(".pin-box", {
        scrollTrigger: {
          trigger: "#space-section",
          start: "20% bottom",
          end: "bottom top",
          scrub: true,
          immediateRender: false,
          // onUpdate: (self) => {
          //   const scale = 20 * self.progress

          //   gsap.to(".pin-box", {
          //     scale,
          //     ease: "none",
          //   })
          // },
        },
        ease: "none",
        scaleX: 4,
        scaleY: 20,
      })
    })
  }, [])

  /* Box Slider Animation */
  useEffect(() => {
    gsap.to("#slider-1", {
      scrollTrigger: {
        trigger: "#pin-content-section-1",
        start: "30% bottom",
        end: "50% bottom",
        scrub: true,
        onLeave: () => {
          setActiveImageIndex(1)
        },
        onLeaveBack: () => {
          setActiveImageIndex(0)
        },
      },
      height: "100%",
    })

    gsap.to("#slider-1", {
      scrollTrigger: {
        trigger: "#pin-content-section-1",
        start: "70% bottom",
        end: "bottom bottom",
        scrub: true,
      },
      yPercent: -100,
    })

    gsap.to("#slider-2", {
      scrollTrigger: {
        trigger: "#pin-content-section-2",
        start: "20% bottom",
        end: "40% bottom",
        scrub: true,
        onLeave: () => {
          setActiveImageIndex(2)
        },
        onLeaveBack: () => {
          setActiveImageIndex(1)
        },
      },
      height: "100%",
    })

    gsap.to("#slider-2", {
      scrollTrigger: {
        trigger: "#pin-content-section-2",
        start: "70% bottom",
        end: "bottom bottom",
        scrub: true,
      },
      yPercent: -100,
    })

    gsap.to("#slider-3", {
      scrollTrigger: {
        trigger: "#space-section",
        start: "5% bottom",
        end: "25% bottom",
        scrub: true,
      },
      height: "100%",
    })
  }, [])

  /* Content Animation 1 */
  useEffect(() => {
    /* Content Intro */
    const pinContentDescripton1 = new SplitType("#pin-content-description-1", {
      types: "lines",
      tagName: "span",
      lineClass: "translate-y-[100%]",
    })

    if (!pinContentDescripton1.lines) return
    ;[...pinContentDescripton1.lines]?.forEach((line) => {
      const wrapper = document.createElement("div")
      wrapper.classList.add("overflow-hidden")
      line.parentNode?.insertBefore(wrapper, line)
      wrapper.appendChild(line)
    })

    gsap.to(["#pin-content-text-1"], {
      scrollTrigger: {
        trigger: "#pin-content-section-1",
        start: "70% bottom",
        end: "bottom bottom",
        scrub: true,
      },
      yPercent: -100,
    })

    gsap.to(pinContentDescripton1.lines, {
      scrollTrigger: {
        trigger: "#pin-content-section-1",
        start: "70% bottom",
        end: "bottom bottom",
        scrub: true,
      },
      yPercent: -100,
    })
    /* Content Intro */

    /* Content Leave */
    gsap.to("#content-section", {
      scrollTrigger: {
        trigger: "#pin-content-section-2",
        start: "32% bottom",
        end: "70% bottom",
        scrub: true,
      },
      ease: "none",
      yPercent: -300,
    })
    /* Content Leave */
  }, [])

  /* Content Animation 2 */
  useEffect(() => {
    /* Content Intro */
    const pinContentDescripton2 = new SplitType("#pin-content-description-2", {
      types: "lines",
      tagName: "span",
      lineClass: "translate-y-[100%]",
    })

    if (!pinContentDescripton2.lines) return
    ;[...pinContentDescripton2.lines]?.forEach((line) => {
      const wrapper = document.createElement("div")
      wrapper.classList.add("overflow-hidden")
      line.parentNode?.insertBefore(wrapper, line)
      wrapper.appendChild(line)
    })

    gsap.to(["#pin-content-text-2"], {
      scrollTrigger: {
        trigger: "#pin-content-section-2",
        start: "70% bottom",
        end: "bottom bottom",
        scrub: true,
      },
      yPercent: -100,
    })

    gsap.to(pinContentDescripton2.lines, {
      scrollTrigger: {
        trigger: "#pin-content-section-2",
        start: "70% bottom",
        end: "bottom bottom",
        scrub: true,
      },
      yPercent: -100,
    })
    /* Content Intro */

    /* Content Leave */
    gsap.to("#content-section-2", {
      scrollTrigger: {
        trigger: "#space-section",
        start: "20% bottom",
        end: "80% bottom",
        scrub: true,
      },
      ease: "none",
      yPercent: -300,
    })
    /* Content Leave */
  }, [])

  return (
    <section className="pinned absolute top-[100vh] z-20 h-screen w-screen md:top-[100vh]">
      {/* Box */}
      <div className="pin-box absolute left-1/2 top-[10%] z-10 h-[160px] w-[200px] -translate-x-1/2 scale-100 overflow-hidden border-[1px] border-white bg-white shadow-md md:top-1/2 md:h-[260px] md:w-[300px] md:-translate-y-1/2">
        <div className="pin-gif-wrapper absolute left-0 top-0 z-[5] h-full w-full">
          {images.map((src, index) => (
            <img
              key={index}
              alt={`pin-gif-${index + 1}`}
              className={cn(`pin-gif-${index + 1} h-full w-full`, {
                hidden: activeImageIndex !== index,
              })}
              src={src}
            />
          ))}
        </div>
        {/* Slider */}
        <div
          id="slider-1"
          className="absolute bottom-0 right-0 z-10 h-0 w-full bg-white"
        />
        <div
          id="slider-2"
          className="absolute bottom-0 right-0 z-10 h-0 w-full bg-white"
        />

        <div
          id="slider-3"
          className="absolute bottom-0 right-0 z-10 h-0 w-full bg-white"
        />

        {/* Slider */}
      </div>
      {/* Box */}

      {/* Content */}
      <div className="absolute left-0 top-0 mt-[40%] flex h-full w-full items-center justify-center md:mt-0">
        <div
          id="content-section"
          className="h-fit w-full max-w-[85%] md:max-w-[95%]"
        >
          <div className="flex w-full flex-col items-center justify-between gap-20 md:flex-row">
            <div className="flex w-full flex-col gap-6 md:w-[30%]">
              <div className="flex flex-col gap-1">
                <div className="overflow-hidden">
                  <div
                    id="pin-content-text-1"
                    className="translate-y-[100%] text-5xl font-medium leading-[1] tracking-wider text-white"
                  >
                    EXPLORE
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div
                    id="pin-content-text-1"
                    className="translate-y-[100%] text-5xl font-medium leading-[1] text-indigo-400"
                  >
                    INDEX
                  </div>
                </div>
              </div>

              <div
                id="pin-content-description-1"
                className="text-sm font-normal leading-[1.5] tracking-tight text-white"
              >
                Step into a space where creativity meets technology, and
                innovation comes to life. Whether you&apos;re here to explore my
                journey as a developer, discover the projects I&apos;ve crafted.
              </div>
            </div>

            <div className="flex w-full flex-col gap-6 pr-[2%] md:w-[30%]">
              <div className="overflow-hidden">
                <div
                  id="pin-content-text-1"
                  className="translate-y-[100%] text-5xl font-medium tracking-wider text-white"
                >
                  ABOUT ME
                </div>
              </div>
              <div
                id="pin-content-description-1"
                className="pin-bg-description-2 text-sm font-normal leading-[1.5] tracking-tight text-white"
              >
                Dive into the story behind the code: my passion for technology,
                the skills I&apos;ve honed, and the experiences that have shaped
                my career. Discover my latest blog posts, tutorials, and
                insights.
              </div>
              <div className="overflow-hidden">
                <div
                  id="pin-content-text-1"
                  className="translate-y-[100%] text-sm font-medium uppercase tracking-tight text-indigo-300"
                >
                  keep scroll
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-0 top-0 mt-[40%] flex h-full w-full items-center justify-center md:mt-0">
        <div
          id="content-section-2"
          className="h-fit w-full max-w-[85%] md:max-w-[95%]"
        >
          <div className="flex flex-col items-center justify-between gap-20 md:flex-row">
            <div className="flex w-full flex-col gap-6 md:w-[30%]">
              <div className="flex flex-col gap-1">
                <div className="overflow-hidden">
                  <div
                    id="pin-content-text-2"
                    className="translate-y-[100%] text-5xl font-medium leading-[1] tracking-wider text-white"
                  >
                    INSPIRE
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div
                    id="pin-content-text-2"
                    className="translate-y-[100%] text-5xl font-medium leading-[1] text-indigo-400"
                  >
                    ACT.
                  </div>
                </div>
              </div>

              <div
                id="pin-content-description-2"
                className="text-sm font-normal leading-[1.5] tracking-tight text-white"
              >
                Embrace the journey of continuous development and improvement.
                Each day, challenge yourself to learn something new, no matter
                how small. Set clear goals and celebrate every step forward,
                building momentum with each achievement.
              </div>
            </div>

            <div className="flex w-full flex-col gap-6 pr-[2%] md:w-[30%]">
              <div className="overflow-hidden">
                <div
                  id="pin-content-text-2"
                  className="translate-y-[100%] text-5xl font-medium tracking-wider text-white"
                >
                  IMPROVE
                </div>
              </div>
              <div
                id="pin-content-description-2"
                className="text-sm font-normal leading-[1.5] tracking-tight text-white"
              >
                Stay curious, stay resilient, and never underestimate the power
                of consistent effort. Every improvement, every new skill, brings
                you closer to the best version of yourself.
              </div>
              <div className="overflow-hidden">
                <div
                  id="pin-content-text-2"
                  className="translate-y-[100%] text-sm font-medium uppercase tracking-tight text-indigo-300"
                >
                  KEEP DOING
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Content */}
    </section>
  )
}
