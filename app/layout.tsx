import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import ScreenLoader from "./components/ScreenLoader"
import { geistMono, geistSans } from "./fonts"
import "./globals.css"
import Header from "./layouts/Header"
import Socials from "./layouts/Socials"

export const metadata: Metadata = {
  title: "Latinamerica Cybersecurity Challenge",
  description:
    "Latinamerica Cybersecurity Challenge es un evento único que reúne a los mejores talentos, expertos y apasionados de la ciberseguridad de toda America Latina y el Caribe",
  generator: "Next.js",
  applicationName: "LCC Web",
  keywords: [
    "Cybersecurity",
    "Ciberseguridad",
    "Evento",
    "Latinoamerica",
    "Networking",
  ],
  category: "technology",
  authors: [
    { name: "gdcfusion", url: "https://gdcfusion.org/" },
    { name: "Juan Camilo Manjarres", url: "https://camilomanjarres.com/" },
  ],
  creator: "gdcfusion",
  publisher: "gdcfusion",
  openGraph: {
    title: "Latinamerica Cybersecurity Challenge",
    description:
      "Latinamerica Cybersecurity Challenge es un evento único que reúne a los mejores talentos, expertos y apasionados de la ciberseguridad de toda America Latina y el Caribe",
    url: "https://lcc-web1.vercel.app/",
    siteName: "Latinamerica Cybersecurity Challenge",
    images: [
      {
        url: "https://i.postimg.cc/4yGnps76/Screenshot-2024-10-29-at-11-07-25-AM.png",
        alt: "Motion Scape",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Motion Scape",
  //   description:
  //     "Motion Scape is a visually dynamic website dedicated to the art of animations and transitions in web design. Created to inspire designers and developers, it showcases a variety of smooth, immersive motion effects that add elegance and interactivity to digital experiences.",
  //   creator: "devshinthant",
  //   images: {
  //     url: "https://i.postimg.cc/4yGnps76/Screenshot-2024-10-29-at-11-07-25-AM.png",
  //     alt: "Motion Scape",
  //   },
  // },
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
