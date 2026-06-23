import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import ForumPostCard from '@/components/community/forum-post-card';

const forumPosts = [
  {
    id: '1',
    title: 'How do you balance learning to code with a full-time job?',
    author: 'Priya Sharma',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNzYyMDB8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTcxODcyMDI3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    timestamp: '2 days ago',
    content: "Hi everyone! I'm new here and just started my journey in the 'Women in Tech' path of the Sangini Udaan program. I'm working full-time and trying to dedicate my evenings to learning. It feels a bit overwhelming. For those who have been through this, what are your best tips for time management and staying motivated?",
    commentCount: 5,
    image: {
      src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHx3b21hbiUyMGxlYXJuaW5nJTIwb24lMjBsYXB0b3B8ZW58MHx8fHwxNzIyNTEzODQzfDA&ixlib=rb-4.1.0&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
      alt: 'A woman studying on her laptop.',
      hint: 'woman laptop'
    }
  },
  {
    id: '2',
    title: 'Show & Tell: My first portfolio website built with Next.js!',
    author: 'Meera Singh',
    authorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNzYyMDB8MHwxfHNlYXJjaHwzfHx3b21hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTcxODcyMDI3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    timestamp: '5 days ago',
    content: "So excited to share my first big project from the Sangini Udaan bootcamp! It's a personal portfolio site built with Next.js and Tailwind CSS. I'm really proud of how it turned out, but would love to get feedback from this amazing community on the design and code. All suggestions are welcome!",
    commentCount: 12,
    image: {
      src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDE5ODJ8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcHxlbnwwfHx8fDE3MTg3MjAzNjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'A person presenting their work on a laptop.',
      hint: 'laptop presentation'
    }
  }
];

export default function CommunityPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-secondary/30">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                    <h1 className="font-headline text-4xl font-bold md:text-5xl">Community Forum</h1>
                    <p className="mt-2 text-lg text-foreground/80">
                        Connect, share, and grow with peers and mentors.
                    </p>
                </div>
                <Button>
                    <PlusCircle className="mr-2 h-5 w-5" />
                    Start a Discussion
                </Button>
            </div>

            <div className="space-y-8">
                {forumPosts.map(post => (
                    <ForumPostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
