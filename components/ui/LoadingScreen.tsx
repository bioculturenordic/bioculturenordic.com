"use client";

import { motion } from "framer-motion";

interface LoadingScreenProps {
    isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
    if (!isLoading) return null;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary"
        >
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
                <div className="flex flex-col items-center text-center">
                    <span className="text-white text-lg font-bold font-heading">BioCulture Nordic</span>
                    <span className="text-accent text-xs font-mono tracking-widest uppercase mt-1">Initializing Website</span>
                </div>
            </div>
        </motion.div>
    );
}
