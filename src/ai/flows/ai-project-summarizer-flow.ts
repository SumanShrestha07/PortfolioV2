'use server';
/**
 * @fileOverview An AI agent that generates concise and impactful summary descriptions for projects.
 *
 * - summarizeProject - A function that handles the project summarization process.
 * - SummarizeProjectInput - The input type for the summarizeProject function.
 * - SummarizeProjectOutput - The return type for the summarizeProject function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const SummarizeProjectInputSchema = z.object({
  projectDetails: z
    .string()
    .describe(
      'Detailed information about the project, including its purpose, features, technologies used, and any other relevant context.'
    ),
});
export type SummarizeProjectInput = z.infer<typeof SummarizeProjectInputSchema>;

const SummarizeProjectOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      'A concise and impactful summary description of the project, suitable for a portfolio display.'
    ),
});
export type SummarizeProjectOutput = z.infer<typeof SummarizeProjectOutputSchema>;

export async function summarizeProject(
  input: SummarizeProjectInput
): Promise<SummarizeProjectOutput> {
  return summarizeProjectFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeProjectPrompt',
  input: { schema: SummarizeProjectInputSchema },
  output: { schema: SummarizeProjectOutputSchema },
  prompt: `You are an expert copywriter specializing in creating compelling and concise project summaries for a professional portfolio.
Your goal is to generate an impactful summary description for the provided project details.

The summary should be:
- Concise (ideally 1-3 sentences).
- Highlight key features, technologies, or outcomes.
- Engaging and professional.
- Avoid overly technical jargon unless it's a key highlight.

Project Details: {{{projectDetails}}}`,
});

const summarizeProjectFlow = ai.defineFlow(
  {
    name: 'summarizeProjectFlow',
    inputSchema: SummarizeProjectInputSchema,
    outputSchema: SummarizeProjectOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
