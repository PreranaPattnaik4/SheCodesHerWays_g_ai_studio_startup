
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Handshake, Users, Award, GitBranch, Lightbulb, Heart, Briefcase, GraduationCap, RefreshCw, FileText, Verified, Scale, Lock, Construction, Rocket, PartyPopper, CalendarDays, Flag, Star, CheckCircle, Zap, Milestone, Clock, Projector, Mic, Disc, Info, BrainCircuit, Code, Pilcrow, Eye, Cpu, UserCheck, TrendingUp, Target, Route, Library, Goal, DollarSign, Sparkles, Bot } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { brand } from '@/lib/brand';

const SectionCard = ({ icon: Icon, title, badgeText, children }: { icon: React.ElementType, title: string, badgeText?: string, children: React.ReactNode }) => (
    <Card className="shadow-lg bg-white">
        <CardHeader className="flex flex-row items-start gap-4">
            <div className="bg-primary/10 text-primary p-3 rounded-full">
                <Icon className="h-6 w-6" />
            </div>
            <div className="flex-1">
                <CardTitle className="text-2xl font-bold">{title}</CardTitle>
            </div>
            {badgeText && <Badge variant="secondary">{badgeText}</Badge>}
        </CardHeader>
        <CardContent className="prose prose-stone dark:prose-invert max-w-none text-foreground/80">
            {children}
        </CardContent>
    </Card>
);

export default function TeamCulturePage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1 bg-muted/20">
        <section className="bg-secondary py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
                <Handshake className="mx-auto h-12 w-12 text-primary" />
                <h1 className="mt-4 font-headline text-4xl font-bold md:text-6xl">Team Culture, Ownership & Professional Workflow</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                    We work as a real team, with trust, responsibility, and professionalism at the core.
                </p>
            </div>
        </section>

        <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
                
                <SectionCard icon={Users} title="Ownership & Decision-Making (Real Team Culture)">
                    <p>You are trusted to decide and manage your work independently.</p>
                    <ul>
                        <li>Think like a responsible team member, not someone waiting for instructions.</li>
                        <li>Take decisions related to your task professionally and responsibly.</li>
                        <li>If anything affects timelines, quality, or the team — communicate early.</li>
                        <li>Do not wait for constant guidance.</li>
                        <li>Do not pass responsibility to others.</li>
                        <li>Own your task from start → execution → submission.</li>
                        <li>Support each other like a real working team.</li>
                        <li>Step up when needed, help teammates, and solve problems together.</li>
                        <li>Accountability and honesty matter more than perfection.</li>
                        <li>If mistakes happen, own them, fix them, and learn from them.</li>
                    </ul>
                    <p className="font-semibold text-destructive">Excuses, blame-shifting, or silence are not part of our culture.</p>
                </SectionCard>

                <Separator />

                <SectionCard icon={Award} title="Submission Process & Team Lead Responsibility">
                    <p>For every task, one designated person (Team Lead) will submit the final output on behalf of the team.</p>
                    <p>This is done only to keep the process organized, clear, and professional.</p>
                    <ul>
                        <li>Multiple submissions from different members for the same task are not allowed.</li>
                        <li>All team members must share their completed work internally with the Team Lead before the deadline.</li>
                    </ul>
                    <p>The Team Lead’s responsibility is to:</p>
                    <ul>
                        <li>Review inputs</li>
                        <li>Ensure clarity and quality</li>
                        <li>Submit one final, consolidated version</li>
                    </ul>
                    <p>This process is not about control or hierarchy.</p>
                     <p>It exists only to:</p>
                     <ul>
                        <li>Avoid confusion</li>
                        <li>Maintain version control</li>
                        <li>Ensure smooth coordination</li>
                        <li>Represent the team professionally</li>
                    </ul>
                     <p>Submission authority does not mean higher importance or extra credit.</p>
                    <p>Individual ownership and contribution remain fully recognized.</p>
                </SectionCard>

                <Separator />

                <SectionCard icon={Scale} title="Equal Importance & Fair Acknowledgment">
                    <p>Every team member is equally important to the project’s success.</p>
                    <p>Importance is defined by role responsibility and contribution, not titles.</p>
                    <p>Every role — technical, design, content, marketing, coordination, or support — is critical.</p>
                    <p>Contributions will be acknowledged based on the role performed.</p>
                    <p>Recognition and certification will reflect:</p>
                    <ul>
                        <li>Actual work done</li>
                        <li>Quality of contribution</li>
                        <li>Consistency and professionalism</li>
                        <li>Responsibility handled within the role</li>
                    </ul>
                    <p>Individual efforts will be tracked and acknowledged fairly.</p>
                </SectionCard>

                 <Separator />

                <SectionCard icon={Users} title="Team Lead Selection Through Group Discussion">
                    <p>Team Leads will be decided through open group discussion among team members. The goal of this discussion is coordination, not competition.</p>
                    <p>Members are expected to voluntarily align based on:</p>
                    <ul>
                        <li>Who is most suitable for the task</li>
                        <li>Who has relevant skills</li>
                        <li>Who has availability and commitment for that phase</li>
                    </ul>
                    <p>This process reflects how a real professional team works, where leadership emerges from responsibility, not from force, speed, or visibility, and not from racing to take control.</p>
                    <h4 className="font-semibold mt-4">What This Shows About the Team</h4>
                    <ul>
                        <li>A willingness to discuss and align shows maturity and dedication.</li>
                        <li>Supporting the chosen Team Lead shows a team-first mindset, respect for roles, and focus on outcome, not titles.</li>
                    </ul>
                     <p className="font-semibold text-primary">This is not a leadership race. There is no advantage in pushing for visibility or authority. The true measure of contribution is consistent, high-quality work.</p>
                    <h4 className="font-semibold mt-4">If Consensus Is Not Reached</h4>
                    <p>If the group cannot reach a decision respectfully, the task owner / core team will assign a Team Lead temporarily. This is done only to move work forward, not to favor anyone.</p>
                </SectionCard>

                <Separator />

                <SectionCard icon={Heart} title="Commitment Over Competition (Important Clarification)">
                    <p>Leadership and responsibility in this team are not a race. No one is expected to compete, rush, or prove themselves by claiming positions.</p>
                    <p>True dedication is shown by:</p>
                    <ul>
                        <li>Willingly discussing and aligning as a group</li>
                        <li>Supporting the agreed decision</li>
                        <li>Focusing on quality work, not visibility</li>
                    </ul>
                    <p>A member who supports others, contributes consistently, and respects group decisions shows stronger professionalism than someone chasing titles.</p>
                    <p>We value:</p>
                    <ul>
                        <li>Collaboration over comparison</li>
                        <li>Outcomes over ego</li>
                        <li>Team success over individual spotlight</li>
                    </ul>
                     <blockquote className="border-l-4 border-primary pl-4 italic">
                        If you are truly dedicated to the work you will not feel threatened by roles, you will not feel jealous of responsibility, you will focus on contribution, not position. That mindset is what defines a real, trustworthy, professional team 🤝
                    </blockquote>
                </SectionCard>

                <Separator />
                
                <SectionCard icon={Briefcase} title="Mentor Support & Escalation Process">
                    <p>Each project team will have access to one assigned mentor for guidance when required. The mentor’s role is to:</p>
                    <ul>
                        <li>Provide direction when the team is genuinely blocked</li>
                        <li>Review approach or strategy when needed</li>
                        <li>Support learning and decision-making, not daily execution</li>
                    </ul>
                    <p>Mentors are not for constant clarification or validation. Teams are expected to:</p>
                    <ul>
                        <li>Discuss internally first</li>
                        <li>Attempt solutions collaboratively</li>
                        <li>Reach out to the mentor only when necessary</li>
                    </ul>
                    <p>If the team requires help related to process clarification, workflow issues, or platform/coordination support, please contact the Support Team through official channels.</p>
                    <p>Avoid direct, repeated, or individual messages to mentors or founders unless advised. This structure ensures smooth communication, respect for everyone’s time, and a professional working environment.</p>
                </SectionCard>
                
                <Separator />

                <SectionCard icon={Sparkles} title="Our Inclusive Approach">
                    <p>Building an ecosystem where everyone has a place to grow and contribute.</p>
                    <p>We provide equal recognition for work to any gender. Importance in the team is defined by actual effort, quality of contribution, and ownership shown — not by gender, background, or visibility.</p>
                    <p>Every role is respected equally: technical development, AI/ML, design, content, marketing, coordination.</p>
                    <p>Opportunities, appreciation, and certificates will be based only on the work delivered, dedication to outcomes, and professional conduct.</p>
                    <p>This approach ensures a truly inclusive culture, fairness in collaboration, and empowerment for all genders to work together without race or jealousy.</p>
                </SectionCard>

                <Separator />

                <SectionCard icon={Info} title="Final Disclaimer & Founder’s Note 🌸">
                    <p>Participation is voluntary and non-binding. Recognition, certificates, and announcements are for acknowledgment only. {brand.name} is built on trust, collaboration, and shared purpose. Every contributor plays a meaningful role in empowering women.</p>
                    <h4 className="font-semibold mt-4">Connect With Us</h4>
                    <ul className="not-prose">
                        <li>🌐 <strong>Website:</strong> <Link href={`https://${brand.website}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{brand.website}</Link></li>
                        <li>📩 <strong>Email:</strong> <a href={`mailto:${brand.email}`} className="text-primary hover:underline">{brand.email}</a></li>
                        <li>📸 <strong>Instagram:</strong> @shecodesherway</li>
                        <li>🔗 <strong>LinkedIn:</strong> {brand.name}</li>
                    </ul>
                </SectionCard>

            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
