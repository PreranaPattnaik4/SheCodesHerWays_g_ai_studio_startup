

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqData } from "@/lib/faq-data"
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Separator } from "./ui/separator";
import { homeFaqData } from "@/lib/home-faq-data";
import { Card, CardContent } from "./ui/card";

interface FaqProps {
  showAll?: boolean;
}

export default function Faq({ showAll = false }: FaqProps) {
    const half = Math.ceil(homeFaqData.length / 2);
    const firstHalf = homeFaqData.slice(0, half);
    const secondHalf = homeFaqData.slice(half);

  return (
    <section>
      <div className="text-center mb-10">
        <h2 className="font-headline text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Find answers to common questions about our programs, mentorship, and how to get involved.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        {showAll ? (
             <div className="space-y-12">
                {faqData.map((category, catIndex) => (
                    <div key={catIndex}>
                        <h3 className="text-2xl font-bold font-headline mb-6 text-center">{category.title}</h3>
                        <Accordion type="single" collapsible className="w-full">
                        {category.questions.map((faq, index) => (
                            <AccordionItem value={`item-${catIndex}-${index}`} key={index}>
                            <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-base text-foreground/80">
                                {faq.answer}
                            </AccordionContent>
                            </AccordionItem>
                        ))}
                        </Accordion>
                        {catIndex < faqData.length - 1 && <Separator className="my-12" />}
                    </div>
                ))}
            </div>
        ) : (
             <div className="grid md:grid-cols-2 gap-8 items-start">
                <Card className="shadow-lg bg-white">
                    <CardContent className="p-4">
                        <Accordion type="single" collapsible className="w-full">
                            {firstHalf.map((faq, index) => (
                                <AccordionItem value={`item-a-${index}`} key={index}>
                                <AccordionTrigger className="text-left text-base font-semibold">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-sm text-foreground/80">
                                    {faq.answer}
                                </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </CardContent>
                </Card>
                <Card className="shadow-lg bg-white">
                    <CardContent className="p-4">
                        <Accordion type="single" collapsible className="w-full">
                            {secondHalf.map((faq, index) => (
                                <AccordionItem value={`item-b-${index}`} key={index}>
                                <AccordionTrigger className="text-left text-base font-semibold">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-sm text-foreground/80">
                                    {faq.answer}
                                </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </CardContent>
                </Card>
            </div>
        )}
      </div>

      {!showAll && (
        <div className="text-center mt-12">
            <p className="text-foreground/80">
            Have more questions? Visit our full FAQ section.
            </p>
            <Button asChild className="mt-4">
                <Link href="/faq">
                    View All FAQs
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
      )}
    </section>
  )
}
