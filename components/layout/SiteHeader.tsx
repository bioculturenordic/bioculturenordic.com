"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function SiteHeader() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 border-b border-gray-100",
            isScrolled ? "py-4 shadow-sm" : "py-6"
        )}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex flex-col leading-none group">
                    <span className="text-2xl font-bold font-heading text-primary tracking-tight">
                        BioCulture <span className="text-accent">Nordic</span>
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-functional-gray font-medium group-hover:text-accent transition-colors">
                        Advanced Bioprotection
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#science" className="text-sm font-medium text-functional-gray hover:text-primary transition-colors">The Science</Link>
                    <Link href="#solution" className="text-sm font-medium text-functional-gray hover:text-primary transition-colors">Product</Link>
                    <Link href="#trust" className="text-sm font-medium text-functional-gray hover:text-primary transition-colors">Compliance</Link>
                    <Link href="#science" className="text-sm font-medium text-functional-gray hover:text-primary transition-colors">Efficacy Data</Link>

                    <a href="/Product_Description_BCN01.pdf" download="Product_Description_BCN01.pdf">
                        <Button className="bg-accent hover:bg-accent-hover text-white text-sm px-6 h-10">
                            Download Product Description
                        </Button>
                    </a>
                </nav>

                {/* Mobile Menu Toggle (Simplified) */}
                <button className="md:hidden p-2 text-primary">
                    <div className="w-6 h-0.5 bg-current mb-1.5"></div>
                    <div className="w-6 h-0.5 bg-current mb-1.5"></div>
                    <div className="w-6 h-0.5 bg-current"></div>
                </button>
            </div>
        </header>
    );
}
