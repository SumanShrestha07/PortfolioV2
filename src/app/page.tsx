"use client"

import { useState } from 'react';
import { PROJECTS, Category } from '@/lib/projects-data';
import { ProjectCard } from '@/components/ProjectCard';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowDown } from 'lucide-react';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const categories: (Category | 'All')[] = ['All', 'Web Dev', 'Design', 'AI', 'Mobile'];

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="flex-1 flex flex-col">
      <Navigation />
      
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-12 lg:py-24 space-y-16 lg:space-y-32">
        {/* Hero Section */}
        <section className="space-y-6 lg:max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-4 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Now Available for Collaboration
          </div>
          <h1 className="font-headline text-5xl lg:text-8xl font-bold tracking-tighter leading-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
            A curated <span className="text-primary italic">archive</span> of digital experiences.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
            Pixel Archive is a collection of projects spanning web development, interface design, and artificial intelligence. Exploring the intersection of aesthetics and utility.
          </p>
          <div className="flex items-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <Button size="lg" className="rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90">
              View Work
            </Button>
            <Button variant="ghost" className="rounded-full text-muted-foreground group">
              Scroll Explore
              <ArrowDown size={16} className="ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="work" className="space-y-8 lg:space-y-12 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <h2 className="font-headline text-3xl font-bold">PROJECT ARCHIVE</h2>
            
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                    activeCategory === cat 
                      ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20" 
                      : "bg-secondary/50 text-muted-foreground hover:bg-secondary border border-white/5"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="glass-panel p-12 lg:p-24 rounded-3xl text-center space-y-6 lg:space-y-8 animate-fade-in" style={{ animationDelay: '500ms' }}>
          <h2 className="font-headline text-4xl lg:text-6xl font-bold tracking-tight">Have a project in mind?</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            I'm currently taking on new projects and would love to hear about what you're building.
          </p>
          <Button size="lg" variant="outline" className="rounded-full border-primary/50 hover:bg-primary/10 px-10 h-14 text-lg font-bold">
            Get in touch
          </Button>
        </section>
      </main>

      <footer className="border-t border-white/5 py-12 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <div className="font-headline font-bold text-lg">PIXEL ARCHIVE</div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">© 2024 PORTFOLIO — BUILT WITH PRECISION</p>
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">GitHub</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}