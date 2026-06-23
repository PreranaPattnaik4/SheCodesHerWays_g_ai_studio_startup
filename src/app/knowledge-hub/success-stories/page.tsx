import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Star, ArrowLeft, Quote, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const stories = [
  {
    name: "Aarti S.",
    role: "Full-Stack Developer",
    story: "I started as a total beginner with zero technical background. The structured curriculum and mentor support helped me build my confidence and a project that landed me my first job.",
    lesson: "Never underestimate the power of a supportive community."
  },
  {
    name: "Priya R.",
    role: "AI Prompt Engineer",
    story: "Rebuilding my career after a 5-year break felt impossible until I joined. The focus on modern AI tools gave me the edge I needed to return to the workforce stronger than ever.",
    lesson: "A career gap is just a pause, not an erase."
  }
];

export default function SuccessStoriesPage() {
  const bgImage = PlaceHolderImages.find(p => p.id === 'vision-community-voices');

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
            <Star className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">Success Stories</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              Inspirational journeys of women who have built their paths and made their mark.
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
          <div className="grid md:grid-cols-2 gap-10">
            {stories.map((s, i) => (
              <Card key={i} className="bg-white border-none shadow-lg">
                <CardHeader className="text-center">
                  <Avatar className="h-20 w-20 mx-auto border-4 border-primary/20 mb-4">
                    <AvatarFallback className="text-2xl">{s.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-2xl">{s.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">{s.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="relative p-6 bg-muted/30 rounded-2xl">
                    <Quote className="h-8 w-8 text-primary/20 absolute top-2 left-2" />
                    <p className="text-foreground/80 leading-relaxed italic">{s.story}</p>
                  </div>
                  <div className="flex items-start gap-3 p-4 border rounded-xl bg-primary/5">
                    <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-sm">Key Lesson Learned:</p>
                      <p className="text-sm text-foreground/70">{s.lesson}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
