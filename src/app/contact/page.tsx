"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ScrollReveal from "@/components/ui/ScrollReveal";

type FormValues = {
    fullName: string;
    phone: string;
    service: string;
    eventDate: string;
    location: string;
    notes: string;
};

export default function ContactPage() {
    const WHATSAPP_URL = "https://wa.me/918097904175?text=Hi%21%20I%27m%20interested%20in%20booking%20with%20Bioscope%20Photo%20Art.";

    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>();
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const onSubmit = async (data: FormValues) => {
        console.log("Form Submitted:", data);

        await new Promise(resolve => setTimeout(resolve, 1000));

        setSubmitSuccess(true);
        reset();

        setTimeout(() => {
            setSubmitSuccess(false);
        }, 5000);
    };

    return (
        <main className="min-h-screen bg-ivory text-darkGrey pt-28 md:pt-32 pb-24 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24">

                    {/* Left Form */}
                    <ScrollReveal direction="left" duration={0.8}>
                        <h1 className="font-serif text-4xl md:text-5xl mb-4 text-charcoal">Get in Touch</h1>
                        <p className="font-sans text-midGrey mb-8 md:mb-12 text-sm md:text-base">We&apos;d love to hear about your upcoming event. Fill out the form below, and we&apos;ll get back to you within 24 hours.</p>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-pureWhite p-8 sm:p-10 rounded-sm shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-gold/10 relative">
                            {submitSuccess && (
                                <div className="absolute inset-0 bg-pureWhite/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center p-8 text-center rounded-sm">
                                    <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </div>
                                    <h3 className="font-serif text-3xl mb-2 text-charcoal">Thank You!</h3>
                                    <p className="text-midGrey">Your enquiry has been sent successfully. We will get back to you shortly.</p>
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-charcoal flex justify-between">
                                        Full Name *
                                        {errors.fullName && <span className="text-red-500 font-normal normal-case">Required</span>}
                                    </label>
                                    <input
                                        {...register("fullName", { required: true })}
                                        type="text"
                                        className={`w-full bg-ivory border ${errors.fullName ? 'border-red-500' : 'border-midGrey/20'} rounded-sm p-4 focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold text-charcoal`}
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-charcoal flex justify-between">
                                        Phone Number *
                                        {errors.phone && <span className="text-red-500 font-normal normal-case">Required</span>}
                                    </label>
                                    <input
                                        {...register("phone", { required: true })}
                                        type="tel"
                                        className={`w-full bg-ivory border ${errors.phone ? 'border-red-500' : 'border-midGrey/20'} rounded-sm p-4 focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold text-charcoal`}
                                        placeholder="+91 9876543210"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-charcoal flex justify-between">
                                    Service Required *
                                    {errors.service && <span className="text-red-500 font-normal normal-case">Required</span>}
                                </label>
                                <select
                                    {...register("service", { required: true })}
                                    className={`w-full bg-ivory border ${errors.service ? 'border-red-500' : 'border-midGrey/20'} rounded-sm p-4 focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold text-charcoal`}
                                >
                                    <option value="">Select a service...</option>
                                    <option value="wedding">Wedding Photography</option>
                                    <option value="pre-wedding">Pre-Wedding Shoot</option>
                                    <option value="baby">Baby Photography</option>
                                    <option value="maternity">Maternity</option>
                                    <option value="rice-ceremony">Rice Ceremony</option>
                                    <option value="events">Event / Function</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-charcoal">Event Date</label>
                                    <input
                                        {...register("eventDate")}
                                        type="date"
                                        className="w-full bg-ivory border border-midGrey/20 rounded-sm p-4 focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold text-charcoal"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-charcoal">Event Location</label>
                                    <input
                                        {...register("location")}
                                        type="text"
                                        className="w-full bg-ivory border border-midGrey/20 rounded-sm p-4 focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold text-charcoal"
                                        placeholder="Kolkata, WB"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-charcoal">Additional Notes</label>
                                <textarea
                                    {...register("notes")}
                                    rows={4}
                                    className="w-full bg-ivory border border-midGrey/20 rounded-sm p-4 focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold text-charcoal resize-none"
                                    placeholder="Tell us more about your special day..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full ${isSubmitting ? 'bg-charcoal text-white/50 cursor-not-allowed' : 'bg-gold hover:bg-goldDark text-white'} font-bold uppercase tracking-wider py-4 rounded-sm transition-colors mt-4 shadow-lg shadow-gold/20 flex justify-center items-center`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white/50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                        Sending...
                                    </>
                                ) : "Send Enquiry"}
                            </button>
                        </form>
                    </ScrollReveal>

                    {/* Right Info */}
                    <ScrollReveal direction="right" duration={0.8} delay={0.2} className="bg-cream p-8 md:p-10 lg:p-14 rounded-sm shadow-md border border-gold/10 relative overflow-hidden h-fit">
                        <div className="relative z-10">
                            <h2 className="font-serif text-3xl md:text-4xl mb-8 md:mb-12 border-b border-gold/20 pb-6 text-charcoal">Contact Information</h2>

                            <ul className="space-y-8 mb-12">
                                <li className="flex items-start gap-5">
                                    <div className="bg-pureWhite shadow-sm border border-gold/20 p-3 rounded-full text-gold mt-1 hover:scale-110 transition-transform">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase tracking-wider text-xs mb-1 text-midGrey">Call Us</h4>
                                        <a href="tel:+918097904175" className="text-xl text-charcoal hover:text-gold transition-colors block">+91 8097904175</a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-5">
                                    <div className="bg-pureWhite shadow-sm border border-gold/20 p-3 rounded-full text-gold mt-1 hover:scale-110 transition-transform">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase tracking-wider text-xs mb-1 text-midGrey">Email Us</h4>
                                        <a href="mailto:bioscopephotoart@gmail.com" className="text-xl text-charcoal hover:text-gold transition-colors block break-all">bioscopephotoart@gmail.com</a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-5">
                                    <div className="bg-pureWhite shadow-sm border border-gold/20 p-3 rounded-full text-gold mt-1 hover:scale-110 transition-transform">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase tracking-wider text-xs mb-1 text-midGrey">Studio Location</h4>
                                        <p className="text-xl text-charcoal">Kolkata, West Bengal<br />India</p>
                                    </div>
                                </li>
                            </ul>

                            {/* Instant WhatsApp Strip */}
                            <div className="mt-16 bg-[#25D366]/10 border border-[#25D366]/30 p-8 rounded-sm text-center">
                                <p className="text-charcoal font-bold mb-4 font-sans">Prefer an instant reply? Chat with us!</p>
                                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-3 rounded-full font-bold shadow-md hover:shadow-xl hover:scale-105 transition-all text-sm tracking-wider uppercase">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
                                    Start Chat
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </main >
    );
}
