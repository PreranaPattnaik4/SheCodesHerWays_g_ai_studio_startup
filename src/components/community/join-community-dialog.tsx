'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { brand } from '@/lib/brand';
import Logo from '../logo';
import { Github, Linkedin, Twitter, MessageCircle, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface JoinCommunityDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function JoinCommunityDialog({ open, onOpenChange }: JoinCommunityDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="items-center text-center">
          <Logo />
          <DialogTitle className="text-2xl font-bold mt-4">Welcome to our Sangini Circle!</DialogTitle>
          <DialogDescription className="text-balance text-base pt-2">
            Join a supportive community of women building their paths, leading their way, and leaving their marks.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          <div className="bg-primary/10 p-6 rounded-xl border border-primary/20 text-center">
            <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">WhatsApp Community</h3>
            <p className="text-sm text-foreground/80 mb-4">
              Get real-time updates, participate in discussions, and connect with peers directly.
            </p>
            <Button asChild className="w-full" size="lg">
              <Link href="https://chat.whatsapp.com/Fy0Zj24Z1vMJTIocK6DbUs" target="_blank" rel="noopener noreferrer">
                Join WhatsApp Group <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground text-center">Follow our journey</h4>
            <div className="flex justify-center gap-4">
              <Button asChild variant="outline" size="icon" className="rounded-full hover:text-primary hover:border-primary">
                <Link href="https://www.linkedin.com/company/shecodesherway/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon" className="rounded-full hover:text-primary hover:border-primary">
                <Link href="https://x.com/preranakailash4" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon" className="rounded-full hover:text-primary hover:border-primary">
                <Link href="https://github.com/PreranaPattnaik4/SheCodesHerWay" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-muted-foreground pt-2">
          By joining, you agree to our community guidelines and values.
        </div>
      </DialogContent>
    </Dialog>
  );
}
