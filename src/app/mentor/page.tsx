
'use client';

import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Linkedin, Info, HeartHandshake, Goal, Sparkles } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function MentorPage() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    toast({
        title: "Mentor Application Submitted!",
        description: `Thank you for your interest! We've received your application and will be in touch soon.`,
    });
    form.reset();
  }

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-4xl font-bold md:text-5xl">Become a Mentor</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              Share your expertise and passion to guide and inspire the next generation of women leaders and creators.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <Card className="max-w-2xl mx-auto shadow-lg">
                 <form onSubmit={handleSubmit} data-form-type="Mentor Application">
                    <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>Mentor Application</CardTitle>
                            <CardDescription>
                                We're looking for mentors to help guide our community.
                            </CardDescription>
                          </div>
                          <Dialog>
                            <DialogTrigger asChild>
                                 <Button variant="outline" size="sm">
                                    <Info className="mr-2 h-4 w-4" />
                                    Learn More
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md">
                                <DialogHeader>
                                    <DialogTitle className="flex items-center gap-2">
                                        <HeartHandshake className="h-6 w-6 text-primary" />
                                        Why Become a Mentor?
                                    </DialogTitle>
                                    <DialogDescription>
                                        As a mentor, you'll play a crucial role in shaping the future of aspiring women in tech and creative fields.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4 py-4 text-sm">
                                    <div className="flex items-start gap-3">
                                        <Goal className="h-5 w-5 text-primary mt-0.5 flex-shrink-0"/>
                                        <p><span className="font-semibold">Make a Real Impact:</span> Help learners navigate their career paths, build confidence, and achieve their goals.</p>
                                    </div>
                                     <div className="flex items-start gap-3">
                                        <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0"/>
                                        <p><span className="font-semibold">Give Back:</span> Share your knowledge and experience to empower the next generation.</p>
                                    </div>
                                </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="mentor-name">Full Name</Label>
                            <Input id="mentor-name" placeholder="Your Name" required/>
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="mentor-email">Email Address</Label>
                            <Input id="mentor-email" type="email" placeholder="you@example.com" required/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="mentor-linkedin">LinkedIn Profile</Label>
                             <div className="relative">
                                <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input id="mentor-linkedin" placeholder="https://linkedin.com/in/your-profile" className="pl-9" required/>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="mentor-expertise">Areas of Expertise</Label>
                            <Textarea id="mentor-expertise" placeholder="e.g., React, UI/UX Design, Startup Growth, Content Strategy..." required/>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit">Submit Application</Button>
                    </CardFooter>
                </form>
            </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
