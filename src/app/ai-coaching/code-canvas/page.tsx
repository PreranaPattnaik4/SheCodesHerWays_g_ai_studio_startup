
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CodeCanvasPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
                <Code className="mx-auto h-12 w-12 text-primary" />
                <h1 className="mt-4 font-headline text-4xl font-bold md:text-6xl">CodeCanvas</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                    This feature is currently under development.
                </p>
            </div>
        </section>

        <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <Card className="max-w-2xl mx-auto text-center shadow-lg">
                <CardHeader>
                    <CardTitle>Coming Soon!</CardTitle>
                    <CardDescription>
                        We're building an intelligent code assistant to help you write, debug, and learn. Stay tuned!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Button asChild>
                        <Link href="/ai-coaching">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to AI Tools
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
