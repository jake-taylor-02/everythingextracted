import Link from "next/link"
import { ArrowLeft, Calendar, Coffee } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <Coffee className="h-6 w-6 text-emerald-600" />
            <span>Everything Extracted</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/articles" className="text-sm font-medium hover:text-primary">
              Articles
            </Link>
            <Link href="/blog" className="text-sm font-medium text-primary">
              Blog
            </Link>
            <Link href="/data" className="text-sm font-medium hover:text-primary">
              Experimental Data
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-teal-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  The Complete Extraction Blog
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Personal stories, experiences, and journeys through the world of coffee and tea.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              {blogPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden">
                  <div
                    className="h-48 bg-gradient-to-br flex items-end p-6"
                    style={{
                      backgroundImage: `linear-gradient(to bottom right, ${post.gradientFrom}, ${post.gradientTo})`,
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src={post.authorImage} />
                        <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="text-white">
                        <div className="text-sm font-medium">{post.author}</div>
                        <div className="flex items-center text-xs">
                          <Calendar className="mr-1 h-3 w-3" />
                          {post.date}
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{post.title}</CardTitle>
                      <Badge
                        className={
                          post.category === "Coffee"
                            ? "bg-amber-500"
                            : post.category === "Tea"
                              ? "bg-green-500"
                              : "bg-purple-500"
                        }
                      >
                        {post.category}
                      </Badge>
                    </div>
                    <CardDescription>{post.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="text-xs text-muted-foreground">{post.readTime} min read</div>
                    <Button asChild variant="ghost">
                      <Link href={`/blog/${post.slug}`}>
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
              ))}
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
            <Link href="/" className="flex items-center gap-1 text-lg font-semibold">
              <Coffee className="h-5 w-5 text-emerald-600" />
              <span>Everything Extracted</span>
            </Link>
            <p className="text-xs text-muted-foreground">Comprehensive brewing knowledge, from bean to cup.</p>
          </div>
          <nav className="flex gap-4 text-sm">
            <Link href="/articles" className="text-muted-foreground hover:text-foreground">
              Articles
            </Link>
            <Link href="/blog" className="text-primary font-medium">
              Blog
            </Link>
            <Link href="/data" className="text-muted-foreground hover:text-foreground">
              Data
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

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
      "From Japan's meticulous matcha preparation to Morocco's theatrical mint tea pouring, \n      \"From Japan's meticulous matcha preparation to Morocco's theatrical mint tea pouring, I explore how tea ceremonies reflect cultural values and bring people together.",
    readTime: 6,
  },
  {
    title: "Coffee Shop Hopping in Portland",
    slug: "coffee-shop-hopping-portland",
    subtitle: "A tour of the city's best cafes",
    date: "February 15, 2023",
    author: "Sam Rivera",
    authorImage: "/placeholder.svg?height=40&width=40",
    category: "Coffee",
    gradientFrom: "#457b9d",
    gradientTo: "#a8dadc",
    excerpt:
      "Portland is known for its vibrant coffee scene. Join me as I visit the most innovative and cozy coffee shops the city has to offer.",
    readTime: 5,
  },
  {
    title: "How I Switched from Coffee to Tea",
    slug: "switched-from-coffee-to-tea",
    subtitle: "A caffeine journey",
    date: "January 28, 2023",
    author: "Jamie Taylor",
    authorImage: "/placeholder.svg?height=40&width=40",
    category: "Tea",
    gradientFrom: "#606c38",
    gradientTo: "#dda15e",
    excerpt:
      "After 15 years as a dedicated coffee drinker, health concerns led me to explore the world of tea. Here's what happened during my transition.",
    readTime: 7,
  },
]

