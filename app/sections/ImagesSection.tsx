"use client"

import { useEffect } from "react"
import Image1 from "@/app/assets/kid-robot/robot-1.jpg"
import Image2 from "@/app/assets/kid-robot/robot-2.jpg"
import Image3 from "@/app/assets/kid-robot/robot-3.jpg"
import Image4 from "@/app/assets/kid-robot/robot-4.jpg"
import Image5 from "@/app/assets/kid-robot/robot-5.jpg"
import Image6 from "@/app/assets/kid-robot/robot-6.jpg"
import Image7 from "@/app/assets/kid-robot/robot-7.jpg"
import Image8 from "@/app/assets/kid-robot/robot-8.jpg"
import Image9 from "@/app/assets/kid-robot/robot-9.jpg"
import Image10 from "@/app/assets/kid-robot/robot-10.jpg"
import { cn } from "@/lib/utils"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import gsap from "gsap"
import Image from "next/image"
import { AfacadFont, PoppinFont } from "../fonts"

const GITHUB_REPO = process.env.GITHUB_REPO

export default function ImagesSection() {
  /* Layout Transition */
  useEffect(() => {
    gsap.to("#images-section-container", {
      scrollTrigger: {
        trigger: "#images-section-container",
        start: "top top",
        end: "bottom bottom",

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
      className="relative z-[31] h-[400vh] w-screen bg-white"
    >
      <div className="images-section sticky left-0 top-0 z-50 h-screen origin-center scale-50 overflow-hidden bg-black">
        {/* Hero Content */}
        <div className="relative left-0 top-0 flex h-full flex-col items-center justify-center gap-10">
          <div
            className={cn(
              PoppinFont.className,
              "max-w-[80%] text-center text-5xl font-extrabold tracking-wide text-indigo-300 md:max-w-[30%] md:text-7xl"
            )}
          >
            Made With Passion
          </div>
          <button
            className={cn(
              "flex items-center gap-4 rounded-lg bg-gray-600 px-6 py-2 text-white"
            )}
          >
            <a
              href={GITHUB_REPO}
              aria-label="github-repo"
              target="_blank"
              rel="noreferrer"
              className={cn(
                "text-sm font-medium tracking-tight",
                AfacadFont.className
              )}
            >
              Star On Github
            </a>
            <GitHubLogoIcon />
          </button>
        </div>

        {/* Images Left */}
        <div
          className="left-section absolute z-[1] p-14"
          style={{
            inset: "0% auto 0% 0%",
          }}
        >
          <div className="flex flex-col gap-[16vw] pt-[70vh] will-change-transform">
            <div className="relative h-[200px] w-[50vw] overflow-hidden rounded-md lg:h-[400px] lg:w-[22vw]">
              <Image
                src={Image1}
                priority
                className="h-full w-full object-cover"
                alt="card-1-image"
              />
            </div>

            <div className="relative h-[200px] w-[50vw] overflow-hidden rounded-md lg:h-[400px] lg:w-[22vw]">
              <Image
                src={Image2}
                priority
                className="h-full w-full object-cover"
                alt="card-2-image"
              />
            </div>

            <div className="relative left-1 mt-[5vw] h-[200px] w-[40vw] overflow-hidden rounded-md md:left-[4vw] md:mt-[-10vw] lg:h-[400px] lg:w-[20vw]">
              <Image
                src={Image3}
                priority
                className="h-full w-full object-cover"
                alt="card-3-image"
              />
            </div>

            <div className="relative left-[55vw] top-[-120vw] mt-[-45vw] h-[200px] w-[40vw] overflow-hidden rounded-md md:left-[64vw] md:top-[-73.4vw] lg:h-[400px] lg:w-[20vw]">
              <Image
                src={Image4}
                priority
                className="h-full w-full object-cover"
                alt="card-4-image"
              />
            </div>

            <div className="relative left-[58vw] mt-[-75vw] h-[200px] w-[50vw] overflow-hidden rounded-md lg:h-[400px] lg:w-[22vw]">
              <Image
                src={Image5}
                priority
                className="h-full w-full object-cover"
                alt="card-5-image"
              />
            </div>

            <div className="relative left-[64vw] mt-[-10vw] h-[200px] w-[40vw] overflow-hidden rounded-md lg:h-[400px] lg:w-[20vw]">
              <Image
                src={Image6}
                priority
                className="h-full w-full object-cover"
                alt="card-6-image"
              />
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
            <div className="relative right-[60vw] top-[14vw] h-[200px] w-[18vw] overflow-hidden rounded-md text-white opacity-75 lg:h-[400px]">
              <Image
                src={Image7}
                priority
                className="h-full w-full object-cover"
                alt="card-7-image"
              />
            </div>

            <div className="relative right-[58vw] mt-[5vw] h-[100px] w-[50vw] overflow-hidden rounded-md text-white opacity-75 lg:h-[400px] lg:w-[22vw]">
              <Image
                src={Image8}
                priority
                className="h-full w-full object-cover"
                alt="card-8-image"
              />
            </div>

            <div className="relative right-[5vw] top-[-70vw] h-[100px] w-[40vw] overflow-hidden rounded-md text-white opacity-75 lg:h-[400px] lg:w-[20vw]">
              <Image
                src={Image9}
                priority
                className="h-full w-full object-cover"
                alt="card-9-image"
              />
            </div>

            <div className="relative right-[15vw] top-[-80vw] h-[200px] w-[40vw] overflow-hidden rounded-md text-white opacity-75 lg:h-[360px] lg:w-[20vw]">
              <Image
                src={Image10}
                priority
                className="h-full w-full object-cover"
                alt="card-10-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
