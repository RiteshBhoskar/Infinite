"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

gsap.registerPlugin(useGSAP);

export default function Journal () {
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(".left-container", {
          opacity: 0,
          x: -100,
        } , {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".left-container",
            start: "top 70%",
            toggleActions: "play reverse play reverse"
          }
        })
        gsap.fromTo(".right-container", {
          opacity: 0,
          x: 100,
        } , {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".right-container",
            start: "top 70%",
            toggleActions: "play reverse play reverse"
          }
        })
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} data-theme="light" className="px-7 h-full overflow-clip w-full space-y-2 sm:space-x-2 sm:py-20 py-10 flex flex-col sm:flex-row items-center">
            <div className="sm:w-2/3 w-full left-container h-full rounded-lg relative">
            <img src="j1.avif" className="rounded-lg h-full w-full object-cover" alt="image" />
            <div className="absolute bottom-2 sm:left-7 sm:bottom-7 left-4 text-white flex flex-col space-y-2">
                <p className="text-xl font-medium uppercase">
                    behind the studio
                </p>
                <p className="text-white sm:text-lg text-sm">
                    A dynamic space where imagination knows no bounds and experimentation is celebrated.
                </p>
                <button className="rounded-md px-5 py-2 text-sm w-fit cursor-pointer text-white bg-white/20 backdrop-blur-md">
                    About us
                </button>
            </div>
            </div>

            <div className="sm:w-1/3 w-full right-container h-full rounded-lg relative">
                <img src="j2.avif" className="rounded-lg h-full" alt="image" />
                <div className="absolute bottom-2 sm:bottom-7 left-4 text-white flex flex-col space-y-2">
                <p className="text-xl font-medium uppercase">
                    join the team
                </p>
                <p className="text-white text-sm">
                    A collective fo visionary creators dedicated to shaping the future through design.
                </p>
                <button className="rounded-md px-5 py-2 text-sm w-fit cursor-pointer text-white bg-white/20 backdrop-blur-md">
                    Careers
                </button>
            </div>
            </div>
        </section>
    )
}