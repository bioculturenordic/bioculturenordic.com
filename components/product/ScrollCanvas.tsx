"use client";

import { useScroll, useSpring, useTransform, useMotionValueEvent, MotionValue, useMotionValue, animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const DEFAULT_FRAME_COUNT = 192;

interface ScrollCanvasProps {
    className?: string;
    progress?: MotionValue<number>;
    folderPath?: string;
    frameCount?: number;
    filePrefix?: string;
    fileExtension?: string;
    onLoaded?: () => void;
    showLoader?: boolean;
    autoplay?: boolean;
    triggerOnView?: boolean;
    duration?: number;
    objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
}

export default function ScrollCanvas({
    className,
    progress,
    folderPath = "/images/cultivator",
    frameCount = DEFAULT_FRAME_COUNT,
    filePrefix = "frame_",
    fileExtension = "jpg",
    onLoaded,
    showLoader = true,
    autoplay = false,
    triggerOnView = false,
    duration = 2,
    objectFit = "contain"
}: ScrollCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    // Internal motion value for non-scroll animations
    const internalProgress = useMotionValue(0);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });

    // Determine active progress source
    const { scrollYProgress: defaultScroll } = useScroll();
    // precise precedence: external > internal (if auto/trigger) > default scroll
    const shouldUseInternal = autoplay || triggerOnView;
    const activeProgress = progress || (shouldUseInternal ? internalProgress : defaultScroll);

    // Animation Logic
    useEffect(() => {
        if (!isLoaded) return;

        if (autoplay) {
            animate(internalProgress, 1, { duration: duration, ease: "linear" });
        } else if (triggerOnView && isInView) {
            animate(internalProgress, 1, { duration: duration, ease: "linear" });
        }
    }, [isLoaded, autoplay, triggerOnView, isInView, duration, internalProgress]);

    // Smooth out the scroll progress to avoid jitter
    // We only want significant smoothing for scroll interactions
    const smoothProgress = useSpring(activeProgress, {
        stiffness: shouldUseInternal ? 200 : 50, // Stiffer for auto-play to follow duration closely
        damping: shouldUseInternal ? 30 : 20,
        mass: 1,
    });

    const currentFrame = useTransform(smoothProgress, [0, 1], [0, frameCount - 1]);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const imgArray: HTMLImageElement[] = [];

        const loadImages = async () => {
            const promises = [];

            for (let i = 0; i < frameCount; i++) {
                const promise = new Promise<void>((resolve, reject) => {
                    const img = new Image();
                    const frameNumber = i.toString().padStart(3, '0');
                    img.src = `${folderPath}/${filePrefix}${frameNumber}.${fileExtension}`;

                    img.onload = () => {
                        loadedCount++;
                        setLoadingProgress(Math.round((loadedCount / frameCount) * 100));
                        resolve();
                    };
                    img.onerror = (e) => {
                        console.error(`Failed to load frame ${i} from ${img.src}`, e);
                        resolve();
                    };
                    imgArray[i] = img;
                });
                promises.push(promise);
            }

            await Promise.all(promises);
            setImages(imgArray);
            setIsLoaded(true);
            if (onLoaded) onLoaded();

            // Draw first frame immediately
            if (canvasRef.current && imgArray[0]) {
                drawFrame(0, imgArray);
            }
        };

        loadImages();
    }, [folderPath, frameCount, filePrefix, fileExtension, onLoaded]);

    const drawFrame = (index: number, imgs: HTMLImageElement[]) => {
        const ctx = canvasRef.current?.getContext("2d");
        const idx = Math.min(imgs.length - 1, Math.max(0, Math.round(index))); // Clamp index
        const img = imgs[idx];

        if (ctx && canvasRef.current && img) {
            const canvas = canvasRef.current;
            if (canvas.width !== img.naturalWidth) canvas.width = img.naturalWidth;
            if (canvas.height !== img.naturalHeight) canvas.height = img.naturalHeight;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0);
        }
    };

    useMotionValueEvent(currentFrame, "change", (latest) => {
        if (isLoaded && images.length > 0) {
            drawFrame(latest, images);
        }
    });

    // Map objectFit prop to Tailwind class
    const objectFitClass = {
        "contain": "object-contain",
        "cover": "object-cover",
        "fill": "object-fill",
        "none": "object-none",
        "scale-down": "object-scale-down"
    }[objectFit];

    return (
        <div ref={containerRef} className={cn("sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden", className)}>
            {showLoader && !isLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-functional-white z-50 bg-primary">
                    <div className="text-2xl font-bold mb-4 font-heading">Loading BCN01</div>
                    <div className="w-64 h-1 bg-primary/50 relative overflow-hidden rounded-full border border-accent/30">
                        <div
                            className="absolute left-0 top-0 bottom-0 bg-accent transition-all duration-300 ease-out"
                            style={{ width: `${loadingProgress}%` }}
                        />
                    </div>
                    <div className="mt-2 font-mono text-xs">{loadingProgress}%</div>
                </div>
            )}
            <canvas
                ref={canvasRef}
                className={cn("w-full h-full transition-opacity duration-700", objectFitClass, isLoaded ? "opacity-100" : "opacity-0")}
            />
        </div>
    );
}
