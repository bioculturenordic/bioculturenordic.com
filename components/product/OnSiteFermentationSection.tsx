"use client";

import { Check } from "lucide-react";
import ScrollCanvas from "./ScrollCanvas";

export default function OnSiteFermentationSection() {
    return (
        <section id="fermentation" className="py-24 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image Block - Left Side */}
                    <div className="order-1 h-[600px] relative flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full relative overflow-hidden">
                            <ScrollCanvas
                                triggerOnView={true}
                                duration={1.5}
                                folderPath="/images/cultivator"
                                frameCount={192} // Assuming 192 as seen in ScrollCanvas default or original implementation plan
                                filePrefix="frame_"
                                showLoader={false}
                                objectFit="contain"
                                className="!absolute !w-full !h-full !relative transform scale-[1.01] origin-center"
                            />
                        </div>
                    </div>

                    {/* Content Block - Right Side */}
                    <div className="order-2">
                        <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider rounded mb-6">
                            Fermentation
                        </span>
                        <h2 className="text-4xl font-bold text-primary mb-2 font-heading">
                            Controlled Fermentation Origin
                        </h2>
                        <div className="w-20 h-1.5 bg-accent mb-8"></div>

                        <p className="text-lg text-functional-gray mb-8">
                            Our L(+) lactic acid (E 270) is manufactured under sterile, optimized conditions in BioCulture Nordic&apos;s advanced aseptic fermentation facilities. By utilizing non-GMO, QPS-listed lactic acid bacteria, we deliver a premium, non-synthetic preservative ready-to-use out of its container.
                        </p>

                        <ul className="space-y-6 mb-10">
                            <li className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent mt-0.5 shrink-0">
                                    <Check size={14} strokeWidth={3} />
                                </div>
                                <div>
                                    <strong className="block text-primary">Aseptic Cleanroom Packaging</strong>
                                    <span className="text-functional-gray text-sm">Packaged as a liquid in food-grade bags. All packaging is assembled in certified ISO-8 cleanrooms.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent mt-0.5 shrink-0">
                                    <Check size={14} strokeWidth={3} />
                                </div>
                                <div>
                                    <strong className="block text-primary">HACCP & GMP Production</strong>
                                    <span className="text-functional-gray text-sm">Produced in strict compliance with European regulations (EC) 178/2002 and (EC) 852/2004, adhering to the highest food hygiene standards.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent mt-0.5 shrink-0">
                                    <Check size={14} strokeWidth={3} />
                                </div>
                                <div>
                                    <strong className="block text-primary">Rigorous Batch Traceability</strong>
                                    <span className="text-functional-gray text-sm">Every production batch is fully documented and accompanied by a batch report and conformity certificates.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent mt-0.5 shrink-0">
                                    <Check size={14} strokeWidth={3} />
                                </div>
                                <div>
                                    <strong className="block text-primary">Ready-To-Use Convenience</strong>
                                    <span className="text-functional-gray text-sm">Available in 1-2% aqueous form, eliminating the need for user mixing, dilution, or handling of hazardous concentrates.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent mt-0.5 shrink-0">
                                    <Check size={14} strokeWidth={3} />
                                </div>
                                <div>
                                    <strong className="block text-primary">Stable & Standardized Quality</strong>
                                    <span className="text-functional-gray text-sm">Maintains optimal stability under standard storage conditions, ensuring consistent acidity regulation and food sensory improvement.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent mt-0.5 shrink-0">
                                    <Check size={14} strokeWidth={3} />
                                </div>
                                <div>
                                    <strong className="block text-primary">Improved Logistics</strong>
                                    <span className="text-functional-gray text-sm">The final mixing can be performed on-site when provided with our fermentation unit. This improves logistics, and can be prepared on-demand when needed in production.</span>
                                </div>
                            </li>
                        </ul>

                        {/* Removed contact hyperlink per user request */}
                    </div>

                </div>
            </div>
        </section>
    );
}
