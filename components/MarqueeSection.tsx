"use client"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Marquee } from "./magicui/marquee";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function MarqueeSection() {
    const marqueeRef = useRef(null);
    useGSAP(() => {
        gsap.fromTo(".items", {
            autoAlpha: 0,
            y: 100,
        }, {
            autoAlpha: 1,
            y: 0,
            ease: "power1.out",
            stagger: 0.5,
            scrollTrigger: {
                trigger: marqueeRef.current,
                start: "top 60%",
                toggleActions: "play reverse play reverse",
            }
        })
    })

    return (
        <section ref={marqueeRef} className="h-full w-full flex flex-col" data-theme="light" >
            <div className="w-full h-fit space-y-1 flex flex-col items-center justify-center text-center pb-7">
                <p className="text-gray-500 items-start">
                    Instagram
                </p>
                <h3 className="text-4xl text-black uppercase font-medium hover:text-gray-400 transition-colors duration-500 cursor-pointer items">
                    @INFINITE_OFFICIAL
                </h3>
            </div>
            <Marquee className="[--duration:40s] items-start h-full flex text-start items">
                <div className="rounded-lg">
                <img src="m1.avif" className="w-[325px] rounded-lg" alt="image" />
                </div>
                <div className="rounded-lg">
                <video src="m2.mp4" muted loop autoPlay className="w-[325px]  pointer-events-none rounded-lg" />
                </div>
                <div className="rounded-lg">
                <img src="m4.avif" className="w-[325px] rounded-lg" alt="image" />
                </div>
                <div className="rounded-lg">
                <img src="m3.avif" className="w-[325px] rounded-lg" alt="image" />
                </div>
                <div className="rounded-lg">
                <video src="m5.mp4" muted loop autoPlay className="w-[325px]  pointer-events-none rounded-lg" />
                </div>
                <div className="rounded-lg">
                <img src="m6.avif" className="w-[325px] rounded-lg" alt="image" />
                </div>
            </Marquee>
        </section>
    )
}