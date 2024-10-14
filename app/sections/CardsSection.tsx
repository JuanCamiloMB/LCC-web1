"use client"

import { useEffect } from "react"
import gsap from "gsap"

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

    // gsap.to("#cards-section", {
    //   scrollTrigger: {
    //     trigger: "#cards-section",
    //     start: "top top",
    //     pin: true,
    //     scrub: true,
    //     endTrigger: "#about-section",
    //     end: "center bottom",
    //   },
    // })
  }, [])

  return (
    <section className="w-sc relative z-[1] mt-[-100vh]">
      <div
        id="cards-section"
        className="h-[100vh] w-full"
        style={{
          transform: "50% 0%",
        }}
      >
        <div className="absolute top-0 h-full w-svw bg-red-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
          excepturi! Repellendus obcaecati optio minima deleniti incidunt.
          Assumenda delectus perferendis corrupti, inventore perspiciatis
          explicabo libero quaerat aliquid. Exercitationem deserunt minima iste,
          repellendus ipsam expedita nam tenetur soluta labore maxime nemo
          dolore molestiae modi nisi eos hic rem pariatur blanditiis numquam
          aliquam vitae. Blanditiis ex explicabo in unde sed iure amet! Ut,
          minima? Iure amet quidem, sunt veniam ut ea omnis quo rerum hic
          consectetur ad molestias nesciunt velit voluptatum iste tempore soluta
          cumque. Dolores officia suscipit corporis laudantium tempora maiores
          cumque. Hic dolore ducimus aperiam esse assumenda nam perferendis
          consequuntur praesentium!
        </div>
      </div>
    </section>
  )
}
