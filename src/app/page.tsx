"use client"

import { useState } from 'react';
import { PROJECTS, Category } from '@/lib/projects-data';
import { ProjectCard } from '@/components/ProjectCard';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowDown, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const categories: (Category | 'All')[] = ['All', 'Games', 'Music', 'Archive'];

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="flex-1 flex flex-col">
      <Navigation />
      
      <main className="flex-1 space-y-24">
        {/* Hero Section */}
        <section className="relative h-[85vh] w-full overflow-hidden flex items-end">
          <Image 
            src={PlaceHolderImages[0].imageUrl}
            alt="Hero Background"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          
          <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-20 space-y-6">
            <h1 className="font-playful text-7xl md:text-9xl font-bold tracking-tight text-white leading-tight animate-fade-in">
              Hiya, i'm <span className="text-primary">Kieran!</span>
            </h1>
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <p className="text-3xl md:text-4xl font-playful font-bold text-white">
                A Game Developer, Musician, Content Creator
              </p>
              <p className="text-xl text-secondary font-playful">
                (& a lil' bit of everything else :])
              </p>
            </div>
            <div className="pt-8 flex gap-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
               <Button size="lg" className="rounded-full bg-primary text-primary-foreground font-bold hover:scale-105 transition-transform h-14 px-8 text-xl font-playful">
                - Who am I? -
              </Button>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="work" className="max-w-7xl mx-auto w-full px-6 space-y-12 animate-fade-in">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <h2 className="font-playful text-5xl font-bold text-playful-gradient">MY CREATIONS</h2>
              <p className="text-muted-foreground font-medium">A journey through code, sound, and play.</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (activeCategory === cat ? (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-6 py-2 rounded-full text-lg font-playful bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-all"
                >
                  {cat}
                </button>
              ) : (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-6 py-2 rounded-full text-lg font-playful bg-card text-muted-foreground hover:bg-muted transition-all"
                >
                  {cat}
                </button>
              )))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* About Preview Section */}
        <section className="max-w-4xl mx-auto w-full px-6 py-24 text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase">
            <Sparkles size={20} /> About Me
          </div>
          <h2 className="font-playful text-6xl font-bold">Making stuff is <span className="italic text-secondary">fun</span>.</h2>
          <p className="text-2xl text-muted-foreground leading-relaxed font-playful">
            I've been breaking and making games since I was 10. Now I spend my time balancing technical architecture with creative playfulness. Whether it's a procedural universe or a simple drum loop, I just love the process of bringing things to life.
          </p>
          <div className="pt-8">
            <Button variant="outline" className="rounded-full border-primary/50 text-primary font-bold h-14 px-10 text-xl font-playful hover:bg-primary/10">
              Let's talk!
            </Button>
          </div>
        </section>
      </main>

      <footer className="py-20 px-6 border-t border-white/5 mt-24">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
          <div className="font-playful font-bold text-4xl text-primary">KIERAN</div>
          <div className="flex items-center gap-8 text-muted-foreground font-medium">
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-primary transition-colors">YouTube</a>
            <a href="#" className="hover:text-primary transition-colors">GitHub</a>
          </div>
          <p className="text-sm text-muted-foreground/60 font-medium">© 2024 — HANDCRAFTED WITH JOY</p>
        </div>
      </footer>
    </div>
  );
}
