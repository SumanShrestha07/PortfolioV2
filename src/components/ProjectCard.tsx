"use client"

import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/lib/projects-data';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link 
      href={`/projects/${project.id}`}
      className="group block relative overflow-hidden rounded-xl bg-card border border-white/5 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={800}
          height={600}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        <div className="absolute top-4 right-4 translate-x-2 -translate-y-2 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-primary p-2 rounded-full text-primary-foreground shadow-lg">
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>

      <div className="p-5 space-y-3">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="border-primary/20 text-primary-foreground/70 text-[10px] uppercase tracking-wider font-semibold">
            {project.category}
          </Badge>
          <span className="text-xs text-muted-foreground font-mono">{project.year}</span>
        </div>
        
        <h3 className="font-headline font-bold text-xl group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {project.summary}
        </p>
      </div>
    </Link>
  );
}