
import Header from '@/components/header';
import Footer from '@/components/footer';
import { brand } from '@/lib/brand';
import ApplyForm from '@/components/apply/apply-form';
import { Badge } from '@/components/ui/badge';

export default function ApplyPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-4xl font-bold md:text-5xl">Women Empowerment Program</h1>
            <h2 className="mt-2 font-headline text-3xl font-bold text-primary">{brand.programName}</h2>
            <Badge className="mt-4">Sangini Udaan : EmpowerFly — Cohort 1— Launching Soon</Badge>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80">
              Choose your path and begin your journey to learn, lead, and rise with SheCodesHerWay.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <ApplyForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}
