import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Fix the helper function to use proper TypeScript typing
function getBadgeColor(category: string): string {
  switch (category) {
    case "Coffee":
      return "bg-blue-500 hover:bg-blue-600"
    case "Tea":
      return "bg-green-500 hover:bg-green-600"
    case "Brewing":
      return "bg-amber-500 hover:bg-amber-600"
    case "Community":
      return "bg-purple-500 hover:bg-purple-600"
    case "News":
      return "bg-red-500 hover:bg-red-600"
    case "Research":
      return "bg-purple-500 hover:bg-purple-600"
    case "Education":
      return "bg-indigo-500 hover:bg-indigo-600"
    default:
      return "bg-gray-500 hover:bg-gray-600"
  }
}

const websites = [
  {
    name: "Coffee Diff",
    url: "https://coffeediff.co.uk/",
    tagline: "A comparison site of most coffee roasters in the UK",
    description:
      "Allows you to filter by different origins, roast levels, varieties, tasting notes, and more. I wish that I discovered this website earlier, there's no site that comes close to displaying this level of information",
    category: "Coffee",
    tags: ["Purchasing"],
  },
  {
    name: "International Coffee Organization",
    url: "https://ico.org/",
    tagline: "An intergovernmental organization for coffee",
    description: (
      <>
        <span>
          In its
          <span> </span>
          <Link
            href="https://ico.org/what-we-do/about-us/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            own words
          </Link>
          , the mission of the Organization is to strengthen the global coffee sector and promote its sustainable
          expansion in a market-based environment for the benefit of all actors in the Global Coffee Value Chain
          (G-CVC).
        </span>
      </>
    ),
    category: "Coffee",
    tags: ["Education", "Industry", "Research"],
  },
  {
    name: "Specialty Coffee Association",
    url: "https://sca.coffee/",
    tagline: "Global organization for specialty coffee professionals",
    description:
      "The Specialty Coffee Association (SCA) is a global organization dedicated to advancing and promoting specialty coffee.",
    category: "Education",
    tags: ["Industry", "Standards", "Certification", "Events"],
  },
  {
    name: "World Coffee Research",
    url: "https://worldcoffeeresearch.org/resources",
    tagline: "Scientific research for the global coffee industry",
    description: "Resources include a catalog of varieties, reports, and more.",
    category: "Research",
    tags: ["Science", "Varieties", "Agriculture", "Sustainability"],
  },
  {
    name: "Coffee Lit Review",
    url: "https://pages.uoregon.edu/chendon/coffee_literature/coffee_lit_rev/",
    tagline: "Academic coffee research repository",
    description: "Research papers discussed on the Coffee Lit Review podcast",
    category: "Research",
    tags: ["Academic", "Science", "Podcast", "Literature"],
  },
  {
    name: "Robert McKeon Aloe's Coffee Articles",
    url: "https://rmckeon.medium.com/my-links-5de9eb69c26b",
    tagline: "Data science and coffee analysis",
    description: "Articles by Robert McKeon Aloe, lots of articles and data science relating to coffee",
    category: "Coffee",
    tags: ["Data Science", "Analysis", "Research", "Articles"],
  },
  {
    name: "Christopher Feran's Blog",
    url: "https://christopherferan.com/christopher-feran/blog/",
    tagline: "Insights from a coffee professional",
    description: "Coffee blog with professional insights and industry perspectives",
    category: "Coffee",
    tags: ["Blog", "Industry", "Professional"],
  },
]

export default function WebsitesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="text-lg font-bold">
            everythingextracted.com
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/resources" className="text-sm font-medium text-primary">
              Useful Resources
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary">
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Websites</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  An assortment of interesting websites that I have discovered
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {websites.map((website, index) => (
                <Card
                  key={index}
                  className="flex flex-col overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-xl">{website.name}</CardTitle>
                        <div className="h-1 w-12 bg-blue-500 my-2"></div>
                      </div>
                    </div>
                    <CardDescription>{website.tagline}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="text-sm text-muted-foreground mb-4">{website.description}</div>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button asChild variant="ghost" className="w-full justify-between hover:bg-muted/50">
                      <Link href={website.url} target="_blank" rel="noopener noreferrer">
                        Visit Website
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Button asChild variant="outline" className="gap-2">
                <Link href="/resources">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Resources
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
            <Link href="/resources" className="text-primary font-medium">
              Useful Resources
            </Link>
            <Link href="/blog" className="text-muted-foreground hover:text-foreground">
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
