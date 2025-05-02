import About from "@/components/About";
import Hero from "@/components/Hero";
import Journal from "@/components/Journal";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Journal />
    </main>
  )
}