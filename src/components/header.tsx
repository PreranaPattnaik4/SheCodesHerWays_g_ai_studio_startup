"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Users, GraduationCap } from 'lucide-react';
import React, { useState } from 'react';
import JoinCommunityDialog from './community/join-community-dialog';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/sangini-udaan', label: 'Our Program' },
  { href: '/knowledge-hub', label: 'Knowledge Hub' },
  { href: '/ai-coaching', label: 'AI Coaching' },
  { href: '/blog', label: 'Our Blogs' },
  { href: '/about', label: 'About' },
  { href: '/impact-ecosystem', label: 'Impact' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />
          <nav className="hidden items-center space-x-4 font-medium md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 text-sm lg:text-base text-foreground/80 transition-colors hover:text-primary whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Button onClick={() => setCommunityOpen(true)} className="rounded-full shadow-md">
                <Users className="mr-2 h-4 w-4" />
                Join Community
              </Button>
            </div>
            
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full h-full bg-background/60 backdrop-blur overflow-y-auto">
                <div className="flex flex-col items-center justify-center min-h-full gap-8 py-10">
                  <Logo />
                  <nav className="flex flex-col gap-4 text-center">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-2 text-2xl font-medium text-foreground/80 transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <Button onClick={() => { setOpen(false); setCommunityOpen(true); }} size="lg" className="rounded-full mt-4">
                    <Users className="mr-2 h-5 w-5" />
                    Join Community
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <JoinCommunityDialog open={communityOpen} onOpenChange={setCommunityOpen} />
    </>
  );
}
