import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Map, ArrowLeft, Milestone, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const roadmaps = [
  {
    title: "AI Engineer Roadmap",
    steps: [
      { name: "Foundations", details: "Python basics, Linear Algebra, and Statistics." },
      { name: "Machine Learning", details: "Scikit-Learn, Supervised vs Unsupervised learning." },
      { name: "Deep Learning", details: "Neural Networks, PyTorch/TensorFlow, and GenAI." }
    ]
  },
  {
    title: "Front-End Developer Roadmap",
    steps: [
      { name: "The Basics", details: "HTML5, CSS3 (Flexbox/Grid), and ES6+ JavaScript." },
      { name: "React Ecosystem", details: "Components, Hooks, State Management (Zustand/Redux)." },
      { name: "Modern Tooling", details: "Next.js, Tailwind CSS, TypeScript, and Deployment." }
    ]
  }
];

export default function LearningRoadmapsPage() {
  const bgImage = PlaceHolderImages.find(p => p.id === 'vision-journey');

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
            <Map className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">Learning Roadmaps</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              Structured paths to help you navigate from a beginner to an expert in various fields.
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
          <div className="max-w-5xl mx-auto space-y-16">
            {roadmaps.map((road, i) => (
              <div key={i}>
                <h2 className="text-3xl font-headline font-bold mb-8 text-center">{road.title}</h2>
                <div className="relative">
                  {/* Visual Line */}
                  <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2"></div>
                  
                  <div className="space-y-12">
                    {road.steps.map((step, j) => (
                      <div key={j} className="relative flex items-center justify-start md:justify-center">
                        <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                          <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                            {j + 1}
                          </div>
                        </div>
                        <Card className="ml-20 md:ml-0 md:w-5/12 bg-white shadow-lg">
                          <CardHeader className="p-4">
                            <CardTitle className="text-lg">{step.name}</CardTitle>
                          </CardHeader>
                          <CardContent className="p-4 pt-0">
                            <p className="text-sm text-foreground/70">{step.details}</p>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
