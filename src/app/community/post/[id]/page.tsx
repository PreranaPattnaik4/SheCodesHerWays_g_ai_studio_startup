import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, MessageSquare, Heart, Send } from 'lucide-react';
import { ForumPost } from '@/components/community/forum-post-card';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

const forumPosts: ForumPost[] = [
  {
    id: '1',
    title: 'How do you balance learning to code with a full-time job?',
    author: 'Priya Sharma',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNzYyMDB8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTcxODcyMDI3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    timestamp: '2 days ago',
    content: "Hi everyone! I'm new here and just started my journey in the 'Women in Tech' path of the Sangini Udaan program. I'm working full-time and trying to dedicate my evenings to learning. It feels a bit overwhelming. For those who have been through this, what are your best tips for time management, staying motivated, and avoiding burnout? Any advice would be greatly appreciated!",
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
    content: "So excited to share my first big project from the Sangini Udaan bootcamp! It's a personal portfolio site built with Next.js and Tailwind CSS. I'm really proud of how it turned out, but would love to get feedback from this amazing community on the design and code. All suggestions are welcome! You can check it out here: [link-to-portfolio]",
    commentCount: 12,
    image: {
      src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDE5ODJ8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcHxlbnwwfHx8fDE3MTg3MjAzNjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'A person presenting their work on a laptop.',
      hint: 'laptop presentation'
    }
  }
];

const comments = [
    { author: 'Anjali Gupta', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d', timestamp: '2 days ago', content: "Great question, Priya! I was in the same boat. What worked for me was dedicating just 1 hour every single night, no matter what. Consistency over intensity!" },
    { author: 'Mentor Divya', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704e', timestamp: '1 day ago', content: "Priya, it's completely normal to feel overwhelmed. Remember to celebrate small wins. Also, try the Pomodoro Technique (25 mins focus, 5 mins break). It's a lifesaver. Keep up the great work!" }
]

export default function PostPage({ params }: { params: { id: string } }) {
  const post = forumPosts.find(p => p.id === params.id);

  if (!post) {
    return (
      <div className="flex min-h-dvh flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center text-center">
            <div>
                <h1 className="text-2xl font-bold">Post not found</h1>
                <Button asChild className="mt-4">
                    <Link href="/community">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Community
                    </Link>
                </Button>
            </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1 bg-secondary/30">
        <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
            <article>
                <div className="mb-8">
                    <Button asChild variant="ghost" className="mb-4">
                        <Link href="/community">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Community Forum
                        </Link>
                    </Button>

                    <h1 className="font-headline text-4xl font-bold md:text-5xl">
                        {post.title}
                    </h1>
                </div>

                <div className="flex items-center gap-4 mb-8">
                     <Avatar className="h-12 w-12">
                        <AvatarImage src={post.authorAvatar} alt={post.author} />
                        <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold">{post.author}</p>
                        <p className="text-sm text-muted-foreground">Posted {post.timestamp}</p>
                    </div>
                </div>
                
                {post.image && (
                    <div className="relative h-96 w-full rounded-lg overflow-hidden my-8">
                        <Image
                            src={post.image.src}
                            alt={post.image.alt}
                            fill
                            className="object-cover"
                            data-ai-hint={post.image.hint}
                            priority
                        />
                    </div>
                )}

                <div className="prose prose-lg dark:prose-invert max-w-none bg-card p-8 rounded-lg shadow-md">
                    <p>{post.content}</p>
                </div>
            </article>

            <section className="mt-12">
                <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
                    <MessageSquare className="h-6 w-6"/>
                    {post.commentCount} Comments
                </h2>

                <div className="space-y-6">
                    {comments.map((comment, index) => (
                        <Card key={index}>
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <Avatar className="h-10 w-10">
                                        <AvatarImage src={comment.avatar} alt={comment.author} />
                                        <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <p className="font-semibold">{comment.author}</p>
                                            <p className="text-xs text-muted-foreground">{comment.timestamp}</p>
                                        </div>
                                        <p className="mt-2 text-foreground/90">{comment.content}</p>
                                        <Button variant="ghost" size="sm" className="mt-2 text-muted-foreground p-0 h-auto hover:bg-transparent">
                                            <Heart className="mr-2 h-4 w-4"/>
                                            Like
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Card className="mt-8">
                    <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Leave a Comment</h3>
                        <div className="relative">
                            <Textarea placeholder="Share your thoughts..." className="min-h-[100px] pr-12"/>
                            <Button size="icon" className="absolute right-3 top-3 h-8 w-8">
                                <Send className="h-4 w-4"/>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
