"use client"

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { PROJECTS } from '@/lib/projects-data';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ExternalLink, Code, Monitor, ChevronRight, ChevronLeft } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function ProjectDetail() {
  const { id } = useParams();
  const router = useRouter();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-4">
        <h1 className="text-4xl font-headline font-bold">Project Not Found</h1>
        <Button onClick={() => router.push('/')} variant="outline" className="rounded-full">
          <ArrowLeft className="mr-2" size={16} /> Back to Home
        </Button>
      </div>
    );
  }

  const getButtonText = () => {
    if (project.buttonText) return project.buttonText;
    if (project.category === 'Game') return 'Play';
    if (project.category === 'Certification') return 'Verification Link';
    return 'Live Preview';
  };

  return (
    <div className="flex-1 flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Project Hero Header Section */}
        <section className="relative w-full min-h-[70vh] flex flex-col pt-48 pb-12 px-6 lg:px-24 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image 
              src={project.thumbnail} 
              alt={project.title} 
              fill 
              className="object-cover opacity-20 grayscale brightness-50 scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto w-full space-y-12">
            <ScrollReveal>
              <Button 
                onClick={() => router.back()} 
                className="bg-secondary hover:bg-secondary/80 text-white font-playful font-bold rounded-2xl px-10 py-7 text-2xl transition-all hover:scale-105 shadow-xl shadow-secondary/20"
              >
                Go Back
              </Button>
            </ScrollReveal>

            <div className="space-y-6 pt-8">
              <ScrollReveal delay={100}>
                <h1 className="font-playful text-7xl md:text-9xl font-bold text-white tracking-tight leading-[0.9] max-w-4xl">
                  {project.title}
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Badge className="bg-primary text-primary-foreground font-playful font-bold px-8 py-3 rounded-2xl text-xl lg:text-2xl border-none shadow-lg shadow-primary/20">
                    Featured
                  </Badge>
                  <Badge className="bg-secondary text-white font-playful font-bold px-8 py-3 rounded-2xl text-xl lg:text-2xl border-none shadow-lg shadow-secondary/20 uppercase">
                    {project.category}
                  </Badge>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Detailed Content Section */}
        <section className="max-w-7xl mx-auto w-full px-6 lg:px-24 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Gallery Section */}
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="font-playful text-5xl font-bold text-secondary">Gallery</h2>
                <div className="relative group">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {project.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="aspect-video relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-card">
                            <Image 
                              src={image} 
                              alt={`${project.title} Screenshot ${index + 1}`} 
                              fill 
                              className="object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="hidden lg:block">
                      <CarouselPrevious className="left-4 bg-black/40 border-white/10 hover:bg-black/60 text-white h-12 w-12" />
                      <CarouselNext className="right-4 bg-black/40 border-white/10 hover:bg-black/60 text-white h-12 w-12" />
                    </div>
                  </Carousel>
                </div>
              </div>
            </ScrollReveal>

            {/* Content Sections */}
            <div className="space-y-16">
              {project.sections && project.sections.length > 0 ? (
                project.sections.map((section, index) => (
                  <ScrollReveal key={index} delay={(index * 100) as any}>
                    <div className="space-y-6">
                      <h2 className="font-playful text-5xl font-bold text-secondary">{section.title}</h2>
                      <div className="prose prose-invert max-w-none">
                        <p className="text-2xl lg:text-3xl text-white/80 leading-relaxed font-playful font-medium">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))
              ) : (
                <ScrollReveal>
                  <div className="space-y-6">
                    <h2 className="font-playful text-5xl font-bold text-secondary">Overview</h2>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-2xl lg:text-3xl text-white/80 leading-relaxed font-playful font-medium">
                        {project.fullDescription}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-12">
              <ScrollReveal delay={200}>
                <div className="glass-panel p-8 lg:p-10 rounded-[2.5rem] border-white/5 bg-grain space-y-10 overflow-hidden isolate">
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 text-primary">
                      <Code size={20} strokeWidth={2.5} />
                      <h3 className="font-playful text-3xl font-bold">Tech Stack</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map(tech => (
                        <Badge key={tech} variant="secondary" className="bg-white/5 hover:bg-white/10 text-white font-medium px-4 py-1.5 rounded-xl text-lg">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6 pt-6 border-t border-white/5">
                    <div className="flex items-center gap-2 text-primary">
                      <Monitor size={20} strokeWidth={2.5} />
                      <h3 className="font-playful text-3xl font-bold">Category</h3>
                    </div>
                    <p className="text-2xl font-playful font-bold text-secondary uppercase tracking-widest">
                      {project.category}
                    </p>
                  </div>

                  {project.link && (
                    <div className="pt-8">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full">
                        <Button className="w-full min-h-[4rem] h-auto py-5 px-6 bg-accent text-accent-foreground font-playful font-bold text-lg md:text-xl lg:text-2xl rounded-[1.5rem] hover:scale-105 transition-all shadow-xl shadow-accent/30 btn-playful flex items-center justify-center gap-3 whitespace-normal text-center">
                          <span className="leading-tight flex-1">{getButtonText()}</span> 
                          <ExternalLink size={20} className="shrink-0" strokeWidth={2.5} />
                        </Button>
                      </a>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-24 px-6 border-t border-white/5 bg-card/20">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
            <div className="font-playful font-bold text-6xl text-primary tracking-tighter uppercase">SUMAN</div>
            <div className="text-center space-y-4">
              <p className="text-muted-foreground font-medium text-xl font-playful">Designed & Built by Suman Shrestha</p>
              <p className="text-sm text-muted-foreground/40 font-bold uppercase tracking-[0.3em]">
                © {new Date().getFullYear() > 2025 ? `2025 – ${new Date().getFullYear()}` : '2025'} · All Rights Reserved
              </p>
            </div>
          </div>
        </ScrollReveal>
      </footer>
    </div>
  );
}