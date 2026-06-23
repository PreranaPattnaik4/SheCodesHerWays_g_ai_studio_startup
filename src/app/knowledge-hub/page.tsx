'use client';

import React, { useState, useMemo } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, ArrowRight, Library, Zap, Clock, TrendingUp, Download, CheckCircle2, BookOpen } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { hubCategories, allResources, ResourceItem } from '@/lib/knowledge-hub-data';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function KnowledgeHubPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  const filteredResources = useMemo(() => {
    return allResources.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = activeFilter === 'all' || item.category === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  const featuredResources = useMemo(() => {
    return allResources.filter(r => r.trending || r.popular).slice(0, 3);
  }, []);

  const recentlyAdded = useMemo(() => {
    return [...allResources].sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()).slice(0, 4);
  }, []);

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1 bg-muted/20">
        {/* Hero Section */}
        <section className="bg-secondary/40 py-16 md:py-24 relative overflow-hidden border-b">
          {heroImage && (
            <Image 
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover opacity-10"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
          <div className="container relative mx-auto px-4 text-center">
            <Library className="mx-auto h-16 w-16 text-primary mb-6" />
            <h1 className="font-headline text-5xl font-bold md:text-7xl">Knowledge Hub</h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-foreground/80">
              Your central library for tutorials, guides, career resources, and AI learning tools. Designed to help women build their path and leave their mark.
            </p>
            
            <div className="mt-10 max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Search resources, tutorials, roadmaps..." 
                  className="pl-12 h-14 text-lg bg-white shadow-lg border-primary/20 focus-visible:ring-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        {searchQuery === '' && activeFilter === 'all' && (
          <section className="container mx-auto px-4 py-16">
            <div className="flex items-center gap-2 mb-8">
              <Zap className="text-amber-500" />
              <h2 className="font-headline text-3xl font-bold">Featured Resources</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredResources.map(resource => (
                <ResourceCard key={resource.id} item={resource} featured />
              ))}
            </div>
          </section>
        )}

        {/* Content Section with Sidebar Filter */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Filter Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-md border">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  Categories
                </h3>
                <div className="space-y-1">
                  <Button 
                    variant={activeFilter === 'all' ? 'secondary' : 'ghost'} 
                    className="w-full justify-start font-medium"
                    onClick={() => setActiveFilter('all')}
                  >
                    All Resources
                  </Button>
                  {hubCategories.map(cat => (
                    <Button 
                      key={cat.id}
                      variant={activeFilter === cat.id ? 'secondary' : 'ghost'} 
                      className="w-full justify-start font-medium"
                      onClick={() => setActiveFilter(cat.id)}
                    >
                      <cat.icon className="mr-2 h-4 w-4" />
                      {cat.title}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-xl">Stay Updated</CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    Get new tutorials and resources directly in your inbox.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Input placeholder="Your email" className="bg-primary-foreground text-primary mb-4" />
                  <Button variant="secondary" className="w-full font-bold">Subscribe</Button>
                </CardContent>
              </Card>
            </aside>

            {/* Resources Grid */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold font-headline">
                  {activeFilter === 'all' ? 'All Learning Materials' : hubCategories.find(c => c.id === activeFilter)?.title}
                  <span className="ml-3 text-sm font-normal text-muted-foreground">({filteredResources.length} items)</span>
                </h2>
              </div>
              
              {filteredResources.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredResources.map(resource => (
                    <ResourceCard key={resource.id} item={resource} />
                  ))}
                </div>
              ) : (
                <Card className="p-12 text-center bg-white/50 border-dashed border-2">
                  <p className="text-muted-foreground text-lg">No resources found matching your criteria.</p>
                  <Button variant="link" onClick={() => { setSearchQuery(''); setActiveFilter('all'); }}>Clear all filters</Button>
                </Card>
              )}

              {/* Recently Added Section - Only show when no active search/filter */}
              {searchQuery === '' && activeFilter === 'all' && (
                <div className="mt-20">
                  <div className="flex items-center gap-2 mb-8">
                    <Clock className="text-primary" />
                    <h2 className="font-headline text-3xl font-bold">Recently Added</h2>
                  </div>
                  <div className="space-y-4">
                    {recentlyAdded.map(item => (
                      <Link href={item.href} key={item.id}>
                        <div className="flex items-center gap-4 p-4 bg-white rounded-lg border hover:shadow-md transition-all group">
                          <div className="bg-muted p-3 rounded-lg group-hover:bg-primary/10 transition-colors">
                            <item.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold group-hover:text-primary transition-colors">{item.title}</h4>
                            <p className="text-xs text-muted-foreground">{item.dateAdded} • {item.category.replace('-', ' ')}</p>
                          </div>
                          <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function ResourceCard({ item, featured = false }: { item: ResourceItem, featured?: boolean }) {
  const Icon = item.icon || BookOpen;
  return (
    <Card className={cn(
      "flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl group h-full",
      featured ? "border-primary/40 shadow-lg ring-1 ring-primary/20" : "hover:-translate-y-1 shadow-md border-primary/10"
    )}>
      <div className={cn(
        "p-6 flex items-center justify-between border-b",
        featured ? "bg-primary/5" : "bg-muted/30"
      )}>
        <div className="bg-white p-3 rounded-xl shadow-sm border border-primary/10 transition-transform group-hover:scale-110">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <div className="flex flex-col items-end gap-2">
           {item.trending && <Badge className="bg-amber-500">Trending</Badge>}
           {item.popular && <Badge className="bg-rose-500">Popular</Badge>}
           {item.isComingSoon && <Badge variant="secondary">Coming Soon</Badge>}
           <Badge variant="outline" className="bg-white/90 text-primary border-none shadow-sm">{hubCategories.find(c => c.id === item.category)?.title}</Badge>
        </div>
      </div>
      <CardHeader className="p-6">
        <CardTitle className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">{item.title}</CardTitle>
        <CardDescription className="line-clamp-3 mt-4 text-base leading-relaxed">{item.description}</CardDescription>
      </CardHeader>
      <CardContent className="px-6 pb-6 flex-grow text-xs text-muted-foreground flex items-center gap-4">
        {item.readTime && <span className="flex items-center gap-1 font-medium"><Clock className="h-3 w-3" /> {item.readTime}</span>}
        <span className="flex items-center gap-1 font-medium"><CheckCircle2 className="h-3 w-3 text-green-500" /> Free Access</span>
      </CardContent>
      <CardFooter className="px-6 py-4 border-t bg-muted/10">
        <Button asChild variant="link" className="p-0 h-auto font-bold group-hover:translate-x-1 transition-transform">
          <Link href={item.href}>
            {item.downloadAvailable ? 'Download Resource' : 'Read Full Article'} 
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
