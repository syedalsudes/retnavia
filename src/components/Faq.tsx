"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, HelpCircle } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
  q: "What tech stack do you use for web app development?",
  a: "We primarily build with Next.js, React, and Node.js on the frontend and backend, paired with PostgreSQL or MongoDB depending on your data needs. For infra, we use serverless platforms like Vercel or AWS, ensuring your app stays fast, secure, and easy to maintain long-term."
},
{
  q: "Do you provide post-launch support and maintenance?",
  a: "Yes. Every project includes a support window post-launch to fix any bugs or issues. After that, we offer monthly maintenance retainers covering bug fixes, security updates, performance monitoring, and feature additions as your product evolves."
},
{
  q: "Can you integrate third-party APIs and tools (payments, CRM, etc.)?",
  a: "Absolutely. We regularly integrate payment gateways (Stripe, PayPal), CRMs (HubSpot, Salesforce), authentication providers (Auth0, Firebase), and other third-party APIs based on your specific business workflow requirements."
},
{
  q: "What is your development process and how do you keep me updated?",
  a: "We follow an agile sprint-based process with weekly progress calls or async updates via Slack/Notion. You'll have access to a staging environment throughout development, so you can review and give feedback at every milestone before final delivery."
},
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-background py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-glow/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:items-start">
        
        <div className="lg:sticky lg:top-40 h-fit">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="p-2 rounded-lg bg-primary/10 border border-white/[0.1]">
                <HelpCircle size={18} className="text-primary" />
            </div>
            <span className="text-primary uppercase tracking-[0.4em] text-[10px] font-bold">
              Support Center
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-foreground text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter mb-8"
          >
            Got questions? <br />
            <span className="text-foreground/20 italic font-light">We have answers.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-md font-light"
          >
            Everything you need to know about our process, technology, and how we help your brand grow in the digital space.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 p-6 rounded-2xl bg-overlay border border-border inline-block"
          >
            <p className="text-foreground text-sm font-medium">Still confused?</p>
            <Link href="/contact">
              <button className="mt-2 text-primary text-sm font-bold hover:text-primary-glow transition-colors flex items-center gap-2">
                Chat with our team <Plus size={14} />
              </button>
            </Link>
          </motion.div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-b from-primary/20 to-transparent rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative bg-background/80 backdrop-blur-xl border border-border rounded-[2rem] overflow-hidden shadow-2xl">
            <div className="p-8">
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`rounded-2xl border transition-all duration-300 ${
                      openIndex === index 
                        ? 'bg-transparent border-border shadow-inner' 
                        : 'bg-transparent border-border hover:border-border/50'
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full flex justify-between items-center text-left p-5 group/btn"
                    >
                      <span className={`text-base md:text-lg font-semibold tracking-tight transition-colors ${openIndex === index ? 'text-foreground' : 'text-muted-foreground group-hover/btn:text-foreground'}`}>
                        {faq.q}
                      </span>
                      <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${
                        openIndex === index 
                          ? 'bg-primary border-primary rotate-[135deg] shadow-[0_0_15px_var(--primary-glow)]' 
                          : 'border-border'
                      }`}>
                        <Plus size={16} className={openIndex === index ? "text-background" : "text-foreground"} />
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
                          <div className="px-5 pb-6 text-muted-foreground text-sm md:text-base leading-relaxed border-t border-border pt-4 mt-1">
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