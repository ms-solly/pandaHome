import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface StarProps {
  x: number
  y: number
}

interface HeroProps {
  mousePosition: { x: number; y: number }
}

const Star: React.FC<StarProps> = ({ x, y }) => (
  <div className="absolute bg-white rounded-full w-1 h-1" style={{ left: `${x}%`, top: `${y}%` }} />
)

export default function Hero({ mousePosition }: HeroProps) {
  const starsRef = useRef<StarProps[]>([])

  useEffect(() => {
    starsRef.current = Array.from({ length: 100 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
    }))
  }, [])

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden ">
      <div className="absolute inset-0">
        {starsRef.current.map((star, index) => (
          <motion.div
            key={index}
            initial={{ x: star.x + "%", y: star.y + "%" }}
            animate={{
              x: `calc(${star.x}% + ${(mousePosition.x - window.innerWidth / 2) / 50}px)`,
              y: `calc(${star.y}% + ${(mousePosition.y - window.innerHeight / 2) / 50}px)`,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
            <Star x={0} y={0} />
          </motion.div>
        ))}
      </div>
      <motion.div
        className="absolute right-10 top-10 w-32 h-32 rounded-full bg-yellow-300"
        animate={{
          x: (mousePosition.x - window.innerWidth / 2) / 20,
          y: (mousePosition.y - window.innerHeight / 2) / 20,
        }}
      >
        <div className="relative w-full h-full">
          <div className="absolute left-1/4 top-1/4 w-8 h-8 bg-gray-900 rounded-full" />
          <div className="absolute right-1/4 top-1/4 w-8 h-8 bg-gray-900 rounded-full" />
          <div
            className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gray-900 rounded-full"
            style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)" }}
          />
        </div>
      </motion.div>
      <div className="text-center z-10">
        <h1 className="text-6xl font-press-start mb-4 text-green-400">PandaHome</h1>
        <p className="text-2xl font-inter">Welcome to my cute and minimalistic portfolio!</p>
      </div>
    </section>
  )
}

