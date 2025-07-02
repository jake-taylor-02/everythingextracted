import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function MilkPage() {
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
              About Me
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Tea</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Everything you ought to know about the world's second most popular beverage, after water
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Card className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-1 duration-300 flex flex-col">
                <CardHeader className="p-6 pb-0">
                  <CardTitle>The Fundamentals of Tea</CardTitle>
                  <CardDescription>A few articles to get started on the origin, science and preperation of tea</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-4 flex flex-col flex-1">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "#EB5353" }} />
                      <Link href="/the-information-zone/tea/fundamentals/overview" className="hover:underline">
                        Tea - what it is, where it's grown and consumed, and its key contents
                      </Link>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "#F9D923" }} />
                      <Link href="/the-information-zone/tea/fundamentals/leaves" className="hover:underline">
                      The function of tea leaves, and their key components
                      </Link>
                    </li>
                  </ul>
                  <div className="mt-auto pt-4">
                    <Button asChild variant="outline" size="sm" className="w-full h-10">
                      <Link href="/the-information-zone/tea/fundamentals">Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/*

              <Card className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-1 duration-300 flex flex-col">
                <CardHeader className="p-6 pb-0">
                  <CardTitle>Plant-Based Milk</CardTitle>
                  <CardDescription>Non-dairy alternatives</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-4 flex flex-col flex-1">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "#EB5353" }} />
                      <Link href="/the-information-zone/milk/plant-based-milk/oat-milk" className="hover:underline">
                        Oat Milk
                      </Link>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "#F9D923" }} />
                      <Link href="/the-information-zone/milk/plant-based-milk/almond-milk" className="hover:underline">
                        Almond Milk
                      </Link>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "#36AE7C" }} />
                      <Link href="/the-information-zone/milk/plant-based-milk/coconut-milk" className="hover:underline">
                        Coconut Milk
                      </Link>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "#187498" }} />
                      <Link href="/the-information-zone/milk/plant-based-milk/soya-milk" className="hover:underline">
                        Soya Milk
                      </Link>
                    </li>
                  </ul>
                  <div className="mt-auto pt-4">
                    <Button asChild variant="outline" size="sm" className="w-full h-10">
                      <Link href="/the-information-zone/milk/plant-based-milk">Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              */ }

            </div>

            <div className="mt-12 flex justify-center">
              <Button asChild variant="outline" className="gap-2 mr-4">
                <Link href="/the-information-zone">
                  <ArrowLeft className="h-4 w-4" />
                  Back to The Information Zone
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
