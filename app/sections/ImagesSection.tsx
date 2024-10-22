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
      <div className="images-section sticky left-0 top-0 h-screen origin-center scale-50 overflow-hidden bg-black">
        {/* Hero Content */}
        <div className="relative left-0 top-0 z-[2] flex h-full flex-col items-center justify-center gap-10">
          <div
            className={cn(
              PoppinFont.className,
              "max-w-[30%] text-center text-7xl font-extrabold tracking-wide text-indigo-200"
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
              View On Github
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
            <div className="relative h-[400px] w-[22vw] overflow-hidden rounded-md bg-white">
              <Image
                src={Image1}
                className="h-full w-full object-cover"
                alt="card-1-image"
              />
            </div>

            <div className="relative h-[400px] w-[22vw] overflow-hidden rounded-md bg-white">
              <Image
                src={Image2}
                className="h-full w-full object-cover"
                alt="card-2-image"
              />
            </div>

            <div className="relative left-[4vw] mt-[-10vw] h-[400px] w-[20vw] overflow-hidden rounded-md bg-white">
              <Image
                src={Image3}
                className="h-full w-full object-cover"
                alt="card-3-image"
              />
            </div>

            <div className="verflow-hidden relative left-[64vw] top-[-73.4vw] mt-[-45vw] h-[400px] w-[20vw] rounded-md bg-white">
              <Image
                src={Image4}
                className="h-full w-full object-cover"
                alt="card-4-image"
              />
            </div>

            <div className="relative left-[58vw] mt-[-75vw] h-[400px] w-[22vw] overflow-hidden rounded-md bg-white">
              <Image
                src={Image5}
                className="h-full w-full object-cover"
                alt="card-5-image"
              />
            </div>

            <div className="relative left-[64vw] mt-[-10vw] h-[400px] w-[20vw] overflow-hidden rounded-md bg-white">
              <Image
                src={Image6}
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
            <div className="relative right-[60vw] top-[14vw] h-[400px] w-[18vw] overflow-hidden rounded-md bg-orange-500 text-white opacity-75">
              <Image
                src={Image7}
                className="h-full w-full object-cover"
                alt="card-7-image"
              />
            </div>

            <div className="relative right-[58vw] mt-[5vw] h-[400px] w-[22vw] overflow-hidden rounded-md bg-orange-500 text-white opacity-75">
              <Image
                src={Image8}
                className="h-full w-full object-cover"
                alt="card-8-image"
              />
            </div>

            <div className="relative right-[5vw] top-[-70vw] h-[400px] w-[20vw] overflow-hidden rounded-md bg-orange-500 text-white opacity-75">
              <Image
                src={Image9}
                className="h-full w-full object-cover"
                alt="card-9-image"
              />
            </div>

            <div className="relative right-[15vw] top-[-80vw] h-[360px] w-[20vw] overflow-hidden rounded-md bg-orange-500 text-white opacity-75">
              <Image
                src={Image10}
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
