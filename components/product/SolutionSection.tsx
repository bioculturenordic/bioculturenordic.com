"use client";

import { ArrowRight, Check } from "lucide-react";
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
                            Your Natural Defense Against Listeria
                        </h2>
                        <div className="w-20 h-1.5 bg-accent mb-8"></div>

                        <p className="text-lg text-functional-gray mb-8">
                            Our biocultures utilize selected strains of lactic acid bacteria that naturally inhibit <i className="font-serif italic">Listeria monocytogenes</i> without altering the sensory characteristics of your food products.
                        </p>

                        <ul className="space-y-6 mb-10">
                            <li className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent mt-0.5 shrink-0">
                                    <Check size={14} strokeWidth={3} />
                                </div>
                                <div>
                                    <strong className="block text-primary">Broad-Spectrum Protection</strong>
                                    <span className="text-functional-gray text-sm">Eliminates Listeria spp. across a wide thermal range (0°C to 40°C), securing your cold chain and ambient processing<i className="italic">Listeria</i> spp. at temperatures from 0°C to 40°C.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent mt-0.5 shrink-0">
                                    <Check size={14} strokeWidth={3} />
                                </div>
                                <div>
                                    <strong className="block text-primary">Dual Application</strong>
                                    <span className="text-functional-gray text-sm">One solution for both surface sanitation and direct product inclusion, streamlining your inventory.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent mt-0.5 shrink-0">
                                    <Check size={14} strokeWidth={3} />
                                </div>
                                <div>
                                    <strong className="block text-primary">Clean Label</strong>
                                    <span className="text-functional-gray text-sm">The strains allow for ecological, organic and non-GMO certification while replacing synthetic preservatives with a natural protective culture.</span>
                                </div>
                            </li>
                        </ul>

                        <a href="#" className="inline-flex items-center text-accent font-bold hover:text-accent-hover group text-sm">
                            View Case Studies
                            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                        </a>
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
