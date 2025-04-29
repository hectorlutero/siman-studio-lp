'use client'

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Cpu, Zap, Wrench } from "lucide-react";
// import BackgroundEffect from "../ui/BackgroundEffect";

// Service card data structure
const services = [
    {
        id: 1,
        title: "Custom Website Development",
        description: "Transform your online presence with bespoke websites built on modern technologies and best practices.",
        icon: Code,
        iconColor: "turquoise",
        buttonText: "Learn More",
        buttonColor: "turquoise"
    },
    {
        id: 2,
        title: "Custom Web Systems",
        description: "Streamline your business operations with tailor-made web applications designed for your specific needs.",
        icon: Cpu,
        iconColor: "munsell",
        buttonText: "Explore Solutions",
        buttonColor: "munsell"
    },
    {
        id: 3,
        title: "Website Speed Optimization",
        description: "Boost your website's performance and user experience with our expert optimization services.",
        icon: Zap,
        iconColor: "turquoise",
        buttonText: "Optimize Now",
        buttonColor: "turquoise"
    },
    {
        id: 4,
        title: "Wix Velo Framework & WordPress Specialists",
        description: "Leverage our expertise in Velo Framework and WordPress to build powerful, scalable websites.",
        icon: Wrench,
        iconColor: "munsell",
        buttonText: "Get Started",
        buttonColor: "munsell"
    }
];

export default function ServicesSection() {
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
        <section className="relative py-32 overflow-hidden" ref={ref}>


            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        <span className="block text-white tech-heading">Specialized</span>
                        <span className="text-turquoise-500">Web Solutions</span>
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-xl md:text-2xl text-white-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        We specialize in creating powerful, efficient, and scalable web solutions for small and medium businesses.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.id}
                                className="tech-card p-6 rounded-lg bg-oxford-300/50 backdrop-blur-sm hover:bg-oxford-400/50 transition-colors"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className={`p-3 bg-${service.iconColor}-500/10 rounded-lg w-fit mb-4`}>
                                    <Icon className={`w-6 h-6 text-${service.iconColor}-500`} />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 tech-heading">{service.title}</h3>
                                <p className="text-white-300 mb-4 leading-relaxed">
                                    {service.description}
                                </p>
                                <button className={`text-${service.buttonColor}-500 hover:text-${service.buttonColor}-400 transition-colors flex items-center gap-2 font-medium`}>
                                    {service.buttonText}
                                    <span className={`w-2 h-2 rounded-full bg-${service.buttonColor}-500`}></span>
                                </button>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
} 