import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Wrench, ArrowLeft, Download, Eye, FileJson } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const templates = [
  {
    title: "Modern Tech Resume Template",
    description: "A clean, recruiter-approved design that highlights your technical skills and impact.",
    format: "Google Docs / Word",
    isReady: false
  },
  {
    title: "Project Planning Toolkit",
    description: "Templates for timelines, task assignment, and resource tracking to keep your builds on track.",
    format: "Excel / Sheets",
    isReady: false
  }
];

export default function TemplatesToolkitsPage() {
  const bgImage = PlaceHolderImages.find(p => p.id === 'inclusive-approach-3');

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
            <Wrench className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">Templates & Toolkits</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              Ready-to-use frameworks and documents to save you time and effort.
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
          <div className="grid md:grid-cols-2 gap-8">
            {templates.map((temp, i) => (
              <Card key={i} className="group relative overflow-hidden bg-white border-none shadow-md hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <FileJson className="h-8 w-8 text-primary/40" />
                    {!temp.isReady && <Badge variant="secondary">Coming Soon</Badge>}
                  </div>
                  <CardTitle className="text-xl">{temp.title}</CardTitle>
                  <CardDescription>{temp.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">Format: {temp.format}</p>
                </CardContent>
                <CardFooter className="gap-3">
                  <Button variant="outline" size="sm" disabled={!temp.isReady}>
                    <Eye className="mr-2 h-4 w-4" /> Preview
                  </Button>
                  <Button size="sm" disabled={!temp.isReady}>
                    <Download className="mr-2 h-4 w-4" /> Download
                  </Button>
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
