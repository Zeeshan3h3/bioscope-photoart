import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-cream border-t border-gold/20 pt-16 pb-8 text-darkGrey">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Col 1 */}
                    <div className="space-y-6">
                        <div className="flex flex-col items-start">
                            <span className="font-serif text-gold uppercase tracking-widest text-xl font-bold">Bioscope</span>
                            <span className="font-sans text-xs tracking-widest text-darkGrey">Photo Art</span>
                        </div>
                        <p className="font-serif italic text-lg text-charcoal">&quot;Capturing the Joy of Life&quot;</p>
                        <div className="flex items-center space-x-2 text-darkGrey text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8A951" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                            <span>Kolkata, West Bengal, India</span>
                        </div>
                    </div>

                    {/* Col 2 */}
                    <div>
                        <h4 className="font-sans font-bold uppercase tracking-wider mb-6 text-charcoal text-sm">Quick Links</h4>
                        <ul className="space-y-3 text-darkGrey text-sm">
                            <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
                            <li><Link href="/portfolio" className="hover:text-gold transition-colors">Portfolio</Link></li>
                            <li><Link href="/packages" className="hover:text-gold transition-colors">Packages</Link></li>
                            <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Col 3 */}
                    <div>
                        <h4 className="font-sans font-bold uppercase tracking-wider mb-6 text-charcoal text-sm">Our Services</h4>
                        <ul className="space-y-3 text-darkGrey text-sm">
                            <li><Link href="/portfolio/wedding" className="hover:text-gold transition-colors">Wedding Photography</Link></li>
                            <li><Link href="/portfolio/pre-wedding" className="hover:text-gold transition-colors">Pre-Wedding Shoots</Link></li>
                            <li><Link href="/portfolio/baby" className="hover:text-gold transition-colors">Baby Photography</Link></li>
                            <li><Link href="/portfolio" className="hover:text-gold transition-colors">Maternity Shoots</Link></li>
                            <li><Link href="/portfolio" className="hover:text-gold transition-colors">Events &amp; Functions</Link></li>
                        </ul>
                    </div>

                    {/* Col 4 */}
                    <div>
                        <h4 className="font-sans font-bold uppercase tracking-wider mb-6 text-charcoal text-sm">Contact Us</h4>
                        <ul className="space-y-4 text-darkGrey text-sm">
                            <li className="flex items-center space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8A951" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
                                <a href="tel:+918097904175" className="hover:text-gold transition-colors">+91 8097904175</a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8A951" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                <a href="mailto:bioscopephotoart@gmail.com" className="hover:text-gold transition-colors">bioscopephotoart@gmail.com</a>
                            </li>
                        </ul>
                        <div className="flex space-x-4 mt-6">
                            <a href="#" className="w-10 h-10 rounded-full border border-darkGrey/20 flex items-center justify-center text-gold hover:bg-gold hover:text-white hover:border-gold transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-darkGrey/20 flex items-center justify-center text-gold hover:bg-gold hover:text-white hover:border-gold transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-darkGrey/20 flex items-center justify-center text-gold hover:bg-gold hover:text-white hover:border-gold transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-darkGrey/10 flex flex-col md:flex-row justify-between items-center text-xs text-midGrey">
                    <p>&copy; {new Date().getFullYear()} Bioscope Photo Art. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Designed with ❤️ in Kolkata</p>
                </div>
            </div>
        </footer>
    );
}
