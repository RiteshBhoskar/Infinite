'use client'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Invite () {
    const inviteRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(".main-text", {
            autoAlpha: 0,
            y: 10,
        }, {
            autoAlpha: 1,
            y: 0,
            scrollTrigger: {
                trigger: inviteRef.current,
                start: "top 30%",
                end: "center center",
                scrub: true,
            }
        })


    }, { scope: inviteRef })

    return(
        <section ref={inviteRef} className="h-full w-full overflow-clip" data-theme="transparent">
            <div className="relative flex flex-col h-full w-full justify-center items-center">
            <img src="f.avif" alt="image" className="h-[250px] sm:h-full" />
            <div className="flex pt-10 flex-col text-center items-center justify-center w-full h-full space-y-2 absolute ">
                <p className="text-white font-medium">
                    Work with us
                </p>
                <h4 className="text-5xl sm:text-7xl sm:px-50 uppercase text-white main-text">
                    let's elevate your brand
                </h4>
                <button className="rounded-md px-7 py-2 text-sm text-white bg-white/20 mt-2 backdrop-blur-3xl letter">
                    Reach Out
                </button>
            </div>
            </div>
        </section>
    )
}