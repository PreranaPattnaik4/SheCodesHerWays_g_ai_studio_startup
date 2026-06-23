'use server';

/**
 * @fileOverview This file defines a Genkit flow for handling chatbot conversations.
 *
 * The flow takes a user's message as input and uses the FAQ data to generate a response,
 * acting as the "EmpowerFly Assistant".
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { faqData } from '@/lib/faq-data';
import React from 'react';

const ChatInputSchema = z.object({
  message: z.string().describe("The user's message to the chatbot."),
});

export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  message: z.string().describe("The chatbot's response."),
});

export type ChatOutput = z.infer<typeof ChatOutputSchema>;

export async function chat(input: ChatInput): Promise<ChatOutput> {
  return chatFlow(input);
}

// Flatten the FAQ data for easier searching
const allFaqs = faqData.flatMap(category => category.questions);

// Helper function to extract text from React nodes
const extractText = (element: React.ReactNode): string => {
    if (typeof element === 'string') return element;
    if (typeof element === 'number') return String(element);
    if (React.Children.count(element) === 0) return '';
    if (!React.isValidElement(element)) return '';
    const children = (element.props as any).children;
    if (children) {
        return React.Children.map(children, child => extractText(child)).join('');
    }
    return '';
};

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (input) => {
    const userMessage = input.message.toLowerCase().trim();
    
    if (userMessage === "hi" || userMessage === "hello") {
        return { message: "Hi, I’m EmpowerFly Assistant — your friendly guide to learning, careers, and opportunities, at your own pace. How can I help you today?" };
    }
    
    // Improved search logic
    const keywords = userMessage.split(/\s+/).filter(word => word.length > 2); // get keywords
    let foundFaq = null;

    // Exact phrase match first
    foundFaq = allFaqs.find(faq => 
        faq.question.toLowerCase().trim().includes(userMessage)
    );

    // Keyword based search if no exact match
    if (!foundFaq) {
        let bestMatchScore = 0;
        for (const faq of allFaqs) {
            const questionText = faq.question.toLowerCase();
            let score = 0;
            for (const keyword of keywords) {
                if (questionText.includes(keyword)) {
                    score++;
                }
            }
            if (score > bestMatchScore) {
                bestMatchScore = score;
                foundFaq = faq;
            }
        }
    }


    if (foundFaq) {
        const answerText = extractText(foundFaq.answer);
        return { message: answerText || "I found some information, but couldn't format it as a simple text answer." };
    }

    return { message: "I'm sorry, I don't have information about that. Please try asking about our programs, careers, or the EmpowerFly initiative." };
  }
);
