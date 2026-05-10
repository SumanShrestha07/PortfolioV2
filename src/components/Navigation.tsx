"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Archive, User, LayoutGrid, Info, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Archive', icon: LayoutGrid },
    { href: '/about', label: 'About', icon: Info },
    { href: '/tools', label: 'AI Summarizer', icon: Sparkles },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full glass-panel border-b px-6 py-4 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2 group">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground group-hover:rotate-12 transition-transform">
          <Archive size={18} />
        </div>
        <span className="font-headline font-bold text-xl tracking-tight hidden sm:inline-block">
          PIXEL ARCHIVE
        </span>
      </Link>

      <div className="flex items-center gap-6">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
              pathname === href ? "text-primary" : "text-muted-foreground"
            )}
          >
            <Icon size={16} className="sm:hidden lg:inline-block" />
            <span className="hidden sm:inline-block">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}