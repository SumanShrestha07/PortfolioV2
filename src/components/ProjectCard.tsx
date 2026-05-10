
"use client"

import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/lib/projects-data';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link 
      href={`/projects/${project.id}`}
      className="group relative block aspect-square md:aspect-video overflow-hidden rounded-[2.5rem] bg-card border border-white/5 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Subtle base gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Static Info (Visible when not hovered) */}
      <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12 group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="font-playful font-bold text-3xl lg:text-5xl text-white mb-1">
          {project.title}
        </h3>
        <p className="text-secondary font-playful text-lg lg:text-2xl font-bold uppercase tracking-wider">
          {project.category}
        </p>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-xl bg-black/60 flex flex-col p-8 lg:p-12">
        {/* Top Info */}
        <div className="space-y-2 lg:space-y-4 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <p className="text-white/60 font-medium text-[10px] lg:text-sm">
            APRIL 2025
          </p>
          <div className="flex items-center gap-2">
            <Badge className="bg-primary text-primary-foreground border-none font-bold px-3 py-1 rounded-lg text-[9px] lg:text-xs">
              FEATURED
            </Badge>
            <Badge className="bg-white/10 text-white border-none font-bold px-3 py-1 rounded-lg text-[9px] lg:text-xs">
              {project.category.toUpperCase()}
            </Badge>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex-1 flex flex-col items-center justify-center space-y-4 lg:space-y-8">
          <h3 className="font-playful font-bold text-4xl md:text-5xl lg:text-7xl text-white text-center leading-none px-4">
            {project.title}
          </h3>
          {/* Removed the circular dot as requested */}
        </div>

        {/* Bottom Button */}
        <div className="mt-auto">
          <div className="w-full bg-secondary text-white font-bold text-xl lg:text-3xl font-playful rounded-2xl h-14 lg:h-16 flex items-center justify-center transform translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-xl shadow-secondary/30">
            Read More
          </div>
        </div>
      </div>
    </Link>
  );
}
