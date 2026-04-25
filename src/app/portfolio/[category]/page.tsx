import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioCategories } from "@/data/portfolio";
import GalleryGrid from "@/components/portfolio/GalleryGrid";

export function generateStaticParams() {
    return portfolioCategories.map((cat) => ({
        category: cat.slug,
    }));
}

export default function CategoryPage({ params }: { params: { category: string } }) {
    const categoryData = portfolioCategories.find(c => c.slug === params.category);

    if (!categoryData) {
        notFound();
    }

    const handleBooking = `https://wa.me/918097904175?text=${encodeURIComponent(categoryData.whatsappMessage)}`;

    return (
        <main className="min-h-screen bg-ivory text-darkGrey pt-24 pb-24">
            {/* Category Hero */}
            <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden mb-16">
                <div className="absolute inset-0 bg-white/40 z-10 backdrop-blur-[2px]"></div>
                <Image
                    src={categoryData.heroImage}
                    alt={categoryData.name}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="relative z-20 text-center max-w-3xl px-4 bg-white/60 p-10 rounded-sm shadow-xl backdrop-blur-md border border-white/40">
                    <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-4 drop-shadow-sm">{categoryData.name}</h1>
                    <p className="font-sans text-xl text-darkGrey italic">{categoryData.tagline}</p>
                    <div className="mt-8 text-xs tracking-widest uppercase text-midGrey font-bold">
                        <Link href="/" className="hover:text-gold transition-colors">Home</Link> &gt; <Link href="/portfolio" className="hover:text-gold transition-colors">Portfolio</Link> &gt; <span className="text-gold">{categoryData.name}</span>
                    </div>
                </div>
            </section>

            {/* Gallery Grid (Masonry Fallback) */}
            <section className="container mx-auto px-4 md:px-8 mb-24">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <p className="font-sans text-darkGrey leading-relaxed text-lg">
                        {categoryData.description}
                    </p>
                </div>

                <GalleryGrid images={categoryData.images} />
            </section>

            {/* Booking CTA */}
            <section className="container mx-auto px-4 text-center pb-8 border-t border-gold/10 pt-16 mt-16 max-w-4xl">
                <h3 className="font-serif text-4xl mb-6 text-charcoal">Love what you see?</h3>
                <p className="text-midGrey mb-8 max-w-xl mx-auto text-lg">Let us capture your special moments with the same care and attention to detail.</p>
                <a
                    href={handleBooking}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-gold border border-gold hover:bg-goldDark text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider transition-colors shadow-lg shadow-gold/20"
                >
                    Book This Service
                </a>
            </section>
        </main>
    );
}
