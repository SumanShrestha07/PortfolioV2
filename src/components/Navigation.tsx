"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Gamepad2, Github, Youtube, Linkedin, Instagram, Home, Library, Archive } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home', icon: Home },
    { href: '#work', label: 'Portfolio', icon: Gamepad2 },
    { href: '/tools', label: 'Archive', icon: Archive },
  ];

  const socials = [
    { href: '#', icon: Linkedin },
    { href: '#', icon: Youtube },
    { href: '#', icon: Instagram },
    { href: 'https://github.com', icon: Github },
  ];

  return (
    <div className="fixed top-6 left-0 w-full flex justify-center z-50 px-6">
      <nav className="glass-nav rounded-full px-6 py-3 flex items-center gap-8">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground group-hover:rotate-12 transition-transform shadow-lg shadow-primary/20">
            <Gamepad2 size={18} />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6 border-r pr-8 border-white/10">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-sm font-bold transition-colors hover:text-primary",
                pathname === href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {socials.map((social, i) => (
            <a 
              key={i}
              href={social.href} 
              className="text-secondary hover:text-primary transition-all hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
