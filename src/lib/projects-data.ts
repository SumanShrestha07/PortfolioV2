import { PlaceHolderImages } from './placeholder-images';

export type Category = 'Web Dev' | 'Design' | 'AI' | 'Mobile';

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
    id: 'lumina-ai',
    title: 'Lumina AI',
    category: 'AI',
    summary: 'Orchestrating complex LLM workflows with a simple node-based interface.',
    fullDescription: 'Lumina AI addresses the complexity of chaining multiple Large Language Models. Built for researchers and developers, it provides a high-fidelity visual interface to map out prompts, context injection, and response filtering. The system supports real-time streaming and performance monitoring for production-ready AI agents.',
    thumbnail: PlaceHolderImages[0].imageUrl,
    images: [PlaceHolderImages[0].imageUrl, "https://picsum.photos/seed/l2/1200/800", "https://picsum.photos/seed/l3/1200/800"],
    technologies: ['React', 'TypeScript', 'Genkit', 'Tailwind CSS', 'Framer Motion'],
    year: '2024'
  },
  {
    id: 'neptune-eco',
    title: 'Neptune E-commerce',
    category: 'Web Dev',
    summary: 'A high-performance storefront designed for digital artisans.',
    fullDescription: 'Neptune is an exploration into ultra-fast commerce. Utilizing Next.js Server Components and edge caching, it achieves sub-100ms page transitions. The design language focuses on white space and high-contrast typography to elevate product photography.',
    thumbnail: PlaceHolderImages[1].imageUrl,
    images: [PlaceHolderImages[1].imageUrl, "https://picsum.photos/seed/n2/1200/800"],
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe'],
    year: '2023'
  },
  {
    id: 'ghost-protocol',
    title: 'Ghost Protocol',
    category: 'Design',
    summary: 'An immersive cybersecurity dashboard for threat detection.',
    fullDescription: 'Ghost Protocol is a conceptual design for a SOC (Security Operations Center) dashboard. It explores non-traditional data visualization methods, using 3D particle systems to represent network packets and heatmaps for geographically distributed attacks.',
    thumbnail: PlaceHolderImages[2].imageUrl,
    images: [PlaceHolderImages[2].imageUrl, "https://picsum.photos/seed/g2/1200/800"],
    technologies: ['Three.js', 'D3.js', 'Figma', 'React'],
    year: '2024'
  },
  {
    id: 'arcade-revival',
    title: 'Arcade Revival',
    category: 'Web Dev',
    summary: 'Bringing classic 8-bit games to the modern web.',
    fullDescription: 'Arcade Revival is a social gaming platform that hosts emulated retro games. It features global leaderboards, achievement systems, and a real-time multiplayer spectator mode.',
    thumbnail: PlaceHolderImages[3].imageUrl,
    images: [PlaceHolderImages[3].imageUrl, "https://picsum.photos/seed/a2/1200/800"],
    technologies: ['WebAssembly', 'Canvas API', 'Socket.io', 'Node.js'],
    year: '2023'
  },
  {
    id: 'zen-space',
    title: 'Zen Space',
    category: 'Mobile',
    summary: 'A minimalist mindfulness app focusing on audio immersion.',
    fullDescription: 'Zen Space uses spatial audio and biofeedback to help users reach deep meditative states. The interface is intentionally sparse, using only essential icons and soft gradients to minimize cognitive load.',
    thumbnail: PlaceHolderImages[4].imageUrl,
    images: [PlaceHolderImages[4].imageUrl, "https://picsum.photos/seed/z2/1200/800"],
    technologies: ['React Native', 'Tone.js', 'Reanimated', 'Expo'],
    year: '2024'
  },
  {
    id: 'orbital-edu',
    title: 'Orbital',
    category: 'Design',
    summary: 'Interactive cosmic education platform.',
    fullDescription: 'Orbital reimagines how we learn about astronomy. It is a full-screen, interactive experience that allows students to navigate through a simulated solar system with real-time NASA data integration.',
    thumbnail: PlaceHolderImages[5].imageUrl,
    images: [PlaceHolderImages[5].imageUrl, "https://picsum.photos/seed/o2/1200/800"],
    technologies: ['WebGL', 'GLSL', 'React', 'GSAP'],
    year: '2022'
  }
];