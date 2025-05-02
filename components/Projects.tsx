"use client"
import { useRef } from "react"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Projects() {
    const projectsRef = useRef(null);

    useGSAP(() => {

        const projectsTl = gsap.timeline({
            scrollTrigger: {
                trigger: projectsRef.current,
                start: "top 70%",
                toggleActions: "play reverse play reverse"
            }
        });

        projectsTl.fromTo(".left-div", {
            autoAlpha: 0,
            x: -100
        }, {
            autoAlpha: 1,
            x: 0,
            ease: "power2.out",
            duration: 1,
        }, "<")
        .fromTo(".right-div", {
            autoAlpha: 0,
            x: 100
        }, {
            autoAlpha: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
        }, "<")
        .fromTo(".left-items" , {
            autoAlpha: 0,
            y: 30,
        }, {
            autoAlpha: 1,
            y: 0,
            ease: "power2.inOut",
            stagger: 0.5,
            scrollTrigger: {
                trigger: ".left-text-div",
                start: "top 70%",
                toggleActions: "play reverse play reverse"
            }
        })
        .fromTo(".right-items" , {
            autoAlpha: 0,
            y: 30,
        }, {
            autoAlpha: 1,
            y: 0,
            ease: "power2.inOut",
            stagger: 0.5,
            scrollTrigger: {
                trigger: ".right-text-div",
                start: "top 70%",
                toggleActions: "play reverse play reverse"
            }
        }).fromTo(".center-div", {
            autoAlpha: 0,
            y: 100,
        }, {
            autoAlpha: 1,
            duration: 0.5,
            y: 0,
            ease: "power1.out"
        })

    }, { scope: projectsRef })

    return (
        <section ref={projectsRef} data-theme="light" className="flex flex-col sm:flex-row pt-38 px-4 w-full overflow-clip  space-y-2 sm:space-x-2">
            <div className="w-full justify-center sm:justify-start flex sm:w-4/12 left-div rounded-md flex-col space-y-2">
                <img src="p1.avif" alt="project info" className="h-[300px] rounded-md" />
                <div className="flex flex-col items-center justify-center h-full text-center border border-gray-400 rounded-lg left-text-div">
                    <p className="text-gray-400 text-2xl left-items opacity-0">Strategy</p>
                    <h2 className="text-7xl left-items opacity-0">
                        Zara
                    </h2>
                    <button className="rounded-md px-5 py-2 text-xs cursor-pointer
                    text-white mt-4 mb-2 bg-black backdrop-blur-md left-items opacity-0" >
                    Contact
                </button>
                </div>
            </div>
            <div className="center-div w-full sm:w-4/12 rounded-md">
                <video muted src="p2.mp4" autoPlay loop playsInline className="rounded-md pointer-events-none h-full" />
            </div>
            <div className="w-full justify-center sm:justify-start flex sm:w-4/12 right-div rounded-md flex-col space-y-2">
                <img src="p3.avif" alt="project info" className="h-[300px] rounded-md" />
                <div className="flex flex-col items-center justify-center h-full text-center  border border-gray-400 rounded-lg mb-2 right-text-div">
                    <p className="text-gray-400 text-2xl right-items opacity-0">Digital</p>
                    <h2 className="text-7xl right-items opacity-0">
                        Filippe Monet
                    </h2>
                    <button className="rounded-md px-5 py-2 text-xs cursor-pointer
                    text-white mt-4 mb-2 bg-black backdrop-blur-md right-items opacity-0" >
                    Contact
                </button>
                </div>
            </div>
        </section>
    )
}