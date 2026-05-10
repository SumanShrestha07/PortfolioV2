import { PlaceHolderImages } from './placeholder-images';

export type Category = 'Game' | 'Website' | 'Music' | 'Archive' | 'Tools' | 'Certification';

export interface ProjectSection {
  title: string;
  content: string;
}

export interface Project {
  id: string;
  title: string;
  category: Category;
  summary: string;
  fullDescription: string;
  sections?: ProjectSection[];
  thumbnail: string;
  images: string[];
  technologies: string[];
  year: string;
  link?: string;
  buttonText?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'star-chaser',
    title: 'Star Chaser',
    category: 'Game',
    summary: 'A fast-paced pixel art platformer about catching falling stars.',
    fullDescription: 'Star Chaser was built during a 48-hour game jam. It features responsive controls, procedurally generated levels, and a custom physics engine.',
    sections: [
      {
        title: "The Vision",
        content: "To create a 'pure' platforming experience where momentum and timing are everything. Inspired by classic arcade games, the goal was to make a game that is easy to pick up but difficult to master."
      },
      {
        title: "Key Features",
        content: "Dynamic star-fall patterns, a combo-based scoring system, and character-specific abilities that unlock as you progress through the levels."
      },
      {
        title: "Technical Challenges",
        content: "Writing a pixel-perfect collision system from scratch to ensure the character never 'clips' into the procedurally generated terrain, ensuring a fair challenge for the player."
      }
    ],
    thumbnail: PlaceHolderImages[1].imageUrl,
    images: [
      PlaceHolderImages[1].imageUrl,
      "https://picsum.photos/seed/star2/1200/800",
      "https://picsum.photos/seed/star3/1200/800"
    ],
    technologies: ['Unity', 'C#', 'Aseprite'],
    year: '2024',
    link: 'https://play.unity.com/',
    buttonText: 'Play'
  },
  {
    id: 'void-runner',
    title: 'Void Runner',
    category: 'Game',
    summary: 'Neon-soaked high-speed 3D racing in a procedurally generated synthwave world.',
    fullDescription: 'Void Runner focuses on flow and speed. Developed using Unreal Engine 5, it utilizes Nanite for dense geometry.',
    sections: [
      {
        title: "Gameplay Mechanics",
        content: "High-octane racing where drifting generates energy used for short bursts of speed. The world reacts to the music, with obstacles shifting to the beat."
      },
      {
        title: "Visual Aesthetic",
        content: "Combining retro-80s synthwave colors with modern volumetric lighting and post-processing effects to create a unique 'Retrofuturistic' look."
      }
    ],
    thumbnail: PlaceHolderImages[2].imageUrl,
    images: [
      PlaceHolderImages[2].imageUrl,
      "https://picsum.photos/seed/void2/1200/800",
      "https://picsum.photos/seed/void3/1200/800"
    ],
    technologies: ['Unreal Engine 5', 'C++', 'Blender'],
    year: '2023',
    buttonText: 'Play'
  },
  {
    id: 'pixel-archive-site',
    title: 'Pixel Archive V2',
    category: 'Website',
    summary: 'A high-performance portfolio website built with Next.js and Tailwind.',
    fullDescription: 'The very site you are browsing. Focused on smooth transitions, scroll-based animations, and a unique aesthetic.',
    sections: [
      {
        title: "Design Philosophy",
        content: "Bridging the gap between a professional resume and a creative art gallery. Using grainy textures and bold typography to create a memorable brand."
      },
      {
        title: "Tech Stack Decisions",
        content: "Next.js was chosen for its exceptional performance and SEO capabilities. Tailwind CSS allows for rapid, consistent UI development while keeping the bundle size small."
      }
    ],
    thumbnail: PlaceHolderImages[0].imageUrl,
    images: [
      PlaceHolderImages[0].imageUrl,
      "https://picsum.photos/seed/web2/1200/800",
      "https://picsum.photos/seed/web3/1200/800"
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    year: '2025',
    link: '#',
    buttonText: 'Live Preview'
  },
  {
    id: 'unity-junior-programmer',
    title: 'Unity Junior Programmer',
    category: 'Certification',
    summary: 'Junior programmer Badge received on completion of unity junior programmer course in unity learn.',
    fullDescription: 'Verified certification for completing the Unity Junior Programmer pathway. This course covers core game programming concepts, game design principles, and C# scripting within the Unity engine.',
    sections: [
      {
        title: "Certification Details",
        content: "Issued by Unity in July 2025. Credential ID: d72c8841-93d6-4c38-8626-225fc18843a. This badge confirms proficiency in technical game development workflows."
      }
    ],
    thumbnail: 'https://picsum.photos/seed/unity-junior/800/600',
    images: ['https://picsum.photos/seed/unity-junior/1200/800'],
    technologies: ['Unity', 'Game Programming', 'Game Design', 'C#'],
    year: '2025',
    link: 'https://id.unity.com/en/credentials/d72c8841-93d6-4c38-8626-225fc18843a',
    buttonText: 'Verification Link'
  },
  {
    id: 'unity-essentials',
    title: 'Unity Essentials',
    category: 'Certification',
    summary: 'Badge that I received on completion of unity essentials pathway in unity learn.',
    fullDescription: 'Foundation-level certification covering the core aspects of the Unity Editor and basic game development workflows.',
    sections: [
      {
        title: "Certification Details",
        content: "Issued by Unity in January 2025. Credential ID: 397aa5fc-dee5-47d5-9dc1-92cbc2403a15. Confirms understanding of Unity core systems and project structure."
      }
    ],
    thumbnail: 'https://picsum.photos/seed/unity-essentials/800/600',
    images: ['https://picsum.photos/seed/unity-essentials/1200/800'],
    technologies: ['Unity', 'C#', 'Game Development'],
    year: '2025',
    link: 'https://id.unity.com/en/credentials/397aa5fc-dee5-47d5-9dc1-92cbc2403a15',
    buttonText: 'Verification Link'
  },
  {
    id: 'unity-creative-core',
    title: 'Unity Creative Core',
    category: 'Certification',
    summary: 'Advanced Unity pathway focusing on Visual Effects, Lighting, and Audio (In Progress).',
    fullDescription: 'Currently completing the Creative Core pathway on Unity Learn to deepen expertise in high-end visuals and technical art.',
    sections: [
      {
        title: "Status",
        content: "Currently in progress. Focused on mastering ProBuilder, VFX Graph, and advanced lighting techniques to create more immersive game environments."
      }
    ],
    thumbnail: 'https://picsum.photos/seed/unity-creative/800/600',
    images: ['https://picsum.photos/seed/unity-creative/1200/800'],
    technologies: ['Unity', 'VFX', 'Lighting', 'Technical Art'],
    year: '2025 (In Progress)'
  },
  {
    id: 'forest-spirits',
    title: 'Forest Spirits',
    category: 'Game',
    summary: 'A cozy RPG exploration game set in a haunted but friendly forest.',
    fullDescription: 'Forest Spirits is my most ambitious project yet. A narrative-driven experience featuring hand-drawn assets.',
    sections: [
      {
        title: "World Building",
        content: "A living forest where every tree and spirit has a name. The narrative is told through environmental storytelling and interaction rather than cutscenes."
      },
      {
        title: "Art Direction",
        content: "Using hand-drawn textures and frame-by-frame animation to give the game a 'storybook' feel that contrasts with the eerie forest theme."
      }
    ],
    thumbnail: PlaceHolderImages[4].imageUrl,
    images: [
      PlaceHolderImages[4].imageUrl,
      "https://picsum.photos/seed/forest2/1200/800",
      "https://picsum.photos/seed/forest3/1200/800"
    ],
    technologies: ['Godot', 'GDScript', 'Krita'],
    year: '2024',
    buttonText: 'Play'
  }
];
