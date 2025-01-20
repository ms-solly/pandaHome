import "./globals.css"
import { Inter, Space_Grotesk } from "next/font/google"
import { cn } from "../lib/utils"
import { Navigation } from "../components/navigation"
import { Footer } from "../components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" })

export const metadata = {
  title: "PandaHome Portfolio",
  description: "A modern and minimalistic portfolio website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
      <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
      </head>
      <body className={cn(inter.variable, spaceGrotesk.variable, "font-sans bg-black text-white antialiased")}>
      <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}

