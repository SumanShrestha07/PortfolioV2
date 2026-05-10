"use client"

import { useState } from 'react';
import { PROJECTS, Category } from '@/lib/projects-data';
import { ProjectCard } from '@/components/ProjectCard';
import { Navigation } from '@/components/Navigation';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollReveal } from '@/components/ScrollReveal';
import { cn } from '@/lib/utils';

export default function ArchivePage() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const categories: (Category | 'All')[] = ['All', 'Website', 'Game', 'Music'];

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="flex-1 flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Archive Hero Section */}
        <section className="relative w-full min-h-[75vh] overflow-hidden flex flex-col items-center justify-center pt-32 pb-24">
          <Image 
            src={PlaceHolderImages[0].imageUrl}
            alt="Archive Background"
            fill
            className="object-cover opacity-40 brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
          
          <div className="relative z-10 text-center">
            <ScrollReveal>
              <div className="relative inline-block">
                <h1 className="font-playful text-[8rem] md:text-[12rem] font-bold text-white leading-none">
                  Archive
                </h1>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative -mt-20 z-20 max-w-7xl mx-auto w-full px-6 pb-32">
          {/* Active Category Display */}
          <ScrollReveal delay={100}>
            <div className="flex flex-col items-center mb-12">
              {/* Filter Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={cn(
                        "px-10 py-4 rounded-[1.5rem] text-xl font-playful font-bold transition-all hover:scale-105 shadow-xl",
                        isActive 
                          ? "bg-primary text-primary-foreground shadow-primary/20" 
                          : "bg-secondary text-white hover:bg-secondary/80 shadow-secondary/20"
                      )}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              {/* Selected Tab Display below the buttons */}
              <h2 className="font-playful text-5xl md:text-7xl font-bold text-white/90">
                - {activeCategory} -
              </h2>
            </div>
          </ScrollReveal>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
            {filteredProjects.map((project, idx) => (
              <ScrollReveal key={project.id} delay={(idx % 2) * 100 as any}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-32 space-y-4">
              <p className="font-playful text-3xl text-muted-foreground">No archives found in this category yet...</p>
              <p className="text-secondary font-medium">Try checking another one!</p>
            </div>
          )}
        </section>
      </main>

      <footer className="py-24 px-6 border-t border-white/5 bg-card/20">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
            <div className="font-playful font-bold text-5xl text-primary">KIERAN</div>
            <div className="text-center space-y-2">
              <p className="text-muted-foreground font-medium text-lg">this website is homemade :]</p>
              <p className="text-sm text-muted-foreground/60 font-medium uppercase tracking-widest">© 2025 — HANDCRAFTED WITH JOY</p>
            </div>
          </div>
        </ScrollReveal>
      </footer>
    </div>
  );
}
