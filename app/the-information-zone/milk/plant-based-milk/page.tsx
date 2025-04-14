import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PlantBasedMilkPage() {
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Plant-Based Milk</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Non-dairy alternatives for your beverages
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <Card className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-1 duration-300 flex flex-col">
                <CardHeader className="p-6 pb-0">
                  <CardTitle>Oat Milk</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-4 flex-grow">
                  <p className="min-h-[96px]">
                    Explore the creamy texture and mild flavor of oat milk, why it's become a favorite among baristas,
                    and how it performs in various coffee preparations.
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild variant="ghost" className="gap-2 px-4 group-hover:bg-muted/50 h-10 w-full">
                    <Link
                      href="/the-information-zone/milk/plant-based-milk/oat-milk"
                      className="flex items-center justify-center"
                    >
                      Read More
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
                        className="ml-2 h-4 w-4"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-1 duration-300 flex flex-col">
                <CardHeader className="p-6 pb-0">
                  <CardTitle>Almond Milk</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-4 flex-grow">
                  <p className="min-h-[96px]">
                    Discover the subtle nutty flavor of almond milk, its nutritional profile, and how it can complement
                    certain coffee and tea varieties with its distinctive taste.
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild variant="ghost" className="gap-2 px-4 group-hover:bg-muted/50 h-10 w-full">
                    <Link
                      href="/the-information-zone/milk/plant-based-milk/almond-milk"
                      className="flex items-center justify-center"
                    >
                      Read More
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
                        className="ml-2 h-4 w-4"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-1 duration-300 flex flex-col">
                <CardHeader className="p-6 pb-0">
                  <CardTitle>Coconut Milk</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-4 flex-grow">
                  <p className="min-h-[96px]">
                    Learn about the rich, tropical flavor of coconut milk, its unique fat composition, and how it can
                    add a distinctive character to specialty coffee and tea drinks.
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild variant="ghost" className="gap-2 px-4 group-hover:bg-muted/50 h-10 w-full">
                    <Link
                      href="/the-information-zone/milk/plant-based-milk/coconut-milk"
                      className="flex items-center justify-center"
                    >
                      Read More
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
                        className="ml-2 h-4 w-4"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-1 duration-300 flex flex-col">
                <CardHeader className="p-6 pb-0">
                  <CardTitle>Soya Milk</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-4 flex-grow">
                  <p className="min-h-[96px]">
                    Discover the versatility of soya milk, its protein content, and how its neutral flavor profile makes
                    it a popular choice for coffee and tea beverages around the world.
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild variant="ghost" className="gap-2 px-4 group-hover:bg-muted/50 h-10 w-full">
                    <Link
                      href="/the-information-zone/milk/plant-based-milk/soya-milk"
                      className="flex items-center justify-center"
                    >
                      Read More
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
                        className="ml-2 h-4 w-4"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
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
            <p className="text-xs text-muted-foreground">Comprehensive brewing knowledge, from bean to cup.</p>
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
