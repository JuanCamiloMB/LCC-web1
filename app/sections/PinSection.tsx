"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"

const images = [
  "https://media1.tenor.com/m/FDTJutYHbe4AAAAC/src-src-nft.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWY1NnF3bWFraW5peXBocWl5c2tocDBjNXFldWIzM2J1c2ZrdG9oOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6hu26DVZ0Hvk4IXkIN/giphy.webp",
  "https://media1.tenor.com/m/1lRrrfpbzFcAAAAd/robot-chase.gif",
]

export default function PinSection() {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  /* Box Scroll Animation */
  // useEffect(() => {
  //   gsap.to(".pinned", {
  //     scrollTrigger: {
  //       trigger: ".pinned",
  //       start: "top top",
  //       endTrigger: "#space-section",
  //       end: "bottom top",
  //       pin: true,
  //       pinSpacing: false,
  //     },
  //   })

  //   gsap.to(".pin-box", {
  //     scrollTrigger: {
  //       trigger: "#pin-content-section-1",
  //       start: "40% bottom",
  //       end: "top top",
  //       scrub: true,
  //       onEnter: () => {
  //         gsap.to(".pin-box", {
  //           width: 290,
  //           height: 380,
  //         })
  //       },
  //       onLeaveBack: () => {
  //         gsap.to(".pin-box", {
  //           width: 300,
  //           height: 260,
  //         })
  //       },
  //     },
  //   })

  //   gsap.to(".pin-box", {
  //     scrollTrigger: {
  //       trigger: "#pin-content-section-2",
  //       start: "50% bottom",
  //       end: "bottom bottom",
  //       scrub: true,
  //       onEnter: () => {
  //         gsap.to(".pin-box", {
  //           width: 380,
  //           height: 250,
  //         })
  //       },
  //       onLeaveBack: () => {
  //         gsap.to(".pin-box", {
  //           width: 290,
  //           height: 380,
  //         })
  //       },
  //     },
  //   })

  //   gsap.to(".pin-box", {
  //     scrollTrigger: {
  //       trigger: "#space-section",
  //       start: "55% bottom",
  //       end: "bottom top",
  //       scrub: true,
  //       onUpdate: (self) => {
  //         const scale = 1 + 10 * self.progress

  //         gsap.to(".pin-box", {
  //           scale,
  //           ease: "power1.out",
  //         })
  //       },
  //     },
  //   })
  // }, [])
  useEffect(() => {
    const isMobile = window.innerWidth <= 768 // Set a threshold for mobile (e.g., 768px)

    // Adjust scroll animations for desktop
    gsap.to(".pinned", {
      scrollTrigger: {
        trigger: ".pinned",
        start: "top top",
        endTrigger: "#space-section",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      },
    })

    gsap.to(".pin-box", {
      scrollTrigger: {
        trigger: "#pin-content-section-1",
        start: "40% bottom",
        end: "top top",
        scrub: true,
        onEnter: () => {
          gsap.to(".pin-box", {
            width: isMobile ? 200 : 290, // Adjust width for mobile
            height: isMobile ? 280 : 380, // Adjust height for mobile
          })
        },
        onLeaveBack: () => {
          gsap.to(".pin-box", {
            width: isMobile ? 210 : 300,
            height: isMobile ? 240 : 260,
          })
        },
      },
    })

    gsap.to(".pin-box", {
      scrollTrigger: {
        trigger: "#pin-content-section-2",
        start: "50% bottom",
        end: "bottom bottom",
        scrub: true,
        onEnter: () => {
          gsap.to(".pin-box", {
            width: isMobile ? 300 : 380,
            height: isMobile ? 220 : 250,
          })
        },
        onLeaveBack: () => {
          gsap.to(".pin-box", {
            width: isMobile ? 200 : 290,
            height: isMobile ? 280 : 380,
          })
        },
      },
    })

    gsap.to(".pin-box", {
      scrollTrigger: {
        trigger: "#space-section",
        start: "55% bottom",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const scale = 1 + 10 * self.progress // Adjust scaling for mobile
          gsap.to(".pin-box", {
            scale,
            ease: "power1.out",
          })
        },
      },
    })
  }, [])

  /* Gif Scroll Animation */
  useEffect(() => {
    /* Hide Gif 1 */
    gsap.to(".pin-gif-wrapper", {
      scrollTrigger: {
        trigger: "#pin-content-section-1",
        start: "10% bottom",
        end: "bottom top",
        scrub: true,
        onEnter: () => {
          gsap.to(".pin-gif-wrapper", {
            clipPath: "inset(0% 0% 100%)",
          })
          gsap.to(".pin-initial-text", {
            yPercent: -100,
          })

          const tl = gsap.timeline({
            defaults: {
              stagger: 0.1,
            },
          })
          tl.to(".pin-initial-description span", {
            yPercent: -100,
          })

          const tl2 = gsap.timeline({
            defaults: {
              stagger: 0.1,
            },
          })
          tl2.to(".pin-initial-description-2 span", {
            yPercent: -100,
          })
        },
        onLeaveBack: () => {
          gsap.to(".pin-gif-wrapper", {
            clipPath: "inset(0% 0% 0%)",
          })
          gsap.to(".pin-initial-text", {
            yPercent: 0,
          })

          const tl = gsap.timeline({
            defaults: {
              stagger: 0.1,
            },
          })
          tl.to(".pin-initial-description span", {
            yPercent: 0,
          })

          const tl2 = gsap.timeline({
            defaults: {
              stagger: 0.1,
            },
          })
          tl2.to(".pin-initial-description-2 span", {
            yPercent: 0,
          })
        },
      },
    })

    /* Show Gif 2 */
    gsap.to(".pin-gif-wrapper", {
      scrollTrigger: {
        trigger: "#pin-content-section-1",
        start: "75% bottom",
        end: "bottom top",
        scrub: true,
        onEnter: () => {
          setActiveImageIndex(1)
          gsap.to(".pin-gif-wrapper", {
            clipPath: "inset(0% 0% 0%)",
          })
        },
        onLeaveBack: () => {
          gsap.to(".pin-gif-wrapper", {
            clipPath: "inset(0% 0% 100%)",
          })
          setActiveImageIndex(0)
        },
      },
    })

    /* Hide Gif 2 */
    gsap.to(".pin-gif-wrapper", {
      scrollTrigger: {
        trigger: "#pin-content-section-2",
        start: "20% bottom",
        end: "bottom top",
        scrub: true,
        onEnter: () => {
          gsap.to(".pin-gif-wrapper", {
            clipPath: "inset(0% 0% 100%)",
          })
        },
        onLeaveBack: () => {
          gsap.to(".pin-gif-wrapper", {
            clipPath: "inset(0% 0% 0%)",
          })
        },
      },
    })

    /*  Show Gif 3  */
    gsap.to(".pin-gif-wrapper", {
      scrollTrigger: {
        trigger: "#pin-content-section-2",
        start: "80% bottom",
        end: "bottom top",
        scrub: true,

        onEnter: () => {
          setActiveImageIndex(2)
          gsap.to(".pin-gif-wrapper", {
            clipPath: "inset(0% 0% 0%)",
          })
        },
        onLeaveBack: () => {
          gsap.to(".pin-gif-wrapper", {
            clipPath: "inset(0% 0% 100%)",
          })
          setActiveImageIndex(1)
        },
      },
    })

    /* End */
    gsap.to(".pin-gif-wrapper", {
      scrollTrigger: {
        trigger: "#space-section",
        start: "30% bottom",
        end: "bottom top",
        scrub: true,
        onEnter: () => {
          gsap.to(".pin-gif-wrapper", {
            clipPath: "inset(0% 0% 100%)",
          })
        },
        onLeaveBack: () => {
          gsap.to(".pin-gif-wrapper", {
            clipPath: "inset(0% 0% 0%)",
          })
        },
      },
    })
  }, [])

  return (
    <section className="pinned absolute top-[120vh] z-20 h-screen w-screen md:top-[100vh]">
      <div className="pin-box absolute left-1/2 top-1/2 h-[160px] w-[200px] -translate-x-1/2 -translate-y-1/2 scale-100 border-[1px] border-white bg-white shadow-md md:h-[260px] md:w-[300px]">
        <div className="pin-gif-wrapper h-full w-full">
          <img
            alt="pin-gif-1"
            className={cn("pin-gif-1 h-full w-full", {
              hidden: activeImageIndex !== 0,
            })}
            src={images[0]}
          />
          <img
            alt="pin-gif-2"
            className={cn("pin-gif-2 h-full w-full", {
              hidden: activeImageIndex !== 1,
            })}
            src={images[1]}
          />
          <img
            alt="pin-gif-3"
            className={cn("pin-gif-3 h-full w-full", {
              hidden: activeImageIndex !== 2,
            })}
            src={images[2]}
          />
        </div>
      </div>
    </section>
  )
}
