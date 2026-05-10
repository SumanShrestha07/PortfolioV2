"use client"

import { useState } from 'react';
import { PROJECTS, Category } from '@/lib/projects-data';
import { ProjectCard } from '@/components/ProjectCard';
import { Navigation } from '@/components/Navigation';
import { Linkedin, Github, Facebook } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollReveal } from '@/components/ScrollReveal';
import { cn } from '@/lib/utils';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  // Updated to include Website and Certification categories
  const categories: (Category | 'All')[] = ['All', 'Game', 'Website', 'Certification'];

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS.filter(p => p.category === 'Game' || p.category === 'Website' || p.category === 'Certification') 
    : PROJECTS.filter(p => p.category === activeCategory);

  const socials = [
    { href: '#', icon: Linkedin },
    { href: '#', icon: Facebook },
    { href: 'https://github.com', icon: Github },
  ];

  return (
    <div className="flex-1 flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative w-full overflow-hidden flex flex-col pt-40 pb-12 min-h-[85vh] justify-center">
          <Image 
            src={PlaceHolderImages[0].imageUrl}
            alt="Hero Background"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          
          <div className="relative z-10 max-w-7xl mx-auto w-full px-6 space-y-10">
            <ScrollReveal>
              <h1 className="font-playful text-7xl md:text-[11rem] font-bold tracking-tight text-white leading-[0.8]">
                Hi, i'm <span className="text-primary">Suman!</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="space-y-4 bg-slate-950/40 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/5 inline-block">
                <p className="text-3xl md:text-6xl font-playful font-bold text-white leading-tight">
                  A Game Developer
                </p>
                <p className="text-xl md:text-3xl text-secondary font-playful font-medium opacity-90">
                  (& a lil' bit of everything else :])
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Who am I Section */}
        <section id="about" className="relative z-10 max-w-6xl mx-auto w-full px-6 pb-32 pt-16">
          <ScrollReveal>
            <div className="flex flex-col items-center">
              <h2 className="font-playful text-5xl md:text-7xl font-bold text-[#cbd5e1] mb-16 drop-shadow-sm">
                - Who am I? -
              </h2>
              
              <div className="w-full bg-[#0a0f1a] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row gap-10 items-start border border-white/5 shadow-2xl">
                <div className="relative w-full md:w-[280px] aspect-square rounded-2xl overflow-hidden shrink-0 border border-white/10 shadow-lg">
                  <Image 
                    src="https://picsum.photos/seed/kieran-portrait/800/800"
                    alt="Kieran Portrait"
                    fill
                    className="object-cover"
                    data-ai-hint="man portrait"
                  />
                </div>
                
                <div className="space-y-8 text-xl md:text-[1.75rem] leading-[1.4] font-playful font-medium text-white/90">
                  <div className="space-y-4">
                    <p>
                      I'm <span className="text-secondary">Kieran</span>, known as <span className="text-secondary">althruist</span> online. I am an 18 y/o in Malta, reading for <span className="text-secondary">Bachelors of Science (Hons) in Digital Games Development.</span>
                    </p>
                    <p>
                      I like to do a variety of things;
                    </p>
                  </div>
                  
                  <p>
                    Ranging from <span className="text-secondary">3D Art/Animation</span> (using <span className="text-secondary">Blender</span>), <span className="text-secondary">Music-Making</span>, <span className="text-secondary">Coding</span> in several languages, <span className="text-secondary">Concept Art</span>, <span className="text-secondary">Sound Design</span>, <span className="text-secondary">Photography</span>.. anything creative you can think of I probably do it!
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Gallery Section */}
        <section id="work" className="max-w-7xl mx-auto w-full px-6 py-24 space-y-16 scroll-mt-24">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="space-y-2">
                <h2 className="font-playful text-6xl font-bold text-playful-gradient">MY CREATIONS</h2>
                <p className="text-muted-foreground font-medium text-lg">A journey through code, sound, and play.</p>
              </div>
              
              <div className="flex flex-wrap items-center gap-3">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={cn(
                        "relative px-8 py-3 rounded-full text-xl font-playful font-bold transition-all hover:scale-105",
                        isActive ? "text-white" : "bg-card text-muted-foreground hover:bg-muted"
                      )}
                    >
                      {isActive && (
                        <div className="absolute inset-0 bg-secondary rounded-full -z-10 animate-fade-in shadow-xl shadow-secondary/30" />
                      )}
                      {cat === 'Game' ? 'Games' : cat === 'Website' ? 'Websites' : cat === 'Certification' ? 'Certifications' : cat}
                    </button>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredProjects.map((project, idx) => (
              <ScrollReveal key={project.id} delay={(idx % 2) * 100 as any}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-24 px-6 border-t border-white/5 bg-card/20">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
            <div className="font-playful font-bold text-5xl text-primary">KIERAN</div>
            
            <div className="text-center space-y-6">
              <p className="text-muted-foreground font-medium text-lg">this website is homemade :] • Kieran 2025 • <span className="text-primary cursor-pointer hover:underline">check out the repository!</span></p>
              
              <div className="flex items-center justify-center gap-6">
                {socials.map((social, i) => (
                  <a 
                    key={i}
                    href={social.href} 
                    className="social-hover-blob text-secondary"
                  >
                    <social.icon size={28} strokeWidth={2.5} />
                  </a>
                ))}
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground/60 font-medium">© 2025 — HANDCRAFTED WITH JOY</p>
          </div>
        </ScrollReveal>
      </footer>
    </div>
  );
}
