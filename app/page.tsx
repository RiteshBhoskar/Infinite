import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Invite from "@/components/Invite";
import Journal from "@/components/Journal";
import MarqueeSection from "@/components/MarqueeSection";
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
      <MarqueeSection />
      <Invite />
      <Footer />
    </main>
  )
}