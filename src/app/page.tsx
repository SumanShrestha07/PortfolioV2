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

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const categories: (Category | 'All')[] = ['All', 'Games', 'Music', 'Archive'];

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
            <ScrollReveal>
              <h1 className="font-playful text-7xl md:text-9xl font-bold tracking-tight text-white leading-tight">
                Hiya, i'm <span className="text-primary">Kieran!</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="space-y-2">
                <p className="text-3xl md:text-4xl font-playful font-bold text-white">
                  A Game Developer, Musician, Content Creator
                </p>
                <p className="text-xl text-secondary font-playful">
                  (& a lil' bit of everything else :])
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="pt-8 flex gap-4">
                 <Button size="lg" className="btn-playful rounded-full bg-primary text-primary-foreground font-bold h-14 px-8 text-xl font-playful">
                  - Who am I? -
                </Button>
              </div>
            </ScrollReveal>
          </div>
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
                {categories.map((cat) => (activeCategory === cat ? (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="px-6 py-2 rounded-full text-lg font-playful bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-all scale-105"
                  >
                    {cat}
                  </button>
                ) : (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="px-6 py-2 rounded-full text-lg font-playful bg-card text-muted-foreground hover:bg-muted transition-all hover:scale-105"
                  >
                    {cat}
                  </button>
                )))}
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

        {/* About Preview Section */}
        <ScrollReveal>
          <section className="max-w-4xl mx-auto w-full px-6 py-24 text-center space-y-8">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase">
              <Sparkles size={20} /> About Me
            </div>
            <h2 className="font-playful text-6xl font-bold">Making stuff is <span className="italic text-secondary">fun</span>.</h2>
            <p className="text-2xl text-muted-foreground leading-relaxed font-playful">
              I've been breaking and making games since I was 10. Now I spend my time balancing technical architecture with creative playfulness. Whether it's a procedural universe or a simple drum loop, I just love the process of bringing things to life.
            </p>
            <div className="pt-8">
              <Button variant="outline" className="btn-playful rounded-full border-primary/50 text-primary font-bold h-14 px-10 text-xl font-playful hover:bg-primary/10">
                Let's talk!
              </Button>
            </div>
          </section>
        </ScrollReveal>
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
