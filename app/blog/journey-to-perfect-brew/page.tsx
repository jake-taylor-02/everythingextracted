import Link from "next/link"
import { ArrowLeft, Calendar, Coffee, Clock, ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function BlogPostPage() {
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
        <article className="container max-w-3xl py-10">
          <div className="mb-4">
            <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Blog
            </Link>
          </div>

          <div className="mb-8">
            <div
              className="h-64 w-full rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-100 mb-8 flex items-end p-6"
              style={{
                backgroundImage: "linear-gradient(to bottom right, #10b981, #d1fae5)",
              }}
            >
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12 border-2 border-white">
                  <AvatarImage src="/placeholder.svg?height=48&width=48" />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <div className="text-white">
                  <div className="text-lg font-medium">Alex Johnson</div>
                  <div className="flex items-center text-sm">
                    <Calendar className="mr-1 h-4 w-4" />
                    March 20, 2023
                    <span className="mx-2">•</span>
                    <Clock className="mr-1 h-4 w-4" />8 min read
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-4xl font-bold tracking-tight mb-2">My Journey to Finding the Perfect Brew</h1>
            <p className="text-xl text-muted-foreground mb-4">
              A personal exploration through coffee varieties and brewing methods
            </p>
            <Badge className="bg-emerald-500">Coffee</Badge>
          </div>

          <div className="prose prose-stone max-w-none">
            <p className="lead">
              Six years ago, I was a casual coffee drinker who thought a $20 drip machine from the department store was
              good enough. I'd dump pre-ground coffee from a can into the filter, press a button, and accept whatever
              came out. Little did I know I was about to embark on a journey that would transform not just my mornings,
              but my entire relationship with coffee.
            </p>

            <h2>The Awakening</h2>
            <p>
              It all started with a gift—a bag of freshly roasted beans from a local roaster. The packaging was simple,
              but it listed tasting notes like "blueberry, chocolate, and citrus." I remember laughing. How could coffee
              taste like blueberries? But curiosity got the better of me, so I ground those beans in a cheap blade
              grinder and brewed them in my trusty drip machine.
            </p>
            <p>
              The result was... different. Not life-changing, but definitely not the bitter, one-dimensional coffee I
              was used to. There was something there—a complexity I hadn't experienced before. That was the moment the
              seed was planted. What if coffee could be more than just a caffeine delivery system?
            </p>

            <h2>The French Press Phase</h2>
            <p>
              My first "upgrade" was a French press. It cost $30, which felt extravagant at the time for a coffee maker.
              I also invested in a burr grinder after reading that consistent grind size was crucial for extraction.
            </p>
            <p>
              The difference was immediate and substantial. My coffee suddenly had body—a richness and weight that my
              drip machine never produced. I started to understand what people meant by "mouthfeel." The French press
              became my daily driver for nearly a year, during which I experimented with different beans, grind sizes,
              and steep times.
            </p>
            <p>
              But I also discovered the downsides: the sediment at the bottom of the cup, the somewhat laborious
              cleaning process, and the fact that the coffee would continue to extract if I didn't drink it quickly
              enough. I was ready for something new.
            </p>

            <div className="bg-emerald-50 p-6 rounded-lg my-8 border border-emerald-200">
              <h3 className="text-lg font-semibold mb-2 text-emerald-800">French Press Lessons</h3>
              <ul className="space-y-2 text-emerald-900">
                <li>
                  <strong>Grind size matters:</strong> Too fine and you get mud, too coarse and you get weak coffee
                </li>
                <li>
                  <strong>Water temperature is crucial:</strong> Just off boil (around 200°F/93°C) works best
                </li>
                <li>
                  <strong>Timing is everything:</strong> 4 minutes is standard, but adjust to taste
                </li>
                <li>
                  <strong>The plunge:</strong> Slow and steady wins the race
                </li>
              </ul>
            </div>

            <h2>The Pour-Over Revelation</h2>
            <p>
              My next step was pour-over brewing. I started with a ceramic Hario V60, attracted by its elegant
              simplicity. This method required more attention and precision than the French press, but the results were
              worth it. The clarity of flavor was a revelation—I could finally taste those blueberry notes!
            </p>
            <p>
              Pour-over became an obsession. I bought a gooseneck kettle for better control, a scale to measure coffee
              and water precisely, and started timing my pours with a stopwatch. I experimented with different pour
              patterns, water temperatures, and ratios. Each variable seemed to make a noticeable difference in the cup.
            </p>
            <p>
              This was also when I started buying more expensive single-origin beans. Ethiopian Yirgacheffe, Kenyan AA,
              Panama Gesha—each origin had its distinct character that the pour-over method showcased beautifully. I was
              spending more on coffee than ever before, but the experience felt worth every penny.
            </p>

            <h2>The Espresso Rabbit Hole</h2>
            <p>
              Two years into my coffee journey, I made what my wallet still considers a mistake: I bought an espresso
              machine. Not a cheap one either, but a prosumer model with a built-in grinder that cost more than my first
              car. I justified it as an "investment in daily happiness."
            </p>
            <p>
              Espresso was a whole new world of complexity and frustration. Suddenly, I was dealing with variables I'd
              never considered before: pump pressure, basket size, tamping pressure, distribution techniques. My first
              attempts were disasters—sour shots that made me wince, or bitter, over-extracted messes.
            </p>
            <p>
              It took months of practice, countless wasted beans, and hours watching YouTube tutorials before I could
              pull a decent shot consistently. But when it worked—when everything aligned perfectly—the result was
              magical. A properly extracted espresso had a sweetness and intensity that no other brewing method could
              match.
            </p>
            <p>
              I expanded into milk drinks, learning to steam milk to silky microfoam for lattes and cappuccinos. My
              kitchen counter was now dominated by coffee equipment, and my morning routine had expanded from 5 minutes
              to nearly 30. Friends started to worry.
            </p>

            <div className="bg-emerald-50 p-6 rounded-lg my-8 border border-emerald-200">
              <h3 className="text-lg font-semibold mb-2 text-emerald-800">Espresso Variables to Master</h3>
              <ul className="space-y-2 text-emerald-900">
                <li>
                  <strong>Dose:</strong> The amount of coffee (typically 18-20g for a double shot)
                </li>
                <li>
                  <strong>Yield:</strong> The amount of liquid espresso (typically aiming for a 1:2 ratio)
                </li>
                <li>
                  <strong>Time:</strong> Usually 25-30 seconds for extraction
                </li>
                <li>
                  <strong>Grind size:</strong> The most critical and finicky variable
                </li>
                <li>
                  <strong>Distribution and tamping:</strong> Ensuring even extraction
                </li>
              </ul>
            </div>

            <h2>Finding Balance</h2>
            <p>
              The espresso phase lasted about a year before I realized something important: I was spending more time
              fussing with equipment than actually enjoying coffee. The pursuit of the "perfect" shot had become
              stressful rather than pleasurable. I needed to find balance.
            </p>
            <p>
              I took a step back and evaluated what I truly enjoyed about coffee. Yes, I appreciated the complex flavors
              and the craft of preparation, but I also valued simplicity and consistency. I didn't want coffee to be a
              30-minute production every morning.
            </p>
            <p>
              This realization led me to my current setup, which I consider my personal sweet spot: an AeroPress for
              weekday mornings when time is limited, pour-over on weekends when I can savor the process, and the
              espresso machine for special occasions or when I'm entertaining guests.
            </p>

            <h2>The AeroPress: My Weekday Hero</h2>
            <p>
              The AeroPress has become my go-to brewing method for several reasons. It's quick (about 2 minutes from
              start to finish), nearly foolproof, and produces a clean cup with good body. It's also incredibly
              versatile—I can make a concentrated brew similar to espresso or a longer, more filter-like coffee
              depending on my mood.
            </p>
            <p>My current AeroPress recipe is simple but effective:</p>
            <ol>
              <li>18g of medium-fine ground coffee</li>
              <li>Water heated to 185°F (85°C)</li>
              <li>Inverted method: add coffee, then water</li>
              <li>Stir for 10 seconds</li>
              <li>Steep for 1 minute</li>
              <li>Flip and press slowly for 30 seconds</li>
            </ol>
            <p>
              This produces a full-bodied cup with excellent clarity of flavor and none of the sediment you get with a
              French press. Clean-up is also a breeze—just eject the puck and rinse. Perfect for busy mornings.
            </p>

            <h2>The Perfect Brew: A Moving Target</h2>
            <p>
              After five years of exploration, I've learned that the "perfect brew" isn't a fixed destination but a
              moving target. It changes based on the beans, my mood, the season, and even what I'm eating with my
              coffee. Some days I want the bright acidity of an Ethiopian pour-over; other days I crave the comforting
              richness of a French press brew.
            </p>
            <p>
              What matters most is not the equipment or the technique, but the mindfulness and appreciation I bring to
              the process. The perfect brew is the one that brings you joy in that moment.
            </p>
            <p>That said, I do have some hard-earned wisdom to share:</p>
            <ul>
              <li>
                <strong>Fresh beans matter more than expensive equipment.</strong> Buy from local roasters when
                possible, and never more than you can use within 2-3 weeks.
              </li>
              <li>
                <strong>Water quality is non-negotiable.</strong> If your tap water tastes bad, your coffee will too. I
                use filtered water for all my brewing.
              </li>
              <li>
                <strong>A good grinder is your best investment.</strong> Consistent grind size is crucial for even
                extraction.
              </li>
              <li>
                <strong>Keep it simple until you master the basics.</strong> Don't try to control every variable at
                once.
              </li>
              <li>
                <strong>Trust your taste buds.</strong> If you like it, it's good coffee—regardless of what experts say.
              </li>
            </ul>

            <h2>The Journey Continues</h2>
            <p>
              My coffee journey is far from over. I'm still learning, still experimenting, and still finding joy in the
              ritual of brewing. I've cut back on the gear acquisition (mostly), focusing instead on exploring different
              beans and refining my technique with the equipment I have.
            </p>
            <p>
              Coffee has become more than just a beverage for me—it's a daily pleasure, a creative outlet, and a
              connection to a global community of growers, roasters, and enthusiasts. What began as a simple curiosity
              has enriched my life in ways I never expected.
            </p>
            <p>
              So if you're just starting your own coffee journey, I encourage you to embrace the exploration. Be patient
              with yourself, trust your palate, and remember that the perfect brew is whatever brings you joy in the
              moment. The destination is wonderful, but the journey itself is where the real magic happens.
            </p>
          </div>

          <Separator className="my-10" />

          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-2">About the Author</h3>
              <div className="flex items-start space-x-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Alex Johnson</p>
                  <p className="text-sm text-muted-foreground">
                    Coffee enthusiast, home barista, and software developer based in Portland. Writes about coffee,
                    brewing techniques, and the perfect cup.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-2">Share this post</h3>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon">
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
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Share on Facebook</span>
                </Button>
                <Button variant="outline" size="icon">
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
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Share on Twitter</span>
                </Button>
                <Button variant="outline" size="icon">
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
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">Share on LinkedIn</span>
                </Button>
                <Button variant="outline" size="icon">
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
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Share on Instagram</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-medium mb-4">Related Posts</h3>
            <div className="grid gap-6 sm:grid-cols-2">
              <Link href="/blog/coffee-shop-hopping-portland" className="group block">
                <div className="space-y-2">
                  <div className="h-40 rounded-lg bg-gradient-to-br from-blue-400 to-blue-100 group-hover:opacity-90 transition-opacity"></div>
                  <h4 className="font-medium group-hover:text-primary transition-colors">
                    Coffee Shop Hopping in Portland
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    A tour of the city's best cafes and their unique offerings
                  </p>
                </div>
              </Link>
              <Link href="/blog/switched-from-coffee-to-tea" className="group block">
                <div className="space-y-2">
                  <div className="h-40 rounded-lg bg-gradient-to-br from-green-400 to-green-100 group-hover:opacity-90 transition-opacity"></div>
                  <h4 className="font-medium group-hover:text-primary transition-colors">
                    How I Switched from Coffee to Tea
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    A caffeine journey and the surprising benefits of making the switch
                  </p>
                </div>
              </Link>
            </div>
          </div>

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

