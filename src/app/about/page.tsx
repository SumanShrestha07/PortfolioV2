"use client"

import { Navigation } from '@/components/Navigation';
import { Mail, Github, Linkedin, Twitter, MapPin } from 'lucide-react';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function AboutPage() {
  return (
    <div className="flex-1 flex flex-col">
      <Navigation />
      
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-12 lg:py-24 space-y-24">
        {/* Intro Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <ScrollReveal>
            <div className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border border-white/10">
              <Image 
                src="https://picsum.photos/seed/portrait/800/1000" 
                alt="Designer Portrait" 
                fill 
                className="object-cover"
              />
            </div>
          </ScrollReveal>
          <div className="space-y-8">
            <ScrollReveal delay={100}>
              <h1 className="font-playful text-6xl lg:text-8xl font-bold tracking-tighter leading-tight">
                Designing the <span className="text-primary italic">next</span> digital frontier.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
                <p>
                  I am a multidisciplinary developer and designer focused on creating high-performance digital experiences. With a background in computer science and a passion for minimalist aesthetics, I bridge the gap between complex engineering and intuitive design.
                </p>
                <p>
                  My work is centered around the belief that technology should be transparent—serving the user without overwhelming them. Whether it's an AI-driven dashboard or a simple e-commerce site, I prioritize clarity, speed, and emotional resonance.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-white/5 text-sm">
                  <MapPin size={16} className="text-primary" />
                  <span>Berlin, Germany</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-white/5 text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span>Available for New Projects</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="space-y-12">
          <ScrollReveal>
            <h2 className="font-playful text-4xl font-bold border-b border-white/10 pb-6">LET'S CONNECT</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal delay={0}>
              <a href="mailto:hello@pixelarchive.fyi" className="group glass-panel p-8 rounded-2xl border-white/5 hover:border-primary/50 transition-all flex flex-col justify-between aspect-square">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</p>
                  <p className="text-lg font-medium group-hover:text-primary transition-colors">hello@pixelarchive.fyi</p>
                </div>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <a href="#" className="group glass-panel p-8 rounded-2xl border-white/5 hover:border-primary/50 transition-all flex flex-col justify-between aspect-square">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-foreground group-hover:scale-110 transition-transform">
                  <Github size={24} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">GitHub</p>
                  <p className="text-lg font-medium group-hover:text-primary transition-colors">@pixelarchive</p>
                </div>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <a href="#" className="group glass-panel p-8 rounded-2xl border-white/5 hover:border-primary/50 transition-all flex flex-col justify-between aspect-square">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-foreground group-hover:scale-110 transition-transform">
                  <Linkedin size={24} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">LinkedIn</p>
                  <p className="text-lg font-medium group-hover:text-primary transition-colors">in/pixelarchive</p>
                </div>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <a href="#" className="group glass-panel p-8 rounded-2xl border-white/5 hover:border-primary/50 transition-all flex flex-col justify-between aspect-square">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-foreground group-hover:scale-110 transition-transform">
                  <Twitter size={24} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Twitter</p>
                  <p className="text-lg font-medium group-hover:text-primary transition-colors">@pixelarchive</p>
                </div>
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* Services / Philosophy */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          <ScrollReveal delay={0}>
            <div className="space-y-6">
              <h3 className="font-playful text-2xl font-bold text-primary">01. Strategy</h3>
              <p className="text-muted-foreground leading-relaxed">Understanding the core problem before writing a single line of code. Defining success metrics and user journeys.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="space-y-6">
              <h3 className="font-playful text-2xl font-bold text-primary">02. Design</h3>
              <p className="text-muted-foreground leading-relaxed">Creating visual systems that are scalable, accessible, and emotionally engaging. High-fidelity prototyping in Figma.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="space-y-6">
              <h3 className="font-playful text-2xl font-bold text-primary">03. Development</h3>
              <p className="text-muted-foreground leading-relaxed">Building with modern tools like Next.js, TypeScript, and Three.js. Focused on performance, SEO, and clean code.</p>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <footer className="border-t border-white/5 py-12 px-6 bg-card/30 mt-24">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2">
              <div className="font-playful font-bold text-lg">PIXEL ARCHIVE</div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">© 2024 PORTFOLIO — BUILT WITH PRECISION</p>
            </div>
            <div className="flex items-center gap-8">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">Twitter</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">GitHub</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">LinkedIn</a>
            </div>
          </div>
        </ScrollReveal>
      </footer>
    </div>
  );
}
