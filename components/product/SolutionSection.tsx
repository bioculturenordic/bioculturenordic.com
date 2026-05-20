"use client";

import { Check } from "lucide-react";
import ScrollCanvas from "./ScrollCanvas";

export default function SolutionSection() {
    return (
        <section id="solution" className="py-24 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Content Block */}
                    <div className="order-2 lg:order-1">
                        <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider rounded mb-6">
                            The Solution
                        </span>
                        <h2 className="text-4xl font-bold text-primary mb-2 font-heading">
                            Your Lactic Acid for Organic Clean Label Fish and Other Foods
                        </h2>
                        <div className="w-20 h-1.5 bg-accent mb-8"></div>

                        <p className="text-lg text-functional-gray mb-8">
                            Our 1-2% ready-to-use aqueous lactic acid (E 270) solution provides acidity regulation and mild preservation. Specially optimized for fish and food processing, it stabilizes the food matrix while preserving quality.
                        </p>

                        <ul className="space-y-6 mb-10">
                            <li className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent mt-0.5 shrink-0">
                                    <Check size={14} strokeWidth={3} />
                                </div>
                                <div>
                                    <strong className="block text-primary">Clean Label & Organic Compliant</strong>
                                    <span className="text-functional-gray text-sm">Approved for organic (økologisk) food production in accordance with Commission Regulation (EU) 2021/1165, offering a natural replacement for chemical ingredients.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent mt-0.5 shrink-0">
                                    <Check size={14} strokeWidth={3} />
                                </div>
                                <div>
                                    <strong className="block text-primary">Ready-To-Use Out of Container</strong>
                                    <span className="text-functional-gray text-sm">Commercially prepared at a safe, non-hazardous 1-2% aqueous concentration, requiring no pre-dilution or special handling.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent mt-0.5 shrink-0">
                                    <Check size={14} strokeWidth={3} />
                                </div>
                                <div>
                                    <strong className="block text-primary">Sensory Profile Improvement</strong>
                                    <span className="text-functional-gray text-sm">Providing a subtle enhancement to the texture and overall sensory profile of the food.</span>
                                </div>
                            </li>
                        </ul>

                        {/* Removed contact hyperlink per user request */}
                    </div>

                    {/* Image Block */}
                    <div className="order-1 lg:order-2 h-[600px] relative flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full relative overflow-hidden">
                            <ScrollCanvas
                                triggerOnView={true}
                                duration={1.5}
                                folderPath="/images/product_bag"
                                frameCount={108}
                                filePrefix="frame_"
                                showLoader={false}
                                className="!absolute !w-full !h-full !relative object-cover transform scale-150 origin-center"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
