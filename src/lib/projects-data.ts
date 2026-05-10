import { PlaceHolderImages } from './placeholder-images';

export type Category = 'Games' | 'Music' | 'Archive' | 'Tools';

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
    category: 'Games',
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
    category: 'Games',
    summary: 'Neon-soaked high-speed 3D racing in a procedurally generated synthwave world.',
    fullDescription: 'Void Runner focuses on flow and speed. Developed using Unreal Engine 5, it utilizes Nanite for dense geometry and a custom shader system for the iconic retro-futuristic aesthetic.',
    thumbnail: PlaceHolderImages[2].imageUrl,
    images: [PlaceHolderImages[2].imageUrl],
    technologies: ['Unreal Engine 5', 'C++', 'Blender'],
    year: '2023'
  },
  {
    id: 'forest-spirits',
    title: 'Forest Spirits',
    category: 'Games',
    summary: 'A cozy RPG exploration game set in a haunted but friendly forest.',
    fullDescription: 'Forest Spirits is my most ambitious project yet. A narrative-driven experience featuring hand-drawn assets and a dynamic weather system that affects gameplay.',
    thumbnail: PlaceHolderImages[4].imageUrl,
    images: [PlaceHolderImages[4].imageUrl],
    technologies: ['Godot', 'GDScript', 'Krita'],
    year: '2024'
  }
];
