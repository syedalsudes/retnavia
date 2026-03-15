"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight, ChevronDown, CheckCircle2, Loader2 } from "lucide-react";

const Contact = () => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityHero = useTransform(scrollY, [0, 400], [1, 0]);

  const [activeService, setActiveService] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const servicesList = [
    "Web Development", "Mobile App", "UI/UX Design", "AI Integration", "SEO / Marketing", "Other"
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      service: activeService || "Not Specified",
      company: formData.get("company") || "N/A",
      timeline: formData.get("timeline") || "Not Specified",
      details: formData.get("details"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
        setActiveService("");
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
    <div className="bg-background selection:bg-primary/30">
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
        <motion.div className="absolute inset-0 z-0">
          <Image
            src="/allheader.png"
            alt="Contact Background"
            fill
            className="object-cover opacity-40 grayscale-[0.6] contrast-[1.1]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/20 to-background" />
        </motion.div>

        <div className="relative z-10 max-w-7xl px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-10 h-[1px] bg-primary" />
            <span className="text-muted-foreground text-[10px] uppercase tracking-[0.5em] font-medium">
              Let's Collaborate
            </span>
          </motion.div>

          <motion.h1
            style={{ y: yText, opacity: opacityHero }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-foreground text-[10vw] md:text-[8.5vw] font-light leading-none tracking-tighter uppercase whitespace-nowrap"
          >
            GET IN <span className="italic text-primary/90 font-extralight">TOUCH.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 max-w-xl border-l border-primary/30 pl-8"
          >
            <p className="text-muted-foreground text-sm md:text-lg font-light leading-relaxed tracking-wide">
              Have a groundbreaking idea or a complex problem? We're here to help
              you engineer the solution. Reach out and let's build something
              extraordinary together.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-glow/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-secondary/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-12 sticky top-32"
            >
              <div className="space-y-6">
                <h2 className="text-foreground text-5xl md:text-6xl font-bold tracking-tight leading-[1]">
                  Let's build <br /> something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent italic font-light">epic.</span>
                </h2>
                <p className="text-muted-foreground text-lg font-light max-w-sm leading-relaxed">
                  Have a project in mind, need technical consultation, or just want to say hi? Drop us a line.
                </p>
              </div>

              <div className="space-y-8 pt-8 border-t border-border">
                {[
                  { icon: <Mail />, label: "Direct Email", val: "discover@retnavia.com" },
                  { icon: <Phone />, label: "Call Us", val: "+971 4 242 1375" },
                  { icon: <MapPin />, label: "Headquarters", val: "Sheikh Zayed Road, Dubai" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-overlay border border-border flex items-center justify-center text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/30 transition-all duration-500">
                      {React.cloneElement(item.icon, { size: 22, strokeWidth: 1.5 })}
                    </div>
                    <div>
                      <p className="text-muted text-xs uppercase tracking-[0.2em] font-bold mb-1">{item.label}</p>
                      <p className="text-foreground text-lg font-medium tracking-tight">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="bg-overlay/30 border border-border p-8 md:p-12 rounded-[2.5rem] shadow-[0_0_80px_rgba(0,0,0,0.8)] backdrop-blur-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full -mr-32 -mt-32 transition-opacity group-hover:opacity-100 opacity-50"></div>

                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-muted-foreground text-xs font-bold tracking-widest uppercase ml-1">Full Name</label>
                      <input required type="text" name="name" placeholder="Full Name" className="w-full bg-overlay border border-border rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-muted" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-muted-foreground text-xs font-bold tracking-widest uppercase ml-1">Work Email</label>
                      <input required type="email" name="email" placeholder="your@company.com" className="w-full bg-overlay border border-border rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-muted" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-muted-foreground text-xs font-bold tracking-widest uppercase ml-1">I'm interested in...</label>
                    <div className="flex flex-wrap gap-3">
                      {servicesList.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => setActiveService(service)}
                          className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border flex items-center gap-2 ${activeService === service
                            ? "bg-primary border-primary text-background shadow-[0_0_15px_var(--primary-glow)]"
                            : "bg-overlay border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                            }`}
                        >
                          {activeService === service && <CheckCircle2 size={14} className="text-background" />}
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-muted-foreground text-xs font-bold tracking-widest uppercase ml-1">Company / Website</label>
                      <input type="text" name="company" placeholder="company.com (optional)" className="w-full bg-overlay border border-border rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-muted" />
                    </div>

                    <div className="space-y-2 relative">
                      <label className="text-muted-foreground text-xs font-bold tracking-widest uppercase ml-1">
                        Project Timeline
                      </label>
                      <div className="relative group">
                        <select
                          name="timeline"
                          defaultValue=""
                          className="w-full bg-background appearance-none border border-border rounded-2xl px-6 py-4 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-primary/30"
                        >
                          <option value="" disabled>When to start?</option>
                          <option value="asap">As soon as possible</option>
                          <option value="1-3-months">Within 1-3 months</option>
                          <option value="3-6-months">Within 3-6 months</option>
                          <option value="exploring">Just exploring options</option>
                        </select>

                        <ChevronDown
                          className="absolute right-5 top-1/2 -translate-y-1/2 text-muted-foreground group-hover:text-foreground pointer-events-none transition-colors duration-300"
                          size={18}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-muted-foreground text-xs font-bold tracking-widest uppercase ml-1">Project Details</label>
                    <textarea required name="details" rows={4} placeholder="Tell us about your goals..." className="w-full bg-overlay border border-border rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none placeholder:text-muted"></textarea>
                  </div>

                  {status === "success" && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-green-500/10 border border-green-500/50 rounded-xl text-green-500 text-sm text-center">
                      Thanks! Your inquiry has been sent. We'll contact you soon.
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-500 text-sm text-center">
                      Something went wrong. Please try again later.
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group bg-primary text-background py-5 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden relative mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center gap-2 tracking-widest uppercase text-sm text-background">
                      {isSubmitting ? (
                        <>Sending... <Loader2 size={18} className="animate-spin" /></>
                      ) : (
                        <>Submit Request <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>
                      )}
                    </span>
                    {!isSubmitting && (
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;