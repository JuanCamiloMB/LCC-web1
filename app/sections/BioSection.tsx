"use client"

import { useEffect } from "react"
import Cover from "@/app/assets/robots/robot-4.jpg"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import SplitType from "split-type"
import { PoppinFont } from "../fonts"

export default function BioSection() {
  /* Layout Transition */
  useEffect(() => {
    gsap.to("#bio-section-container", {
      scrollTrigger: {
        trigger: "#bio-section-container",
        start: "top top",
        endTrigger: "#images-section-container",
        end: "180px bottom",
        pin: true,
        pinSpacing: false,
        onLeaveBack: () => {
          gsap.to(".bio-section", {
            scale: 1,
          })
        },
        onEnter: () => {
          gsap.to(".bio-section", {
            scale: 0.5,
          })
        },
        onEnterBack: () => {
          gsap.to(".bio-section", {
            scale: 0.5,
          })
        },
      },
    })
  }, [])

  /* Page Transition */
  useEffect(() => {
    const bioText = new SplitType(".bio-text", {
      types: "lines",
      tagName: "span",
    })

    gsap.set(bioText.lines, {
      display: "inline-block",
    })

    const tl = gsap.timeline({
      defaults: {
        stagger: 0.2,
      },
    })

    tl.fromTo(
      bioText.lines,
      {
        xPercent: 30,
        opacity: 0,
      },
      {
        xPercent: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: "#bio-section-container",
          start: "40% bottom",
          end: "top top",
          scrub: true,
        },
      }
    )

    tl.fromTo(
      ".bio-image",
      {
        height: 0,
      },
      {
        height: 405,
        scrollTrigger: {
          trigger: "#bio-section-container",
          start: "40% bottom",
          end: "top top",
          scrub: true,
        },
      }
    )
  }, [])

  return (
    <section
      id="bio-section-container"
      className="relative z-20 h-screen w-screen bg-white"
    >
      <div className="bio-section h-full w-full origin-center bg-black p-5">
        <div
          className={cn(
            PoppinFont.className,
            "flex h-full w-full flex-col items-center gap-16 lg:flex-row"
          )}
        >
          <div className="relative flex h-full flex-1 flex-col items-center justify-center">
            <div className="absolute left-0 top-0 flex w-full items-center gap-28">
              <div className="text-xs font-semibold tracking-widest text-white">
                0001/
              </div>
              <div className="text-xs tracking-widest text-white">Project</div>
            </div>

            <div className="mt-10 w-full md:w-3/4 lg:mt-0">
              <Image
                alt="cover"
                src={Cover}
                className="bio-image mx-auto h-full rounded-md object-cover shadow-sm"
              />
            </div>
          </div>

          <div className="relative flex h-full w-full flex-col items-center justify-center lg:w-[40%] lg:pr-20">
            <div className="absolute left-0 top-0 flex w-full items-center gap-28">
              <div className="text-xs font-semibold tracking-widest text-white">
                0001/
              </div>
              <div className="text-xs tracking-widest text-white">Project</div>
            </div>

            <div className="mt-10 flex w-full flex-col items-start gap-10 lg:mt-0">
              <div className="bio-text overflow-hidden text-4xl text-white">
                We&apos;re building the future of home improvement, today.
              </div>
              <div className="bio-text hidden w-full overflow-hidden text-white md:block lg:w-[80%]">
                Emerging technologies like AI and spatial computing are
                collapsing the distance between our physical and digital worlds.
                Lowe&apos;s Innovation Labs is a multi-disciplinary team that
                explores how these technologies are evolving, how they&apos;re
                impacting our customers’ relationships with their homes and with
                retail, and changing how our associates do their jobs. In the
                process, we build foundations for the future: new products, tech
                capabilities, and business opportunities that enable Lowe&apos;s
                to better serve our customers.
              </div>
              <button className="hidden items-center gap-4 rounded-full bg-indigo-600 px-5 py-2 md:flex">
                <div className="text-xs text-white">Areas of Exploration</div>
                <ArrowRight className="text-white" size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
