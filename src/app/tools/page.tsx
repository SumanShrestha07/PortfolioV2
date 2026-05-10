"use client"

import { Navigation } from '@/components/Navigation';
import { SummarizerTool } from '@/components/SummarizerTool';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function ToolsPage() {
  return (
    <div className="flex-1 flex flex-col">
      <Navigation />
      
      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-12 lg:py-24 space-y-16 animate-fade-in">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs mb-2">
            <Sparkles size={16} /> Portfolio Utilities
          </div>
          <h1 className="font-headline text-5xl lg:text-7xl font-bold tracking-tight">AI Archive Assistant</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Crafting perfect project summaries can be difficult. Use our AI Laboratory to distill your technical achievements into compelling narratives.
          </p>
        </div>

        <SummarizerTool />

        <section className="glass-panel p-12 rounded-3xl border-white/5 space-y-8 mt-12">
          <h3 className="font-headline text-2xl font-bold">How it works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="text-3xl font-headline font-bold text-primary/30 italic">01</div>
              <p className="font-medium">Input your project details, features, and technical stacks.</p>
            </div>
            <div className="space-y-3">
              <div className="text-3xl font-headline font-bold text-primary/30 italic">02</div>
              <p className="font-medium">Our AI model analyzes the context and identifies key selling points.</p>
            </div>
            <div className="space-y-3">
              <div className="text-3xl font-headline font-bold text-primary/30 italic">03</div>
              <p className="font-medium">Receive a punchy, professional summary ready for your archive.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-12 px-6 bg-card/30 mt-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <div className="font-headline font-bold text-lg">PIXEL ARCHIVE</div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">© 2024 PORTFOLIO — BUILT WITH PRECISION</p>
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Twitter</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">GitHub</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}