'use client'
import { ArrowRight, Code, Globe, Zap } from "lucide-react";
// import Image from "next/image";
import HeroIllustration from "../../../public/images/hero-illustration.svg";
import { motion } from "framer-motion";
import { FloatingDots } from "../visual/FloatingDots";

const content = {
    title: {
        main: "Transform Your",
        highlight: "Digital Presence"
    },
    description: "Magical web solutions crafted with cutting-edge technology to elevate your business to new heights.",
    buttons: [
        {
            text: "Schedule Your Project",
            icon: ArrowRight,
            className: "tech-button group flex items-center gap-2",
            iconClassName: "w-5 h-5 transition-transform group-hover:translate-x-1"
        },
        {
            text: "View Our Work",
            icon: Globe,
            className: "px-6 py-3 border border-turquoise-500/20 rounded-lg text-turquoise-500 hover:bg-turquoise-500/10 transition-colors flex items-center gap-2",
            iconClassName: "w-5 h-5"
        }
    ],
    features: [
        {
            icon: Code,
            iconColor: "turquoise",
            title: "Custom Development",
            description: "Tailored solutions"
        },
        {
            icon: Zap,
            iconColor: "munsell",
            title: "Fast Performance",
            description: "Optimized delivery"
        }
    ]
};

export default function HeroSection() {
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
        <section className="relative min-h-screen flex items-center">
            {/* Background Elements */}
            <FloatingDots count={5} minSize={10} maxSize={25} />

            <motion.div
                className="absolute inset-0 z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-tekhelet-500)_0%,_transparent_50%)] opacity-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--color-turquoise-500)_0%,_transparent_70%)] opacity-20 blur-3xl" />
            </motion.div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <motion.div
                        className="space-y-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div className="space-y-4" variants={itemVariants}>
                            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                                <span className="tech-heading block">{content.title.main}</span>
                                <span className="text-turquoise-500">{content.title.highlight}</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-white-300 max-w-2xl">
                                {content.description}
                            </p>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
                            {content.buttons.map((button, index) => (
                                <motion.button
                                    key={index}
                                    className={button.className}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {button.text}
                                    <button.icon className={button.iconClassName} />
                                </motion.button>
                            ))}
                        </motion.div>

                        {/* Features Grid */}
                        <motion.div className="grid grid-cols-2 gap-4 mt-12" variants={itemVariants}>
                            {content.features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="tech-card p-4 flex items-center gap-3"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className={`p-2 bg-${feature.iconColor}-500/10 rounded-lg`}>
                                        <feature.icon className={`w-6 h-6 text-${feature.iconColor}-500`} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">{feature.title}</h3>
                                        <p className="text-sm text-white-300">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Illustration */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <motion.div className="relative w-full aspect-square max-w-lg mx-auto"
                            animate={{
                                translateY: ["-20px", "20px"],
                                filter: ["blur(0px)", "blur(2px)"]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut"
                            }}
                        >
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-turquoise-500/20 to-munsell-500/20 rounded-full blur-3xl"


                            />
                            <HeroIllustration className="w-full object-cover" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <FloatingDots />

        </section>
    );
}