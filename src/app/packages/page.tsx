import React from "react";
import Link from "next/link";

function CheckIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12" /></svg>
    );
}

export default function PackagesPage() {
    const WHATSAPP_URL = "https://wa.me/918097904175?text=Hi%21%20I%27m%20interested%20in%20a%20custom%20package%20quote.";

    return (
        <main className="min-h-screen bg-pureWhite text-darkGrey pt-32 pb-24">
            <div className="container mx-auto px-4 text-center max-w-4xl mb-20">
                <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-6">Our Photography Packages</h1>
                <p className="font-sans text-midGrey text-lg uppercase tracking-wider text-sm font-bold">
                    Transparent pricing. No hidden costs. Memories that last forever.
                </p>
            </div>

            <section className="container mx-auto px-4 md:px-8 mb-24 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

                    {/* Tier 1 */}
                    <div className="bg-ivory border border-gold/10 rounded-sm p-8 hover:border-gold/30 hover:shadow-lg transition-all">
                        <h3 className="font-serif text-3xl mb-1 text-charcoal">Moments</h3>
                        <p className="text-sm uppercase tracking-widest text-gold mb-6 font-bold">Silver Package</p>
                        <div className="text-4xl font-sans mb-8 pb-8 border-b border-gold/10 text-charcoal font-bold">
                            <span className="text-sm text-midGrey align-top font-normal mr-1">From</span>₹15,000
                        </div>
                        <ul className="space-y-4 mb-10 text-darkGrey font-medium">
                            <li className="flex items-start gap-3"><CheckIcon /> <span>4 hours of coverage</span></li>
                            <li className="flex items-start gap-3"><CheckIcon /> <span>1 Lead Photographer</span></li>
                            <li className="flex items-start gap-3"><CheckIcon /> <span>200+ Edited High-Res Photos</span></li>
                            <li className="flex items-start gap-3"><CheckIcon /> <span>Private Online Gallery</span></li>
                            <li className="flex items-start gap-3 text-midGrey/80"><CheckIcon /> <span>No Physical Album</span></li>
                        </ul>
                        <Link href="/contact" className="block w-full border-2 border-gold text-gold hover:bg-gold hover:text-white py-4 rounded-sm text-center font-bold uppercase tracking-wider transition-colors shadow-sm">
                            Enquire Now
                        </Link>
                    </div>

                    {/* Tier 2 (Popular) */}
                    <div className="bg-cream border-2 border-gold rounded-sm p-8 shadow-[0_20px_40px_rgba(184,151,106,0.15)] transform md:-translate-y-4 relative">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gold text-white font-bold uppercase tracking-widest text-xs py-1.5 px-5 rounded-full shadow-md">
                            Most Popular
                        </div>
                        <h3 className="font-serif text-3xl mb-1 text-charcoal mt-4">Memories</h3>
                        <p className="text-sm uppercase tracking-widest text-gold mb-6 font-bold">Gold Package</p>
                        <div className="text-4xl font-sans mb-8 pb-8 border-b border-gold/10 text-charcoal font-bold">
                            <span className="text-sm text-midGrey align-top font-normal mr-1">From</span>₹25,000
                        </div>
                        <ul className="space-y-4 mb-10 text-darkGrey font-medium">
                            <li className="flex items-start gap-3"><CheckIcon /> <span>8 hours of coverage</span></li>
                            <li className="flex items-start gap-3"><CheckIcon /> <span>2 Photographers</span></li>
                            <li className="flex items-start gap-3"><CheckIcon /> <span>400+ Edited High-Res Photos</span></li>
                            <li className="flex items-start gap-3"><CheckIcon /> <span>Private Online Gallery</span></li>
                            <li className="flex items-start gap-3 bg-gold/10 p-2 rounded-sm -ml-2 -mr-2"><CheckIcon /> <span>Premium Layflat Album</span></li>
                            <li className="flex items-start gap-3"><CheckIcon /> <span>Same-day Highlights</span></li>
                        </ul>
                        <Link href="/contact" className="block w-full bg-gold text-white hover:bg-goldDark py-4 rounded-sm text-center font-bold uppercase tracking-wider transition-colors shadow-lg shadow-gold/20">
                            Book This Package
                        </Link>
                    </div>

                    {/* Tier 3 */}
                    <div className="bg-ivory border border-gold/10 rounded-sm p-8 hover:border-gold/30 hover:shadow-lg transition-all">
                        <h3 className="font-serif text-3xl mb-1 text-charcoal">Legacy</h3>
                        <p className="text-sm uppercase tracking-widest text-gold mb-6 font-bold">Platinum Package</p>
                        <div className="text-4xl font-sans mb-8 pb-8 border-b border-gold/10 text-charcoal font-bold">
                            <span className="text-sm text-midGrey align-top font-normal mr-1">From</span>₹45,000
                        </div>
                        <ul className="space-y-4 mb-10 text-darkGrey font-medium">
                            <li className="flex items-start gap-3"><CheckIcon /> <span>Full Day (12+ hours)</span></li>
                            <li className="flex items-start gap-3"><CheckIcon /> <span>3+ Photography Team</span></li>
                            <li className="flex items-start gap-3"><CheckIcon /> <span>700+ Edited High-Res Photos</span></li>
                            <li className="flex items-start gap-3"><CheckIcon /> <span>Luxury Album + Keepsake Box</span></li>
                            <li className="flex items-start gap-3"><CheckIcon /> <span>Cinematic Video Film</span></li>
                            <li className="flex items-start gap-3"><CheckIcon /> <span>Drone Coverage</span></li>
                        </ul>
                        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="block w-full border-2 border-gold text-gold hover:bg-gold hover:text-white py-4 rounded-sm text-center font-bold uppercase tracking-wider transition-colors shadow-sm">
                            Get Custom Quote
                        </a>
                    </div>

                </div>

                <p className="text-center mt-12 text-midGrey font-sans italic text-sm">
                    * All packages are customizable. Contact us to build your perfect package.
                </p>
            </section>

            {/* FAQ Section */}
            <section className="container mx-auto px-4 max-w-4xl border-t border-gold/10 pt-16">
                <h2 className="font-serif text-4xl text-center mb-12 text-charcoal">Frequently Asked Questions</h2>

                <div className="space-y-6">
                    <div className="bg-pureWhite p-8 rounded-sm border border-gold/10 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-lg mb-2 text-charcoal">How far in advance should I book?</h4>
                        <p className="text-midGrey">For weddings, we recommend booking 6-8 months in advance as dates fill up quickly during peak seasons. For smaller events and shoots, 1-2 months is usually sufficient.</p>
                    </div>
                    <div className="bg-pureWhite p-8 rounded-sm border border-gold/10 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-lg mb-2 text-charcoal">How long before I receive my photos?</h4>
                        <p className="text-midGrey">We provide a sneak peek within 48 hours! The full gallery is typically delivered within 4-6 weeks for weddings, and 2-3 weeks for portrait/baby sessions.</p>
                    </div>
                    <div className="bg-pureWhite p-8 rounded-sm border border-gold/10 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-lg mb-2 text-charcoal">Do you cover destination events?</h4>
                        <p className="text-midGrey">Yes! While we are based in Kolkata, we love to travel and cover events across India and internationally. Travel and accommodation fees are billed separately.</p>
                    </div>
                </div>
            </section>

        </main>
    );
}
