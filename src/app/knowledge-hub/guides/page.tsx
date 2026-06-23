import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { FileText, ArrowLeft, Download, CheckCircle2, Star, Heart, Rocket } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const guides = [
  {
    title: "Confidence & Leadership Foundations",
    overview: "A comprehensive guide to finding your voice and leading with authenticity. Learn how to overcome imposter syndrome and step into your potential.",
    takeaways: ["Building executive presence", "Self-advocacy skills", "Leading with empathy"],
    downloadLabel: "Download Guide (PDF)",
    isReady: true,
    icon: Heart
  },
  {
    title: "Entrepreneurship & Business Mindset",
    overview: "Moving from idea to execution: How to build a sustainable startup or small business while balancing life responsibilities.",
    takeaways: ["Idea validation", "Customer discovery", "Revenue models"],
    downloadLabel: "Download Guide (Coming Soon)",
    isReady: false,
    icon: Rocket
  },
  {
    title: "Complete Guide to Building a Tech Career in 2026",
    overview: "A strategic roadmap for navigating the evolving tech landscape. Learn about high-demand roles and required digital skills.",
    takeaways: ["Industry trends analysis", "Skill gap assessment", "Networking effectively"],
    downloadLabel: "Download Guide (PDF)",
    isReady: true,
    icon: FileText
  }
];

export default function GuidesPage() {
  const bgImage = PlaceHolderImages.find(p => p.id === 'inclusive-approach-1');

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
            <FileText className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">Expert Guides</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              In-depth references and handbooks for your learning, leadership, and entrepreneurship journey.
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
          <div className="max-w-4xl mx-auto space-y-12">
            {guides.map((guide, i) => (
              <Card key={i} className="shadow-lg border-none bg-white">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <guide.icon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Expert Guide</span>
                  </div>
                  <CardTitle className="text-3xl font-headline">{guide.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg mb-2">Overview</h4>
                    <p className="text-foreground/80 leading-relaxed">{guide.overview}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3">Key Takeaways</h4>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {guide.takeaways.map((take, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-foreground/70">
                          <CheckCircle2 className="h-4 w-4 text-green-500" /> {take}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/30 p-6 rounded-b-lg">
                  <Button className="w-full sm:w-auto" disabled={!guide.isReady}>
                    <Download className="mr-2 h-4 w-4" />
                    {guide.downloadLabel}
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
