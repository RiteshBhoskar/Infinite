"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function About () {
    const aboutRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(".left-container", {
          opacity: 0,
          x: -100,
        } , {
          opacity: 1,
          x: 0,
          duration: 0.7,
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
          duration: 0.7,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".right-container",
            start: "top 70%",
            toggleActions: "play reverse play reverse"
          }
        })

        gsap.fromTo(".letter" ,{
          autoAlpha: 0,
          y: 50,
        }, {
          autoAlpha: 1,
          y: 0,
          stagger: 0.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".right-container",
            start: "top 50%",
            toggleActions: "play reverse play reverse"
          }
        });
    }, { scope: aboutRef })

    return (
        <section ref={aboutRef} data-theme="light" className="sm:py-20 px-10 h-[900px] overflow-clip w-full flex flex-col sm:flex-row sm:space-x-5 space-y-2">
            <div className="w-full left-container flex justify-center sm:w-1/2 h-full ">
                <img src="t.avif" className="rounded-lg h-full" alt="team photo" />
            </div>
            <div className="flex right-container flex-col w-full sm:w-1/2 h-full items-start px-20 justify-center space-y-4 ">
               <p className="text-gray-400 text-lg letter">Who we are</p>
               <h3 className="text-7xl font-medium text-black uppercase letter">A CREATIVE JOURNEY</h3>
               <p className="text-gray-600 text-xl letter">A dynamic space where imagination knows no bounds and experimentation is celebrated.</p>
               <button className="rounded-md px-5 py-2 text-md text-black bg-gray-300 backdrop-blur-md letter">
                    About us
                </button>
            </div>
        </section>
    )
}