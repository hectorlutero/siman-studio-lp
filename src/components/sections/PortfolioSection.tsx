'use client'

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
// import { ArrowRight } from "lucide-react";

export default function PortfolioSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="relative py-32" ref={ref}>
            {/* Background Elements */}
            <motion.div
                className="absolute inset-0 z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-tekhelet-500)_0%,_transparent_50%)] opacity-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--color-munsell-500)_0%,_transparent_70%)] opacity-20 blur-3xl" />
            </motion.div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.div variants={itemVariants}>
                        <h2 className="text-5xl font-bold mb-6">Our Work</h2>
                        <p className="text-xl text-white-300 mb-8">
                            {"Discover how we've helped businesses like yours achieve their digital goals."}
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-oxford-300/50 backdrop-blur-sm p-12 rounded-lg mb-12"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <p className="text-2xl text-white-300">
                            Portfolio coming soon - Stay tuned for our latest projects and success stories.
                        </p>
                    </motion.div>

                    <motion.button
                        className="tech-button group flex items-center gap-2 mx-auto"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        Schedule a Call to See More
                        <span className="w-2 h-2 rounded-full bg-turquoise-500 group-hover:bg-munsell-500 transition-colors"></span>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
} 