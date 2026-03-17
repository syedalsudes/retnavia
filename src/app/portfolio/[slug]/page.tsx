"use client";
import { portfolioItems } from "@/data/portfolioData";
import { motion } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = portfolioItems.find((p) => p.slug === slug);

  if (!project) return <div>Project not found</div>;

  return (
    <main className="bg-background min-h-screen text-foreground font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image 
          src={project.img} 
          alt={project.title} 
          fill 
          className="object-cover opacity-60 grayscale-[0.3]" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute bottom-10 left-0 px-6 md:px-16 max-w-7xl">
          <p className="text-primary font-mono text-sm mb-2 uppercase tracking-widest">{project.category}</p>
          <h1 className="text-4xl md:text-7xl font-light tracking-tighter">{project.title}</h1>
        </div>
      </section>

      {/* 2. PROJECT INFO GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-12">
          <div>
            <h3 className="text-muted-foreground text-xs font-bold uppercase tracking-widest mb-4">The Challenge</h3>
            <p className="text-xl font-light leading-relaxed">{project.challenge}</p>
          </div>
          <div>
            <h3 className="text-muted-foreground text-xs font-bold uppercase tracking-widest mb-4">Our Solution</h3>
            <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
          </div>
        </div>

        <div className="space-y-8 bg-overlay p-8 rounded-2xl border border-border">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="text-[10px] bg-background border border-border px-2 py-1 rounded">{t}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-2">Year</h4>
            <p className="text-sm text-muted-foreground">{project.year}</p>
          </div>
        </div>
      </section>

      {/* 3. DESIGN GALLERY */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 pb-32">
        <h3 className="text-muted-foreground text-xs font-bold uppercase tracking-widest mb-10">Visual Identity & UI</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.gallery?.map((img, i) => (
            <div key={i} className="relative aspect-video rounded-2xl overflow-hidden border border-border group">
              <Image src={img} alt="Gallery image" fill className="object-cover transition-transform group-hover:scale-105" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}