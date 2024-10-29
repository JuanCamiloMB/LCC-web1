import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import ScreenLoader from "./components/ScreenLoader"
import { geistMono, geistSans } from "./fonts"
import "./globals.css"
import Header from "./layouts/Header"
import Socials from "./layouts/Socials"

export const metadata: Metadata = {
  title: "MotionScape",
  description:
    "Motion Scape is a visually dynamic website dedicated to the art of animations and transitions in web design. Created to inspire designers and developers, it showcases a variety of smooth, immersive motion effects that add elegance and interactivity to digital experiences.",
  generator: "Next.js",
  applicationName: "Motion Scape",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL("https://motion-gsap.vercel.app/"),
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "GSAP",
    "Transitions",
    "Animations",
  ],
  category: "technology",
  authors: [{ name: "devshinthant", url: "https://devshinthant.vercel.app/" }],
  creator: "devshinthant",
  publisher: "devshinthant",
  openGraph: {
    title: "Motion Scape Gsap",
    description:
      "Motion Scape is a visually dynamic website dedicated to the art of animations and transitions in web design. Created to inspire designers and developers, it showcases a variety of smooth, immersive motion effects that add elegance and interactivity to digital experiences.",
    url: "https://motion-gsap.vercel.app/",
    siteName: "Motion Scape",
    images: [
      {
        url: "https://i.postimg.cc/4yGnps76/Screenshot-2024-10-29-at-11-07-25-AM.png",
        alt: "Motion Scape",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Motion Scape",
    description:
      "Motion Scape is a visually dynamic website dedicated to the art of animations and transitions in web design. Created to inspire designers and developers, it showcases a variety of smooth, immersive motion effects that add elegance and interactivity to digital experiences.",
    creator: "devshinthant",
    images: {
      url: "https://i.postimg.cc/4yGnps76/Screenshot-2024-10-29-at-11-07-25-AM.png",
      alt: "Motion Scape",
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScreenLoader />
        <Header />
        <Socials />
        <Analytics />
        {children}
      </body>
    </html>
  )
}
