"use client";

import { Button } from "../ui/button";

export default function ContactSection() {
    return (
        <section className="py-24 bg-primary text-white relative overflow-hidden" id="contact">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 skew-x-12 translate-x-32 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Secure Your Production Before 2026</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            Request the full BCN01 technical dossier, safety data sheets, and efficacy studies specific to salmon and trout applications.
                        </p>
                    </div>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-bold text-gray-400 uppercase tracking-wide">Full Name</label>
                            <input type="text" id="name" className="w-full bg-white/10 border border-white/20 rounded h-12 px-4 focus:outline-none focus:border-accent focus:bg-white/20 transition-colors" placeholder="e.g. Jean Dupont" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="company" className="text-sm font-bold text-gray-400 uppercase tracking-wide">Company</label>
                            <input type="text" id="company" className="w-full bg-white/10 border border-white/20 rounded h-12 px-4 focus:outline-none focus:border-accent focus:bg-white/20 transition-colors" placeholder="Company Name" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-bold text-gray-400 uppercase tracking-wide">Work Email</label>
                            <input type="email" id="email" className="w-full bg-white/10 border border-white/20 rounded h-12 px-4 focus:outline-none focus:border-accent focus:bg-white/20 transition-colors" placeholder="jean@company.com" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="role" className="text-sm font-bold text-gray-400 uppercase tracking-wide">Role</label>
                            <select id="role" defaultValue="" className="w-full bg-white/10 border border-white/20 rounded h-12 px-4 focus:outline-none focus:border-accent focus:bg-white/20 transition-colors text-white [&>option]:text-black">
                                <option value="" disabled>Select Role</option>
                                <option value="quality">Quality Manager</option>
                                <option value="production">Production Manager</option>
                                <option value="ceo">CEO / Director</option>
                            </select>
                        </div>

                        <div className="md:col-span-2 mt-4">
                            <Button size="lg" className="w-full bg-accent hover:bg-accent-hover text-white py-6 text-lg">
                                Request Technical Dossier
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
