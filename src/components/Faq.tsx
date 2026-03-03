"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  { 
    q: "How long will it take to launch my project?", 
    a: "Usually, a standard project takes 4 to 12 weeks. We follow an agile process to ensure you get a functional 'Version 1' as quickly as possible without compromising quality." 
  },
  { 
    q: "How much will my project cost?", 
    a: "Pricing depends on the features and complexity. We offer both fixed-price packages for defined scopes and flexible monthly models for evolving projects." 
  },
  { 
    q: "Will my website/app look good on mobile phones?", 
    a: "100%. We follow a 'Mobile-First' approach, ensuring your digital product looks stunning and works smoothly on every screen size, from iPhones to large monitors." 
  },
  { 
    q: "I have a slow existing site. Can you make it faster?", 
    a: "Yes, we specialize in modernizing legacy systems using Next.js and optimized cloud infra. We focus on achieving 90+ Google PageSpeed scores to improve your user experience." 
  },
  { 
    q: "Who will own the source code after completion?", 
    a: "You do. Once the final payment is cleared, you have full 100% ownership of the source code, intellectual property, and all digital assets." 
  },
  { 
    q: "How will I know what's happening with my project?", 
    a: "Transparency is our priority. We use Slack for daily chat, Jira for task tracking, and schedule weekly Zoom demos so you can see the progress in real-time." 
  },
  { 
    q: "Can you help my business show up on Google (SEO)?", 
    a: "Absolutely. We don't just code; we build for growth. Every project follows technical SEO best practices (SSR, Meta Tags, Schema) to help you rank higher from day one." 
  },
  { 
    q: "What happens if something breaks after the launch?", 
    a: "We don't just 'launch and leave.' We provide comprehensive post-launch support and maintenance packages to keep your platform secure and updated as your business grows." 
  },
  { 
    q: "Can you integrate my existing tools (Payment, CRM)?", 
    a: "Yes, we can seamlessly integrate any third-party API, including payment gateways (Stripe, PayPal), CRMs (HubSpot, Salesforce), or custom business tools." 
  },
  { 
    q: "Is my data and my customers' data safe with you?", 
    a: "Security is built into our code. We implement industry-standard encryption, secure API protocols, and regular audits to protect your business from any vulnerabilities." 
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#030303] py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left Side: Title & Description */}
        <div className="lg:sticky lg:top-40 h-fit">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <HelpCircle size={18} className="text-purple-500" />
            </div>
            <span className="text-purple-500 uppercase tracking-[0.4em] text-[10px] font-bold">
              Support Center
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter mb-8"
          >
            Got questions? <br />
            <span className="text-white/20 italic font-light">We have answers.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-md font-light"
          >
            Everything you need to know about our process, technology, and how we help your brand grow in the digital space.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/5 inline-block"
          >
            <p className="text-white text-sm font-medium">Still confused?</p>
            <button className="mt-2 text-purple-400 text-sm font-bold hover:text-purple-300 transition-colors flex items-center gap-2">
                Chat with our team <Plus size={14} />
            </button>
          </motion.div>
        </div>

        {/* Right Side: Scrollable FAQ Box */}
        <div className="relative group">
          {/* Outer Border Glow */}
          <div className="absolute -inset-1 bg-gradient-to-b from-purple-500/20 to-transparent rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">
            <div className="h-[650px] overflow-y-auto p-8 custom-scrollbar">
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`rounded-2xl border transition-all duration-300 ${
                      openIndex === index 
                        ? 'bg-white/[0.05] border-white/20 shadow-inner' 
                        : 'bg-transparent border-white/5 hover:border-white/10'
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full flex justify-between items-center text-left p-5 group/btn"
                    >
                      <span className={`text-base md:text-lg font-semibold tracking-tight transition-colors ${openIndex === index ? 'text-white' : 'text-gray-400 group-hover/btn:text-white'}`}>
                        {faq.q}
                      </span>
                      <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${
                        openIndex === index 
                          ? 'bg-purple-500 border-purple-500 rotate-[135deg] shadow-[0_0_15px_rgba(168,85,247,0.5)]' 
                          : 'border-white/20'
                      }`}>
                        <Plus size={16} className="text-white" />
                      </div>
                    </button>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "circOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-6 text-gray-400 text-sm md:text-base leading-relaxed border-t border-white/5 pt-4 mt-1">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default FAQ;