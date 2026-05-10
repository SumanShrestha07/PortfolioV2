"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Gamepad2, Github, Youtube, Linkedin, Instagram, Home, Archive, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navigation() {
  const pathname = usePathname();

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
      <nav className="w-full max-w-5xl bg-slate-950/80 backdrop-blur-md border border-white/5 rounded-2xl px-8 py-4 flex items-center justify-between shadow-2xl">
        {/* Logo and Main Nav */}
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center group">
            <div className="text-secondary group-hover:scale-110 transition-transform">
              <Gamepad2 size={32} strokeWidth={2.5} fill="currentColor" className="opacity-80" />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-lg font-bold transition-all hover:text-secondary font-playful tracking-wide",
                  pathname === href ? "text-secondary" : "text-secondary/70"
                )}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5">
          {socials.map((social, i) => (
            <a 
              key={i}
              href={social.href} 
              className="text-secondary/80 hover:text-secondary transition-all hover:scale-110"
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
