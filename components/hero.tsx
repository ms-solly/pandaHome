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
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          alpha: Math.random() * 0.5 + 0.5,
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-gray-900 pt-24"> {/* Added pt-24 for spacing */}
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: "radial-gradient(circle at 50% 50%, #111 0%, #000 100%)" }}
      />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(to_bottom,white,rgba(255,255,255,0.1))]"></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 space-y-8"
          >
            <h1 className="text-5xl lg:text-7xl font-bold font-space leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                Ghost
              </span>
              <br />
              Web Developer & <br />
              Creative Explorer
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Crafting digital experiences, exploring frameworks, and bringing ideas to life through code. When not coding, you'll find me writing poems, doodling, or diving into game development.
            </p>
            <div className="flex gap-4">
              <Link
                href="#projects"
                className="inline-block bg-green-400 text-black px-8 py-3 rounded-full font-medium hover:bg-green-500 transition-colors"
              >
                View Projects
              </Link>
              <Link
                href="#about"
                className="inline-block border border-green-400 text-green-400 px-8 py-3 rounded-full font-medium hover:bg-green-400/10 transition-colors"
              >
                About Me
              </Link>
            </div>
          </motion.div>

          {/* heroImg image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              <Image src="/heroImg.png" alt="Cute heroImg" fill className="object-contain" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
