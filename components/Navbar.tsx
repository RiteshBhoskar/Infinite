"use client"

import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

gsap.registerPlugin(useGSAP , ScrollTrigger);

export default function Navbar() {
    const [theme, setTheme] = useState<"transparent" | "light">("transparent");
  
    useEffect(() => {
      const sections = document.querySelectorAll("section[data-theme]");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const newTheme = entry.target.getAttribute("data-theme");
              if (newTheme === "transparent" || newTheme === "light") {
                setTheme(newTheme);
              }
            }
          });
        },
        {
          threshold: 0.6,
        }
      );
  
      sections.forEach((section) => observer.observe(section));
      return () => observer.disconnect();
    }, []);

    useGSAP(() => {

        const navTl = gsap.timeline();

        navTl.set(".nav-container", {
            opacity: 0,
            y: -100
        })
        .to(".nav-container" ,{
            opacity: 1,
            y: 0,
            ease: "power2.inOut",
            duration: 1,
        })
    })
    

    return (
        <nav className={`fixed left-0 nav-container w-full top-0 z-50 flex justify-between transition-colors duration-300 py-4 px-6 sm:gap-56 opacity-0 ${
            theme === "transparent" ?
            "bg-transparent text-white" :
            "bg-white/20 backdrop-blur-md text-black"
        }`}>
            <div className="flex justify-between w-full text-2xl italic font-medium">
                INFINITE®
            </div>

            <div className="hidden w-full sm:flex justify-end  sm:justify-between items-center sm:pl-32 text-sm font-medium">
                <button>ABOUT</button>
                <button>PROJECTS</button>
                <button>NEWS</button>
                <button>CAREERS</button>
                <div className="w-[1px] h-5 bg-white/20" />
                <button className={`rounded-md px-5 py-2 text-xs cursor-pointer ${
                    theme === "transparent" ?
                    "text-white bg-white/20 backdrop-blur-md" :
                    "bg-black text-white"
                }`}>
                    Contact
                </button>
            </div>
            <button className={`sm:hidden block rounded-md px-5 py-2 text-sm font-medium cursor-pointer  ${
            theme === "transparent" ?
            "text-white bg-white/20 backdrop-blur-md" :
            "bg-white/70 backdrop-blur-md text-black"
            } `}>
                    Menu
            </button>
        </nav>
    )
}
