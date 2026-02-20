"use client";

import { Button } from "../ui/button";
import { Microscope, Dna, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import ScrollCanvas from "../product/ScrollCanvas";
import LoadingScreen from "../ui/LoadingScreen";

export default function HeroSection() {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <>
            <LoadingScreen isLoading={!isLoaded} />

            {/* Adjusted height to 85vh to allow white space below it as requested */}
            <section className="relative h-[85vh] min-h-[700px] flex flex-col justify-center bg-primary overflow-hidden pt-24 pb-24 lg:pt-32 lg:pb-32">

                {/* Background Ambience */}
                <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-primary to-primary"></div>
                <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] opacity-5"></div>

                {/* Animation: Occupying Right 40% - Autoplays on load */}
                <div className="absolute top-0 right-0 h-full w-full lg:w-[40%] z-0">
                    {/* Gradient Mask to blend with left blue background */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary via-transparent to-transparent lg:via-primary/0"></div>

                    <ScrollCanvas
                        autoplay={true}
                        duration={2.5}
                        folderPath="/images/scrolling_bacteria"
                        frameCount={192}
                        filePrefix="frame_"
                        showLoader={false}
                        objectFit="cover"
                        className="w-full h-full object-left"
                        onLoaded={() => setIsLoaded(true)}
                    />
                    {/* Blue tint overlay */}
                    <div className="absolute inset-0 bg-primary/30 mix-blend-multiply z-0"></div>
                </div>

                {/* Content Layer: Left 60% */}
                <div className="relative z-20 container mx-auto px-4 flex items-center flex-grow">
                    <div className="w-full lg:w-[60%] pr-0 lg:pr-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-accent font-mono text-sm tracking-wider mb-6 block uppercase">
                                Get ready for the new EU legislation July 1, 2026
                            </span>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-heading leading-tight tracking-tight">
                                Listeria Control for <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
                                    Food Production
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-200 mb-10 font-body leading-relaxed max-w-2xl border-l-4 border-accent pl-6">
                                Bioprotective cultures designed for food and processing environments.
                            </p>

                            <div className="flex flex-wrap gap-6 mb-16">
                                <a href="/Product_Description_BCN01.pdf" download="Product_Description_BCN01.pdf">
                                    <Button size="lg" className="bg-accent hover:bg-accent-hover text-white min-w-[180px] h-14 text-lg">
                                        Download Product Description
                                    </Button>
                                </a>
                                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 min-w-[180px] h-14 text-lg">
                                    View Efficacy Data
                                </Button>
                            </div>

                            <div className="flex flex-wrap gap-8 border-t border-white/10 pt-8">
                                <div className="flex items-center gap-3 text-gray-300">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-accent text-lg">🇪🇺</div>
                                    <span className="text-sm md:text-base font-medium">EU Reg. Compliant</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-accent"><Microscope size={20} /></div>
                                    <span className="text-sm md:text-base font-medium">Scientifically Validated</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-accent"><Dna size={20} /></div>
                                    <span className="text-sm md:text-base font-medium">Natural Origin</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-accent"><Leaf size={20} /></div>
                                    <span className="text-sm md:text-base font-medium">Chemical Free</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
