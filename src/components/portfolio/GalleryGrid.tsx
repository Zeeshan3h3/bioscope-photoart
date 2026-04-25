"use client";

import React, { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface GalleryImage {
    src: string;
    alt: string;
    width: number;
    height: number;
}

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
    const [index, setIndex] = useState(-1);

    const slides = images.map(img => ({
        src: img.src,
        width: img.width,
        height: img.height,
        alt: img.alt
    }));

    return (
        <>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {images.map((img, idx) => (
                    <div
                        key={idx}
                        className="relative group overflow-hidden rounded-sm break-inside-avoid w-full shadow-sm hover:shadow-lg transition-shadow border border-gold/5 cursor-pointer"
                        onClick={() => setIndex(idx)}
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            width={img.width}
                            height={img.height}
                            className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px] transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <span className="w-12 h-12 flex items-center justify-center rounded-full border border-charcoal bg-white/80 text-charcoal shadow-sm hover:scale-110 transition-transform font-bold">+</span>
                        </div>
                    </div>
                ))}
            </div>

            <Lightbox
                index={index}
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={slides}
            />
        </>
    );
}
