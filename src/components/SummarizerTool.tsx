"use client"

import { useState } from 'react';
import { summarizeProject } from '@/ai/flows/ai-project-summarizer-flow';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Sparkles, Copy, RefreshCw, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function SummarizerTool() {
  const [details, setDetails] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSummarize = async () => {
    if (!details.trim()) {
      toast({
        title: "Missing input",
        description: "Please enter some project details first.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const result = await summarizeProject({ projectDetails: details });
      setSummary(result.summary);
    } catch (error) {
      toast({
        title: "Summarization failed",
        description: "There was an error generating the summary. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(summary);
    toast({
      title: "Copied!",
      description: "Summary copied to clipboard.",
    });
  };

  return (
    <Card className="max-w-3xl mx-auto glass-panel border-white/10 overflow-hidden">
      <CardHeader className="bg-primary/5">
        <div className="flex items-center gap-2 text-primary mb-1">
          <Sparkles size={18} />
          <span className="text-sm font-bold tracking-widest uppercase">AI Laboratory</span>
        </div>
        <CardTitle className="font-headline text-3xl">Archive Summarizer</CardTitle>
        <CardDescription>
          Transform detailed project descriptions into impactful portfolio summaries instantly.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6 pt-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Detailed Project Information</label>
          <Textarea 
            placeholder="Describe your project, features, tech stack, and goals..."
            className="min-h-[150px] bg-background/50 border-white/10 focus:ring-primary/50"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>

        {summary && (
          <div className="space-y-2 animate-fade-in">
            <label className="text-sm font-medium text-accent">Suggested Summary</label>
            <div className="relative group p-4 rounded-lg bg-accent/10 border border-accent/20 text-foreground italic leading-relaxed">
              {summary}
              <Button 
                size="icon" 
                variant="ghost" 
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-accent hover:bg-accent/20"
                onClick={copyToClipboard}
              >
                <Copy size={14} />
              </Button>
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="bg-primary/5 p-6">
        <Button 
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
          onClick={handleSummarize}
          disabled={loading}
        >
          {loading ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Generate Summary
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}