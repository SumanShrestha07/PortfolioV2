"use client"

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 100 | 200 | 300 | 400;
  threshold?: number;
}

export function ScrollReveal({ 
  children, 
  className, 
  delay = 0,
  threshold = 0.1 
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update visibility state based on intersection
        // This allows the animation to play both on entry and exit
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const delayClass = {
    0: '',
    100: 'reveal-delay-100',
    200: 'reveal-delay-200',
    300: 'reveal-delay-300',
    400: 'reveal-delay-400',
  }[delay];

  return (
    <div
      ref={ref}
      className={cn(
        "reveal",
        isVisible && "reveal-visible",
        delayClass,
        className
      )}
    >
      {children}
    </div>
  );
}
