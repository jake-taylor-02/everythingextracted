import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function DairyMilkPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="text-lg font-bold">
            everythingextracted.com
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/resources" className="text-sm font-medium hover:text-primary">
              Useful Resources
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary">
              Blog
            </Link>
            <Link href="/the-information-zone" className="text-sm font-medium text-primary">
              The Information Zone
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Dairy Milk</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">The milk that started it all</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Card className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-1 duration-300 flex flex-col">
                <CardHeader className="p-6 pb-0">
                  <CardTitle>The origins of cattle, milk consumption, and lactase persistence</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-4 flex-grow">
                  <p className="min-h-[96px]">
                    Learn about the origins of cattle, the causes of lactose intolerance, and the driving factors behind
                    the genetic landscape of lactose persistence in the present day.
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild variant="ghost" className="gap-2 px-4 group-hover:bg-muted/50 h-10 w-full">
                    <Link
                      href="/the-information-zone/milk/dairy-milk/history"
                      className="flex items-center justify-center"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-1 duration-300 flex flex-col">
                <CardHeader className="p-6 pb-0">
                  <CardTitle>The chemistry of dairy milk - what's in the carton</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-4 flex-grow">
                  <p className="min-h-[96px]">
                    Explore the different components that make up milk, their impact on our health, and how these
                    components explain milk's unique properties and behavior in various culinary applications and
                    processing methods.
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild variant="ghost" className="gap-2 px-4 group-hover:bg-muted/50 h-10 w-full">
                    <Link
                      href="/the-information-zone/milk/dairy-milk/chemistry"
                      className="flex items-center justify-center"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-12 flex justify-center">
              <Button asChild variant="outline" className="gap-2 mr-4">
                <Link href="/the-information-zone/milk">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Milk
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted/40">
        <div className="container flex flex-col gap-2 py-6 md:flex-row md:items-center md:justify-between md:py-8">
          <div className="flex flex-col gap-1">
            <Link href="/" className="text-lg font-semibold">
              everythingextracted.com
            </Link>
          </div>
          <nav className="flex gap-4 text-sm">
            <Link href="/resources" className="text-muted-foreground hover:text-foreground">
              Useful Resources
            </Link>
            <Link href="/blog" className="text-muted-foreground hover:text-foreground">
              Blog
            </Link>
            <Link href="/the-information-zone" className="text-primary font-medium">
              The Information Zone
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground">
              About
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
