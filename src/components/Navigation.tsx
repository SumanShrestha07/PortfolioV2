"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Gamepad2, Github, Linkedin, Facebook } from 'lucide-react';
import { cn } from '@/lib/utils';

const UnityIcon = ({ size = 22, ...props }: { size?: number } & React.SVGProps<SVGSVGElement>) => (
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

export function Navigation() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('archive');
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const sections = ['home', 'work'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  const links = [
    { href: '/', label: 'Home', id: 'home' },
    { href: '/#work', label: 'Portfolio', id: 'work' },
    { href: '/tools', label: 'Archive', id: 'archive' },
  ];

  const socials = [
    { href: '#', icon: Linkedin, label: 'LinkedIn' },
    { href: '#', icon: Facebook, label: 'Facebook' },
    { href: 'https://github.com', icon: Github, label: 'GitHub' },
    { href: 'https://play.unity.com', icon: UnityIcon, label: 'Unity Play' },
  ];

  return (
    <div className="fixed top-8 left-0 w-full flex justify-center z-50 px-6">
      <nav className="w-full max-w-5xl glass-nav bg-grain px-8 py-3 flex items-center justify-between rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center group">
            <div className="text-primary group-hover:scale-110 transition-transform">
              <Gamepad2 size={36} strokeWidth={2.5} fill="currentColor" className="opacity-90" />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            {links.map(({ href, label, id }) => {
              const isActive = activeSection === id || (id === 'archive' && pathname === '/tools');

              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "relative px-6 py-2 text-xl font-bold transition-all font-playful tracking-wide hover:scale-105",
                    isActive ? "text-white" : "text-secondary/70 hover:text-secondary"
                  )}
                  onClick={() => {
                    if (pathname === '/' && href.startsWith('/#')) {
                      const id = href.split('#')[1];
                      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-secondary rounded-full -z-10 animate-fade-in shadow-lg shadow-secondary/40" />
                  )}
                  {label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((social, i) => (
            <a 
              key={i}
              href={social.href} 
              className="social-hover-blob text-secondary"
              target="_blank"
              rel="noopener noreferrer"
              title={social.label}
            >
              <social.icon size={22} strokeWidth={2.5} />
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
