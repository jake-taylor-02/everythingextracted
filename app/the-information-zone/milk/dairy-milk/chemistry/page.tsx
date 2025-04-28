import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cite, References, type ReferenceNumbersMap } from "@/components/simple-reference"

// Define reference numbers for this page
const pageReferenceNumbers: ReferenceNumbersMap = {
}

export default function MilkCompositionPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  The chemistry of dairy milk - what's in the carton
                </h1>
              </div>
            </div>

            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Let's exlore the processiing methods, properties, and contents of dairy milk, and how these affect texture, taste, and shelf life
                </p>

            <div className="mt-12 flex justify-center">
              <Button asChild variant="outline" className="gap-2 mr-4">
                <Link href="/the-information-zone/milk/dairy-milk">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Dairy Milk
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
