import { PlaceHolderImages } from './placeholder-images';

export type Category = 'Game' | 'Website' | 'Certification';

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
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  //TicTacToe
  {
    id: 'tic-tac-toe',
    title: 'Tic Tac Toe',
    category: 'Game',
    featured: true,
    summary: 'My first game published on the Google Play Store — simple, fun, and classic.',
    fullDescription: 'A classic Tic Tac Toe game built and published on the Google Play Store.',
    sections: [
      {
      title: 'About the Game',
      content: 'My very first game published on the Google Play Store! A simple, fun, and classic Tic Tac Toe game you can play anytime. This was the beginning of my game development journey.'
      },
      {
        title: 'My First Publication',
        content: 'Publishing this game was a big milestone for me — going from learning Unity to actually shipping a real game on the Play Store. Every developer has to start somewhere, and this is where my journey began.'
      },
      {
        title: 'What I Learned',
        content: 'Building and publishing this game taught me the full pipeline — from development to Play Store submission, handling builds, signing APKs, and writing store listings and testings.'
      }
    ],
    thumbnail: "/TicTacToe/tictactoe.png",
    images: [
      "/TicTacToe/tictactoe.png",
      "/TicTacToe/tictactoeinfo.png"
    ],
    technologies: ['Unity', 'C#', 'Android'],
    year: 'Apr 29, 2026',
    link: 'https://play.google.com/store/apps/details?id=com.SumanGameStudio.TicTacToe&pcampaignid=web_share',
    buttonText: 'Play on Play Store'
  },
  //Website
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    category: 'Website',
    featured: true,
    summary: 'My personal portfolio built with Next.js and Tailwind CSS — designed and built from scratch.',
    fullDescription: 'The very site you are browsing right now. Built from scratch with Next.js, TypeScript and Tailwind CSS.',
    sections: [
    {
      title: 'About',
      content: 'My personal portfolio website showcasing my game development journey, work experience, and projects.'
    },
    {
      title: 'Design',
      content: 'Dark theme with animated grain textures, smooth scroll reveals, and a playful typography style.'
    },
    {
      title: 'Tech Stack',
      content: 'Built with Next.js 15, TypeScript, and Tailwind CSS. Hosted on vercel.'
    }
  ],
    thumbnail: "/Website/demo.png",
    images: [
      "/Website/demo.png",
      "/Website/vercel.png"
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    year: 'May 10,2026',
    link: 'https://sumanshrestha07.com.np',
    buttonText: 'Live Preview'
  },
  //Certificates
  {
    id: 'unity-creative-core',
    title: 'Unity Creative Core',
    category: 'Certification',
    featured: true,
    summary: 'Advanced Unity pathway focusing on Visual Effects, Lighting, and Audio (In Progress).',
    fullDescription: 'Currently completing the Creative Core pathway on Unity Learn to deepen expertise in high-end visuals and technical art.',
    sections: [
      {
        title: "Status",
        content: "Currently in progress. Focused on mastering Animations, Shader Graph, and advanced lighting techniques to create more immersive game environments."
      }
    ],
    thumbnail: '/Certificates/Creative/thumbnail.png',
    images: ['/Certificates/Creative/thumbnail.png',
      '/Certificates/Creative/progress.png',
      '/Certificates/Creative/submission.png',
      '/Certificates/Completed.png',
      '/Certificates/missions.png',
      '/Certificates/quizes.png',
      '/Certificates/xp.png',
    ],
    technologies: ['UI', 'Animation & VFX', 'Lighting', 'Shader','Camera','Post-processing','Audio','Protoyping'],
    year: '2026 (In Progress)'
  },
  {
    id: 'unity-junior-programmer',
    title: 'Unity Junior Programmer',
    category: 'Certification',
    featured: true,
    summary: 'Junior programmer Badge received on completion of unity junior programmer course in unity learn.',
    fullDescription: 'Verified certification for completing the Unity Junior Programmer pathway. This course covers core game programming concepts, game design principles, and C# scripting within the Unity engine.',
    sections: [
      {
        title: "Certification Details",
        content: "Issued by Unity in July 2025. Credential ID: d72c8841-93d6-4c38-8626-225fc18843a. This badge confirms proficiency in technical game development workflows."
      },
      {
        title: 'What I Learned',
        content: 'Core game programming concepts, C# scripting in Unity, game design principles, debugging workflows, and best practices for structuring Unity projects professionally.'
      }
    ],
    thumbnail: '/Certificates/Junior/badge.png',
    images: ['/Certificates/Junior/badge.png',
       '/Certificates/Junior/complete.png',
      '/Certificates/Junior/submission.png',
      '/Certificates/Completed.png',
      '/Certificates/missions.png',
      '/Certificates/quizes.png',
      '/Certificates/xp.png',
    ],
    technologies: ['Unity', 'Game Programming', 'Game Design', 'C#'],
    year: 'July 09, 2025',
    link: 'https://www.credly.com/badges/d72c8841-93d6-4c38-8626-225fc18843a4/public_url',
    buttonText: 'Verification Link'
  },
  {
    id: 'unity-essentials',
    title: 'Unity Essentials',
    category: 'Certification',
    summary: 'Badge received on completion of Unity Essentials pathway on Unity Learn.',
    fullDescription: 'Foundation-level certification covering the core aspects of the Unity Editor and basic game development workflows.',
     sections: [
    {
      title: 'Certification Details',
      content: 'Issued by Unity in January 2025. Credential ID: 397aa5fc-dee5-47d5-9dc1-92cbc2403a15. Confirms understanding of Unity core systems and project structure.'
    },
    {
      title: 'What I Learned',
      content: 'Learned the fundamentals of Unity Editor, scene management, GameObjects, components, basic scripting, and how to structure a Unity project from the ground up.'
    }
  ],
    thumbnail: '/Certificates/Essentials/badge.png',
    images: ['/Certificates/Essentials/badge.png',
       '/Certificates/Essentials/complete.png',
      '/Certificates/Essentials/submission.png',
      '/Certificates/Completed.png',
      '/Certificates/missions.png',
      '/Certificates/quizes.png',
      '/Certificates/xp.png',
    ],
    technologies: ['Unity', 'C#', 'Game Development'],
    year: ' January 16, 2025',
    link: 'https://www.credly.com/badges/397aa5fc-dee5-47d5-9dc1-92cbc2403a15/public_url',
    buttonText: 'Verification Link'
  },
//old projects
  {
    id: 'monster-chase',
    title: 'Monster Chase',
    category: 'Game',
    summary: 'A fun chase game built with Unity — completed as part of a FreeCodeCamp course.',
    fullDescription: 'Monster Chase is a game built with Unity as part of a FreeCodeCamp course. The player must escape from chasing monsters using quick reflexes and smart movement.',
    thumbnail: '/MonsterChase/demo.png',
    images: [
      '/MonsterChase/demo.png',
    ],
    technologies: ['Unity', 'C#', 'WebGL'],
    year: '2023',
    link: 'https://sumanshrestha07.github.io/Monster-Chase/',
    buttonText: 'Play in Browser',
    sections: [
      {
        title: 'About the Game',
        content: 'Monster Chase is a fun and fast-paced game where you must escape from chasing monsters. Built with Unity and published as a WebGL game playable directly in the browser.'
      },
      {
        title: 'Learning Journey',
        content: 'This game was built as part of a FreeCodeCamp Unity course. A big thanks to FreeCodeCamp for making high-quality game development education free and accessible to everyone!'
      },
      {
        title: 'What I Learned',
        content: 'Learned how to implement enemy AI chasing mechanics, player movement, collision detection, and how to export and deploy a Unity game as a WebGL build.'
      }
    ],
  },
  {
  id: 'flappy-bird-clone',
  title: 'Flappy Bird Clone',
  category: 'Game',
  summary: 'A Flappy Bird clone built with Unity — playable directly on GitHub Pages.',
  fullDescription: 'A faithful recreation of the classic Flappy Bird game built with Unity. Tap to fly, dodge the pipes, and beat your high score!',
  thumbnail: '/FlappyBird/demo.png',
  images: [
    '/FlappyBird/demo.png',
  ],
  technologies: ['Unity', 'C#', 'WebGL'],
  year: '2023',
  link: 'https://sumanshrestha07.github.io/FlappyBird/',
  buttonText: 'Play in Browser',
  sections: [
      {
        title: 'About the Game',
        content: 'A fun recreation of the iconic Flappy Bird game. Tap to keep the bird flying, dodge the pipes, and see how far you can go. Simple to play, hard to master!'
      },
      {
        title: 'How I Built It',
        content: 'Built with Unity and exported as a WebGL game so anyone can play it directly in the browser without downloading anything. Physics, collision detection and scoring all built from scratch in C#.'
      },
      {
        title: 'What I Learned',
        content: 'Learned Unity physics, rigid body dynamics, procedural pipe spawning, score tracking, game over and restart systems, and deploying WebGL builds to GitHub Pages.'
      }
    ],
  },
];
