"use client"

import { useEffect } from "react"
import Robot1 from "@/app/assets/robot-1.jpg"
import Robot2 from "@/app/assets/robot-2.jpg"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import Image from "next/image"
import { AfacadFont, AgdasimaFont, Ebgramond } from "../fonts"

export default function CardsSection() {
  useEffect(() => {
    gsap.fromTo(
      "#cards-section",
      {
        scale: 0.1,
        rotate: 20,
      },
      {
        scrollTrigger: {
          trigger: "#header-section",
          start: "top top",
          endTrigger: "#cards-section",
          end: "bottom bottom",
          scrub: true,
        },
        scale: 1,
        rotate: 0,
        ease: "power1.out",
      }
    )

    ScrollTrigger.create({
      trigger: ".pinned",
      start: "top center",
      endTrigger: ".whitespace",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
    })
  }, [])

  return (
    <section className="relative z-[1] mt-[-100vh] w-full">
      <div
        id="cards-section"
        className="h-[200vh] w-full bg-black"
        style={{
          transform: "50% 0%",
        }}
      >
        <div className="card-content relative top-0 z-10 flex h-screen w-full flex-col items-start gap-10 bg-black bg-red-300 p-4">
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <p
                className={cn(
                  AgdasimaFont.className,
                  "text-9xl font-bold tracking-wide text-indigo-400"
                )}
              >
                DESIGN <span className="title-stroke">MAT</span>TERS
                <span className="title-stroke">.</span>
              </p>
              <p
                className={cn(
                  AfacadFont.className,
                  "text-lg font-medium tracking-tight text-gray-400"
                )}
              >
                design is not just what it looks like and feels like. design is
                how it works.
              </p>
            </div>
          </div>

          <div className="flex w-full items-start justify-between">
            <div className="flex items-start gap-10">
              <div
                className={cn(
                  AgdasimaFont.className,
                  "text-4xl font-semibold text-gray-400 [writing-mode:vertical-lr]"
                )}
              >
                website is the window of your business. Keep it fresh, Great web
                design without functionality is like a sports car with no
                engine.
              </div>
              <div className="flex flex-col items-start">
                <Image
                  className="h-[400px] w-[200px] rounded-lg object-contain"
                  src={Robot1}
                  alt="robot-1"
                />
                <Image
                  className="h-[400px] w-[200px] rounded-lg object-contain"
                  src={Robot2}
                  alt="robot-2"
                />
              </div>
            </div>

            <div className="flex h-full flex-col pr-[5%]">
              <div className="flex flex-col">
                <div
                  className={cn(
                    AfacadFont.className,
                    "title-stroke text-[88px] font-extrabold leading-[1] tracking-tight"
                  )}
                >
                  MOTION SCAPE .
                </div>
                <div
                  className={cn(
                    AfacadFont.className,
                    "text-lg font-medium tracking-tight text-gray-400"
                  )}
                >
                  By <span className="text-white">Shin</span> Thant.
                </div>
              </div>

              <div
                className={cn(
                  Ebgramond.className,
                  "mt-[45%] w-[500px] text-xl text-white"
                )}
              >
                Inspired by award-winning designs from Awwwards, it combines
                fluid motion and creative interactions to create an engaging
                user journey. Each page transition is crafted with meticulous
                attention to detail, enhancing the overall aesthetic and user
                experience
              </div>
            </div>
          </div>
        </div>

        {/* <section className="pinned absolute top-0 z-[40] h-full w-full">
          <div className="revealer absolute left-[35%] h-[120px] w-[120px] -translate-x-[50%]">
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
        </section> */}
      </div>
    </section>
  )
}
