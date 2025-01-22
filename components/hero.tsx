"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useRef } from "react"
import Image from "next/image"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Array<{
      x: number
      y: number
      radius: number
      vx: number
      vy: number
      alpha: number
    }> = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles = []
      for (let i = 0; i < 80; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 1,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          alpha: Math.random() * 0.5 + 0.5,
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        ctx.beginPath()
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.radius)
        gradient.addColorStop(0, `rgba(74, 222, 128, ${particle.alpha})`)
        gradient.addColorStop(1, "rgba(74, 222, 128, 0)")
        ctx.fillStyle = gradient
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    resize()
    animate()

    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-gray-900 pt-32 lg:pt-10 px-8"> 
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: "radial-gradient(circle at 50% 50%, #111 0%, #000 100%)" }}
      />
      <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2"
        >
          <h2 className="text-xl font-medium text-gray-300">Hello, I am</h2> {/* Smaller text */}
          <h1 className="text-5xl lg:text-6xl font-bold text-green-400">Aditi J.</h1> {/* Larger Title */}
          <p className="text-lg lg:text-xl text-gray-300 mt-6 max-w-full mx-auto px-4">
  I enjoy building web experiences, exploring new technologies, and understanding how things work. In my free time, I like doodling, singing, and diving into topics like human psychology and more.
</p>
<div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6 mx-6">
  <Link href="/projects" className="bg-green-400 text-black px-10 py-4 rounded-full text-xl font-medium hover:bg-green-500 transition w-full sm:w-auto">
    View Projects
  </Link>
  <Link href="/about" className="border border-green-400 text-green-400 px-10 py-4 rounded-full text-xl font-medium hover:bg-green-400/10 transition w-full sm:w-auto">
    About Me
  </Link>
</div>


        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:w-1/2 flex justify-center"
        >
          <div className="relative w-[500px] h-[500px] lg:w-[700px] lg:h-[700px]">
            <Image src="/heroImg.png" alt="Hero Image" fill className="object-contain" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
