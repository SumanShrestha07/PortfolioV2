
"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Gamepad2, Github, Youtube, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navigation() {
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    handleHashChange(); // Check initial hash
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '#work', label: 'Portfolio' },
    { href: '/tools', label: 'Archive' },
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
      <nav className="w-full max-w-5xl glass-nav bg-grain px-8 py-3 flex items-center justify-between rounded-2xl">
        {/* Logo and Main Nav */}
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center group">
            <div className="text-secondary group-hover:scale-110 transition-transform">
              <Gamepad2 size={32} strokeWidth={2.5} fill="currentColor" className="opacity-80" />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {links.map(({ href, label }) => {
              const isHome = pathname === '/';
              const isHashLink = href.startsWith('#');
              const isActive = isHashLink 
                ? (isHome && currentHash === href)
                : (pathname === href && currentHash === '');

              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "relative px-6 py-2 text-lg font-bold transition-all font-playful tracking-wide hover:scale-105",
                    isActive ? "text-secondary-foreground" : "text-secondary/70 hover:text-secondary"
                  )}
                  onClick={() => {
                    if (isHashLink) setCurrentHash(href);
                    else setCurrentHash('');
                  }}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-secondary rounded-full -z-10 animate-fade-in shadow-lg shadow-secondary/20" />
                  )}
                  {label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Social Icons with Blob Hover */}
        <div className="flex items-center gap-2">
          {socials.map((social, i) => (
            <a 
              key={i}
              href={social.href} 
              className="social-hover-blob text-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.icon size={20} strokeWidth={2.5} />
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
