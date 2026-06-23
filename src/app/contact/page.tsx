
'use client';

import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { brand } from '@/lib/brand';

export default function ContactPage() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    toast({
      title: 'Message Sent!',
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
    form.reset();
  };

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-4xl font-bold md:text-5xl">Contact Us</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              Have a question or want to collaborate? We'd love to hear from you.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <Alert variant="destructive" className="max-w-2xl mx-auto mb-8 bg-amber-50 border-amber-200 text-amber-800 [&>svg]:text-amber-600">
              <Info className="h-4 w-4" />
              <AlertTitle className="font-bold">Contact Form Under Development</AlertTitle>
              <AlertDescription>
                <p>The contact form is not fully functional yet and will be available soon. We look forward to receiving your valuable feedback!</p>
                <p className="mt-2">In the meantime, please share your queries with us on social media. Contact Us, Follow Us!</p>
                 <div className="flex items-center gap-4 mt-4">
                    <Button asChild variant="link" className="p-0 h-auto text-amber-900">
                        <Link href="https://www.linkedin.com/company/shecodesherway/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="mr-2" /> LinkedIn
                        </Link>
                    </Button>
                     <Button asChild variant="link" className="p-0 h-auto text-amber-900">
                        <Link href="https://x.com/preranakailash4" target="_blank" rel="noopener noreferrer">
                            <Twitter className="mr-2" /> Twitter/X
                        </Link>
                    </Button>
                </div>
              </AlertDescription>
            </Alert>
          <Card className="max-w-2xl mx-auto shadow-lg bg-white">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Your Name" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="you@example.com" required />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is your message about?" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message here..." required className="min-h-[150px]" />
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
