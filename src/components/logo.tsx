import { brand } from '@/lib/brand';
import React from 'react';
import Link from 'next/link';
import LogoIcon from './logo-icon';

const Logo = () => (
  <Link href="/" className="flex items-center gap-2" aria-label={`${brand.name} homepage`}>
    <LogoIcon className="text-primary"/>
    <span className="font-headline text-xl font-bold text-foreground">
      {brand.name}
    </span>
  </Link>
);

export default Logo;
