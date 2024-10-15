"use client"

import { useEffect, useState } from "react"
import Cover from "@/app/assets/bg-2.png"
import Star from "@/app/assets/star.svg"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import Image from "next/image"
import { SyneFont } from "../fonts"

export default function HeroSection() {
  const [disableHoverEffect, setDisableHoverEffect] = useState(true)

  // /* Mouse Hover */
  useEffect(() => {
    const objects = document.querySelectorAll<HTMLElement>(".hero-image")

    function parallax(e: MouseEvent) {
      if (disableHoverEffect) return
      objects.forEach((object) => {
        const moving_value: number =
          Number(object.getAttribute("data-value")) || 0
        const x = (e.clientX * moving_value) / 200

        const y = (e.clientY * moving_value) / 200

        object.style.transform = `translateX(${x}px) translateY(${y}px)`
      })
    }

    document.addEventListener("mousemove", parallax)

    return () => {
      document.removeEventListener("mousemove", parallax)
    }
  }, [disableHoverEffect])

  // /* Hero Transition */
  useEffect(() => {
    const heroTimeline = gsap.timeline({
      defaults: {
        stagger: 0.15,
        delay: 2,
      },
      onComplete: () => {
        setDisableHoverEffect(false)
      },
    })

    heroTimeline.fromTo(
      ".hero-title",
      {
        scale: 0,
      },
      {
        scale: 1,
      }
    )

    heroTimeline.fromTo(
      ".awward-name",
      {
        x: 100,
      },
      {
        x: 0,
      },
      "-=2.5"
    )

    heroTimeline.fromTo(
      ".bar",
      {
        y: 100,
      },
      {
        y: 0,
      },
      "-=2.2"
    )
  }, [])

  // /* Scroll Trigger */
  useEffect(() => {
    gsap.to("#hero-section", {
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        endTrigger: "#cards-section",
        end: "top top",
        pin: true,
        scrub: true,
      },

      ease: "none",
    }) <=
      gsap.to(".hero-image", {
        scrollTrigger: {
          trigger: ".hero-wrapper",
          start: "50% bottom",

          end: "bottom bottom",
          scrub: true,
        },
        ease: "none",
        xPercent: -10,
      })

    gsap.to(".hero-title", {
      scrollTrigger: {
        trigger: ".hero-wrapper",
        start: "50% bottom",

        end: "bottom bottom",
        scrub: true,
      },
      ease: "none",
      yPercent: -160,
    })

    ScrollTrigger.create({
      trigger: ".hero-wrapper",
      start: "55% bottom",
      end: () => "+=100",
      scrub: true,
      onEnter: () => {
        setDisableHoverEffect(false)
        gsap.to(".header-icon", {
          scale: 0.5,
          rotate: 0,
          ease: "none",
          duration: 0.25,
        })
      },
      onLeave: () => {
        setDisableHoverEffect(true)
        gsap.to(".header-icon", {
          scale: 0.3,
          rotate: 180,
          ease: "none",
          duration: 0.25,
        })
      },
      onEnterBack: () => {
        setTimeout(() => {
          setDisableHoverEffect(false)
        }, 1200)

        gsap.to(".hero-image", {
          transform: "none",
        })
        gsap.to(".header-icon", {
          scale: 0.5,
          rotate: 0,
          ease: "none",
          duration: 0.25,
        })
      },
    })
  }, [])

  return (
    <section className="hero-wrapper relative z-[1] h-[200vh] w-full overflow-hidden">
      <div id="hero-section" className="absolute top-0 h-screen w-full">
        <Image
          alt="cover-image"
          src={Cover}
          priority
          data-value={-2}
          className="hero-image absolute -left-1/3 bottom-0 h-full object-contain"
        />

        <div className="absolute left-[33%] top-[27%] w-full max-w-3xl">
          <div className="hero-title text-[7.2rem] font-extrabold leading-[1] tracking-tighter text-white">
            <span className="mix-blend-difference">M</span>OTION
          </div>
          <div className="hero-title ml-[260px] text-[7.2rem] font-extrabold leading-[1] tracking-tighter text-white">
            SC
            <span className="title-stroke">AP</span>E
          </div>
          <div className="hero-title ml-[130px] text-[7.2rem] font-extrabold leading-[1] tracking-tighter text-white">
            G<span className="title-stroke">SA</span>P
          </div>
        </div>

        <div className="awward-name absolute right-0 top-1/2 flex w-10 -translate-y-1/2 flex-col items-center justify-between gap-8 bg-black px-2 py-4">
          <p className="text-lg font-semibold text-white" style={{}}>
            W.
          </p>
          <p className="text-sm font-semibold tracking-tighter text-white [writing-mode:vertical-lr]">
            ShinThant
          </p>
        </div>

        <div className="bar absolute bottom-0 flex h-auto w-full items-center gap-14 overflow-hidden bg-gray-900 px-20 py-1">
          <div
            className={cn(
              SyneFont.className,
              "flex-none text-[20px] font-extrabold text-white"
            )}
          >
            DISCUSS YOUR IDEA
          </div>

          <Image
            src={Star}
            className="h-7 w-7 object-contain"
            alt="star-icon"
          />

          <div
            className={cn(
              SyneFont.className,
              "flex-none text-[20px] font-extrabold text-white"
            )}
          >
            EXPEND VISION
          </div>

          <Image
            src={Star}
            className="h-7 w-7 object-contain"
            alt="star-icon"
          />

          <div
            className={cn(
              SyneFont.className,
              "flex-none text-[20px] font-extrabold text-white"
            )}
          >
            BE MOTIVATED
          </div>

          <Image
            src={Star}
            className="h-7 w-7 object-contain"
            alt="star-icon"
          />

          <div
            className={cn(
              SyneFont.className,
              "flex-none text-[20px] font-extrabold text-white"
            )}
          >
            ALIGN WITH PASSION
          </div>
        </div>
      </div>
    </section>
  )
}
