import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Code, ArrowLeft, ExternalLink, Bookmark, Cpu, Database } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const resources = [
  {
    title: "Coding & Technical Fundamentals",
    description: "The core concepts of the web: Mastering HTML5, responsive CSS3 layouts, and the basics of JavaScript programming logic.",
    links: [
      { label: "View Guide", href: "#" },
      { label: "Practice Snippets", href: "#" }
    ],
    icon: Code
  },
  {
    title: "Google Firebase & Cloud Basics",
    description: "Everything you need to know about setting up Firebase Authentication, Firestore databases, and hosting for your first app.",
    links: [
      { label: "Setup Checklist", href: "#" },
      { label: "Documentation", href: "#" }
    ],
    icon: Database
  },
  {
    title: "Essential Git & GitHub Cheat Sheet",
    description: "A one-page reference for all the commands you need to master version control and team collaboration.",
    links: [
      { label: "Cheat Sheet (PDF)", href: "#" }
    ],
    icon: Cpu
  }
];

export default function CodingResourcesPage() {
  const bgImage = PlaceHolderImages.find(p => p.id === 'feature-workshops');

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
            <Code className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">Coding Resources</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              Essential tools, code snippets, and technical references for web development and software ecosystems.
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
            {resources.map((res, i) => (
              <Card key={i} className="bg-white shadow-md hover:shadow-lg transition-all">
                <CardHeader className="flex flex-row items-start justify-between space-y-0">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                        <res.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold">{res.title}</CardTitle>
                  </div>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-6">{res.description}</p>
                  <div className="flex flex-wrap gap-4">
                    {res.links.map((link, j) => (
                      <Button key={j} variant="secondary" size="sm" asChild>
                        <Link href={link.href}>
                          {link.label} <ExternalLink className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    ))}
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
