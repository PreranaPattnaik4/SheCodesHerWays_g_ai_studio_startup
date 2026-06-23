"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserPlus, Handshake } from "lucide-react"
import Link from "next/link"
import { brand } from "@/lib/brand"

export default function JoinUs() {
 
  return (
    <section>
        <div className="text-center mb-10">
            <h2 className="font-headline text-3xl font-bold md-text-4xl">Join the Movement</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                Whether you're a student, professional, or an organization, there's a place for you at SheCodesHerWay.
            </p>
        </div>

        <Tabs defaultValue="enroll" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto h-auto">
            <TabsTrigger value="enroll" className="py-2"><UserPlus className="mr-2 h-4 w-4"/>Enroll in Program</TabsTrigger>
            <TabsTrigger value="partner" className="py-2"><Handshake className="mr-2 h-4 w-4"/>Join as a Core Team</TabsTrigger>
        </TabsList>
        <TabsContent value="enroll" className="mt-8">
            <Card className="max-w-2xl mx-auto shadow-lg">
                <CardHeader>
                <CardTitle>Enroll in {brand.programName}</CardTitle>
                <CardDescription>Ready to begin your journey of empowerment? Apply now!</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                    <Button asChild size="lg">
                        <Link href="/apply">Apply to {brand.programName}</Link>
                    </Button>
                </CardContent>
            </Card>
        </TabsContent>
        <TabsContent value="partner" className="mt-8">
            <Card className="max-w-2xl mx-auto shadow-lg">
                <CardHeader>
                    <CardTitle>Join as a Core Team</CardTitle>
                    <CardDescription>
                        Are you passionate about our mission? We're looking for dedicated individuals to join our core team and drive our initiatives forward.
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                   <Button asChild size="lg">
                        <Link href="/careers">Join Our Core Team</Link>
                    </Button>
                </CardContent>
            </Card>
        </TabsContent>
        </Tabs>
    </section>
  )
}
