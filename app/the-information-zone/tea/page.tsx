import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function TeaPage() {
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
                  Explore the world of tea: varieties, brewing science, origins, and health benefits
                </p>
              </div>
            </div>

            <div className="prose prose-gray max-w-3xl mx-auto">
              <p className="text-center text-muted-foreground italic">
                This section is coming soon.
              </p>
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
