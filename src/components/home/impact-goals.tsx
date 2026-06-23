
import { Users, Handshake, Briefcase, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const goals = [
    {
        icon: Users,
        title: "Women Trained",
        description: "Empower 1,000+ women with hands-on skills in tech, creative, and leadership fields.",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
    },
    {
        icon: Handshake,
        title: "Mentor Network",
        description: "Build a strong network of over 100 dedicated mentors to guide and support our community.",
        color: "text-teal-500",
        bgColor: "bg-teal-500/10",
    },
    {
        icon: Briefcase,
        title: "Key Partnerships",
        description: "Forge strategic partnerships with at least 10 organizations to expand opportunities.",
        color: "text-amber-500",
        bgColor: "bg-amber-500/10",
    },
    {
        icon: Globe,
        title: "Community Growth",
        description: "Grow our inclusive community to over 5,000 members across the globe.",
        color: "text-rose-500",
        bgColor: "bg-rose-500/10",
    },
];

export default function ImpactGoals() {
  return (
    <section>
        <div className="text-center mb-16">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Impact Goals (2026-2027)</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                We are committed to making a tangible difference in the lives of women across India.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {goals.map((goal, index) => (
                <Card key={index} className="text-center shadow-lg transform transition-transform hover:-translate-y-2 duration-300">
                    <CardHeader className="items-center">
                        <div className={`rounded-full p-4 ${goal.bgColor}`}>
                             <goal.icon className={`h-8 w-8 ${goal.color}`} />
                        </div>
                        <CardTitle className="pt-4">{goal.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-foreground/80">{goal.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    </section>
  )
}
