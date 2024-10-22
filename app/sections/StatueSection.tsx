"use client"

import { useEffect } from "react"
import RobotStatue from "@/app/assets/freepik-export-20241021055021nyHF.png"
import RobotStatueBg from "@/app/assets/futuristic-female-robot-background.jpg"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import Image from "next/image"
import SplitType from "split-type"
import { reckoner } from "../fonts"

export default function StatueSection() {
  /* Texts */
  useEffect(() => {
    const text = new SplitType(".statue-text", {
      types: "chars",
      tagName: "span",
    })

    gsap.set(text.chars, {
      yPercent: 500,
    })

    const tl = gsap.timeline({
      defaults: {
        stagger: 5,
      },
    })

    tl.to(text.chars, {
      yPercent: 0,
      scrollTrigger: {
        trigger: "#statue-text-section",
        start: "top bottom",
        endTrigger: "#statue-section",
        end: "60% bottom",
        scrub: true,
      },
      duration: 40.5,
    })

    gsap.to("#statue-text-section", {
      scrollTrigger: {
        trigger: "#statue-section",
        start: "60% bottom",
        endTrigger: "#statue-section",
        end: "bottom top",
        scrub: true,
      },
      xPercent: -100,
    })

    gsap.to("#statue-text-section", {
      scrollTrigger: {
        trigger: "#statue-text-section",
        start: "top top",
        endTrigger: "#statue-section",
        end: "bottom bottom",
        pin: true,
      },
    })
  }, [])

  /* Description */
  useEffect(() => {
    gsap.to("#statue-description-section", {
      scrollTrigger: {
        trigger: "#statue-description-section",
        start: "top top",
        endTrigger: "#statue-section",
        end: "bottom bottom",
        pin: true,
      },
    })

    const statueDescriptionText = new SplitType(".statue-description", {
      types: "chars",
      tagName: "span",
    })

    const statueDescriptionTl = gsap.timeline({
      defaults: {
        stagger: 40,
      },
    })

    const statueDescriptionTextWrapper = document.querySelector(
      ".statue-description"
    )
    const statueDescriptionTextWrapperWidth =
      statueDescriptionTextWrapper?.clientWidth || 0

    gsap.set(statueDescriptionText.chars, {
      x: statueDescriptionTextWrapperWidth,
    })

    statueDescriptionTl.to(statueDescriptionText.chars, {
      x: 0,
      duration: 100,
      scrollTrigger: {
        trigger: "#statue-section",
        start: "55% bottom",
        end: "65% bottom",
        scrub: true,
      },
    })
  }, [])

  /* Statue & Background */
  useEffect(() => {
    gsap.to(["#statue-section", "#statue-robot-section"], {
      scrollTrigger: {
        trigger: "#statue-text-section",
        start: "80% bottom",
        end: "bottom bottom",

        onEnter: () => {
          gsap.to(["#statue-section", "#statue-robot-section"], {
            opacity: 1,
          })
        },
        onEnterBack: () => {
          gsap.to(["#statue-section", "#statue-robot-section"], {
            opacity: 0,
          })
        },
      },
      opacity: 1,
    })
  }, [])

  return (
    <>
      <section
        id="statue-text-section"
        className="absolute left-0 top-[780vh] z-30 h-screen w-full p-5"
      >
        <div
          className={cn(
            reckoner.className,
            "statue-text h-screen w-screen text-[200px] font-extrabold leading-[1] tracking-wider text-white"
          )}
        >
          LIVE WITH YR DREAM
        </div>
      </section>

      <section
        id="statue-description-section"
        className="absolute left-0 top-[780vh] z-[41] h-screen w-full"
      >
        <div
          className={cn(
            reckoner.className,
            "statue-description absolute left-1/2 top-1/2 w-fit -translate-x-1/2 -translate-y-1/2 overflow-hidden text-4xl tracking-wide text-white"
          )}
        >
          LIVE WITH YOUR DREAM
        </div>
      </section>

      <section
        id="statue-section"
        className="relative z-20 h-[420vh] w-full px-5 text-9xl text-white opacity-0"
      >
        <Image
          priority
          alt="robot-statue"
          className="absolute left-0 top-0 h-full w-full object-cover"
          src={RobotStatueBg}
        />
      </section>

      <section
        id="statue-robot-section"
        className="absolute left-0 top-[780vh] z-40 h-[420vh] w-full opacity-0"
      >
        <Image
          priority
          alt="robot-statue"
          className="absolute left-0 top-0 h-full w-full object-cover"
          src={RobotStatue}
        />
      </section>
    </>
  )
}
