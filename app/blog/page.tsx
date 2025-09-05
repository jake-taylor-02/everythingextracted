import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function BlogPage() {
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
            <Link href="/blog" className="text-sm font-medium text-primary">
              Blog
            </Link>
            <Link href="/the-information-zone" className="text-sm font-medium hover:text-primary">
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
                  The everythingextracted blog
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Deep dives, investigations, and general things I find interesting
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {blogPosts.map((post, index) => (
                <Link key={index} href={`/blog/${post.slug}`} className="group">
                  <Card className="overflow-hidden h-[360px] flex flex-col transition-all hover:shadow-md hover:-translate-y-1 duration-200">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle>{post.title}</CardTitle>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="h-0.5 w-12 bg-blue-500 mt-2"></div>
                    </CardHeader>
                    <CardContent className="p-4 flex-grow">
                      <p className="text-sm text-muted-foreground line-clamp-4">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter className="p-4 mt-auto">
                      <Button variant="ghost" className="w-full justify-between group-hover:bg-muted/50">
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          <span className="text-xs">{post.readTime} min read</span>
                        </div>
                        <span>Read More</span>
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
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Button asChild variant="outline" className="gap-2 bg-transparent">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

const blogPosts = [
  {
    title: "Tracking my tea collection",
    slug: "tracking-my-tea-collection",
    subtitle: "Organizing and cataloging an ever-growing tea collection",
    date: "September 5, 2025",
    excerpt:
      "20+ teas in and I'm slowly figuring out what I like",
    readTime: 3,
  },
  {
    title: "The why behind the site",
    slug: "the-why-behind-the-site",
    subtitle: "A template for creating new blog posts",
    date: "April 15, 2025",
    excerpt: "Why I started everythingextracted.com, and what I hope to achieve",
    readTime: 6,
  },
]
