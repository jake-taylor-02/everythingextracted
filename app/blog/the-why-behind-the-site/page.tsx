import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function SamplePostPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header - Standard across all blog posts */}
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="text-lg font-bold">
            everythingextracted.com
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/resources" className="text-sm font-medium hover:text-primary">
              Useful Resources
            </Link>
            <Link href="/blog" className="text-sm font-medium text-primary">
              Blog
            </Link>
            <Link href="/the-information-zone" className="text-sm font-medium hover:text-primary">
              The Information Zone
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <article className="container max-w-3xl py-10">
          {/* Back to Blog Link */}
          <div className="mb-4">
            <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Blog
            </Link>
          </div>

          {/* Blog Header Section */}
          <div className="mb-8">
            {/* Title and Subtitle */}
            <h1 className="text-4xl font-bold tracking-tight mb-2">The why behind the site</h1>
            <p className="text-xl text-muted-foreground mb-4">
              Why I started everythingextracted.com, and what I hope to achieve
            </p>

            {/* Date and Reading Time */}
            <div className="flex items-center text-sm text-muted-foreground mb-4">
              <Calendar className="mr-1 h-4 w-4" />
              April 15, 2024
              <span className="mx-2">•</span>
              <Clock className="mr-1 h-4 w-4" />6 min read
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose prose-stone max-w-none">
            {/* First Section */}
            <h2>My past attempts at building something interesting</h2>
            <p>
              Over the past few years, I've played around with website building a fair bit without creating anything paticularly interesting, so why is this time any different? Let's explore my past projects:
            </p>

            <h3>codingnomad.net</h3>
            <p>A website where I posted some small coding projects during my time university</p>
            <ul>
              <li>Built through the clunky GoDaddy online portal</li>
              <li>Only featured around 3 projects that were totally disconnected from eachother</li>
              <li>Neglected after a month due to interviews and exams</li>
            </ul>

            <h3>sillytransportstuff.com</h3>
            <p>A nicer and better built website where I documented my travels around Germany, and some other transport related stuff</p>
            <ul>
              <li>Built through GitHub pages</li>
              <li>Updated consistently for a few months</li>
              <li>Now serves little purpose, and I haven't renewed the domain. I'll turn it into a small book</li>
            </ul>

            <h2>My vision for everythingextracted.com</h2>

            <p>While my last two websites were good learning experiences, they weren't paticularly useful or interesting to anyone else, and that's where I'll start off with my hopes for the site</p>

            <h3>A place to discover the things you didn't know you didn't know</h3>

            <p>Where do you start when researching coffee, to take an example?</p>





          {/* Back to Blog Button */}
          <div className="mt-10 flex justify-center">
            <Button asChild variant="outline" className="gap-2">
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4" />
                Back to All Posts
              </Link>
            </Button>
          </div>
        </article>
      </main>
    </div>
  )
}
