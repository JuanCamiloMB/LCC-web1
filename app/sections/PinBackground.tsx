"use client"

import { useEffect } from "react"
import Robot1 from "@/app/assets/robots/robot-6.jpg"
import Robot2 from "@/app/assets/robots/robot-7.jpg"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import Image from "next/image"
import { reckoner } from "../fonts"

export default function PinBackground() {
  useEffect(() => {
    gsap.fromTo(
      "#cards-section",
      {
        scale: 0.1,
        rotate: 20,
      },
      {
        scrollTrigger: {
          trigger: "#hero-section",
          start: "top top",
          endTrigger: "#cards-section",
          end: "center bottom",
          scrub: true,
        },
        scale: 1,
        rotate: 0,
        ease: "power1.out",
      }
    )

    gsap.to(".awward-name", {
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        endTrigger: "#cards-section",
        end: "center bottom",
        scrub: true,
      },
      background: "white",
    })

    gsap.to(".awward-text", {
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        endTrigger: "#cards-section",
        end: "center bottom",
        scrub: true,
      },
      color: "black",
    })

    gsap.to(".awward-text", {
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        endTrigger: "#cards-section",
        end: "center bottom",
        scrub: true,
      },
      color: "black",
    })

    gsap.to(".card-section-image", {
      scrollTrigger: {
        trigger: ".pinned",
        start: "top top",
        endTrigger: "#space-section",
        end: "top bottom",
        scrub: true,
      },
      scale: 1.2,
    })
  }, [])

  return (
    <section
      id="cards-section"
      style={{
        transform: "50% 0%",
      }}
      className="relative h-[300vh] w-screen bg-black md:h-[220vh]"
    >
      <div className="card-content flex h-full w-full flex-col items-start gap-20 p-4">
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

        <div className="flex w-full flex-col items-center justify-between md:flex-row md:items-start">
          <div className="flex w-full items-start gap-10">
            <div
              className={cn(
                reckoner.className,
                "text-4xl font-semibold text-gray-400 [writing-mode:vertical-lr]"
              )}
            >
              website is the window of your business. Keep it fresh, Great web
              design without functionality is like a sports car with no engine.
            </div>
            <div className="flex w-full flex-col items-start">
              <div
                style={{
                  clipPath: "inset(0 0 0 0)",
                }}
                className="h-[400px] w-full lg:w-[200px]"
              >
                <Image
                  className="card-section-image h-full w-full rounded-lg object-contain"
                  src={Robot1}
                  alt="robot-1"
                />
              </div>

              <div
                style={{
                  clipPath: "inset(0 0 0 0)",
                }}
                className="h-[400px] w-full lg:w-[200px]"
              >
                <Image
                  className="card-section-image h-full w-full rounded-lg object-contain"
                  src={Robot2}
                  alt="robot-2"
                />
              </div>
            </div>
          </div>

          <div className="flex h-full w-full flex-col items-start justify-between gap-10 md:pr-[2%]">
            <div className="flex w-full flex-col items-start gap-4">
              <div
                className={cn(
                  reckoner.className,
                  "text-lg font-medium text-gray-400"
                )}
              >
                By <span className="text-white">Shin</span> Thant.
              </div>
              <div
                className={cn(
                  reckoner.className,
                  "text-[88px] font-extrabold leading-[1] text-white"
                )}
              >
                FIRST RELEASE
              </div>
              <div
                className={cn(
                  reckoner.className,
                  "w-fit bg-violet-500 px-4 text-lg font-medium text-white"
                )}
              >
                Cool Right?
              </div>
            </div>

            <div
              className={cn(
                reckoner.className,
                "text-xl tracking-widest text-white lg:w-[500px]"
              )}
            >
              Inspired by award-winning designs from Awwwards, it combines fluid
              motion and creative interactions to create an engaging user
              journey. Each page transition is crafted with meticulous attention
              to detail, enhancing the overall aesthetic and user experience.
            </div>

            <div className="flex w-full items-center justify-between">
              <div
                className={cn(
                  reckoner.className,
                  "text-7xl font-bold italic text-indigo-400"
                )}
              >
                Version.
              </div>
              <div
                className={cn(
                  reckoner.className,
                  "text-8xl font-bold text-white"
                )}
              >
                O.1
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
