"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowRightIcon, StarIcon } from '@heroicons/react/24/solid';

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Mouse parallax effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        mouseX.set((clientX - left) / width - 0.5);
        mouseY.set((clientY - top) / height - 0.5);
    }

    // Smooth parallax values
    const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    // Mouse parallax springs
    const xSpring = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const ySpring = useSpring(mouseY, { stiffness: 50, damping: 20 });

    const bgMoveX = useTransform(xSpring, [-0.5, 0.5], ["-2%", "2%"]);
    const bgMoveY = useTransform(ySpring, [-0.5, 0.5], ["-2%", "2%"]);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden bg-[#050914]"
            onMouseMove={handleMouseMove}
        >
            {/* Cinematic Background Layer */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ x: bgMoveX, y: bgMoveY, scale: 1.1 }}
            >
                <div className="absolute inset-0 bg-[#050914]" />

                {/* Main Image with "Curtain" Reveal */}
                <motion.div
                    className="absolute inset-0 opacity-60 mix-blend-luminosity"
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    animate={{ clipPath: "inset(0 0% 0 0)" }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    <Image
                        src="/images/clinic-pic-may-2025.jpg"
                        alt="KinetiKare Physiotherapy"
                        fill
                        priority
                        className="object-cover object-center"
                        sizes="100vw"
                        unoptimized={true}
                    />
                </motion.div>

                {/* Cinematic Gradients */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#050914] via-[#050914]/90 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent" />

                {/* Gold Ambient Glow */}
                <motion.div
                    className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-[#D4AF37]/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none"
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>

            {/* Content Layer */}
            <motion.div
                className="relative z-10 h-full flex items-center"
                style={{ y: y1, opacity }}
            >
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    <div className="max-w-5xl">

                        {/* Elegant Eyebrow */}
                        <div className="overflow-hidden mb-8">
                            <motion.div
                                initial={{ y: 40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                                className="flex items-center gap-4"
                            >
                                <span className="h-[1px] w-16 bg-gradient-to-r from-[#D4AF37] to-transparent" />
                                <span className="text-[#D4AF37] font-sans text-xs md:text-sm tracking-[0.3em] uppercase font-medium">
                                    Est. 2025 • Burlington, ON
                                </span>
                            </motion.div>
                        </div>

                        {/* Massive Editorial Heading */}
                        <div className="relative mb-12">
                            <h1 className="font-playfair text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-[0.9] tracking-tight">
                                <div className="overflow-hidden">
                                    <motion.div
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        Kareem
                                    </motion.div>
                                </div>
                                <div className="overflow-hidden">
                                    <motion.div
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                        className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5E6B3] via-[#D4AF37] to-[#B8860B]"
                                    >
                                        Hassanein
                                    </motion.div>
                                </div>
                            </h1>

                            {/* Floating Badge */}
                            <motion.div
                                className="hidden lg:flex absolute top-0 right-0 translate-x-full items-center justify-center w-32 h-32 rounded-full border border-white/10 backdrop-blur-md bg-white/5"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 1.2, type: "spring" }}
                            >
                                <div className="text-center">
                                    <div className="text-[#D4AF37] text-2xl font-playfair font-bold">5.0</div>
                                    <div className="flex justify-center gap-0.5 my-1">
                                        {[1, 2, 3, 4, 5].map(i => <StarIcon key={i} className="w-2 h-2 text-[#D4AF37]" />)}
                                    </div>
                                    <div className="text-[10px] text-white/60 uppercase tracking-widest">Google</div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Sophisticated Description */}
                        <div className="overflow-hidden mb-16 max-w-2xl">
                            <motion.p
                                className="text-lg md:text-2xl text-white/80 font-light leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                Experience the convergence of <span className="text-white font-normal">clinical precision</span> and <span className="text-white font-normal">compassionate care</span>.
                                Redefining physiotherapy for the modern patient.
                            </motion.p>
                        </div>

                        {/* Premium CTAs */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                        >
                            <Link href="https://endorphinshealth.janeapp.com/#/staff_member/42" target="_blank">
                                <motion.button
                                    className="group relative px-10 py-5 bg-[#D4AF37] overflow-hidden"
                                    whileHover="hover"
                                    initial="initial"
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-white"
                                        variants={{
                                            initial: { scaleX: 0, originX: 0 },
                                            hover: { scaleX: 1, originX: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
                                        }}
                                    />
                                    <span className="relative z-10 flex items-center gap-3 text-[#050914] font-bold tracking-widest uppercase text-sm">
                                        Book Appointment
                                        <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </motion.button>
                            </Link>

                            <Link href="/services">
                                <motion.button
                                    className="group px-10 py-5 border border-white/20 hover:border-white/40 transition-colors"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="text-white font-medium tracking-widest uppercase text-sm group-hover:text-[#D4AF37] transition-colors">
                                        Explore Services
                                    </span>
                                </motion.button>
                            </Link>
                        </motion.div>

                    </div>
                </div>
            </motion.div>

            {/* Elegant Scroll Indicator */}
            <motion.div
                className="absolute bottom-12 right-12 hidden md:flex items-center gap-4 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <span className="text-white/40 text-xs tracking-[0.2em] uppercase rotate-[-90deg]">Scroll</span>
                <div className="h-24 w-[1px] bg-white/10 overflow-hidden">
                    <motion.div
                        className="h-full w-full bg-[#D4AF37]"
                        animate={{ y: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
