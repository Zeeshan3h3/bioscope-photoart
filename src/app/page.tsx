import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/home/HeroSlider";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-pureWhite">

      {/* SECTION A: HERO */}
      <HeroSlider />

      {/* SECTION B: ABOUT TEASER */}
      <section className="w-full py-24 bg-pureWhite text-darkGrey overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            <div className="lg:w-1/2 relative z-10 w-full">
              <ScrollReveal direction="left" duration={1}>
                <h4 className="text-gold text-xs md:text-sm tracking-[0.2em] font-bold uppercase mb-3 md:mb-4">Kolkata&apos;s Trusted Photographer</h4>
                <h2 className="font-serif text-4xl md:text-5xl mb-6 md:mb-8 text-charcoal leading-tight">We Don&apos;t Just Take Photos — We Tell Your Story</h2>
                <div className="space-y-4 md:space-y-6 text-darkGrey font-sans leading-relaxed text-base md:text-lg">
                  <p>
                    At Bioscope Photo Art, we believe every celebration deserves to be
                    remembered with joy and love! We specialize in capturing the laughter,
                    hugs, and happy moments at any functions and events with a professional
                    and friendly approach.
                  </p>
                  <p>
                    Our team understands the emotions behind every moment — whether it&apos;s the
                    nervous joy of a bride, the wonder in a newborn&apos;s eyes, or the pure delight
                    of a child at their first birthday. We are storytellers with cameras.
                  </p>
                </div>
                <Link href="/about" className="inline-block mt-8 text-gold font-bold border-b-2 border-gold pb-1 hover:text-goldDark hover:border-goldDark transition-colors">
                  Meet the Team →
                </Link>
              </ScrollReveal>
            </div>

            <div className="lg:w-1/2 relative min-h-[350px] md:min-h-[500px] w-full mt-12 lg:mt-0">
              <ScrollReveal direction="right" duration={1} delay={0.2} className="w-full h-full relative">
                <div className="absolute top-0 right-0 w-[55%] h-[65%] rounded-sm overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] z-10">
                  <Image src="/images/wedding-bride.jpg" alt="Wedding" fill className="object-cover" />
                </div>
                <div className="absolute bottom-0 left-0 w-[50%] h-[55%] rounded-sm overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] z-20 border-[6px] border-pureWhite -rotate-2">
                  <Image src="/images/baby-newborn.jpg" alt="Baby" fill className="object-cover" />
                </div>
                <div className="absolute top-1/4 left-[30%] w-[35%] h-[40%] rounded-sm overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.05)] z-30 border-[4px] border-white">
                  <Image src="/images/couple-romantic.jpg" alt="Couple" fill className="object-cover" />
                </div>

                <div className="absolute bottom-1/4 right-0 z-40 bg-gold text-white w-32 h-32 rounded-full flex flex-col items-center justify-center text-center shadow-[0_10px_20px_rgba(184,151,106,0.3)] border-4 border-pureWhite">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-1"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></svg>
                  <span className="font-bold font-sans text-xs">10+ Years</span>
                  <span className="text-[10px] uppercase tracking-wider">Experience</span>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION C: CATEGORY GRID */}
      <section className="w-full py-24 bg-ivory text-darkGrey relative border-t border-gold/10">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-4 relative inline-block text-charcoal">
              What We Capture
              <span className="absolute -bottom-2 left-1/4 right-1/4 h-[1px] bg-gold"></span>
            </h2>
            <p className="mt-4 md:mt-6 text-midGrey font-sans tracking-wide uppercase text-xs md:text-sm">Every milestone. Every emotion. Every story.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Wedding Photography", img: "/images/wedding-ceremony.jpg", desc: "Your love story told in frames" },
              { title: "Pre-Wedding Shoot", img: "/images/couple-prewedding.jpg", desc: "Before the vows" },
              { title: "Baby Photography", img: "/images/baby-newborn.jpg", desc: "Little moments, enormous love" },
              { title: "Maternity", img: "/images/maternity-shoot.jpg", desc: "Glowing and breathtaking" },
              { title: "Events & Functions", img: "/images/events-solo.jpg", desc: "Where laughter fills the room" },
              { title: "Couple Shoot", img: "/images/couple-romantic.jpg", desc: "Two hearts, one story" }
            ].map((cat, i) => (
              <ScrollReveal direction="up" delay={i * 0.1} key={i}>
                <Link href="/portfolio" className="group relative aspect-[4/5] overflow-hidden rounded-sm block shadow-md hover:shadow-xl transition-shadow duration-500">
                  <Image src={cat.img} alt={cat.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 border border-white/20">
                    <h3 className="font-serif text-3xl mb-2 text-charcoal">{cat.title}</h3>
                    <p className="font-sans text-darkGrey text-xs uppercase tracking-wider mb-0 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 font-bold">
                      {cat.desc} →
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION D: WHY CHOOSE US */}
      <section className="w-full py-24 bg-cream text-darkGrey border-t border-gold/10">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl text-center">
          <ScrollReveal direction="up">
            <h2 className="font-serif text-4xl md:text-5xl mb-4 text-charcoal leading-tight">Why Families Trust Bioscope Photo Art</h2>
            <p className="mb-12 md:mb-16 text-midGrey max-w-2xl mx-auto font-sans text-base md:text-lg">We go beyond clicking buttons; we capture the essence of your most important celebrations with a premium touch.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>,
                title: "Experience & Expertise",
                desc: "Years of experience capturing Bengali weddings and celebrations."
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></svg>,
                title: "Premium Quality",
                desc: "High-end equipment and meticulous editing for flawless results."
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
                title: "Reliable Delivery",
                desc: "No waiting for months. Fast turnaround times for your precious photos."
              }
            ].map((feature, idx) => (
              <ScrollReveal direction="up" delay={idx * 0.2} key={idx}>
                <div className="flex flex-col items-center bg-pureWhite p-10 rounded-sm shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gold/10 hover:border-gold/50 transition-colors duration-300 h-full">
                  <div className="bg-ivory p-5 rounded-full border border-gold/20 text-gold mb-6">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold uppercase tracking-wider mb-3 text-charcoal text-sm">{feature.title}</h4>
                  <p className="text-darkGrey text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION E: CTA BANNER */}
      <section className="w-full relative py-20 md:py-24 overflow-hidden bg-gold-gradient">
        <ScrollReveal direction="up" className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mb-4 md:mb-6">Let&apos;s Begin Your Story</h2>
          <p className="text-darkGrey text-lg md:text-xl mb-8 md:mb-10 font-sans">
            Dates book up fast! Reach out on WhatsApp and we&apos;ll get back to you instantly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full max-w-xl mx-auto">
            <a href="https://wa.me/918097904175?text=Hi" target="_blank" rel="noreferrer" className="bg-gold text-white hover:bg-goldDark px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-gold/30 hover:shadow-gold/50 flex items-center justify-center gap-2 w-full sm:w-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
              Chat on WhatsApp
            </a>
            <Link href="/contact" className="bg-charcoal text-white hover:bg-darkGrey px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all duration-300 shadow-lg flex items-center justify-center w-full sm:w-auto">
              Call Now: 8097904175
            </Link>
          </div>
        </ScrollReveal>
      </section>

    </main>
  );
}
