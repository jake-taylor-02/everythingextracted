import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const podcasts = [
  {
    name: "Making Coffee with Lucia Solis",
    host: "Hosted by Lucia Solis",
    url: "https://open.spotify.com/show/2LeX6OwWSFj4OHh5yqP3y0",
    spotifyId: "2LeX6OwWSFj4OHh5yqP3y0",
    description:
      "A behind the scenes look at what goes into making one of the world's favorite beverages. Lucia is a former winemaker turned coffee processing specialist. She consults with coffee growers and producers all over the world, helping them improve quality and increase value through improved processing methods.",
  },
  {
    name: "Boss Barista",
    host: "Hosted by Ashley Rodriguez",
    url: "https://open.spotify.com/show/6UwLRZpDaRSSBxZEMQ0X94",
    spotifyId: "6UwLRZpDaRSSBxZEMQ0X94",
    description:
      "Ashley Rodriguez talks to folks about gender, race, sex, and other important issues in coffee. We invite people from all realms of the coffee world to share stories and engage in discussion - we want to hear from you!",
  },
  {
    name: "Keys to the Shop",
    host: "Hosted by Chris Deferio",
    url: "https://open.spotify.com/show/3oo9RbKT8tXmEDsXezeKje",
    spotifyId: "3oo9RbKT8tXmEDsXezeKje",
    description:
      "Keys to the Shop is a podcast designed to provide you with insights, inspiration, and the tools you will need to grow and advance in your coffee career. We learn from experts both in and outside the coffee industry as they deliver specific, practical, and actionable advice about barista work, coffee, management, leadership, and personal development. Welcome!",
  },
  {
    name: "Tim Wendelboe Podcast",
    host: "Hosted by Tim Wendelboe",
    url: "https://open.spotify.com/show/0Ww2PFYCqFIPznQLA6SgHt",
    spotifyId: "0Ww2PFYCqFIPznQLA6SgHt",
    description: "A podcast by award winning roaster and 2004 World Barista Champion, Tim Wendelboe",
  },
  {
    name: "Filter Stories - Coffee Documentaries",
    host: "Hosted by James Harper",
    url: "https://open.spotify.com/show/070rR9RuQFQk4pz3fXbmCK?si=1a04a106c4d94bcb&nd=1&dlsi=6f783b279c604ade",
    spotifyId: "070rR9RuQFQk4pz3fXbmCK",
    description:
      "Coffee stories with an extra shot of history and science. Filter Stories is a podcast revealing coffee's hidden microscopic secrets, its powerful past, and how your choice of beans impacts tens of millions of people.",
  },
  {
    name: "Adventures in Coffee",
    host: "Hosted by Scott Bentley & Jools Walker",
    url: "https://open.spotify.com/show/2PZlRpOYxXyCgxR79eRRtx?si=12dea9d14ff446c7&nd=1&dlsi=4ee1f5a2a15941ec",
    spotifyId: "2PZlRpOYxXyCgxR79eRRtx?si=12dea9d14ff446c7&nd=1&dlsi=4ee1f5a2a15941ec",
    description:
      "Adventures in Coffee is a BBC / NPR-style show where we take you around the world to hear surprising stories about your cup of coffee. We never get too geeky, you're guaranteed a laugh every episode and you'll never see your cup of coffee the same way again.",
  },
  {
    name: "The Science of Coffee",
    host: "Hosted by James Harper",
    url: "https://open.spotify.com/show/4M0PrkxtgSPSSO6AdSATPV",
    spotifyId: "4M0PrkxtgSPSSO6AdSATPV",
    description:
      "The Science of Coffee is a journey into coffee's hidden microscopic secrets to help you make even better coffee at home. Documentary maker and coffee professional James Harper travels the world and speaks with leading coffee scientists to help you appreciate coffee more deeply. You are going to get taken into the science of water, coffee extraction, plant genetics, espresso technology, latte foam, sonic seasoning, our sense of taste and smell, organic farming, roasting, grinding and freshness, and how to think like a scientist.",
  },
  {
    name: "Coffee Literature Review",
    host: "Hosted by Coffee Scientists",
    url: "https://open.spotify.com/show/7oshVWtrwTnoxTdB3Ual4x",
    spotifyId: "7oshVWtrwTnoxTdB3Ual4x",
    description:
      "A review of a recent scientific article published about or adjacent to coffee. Each episode features a guest professional who will help discuss the paper. Sometimes there will be other guests to discuss news, current events, and topical items.",
  },
  {
    name: "Coffee 101",
    host: "Hosted by Kenneth Thomas",
    url: "https://open.spotify.com/show/19ftGkWQLdcoxdebylZAN4",
    spotifyId: "19ftGkWQLdcoxdebylZAN4",
    description:
      "Coffee 101 is an educational show on all things coffee. The host, Kenneth Thomas, starts with the most basic questions about coffee and builds your knowledge from there. If you love coffee, are curious about coffee, or you're a business just looking for a resource to train your team, Coffee 101 is without question the show for you!",
  },
  {
    name: "The Coffee Podcast",
    host: "Hosted by Jesse Hartman",
    url: "https://open.spotify.com/show/7pqqij42siLuxlY9N2MnDd?si=a7354a4a94a44554&nd=1&dlsi=6b58f239d2b64512",
    spotifyId: "7pqqij42siLuxlY9N2MnDd?si=a7354a4a94a44554&nd=1&dlsi=6b58f239d2b64512",
    description:
      "Are you a coffee lover? What if I told you there's so much more to coffee than just enjoying the ritual and drinking it? What if I told you there's a whole world to explore, and it all starts with looking beyond your cup? That's what The Coffee Podcast sets out to do. In the first 20 or so episodes, we discussed how to brew better coffee, but now, 8 years in the making, we focus on People-Focused Coffee Talk. Join us in the conversation as we learn about history, science, art, and more through the lens of coffee!",
  },
]

export default function PodcastsPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Podcasts</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  These are mostly coffee focused, but I'm always finding and adding more
                </p>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {podcasts.map((podcast, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-xl">{podcast.name}</CardTitle>
                    <CardDescription>{podcast.host}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      {podcast.name === "Making Coffee with Lucia Solis" ? (
                        <iframe
                          src="https://open.spotify.com/embed/show/2LeX6OwWSFj4OHh5yqP3y0"
                          width="100%"
                          height="152"
                          frameBorder="0"
                          allowTransparency="true"
                          allow="encrypted-media"
                          title={`Spotify player for ${podcast.name}`}
                        ></iframe>
                      ) : (
                        <iframe
                          src={`https://open.spotify.com/embed/show/${podcast.spotifyId}`}
                          width="100%"
                          height="152"
                          frameBorder="0"
                          allowTransparency="true"
                          allow="encrypted-media"
                          title={`Spotify player for ${podcast.name}`}
                        ></iframe>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{podcast.description}</p>
                  </CardContent>
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
    </div>
  )
}
