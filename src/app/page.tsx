
"use client"

import { useState } from 'react';
import { PROJECTS, Category } from '@/lib/projects-data';
import { ProjectCard } from '@/components/ProjectCard';
import { Navigation } from '@/components/Navigation';
import { Linkedin, Github, Facebook, Briefcase } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollReveal } from '@/components/ScrollReveal';
import { cn } from '@/lib/utils';

const UnityIcon = ({ size = 28, ...props }: { size?: number } & React.SVGProps<SVGSVGElement>) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 256 256" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M128 0L20 62.35v131.3L128 256l108-62.35V62.35L128 0zm90.4 71.6L128 123.8 37.6 71.6 128 19.4l90.4 52.2zM37.6 90.4L118 136.8v99.8l-80.4-46.4V90.4zm100 99.8V136.8l80.4-46.4v99.8l-80.4 46.4z"/>
  </svg>
);

const EXPERIENCES = [
  {
    role: "Unity Developer",
    company: "Shornoga Technology",
    period: "Jun 2024 — May 2026",
    type: "Full-time",
    location: "Kathmandu, Nepal • On-site",
    description: [
      "Built and maintained integrations with REST APIs and external SDKs",
      "Developed and maintained casino and mobile games using Unity",
      "Implemented multiplayer systems and game optimization",
      "Developed core gameplay systems for slots, fishing, and crash-based casino games",
      "Worked with C# to build core game mechanics",
      "Shipped Billion Balls: Casino game",
      "Shipped WinnersClub2.0 : Casino game",
      "Built and launched cross-platform games for iOS, Android, and Windows"
    ]
  },
  {
    role: "Unity Developer",
    company: "Ochrebyte",
    period: "Feb 2024 — Jun 2024",
    type: "Full-time",
    location: "Chakupat, Lalitpur • On-site",
    description: [
      "Contributed to high-quality game development projects using Unity Engine",
      "Built casino games: slots, lotto, and lottery",
      "Collaborated with design teams to implement game features",
      "Optimized game performance for mobile platforms and ios",
      "Shipped Kauda: Casino game"
    ]
  },
  {
    role: "Game Developer Internship",
    company: "Ochrebyte",
    period: "Oct 2023 — Jan 2024",
    type: "Internship",
    location: "Chakupat, Lalitpur • On-site",
    description: [
      "Learned core Unity development workflows and best practices",
      "Assisted in debugging and prototyping game mechanics",
      "Gained hands-on experience with C# scripting and Unity UI systems"
    ]
  }
];

export default function Home() {

  const dob = new Date(2000, 6, 20); // July 20, 2000
  const today = new Date();
  const age = today.getFullYear() - dob.getFullYear() - 
    (today < new Date(today.getFullYear(), 6, 20) ? 1 : 0);

  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const categories: (Category | 'All')[] = ['All', 'Game', 'Website', 'Certification'];

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS.filter(p => p.category === 'Game' || p.category === 'Website' || p.category === 'Certification') 
    : PROJECTS.filter(p => p.category === activeCategory);

  const socials = [
    { href: 'https://www.linkedin.com/in/suman-stha-5b2377282/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://www.facebook.com/suman.shrestha.789698', icon: Facebook, label: 'Facebook' },
    { href: 'https://github.com/SumanShrestha07', icon: Github, label: 'GitHub' },
    { href: 'https://play.unity.com/en/user/a2ac0fa5-ab73-4624-8153-803fdf7d1f73', icon: UnityIcon, label: 'Unity Play' },
  ];

  return (
    <div className="flex-1 flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative w-full overflow-hidden flex flex-col pt-40 pb-12 min-h-[90vh] justify-center items-center text-center">
        <Image 
          src="/bg.png"
          alt="Background"
          fill
          className="object-cover opacity-80 brightness-[0.8]"
          priority
        />
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background" />
          
          <div className="relative z-10 max-w-7xl mx-auto w-full px-6 space-y-12">
            <ScrollReveal>
              <h1 className="font-playful text-7xl md:text-[11rem] font-bold tracking-tight text-white leading-[0.8]">
                Hi, i'm <span className="text-primary">Suman!</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="space-y-4 bg-slate-950/60 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 inline-block shadow-2xl">
                <p className="text-3xl md:text-6xl font-playful font-bold text-white leading-tight">
                  A Game Developer
                </p>
                <p className="text-xl md:text-3xl text-secondary font-playful font-medium opacity-90">
                  (& a lil' bit of everything else :])
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Who am I Section */}
        <section id="about" className="relative z-10 max-w-6xl mx-auto w-full px-6 pb-32 pt-16">
          <ScrollReveal>
            <div className="flex flex-col items-center">
              <h2 className="font-playful text-5xl md:text-7xl font-bold text-[#cbd5e1] mb-16 drop-shadow-sm">
                - Who am I? -
              </h2>
              
              <div className="w-full bg-[#0a0f1a] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row gap-10 items-start border border-white/5 shadow-2xl">
                <div className="relative w-full md:w-[280px] aspect-square rounded-2xl overflow-hidden shrink-0 border border-white/10 shadow-lg">
                  <Image 
                    src="/suman-potrait.png"
                    alt="Suman Portrait"
                    fill
                    className="object-cover"
                    data-ai-hint="man portrait"
                  />
                </div>
                
                <div className="space-y-8 text-xl md:text-[1.75rem] leading-[1.4] font-playful font-medium text-white/90">
                  <div className="space-y-4">
                   <p>
                      I'm <span className="text-secondary">Suman Shrestha</span>, a passionate <span className="text-secondary">Game Developer</span> from <span className="text-secondary">Kathmandu, Nepal.</span> I am <span className="text-secondary">{age} y/o</span> and have completed my <span className="text-secondary">Bachelors in Computer Science & Information Technology.</span>
                  </p>
                    <p>
                      I like to play and create games;
                    </p>
                  </div>
                  
                  <p>
                  Ranging from <span className="text-secondary">Game Development</span> (using <span className="text-secondary">Unity</span>), <span className="text-secondary">Mobile Game Development</span>, <span className="text-secondary">Casino Games</span>, <span className="text-secondary">C# Programming</span>, <span className="text-secondary">Multiplayer Systems</span>, <span className="text-secondary">Game Optimization</span>.. anything creative you can think of I probably do it!
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Gallery Section */}
        <section id="work" className="max-w-7xl mx-auto w-full px-6 py-24 space-y-16 scroll-mt-24">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="space-y-2">
                <h2 className="font-playful text-6xl font-bold text-playful-gradient">MY CREATIONS</h2>
                <p className="text-muted-foreground font-medium text-lg">A journey through code, sound, and play.</p>
              </div>
              
              <div className="flex flex-wrap items-center gap-3">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={cn(
                        "relative px-8 py-3 rounded-full text-xl font-playful font-bold transition-all hover:scale-105",
                        isActive ? "text-white" : "bg-card text-muted-foreground hover:bg-muted"
                      )}
                    >
                      {isActive && (
                        <div className="absolute inset-0 bg-secondary rounded-full -z-10 animate-fade-in shadow-xl shadow-secondary/30" />
                      )}
                      {cat === 'Game' ? 'Games' : cat === 'Website' ? 'Websites' : cat === 'Certification' ? 'Certifications' : cat}
                    </button>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredProjects.map((project, idx) => (
              <ScrollReveal key={project.id} delay={(idx % 2) * 100 as any}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="max-w-5xl mx-auto w-full px-6 py-32 space-y-16 scroll-mt-24">
          <ScrollReveal>
            <div className="space-y-4 text-center">
              <h2 className="font-playful text-6xl font-bold text-playful-gradient">WORK EXPERIENCE</h2>
              <p className="text-muted-foreground font-medium text-lg">The professional journey so far.</p>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {EXPERIENCES.map((exp, idx) => (
              <ScrollReveal key={idx} delay={(idx * 100) as any}>
                <div className="glass-panel p-8 md:p-10 rounded-[2.5rem] border-white/10 hover:border-primary/30 transition-all group bg-grain relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Briefcase size={80} />
                  </div>
                  
                  <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <h3 className="font-playful text-3xl md:text-4xl font-bold text-white">
                          {exp.role} <span className="text-primary">@ {exp.company}</span>
                        </h3>
                        <p className="text-secondary font-playful text-xl font-bold tracking-wide">
                          {exp.period}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-medium uppercase tracking-widest border-l-2 border-primary/30 pl-4">
                        <span>{exp.type}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>

                      <ul className="space-y-3 pt-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-lg md:text-xl text-white/80 font-playful font-medium leading-relaxed">
                            <span className="text-secondary mt-1.5">—</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-24 px-6 border-t border-white/5 bg-card/20">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
            <div className="font-playful font-bold text-5xl text-primary uppercase">Suman</div>
            
            <div className="text-center space-y-6">
              <p className="text-muted-foreground font-medium text-lg">Designed & Built by Suman Shrestha</p>
              
              <div className="flex items-center justify-center gap-6">
                {socials.map((social, i) => (
                  <a 
                    key={i}
                    href={social.href} 
                    className="social-hover-blob text-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                  >
                    <social.icon size={28} strokeWidth={2.5} />
                  </a>
                ))}
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground/60 font-medium uppercase tracking-widest">© 2025 – {new Date().getFullYear()} · All Rights Reserved</p>
          </div>
        </ScrollReveal>
      </footer>
    </div>
  );
}
