"use client"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export default function Hero() {
    const autoplay = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
      )

    return (
        <section data-theme="transparent" className="h-screen w-full">
            <Carousel plugins={[autoplay.current]} opts={{ loop : true }} >
                <CarouselContent>
                    <CarouselItem className="relative">
                        <img src="h1.avif" alt="hero items" />
                        <div className="absolute left-14 top-[400px] flex items-start  z-10 flex-col w-[500px] space-y-2">
                            <span className="text-white">Dash and Dine</span>
                            <h1 className="text-white text-5xl">NEW IDENTITY FOR A GLASSWARE BRAND.</h1>
                            <button className="rounded-md text-white bg-white/20 mt-3 backdrop-blur-md px-3 py-2 text-sm ">
                                View Project
                            </button>
                            </div>
                    </CarouselItem>
                    <CarouselItem className="relative">
                        <video 
                            autoPlay
                            loop
                            muted
                            src="h2.mp4" />
                         <div className="absolute left-14 top-[400px] flex items-start  z-10 flex-col w-[500px] space-y-2">
                            <span className="text-white">Caberbite</span>
                            <h1 className="text-white text-5xl">PRODUCT DESIGN FOR JAPANESE TEA.</h1>
                            <button className="rounded-md text-white bg-white/20 mt-3 backdrop-blur-md px-3 py-2 text-sm ">
                                View Project
                            </button>
                            </div>
                    </CarouselItem>
                    <CarouselItem className="relative">
                        <img src="h3.avif" alt="hero items" />
                        <div className="absolute left-14 top-[400px] flex items-start  z-10 flex-col w-[500px] space-y-2">
                            <span className="text-white">Google Deepmind</span>
                            <h1 className="text-white text-5xl">CAMPAIGN FOR AN ICONIC BRAND.</h1>
                            <button className="rounded-md text-white bg-white/20 mt-3 backdrop-blur-md px-3 py-2 text-sm ">
                                View Project
                            </button>
                            </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </section>
    )
}