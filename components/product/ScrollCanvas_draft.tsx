"use client";

import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 192;
const IMAGES_DIR = "/images/cultivator/";

export default function ScrollCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const { scrollYProgress } = useScroll({
        offset: ["start start", "end end"],
    });

    // Smooth out the scroll progress to avoid jitter
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 20,
        mass: 1,
    });

    // Map 0-1 scroll progress to frame index 0-(FRAME_COUNT-1)
    const frameIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);

    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const promises = [];

            for (let i = 0; i < FRAME_COUNT; i++) {
                const promise = new Promise<void>((resolve) => {
                    const img = new Image();
                    // Use padStart to match filenames like frame_000_...
                    // Assuming filenames are frame_000_delay-0.042s.jpg, etc.
                    // Wait, I need to know the EXACT filenames.
                    // The filenames were like frame_000_delay-0.042s.jpg. 
                    // The suffix "delay-..." changes. 
                    // I need to use a consistent naming or have a map.
                    // Since I don't have a map manifest, and filenames vary in suffix, 
                    // I will rename the files or assume I can fetch a list.
                    // Actually, I saw the filenames in `list_dir` earlier: `frame_000_delay-0.042s.jpg`
                    // The delay part varies. 
                    // CRITICAL: Next.js public folder serving. 
                    // I should probably have renamed them to simple `000.jpg`, `001.jpg` during the copy step to make this easier.

                    // Let's assume for now I will fix the filenames in a subsequent step or try to predict them.
                    // Actually, I will pause this creation to RENAME the files first because predicting "delay-0.041s" vs "0.042s" is impossible.
                    resolve();
                });
                promises.push(promise);
            }
        };
    }, []);

    return null;
}
