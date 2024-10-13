"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import Cover from "./assets/bg-2.png"
import { Ebgramond } from "./fonts"

export default function Home() {
  return (
    <div className="h-auto w-full bg-[#4338ca]">
      <div className="relative h-screen w-full">
        <Image
          alt="cover-image"
          src={Cover}
          priority
          className="absolute -left-1/3 bottom-0 h-full object-contain transition-all"
        />

        <div className="absolute left-[33%] top-[27%] w-full max-w-3xl">
          <div className="text-[7.2rem] font-extrabold leading-[1] tracking-tighter text-white">
            <span className="mix-blend-difference">M</span>OTION
          </div>
          <div className="ml-[260px] text-[7.2rem] font-extrabold leading-[1] tracking-tighter text-white">
            SC
            <span className="title-stroke">AP</span>E
          </div>
          <div className="ml-[130px] text-[7.2rem] font-extrabold leading-[1] tracking-tighter text-white">
            G<span className="title-stroke">SA</span>P
          </div>
        </div>

        <div
          className={cn(
            Ebgramond.className,
            "absolute bottom-0 left-1/2 -translate-x-1/2 uppercase tracking-wider text-white"
          )}
        >
          Animation make me motivate.
        </div>
      </div>
    </div>
  )
}
