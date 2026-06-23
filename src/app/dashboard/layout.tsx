
'use client';

import { useUser } from '@/firebase/hooks';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Sidebar from '@/components/dashboard/sidebar';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Header from '@/components/header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // The login requirement is removed for demonstration purposes.
  // useEffect(() => {
  //   if (!isUserLoading && !user) {
  //     router.push('/');
  //   }
  // }, [user, isUserLoading, router]);

  // if (isUserLoading || !user) {
  //   return (
  //       <div className="flex h-screen items-center justify-center">
  //           <p>Loading...</p>
  //       </div>
  //   );
  // }

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <div className="flex-1 flex">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <div className="flex-1 flex flex-col">
          <header className="flex h-14 items-center gap-4 border-b bg-white px-6">
              <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Toggle Sidebar</span>
              </Button>
              <h1 className="text-lg font-semibold">My Learning Journey</h1>
          </header>
          <main className="flex-1 p-6 bg-muted/40">
              {children}
          </main>
        </div>
      </div>
    </div>
  );
}
