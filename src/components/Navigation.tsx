"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Gamepad2, Github, Youtube, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

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

    // Track home (hero) and work (portfolio)
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
    { href: '#', icon: Linkedin },
    { href: '#', icon: MessageCircle },
    { href: '#', icon: Youtube },
    { href: '#', icon: Instagram },
    { href: 'https://github.com', icon: Github },
  ];

  return (
    <div className="fixed top-8 left-0 w-full flex justify-center z-50 px-6">
      <nav className="w-full max-w-5xl glass-nav bg-grain px-8 py-3 flex items-center justify-between rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {/* Logo and Main Nav */}
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

        {/* Social Icons with Blob Hover */}
        <div className="flex items-center gap-3">
          {socials.map((social, i) => (
            <a 
              key={i}
              href={social.href} 
              className="social-hover-blob text-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.icon size={22} strokeWidth={2.5} />
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
