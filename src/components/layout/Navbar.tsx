"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinkClass = "relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full hover:text-gold transition-colors";

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-lg py-2 shadow-[0_2px_20px_rgba(0,0,0,0.06)] border-b border-gold/10" : "bg-gradient-to-b from-white/95 via-white/70 to-transparent py-4"}`}>
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-0">
                    <Image src="/images/LogoMain.png" alt="Bioscope Camera Logo" width={100} height={100} className="w-[100px] md:w-[120px] h-auto object-contain brightness-0" priority />
                    <Image src="/images/LogoText.png" alt="Bioscope Photo Art" width={130} height={35} className="w-[130px] md:w-[160px] h-auto object-contain hidden sm:block brightness-0 -ml-6" priority />
                    <span className="font-serif text-lg sm:hidden text-charcoal tracking-wider font-bold">Bioscope</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-7 items-center text-charcoal text-[13px] uppercase tracking-[0.15em] font-sans font-semibold">
                    <Link href="/" className={navLinkClass}>Home</Link>
                    <Link href="/about" className={navLinkClass}>About</Link>
                    <Link href="/portfolio" className={navLinkClass}>Portfolio</Link>
                    <Link href="/packages" className={navLinkClass}>Packages</Link>
                    <Link href="/contact" className={navLinkClass}>Contact</Link>
                </nav>

                {/* Right Side CTA */}
                <div className="hidden md:flex items-center gap-3">
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal hover:bg-gold hover:border-gold hover:text-white transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                    </a>
                    <a href="https://wa.me/918097904175" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
                    </a>
                    <Link href="/contact" className="bg-gold hover:bg-goldDark text-white px-6 py-2.5 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-gold/30 tracking-wider text-xs uppercase ml-1">
                        Book Now
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-charcoal bg-white/70 p-2 rounded-full backdrop-blur-sm border border-gold/20 shadow-sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-xl pt-24 px-8 flex flex-col gap-6 z-40 h-screen text-charcoal">
                    <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif hover:text-gold border-b border-gold/10 pb-3 transition-colors">Home</Link>
                    <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif hover:text-gold border-b border-gold/10 pb-3 transition-colors">About</Link>
                    <Link href="/portfolio" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif hover:text-gold border-b border-gold/10 pb-3 transition-colors">Portfolio</Link>
                    <Link href="/packages" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif hover:text-gold border-b border-gold/10 pb-3 transition-colors">Packages</Link>
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif hover:text-gold border-b border-gold/10 pb-3 transition-colors">Contact</Link>
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="mt-4 bg-gold text-white text-center py-4 rounded-full font-bold uppercase tracking-wider text-sm shadow-lg shadow-gold/20">
                        Book Now
                    </Link>
                </div>
            )}
        </header>
    );
}
