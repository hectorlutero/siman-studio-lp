'use client'
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface FloatingDotsProps {
    count?: number;
    minSize?: number;
    maxSize?: number;
    minDuration?: number;
    maxDuration?: number;
    className?: string;
    showConnections?: boolean;
    connectionDistance?: number;
}

interface Point {
    x: number;
    y: number;
    size: number;
}

export const FloatingDots = ({
    count = 10,
    minSize = 8,
    maxSize = 18,
    minDuration = 3,
    maxDuration = 5,
    className = "",
    showConnections = true,
    connectionDistance = 40,
}: FloatingDotsProps) => {
    const [points, setPoints] = useState<Point[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const progress = useMotionValue(0);

    useEffect(() => {
        const newPoints = Array.from({ length: count }, () => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.floor(Math.random() * (maxSize - minSize) + minSize),
        }));
        setPoints(newPoints);
    }, [count, minSize, maxSize]);

    useEffect(() => {
        const interval = setInterval(() => {
            progress.set(progress.get() + 0.01);
            if (progress.get() > 1) progress.set(0);
        }, 50);

        return () => clearInterval(interval);
    }, [progress]);


    return (
        <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>

            {points.map((point, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-gradient-to-br from-turquoise-500/50 to-munsell-500/50 rounded-full"
                    style={{
                        width: `${point.size}px`,
                        height: `${point.size}px`,
                        left: `${point.x}%`,
                        top: `${point.y}%`,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        filter: ["blur(2px)", "blur(4px)"],
                    }}
                    transition={{
                        duration: Math.random() * (maxDuration - minDuration) + minDuration,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: Math.random() * 2,
                    }}
                />
            ))}
        </div>
    );
}; 