"use client"

import { useState } from 'react';
import { PROJECTS, Category } from '@/lib/projects-data';
import { ProjectCard } from '@/components/ProjectCard';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Sparkles, Linkedin, MessageCircle, Youtube, Instagram, Github } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollReveal } from '@/components/ScrollReveal';
import { cn } from '@/lib/utils';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const categories: (Category | 'All')[] = ['All', 'Games'];

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  const socials = [
    { href: '#', icon: Linkedin },
    { href: '#', icon: MessageCircle },
    { href: '#', icon: Youtube },
    { href: '#', icon: Instagram },
    { href: 'https://github.com', icon: Github },
  ];

  const handleScrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex-1 flex flex-col">
      <Navigation />
      
      <main className="flex-1 space-y-24">
        {/* Hero Section */}
        <section className="relative min-h-screen w-full overflow-hidden flex items-center pt-32 pb-20">
          <Image 
            src={PlaceHolderImages[0].imageUrl}
            alt="Hero Background"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          
          <div className="relative z-10 max-w-7xl mx-auto w-full px-6 space-y-4">
            <ScrollReveal>
              <h1 className="font-playful text-7xl md:text-[10rem] font-bold tracking-tight text-white leading-[0.9]">
                Hiya, i'm <span className="text-primary">Kieran!</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="space-y-4">
                <p className="text-3xl md:text-5xl font-playful font-bold text-white">
                  A Game Developer, Musician, Content Creator
                </p>
                <p className="text-xl md:text-2xl text-secondary font-playful font-medium">
                  (& a lil' bit of everything else :])
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="pt-10">
                 <Button 
                  onClick={handleScrollToAbout}
                  size="lg" 
                  className="btn-playful rounded-full bg-primary text-primary-foreground font-bold h-16 px-10 text-2xl font-playful"
                 >
                  - Who am I? -
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Who am I Section */}
        <section id="about" className="max-w-6xl mx-auto w-full px-6 py-12 space-y-12">
          <ScrollReveal>
            <div className="relative flex flex-col items-center">
              <h2 className="font-playful text-6xl font-bold text-white mb-12">
                - Who am I? -
              </h2>
              
              <div className="w-full bg-card rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row gap-10 items-start border border-white/5">
                <div className="relative w-full md:w-[350px] aspect-square rounded-3xl overflow-hidden shrink-0">
                  <Image 
                    src="https://picsum.photos/seed/kieran-portrait/600/600"
                    alt="Kieran Portrait"
                    fill
                    className="object-cover"
                    data-ai-hint="man portrait"
                  />
                </div>
                
                <div className="space-y-6 text-xl md:text-2xl leading-snug font-playful font-medium">
                  <p>
                    I'm <span className="text-secondary">Kieran</span>, known as <span className="text-secondary">althruist</span> online. I am an 18 y/o in Malta, reading for <span className="text-secondary">Bachelors of Science (Hons) in Digital Games Development.</span>
                  </p>
                  <p>
                    I like to do a variety of things;
                  </p>
                  <p>
                    Ranging from <span className="text-secondary">3D Art/Animation</span> (using <span className="text-secondary">Blender</span>), <span className="text-secondary">Music-Making</span>, <span className="text-secondary">Coding</span> in several languages, <span className="text-secondary">Concept Art</span>, <span className="text-secondary">Sound Design</span>, <span className="text-secondary">Photography</span>.. anything creative you can think of I probably do it!
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Gallery Section */}
        <section id="work" className="max-w-7xl mx-auto w-full px-6 space-y-12">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <h2 className="font-playful text-5xl font-bold text-playful-gradient">MY CREATIONS</h2>
                <p className="text-muted-foreground font-medium">A journey through code, sound, and play.</p>
              </div>
              
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={cn(
                        "relative px-6 py-2 rounded-full text-lg font-playful transition-all hover:scale-105",
                        isActive ? "text-secondary-foreground" : "bg-card text-muted-foreground hover:bg-muted"
                      )}
                    >
                      {isActive && (
                        <div className="absolute inset-0 bg-secondary rounded-full -z-10 animate-fade-in shadow-lg shadow-secondary/20" />
                      )}
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => (
              <ScrollReveal key={project.id} delay={(idx % 2) * 100 as any}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-20 px-6 border-t border-white/5 mt-24">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
            <div className="font-playful font-bold text-4xl text-primary">KIERAN</div>
            
            <div className="text-center space-y-4">
              <p className="text-muted-foreground font-medium">this website is homemade :] • Kieran 2025 • <span className="text-primary cursor-pointer hover:underline">check out the repository!</span></p>
              
              <div className="flex items-center justify-center gap-4">
                {socials.map((social, i) => (
                  <a 
                    key={i}
                    href={social.href} 
                    className="social-hover-blob text-secondary"
                  >
                    <social.icon size={24} strokeWidth={2.5} />
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
