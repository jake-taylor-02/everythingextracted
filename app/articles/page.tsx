import Link from "next/link"
import { ArrowLeft, Coffee, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ArticlesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <Coffee className="h-6 w-6 text-emerald-600" />
            <span>Everything Extracted</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/articles" className="text-sm font-medium text-primary">
              Articles
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-emerald-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Coffee & Tea Articles</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  In-depth knowledge and research about coffee and tea from around the world.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge className="bg-emerald-500 hover:bg-emerald-600">Coffee</Badge>
                <Badge className="bg-green-500 hover:bg-green-600">Tea</Badge>
                <Badge className="bg-red-500 hover:bg-red-600">Brewing</Badge>
                <Badge className="bg-blue-500 hover:bg-blue-600">Origins</Badge>
                <Badge className="bg-purple-500 hover:bg-purple-600">Health</Badge>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-emerald-300 to-emerald-100 flex items-center justify-center">
                    <div className="text-4xl">{article.emoji}</div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{article.title}</CardTitle>
                      <Badge className={article.category === "Coffee" ? "bg-emerald-500" : "bg-green-500"}>
                        {article.category}
                      </Badge>
                    </div>
                    <CardDescription>{article.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{article.excerpt}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {article.tags.map((tag, tagIndex) => (
                        <div key={tagIndex} className="flex items-center text-xs text-muted-foreground">
                          <Tag className="mr-1 h-3 w-3" />
                          {tag}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="ghost" className="w-full justify-between">
                      <Link href={`/articles/${article.slug}`}>
                        Read Article
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
                          className="h-4 w-4"
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
            <Link href="/articles" className="text-primary font-medium">
              Articles
            </Link>
            <Link href="/blog" className="text-muted-foreground hover:text-foreground">
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

const articles = [
  {
    title: "The Art of Pour-Over Coffee",
    slug: "art-of-pour-over-coffee",
    date: "March 15, 2023",
    category: "Coffee",
    emoji: "☕",
    excerpt:
      "Discover the precision and craft behind the perfect pour-over coffee. This guide covers equipment, technique, and troubleshooting.",
    tags: ["Brewing Methods", "Equipment", "Technique"],
  },
  {
    title: "Green Tea: Health Benefits Explored",
    slug: "green-tea-health-benefits",
    date: "February 28, 2023",
    category: "Tea",
    emoji: "🍵",
    excerpt:
      "An evidence-based look at the numerous health benefits of green tea, from antioxidants to potential disease prevention.",
    tags: ["Health", "Antioxidants", "Research"],
  },
  {
    title: "Coffee Bean Origins: Ethiopia",
    slug: "coffee-bean-origins-ethiopia",
    date: "January 12, 2023",
    category: "Coffee",
    emoji: "🌍",
    excerpt:
      "Explore the birthplace of coffee and how Ethiopian beans develop their distinctive floral and fruity flavor profiles.",
    tags: ["Origins", "Flavor Profiles", "History"],
  },
  {
    title: "Exploring Rooibos: The Red Bush Tea",
    slug: "exploring-rooibos-red-bush-tea",
    date: "December 5, 2022",
    category: "Tea",
    emoji: "🌿",
    excerpt:
      "A deep dive into South Africa's caffeine-free rooibos tea, its production process, and unique health properties.",
    tags: ["Herbal Tea", "Caffeine-Free", "South Africa"],
  },
  {
    title: "The Science of Coffee Extraction",
    slug: "science-of-coffee-extraction",
    date: "November 18, 2022",
    category: "Coffee",
    emoji: "🔬",
    excerpt:
      "Understanding the chemistry behind coffee extraction and how it affects flavor, body, and aroma in your cup.",
    tags: ["Chemistry", "Extraction", "Flavor"],
  },
  {
    title: "Japanese Tea Ceremony: Tradition & Practice",
    slug: "japanese-tea-ceremony",
    date: "October 30, 2022",
    category: "Tea",
    emoji: "🏯",
    excerpt:
      "An introduction to the cultural significance, rituals, and aesthetic principles of the Japanese tea ceremony.",
    tags: ["Culture", "Matcha", "Ritual"],
  },
]

