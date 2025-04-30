'use client'

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function ClientCarousel() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const clients = [
        { name: "TechCorp", logo: "/clients/techcorp.svg" },
        { name: "InnovateX", logo: "/clients/innovatex.svg" },
        { name: "DigitalFlow", logo: "/clients/digitalflow.svg" },
        { name: "FutureTech", logo: "/clients/futuretech.svg" },
        { name: "WebSphere", logo: "/clients/websphere.svg" },
        { name: "CloudNine", logo: "/clients/cloudnine.svg" },
        { name: "DataMinds", logo: "/clients/dataminds.svg" },
        { name: "CodeCraft", logo: "/clients/codecraft.svg" },
        { name: "PixelPerfect", logo: "/clients/pixelperfect.svg" },
        { name: "ByteBuilders", logo: "/clients/bytebuilders.svg" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="relative py-20" ref={ref}>
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
                    className="max-w-6xl mx-auto text-center mb-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.h2 className="text-5xl md:text-7xl font-bold mb-10" variants={itemVariants}>
                        <span className="block text-white tech-heading">Trusted by Industry Leaders</span>
                    </motion.h2>
                    <motion.p className="text-xl text-white-300" variants={itemVariants}>
                        We've helped these companies transform their digital presence
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            className="bg-oxford-300/50 backdrop-blur-sm p-6 rounded-lg flex items-center justify-center h-32"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Image
                                src={client.logo}
                                alt={client.name}
                                width={120}
                                height={120}
                                className="w-24 h-24 object-contain"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
} 