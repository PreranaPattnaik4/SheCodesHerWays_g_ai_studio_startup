import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Briefcase, ArrowLeft, CheckCircle2, Download, ListChecks, UserCircle, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const careerResources = [
  {
    title: "Personal Branding & Digital Presence",
    description: "Learn how to build a digital identity that reflects your skills and values. From LinkedIn optimization to portfolio building.",
    steps: [
      "Define your unique value proposition",
      "Optimize your social media handles",
      "Build a project portfolio that shows, not tells",
      "Engage authentically with your community"
    ],
    icon: UserCircle
  },
  {
    title: "Emotional Intelligence & Self-Growth",
    description: "The 'Inner Work' of a career: Building resilience, emotional strength, and a growth mindset.",
    steps: [
      "Practice self-reflection and journaling",
      "Develop empathy in communication",
      "Learn to manage stress and burnout",
      "Identify and overcome imposter syndrome"
    ],
    icon: Heart
  },
  {
    title: "LinkedIn Profile Optimization Checklist",
    description: "A point-by-point guide to making your professional profile attract the right recruiters.",
    steps: [
      "Professional headline with keywords",
      "Detailed 'About' section telling your story",
      "Skill endorsements and recommendations",
      "Portfolio samples in the 'Featured' section"
    ],
    downloadable: true,
    icon: Briefcase
  }
];

export default function CareerDevelopmentPage() {
  const bgImage = PlaceHolderImages.find(p => p.id === 'feature-internships');

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1 bg-muted/20">
        <section className="bg-secondary py-16 relative overflow-hidden">
          {bgImage && (
            <Image 
              src={bgImage.imageUrl}
              alt={bgImage.description}
              fill
              className="object-cover opacity-10"
              priority
              data-ai-hint={bgImage.imageHint}
            />
          )}
          <div className="container relative mx-auto px-4 text-center">
            <Briefcase className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">Career Development</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              Guidance on personal branding, digital presence, and developing the emotional intelligence needed for success.
            </p>
            <Button asChild variant="outline" className="mt-8">
              <Link href="/knowledge-hub">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Hub
              </Link>
            </Button>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-10">
            {careerResources.map((res, i) => (
              <Card key={i} className="bg-white shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/10 p-2 rounded-lg">
                        <res.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{res.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{res.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-muted/30 p-6 rounded-xl border border-dashed">
                    <h4 className="font-bold flex items-center gap-2 mb-4"><ListChecks className="text-primary" /> Key Action Steps</h4>
                    <ul className="space-y-3">
                      {res.steps.map((step, j) => (
                        <li key={j} className="flex items-start gap-3 text-foreground/80">
                          <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                {res.downloadable && (
                  <CardFooter className="border-t pt-6 bg-muted/10">
                    <Button>
                      <Download className="mr-2 h-4 w-4" /> Download Checklist
                    </Button>
                  </CardFooter>
                )}
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
