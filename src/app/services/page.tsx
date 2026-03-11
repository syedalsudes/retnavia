"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import {
    ArrowUpRight, Globe, ShoppingCart, Database,
    TrendingUp, Search, BrainCircuit, Smartphone,
    Palette, Share2, PenTool, Video, Film, ArrowRight
} from "lucide-react";
import Link from "next/link";

const allServicesList = [
    { name: "Web Development", href: "/services/web-development", icon: Globe, desc: "High-performance web architectures" },
    { name: "Ecommerce", href: "/services/ecommerce", icon: ShoppingCart, desc: "Scalable digital storefronts" },
    { name: "ERP Software", href: "/services/erp", icon: Database, desc: "Centralized business operations" },
    { name: "Digital Marketing", href: "/services/digital-marketing", icon: TrendingUp, desc: "Data-driven growth strategies" },
    { name: "SEO Optimization", href: "/services/seo", icon: Search, desc: "Dominate search engine rankings" },
    { name: "AI Solutions", href: "/services/ai", icon: BrainCircuit, desc: "Custom LLMs & automation" },
    { name: "Mobile Apps", href: "/services/mobile-app", icon: Smartphone, desc: "Native iOS & Android experiences" },
    { name: "UI/UX Design", href: "/services/ui-ux", icon: Palette, desc: "Intuitive & beautiful interfaces" },
    { name: "Social Media", href: "/services/smm", icon: Share2, desc: "Community building & engagement" },
    { name: "Digital Branding", href: "/services/branding", icon: PenTool, desc: "Visual identity & guidelines" },
    { name: "2D/3D Animation", href: "/services/animation", icon: Video, desc: "Cinematic motion & graphics" },
    { name: "Video Editing", href: "/services/video-editing", icon: Film, desc: "Post-production & storytelling" },
];

const topServices = [
    {
        title: "Web Engineering",
        category: "Enterprise Solutions",
        impact: "Scalable & Fast",
        desc: "Delivering elite-level speed optimization, enterprise-grade security, and robust architectures for global platforms.",
        features: ["Next.js & React", "Cloud Hosting", "Security Audits"],
        bg: "/websitepic.png",
        slug: "web-development"
    },
    {
        title: "Mobile Apps",
        category: "Native & Cross-Platform",
        impact: "Zero-Latency UI",
        desc: "Building high-fidelity mobile experiences focused on real-time interactions and seamless user journeys.",
        features: ["React Native", "iOS & Android", "API Integration"],
        bg: "/appdev.png",
        slug: "mobile-app"
    },
    {
        title: "AI Solutions",
        category: "Automation",
        impact: "24/7 Efficiency",
        desc: "Integrating custom-trained LLMs to automate complex customer journeys and optimize business operations.",
        features: ["Custom LLMs", "Workflow Automation", "Python & AI"],
        bg: "/ai.png",
        slug: "ai"
    },
    {
        title: "ERP Systems",
        category: "Business Management",
        impact: "Streamlined Ops",
        desc: "Custom enterprise resource planning solutions to centralize data, manage workflows, and scale your business.",
        features: ["Custom Dashboards", "Data Migration", "Process Automation"],
        bg: "/seo.png",
        slug: "erp"
    },
    {
        title: "Digital Branding",
        category: "Identity & Design",
        impact: "Visual DNA",
        desc: "Crafting modern visual languages, UI/UX designs, and brand guidelines for the next generation of tech.",
        features: ["UI/UX Design", "Brand Guidelines", "Motion Graphics"],
        bg: "/branding.png",
        slug: "branding"
    }
];



const ServiceCard = ({ service, index }: { service: typeof topServices[0], index: number }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

    return (
        <section ref={ref} className="h-[110vh] flex items-center justify-center sticky top-0 bg-background">
            <motion.div
                style={{ opacity, scale }}
                className="relative w-[92%] h-[85vh] rounded-[2.5rem] overflow-hidden border border-border shadow-2xl"
            >
                <Image
                    src={service.bg}
                    alt={service.title}
                    fill
                    className="object-cover brightness-[0.4]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                <div className="absolute inset-0 p-10 md:p-20 flex flex-col justify-end">
                    <motion.div style={{ y }} className="w-full">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em]">
                                {service.category}
                            </span>
                            <div className="w-8 h-[1px] bg-border" />
                            <span className="text-muted-foreground/30 text-[10px] font-mono">0{index + 1}</span>
                        </div>

                        <h2 className="text-foreground text-6xl md:text-8xl font-medium tracking-tighter mb-8 leading-[0.9]">
                            {service.title}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
                            <div className="md:col-span-5 flex flex-col gap-6">
                                <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-light">
                                    {service.desc}
                                </p>
                                <Link
                                    href={`/services/${service.slug}`}
                                    className="group inline-flex items-center gap-3 w-fit px-6 py-3 rounded-full border border-border/80 text-foreground text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-300"
                                >
                                    Explore {service.title}
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            <div className="md:col-span-4 flex gap-8">
                                <div>
                                    <p className="text-[9px] text-muted-foreground uppercase tracking-widest mb-3">Core Offerings</p>
                                    <ul className="text-muted-foreground/70 text-[11px] space-y-1 font-light">
                                        {service.features.map((s) => <li key={s}>+ {s}</li>)}
                                    </ul>
                                </div>
                            </div>

                            <div className="md:col-span-3 text-right">
                                <p className="text-[9px] text-muted-foreground uppercase tracking-widest mb-1">Impact</p>
                                <p className="text-3xl font-light italic text-foreground">{service.impact}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

const Services = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <main className="bg-background selection:bg-primary/30">

            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/portfolio.png"
                        alt="Our Services Background"
                        fill
                        className="object-cover opacity-60 grayscale-[0.5] contrast-[1.1]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background" />
                </div>

                <div className="relative z-10 max-w-7xl px-8 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <div className="w-10 h-[1px] bg-primary" />
                        <span className="text-muted-foreground text-[10px] uppercase tracking-[0.5em] font-medium">Our Core Expertise</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-foreground text-[12vw] md:text-[9vw] font-light leading-none tracking-tighter"
                    >
                        ENGINEERING <br />
                        <span className="italic text-primary/90">Growth.</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="absolute -bottom-32 md:-bottom-20 left-8"
                    >
                        <p className="text-muted-foreground/50 text-[9px] uppercase tracking-[0.4em] rotate-90 origin-left">Scroll to explore</p>
                    </motion.div>
                </div>
            </section>

            <div className="relative z-10">
                {topServices.map((service, index) => (
                    <ServiceCard key={index} service={service} index={index} />
                ))}
            </div>

            <section className="py-32 px-6 md:px-12 bg-background relative z-10 border-t border-border">
                <div className="max-w-7xl mx-auto">

                    <div className="mb-16 md:mb-24">
                        <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-foreground mb-4">
                            Our Complete <span className="italic text-primary">Capabilities.</span>
                        </h2>
                        <p className="text-muted-foreground text-sm md:text-base font-light max-w-2xl">
                            From enterprise software to full-scale digital marketing, explore our comprehensive suite of services designed to scale your business.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                        {allServicesList.map((service, idx) => {
                            const Icon = service.icon;
                            return (
                                <Link
                                    key={idx}
                                    href={service.href}
                                    className="group relative p-6 md:p-8 rounded-[2rem] bg-overlay border border-border hover:bg-overlay/50 hover:border-primary/30 transition-all duration-500 overflow-hidden flex flex-col gap-8 h-full"
                                >
                                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                    <div className="relative z-10 flex justify-between items-start w-full">
                                        <div className="w-14 h-14 rounded-2xl bg-overlay border border-border flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-500">
                                            <Icon className="text-muted-foreground group-hover:text-primary transition-colors duration-500" size={24} />
                                        </div>

                                        <div className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out mt-2">
                                            <ArrowUpRight className="text-primary" size={28} />
                                        </div>
                                    </div>

                                    <div className="relative z-10 flex flex-col gap-2 mt-auto">
                                        <h3 className="text-xl font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                                            {service.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground line-clamp-2">
                                            {service.desc}
                                        </p>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>

                </div>
            </section>

        </main>
    );
};

export default Services;