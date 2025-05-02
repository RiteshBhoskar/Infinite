"use client"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export default function Hero() {
    const autoplay = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
      )

    return (
        <section data-theme="transparent" className="h-full w-full">
            <Carousel plugins={[autoplay.current]} opts={{ loop : true }} >
                <CarouselContent>
                    <CarouselItem className="relative">
                    <picture>
                        <source media="(max-width: 1024px)" srcSet="hm1.avif" />
                        <img src="h1.avif" alt="hero items" className="w-full h-full object-cover" />
                    </picture>
                        <div className="absolute sm:left-14 px-4 sm:px-0 sm:top-[400px] top-72 flex items-start  z-10 flex-col w-full
                         sm:w-[500px] space-y-2">
                            <span className="text-white">Dash and Dine</span>
                            <h1 className="text-white text-5xl flex-wrap">NEW IDENTITY FOR A GLASSWARE BRAND.</h1>
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
                            playsInline
                            src="h2.mp4" className="hidden sm:block" />
                        <video 
                            autoPlay
                            loop
                            muted
                            playsInline
                            src="hm2.mp4" className="block sm:hidden" />
                         <div className="absolute sm:left-14 px-4 sm:px-0 sm:top-[400px] top-72 flex items-start  z-10 flex-col w-full
                         sm:w-[500px] space-y-2">
                            <span className="text-white">Caberbite</span>
                            <h1 className="text-white text-5xl flex-wrap  ">PRODUCT DESIGN FOR JAPANESE TEA.</h1>
                            <button className="rounded-md text-white bg-white/20 mt-3 backdrop-blur-md px-3 py-2 text-sm ">
                                View Project
                            </button>
                            </div>
                    </CarouselItem>
                    <CarouselItem className="relative">
                    <picture>
                        <source media="(max-width: 1024px)" srcSet="hm3.avif" />
                        <img src="h3.avif" alt="hero items" className="w-full h-full object-cover" />
                    </picture>
                        <div className="absolute sm:left-14 px-5 sm:px-0 sm:top-[400px] top-72 flex items-start  z-10 flex-col w-full
                         sm:w-[500px] space-y-2">
                            <span className="text-white">Google Deepmind</span>
                            <h1 className="text-white text-5xl flex-wrap">CAMPAIGN FOR AN ICONIC BRAND.</h1>
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