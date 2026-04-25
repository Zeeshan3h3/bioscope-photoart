import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-pureWhite text-darkGrey pt-24 pb-24">
            {/* Hero */}
            <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden mb-16">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <Image
                    src="/images/family-group.jpg"
                    alt="Photographer at work"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="relative z-30 text-center">
                    <span className="font-script text-4xl text-white mb-2 block drop-shadow-md">Our Story</span>
                    <h1 className="font-serif text-5xl md:text-6xl text-white drop-shadow-lg">Behind the Lens</h1>
                </div>
            </section>

            {/* Bio Section */}
            <section className="container mx-auto px-4 md:px-8 mb-24 max-w-6xl mt-16">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2 relative aspect-[4/5] w-full rounded-sm overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] border-[6px] border-pureWhite p-2 bg-ivory">
                        <div className="w-full h-full relative overflow-hidden rounded-sm border border-gold/10">
                            <Image
                                src="/images/wedding-ceremony.jpg"
                                alt="Bioscope Photo Art Team"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <h2 className="font-serif text-4xl text-charcoal mb-6">About Bioscope Photo Art</h2>
                        <div className="space-y-6 text-darkGrey font-sans leading-relaxed text-lg">
                            <p>
                                From intimate Bengali weddings to grand celebrations, we&apos;ve spent the last decade
                                capturing the vibrant, emotional, and beautiful moments that define the joy of life.
                            </p>
                            <p>
                                What started as a deep passion for storytelling through a viewfinder has grown into
                                Kolkata&apos;s trusted boutique photography studio. We believe that photographs are more
                                than just images on a screen—they are family heirlooms, time capsules, and visual
                                poetry.
                            </p>
                            <p className="font-serif italic text-2xl text-charcoal pb-4 border-b border-gold/20 mt-8">
                                &quot;Our philosophy is simple: let you be you. We capture the genuine, unscripted
                                moments while gently guiding you to create timeless portraits.&quot;
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-6 mt-12 bg-cream p-6 rounded-sm border border-gold/10">
                            <div className="text-center">
                                <div className="text-3xl font-bold font-serif text-charcoal mb-1">10+</div>
                                <div className="text-xs tracking-widest uppercase text-midGrey font-bold">Years Exp.</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold font-serif text-charcoal mb-1">1000+</div>
                                <div className="text-xs tracking-widest uppercase text-midGrey font-bold">Happy Clients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold font-serif text-charcoal mb-1">500+</div>
                                <div className="text-xs tracking-widest uppercase text-midGrey font-bold">Weddings</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-cream border-y border-gold/10 py-24 mb-24">
                <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
                    <h2 className="font-serif text-4xl text-charcoal mb-16 relative inline-block">
                        Our Core Values
                        <span className="absolute -bottom-4 left-1/4 right-1/4 h-[1px] bg-gold"></span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="flex flex-col items-center bg-pureWhite p-8 rounded-sm shadow-sm border border-gold/5">
                            <div className="w-20 h-20 bg-ivory rounded-full border border-gold/30 flex items-center justify-center text-gold mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                            </div>
                            <h3 className="font-sans font-bold text-lg uppercase tracking-wider mb-4 text-charcoal">Authenticity</h3>
                            <p className="text-midGrey text-sm leading-relaxed">We focus on real emotions and natural interactions rather than stiff, forced posing.</p>
                        </div>
                        <div className="flex flex-col items-center bg-pureWhite p-8 rounded-sm shadow-sm border border-gold/5">
                            <div className="w-20 h-20 bg-ivory rounded-full border border-gold/30 flex items-center justify-center text-gold mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
                            </div>
                            <h3 className="font-sans font-bold text-lg uppercase tracking-wider mb-4 text-charcoal">Quality &amp; Craft</h3>
                            <p className="text-midGrey text-sm leading-relaxed">From shooting to the final edit, every image is treated with meticulous attention to detail.</p>
                        </div>
                        <div className="flex flex-col items-center bg-pureWhite p-8 rounded-sm shadow-sm border border-gold/5">
                            <div className="w-20 h-20 bg-ivory rounded-full border border-gold/30 flex items-center justify-center text-gold mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
                            </div>
                            <h3 className="font-sans font-bold text-lg uppercase tracking-wider mb-4 text-charcoal">Reliability</h3>
                            <p className="text-midGrey text-sm leading-relaxed">We respect your time. Punctual arrivals and on-time delivery of your final galleries.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <div className="text-center">
                <h2 className="font-serif text-4xl mb-8 text-charcoal">Ready to create beautiful memories?</h2>
                <Link href="/contact" className="inline-block bg-gold text-white hover:bg-goldDark px-10 py-4 rounded-full font-bold uppercase tracking-wider transition-colors shadow-lg">
                    Let&apos;s Plan Your Shoot
                </Link>
            </div>

        </main>
    );
}
