"use client"

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { PROJECTS } from '@/lib/projects-data';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ExternalLink, Calendar, Code, Monitor } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ProjectDetail() {
  const { id } = useParams();
  const router = useRouter();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-4">
        <h1 className="text-4xl font-headline font-bold">Project Not Found</h1>
        <Button onClick={() => router.push('/')} variant="outline" className="rounded-full">
          <ArrowLeft className="mr-2" size={16} /> Back to Archive
        </Button>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      <Navigation />
      
      <main className="flex-1 animate-fade-in">
        <div className="max-w-7xl mx-auto w-full px-6 py-12 lg:py-20 space-y-12 lg:space-y-20">
          
          {/* Header Info */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 space-y-6">
              <Button 
                onClick={() => router.back()} 
                variant="ghost" 
                className="p-0 hover:bg-transparent text-muted-foreground hover:text-primary mb-4"
              >
                <ArrowLeft size={18} className="mr-2" /> Back to Collection
              </Button>
              <h1 className="font-headline text-5xl lg:text-8xl font-bold tracking-tighter leading-none">
                {project.title}
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light">
                {project.summary}
              </p>
            </div>
            
            <div className="lg:col-span-4 space-y-8 glass-panel p-8 rounded-2xl border-white/5">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-1">
                  <span className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-primary">
                    <Calendar size={12} /> Year
                  </span>
                  <div className="text-lg font-medium">{project.year}</div>
                </div>
                <div className="space-y-1">
                  <span className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-primary">
                    <Monitor size={12} /> Service
                  </span>
                  <div className="text-lg font-medium">{project.category}</div>
                </div>
              </div>

              <div className="space-y-4">
                <span className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-primary">
                  <Code size={12} /> Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <Badge key={tech} variant="secondary" className="bg-white/5 hover:bg-white/10 text-xs font-medium py-1 px-3">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button className="w-full h-12 rounded-xl bg-accent text-accent-foreground font-bold hover:opacity-90">
                Live Preview <ExternalLink size={16} className="ml-2" />
              </Button>
            </div>
          </section>

          {/* Main Content Images */}
          <section className="space-y-6 lg:space-y-12">
            <div className="aspect-video relative overflow-hidden rounded-3xl border border-white/10">
              <Image 
                src={project.images[0]} 
                alt={project.title} 
                fill 
                className="object-cover"
                priority
              />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
              <div className="prose prose-invert max-w-none space-y-6">
                <h3 className="font-headline text-3xl font-bold">The Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.fullDescription}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The primary challenge was balancing technical performance with high-fidelity visual elements. Through rigorous prototyping and user testing, we developed an interface that feels both powerful and approachable.
                </p>
              </div>
              <div className="space-y-6">
                {project.images.slice(1).map((img, idx) => (
                  <div key={idx} className="aspect-[4/3] relative overflow-hidden rounded-2xl border border-white/5">
                    <Image src={img} alt={`${project.title} view ${idx+2}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </main>

      <footer className="border-t border-white/5 py-12 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <div className="font-headline font-bold text-lg">PIXEL ARCHIVE</div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">© 2024 PORTFOLIO — BUILT WITH PRECISION</p>
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Twitter</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">GitHub</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}