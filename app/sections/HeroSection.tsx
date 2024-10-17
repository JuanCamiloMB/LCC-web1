"use client"

import { useEffect } from "react"
import Cover from "@/app/assets/bg-2.png"
import Star from "@/app/assets/star.svg"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import Image from "next/image"
import { SyneFont } from "../fonts"

export default function HeroSection() {
  // /* Mouse Hover */
  useEffect(() => {
    function parallax(e: MouseEvent) {
      const object = document.querySelector(".hero-image")
      if (!object) return
      const moving_value: number =
        Number(object.getAttribute("data-value")) || 0
      const x = (e.clientX * moving_value) / 200

      const y = (e.clientY * moving_value) / 200

      gsap.set(object, {
        x,
        y,
      })
    }

    document.addEventListener("mousemove", parallax)

    return () => {
      document.removeEventListener("mousemove", parallax)
    }
  }, [])

  // /* Hero Transition */
  useEffect(() => {
    const heroTimeline = gsap.timeline({
      defaults: {
        stagger: 0.15,
        delay: 2,
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
        end: "bottom top",
        scrub: true,
      },
      yPercent: 100,
      ease: "none",
    })

    gsap.to(".hero-image", {
      scrollTrigger: {
        trigger: "#hero-section",
        start: "30% bottom",
        end: "bottom top",
        scrub: true,
      },
      ease: "none",
      xPercent: -10,
    })

    gsap.to(".hero-title", {
      scrollTrigger: {
        trigger: "#hero-section",
        start: "30% bottom",
        end: "bottom top",
        scrub: true,
      },
      ease: "none",
      yPercent: -160,
    })

    gsap.to(".bar-section", {
      scrollTrigger: {
        trigger: "#hero-section",
        start: "20% top",
        end: "bottom top",
        scrub: true,
        markers: true,
      },
      ease: "power1.inOut",
      xPercent: -100,
    })

    ScrollTrigger.create({
      trigger: "#hero-section",
      start: "center center",
      end: () => "+=100",
      scrub: true,
      onEnter: () => {
        gsap.to(".header-icon", {
          scale: 0.3,
          rotate: 0,
          ease: "none",
          duration: 0.25,
        })
      },
      onLeave: () => {
        gsap.to(".header-icon", {
          scale: 0.3,
          rotate: 180,
          ease: "none",
          duration: 0.25,
        })
      },
      onEnterBack: () => {
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
    <section
      id="hero-section"
      className="relative h-screen w-full overflow-hidden"
    >
      <Image
        alt="cover-image"
        src={Cover}
        priority
        data-value={-4}
        className="hero-image absolute -left-[30%] bottom-0 h-full object-contain"
      />

      <div className="absolute left-[30%] top-[36%] w-full max-w-3xl">
        <div className="hero-title text-[7.2rem] font-extrabold leading-[1] tracking-tighter text-white mix-blend-difference">
          MOTION
        </div>
        <div className="hero-title ml-[260px] text-[7.2rem] font-extrabold leading-[1] tracking-tighter text-white">
          SC
          <span className="title-stroke">AP</span>E
        </div>
        <div className="hero-title ml-[130px] text-[7.2rem] font-extrabold leading-[1] tracking-tighter text-white">
          G<span className="title-stroke">SA</span>P
        </div>
      </div>

      <div className="bar absolute bottom-0 inline-flex h-auto w-full items-center overflow-hidden bg-gray-900 px-20 py-1">
        <div className="bar-section flex w-screen shrink-0 items-center gap-14">
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
        <div className="bar-section ml-[260px] flex w-screen shrink-0 items-center gap-14">
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
