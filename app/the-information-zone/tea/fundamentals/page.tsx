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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Fundamentals of Tea</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">An overview of everything</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Card className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-1 duration-300 flex flex-col">
                <CardHeader className="p-6 pb-0">
                  <CardTitle>Tea - A General Overview</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-4 flex-grow">
                  <p className="min-h-[96px]">
                    What is tea, where is it produced and consumed, what are the different subtypes and what does it
                    contain?
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild variant="ghost" className="gap-2 px-4 group-hover:bg-muted/50 h-10 w-full">
                    <Link
                      href="/the-information-zone/tea/fundamentals/overview"
                      className="flex items-center justify-center"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Additional cards can be added here in the future */}
            </div>

            <div className="mt-12 flex justify-center">
              <Button asChild variant="outline" className="gap-2">
                <Link href="/the-information-zone/tea">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Tea
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
