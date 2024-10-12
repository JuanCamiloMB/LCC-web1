import { useEffect } from "react";

import gsap from "gsap";
import Lenis from "lenis";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function mountLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.registerPlugin(ScrollTrigger);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      lenis.destroy();
    };
  }, []);
}
