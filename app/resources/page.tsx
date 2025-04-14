import Link from "next/link"
import { ArrowLeft, Globe, BookOpen, Headphones, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ResourcesPage() {
  const resources = [
    {
      name: "Websites",
      slug: "websites",
      description: "Online resources for coffee and tea enthusiasts",
      content:
        "Discover the best websites, blogs, and online communities dedicated to brewing, tasting, and learning about coffee and tea.",
      icon: <Globe className="h-5 w-5" style={{ color: "#EB5353" }} />,
      action: "Browse Websites",
      accentColor: "#EB5353",
    },
    {
      name: "Podcasts",
      slug: "podcasts",
      description: "Audio content for your brewing journey",
      content:
        "Listen to experts discuss brewing techniques, interview industry professionals, and share insights about coffee and tea culture.",
      icon: <Headphones className="h-5 w-5" style={{ color: "#F9D923" }} />,
      action: "Discover Podcasts",
      accentColor: "#F9D923",
    },
    {
      name: "Books",
      slug: "books",
      description: "Essential reading for coffee and tea lovers",
      content:
        "Explore recommended books covering everything from brewing fundamentals to deep dives into the history, science, and culture of coffee and tea.",
      icon: <BookOpen className="h-5 w-5" style={{ color: "#36AE7C" }} />,
      action: "View Book List",
      accentColor: "#36AE7C",
    },
    {
      name: "Academic Articles",
      slug: "academic-articles",
      description: "Research and scientific studies",
      content:
        "Access peer-reviewed research papers and academic studies on the chemistry, health effects, and agricultural aspects of coffee and tea.",
      icon: <FileText className="h-5 w-5" style={{ color: "#187498" }} />,
      action: "Browse Research",
      accentColor: "#187498",
    },
  ]

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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Useful Resources</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  A curated collection of the best coffee and tea resources.
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {resources.map((resource) => (
                <Link key={resource.name} href={`/resources/${resource.slug}`} className="group">
                  <Card className="overflow-hidden h-[360px] flex flex-col transition-all hover:shadow-md hover:-translate-y-1 duration-200">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        {resource.icon}
                        <CardTitle>{resource.name}</CardTitle>
                      </div>
                      <CardDescription>{resource.description}</CardDescription>
                      <div className="h-0.5 w-12 mt-2" style={{ backgroundColor: resource.accentColor }}></div>
                    </CardHeader>
                    <CardContent className="p-4 flex-grow">
                      <p className="text-sm text-muted-foreground line-clamp-3">{resource.content}</p>
                    </CardContent>
                    <CardFooter className="p-4 mt-auto">
                      <Button variant="ghost" className="w-full justify-between group-hover:bg-muted/50">
                        {resource.action}
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
    </div>
  )
}
