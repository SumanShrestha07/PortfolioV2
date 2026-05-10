"use client"

import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/lib/projects-data';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, Gamepad2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link 
      href={`/projects/${project.id}`}
      className="group block relative overflow-hidden rounded-3xl bg-card border border-white/5 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
    >
      <div className="aspect-video overflow-hidden relative">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
        
        <div className="absolute bottom-6 left-6 space-y-1">
          <div className="flex items-center gap-2">
            <Badge className="bg-primary/20 text-primary border-primary/20 font-bold font-playful text-lg">
              {project.category}
            </Badge>
            <span className="text-sm text-white/60 font-playful font-bold">{project.year}</span>
          </div>
          <h3 className="font-playful font-bold text-4xl text-white group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </div>

        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-primary p-3 rounded-2xl text-primary-foreground shadow-xl shadow-primary/30">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>

      <div className="p-8">
        <p className="text-lg text-muted-foreground font-playful leading-relaxed line-clamp-2">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.slice(0, 3).map(tech => (
            <span key={tech} className="text-xs font-bold text-secondary uppercase tracking-wider bg-secondary/5 px-3 py-1 rounded-lg">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
