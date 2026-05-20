"use client";

import { useState } from "react";
import { Button } from "../ui/button";

export default function ContactSection() {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const subject = encodeURIComponent("Technical Information Request");
        const body = encodeURIComponent(
            `Name: ${name}\n` +
            `Company: ${company}\n` +
            `Email: ${email}\n` +
            `Role: ${role}\n\n` +
            `Message:\n${message}`
        );
        window.location.href = `mailto:contact@bioculturenordic.com?subject=${subject}&body=${body}`;
    };

    return (
        <section className="py-24 bg-primary text-white relative overflow-hidden" id="contact">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 skew-x-12 translate-x-32 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Request Technical Information</h2>
                    </div>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-bold text-gray-400 uppercase tracking-wide">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-white/10 border border-white/20 rounded h-12 px-4 focus:outline-none focus:border-accent focus:bg-white/20 transition-colors text-white"
                                placeholder=""
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="company" className="text-sm font-bold text-gray-400 uppercase tracking-wide">Company</label>
                            <input
                                type="text"
                                id="company"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                className="w-full bg-white/10 border border-white/20 rounded h-12 px-4 focus:outline-none focus:border-accent focus:bg-white/20 transition-colors text-white"
                                placeholder=""
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-bold text-gray-400 uppercase tracking-wide">Work Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-white/10 border border-white/20 rounded h-12 px-4 focus:outline-none focus:border-accent focus:bg-white/20 transition-colors text-white"
                                placeholder=""
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="role" className="text-sm font-bold text-gray-400 uppercase tracking-wide">Role</label>
                            <input
                                type="text"
                                id="role"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="w-full bg-white/10 border border-white/20 rounded h-12 px-4 focus:outline-none focus:border-accent focus:bg-white/20 transition-colors text-white"
                                placeholder=""
                                required
                            />
                        </div>

                        <div className="md:col-span-2 space-y-2">
                            <label htmlFor="message" className="text-sm font-bold text-gray-400 uppercase tracking-wide">Message</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={4}
                                className="w-full bg-white/10 border border-white/20 rounded py-3 px-4 focus:outline-none focus:border-accent focus:bg-white/20 transition-colors text-white resize-none"
                                placeholder=""
                            />
                        </div>

                        <div className="md:col-span-2 mt-4">
                            <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent-hover text-white py-6 text-lg">
                                Request Technical Information
                            </Button>
                            <p className="text-center text-xs text-gray-500 mt-4">
                                Your data is protected. We respect professional privacy.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
