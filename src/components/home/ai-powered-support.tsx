
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Image as ImageIcon, Code, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '../ui/badge';

const aiFeatures = [
    {
        icon: Bot,
        title: "EmpowerFly AI Coach",
        description: "On-demand guidance for learning, clarity, and confidence.",
        href: "/ai-coaching",
        isReady: false,
    },
    {
        icon: ImageIcon,
        title: "AI Image Generator",
        description: "Create visuals easily with guided AI support.",
        href: "/ai-coaching/image-generator",
        isReady: false,
    },
    {
        icon: Code,
        title: "CodeCanvas",
        description: "AI-assisted code and UI/UX generation for beginners.",
        href: "/ai-coaching/code-canvas",
        isReady: false,
    },
    {
        icon: FileText,
        title: "Executive Summary",
        description: "Turn ideas into clear, compelling summaries.",
        href: "/ai-tools",
        isReady: false,
    }
];

export default function AiPoweredSupport() {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl font-bold md:text-4xl">AI-Powered Support for Your Growth</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
            Alongside mentorship and community, our suite of AI-powered tools is here to help you learn, create, and build with confidence at every step of your journey.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {aiFeatures.map((feature) => (
            <Link href={feature.isReady ? feature.href : '#'} key={feature.title} className="block group">
                <Card className="text-center shadow-md transform transition-transform hover:-translate-y-2 duration-300 bg-white flex flex-col h-full">
                    <CardHeader className="items-center">
                        <div className="rounded-full bg-primary/10 p-4 text-primary">
                            <feature.icon className="h-8 w-8" />
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <CardTitle className="font-headline text-2xl">{feature.title}</CardTitle>
                        <CardDescription className="mt-2">{feature.description}</CardDescription>
                         {!feature.isReady && <Badge variant="outline" className="mt-4">Coming Soon</Badge>}
                    </CardContent>
                    <CardFooter className="justify-center">
                       <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           {feature.isReady ? 'Explore Tool' : ''} {feature.isReady && <ArrowRight className="ml-2 h-4 w-4" />}
                       </div>
                    </CardFooter>
                </Card>
            </Link>
        ))}
      </div>
    </section>
  );
}
