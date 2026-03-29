"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { portfolioItems } from "@/data/portfolioData"; 

const ProjectDetail = () => {
  const { slug } = useParams();
  const router = useRouter();
  const project = portfolioItems.find((p) => p.slug === slug);

  if (!project) return <div className="h-screen flex items-center justify-center bg-background text-foreground font-sans">Project not found.</div>;

  return (
    <main className="bg-background text-foreground min-h-screen selection:bg-primary/30 font-sans">
      
      <section className="relative pt-40 pb-20 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-mono text-xs uppercase tracking-[0.5em] mb-6 block">
              {project.category} — {project.year}
            </span>
            <h1 className="text-[15vw] md:text-[10vw] font-bold tracking-tighter leading-[0.8] uppercase mb-10">
              {project.title.split(' - ')[0]}
            </h1>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-border">
            {project.metrics.map((metric, i) => (
              <div key={i}>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{metric.label}</p>
                <p className="text-xl font-light">{metric.value}</p>
              </div>
            ))}
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Role</p>
              <p className="text-xl font-light">{project.role}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 mb-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="md:col-span-4 sticky top-32"
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6">Overview</h3>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-muted-foreground">
                {project.overview}
              </p>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" className="inline-block mt-8 text-primary border-b border-primary pb-1 hover:text-foreground hover:border-foreground transition-all uppercase text-xs tracking-widest">
                  Live Preview ↗
                </a>
              )}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="md:col-span-8 relative rounded-3xl overflow-hidden border border-border shadow-2xl"
            >
              <Image 
                src={project.heroImage} 
                alt="Full Website Showcase" 
                width={1200}
                height={5000}
                className="w-full h-auto object-contain"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="space-y-40 md:space-y-64 pb-64">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-muted-foreground/30 mb-32 text-center">In-Depth Features</h2>
          
          {project.sections.map((section, idx) => {
            const isLeft = section.type === "image-left";

            return (
              <div key={idx} className={`flex flex-col gap-20 items-center mb-40 ${isLeft ? "md:flex-row-reverse" : "md:flex-row"}`}>
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="flex-1 space-y-6"
                >
                  <span className="font-mono text-primary text-sm tracking-widest">0{idx + 1}</span>
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tighter">{section.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed font-light">
                    {section.description}
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="flex-[1.2] w-full rounded-3xl overflow-hidden border border-border bg-overlay"
                >
                  <Image 
                    src={section.image} 
                    alt={section.alt} 
                    width={1200} 
                    height={800} 
                    sizes="100vw"
                    style={{
                      width: '100%',
                      height: 'auto', 
                    }}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      <footer className="bg-background text-foreground py-40 text-center">
        <button 
          onClick={() => router.push('/portfolio')}
          className="text-6xl md:text-[10vw] font-bold tracking-tighter uppercase"
        >
          PORTFOLIO →
        </button>
      </footer>
    </main>
  );
};

export default ProjectDetail;