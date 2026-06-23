
import { BookOpen, FileText, Bot, Code, Briefcase, Target, Wrench, Map, Star, Download, LucideIcon, Rocket, Heart, Sparkles, Zap } from 'lucide-react';

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: LucideIcon;
  href: string;
  readTime?: string;
  trending?: boolean;
  popular?: boolean;
  dateAdded: string;
  image?: string;
  imageHint?: string;
  tags?: string[];
  downloadAvailable?: boolean;
  isComingSoon?: boolean;
}

export const hubCategories = [
  { id: 'tutorials', title: 'Tutorials', icon: BookOpen, description: 'Step-by-step technical and creative tutorials.' },
  { id: 'guides', title: 'Guides', icon: FileText, description: 'Comprehensive guides on technology, design, and leadership.' },
  { id: 'ai-tech', title: 'AI & Technology', icon: Bot, description: 'Learn about AI, prompting, and future technology.' },
  { id: 'coding-resources', title: 'Coding Resources', icon: Code, description: 'Tools, libraries, and coding resources.' },
  { id: 'career-development', title: 'Career Development', icon: Briefcase, description: 'Resources for personal branding and career growth.' },
  { id: 'interview-prep', title: 'Interview Preparation', icon: Target, description: 'Interview tips and preparation resources.' },
  { id: 'templates-toolkits', title: 'Templates & Toolkits', icon: Wrench, description: 'Downloadable templates and frameworks.' },
  { id: 'learning-roadmaps', title: 'Learning Roadmaps', icon: Map, description: 'Structured learning paths.' },
  { id: 'success-stories', title: 'Success Stories', icon: Star, description: 'Inspirational community stories.' },
  { id: 'free-resources', title: 'Free Resources', icon: Download, description: 'Free learning materials and downloads.' },
];

export const allResources: ResourceItem[] = [
  // Tutorials
  {
    id: 'tut-vibe-1',
    title: "Intro to Vibe Coding: Build without Fear",
    description: "Learn how to use natural language and intent to create applications using AI-assisted tools.",
    category: 'tutorials',
    icon: Zap,
    href: '/knowledge-hub/tutorials',
    readTime: '6 min read',
    dateAdded: '2025-11-20',
    trending: true,
    image: 'https://picsum.photos/seed/vibe/600/400',
    imageHint: 'coding vibe'
  },
  {
    id: 'tut-canva-1',
    title: "Canva for Creative Content: Design Basics",
    description: "A step-by-step guide to creating professional social media graphics and brand assets.",
    category: 'tutorials',
    icon: Sparkles,
    href: '/knowledge-hub/tutorials',
    readTime: '8 min read',
    dateAdded: '2025-11-22',
    image: 'https://picsum.photos/seed/canva/600/400',
    imageHint: 'design creative'
  },
  // Guides
  {
    id: 'gui-lead-1',
    title: "Confidence & Leadership Foundations",
    description: "A comprehensive guide to finding your voice and leading with authenticity in any field.",
    category: 'guides',
    icon: Heart,
    href: '/knowledge-hub/guides',
    dateAdded: '2025-11-25',
    downloadAvailable: true,
    image: 'https://picsum.photos/seed/lead/600/400',
    imageHint: 'leadership'
  },
  {
    id: 'gui-biz-1',
    title: "Entrepreneurship & Business Mindset",
    description: "Moving from idea to execution: How to build a sustainable startup or small business.",
    category: 'guides',
    icon: Rocket,
    href: '/knowledge-hub/guides',
    dateAdded: '2025-11-28',
    image: 'https://picsum.photos/seed/biz/600/400',
    imageHint: 'startup business'
  },
  // AI & Tech
  {
    id: 'ai-resp-1',
    title: "AI Literacy & Responsible AI Practices",
    description: "Understand the ethics of AI, bias detection, and how to use generative models responsibly.",
    category: 'ai-tech',
    icon: Bot,
    href: '/knowledge-hub/ai-tech',
    trending: true,
    readTime: '10 min read',
    dateAdded: '2025-12-01',
    image: 'https://picsum.photos/seed/respai/600/400',
    imageHint: 'ethical AI'
  },
  {
    id: 'ai-tools-1',
    title: "Mastering Prompt Writing as a Skill",
    description: "How to craft clear, goal-oriented prompts for research, content, and digital productivity.",
    category: 'ai-tech',
    icon: Bot,
    href: '/knowledge-hub/ai-tech',
    readTime: '7 min read',
    dateAdded: '2025-12-05',
    image: 'https://picsum.photos/seed/promptskill/600/400',
    imageHint: 'writing prompts'
  },
  // Coding Resources
  {
    id: 'cod-fund-1',
    title: "Coding & Technical Fundamentals",
    description: "The core concepts of the web: HTML, CSS, and JavaScript for total beginners.",
    category: 'coding-resources',
    icon: Code,
    href: '/knowledge-hub/coding-resources',
    dateAdded: '2025-12-08',
    image: 'https://picsum.photos/seed/techfund/600/400',
    imageHint: 'coding basics'
  },
  {
    id: 'cod-cloud-1',
    title: "Google Firebase & Cloud Basics",
    description: "A resource list for understanding hosting, databases, and authentication for your projects.",
    category: 'coding-resources',
    icon: Code,
    href: '/knowledge-hub/coding-resources',
    dateAdded: '2025-12-10',
    image: 'https://picsum.photos/seed/cloudres/600/400',
    imageHint: 'cloud tech'
  },
  // Career Development
  {
    id: 'car-brand-1',
    title: "Personal Branding & Digital Presence",
    description: "Build an online identity that reflects your skills, values, and professional goals.",
    category: 'career-development',
    icon: Briefcase,
    href: '/knowledge-hub/career-development',
    dateAdded: '2025-12-12',
    image: 'https://picsum.photos/seed/pbrand/600/400',
    imageHint: 'branding identity'
  },
  {
    id: 'car-soft-1',
    title: "Emotional Intelligence & Self-Growth",
    description: "Developing the soft skills necessary for resilience, teamwork, and long-term career success.",
    category: 'career-development',
    icon: Briefcase,
    href: '/knowledge-hub/career-development',
    dateAdded: '2025-12-15',
    image: 'https://picsum.photos/seed/selfgrowth/600/400',
    imageHint: 'growth mindset'
  },
  // Interview Preparation
  {
    id: 'int-tech-1',
    title: "Coding Interview Walkthroughs",
    description: "Practice solving common technical problems with guided logic and AI-assisted explanations.",
    category: 'interview-prep',
    icon: Target,
    href: '/knowledge-hub/interview-prep',
    dateAdded: '2025-12-18',
    image: 'https://picsum.photos/seed/intprep/600/400',
    imageHint: 'interview coding'
  },
  {
    id: 'int-beh-1',
    title: "Leadership & Behavioral Questions",
    description: "How to demonstrate your leadership potential and emotional intelligence during interviews.",
    category: 'interview-prep',
    icon: Target,
    href: '/knowledge-hub/interview-prep',
    dateAdded: '2025-12-20',
    image: 'https://picsum.photos/seed/beh/600/400',
    imageHint: 'behavioral interview'
  },
  // Templates & Toolkits
  {
    id: 'tem-res-1',
    title: "Tech-Ready Resume Template",
    description: "A clean, structured template optimized for technical and digital career applications.",
    category: 'templates-toolkits',
    icon: Wrench,
    href: '/knowledge-hub/templates-toolkits',
    dateAdded: '2025-12-22',
    downloadAvailable: false,
    isComingSoon: true,
    image: 'https://picsum.photos/seed/restemp/600/400',
    imageHint: 'resume template'
  },
  {
    id: 'tem-pitch-1',
    title: "Startup Pitch Deck Toolkit",
    description: "Essential slides and structure for presenting your business idea to partners and mentors.",
    category: 'templates-toolkits',
    icon: Wrench,
    href: '/knowledge-hub/templates-toolkits',
    dateAdded: '2025-12-25',
    downloadAvailable: false,
    isComingSoon: true,
    image: 'https://picsum.photos/seed/pitch/600/400',
    imageHint: 'pitch deck'
  },
  // Learning Roadmaps
  {
    id: 'roa-tech-1',
    title: "Women in Tech Career Roadmap",
    description: "From digital literacy to cloud-based application development: Your path into technology.",
    category: 'learning-roadmaps',
    icon: Map,
    href: '/knowledge-hub/learning-roadmaps',
    dateAdded: '2025-12-28',
    image: 'https://picsum.photos/seed/techroad/600/400',
    imageHint: 'tech roadmap'
  },
  {
    id: 'roa-cre-1',
    title: "Creative Entrepreneur Roadmap",
    description: "A step-by-step journey from storytelling to building a profitable digital audience.",
    category: 'learning-roadmaps',
    icon: Map,
    href: '/knowledge-hub/learning-roadmaps',
    dateAdded: '2025-12-30',
    image: 'https://picsum.photos/seed/createroad/600/400',
    imageHint: 'creative roadmap'
  },
  // Success Stories
  {
    id: 'suc-comm-1',
    title: "Community Impact through Real-World Projects",
    description: "How one Sangini used her tech skills to solve a local problem and inspire others.",
    category: 'success-stories',
    icon: Star,
    href: '/knowledge-hub/success-stories',
    dateAdded: '2026-01-02',
    image: 'https://picsum.photos/seed/impact/600/400',
    imageHint: 'community success'
  },
  {
    id: 'suc-break-1',
    title: "Returning to Work with Digital Confidence",
    description: "A story of resilience and rediscovery after a long career break.",
    category: 'success-stories',
    icon: Star,
    href: '/knowledge-hub/success-stories',
    dateAdded: '2026-01-05',
    image: 'https://picsum.photos/seed/return/600/400',
    imageHint: 'career return'
  },
  // Free Resources
  {
    id: 'fre-prod-1',
    title: "Digital Literacy & Productivity Starter Kit",
    description: "Essential tools and workflows to manage your time and digital tasks effectively.",
    category: 'free-resources',
    icon: Download,
    href: '/knowledge-hub/free-resources',
    popular: true,
    dateAdded: '2026-01-08',
    image: 'https://picsum.photos/seed/prodkit/600/400',
    imageHint: 'productivity kit'
  },
  {
    id: 'fre-ai-1',
    title: "Ethical AI Checklist",
    description: "A simple guide to ensure your AI-assisted work remains responsible and transparent.",
    category: 'free-resources',
    icon: Download,
    href: '/knowledge-hub/free-resources',
    dateAdded: '2026-01-10',
    image: 'https://picsum.photos/seed/ethic/600/400',
    imageHint: 'ai checklist'
  },
];
