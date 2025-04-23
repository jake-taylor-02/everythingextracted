import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const books = [
  {
    title: "The World Atlas of Coffee",
    author: "James Hoffmann",
    url: "https://www.amazon.com/World-Atlas-Coffee-Explored-Explained/dp/1784724297/",
    description:
      "A comprehensive guide to coffee origins, varieties, and brewing methods. James Hoffmann, a World Barista Champion, takes readers on a journey through coffee-growing regions and explains how geography affects flavor.",
    published: "2018",
    category: "Coffee",
    tags: ["Origins", "Varieties", "Brewing", "Reference"],
  },
  {
    title: "The Book of Tea",
    author: "Kakuzo Okakura",
    url: "https://www.amazon.com/Book-Tea-Kakuzo-Okakura/dp/1611802184/",
    description:
      "A classic work on the Japanese tea ceremony and its cultural significance. Written in 1906, this book explores the philosophy of tea and its relationship to Japanese aesthetics and Zen Buddhism.",
    published: "1906 (many editions)",
    category: "Tea",
    tags: ["Philosophy", "Japanese Tea", "Culture", "Classic"],
  },
  {
    title: "Craft Coffee: A Manual",
    author: "Jessica Easto",
    url: "https://www.amazon.com/Craft-Coffee-Manual-Brewing-Better/dp/1572842334/",
    description:
      "A practical guide to brewing better coffee at home. Jessica Easto breaks down different brewing methods with step-by-step instructions, troubleshooting tips, and explanations of coffee science.",
    published: "2017",
    category: "Brewing",
    tags: ["Home Brewing", "Techniques", "Equipment", "Practical"],
  },
  {
    title: "Tea: History, Terroirs, Varieties",
    author: "Kevin Gascoyne, François Marchand, Jasmin Desharnais, and Hugo Américi",
    url: "https://www.amazon.com/Tea-Terroirs-Varieties-Kevin-Gascoyne/dp/0228100275/",
    description:
      "An authoritative guide to tea from the experts at Camellia Sinensis Tea House. This book covers tea production, varieties, brewing techniques, and includes detailed tasting notes for over 100 teas.",
    published: "2018",
    category: "Tea",
    tags: ["Varieties", "Tasting", "Production", "Reference"],
  },
  {
    title: "The Coffee Roaster's Companion",
    author: "Scott Rao",
    url: "https://www.scottrao.com/the-coffee-roasters-companion",
    description:
      "A technical guide to coffee roasting. Scott Rao shares his expertise on roasting theory, equipment, and techniques, with a focus on developing consistent and high-quality roast profiles.",
    published: "2014",
    category: "Coffee",
    tags: ["Roasting", "Technical", "Professional", "Science"],
  },
  {
    title: "Uncommon Grounds",
    author: "Mark Pendergrast",
    url: "https://www.amazon.com/Uncommon-Grounds-History-Transformed-World/dp/046501836X/",
    description:
      "A comprehensive history of coffee and its impact on commerce, politics, and culture. Mark Pendergrast traces coffee's journey from its discovery to its role in the modern global economy.",
    published: "2019 (revised edition)",
    category: "History",
    tags: ["Social History", "Economics", "Politics", "Culture"],
  },
  {
    title: "For All the Tea in China",
    author: "Sarah Rose",
    url: "https://www.amazon.com/All-Tea-China-England-Favorite/dp/0143118749/",
    description:
      "The dramatic story of how Britain broke China's tea monopoly. Sarah Rose recounts how Robert Fortune, a Scottish botanist, stole tea plants and expertise from China to establish tea plantations in British India.",
    published: "2011",
    category: "History",
    tags: ["Colonial History", "Trade", "Botany", "China"],
  },
  {
    title: "Water for Coffee",
    author: "Maxwell Colonna-Dashwood and Christopher H. Hendon",
    url: "https://www.amazon.com/Water-Coffee-Maxwell-Colonna-Dashwood/dp/0692742549/",
    description:
      "A scientific exploration of how water chemistry affects coffee extraction and flavor. This book explains complex concepts in accessible terms and offers practical advice for optimizing water for brewing.",
    published: "2015",
    category: "Science",
    tags: ["Chemistry", "Extraction", "Brewing", "Technical"],
  },
]

export default function BooksPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Books</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Essential reading for coffee and tea enthusiasts
                </p>
              </div>
            </div>

            {/*

            <div className="grid gap-8 md:grid-cols-2">
              {books.map((book, index) => (
                <Card
                  key={index}
                  className="flex flex-col overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-xl">{book.title}</CardTitle>
                        <div className="h-1 w-12 bg-blue-500 my-2"></div>
                      </div>
                    </div>
                    <CardDescription>by {book.author}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="text-sm text-muted-foreground mb-4">{book.description}</div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-medium">Published:</span> {book.published}
                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button asChild variant="ghost" className="w-full justify-between hover:bg-muted/50">
                      <Link href={book.url} target="_blank" rel="noopener noreferrer">
                        Find Book
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            */}
            
            <div className="prose prose-gray max-w-3xl mx-auto">
              <p className="text-center text-muted-foreground italic">This page is coming soon.</p>
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
    </div>
  )
}
