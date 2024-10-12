"use client";

import { useEffect } from "react";

import gsap from "gsap";

export default function ScreenLoader() {
  useEffect(() => {
    gsap.to(".loader-screen", {
      height: 0,
      duration: 0.6,
      delay: 2,
    });
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden fixed loader-screen flex items-center justify-center bg-black" />
  );
}
