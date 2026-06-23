import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Download, ArrowLeft, Package, Sparkles, ShieldCheck, Settings } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const freebies = [
  {
    title: "Digital Literacy & Productivity Starter Kit",
    description: "Essential tools and workflows to manage your time, tasks, and digital workspace efficiently. Includes a weekly planner template.",
    popular: true,
    items: "3 Guides, 2 Templates",
    icon: Settings
  },
  {
    title: "Ethical AI Checklist",
    description: "A simple guide to ensure your AI-assisted work remains responsible, transparent, and avoids bias. A must-have for modern creators.",
    popular: false,
    items: "1 Interactive Checklist",
    icon: ShieldCheck
  },
  {
    title: "AI Learning Starter Pack",
    description: "A bundled resource containing our best basic guides on using AI for learning, research, and coding.",
    popular: true,
    items: "5 PDFs, 2 Tutorials",
    icon: Package
  }
];

export default function FreeResourcesPage() {
  const bgImage = PlaceHolderImages.find(p => p.id === 'inclusive-approach-4');

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
            <Download className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">Free Resources</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              Our open-access collection of tools, ethical checklists, and productivity kits designed for your growth.
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freebies.map((f, i) => (
              <Card key={i} className="bg-white shadow-md border-none overflow-hidden group flex flex-col">
                <div className="h-2 bg-primary"></div>
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <f.icon className="h-8 w-8 text-primary/30" />
                    {f.popular && <Badge className="bg-rose-500"><Sparkles className="mr-1 h-3 w-3" /> Popular</Badge>}
                  </div>
                  <CardTitle className="text-2xl">{f.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow">
                  <p className="text-foreground/80 leading-relaxed text-sm">{f.description}</p>
                  <div className="p-3 bg-muted rounded-lg text-xs text-muted-foreground flex justify-between">
                    <span>Includes:</span>
                    <span className="font-bold">{f.items}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Download className="mr-2 h-4 w-4" /> Access Resource
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
