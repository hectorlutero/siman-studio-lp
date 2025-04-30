'use client'

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ClientCarousel from "./ClientCarousel";
// import { ArrowRight } from "lucide-react";

export default function PortfolioSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const featuredProjects = [
        {
            title: "E-commerce Platform",
            description: "A high-performance e-commerce solution with advanced analytics and AI-powered recommendations",
            category: "Web Development",
            image: "/projects/ecommerce.png"
        },
        {
            title: "Enterprise Dashboard",
            description: "Real-time data visualization and business intelligence platform for enterprise clients",
            category: "Web Application",
            image: "/projects/web-system.png"
        },
        {
            title: "Mobile Banking App",
            description: "Secure and user-friendly mobile banking application with biometric authentication",
            category: "Mobile App",
            image: "/projects/banking-app.png"
        }
    ];

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
                    className="max-w-4xl mx-auto text-center mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.div variants={itemVariants}>
                        <h2 className="text-5xl md:text-7xl font-bold mb-10">
                            <span className="block text-white tech-heading">Our Work</span>
                        </h2>
                        <p className="text-xl text-white-300 mb-8">
                            {"Discover how we've helped businesses like yours achieve their digital goals."}
                        </p>
                    </motion.div>
                </motion.div>

                {/* Featured Projects */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="tech-card group"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="relative h-64 overflow-hidden rounded-t-lg">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover overflow-hidden rounded-t-lg"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-oxford-200" />
                                <div className="absolute bottom-0 left-0 p-6">
                                    <span className="text-sm text-turquoise-500">{project.category}</span>
                                    <h3 className="text-2xl font-bold text-white-500 mt-2">{project.title}</h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-white-300">{project.description}</p>
                                <button className="mt-4 text-turquoise-500 hover:text-munsell-500 transition-colors">
                                    View Case Study →
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Client Carousel */}
                <ClientCarousel />

                <motion.div
                    className="text-center mt-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
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