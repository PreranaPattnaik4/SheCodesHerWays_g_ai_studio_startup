import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Target, ArrowLeft, MessageSquare, Lightbulb, Bookmark } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const prepResources = [
  {
    title: "Top 50 Technical Interview Questions",
    type: "Practice Questions",
    summary: "A comprehensive list of questions covering data structures, algorithms, and system design for various roles.",
    tips: ["Focus on the 'why' behind the code", "Practice explaining your thought process", "Use the STAR method for behavioral parts"]
  },
  {
    title: "HR Interview Preparation Guide",
    type: "HR & Behavioral",
    summary: "Master common HR questions about conflict resolution, teamwork, and long-term career goals.",
    tips: ["Research company values before the call", "Have 3 clear stories of overcoming challenges", "Prepare your own insightful questions"]
  }
];

export default function InterviewPrepPage() {
  const bgImage = PlaceHolderImages.find(p => p.id === 'feature-mentors');

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
            <Target className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">Interview Preparation</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              Mock questions, tips, and confidence-building advice for your next big interview.
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
          <div className="grid lg:grid-cols-2 gap-8">
            {prepResources.map((res, i) => (
              <Card key={i} className="flex flex-col bg-white">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge variant="secondary">{res.type}</Badge>
                    <Button variant="ghost" size="icon"><Bookmark className="h-4 w-4" /></Button>
                  </div>
                  <CardTitle className="text-2xl mt-4">{res.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 flex-grow">
                  <p className="text-foreground/80 italic border-l-4 border-primary pl-4">{res.summary}</p>
                  <div className="space-y-3">
                    <h4 className="font-bold flex items-center gap-2"><Lightbulb className="text-amber-500 h-4 w-4" /> Pro Tips</h4>
                    <ul className="space-y-2">
                      {res.tips.map((tip, j) => (
                        <li key={j} className="text-sm text-foreground/70 flex items-start gap-2">
                          <span className="text-primary font-bold">•</span> {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-6">
                  <Button className="w-full">Open Prep Kit</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
