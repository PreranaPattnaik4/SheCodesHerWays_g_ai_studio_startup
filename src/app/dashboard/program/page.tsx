
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Rocket, Award, Users } from "lucide-react";
import Link from "next/link";
import { brand } from "@/lib/brand";

const journeySteps = [
    {
        title: "Enrollment Confirmed",
        description: "Welcome to the program! You've taken the first step on your journey.",
        status: "Completed",
        icon: Check,
    },
    {
        title: "Orientation & Welcome Session",
        description: "Get to know your mentors, peers, and the program structure.",
        status: "Upcoming",
        icon: Users,
    },
    {
        title: "Core Skill Workshops",
        description: "Dive into hands-on learning in your chosen track.",
        status: "Locked",
        icon: Rocket,
    },
    {
        title: "Mid-Program Project",
        description: "Apply your skills to a real-world project with mentor guidance.",
        status: "Locked",
        icon: Rocket,
    },
    {
        title: "Final Showcase & Certification",
        description: "Present your work and celebrate your growth and achievements.",
        status: "Locked",
        icon: Award,
    },
];

export default function ProgramJourneyPage() {
    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold">My Program Journey</h1>
                <p className="text-muted-foreground">Your path through {brand.programName}.</p>
            </div>

            <Card className="bg-accent/30 border-accent/50 mb-8">
                <CardHeader>
                    <CardTitle>Welcome to {brand.programName} — Cohort 1!</CardTitle>
                    <CardDescription>We are thrilled to have you. This is your personal dashboard to track your progress, access resources, and connect with the community.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button asChild>
                        <Link href="/sangini-udaan">
                            View Program Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </CardContent>
            </Card>

            <div className="relative">
                <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-border -translate-x-1/2" aria-hidden="true"></div>

                <div className="space-y-12">
                    {journeySteps.map((step, index) => (
                        <div key={index} className="relative flex items-start gap-6">
                            <div className="h-9 w-9 rounded-full bg-background flex items-center justify-center border-2 border-primary shadow-sm flex-shrink-0 z-10">
                                <step.icon className="h-5 w-5 text-primary" />
                            </div>
                            <div className="w-full md:w-1/2 md:pr-8">
                                <Card className={step.status === 'Locked' ? 'bg-muted/70' : 'bg-card'}>
                                    <CardHeader>
                                        <div className="flex justify-between items-center">
                                            <CardTitle>{step.title}</CardTitle>
                                            <span 
                                                className={`text-xs font-semibold px-2 py-1 rounded-full ${
                                                    step.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                                    step.status === 'Upcoming' ? 'bg-blue-100 text-blue-800' :
                                                    'bg-gray-200 text-gray-700'
                                                }`}
                                            >
                                                {step.status}
                                            </span>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{step.description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
