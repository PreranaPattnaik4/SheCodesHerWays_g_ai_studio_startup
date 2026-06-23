
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { BookOpen, BrainCircuit, Code, Cpu, Eye, FileText, Heart, Lightbulb, Lock, Pilcrow, Projector, Rocket, Scale, Sparkles, UserCheck, Users, Zap, Bell, CheckCircle2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const tracks = [
    {
        title: "Track 1: Complete Sangini Udaan : EmpowerFly Journey",
        subtitle: "All-in-One Empowerment Track",
        focus: "A comprehensive empowerment pathway that brings together technology, AI, entrepreneurship, creativity, leadership, and emotional growth into one unified learning experience.",
        syllabus: [
            "Confidence & Leadership Foundations",
            "Digital Literacy & Productivity Skills",
            "Coding & Technical Fundamentals",
            "AI Literacy & Responsible AI Practices",
            "Entrepreneurship & Business Mindset",
            "Personal Branding & Digital Presence",
            "Creative Content & Digital Expression",
            "Emotional Intelligence & Self-Growth",
            "Real-World Projects & Community Impact",
        ],
        tools: "Google Workspace, Google Firebase, Google Cloud Platform (Fundamentals), Google Colab & NotebookLM, Visual Studio Code, GitHub, Figma, Jupyter Notebook, Google CLI, Low-code & No-code Platforms",
        outcomes: [
            "End-to-end digital confidence",
            "Leadership with technical awareness",
            "Strong multi-domain project portfolio",
            "Career, startup, and independent readiness",
        ]
    },
    {
        title: "Track 2: Women in Tech Journeys",
        subtitle: "Technology & Digital Careers Track",
        focus: "Designed for beginners and aspiring professionals entering the technology, AI, and software ecosystem.",
        syllabus: [
            "Introduction to Technology & Career Paths",
            "Web Development Fundamentals (HTML, CSS, JS)",
            "Programming Logic & Problem Solving",
            "Cloud-Based Application Development",
            "AI Basics & Applied AI Use Cases",
            "Version Control & Open-Source Contribution",
            "Cloud Deployment & Hosting",
            "Internship-Oriented Real-World Projects",
        ],
        tools: "HTML, CSS, JavaScript, Visual Studio Code, GitHub, Google Firebase (Authentication, Firestore, Hosting), Google Cloud Platform Services, Google Colab, Jupyter Notebook & NotebookLM, AI-Assisted Coding Tools",
        outcomes: [
            "Strong technical foundation",
            "Live deployed projects",
            "Open-source exposure",
            "Internship and job readiness",
        ]
    },
    {
        title: "Track 3: Women Aspiring to Start Startups or Businesses",
        subtitle: "Entrepreneurship & Startup Track",
        focus: "Empowers women founders to build startups, small businesses, and personal brands using technology and AI-assisted decision-making.",
        syllabus: [
            "Entrepreneurial Mindset & Leadership",
            "Idea Validation & Problem Identification",
            "Business Model Development",
            "Market Research & Customer Discovery",
            "Branding & Digital Marketing",
            "Financial Planning & Revenue Models",
            "Legal Awareness & Compliance Basics",
            "Pitching, Funding Readiness & Demo Days",
        ],
        tools: "Google Forms, Google Sheets, Google Analytics, Google Workspace, AI Tools for Ideation & Customer Insights, Pitch Deck Tools, Automation & Workflow Platforms",
        outcomes: [
            "Data-driven startup thinking",
            "Clear business roadmap",
            "Funding and pitch readiness",
            "Scalable growth strategies",
        ]
    },
    {
        title: "Track 4: Creative & Content Entrepreneurs",
        subtitle: "Creativity, Media & Digital Expression Track",
        focus: "Supports women creators in expressing ideas, building audiences, and generating income using digital and AI-powered creative tools.",
        syllabus: [
            "Creative Thinking & Storytelling",
            "AI-Assisted Writing & Content Creation",
            "Blogging & Digital Publishing",
            "Book Publishing Fundamentals",
            "Visual Branding & Design",
            "Website Creation & Portfolio Development",
            "Audience Growth & Monetization",
        ],
        tools: "Google Docs with AI Assistance, Canva (AI Design Features), Figma, WordPress, Google Photos & Media Tools, AI Tools for Content Optimization",
        outcomes: [
            "Professional creative portfolio",
            "Strong digital visibility",
            "Monetization readiness",
            "Confidence in creative self-expression",
        ]
    },
    {
        title: "Track 5: Confidence, Leadership & Emotional Intelligence",
        subtitle: "Personal & Soft Skills Growth Track",
        focus: "Focuses on inner growth, communication, emotional intelligence, leadership presence, and resilience—essential for every life and career stage.",
        syllabus: [
            "Self-Awareness & Emotional Intelligence",
            "Confidence & Mindset Building",
            "Communication & Public Speaking",
            "Leadership Skills & Decision Making",
            "Stress Management & Resilience",
            "Teamwork & Conflict Resolution",
            "Personal Goal Setting & Life Planning",
            "Professional Etiquette & Workplace Skills",
        ],
        tools: "Productivity & Planning Platforms, AI-Guided Reflection & Journaling Tools, Digital Habit-Building Systems, Video-Based Communication Practice Tools",
        outcomes: [
            "Emotional resilience",
            "Confident leadership presence",
            "Improved communication skills",
            "Balanced personal and professional growth",
        ]
    },
    {
        title: "Track 6: Non-Tech Users Empowerment",
        subtitle: "Digital Confidence & Career Readiness Track",
        focus: "Designed for non-technical learners seeking digital confidence, leadership skills, creativity, and independence—without learning coding.",
        idealFor: "Students, homemakers, career-return women, educators, social leaders, and first-time digital learners.",
        syllabus: [
            "Digital Literacy & Everyday Tech Skills",
            "AI Basics for Non-Tech Users",
            "Career & Workplace Readiness",
            "Personal Branding & Online Identity",
            "Creativity & Content Basics",
            "Productivity & Life Skills",
            "Emotional Intelligence & Leadership",
            "Real-World Applications & Community Projects",
        ],
        tools: "Google Workspace & Drive, Google Forms, Canva, AI Productivity Tools, Digital Planning & Communication Platforms",
        outcomes: [
            "Strong digital confidence without coding",
            "Career and workplace readiness",
            "Improved leadership and communication",
            "Creative self-branding and independence",
        ]
    }
];

export default function ProgramSyllabusPage() {
    return (
        <div className="flex min-h-dvh flex-col">
            <Header />
            <main className="flex-1">
                <section className="bg-secondary py-16 md:py-24">
                    <div className="container mx-auto px-4 text-center">
                        <BookOpen className="mx-auto h-12 w-12 text-primary" />
                        <h1 className="mt-4 font-headline text-4xl font-bold md:text-6xl">Program Syllabus</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                            A deep dive into the learning tracks of Sangini Udaan : EmpowerFly.
                        </p>
                    </div>
                </section>

                <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto space-y-16">
                        <Card className="text-center bg-accent/20 border-accent/30 shadow-lg">
                            <CardHeader>
                                <CardTitle className="font-headline text-3xl">Sangini Udaan : EmpowerFly</CardTitle>
                                <CardDescription className="text-lg text-accent-foreground/90">A Holistic Empowerment Ecosystem for Women</CardDescription>
                            </CardHeader>
                            <CardContent className="text-foreground/80">
                                <p>Sangini Udaan : EmpowerFly is a purpose-driven, multi-track empowerment initiative designed to support women across diverse life stages, backgrounds, and career aspirations. The program integrates digital skills, AI literacy, entrepreneurship, creativity, leadership, emotional intelligence, and ethical growth into clearly structured learning pathways.</p>
                            </CardContent>
                        </Card>

                        <div className="space-y-8">
                            <div className="flex items-center gap-2 mb-4">
                                <Rocket className="text-primary" />
                                <h2 className="text-2xl font-bold font-headline">Specialization Tracks</h2>
                            </div>
                            <Accordion type="single" collapsible className="w-full space-y-4" defaultValue="item-0">
                                {tracks.map((track, index) => (
                                    <AccordionItem value={`item-${index}`} key={index} className="border rounded-xl px-4 bg-white shadow-sm overflow-hidden">
                                        <AccordionTrigger className="text-left hover:no-underline py-6">
                                            <div className="flex flex-col gap-1">
                                                <span className="text-xl font-bold text-foreground">{track.title}</span>
                                                <span className="text-sm text-primary font-semibold uppercase tracking-wider">{track.subtitle}</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-8 space-y-8">
                                            <div className="bg-muted/30 p-4 rounded-lg border border-dashed">
                                                <p><strong className="font-bold text-foreground">Program Focus:</strong> <span className="text-foreground/80">{track.focus}</span></p>
                                                {track.idealFor && <p className="mt-2"><strong className="font-bold text-foreground">Ideal For:</strong> <span className="text-foreground/80">{track.idealFor}</span></p>}
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div>
                                                    <h4 className="font-bold text-lg mb-4 flex items-center gap-2"><FileText className="h-5 w-5 text-primary" />Syllabus Overview</h4>
                                                    <ul className="space-y-2">
                                                        {track.syllabus.map(item => (
                                                            <li key={item} className="flex items-start gap-2 text-foreground/80 text-sm">
                                                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="space-y-6">
                                                     <div>
                                                        <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><Cpu className="h-5 w-5 text-primary" />Industry Tools</h4>
                                                        <p className="text-sm text-foreground/70 leading-relaxed bg-secondary/20 p-3 rounded-lg border">{track.tools}</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-lg mb-4 flex items-center gap-2"><Sparkles className="h-5 w-5 text-primary" />Key Outcomes</h4>
                                                        <ul className="space-y-2">
                                                            {track.outcomes.map(item => (
                                                                <li key={item} className="flex items-start gap-2 text-foreground/80 text-sm italic">
                                                                    <span className="text-primary font-bold">•</span> {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <Separator />
                                            
                                            <div className="grid md:grid-cols-2 gap-8 pt-4">
                                                <div className="space-y-3">
                                                    <h4 className="font-bold text-lg flex items-center gap-2"><Projector className="h-5 w-5 text-primary" />Build Projects</h4>
                                                    <p className="text-sm text-foreground/70">Participants work on practical, impact-driven projects that address real-world challenges. This hands-on approach strengthens problem-solving skills, teamwork, innovation, and confidence while building a strong project portfolio.</p>
                                                </div>
                                                <div className="space-y-3">
                                                    <h4 className="font-bold text-lg flex items-center gap-2"><UserCheck className="h-5 w-5 text-primary" />Expert Guidance</h4>
                                                    <p className="text-sm text-foreground/70">Direct guidance from industry professionals to help participants identify career paths, set goals, receive feedback, and make informed decisions aligned with their aspirations and strengths.</p>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                        
                        <Separator />
                        
                        <Card className="shadow-xl border-primary/20 overflow-hidden">
                            <CardHeader className="bg-primary/10 border-b border-primary/10">
                                <CardTitle className="font-headline text-3xl">Vibe Coding, Prompt Writing & Responsible AI</CardTitle>
                                <CardDescription className="text-primary font-semibold">Program-Wide Core Foundation</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-10 p-8">
                                <div>
                                    <h3 className="font-bold text-xl mb-3 flex items-center gap-2"><Lightbulb className="h-6 w-6 text-primary"/>What This Means</h3>
                                    <p className="text-foreground/80 leading-relaxed text-lg">Vibe Coding, Prompt Writing & Responsible AI are not separate tracks. They are core foundations integrated across all Sangini Udaan : EmpowerFly programs, adapted to each learner’s journey and background. These foundations are embedded across all tracks. While the depth and application vary, every participant learns how to work confidently, creatively, and ethically with AI.</p>
                                </div>
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="bg-muted/20 p-6 rounded-2xl border">
                                        <h4 className="font-bold text-lg mb-3 flex items-center gap-2"><Code className="h-5 w-5 text-primary"/>Vibe Coding Explained</h4>
                                        <p className="text-sm text-foreground/70 leading-relaxed">Vibe Coding is an inclusive, human-centered approach to building with technology using AI-assisted creation, natural language and intuition-driven problem solving, and clear human intent. This approach enables beginners and non-tech users to build and experiment without fear of complex coding.</p>
                                    </div>
                                    <div className="bg-muted/20 p-6 rounded-2xl border">
                                        <h4 className="font-bold text-lg mb-3 flex items-center gap-2"><Pilcrow className="h-5 w-5 text-primary"/>Prompt Writing as a Skill</h4>
                                        <p className="text-sm text-foreground/70 leading-relaxed">Prompt writing is taught as a communication and problem-solving skill. Participants learn: writing clear, structured, goal-oriented prompts for content, creativity, learning, and building. Human originality and review remain central throughout.</p>
                                    </div>
                                </div>
                                <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20">
                                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2"><BrainCircuit className="h-6 w-6 text-primary"/>Responsible AI Foundation</h4>
                                    <p className="text-foreground/80">Responsible AI is a mandatory foundation across all tracks. Key principles include: human-centered AI usage, transparency, explainability, bias awareness, data privacy, and accountability. Ethical AI practices are applied through real projects and scenarios.</p>
                                </div>
                            </CardContent>
                        </Card>
                        
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1" className="border-none">
                                <AccordionTrigger className="text-left hover:no-underline bg-destructive/10 px-6 py-4 rounded-xl border-destructive/20 border transition-all hover:bg-destructive/20">
                                    <div className="flex items-center gap-3">
                                         <Bell className="h-6 w-6 text-destructive" />
                                        <span className="text-lg font-bold text-destructive">📢 Mandatory Core Curriculum Notice</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pt-6 space-y-4 border-x border-b border-destructive/20 px-6 pb-6 rounded-b-xl">
                                    <h4 className="font-bold text-foreground">Important Notice for All Participants</h4>
                                    <p className="text-foreground/80">The Core Curriculum with a primary focus on <strong>Prompt Writing & Responsible AI is mandatory</strong> for all participants, irrespective of the selected track.</p>
                                    <ul className="list-disc list-inside space-y-2 text-foreground/70 text-sm">
                                        <li><strong>Technical participants</strong> will complete the full curriculum, including Vibe Coding.</li>
                                        <li><strong>Non-technical participants</strong> will focus on Prompt Writing for content creation, research support, and documentation, along with Responsible AI practices.</li>
                                    </ul>
                                     <p className="text-foreground/80 text-sm"><strong>Vibe Coding is optional for non-technical participants</strong> and may be skipped upon prior written intimation to the program team.</p>
                                    <p className="font-bold text-primary pt-2">Completion of the applicable mandatory core curriculum is required to continue and progress within the Sangini Udaan : EmpowerFly program.</p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        
                        <Separator />

                        <div className="text-center space-y-8 py-10">
                             <p className="text-2xl font-bold font-headline text-primary italic">"Choose your path. Build with confidence. Lead with purpose. Grow responsibly."</p>
                            <Card className="text-xs text-muted-foreground p-6 bg-muted/30 text-left border-dashed border-2">
                                <p><strong className="text-foreground font-bold">Program Assurance & Evolution:</strong> All AI tools and methodologies used align with current industry standards and responsible AI principles. The program emphasizes ethical, inclusive, and future-ready use of technology. Tools may be updated periodically to stay aligned with evolving industry needs, ensuring minimal disruption to learning outcomes and participant experience.</p>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
