"use client";

import { Fish, Check, Layers, Shield, Salad, Beef } from "lucide-react";
import { motion } from "framer-motion";

export default function ScienceSection() {
    return (
        <section className="py-24 bg-functional-white border-b border-gray-100" id="science">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center md:text-left">
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider rounded mb-4">
                        Application
                    </span>
                    <h2 className="text-4xl font-bold text-primary mb-2 font-heading">
                        Organic Use & Application Methods
                    </h2>
                    <div className="h-1.5 w-20 bg-accent mx-auto md:mx-0 mb-6" />
                    <p className="text-functional-gray text-lg max-w-3xl">
                        A natural, regulated and safe ingredient, enabling organic-certified production and versatile application methods.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                    {/* Left Column: Premium Fish Industry Visual Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative overflow-hidden bg-primary text-white rounded-2xl p-8 md:p-12 flex flex-col justify-between shadow-xl min-h-[450px]"
                    >
                        {/* Decorative Background */}
                        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent via-primary to-primary" />
                        <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] opacity-5" />

                        <div className="relative z-10">
                            <div className="flex gap-4 mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-accent shadow-inner">
                                    <Fish size={36} strokeWidth={1.5} />
                                </div>
                                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-accent shadow-inner">
                                    <Salad size={36} strokeWidth={1.5} />
                                </div>
                                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-accent shadow-inner">
                                    <Beef size={36} strokeWidth={1.5} />
                                </div>
                            </div>
                            <h3 className="text-3xl font-bold font-heading mb-4 leading-tight">
                                Suitable for fish, salads, meat preparations and more
                            </h3>
                            <p className="text-gray-300 leading-relaxed max-w-md mb-8">
                                The product has been rigorously tested in fish products, salads and meat preparations. Our E 270 lactic acid maintains structural integrity, prevents discoloration, and extends freshness while subtly improving the food&apos;s sensory profile.
                            </p>
                        </div>

                        <div className="relative z-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                                    <Check size={12} strokeWidth={3} />
                                </div>
                                <span className="text-sm font-medium text-gray-200">Stabilizes the Food Matrix</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                                    <Check size={12} strokeWidth={3} />
                                </div>
                                <span className="text-sm font-medium text-gray-200">Improved Sensoric Perception</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                                    <Check size={12} strokeWidth={3} />
                                </div>
                                <span className="text-sm font-medium text-gray-200">No Discoloration</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                                    <Check size={12} strokeWidth={3} />
                                </div>
                                <span className="text-sm font-medium text-gray-200">No Off-Odor</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Two Large Panels */}
                    <div className="flex flex-col gap-6 justify-between">
                        {/* Panel 1: Organic Use */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-white p-8 rounded-2xl border border-clinical-border shadow-sm flex-1 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                                        <Shield size={20} />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary font-heading">Organic Use</h3>
                                </div>
                                <p className="text-functional-gray text-sm leading-relaxed mb-4">
                                    Our L(+) lactic acid (E 270) is approved for organic food production under EU regulations. It serves as a superior, clean-label replacement for non-organic additives like vinegar-based additives (e.g., E 267 buffered vinegar and other synthetic salts).
                                </p>
                            </div>
                            <div className="text-xs text-accent font-semibold flex items-center gap-1.5 bg-accent/5 px-3 py-2 rounded-lg self-start">
                                🇪🇺 Naturally fermented lactic acid E 270 listed as approved for organic use (økologi)
                            </div>
                        </motion.div>

                        {/* Panel 2: Application Methods */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white p-8 rounded-2xl border border-clinical-border shadow-sm flex-1"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                                    <Layers size={20} />
                                </div>
                                <h3 className="text-xl font-bold text-primary font-heading">Application Methods</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex flex-col gap-2">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold font-mono">01</div>
                                    <strong className="text-xs text-primary font-bold">Stitch Injector Brining</strong>
                                    <span className="text-[11px] text-functional-gray leading-tight">Apply via injection.</span>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex flex-col gap-2">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold font-mono">02</div>
                                    <strong className="text-xs text-primary font-bold">Surface Glazing</strong>
                                    <span className="text-[11px] text-functional-gray leading-tight">Apply directly to food surfaces.</span>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex flex-col gap-2">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold font-mono">03</div>
                                    <strong className="text-xs text-primary font-bold">Immersion Dipping / Soaking</strong>
                                    <span className="text-[11px] text-functional-gray leading-tight">Immerse in brine suspensions.</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
