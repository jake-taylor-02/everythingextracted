import Link from "next/link"
import { ArrowLeft, Calendar, Clock, ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

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
              About Me
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
            <h1 className="text-4xl font-bold tracking-tight mb-2">Tracking my tea collection</h1>
            <p className="text-xl text-muted-foreground mb-4">20+ teas later and I'm slowly figuring out what I like</p>

            {/* Date and Reading Time */}
            <div className="flex items-center text-sm text-muted-foreground mb-4">
              <Calendar className="mr-1 h-4 w-4" />
              September 5, 2025
              <span className="mx-2">•</span>
              <Clock className="mr-1 h-4 w-4" />3 min read
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose prose-stone max-w-none">
            {/* First Section */}
            <h2>When I first started drinking tea</h2>
            <p>
              Until last year, the only time I would drink tea was during times of illness, and my tea of choice was
              Twinings Lemon & Ginger with some honey. Since then, I've come to learn what tea actually is, and I've
              tried many, mostly from What-Cha and Lalani & Co, with a few odd ones here and there. I'm often hesitant
              to order tea in a café, as it is usually an afterthought (even in places that are very particular about
              their coffee), and I only know of a few places in London that take tea seriously.
            </p>

            <h2>How I prepare tea at home</h2>

            <p>
              Let's be honest: a regular kettle, scale, thermometer, glass or ceramic vessel, strainer, and good soft
              water will get you 95% of the way to getting the most out of a high-quality tea, and most of us already
              have these things in the kitchen. I already had a few items from making pour-over coffee, such as a
              temperature-controllable kettle and a small scale, but these are by no means necessary.
            </p>

            <p>
              The most-used piece of equipment I've purchased is the Gong Fu Glass Pot from Mei Leaf. It has a built-in
              strainer that catches most of the leaf fragments, allows me to see how the colour of the brew changes, and
              is easy to clean between brews. It has a capacity of around 200ml, which is perfect for one person, and
              generally, I use around 3g of tea per session. Most of the teas I've tried can be re-brewed at least three
              times, some up to six or seven.
            </p>

            <h2>Tracking my collection</h2>

            <p>
              I created this visualisation quickly using Flourish, and although I'm still making many changes, it gives
              me a good idea of what I've tried and where I should go next. There are a few tea estates I've sampled
              multiple teas from, such as Obubu in Japan, which you'll see when you zoom in. I'm also working on a
              similar visualisation that shows both the coffees and teas I've tried, which I plan to integrate.
            </p>
          </div>

          <iframe
            src="https://flo.uri.sh/visualisation/24986922/embed"
            title="Interactive or visual content"
            className="flourish-embed-iframe"
            frameBorder="0"
            scrolling="no"
            style={{ width: "100%", height: "600px" }}
            sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
          />

          <div style={{ width: "100%", marginTop: "4px", textAlign: "right" }}>
            <a
              className="flourish-credit"
              href="https://public.flourish.studio/visualisation/24986922/?utm_source=embed&utm_campaign=visualisation/24986922"
              target="_top"
              style={{ textDecoration: "none" }}
            >
              <img
                alt="Made with Flourish"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/made_with_flourish%281%29-LTAUSL9CuvaLJikUlEb5D2aWX5OV1k.svg"
                style={{ width: "105px", height: "16px", border: "none", margin: "0" }}
              />
            </a>
          </div>

        
 

          {/* Back to Blog Button */}
          <div className="mt-10 flex justify-center">
            <Button asChild variant="outline" className="gap-2 bg-transparent">
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
