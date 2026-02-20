"use client";

import { ArrowRight, Check } from "lucide-react";
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
                            On-Site Production
                        </span>
                        <h2 className="text-4xl font-bold text-primary mb-2 font-heading">
                            Your One-Click Fermentation Unit
                        </h2>
                        <div className="w-20 h-1.5 bg-accent mb-8"></div>

                        <p className="text-lg text-functional-gray mb-8">
                            Take control of your bioprotection with our automated on-site fermentation unit. Designed for seamless integration into your facility, it ensures fresh, active cultures on demand.
                        </p>

                        <ul className="space-y-6 mb-10">
                            <li className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent mt-0.5 shrink-0">
                                    <Check size={14} strokeWidth={3} />
                                </div>
                                <div>
                                    <strong className="block text-primary">Plug & Play Installation</strong>
                                    <span className="text-functional-gray text-sm">Easy installation using only a standard power cord. Compact design allows it to stand anywhere in your production area.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent mt-0.5 shrink-0">
                                    <Check size={14} strokeWidth={3} />
                                </div>
                                <div>
                                    <strong className="block text-primary">Zero-Knowledge Operation</strong>
                                    <span className="text-functional-gray text-sm">Ferment with a single click. Our automated system handles the complexity, removing the need for specialized microbiological expertise.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent mt-0.5 shrink-0">
                                    <Check size={14} strokeWidth={3} />
                                </div>
                                <div>
                                    <strong className="block text-primary">Full Traceability & QC</strong>
                                    <span className="text-functional-gray text-sm">Every batch is tracked via QR codes with generated reports and strict QC release criteria, ensuring consistent quality.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent mt-0.5 shrink-0">
                                    <Check size={14} strokeWidth={3} />
                                </div>
                                <div>
                                    <strong className="block text-primary">Flexible Production</strong>
                                    <span className="text-functional-gray text-sm">Controlled automated recipes allow you to ferment on demand, perfectly fitting your production and cleaning schedules.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent mt-0.5 shrink-0">
                                    <Check size={14} strokeWidth={3} />
                                </div>
                                <div>
                                    <strong className="block text-primary">Fully Serviced Solution</strong>
                                    <span className="text-functional-gray text-sm">Zero capital investment required. The unit is owned, guaranteed, and fully serviced by BioCulture Nordic—you only pay for the cultures.</span>
                                </div>
                            </li>
                        </ul>

                        <a href="#" className="inline-flex items-center text-accent font-bold hover:text-accent-hover group text-sm">
                            Request Technical Specifications
                            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
