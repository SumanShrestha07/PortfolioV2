"use client"

import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/lib/projects-data';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

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
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md bg-black/40 flex flex-col p-8 lg:p-12">
        {/* Top Info */}
        <div className="space-y-4">
          <p className="text-white font-medium text-sm lg:text-base">
            Apr 20, 2025, 01:52 AM
          </p>
          <div className="flex items-center gap-2">
            <Badge className="bg-primary text-primary-foreground border-none font-bold px-4 py-1.5 rounded-lg text-sm">
              Featured
            </Badge>
            <Badge className="bg-[#111] text-white border-none font-bold px-4 py-1.5 rounded-lg text-sm">
              {project.category === 'Games' ? 'Game' : project.category}
            </Badge>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex-1 flex flex-col items-center justify-center space-y-8">
          <h3 className="font-playful font-bold text-6xl md:text-7xl text-white text-center leading-none">
            {project.title}
          </h3>
          {/* The Coral Dot */}
          <div className="w-6 h-6 rounded-full bg-primary shadow-lg shadow-primary/50" />
        </div>

        {/* Bottom Button */}
        <div className="mt-auto">
          <div className="w-full bg-secondary text-white font-bold text-2xl font-playful rounded-2xl h-16 flex items-center justify-center transform transition-transform duration-300 group-hover:translate-y-0 translate-y-4 shadow-xl shadow-secondary/20">
            Read More
          </div>
        </div>
      </div>

      {/* Static Info (Visible when not hovered - optional, depends on how much you want it "exactly" like the pic) */}
      <div className="absolute bottom-8 left-8 group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="font-playful font-bold text-4xl text-white">
          {project.title}
        </h3>
        <p className="text-white/60 font-playful text-xl">
          {project.category}
        </p>
      </div>
    </Link>
  );
}
