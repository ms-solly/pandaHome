import { Navigation } from "../components/navigation"
import { Hero } from "../components/hero"
import { Projects } from "../components/projects"
import { About } from "../components/about"
import { Contact } from "../components/contact"


export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      <main>
        <Hero />
        {/* <Projects />
        <About />
        <Contact /> */}
      </main>
    </div>
  )
}

