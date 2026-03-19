"use client";

import React, { useState, useRef } from "react";
import { ChevronDown, CheckCircle2, Loader2, MessageSquare, Calendar, Search, ArrowRight, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { countries } from "@/data/CountryCode";

const ConsultantForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [activeService, setActiveService] = useState("Web Development");
    const [timeOption, setTimeOption] = useState("Morning (9AM - 12PM)");
    const [customTime, setCustomTime] = useState("");
    const [selectedCountry, setSelectedCountry] = useState(countries[0]); // Default USA
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const services = ["Web Development", "Mobile App", "UI/UX Design", "AI Integration", "SEO / Marketing", "Other"];
    const timeSlots = ["Morning (9AM - 12PM)", "Afternoon (1PM - 5PM)", "Evening (6PM - 9PM)", "Other"];

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus("idle");

        const formData = new FormData(e.currentTarget);
        const selectedTime = timeOption === "Other" ? customTime : timeOption;

        // Combine Code and Number
        const fullPhone = `${selectedCountry.code} ${formData.get("phone")}`;

        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: fullPhone,
            company: formData.get("company"),
            service: activeService,
            date: formData.get("date"),
            preferredTime: selectedTime,
            details: formData.get("details"),
            discovery: formData.get("discovery"),
        };

        try {
            const response = await fetch("/api/consultant", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus("success");
                formRef.current?.reset();
                setActiveService("Web Development");
                setTimeOption("Morning (9AM - 12PM)");
                setCustomTime("");
            } else {
                setStatus("error");
            }
        } catch (err) {
            console.error("Submission error:", err);
            setStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="min-h-screen w-full bg-background text-foreground pt-32 pb-20 px-4 flex justify-center relative overflow-hidden">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-glow/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-4xl relative"
            >
                <div className="bg-overlay backdrop-blur-xl border border-border p-8 md:p-14 rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">

                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-16">

                        <div className="space-y-8">
                            <div className="flex items-center gap-3 text-primary font-bold tracking-tighter">
                                <CheckCircle2 size={18} />
                                <h3 className="uppercase text-sm">01. Basic Information</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Full Name</label>
                                    <input
                                        required
                                        name="name"
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full bg-transparent border border-border rounded-xl px-5 py-4 text-foreground focus:border-primary outline-none transition-all placeholder:text-muted/30"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Work Email</label>
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="name@company.com"
                                        className="w-full bg-transparent border border-border rounded-xl px-5 py-4 text-foreground focus:border-primary outline-none transition-all placeholder:text-muted/30"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase ml-1">
                                        Phone / Whatsapp
                                    </label>

                                    <div className="flex items-center w-full bg-transparent border border-white/[0.05] rounded-xl md:rounded-2xl focus-within:ring-1 focus-within:ring-primary/40 focus-within:border-primary/40 transition-all overflow-hidden group">

                                        <div className="relative shrink-0 border-r border-white/10 w-[32%] md:w-[30%]">
                                            <select
                                                className="bg-transparent w-full pl-3 pr-8 py-3.5 md:py-4 text-foreground text-xs font-bold appearance-none outline-none cursor-pointer h-full"
                                                onChange={(e) => {
                                                    const country = countries.find((c) => c.code === e.target.value);
                                                    if (country) setSelectedCountry(country);
                                                }}
                                            >
                                                {countries.map((c) => (
                                                    <option key={c.code} value={c.code} className="bg-background text-foreground">
                                                        {c.name} {c.code}
                                                    </option>
                                                ))}
                                            </select>
                                            <ChevronDown
                                                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted group-hover:text-primary pointer-events-none transition-colors"
                                                size={12}
                                            />
                                        </div>

                                        <input
                                            required
                                            name="phone"
                                            type="tel"
                                            placeholder={selectedCountry.placeholder}
                                            className="flex-1 bg-transparent px-4 py-3.5 md:py-4 text-foreground text-sm focus:outline-none placeholder:text-muted/20 autofill:bg-transparent"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Company Name</label>
                                    <input
                                        name="company"
                                        type="text"
                                        placeholder="Company Name (Optional)"
                                        className="w-full bg-transparent border border-border rounded-xl px-5 py-4 text-foreground focus:border-primary outline-none transition-all placeholder:text-muted/30"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-center gap-3 text-primary font-bold tracking-tighter">
                                <MessageSquare size={18} />
                                <h3 className="uppercase text-sm">02. Project Concept</h3>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-bold uppercase tracking-wider text-muted">What are we building?</label>
                                <div className="flex flex-wrap gap-3">
                                    {services.map((s) => (
                                        <button
                                            key={s} type="button" onClick={() => setActiveService(s)}
                                            className={`px-5 py-2 rounded-lg text-[11px] font-medium border transition-all ${activeService === s ? "bg-primary border-primary text-background" : "border-border text-muted hover:border-primary/50 hover:text-foreground"}`}
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Project Description</label>
                                <textarea
                                    required
                                    rows={4}
                                    name="details"
                                    placeholder="Briefly describe your goals..."
                                    className="w-full bg-transparent border border-border rounded-xl px-5 py-4 text-foreground focus:border-primary outline-none transition-all resize-none placeholder:text-muted/30"
                                />
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-center gap-3 text-primary font-bold tracking-tighter">
                                <Clock size={18} />
                                <h3 className="uppercase text-sm">03. Meeting Schedule</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Preferred Time Slot</label>
                                    <div className="grid grid-cols-1 gap-3">
                                        {timeSlots.map((slot) => (
                                            <button
                                                key={slot} type="button" onClick={() => setTimeOption(slot)}
                                                className={`px-4 py-3 rounded-lg text-[11px] text-left font-bold border transition-all ${timeOption === slot ? "bg-primary border-primary text-background" : "border-border text-muted hover:bg-white/[0.02]"}`}
                                            >
                                                {slot}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Preferred Date</label>
                                        <input required type="date" name="date" className="w-full bg-transparent border border-border rounded-xl px-5 py-4 outline-none focus:border-primary text-foreground text-sm [color-scheme:dark]" />
                                    </div>

                                    <div className="pt-6 space-y-4">
                                        <label className="text-[10px] font-bold uppercase tracking-wider text-muted">How did you find us?</label>
                                        <div className="relative">
                                            <select
                                                name="discovery"
                                                className="w-full bg-transparent border border-border rounded-xl px-5 py-4 appearance-none outline-none focus:border-primary text-sm text-foreground cursor-pointer transition-all"
                                            >
                                                <option value="LinkedIn" className="bg-background text-foreground">LinkedIn</option>
                                                <option value="Instagram" className="bg-background text-foreground">Instagram</option>
                                                <option value="FaceBook" className="bg-background text-foreground">FaceBook</option>
                                                <option value="Google Search" className="bg-background text-foreground">Google Search</option>
                                            </select>
                                            <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-muted pointer-events-none" size={16} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <AnimatePresence>
                                {timeOption === "Other" && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="space-y-2 pt-2"
                                    >
                                        <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Specify your available time</label>
                                        <input
                                            type="text"
                                            name="custom_time"
                                            placeholder="e.g. Next Monday at 2 PM"
                                            value={customTime}
                                            onChange={(e) => setCustomTime(e.target.value)}
                                            className="w-full bg-transparent border border-primary/30 rounded-xl px-5 py-4 text-foreground focus:border-primary outline-none transition-all placeholder:text-muted/30 autofill:bg-transparent"
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="pt-10 border-t border-border">
                            {status === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-500 text-xs text-center font-medium"
                                >
                                    Inquiry sent successfully! We'll get back to you shortly.
                                </motion.div>
                            )}

                            {/* Error Message */}
                            {status === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-xs text-center font-medium"
                                >
                                    Something went wrong. Please try again.
                                </motion.div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary text-background py-5 rounded-2xl font-bold uppercase text-sm tracking-[0.2em] flex items-center justify-center gap-3 hover:brightness-110 transition-all disabled:opacity-50 shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)]"
                            >
                                {isSubmitting ? (
                                    <>Processing... <Loader2 className="animate-spin" size={20} /></>
                                ) : (
                                    <>Send Inquiry & Book Slot <ArrowRight size={20} /></>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </section>
    );
};

export default ConsultantForm;