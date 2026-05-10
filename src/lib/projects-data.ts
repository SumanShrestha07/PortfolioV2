import { PlaceHolderImages } from './placeholder-images';

export type Category = 'Game' | 'Website' | 'Music' | 'Archive' | 'Tools' | 'Certification';

export interface Project {
  id: string;
  title: string;
  category: Category;
  summary: string;
  fullDescription: string;
  thumbnail: string;
  images: string[];
  technologies: string[];
  year: string;
  link?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'star-chaser',
    title: 'Star Chaser',
    category: 'Game',
    summary: 'A fast-paced pixel art platformer about catching falling stars.',
    fullDescription: 'Star Chaser was built during a 48-hour game jam. It features responsive controls, procedurally generated levels, and a custom physics engine written in C# for Unity.',
    thumbnail: PlaceHolderImages[1].imageUrl,
    images: [PlaceHolderImages[1].imageUrl],
    technologies: ['Unity', 'C#', 'Aseprite'],
    year: '2024'
  },
  {
    id: 'void-runner',
    title: 'Void Runner',
    category: 'Game',
    summary: 'Neon-soaked high-speed 3D racing in a procedurally generated synthwave world.',
    fullDescription: 'Void Runner focuses on flow and speed. Developed using Unreal Engine 5, it utilizes Nanite for dense geometry and a custom shader system for the iconic retro-futuristic aesthetic.',
    thumbnail: PlaceHolderImages[2].imageUrl,
    images: [PlaceHolderImages[2].imageUrl],
    technologies: ['Unreal Engine 5', 'C++', 'Blender'],
    year: '2023'
  },
  {
    id: 'pixel-archive-site',
    title: 'Pixel Archive V2',
    category: 'Website',
    summary: 'A high-performance portfolio website built with Next.js and Tailwind.',
    fullDescription: 'The very site you are browsing. Focused on smooth transitions, scroll-based animations, and a unique playful aesthetic that bridges professional and creative worlds.',
    thumbnail: PlaceHolderImages[0].imageUrl,
    images: [PlaceHolderImages[0].imageUrl],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    year: '2025'
  },
  {
    id: 'unity-pro-cert',
    title: 'Unity Professional Developer',
    category: 'Certification',
    summary: 'Official certification for advanced game development and optimization in Unity.',
    fullDescription: 'This certification validates professional-level skills in Unity game development, including advanced scripting, optimization, and project management for large-scale titles.',
    thumbnail: 'https://picsum.photos/seed/cert1/800/600',
    images: ['https://picsum.photos/seed/cert1/800/600'],
    technologies: ['Unity', 'Game Design', 'Optimization'],
    year: '2024'
  },
  {
    id: 'frontend-expert-cert',
    title: 'Frontend Architecture',
    category: 'Certification',
    summary: 'Certification for building scalable and performant modern web applications.',
    fullDescription: 'Focused on advanced React patterns, performance optimization, and architectural decision-making for complex frontend systems.',
    thumbnail: 'https://picsum.photos/seed/cert2/800/600',
    images: ['https://picsum.photos/seed/cert2/800/600'],
    technologies: ['React', 'Next.js', 'Architecture'],
    year: '2024'
  },
  {
    id: 'synth-waves-ep',
    title: 'Synth Waves EP',
    category: 'Music',
    summary: 'A 5-track electronic music project exploring retro-future soundscapes.',
    fullDescription: 'Produced entirely in Ableton Live, this EP uses vintage synth emulations and modern processing to create an immersive auditory journey through 80s-inspired neon worlds.',
    thumbnail: PlaceHolderImages[3].imageUrl,
    images: [PlaceHolderImages[3].imageUrl],
    technologies: ['Ableton Live', 'Serum', 'Vital'],
    year: '2024'
  },
  {
    id: 'forest-spirits',
    title: 'Forest Spirits',
    category: 'Game',
    summary: 'A cozy RPG exploration game set in a haunted but friendly forest.',
    fullDescription: 'Forest Spirits is my most ambitious project yet. A narrative-driven experience featuring hand-drawn assets and a dynamic weather system that affects gameplay.',
    thumbnail: PlaceHolderImages[4].imageUrl,
    images: [PlaceHolderImages[4].imageUrl],
    technologies: ['Godot', 'GDScript', 'Krita'],
    year: '2024'
  }
];
