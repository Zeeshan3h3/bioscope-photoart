"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroSlider() {
    const slides = [
        "/images/wedding-ceremony.jpg",
        "/images/family-group.jpg",
        "/images/wedding-bride.jpg",
    ];

    return (
        <section className="relative w-full h-[100dvh] overflow-hidden bg-pureWhite flex items-end">
            <div className="absolute inset-0 w-full h-full">
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    speed={2000}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="w-full h-full"
                >
                    {slides.map((src, index) => (
                        <SwiperSlide key={index} className="w-full h-full overflow-hidden">
                            <div className="absolute inset-0 bg-hero-gradient z-10"></div>
                            <Image
                                src={src}
                                alt={`Bioscope Photo Art ${index + 1}`}
                                fill
                                className="object-cover animate-ken-burns origin-center"
                                priority={index === 0}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="relative z-20 w-full container mx-auto px-4 md:px-8 pb-[120px] pointer-events-none">
                <div className="max-w-2xl text-left pointer-events-auto">
                    <span className="font-script text-3xl md:text-4xl text-gold mb-3 md:mb-4 block drop-shadow-sm">Capturing the Joy of Life</span>
                    <h1 className="font-serif text-charcoal mb-4 md:mb-6 uppercase leading-tight md:leading-none drop-shadow-md text-4xl sm:text-5xl md:text-6xl lg:text-[5rem]">If I know what love is, it is because of you</h1>
                    <p className="text-darkGrey text-base md:text-lg mb-8 md:mb-10 max-w-lg font-bold drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">We believe every celebration deserves to be remembered with joy and love.</p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                        <Link href="/portfolio" className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-wider transition-all duration-300 text-center text-sm bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg w-full sm:w-auto">
                            View Our Work
                        </Link>
                        <Link href="/contact" className="bg-gold border-2 border-gold hover:bg-goldDark hover:border-goldDark text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-wider transition-all duration-300 text-center text-sm shadow-xl shadow-gold/30 hover:shadow-gold/50 w-full sm:w-auto">
                            Book a Session
                        </Link>
                    </div>
                </div>
            </div>

            {/* Stats bar */}
            <div className="absolute bottom-0 left-0 w-full bg-white/80 backdrop-blur-lg border-t border-gold/20 z-20 py-5 hidden md:block">
                <div className="container mx-auto px-8 flex justify-between items-center text-sm text-charcoal font-bold tracking-widest uppercase">
                    <span>550+ Weddings</span>
                    <span className="w-1.5 h-1.5 bg-gold rounded-full shadow-[0_0_8px_rgba(184,151,106,0.8)]"></span>
                    <span>300+ Baby Shoots</span>
                    <span className="w-1.5 h-1.5 bg-gold rounded-full shadow-[0_0_8px_rgba(184,151,106,0.8)]"></span>
                    <span>350+ Pre-Weddings</span>
                </div>
            </div>
        </section>
    );
}
