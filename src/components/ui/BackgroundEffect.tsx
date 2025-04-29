'use client'

import { motion } from "framer-motion";

interface BackgroundEffectProps {
    className?: string;
    gradientColors?: {
        from: string;
        to: string;
    };
    opacity?: number;
    blur?: number;
    size?: {
        width: string;
        height: string;
    };
    position?: {
        x: string;
        y: string;
    };
    animation?: {
        duration?: number;
        delay?: number;
        repeat?: number;
    };
}

export default function BackgroundEffect({
    className = "",
    gradientColors = {
        from: "turquoise-500",
        to: "munsell-500"
    },
    opacity = 0.2,
    blur = 3,
    size = {
        width: "800px",
        height: "800px"
    },
    position = {
        x: "1/2",
        y: "1/2"
    },
    animation = {
        duration: 1,
        delay: 0,
        repeat: Infinity
    }
}: BackgroundEffectProps) {
    return (
        <motion.div
            className={`absolute inset-0 z-0 ${className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: animation.duration }}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-tekhelet-500)_0%,_transparent_50%)] opacity-10" />
            <motion.div
                className={`absolute top-${position.y} left-${position.x} -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_var(--color-${gradientColors.from})_0%,_transparent_70%)] opacity-${opacity} blur-${blur}xl`}
                style={{
                    width: size.width,
                    height: size.height
                }}
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [opacity, opacity * 1.5, opacity],
                }}
                transition={{
                    duration: animation.duration,
                    repeat: animation.repeat,
                    repeatType: "reverse",
                    delay: animation.delay
                }}
            />
        </motion.div>
    );
} 