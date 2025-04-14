import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

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
              About
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

            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Coming Soon</h2>
                <p className="text-muted-foreground max-w-[600px]">
                  I'm currently working on some exciting blog posts. Check back soon for articles about coffee, tea, and
                  more!
                </p>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Button asChild variant="outline" className="gap-2">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
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
            <Link href="/blog" className="text-primary font-medium">
              Blog
            </Link>
            <Link href="/the-information-zone" className="text-muted-foreground hover:text-foreground">
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

// Keep the blogPosts array for future use
const blogPosts = [
  {
    title: "My Journey to Finding the Perfect Brew",
    slug: "journey-to-perfect-brew",
    subtitle: "A personal exploration through coffee varieties",
    date: "March 20, 2023",
    author: "Alex Johnson",
    authorImage: "/placeholder.svg?height=40&width=40",
    category: "Coffee",
    gradientFrom: "#d4a373",
    gradientTo: "#faedcd",
    excerpt:
      "After years of mediocre coffee, I embarked on a journey to discover what makes the perfect cup. This is what I learned along the way.",
    readTime: 8,
  },
  {
    title: "Tea Ceremonies Around the World",
    slug: "tea-ceremonies-around-world",
    subtitle: "Cultural traditions and their meanings",
    date: "March 5, 2023",
    author: "Mei Lin",
    authorImage: "/placeholder.svg?height=40&width=40",
    category: "Tea",
    gradientFrom: "#4c956c",
    gradientTo: "#d8f3dc",
    excerpt:
      "From Japan's meticulous matcha preparation to Morocco's theatrical mint tea pouring, I explore how tea ceremonies reflect cultural values and bring people together.",
    readTime: 6,
  },
  {
    title: "Sample Post",
    slug: "sample-post",
    subtitle: "A template for creating new blog posts",
    date: "March 15, 2023",
    author: "Alex Johnson",
    authorImage: "/placeholder.svg?height=40&width=40",
    category: "Coffee",
    gradientFrom: "#f59e0b",
    gradientTo: "#fef3c7",
    excerpt:
      "This is a sample blog post that demonstrates various elements like paragraphs, images, tables, and information boxes that you can use as a template for future posts.",
    readTime: 6,
  },
]
