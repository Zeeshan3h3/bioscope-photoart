"use client";

import React from "react";

export default function WhatsAppFAB() {
    const WHATSAPP_NUMBER = "918097904175";
    const defaultMessage = "Hi! I'm interested in booking a photography session with Bioscope Photo Art. Could you please share more details?";

    const handleClick = () => {
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultMessage)}`, "_blank");
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999] group flex items-end">
            <div className="absolute right-16 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-pureWhite text-charcoal border border-gold/20 text-sm py-2 px-4 rounded-lg shadow-lg whitespace-nowrap font-sans">
                Chat with us on WhatsApp
            </div>
            <button
                onClick={handleClick}
                className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg animate-pulse-ring hover:scale-110 transition-transform duration-300"
                aria-label="WhatsApp Contact"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
            </button>
        </div>
    );
}
