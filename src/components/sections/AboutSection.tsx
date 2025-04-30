'use client'
import { CheckCircle, Cpu, Rocket, Target, Zap } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
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
                {/* First Section - Company Story */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.div className="space-y-10" variants={itemVariants}>
                        <div className="space-y-6">
                            <motion.h2 className="text-5xl md:text-7xl font-bold mb-4" variants={itemVariants}>
                                <span className="block text-white tech-heading">About Us</span>
                            </motion.h2>
                            <p className="text-xl text-white-300 leading-relaxed">
                                Founded by Hector Siman, a seasoned full-stack developer and Project Manager with over 6 years of experience, Siman Studio brings together expertise from diverse industries to deliver custom, fast, and trustworthy web solutions.
                            </p>
                            <p className="text-white-300 leading-relaxed">
                                We combine years of industry experience with modern development practices to create solutions that drive business growth and digital transformation.
                            </p>
                        </div>

                        <motion.div
                            className="grid grid-cols-2 gap-6"
                            variants={itemVariants}
                        >
                            <motion.div
                                className="bg-oxford-300/50 backdrop-blur-sm p-6 rounded-lg hover:bg-oxford-300/60 transition-colors"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="p-3 bg-turquoise-500/10 rounded-lg w-fit mb-4">
                                    <Rocket className="w-6 h-6 text-turquoise-500" />
                                </div>
                                <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
                                <p className="text-white-300">Get your website up and running within 2 weeks</p>
                            </motion.div>
                            <motion.div
                                className="bg-oxford-300/50 backdrop-blur-sm p-6 rounded-lg hover:bg-oxford-300/60 transition-colors"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="p-3 bg-munsell-500/10 rounded-lg w-fit mb-4">
                                    <Target className="w-6 h-6 text-munsell-500" />
                                </div>
                                <h3 className="font-semibold text-lg mb-2">Client Training</h3>
                                <p className="text-white-300">Low dependency on dev services</p>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <motion.div className="relative" variants={itemVariants}>
                        <div className="relative w-full">
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-turquoise-500/20 to-munsell-500/20 rounded-full blur-3xl"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.5, 0.8, 0.5],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                }}
                            />
                            <div className="absolute inset-0 bg-oxford-300/50 backdrop-blur-sm rounded-lg" />
                            <motion.div
                                className="relative p-10"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { icon: "/icons/laravel.svg", color: "turquoise", text: "Laravel (PHP)" },
                                        { icon: "/icons/aspnet.svg", color: "munsell", text: "ASP.NET (C#)" },
                                        { icon: "/icons/nodejs.svg", color: "turquoise", text: "Node.js & Next.js" },
                                        { icon: "/icons/8n8.svg", color: "munsell", text: "8n8 Automations" }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex items-center gap-4 p-4 bg-oxford-400/50 rounded-lg hover:bg-oxford-400/60 transition-colors"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <div className={`p-3 bg-${item.color}-500/10 rounded-lg`}>
                                                <Image
                                                    src={item.icon}
                                                    alt={item.text}
                                                    width={24}
                                                    height={24}
                                                    className="w-6 h-6"
                                                />
                                            </div>
                                            <span className="text-lg text-white-300">{item.text}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Second Section - Technical Expertise */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.div className="relative order-2 lg:order-1" variants={itemVariants}>
                        <div className="relative w-full">
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-munsell-500/20 to-turquoise-500/20 rounded-full blur-3xl"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.5, 0.8, 0.5],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                }}
                            />
                            <div className="absolute inset-0 bg-oxford-300/50 backdrop-blur-sm rounded-lg" />
                            <motion.div
                                className="relative p-10"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="space-y-6">
                                    {[
                                        { icon: "/icons/laravel.svg", color: "turquoise", text: "Laravel (PHP)" },
                                        { icon: "/icons/aspnet.svg", color: "munsell", text: "ASP.NET (C#)" },
                                        { icon: "/icons/nodejs.svg", color: "turquoise", text: "Node.js" },
                                        { icon: "/icons/nextjs.svg", color: "turquoise", text: "Next.js" },
                                        { icon: "/icons/8n8.svg", color: "munsell", text: "8n8 Automations" }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex items-center gap-4 p-4 bg-oxford-400/50 rounded-lg hover:bg-oxford-400/60 transition-colors"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <div className={`p-3 bg-${item.color}-500/10 rounded-lg`}>
                                                <Image
                                                    src={item.icon}
                                                    alt={item.text}
                                                    width={24}
                                                    height={24}
                                                    className="w-6 h-6"
                                                />
                                            </div>
                                            <span className="text-lg text-white-300">{item.text}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div className="space-y-10 order-1 lg:order-2" variants={itemVariants}>
                        <div className="space-y-6">
                            <h2 className="text-5xl font-bold">Technical Expertise</h2>
                            <p className="text-xl text-white-300 leading-relaxed">
                                We specialize in providing custom solutions when low-code and out-of-the-box tools fall short. Our expertise spans across various industries including retail, tech, communications, e-commerce, events, and more.
                            </p>
                            <p className="text-white-300 leading-relaxed">
                                With a focus on long-term stability and best practices, we ensure your project is built to last and scale with your business needs.
                            </p>
                        </div>

                        <motion.div
                            className="grid grid-cols-2 gap-6"
                            variants={itemVariants}
                        >
                            <motion.div
                                className="bg-oxford-300/50 backdrop-blur-sm p-6 rounded-lg hover:bg-oxford-300/60 transition-colors"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="p-3 bg-turquoise-500/10 rounded-lg w-fit mb-4">
                                    <Rocket className="w-6 h-6 text-turquoise-500" />
                                </div>
                                <h3 className="font-semibold text-lg mb-2">Custom Solutions</h3>
                                <p className="text-white-300">Tailored to your specific needs</p>
                            </motion.div>
                            <motion.div
                                className="bg-oxford-300/50 backdrop-blur-sm p-6 rounded-lg hover:bg-oxford-300/60 transition-colors"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="p-3 bg-munsell-500/10 rounded-lg w-fit mb-4">
                                    <Target className="w-6 h-6 text-munsell-500" />
                                </div>
                                <h3 className="font-semibold text-lg mb-2">Industry Focus</h3>
                                <p className="text-white-300">Multiple industry expertise</p>
                            </motion.div>
                        </motion.div>

                        <motion.button
                            className="tech-button group flex items-center gap-2 w-fit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {"Let's Discuss Your Project"}
                            <span className="w-2 h-2 rounded-full bg-turquoise-500 group-hover:bg-munsell-500 transition-colors"></span>
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
} 