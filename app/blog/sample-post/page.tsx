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
            <h1 className="text-4xl font-bold tracking-tight mb-2">Sample Blog Post Title</h1>
            <p className="text-xl text-muted-foreground mb-4">
              This is a subtitle or brief description of what this post is about
            </p>

            {/* Date and Reading Time */}
            <div className="flex items-center text-sm text-muted-foreground mb-4">
              <Calendar className="mr-1 h-4 w-4" />
              March 20, 2023
              <span className="mx-2">•</span>
              <Clock className="mr-1 h-4 w-4" />6 min read
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose prose-stone max-w-none">
            {/* Introduction */}
            <p className="lead">
              This is a lead paragraph that introduces the topic of your blog post. It should be engaging and draw the
              reader in. You might want to use a slightly larger font or different styling to make it stand out from the
              rest of the text.
            </p>

            {/* First Section */}
            <h2>First Section Heading</h2>
            <p>
              This is a regular paragraph of text. You can write about your topic here. Make sure to include enough
              detail to be informative but not so much that it becomes overwhelming. Break up your content into
              manageable chunks with headings and subheadings.
            </p>
            <p>
              Here's another paragraph continuing the discussion. You can include as many paragraphs as needed in each
              section. Remember to keep your paragraphs focused on a single idea or point to make your content easier to
              read and understand.
            </p>

            {/* Coffee Key Takeaways Box (Amber) */}
            <div className="bg-amber-50 p-6 rounded-lg my-8 border border-amber-200">
              <h3 className="text-lg font-semibold mb-2 text-amber-800">Coffee Key Takeaways</h3>
              <ul className="space-y-2 text-amber-900">
                <li>
                  <strong>Freshness matters:</strong> Coffee beans are at their best within 2-4 weeks of roasting
                </li>
                <li>
                  <strong>Grind size affects extraction:</strong> Finer grinds extract faster, coarser grinds extract
                  slower
                </li>
                <li>
                  <strong>Water temperature is crucial:</strong> Ideal brewing temperature is 195-205°F (90-96°C)
                </li>
                <li>
                  <strong>Brewing ratio:</strong> A good starting point is 1:16 (coffee to water) for most brewing
                  methods
                </li>
              </ul>
            </div>

            {/* Unordered List Example */}
            <h3>Unordered List Example</h3>
            <p>Here are some key points to consider:</p>
            <ul>
              <li>First important point that readers should know about</li>
              <li>Second point with some additional information</li>
              <li>Third point that might include a bit more detail or an example of the concept being discussed</li>
              <li>Fourth point wrapping up this list of items</li>
            </ul>

            {/* Blockquote Example */}
            <blockquote>
              This is a blockquote. You can use it to highlight a quote from an expert, a customer testimonial, or an
              important point you want to emphasize. The styling makes it stand out from the regular text.
            </blockquote>

            {/* Tea Key Takeaways Box (Green) */}
            <div className="bg-green-50 p-6 rounded-lg my-8 border border-green-200">
              <h3 className="text-lg font-semibold mb-2 text-green-800">Tea Key Takeaways</h3>
              <ul className="space-y-2 text-green-900">
                <li>
                  <strong>Water temperature varies by tea type:</strong> Green tea (160-180°F), Black tea (200-212°F)
                </li>
                <li>
                  <strong>Steeping time matters:</strong> Delicate teas need less time, robust teas can steep longer
                </li>
                <li>
                  <strong>Quality of water:</strong> Filtered water produces cleaner flavors than tap water
                </li>
                <li>
                  <strong>Storage considerations:</strong> Keep tea away from light, moisture, heat, and strong odors
                </li>
              </ul>
            </div>

            {/* Second Section with Image */}
            <h2>Section With Featured Image</h2>
            <p>
              Before we dive into the image, let's discuss why visual elements are important in blog posts. Images break
              up text, illustrate concepts, and make your content more engaging and shareable.
            </p>

            {/* Large Image */}
            <figure className="my-8">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Description of the image"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-center text-sm text-muted-foreground mt-2">
                Figure 1: Caption for this image explaining what it shows or its relevance to the content
              </figcaption>
            </figure>

            <p>
              After the image, continue with your content. Refer back to the image if relevant to help readers connect
              the visual information with your written content.
            </p>

            {/* Water Key Takeaways Box (Blue) */}
            <div className="bg-blue-50 p-6 rounded-lg my-8 border border-blue-200">
              <h3 className="text-lg font-semibold mb-2 text-blue-800">Water Quality Takeaways</h3>
              <ul className="space-y-2 text-blue-900">
                <li>
                  <strong>Mineral content:</strong> Ideal TDS (Total Dissolved Solids) range is 75-250 ppm
                </li>
                <li>
                  <strong>pH balance:</strong> Slightly alkaline water (pH 7-8) works best for most brewing
                </li>
                <li>
                  <strong>Chlorine affects flavor:</strong> Filtered or bottled water avoids chlorine taste
                </li>
                <li>
                  <strong>Hardness matters:</strong> Moderately hard water extracts flavor better than soft water
                </li>
              </ul>
            </div>

            {/* Table Section */}
            <h2>Section With Table</h2>
            <p>
              Tables are excellent for presenting structured data or making comparisons. Here's an example table that
              you might use in a coffee blog:
            </p>

            <div className="my-8">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Brewing Method</TableHead>
                    <TableHead>Grind Size</TableHead>
                    <TableHead>Brew Time</TableHead>
                    <TableHead>Water Temperature</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>French Press</TableCell>
                    <TableCell>Coarse</TableCell>
                    <TableCell>4 minutes</TableCell>
                    <TableCell>200°F (93°C)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Pour Over</TableCell>
                    <TableCell>Medium</TableCell>
                    <TableCell>2-3 minutes</TableCell>
                    <TableCell>205°F (96°C)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Espresso</TableCell>
                    <TableCell>Fine</TableCell>
                    <TableCell>25-30 seconds</TableCell>
                    <TableCell>200°F (93°C)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>AeroPress</TableCell>
                    <TableCell>Medium-Fine</TableCell>
                    <TableCell>1-2 minutes</TableCell>
                    <TableCell>185°F (85°C)</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Table 1: Comparison of different coffee brewing methods and their parameters
              </p>
            </div>

            {/* Milk Key Takeaways Box (Purple) */}
            <div className="bg-purple-50 p-6 rounded-lg my-8 border border-purple-200">
              <h3 className="text-lg font-semibold mb-2 text-purple-800">Milk & Alternatives Takeaways</h3>
              <ul className="space-y-2 text-purple-900">
                <li>
                  <strong>Fat content affects texture:</strong> Whole milk (3-4% fat) creates the richest microfoam
                </li>
                <li>
                  <strong>Temperature control:</strong> Steam milk to 140-150°F for optimal sweetness
                </li>
                <li>
                  <strong>Plant-based options:</strong> Oat milk tends to foam better than other alternatives
                </li>
                <li>
                  <strong>Freshness indicators:</strong> Fresh milk should have a clean, sweet aroma with no sour notes
                </li>
              </ul>
            </div>

            {/* Ordered List Example */}
            <h3>Ordered List Example</h3>
            <p>Follow these steps to achieve the best results:</p>
            <ol>
              <li>First step in the process with any necessary details</li>
              <li>Second step building on the first</li>
              <li>Third step with additional information</li>
              <li>Final step to complete the process</li>
            </ol>

            {/* Chocolate Key Takeaways Box (Brown) */}
            <div className="bg-[#f8f3e9] p-6 rounded-lg my-8 border border-[#e6d7bf]">
              <h3 className="text-lg font-semibold mb-2 text-[#8b5a2b]">Chocolate Takeaways</h3>
              <ul className="space-y-2 text-[#6b4423]">
                <li>
                  <strong>Cacao percentage matters:</strong> Higher percentages mean more intense, less sweet flavor
                </li>
                <li>
                  <strong>Origin affects flavor profile:</strong> Single-origin chocolates have distinctive taste notes
                </li>
                <li>
                  <strong>Tempering is crucial:</strong> Properly tempered chocolate has a satisfying snap and shine
                </li>
                <li>
                  <strong>Pairing principles:</strong> Dark chocolate pairs well with bold coffees, milk chocolate with
                  medium roasts
                </li>
              </ul>
            </div>

            {/* Conclusion */}
            <h2>Conclusion</h2>
            <p>
              Wrap up your blog post with a conclusion that summarizes the main points and provides a final thought or
              call to action. This helps reinforce what readers have learned and gives them clear next steps if
              appropriate.
            </p>
            <p>
              Remember that a good conclusion doesn't just repeat what you've already said but adds value by
              synthesizing the information or suggesting implications or applications of what you've discussed.
            </p>

            {/* Further Reading */}
            <h3>Further Reading</h3>
            <p>If you enjoyed this post, you might also be interested in:</p>
            <ul>
              <li>
                <Link href="/blog/journey-to-perfect-brew">My Journey to Finding the Perfect Brew</Link>
              </li>
              <li>
                <Link href="/blog/tea-ceremonies-around-world">Tea Ceremonies Around the World</Link>
              </li>
              <li>
                <Link href="/resources">Useful Resources for Coffee Enthusiasts</Link>
              </li>
            </ul>
          </div>

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

      {/* Footer - Standard across all pages */}
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
