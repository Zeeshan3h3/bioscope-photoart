import React from "react";
import Link from "next/link";
import Image from "next/image";
import { portfolioCategories } from "@/data/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PortfolioOverview() {
    return (
        <main className="min-h-screen bg-pureWhite text-darkGrey pt-32 pb-24 overflow-hidden">
            <ScrollReveal direction="up" className="container mx-auto px-4 md:px-8 text-center max-w-4xl mb-12 md:mb-16">
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mb-4 md:mb-6">Our Portfolio</h1>
                <p className="font-sans text-midGrey text-base md:text-lg leading-relaxed">
                    Explore our collection of stories woven through light and color. We capture everything
                    from intimate weddings and grand celebrations to precious early moments of life.
                </p>
            </ScrollReveal>

            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioCategories.map((cat, idx) => (
                        <ScrollReveal direction="up" delay={idx * 0.1} key={cat.slug}>
                            <Link href={`/portfolio/${cat.slug}`} className="group block relative aspect-[3/4] overflow-hidden rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-shadow">
                                <Image
                                    src={cat.heroImage}
                                    alt={cat.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-transparent flex flex-col justify-end p-8 border border-white/20">
                                    <h3 className="font-serif text-3xl text-charcoal mb-2">{cat.name}</h3>
                                    <p className="font-sans text-xs tracking-widest uppercase text-darkGrey font-bold opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        View Gallery &rarr;
                                    </p>
                                </div>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </main>
    );
}
