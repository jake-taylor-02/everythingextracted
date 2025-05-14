"use client"

import Link from "next/link"
import { ArrowLeft, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cite, References, type ReferenceNumbersMap } from "@/components/simple-reference"
import { useEffect } from "react"
import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend)

// Define reference numbers for this page
const pageReferenceNumbers: ReferenceNumbersMap = {
  britannica_theaceae: 1,
  rhs_camellia: 2,
  villa_landraces: 5,
  ishs_cultivars: 6,
  wikipedia_tea_processing: 8,
  tbrs2023: 7,
  fao2022: 9,
  statista2016: 10,
  caykur2025: 11,
  uk_turkey_fta: 12,
  barrys_tea: 13,
  klipopmekaar2023: 3,
  redespresso2023: 4,
  balentine1997: 14,
  harbowy1997: 15,
  amra2006: 16,
  gawel2001: 17,
  tfouni2018: 18,
  modernalkaloids: 19,
  theanine_content: 20,
  theanine_umami: 21,
  theanine_caffeine: 22,
  nelum2022: 23,
  shevchuk2020: 24,
}

export default function TeaOverviewPage() {
  useEffect(() => {
    const handleIframeMessages = (event) => {
      if (typeof event.data["datawrapper-height"] !== "undefined") {
        const iframes = document.querySelectorAll("iframe")
        for (const key in event.data["datawrapper-height"]) {
          for (let i = 0; i < iframes.length; i++) {
            try {
              if (iframes[i].contentWindow === event.source) {
                const height = event.data["datawrapper-height"][key] + "px"
                iframes[i].style.height = height
              }
            } catch (error) {
              console.error("Error adjusting iframe height:", error)
            }
          }
        }
      }
    }

    window.addEventListener("message", handleIframeMessages)

    return () => {
      window.removeEventListener("message", handleIframeMessages)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <style jsx global>{`
      body {
        overflow-y: scroll;
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE and Edge */
      }
      
      body::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
      }
    `}</style>
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="text-lg font-bold">
            everythingextracted.com
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/resources" className="text-sm font-medium hover:text-primary">
              Useful Resources
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary">
              Blog
            </Link>
            <Link href="/the-information-zone" className="text-sm font-medium text-primary">
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Tea - A General Overview
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  The world's second most consumed beverage after water
                </p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight">What is Tea?</h2>
                  <div className="space-y-4">
                    <div>
                      Tea comes from the Camellia sinensis plant, an evergreen shrub whose leaves remain green and
                      functional throughout the year. Camellia sinensis is part of the flowering plant family Theaceae,
                      which comprises around 40 different genera (groups){" "}
                      <Cite id="britannica_theaceae" referenceNumbers={pageReferenceNumbers} />. Camellia Sinensis
                      shrubs are kept at a height of around 1 - 1.5m to facilitate picking of the leaves, but can reach
                      much higher if left alone <Cite id="rhs_camellia" referenceNumbers={pageReferenceNumbers} />. Tea
                      leaves are picked, processed, and usually steeped in hot water, resulting in a flavorful infusion.
                    </div>

                    <div className="mt-4 mb-6">
                      <figure className="relative">
                        <img
                          src="https://images.pexels.com/photos/6130149/pexels-photo-6130149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                          alt="Tea plantation in Vietnam with rows of tea plants on hillsides and misty mountains in the background"
                          className="rounded-md mx-auto w-full h-auto max-w-[800px]"
                        />
                        <figcaption className="text-sm text-center mt-2 text-muted-foreground">
                          Figure 1: Tea plantation in Vietnam - Photo by Quang Nguyen Vinh
                        </figcaption>
                      </figure>
                    </div>

                    <div>
                      There are two main varieties of Camellia Sinensis used for tea production, though others do exist:
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mt-1 mb-2">Camellia sinensis var. sinensis</h3>
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>Originated in China - sinensis is derived from the word for China in Latin</li>
                        <li>Smaller leaves</li>
                        <li>Resistant to colder temperatures</li>
                      </ul>

                      <h3 className="text-lg font-semibold mt-1 mb-2">Camellia sinensis var. assamica</h3>
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>Native to the Assam region in northeastern India</li>
                        <li>Larger, broader, and more robust leaves</li>
                        <li>Adapted to warm, humid climates</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight">Herbal Teas / Tisanes</h2>
                  <div className="space-y-4">
                    <div>
                      It's important to note that not all beverages called "tea" are made from the camellia sinensis plant. Herbal teas, or tisanes, are made from herbs, fruits, flowers, and other plant materials.
                      Here are a few examples:
                    </div>

                    <div>
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>
                          <strong>Chamomile:</strong> Made from whole or crushed flowers of chamomile - a daisy-like
                          plant. Has a yellow appearance, and is steeped in hot water
                        </li>
                        <li>
                          <strong>Rooibos:</strong> Rooibos (in Afrikaans) - literally meaning red bush, is a herbal tea
                          made from the leaves of the rooibos plant, native to the Western Cape in South Africa. It gets
                          its name from the red appearance of the leaves after they have undergone oxidation{" "}
                          <Cite id="klipopmekaar2023" referenceNumbers={pageReferenceNumbers} />. It can be enjoyed in
                          many ways, uniquely as a 'red cappuccino', where ground coffee is substituted for finely
                          ground rooibos leaves, which are extracted in a similar way in an espresso machine before the addition of foamed milk{" "}
                          <Cite id="redespresso2023" referenceNumbers={pageReferenceNumbers} />
                        </li>
                        <li>
                          <strong>Ginger:</strong> Prepared from the rhiozme (underground stem) of the ginger plant,
                          which is commonly known as ginger root. Ginger tea is usually made by steeping slices of
                          ginger root in hot water, and is often complimented with lemon, sugar or honey
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight">Crafting the Perfect Tea Plant</h2>
                  <div className="space-y-4">
                    <div>
                      Although, broadly speaking, there are the two tea varieties detailed above, in reality there are
                      thousands of different <em>varietals</em> that can be categorised as either one or a mixture of
                      the varieties. Here's a brief runthrough of some of the ways they came about:
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mt-1 mb-2">Landrace</h3>
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>
                          Landraces are plant populations that have naturally adapted to a specific local environment
                          over time, typically without human intervention
                        </li>
                        <li>
                          <em>
                            {" "}
                            'A landrace is a dynamic population(s) of a cultivated plant that has historical origin,
                            distinct identity and lacks formal crop improvement, as well as often being genetically
                            diverse, locally adapted and associated with traditional farming systems'{" "}
                          </em>{" "}
                          <Cite id="villa_landraces" referenceNumbers={pageReferenceNumbers} />
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mt-1 mb-2">Field Clone</h3>
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>
                          A field clone is a cultivar (cultivated variety) selected from plants in the field based on
                          desirable traits, such as flavour, disease resistance, processing suitability, yield, and more
                        </li>
                        <li>
                          There are several methods for cloning tea plants, with the most common being the use of
                          cuttings. A healthy shoot with a few leaves is taken, treated with a rooting hormone, planted
                          in soil, and left for several weeks to allow roots to develop. This results in a genetically
                          identical plant, and is an example of asexual reproduction
                        </li>
                        <li>
                          <em>
                            'A cultivar, as a taxon, is an assemblage of plants that (a) has been selected for a
                            particular character or combination of characters, and (b) remains distinct, uniform, and
                            stable in these characters when propagated by appropriate means'
                          </em>{" "}
                          <Cite id="ishs_cultivars" referenceNumbers={pageReferenceNumbers} />
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mt-1 mb-2">Open pollination</h3>
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>
                          Open pollination refers to the natural fertilisation process where tea plants are pollinated
                          by insects, wind, or other natural means without interference by humans
                        </li>
                        <li>
                          This process can result in the creation of favorable new varietals and contributes to a
                          genetically diverse crop population, however it also leads to inconsistency among the crops
                        </li>
                      </ul>

                      <h3 className="text-lg font-semibold mt-1 mb-2">Controlled Hybridization</h3>
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>
                          Some varietals excel in certain traits but fall short in others. By selectively crossbreeding
                          them, new varietals with significantly improved characteristics can be developed
                        </li>
                        <li>
                          There are many research stations around the world performing this sort of work, such as the
                          Tea and Beverage Research Station in Taiwan, which has produced over 20 cultivars, including the
                          well-known Jin Xuan variety <Cite id="tbrs2023" referenceNumbers={pageReferenceNumbers} />
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight">The Six Types of Tea</h2>
                  <div className="mt-4 mb-6">
                    <figure className="relative">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/1/13/Teaprocessing.svg"
                        alt="Tea processing diagram showing how different types of tea are produced from the same plant"
                        className="rounded-md mx-auto w-full h-auto max-w-[800px]"
                      />
                      <figcaption className="text-sm text-center mt-2 text-muted-foreground">
                        Figure 2: Tea processing diagram showing the different processing methods that result in the six
                        main types of tea <Cite id="wikipedia_tea_processing" referenceNumbers={pageReferenceNumbers} />
                      </figcaption>
                    </figure>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mt-1 mb-2 flex items-center gap-2">
                        <Leaf className="h-5 w-5" style={{ color: "#F0F0F0" }} />
                        <span>White Tea</span>
                      </h3>
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>Minimally processed tea with very little oxidation</li>
                        <li>Known for its delicate, subtle flavor profile</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mt-1 mb-2 flex items-center gap-2">
                        <Leaf className="h-5 w-5" style={{ color: "#FFC300" }} />
                        <span>Yellow Tea</span>
                      </h3>
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>Rare tea that undergoes a unique "yellowing" process</li>
                        <li>Similar to green tea but with a mellower flavor</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mt-1 mb-2 flex items-center gap-2">
                        <Leaf className="h-5 w-5" style={{ color: "#4CAF50" }} />
                        <span>Green Tea</span>
                      </h3>
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>Unoxidized tea that preserves the natural color of the leaves</li>
                        <li>Known for its fresh, grassy flavor profile</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mt-1 mb-2 flex items-center gap-2">
                        <Leaf className="h-5 w-5" style={{ color: "#E97451" }} />
                        <span>Oolong Tea</span>
                      </h3>
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>Partially oxidized tea, between green and black tea</li>
                        <li>Wide range of flavors depending on oxidation level</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mt-1 mb-2 flex items-center gap-2">
                        <Leaf className="h-5 w-5" style={{ color: "#1A1A1A" }} />
                        <span>Black Tea</span>
                      </h3>
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>Fully oxidized tea with a robust flavor</li>
                        <li>The most common type of tea consumed worldwide</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mt-1 mb-2 flex items-center gap-2">
                        <Leaf className="h-5 w-5" style={{ color: "#3C1A36" }} />
                        <span>Dark Tea (Pu-erh)</span>
                      </h3>
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>Post-fermented tea that improves with age</li>
                        <li>Known for its earthy, woody flavor profile</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight">Where Is Tea Grown?</h2>
                  <div className="space-y-4">
                    <div>
                      Black tea and green tea make up the vast majority of tea consumed around the world. Using data
                      from 2022, the production of these two types of tea is visualised below{" "}
                      <Cite id="fao2022" referenceNumbers={pageReferenceNumbers} />:
                    </div>

                    <div className="mt-6">
                      <div className="relative w-full">
                        <iframe
                          title="Black Tea Production in 2022, Tonnes"
                          aria-label="Map"
                          id="datawrapper-chart-w4vvH"
                          src="https://datawrapper.dwcdn.net/w4vvH/1/"
                          scrolling="yes"
                          frameBorder="0"
                          style={{ width: "100%", border: "none" }}
                          height="368"
                          data-external="1"
                          onError={(e) => {
                            console.error("Failed to load iframe:", e)
                            e.currentTarget.style.display = "none"
                            e.currentTarget.parentElement.innerHTML +=
                              '<div class="p-4 text-center text-muted-foreground">Failed to load chart data. Please try again later.</div>'
                          }}
                        ></iframe>
                      </div>
                    </div>

                    <div className="mt-6">
                      <div className="relative w-full">
                        <iframe
                          title="Green Tea Production in 2022, Tonnes"
                          aria-label="Map"
                          id="datawrapper-chart-Au7Ww"
                          src="https://datawrapper.dwcdn.net/Au7Ww/2/"
                          scrolling="no"
                          frameBorder="0"
                          style={{ width: "100%", border: "none" }}
                          height="368"
                          data-external="1"
                          onError={(e) => {
                            console.error("Failed to load iframe:", e)
                            e.currentTarget.style.display = "none"
                            e.currentTarget.parentElement.innerHTML +=
                              '<div class="p-4 text-center text-muted-foreground">Failed to load chart data. Please try again later.</div>'
                          }}
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight">Where Is Tea Consumed?</h2>
                  <div className="space-y-4">
                    <div>
                      As can be seen below from data taken in 2016, tea consumption varies greatly from country to
                      country <Cite id="statista2016" referenceNumbers={pageReferenceNumbers} />:
                    </div>
                    <div className="mt-6">
                      <div className="relative w-full">
                        <iframe
                          title="Tea Consumption in 2016, kg per capita"
                          aria-label="Map"
                          id="datawrapper-chart-Jkzd0"
                          src="https://datawrapper.dwcdn.net/Jkzd0/1/"
                          scrolling="no"
                          frameBorder="0"
                          style={{ width: "100%", border: "none" }}
                          height="368"
                          data-external="1"
                          onError={(e) => {
                            console.error("Failed to load iframe:", e)
                            e.currentTarget.style.display = "none"
                            e.currentTarget.parentElement.innerHTML +=
                              '<div class="p-4 text-center text-muted-foreground">Failed to load chart data. Please try again later.</div>'
                          }}
                        ></iframe>
                      </div>
                    </div>
                    <div>
                      Though this data is incomplete due to the complexities of gathering it, there are a few countries that stand out when it comes to their tea consumption habits:
                    </div>
                    <div>
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>
                          <strong>Turkey:</strong> Tea is a large part of Turkish culture, and you'll spot it everywhere
                          you go. The average consumption of 3.16 kg/capita works out as 3-4 cups of tea a day. Black
                          tea is the tea of choice in Turkey, and the state owned company Çaykur reports that they
                          purchase approximately 55-60% of the fresh tea produced in the region, depending on the year{" "}
                          <Cite id="caykur2025" referenceNumbers={pageReferenceNumbers} />. Turkey used to subject tea
                          exports to a 145% tariff to protect domestic production, but this has since been reduced, for
                          example, there is now no tariff on tea imported into the UK{" "}
                          <Cite id="uk_turkey_fta" referenceNumbers={pageReferenceNumbers} />
                        </li>
                        <li>
                          <strong>Ireland:</strong> Tea was introduced to Ireland less than 300 years ago, and it is the hot beverage of choice. Barry's and Lyons, both originating
                          at the beginning of the 20th century in Ireland, are two favourites. Barry's is still family owned, and makes up nearly 40% of tea sales in Ireland{" "}
                          <Cite id="barrys_tea" referenceNumbers={pageReferenceNumbers} />. Irish Breakfast Tea is a
                          a blend of black teas known for its high Assam content — a tea from the Assam region in northeastern India — characterised by a strong, malty, and robust flavor
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight mb-1">The Chemical Composition of Tea - Dry Leaf</h2>
                  <div className="space-y-4">
                    <div>
                      Tea leaves contain a complex mixture of compounds that contribute to their flavor, aroma, and
                      health benefits. The exact composition varies by tea type, growing conditions, processing methods,
                      and cultivar. Below you will find a good approximation of what tea leaves generally contain by dry
                      weight. It is important to note that lots of these contents will not make it into the final cup.
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mt-1 mb-2 text-center">Dry Leaf Composition</h3>
                      <div className="max-w-xl mx-auto py-0">
                        {typeof window !== "undefined" && (
                          <Pie
                            data={{
                              labels: [
                                "Flavanols (25.0%)",
                                "Protein (15.0%)",
                                "Polysaccharides (13.0%)",
                                "Cellulose (7.0%)",
                                "Lignin (6.0%)",
                                "Phenolic acids and depsides (5.0%)",
                                "Ash (5.0%)",
                                "Amino acids (4.0%)",
                                "Monosaccharides (4.0%)",
                                "Flavonols and flavonol glycosides (3.0%)",
                                "Other polyphenols (3.0%)",
                                "Lipids (3.0%)",
                                "Caffeine (3.0%)",
                                "Organic acids (0.5%)",
                                "Chlorophyll and other pigments (0.5%)",
                                "Theobromine (0.2%)",
                                "Volatiles (0.1%)",
                              ],
                              datasets: [
                                {
                                  data: [
                                    25.0, 15.0, 13.0, 7.0, 6.0, 5.0, 5.0, 4.0, 4.0, 3.0, 3.0, 3.0, 3.0, 0.5, 0.5, 0.2,
                                    0.1,
                                  ],
                                  backgroundColor: [
                                    "#4CAF50", // Green - Flavanols
                                    "#FFC107", // Amber - Protein
                                    "#FF9800", // Orange - Polysaccharides
                                    "#F44336", // Red - Cellulose
                                    "#9C27B0", // Purple - Lignin
                                    "#3F51B5", // Indigo - Phenolic acids
                                    "#2196F3", // Blue - Ash
                                    "#00BCD4", // Cyan - Amino acids
                                    "#009688", // Teal - Monosaccharides
                                    "#8BC34A", // Light Green - Flavonols
                                    "#CDDC39", // Lime - Other polyphenols
                                    "#FFEB3B", // Yellow - Lipids
                                    "#FF5722", // Deep Orange - Caffeine
                                    "#795548", // Brown - Organic acids
                                    "#607D8B", // Blue Grey - Chlorophyll
                                    "#9E9E9E", // Grey - Theobromine
                                    "#E91E63", // Pink - Volatiles
                                  ],
                                  borderColor: [
                                    "#388E3C", // Darker Green
                                    "#FFA000", // Darker Amber
                                    "#F57C00", // Darker Orange
                                    "#D32F2F", // Darker Red
                                    "#7B1FA2", // Darker Purple
                                    "#303F9F", // Darker Indigo
                                    "#1976D2", // Darker Blue
                                    "#0097A7", // Darker Cyan
                                    "#00796B", // Darker Teal
                                    "#689F38", // Darker Light Green
                                    "#AFB42B", // Darker Lime
                                    "#FBC02D", // Darker Yellow
                                    "#E64A19", // Darker Deep Orange
                                    "#5D4037", // Darker Brown
                                    "#455A64", // Darker Blue Grey
                                    "#616161", // Darker Grey
                                    "#C2185B", // Darker Pink
                                  ],
                                  borderWidth: 1,
                                },
                              ],
                            }}
                            options={{
                              responsive: true,
                              maintainAspectRatio: true,
                              plugins: {
                                legend: {
                                  position: "right",
                                  labels: {
                                    boxWidth: 15,
                                    padding: 10,
                                    font: {
                                      size: 11,
                                    },
                                  },
                                },
                                tooltip: {
                                  callbacks: {
                                    label: (context) => {
                                      const label = context.label.split(" (")[0]
                                      return `${label}: ${context.raw}%`
                                    },
                                  },
                                },
                              },
                            }}
                          />
                        )}
                      </div>
                      <p className="text-sm text-center mt-0 text-muted-foreground">
                        Figure 3: Pie chart showing the composition of tea by percentage of dry weight{" "}
                        <Cite id="balentine1997" referenceNumbers={pageReferenceNumbers} />
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight mb-1">The Chemical Composition of Tea - Brewed</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mt-1 mb-2 text-center">Brewed Green Tea Composition</h3>
                      <div className="max-w-xl mx-auto py-0">
                        {typeof window !== "undefined" && (
                          <Pie
                            data={{
                              labels: [
                                "Catechins (30.0%)",
                                "Theaflavins (0%)",
                                "Simple polyphenols (2.0%)",
                                "Flavonols (2.0%)",
                                "Other polyphenols (6.0%)",
                                "Theanine (3.0%)",
                                "Aminoacids (3.0%)",
                                "Peptides/Protein (6.0%)",
                                "Organic acids (2.0%)",
                                "Sugars (7.0%)",
                                "Other carbohydrates (4.0%)",
                                "Lipids (3.0%)",
                                "Caffeine (3.0%)",
                                "Other methylxanthines (0.5%)",
                                "Potassium (5.0%)",
                                "Other minerals/ash (5.0%)",
                                "Aroma (0.1%)",
                              ],
                              datasets: [
                                {
                                  data: [
                                    30.0, 0.0, 2.0, 2.0, 6.0, 3.0, 3.0, 6.0, 2.0, 7.0, 4.0, 3.0, 3.0, 0.5, 5.0, 5.0,
                                    0.1,
                                  ],
                                  backgroundColor: [
                                    "#4CAF50", // Green - Flavanols
                                    "#FFC107", // Amber - Protein
                                    "#FF9800", // Orange - Polysaccharides
                                    "#F44336", // Red - Cellulose
                                    "#9C27B0", // Purple - Lignin
                                    "#3F51B5", // Indigo - Phenolic acids
                                    "#2196F3", // Blue - Ash
                                    "#00BCD4", // Cyan - Amino acids
                                    "#009688", // Teal - Monosaccharides
                                    "#8BC34A", // Light Green - Flavonols
                                    "#CDDC39", // Lime - Other polyphenols
                                    "#FFEB3B", // Yellow - Lipids
                                    "#FF5722", // Deep Orange - Caffeine
                                    "#795548", // Brown - Organic acids
                                    "#607D8B", // Blue Grey - Chlorophyll
                                    "#9E9E9E", // Grey - Theobromine
                                    "#E91E63", // Pink - Volatiles
                                  ],
                                  borderColor: [
                                    "#388E3C", // Darker Green
                                    "#FFA000", // Darker Amber
                                    "#F57C00", // Darker Orange
                                    "#D32F2F", // Darker Red
                                    "#7B1FA2", // Darker Purple
                                    "#303F9F", // Darker Indigo
                                    "#1976D2", // Darker Blue
                                    "#0097A7", // Darker Cyan
                                    "#00796B", // Darker Teal
                                    "#689F38", // Darker Light Green
                                    "#AFB42B", // Darker Lime
                                    "#FBC02D", // Darker Yellow
                                    "#E64A19", // Darker Deep Orange
                                    "#5D4037", // Darker Brown
                                    "#455A64", // Darker Blue Grey
                                    "#616161", // Darker Grey
                                    "#C2185B", // Darker Pink
                                  ],
                                  borderWidth: 1,
                                },
                              ],
                            }}
                            options={{
                              responsive: true,
                              maintainAspectRatio: true,
                              plugins: {
                                legend: {
                                  position: "right",
                                  labels: {
                                    boxWidth: 15,
                                    padding: 10,
                                    font: {
                                      size: 11,
                                    },
                                  },
                                },
                                tooltip: {
                                  callbacks: {
                                    label: (context) => {
                                      const label = context.label.split(" (")[0]
                                      return `${label}: ${context.raw}%`
                                    },
                                  },
                                },
                              },
                            }}
                          />
                        )}
                      </div>
                      <p className="text-sm text-center mt-0 text-muted-foreground">
                        Figure 3: Pie chart showing the composition of a typical green tea beverage, %wt/wt Solids{" "}
                        <Cite id="harbowy1997" referenceNumbers={pageReferenceNumbers} />
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mt-1 mb-2 text-center">Brewed Black Tea Composition</h3>
                      <div className="max-w-xl mx-auto py-0">
                        {typeof window !== "undefined" && (
                          <Pie
                            data={{
                              labels: [
                                "Catechins (9.0%)",
                                "Theaflavins (4.0%)",
                                "Simple polyphenols (3.0%)",
                                "Flavonols (1.0%)",
                                "Other polyphenols (23.0%)",
                                "Theanine (3.0%)",
                                "Aminoacids (3.0%)",
                                "Peptides/Protein (6.0%)",
                                "Organic acids (2.0%)",
                                "Sugars (7.0%)",
                                "Other carbohydrates (4.0%)",
                                "Lipids (3.0%)",
                                "Caffeine (3.0%)",
                                "Other methylxanthines (0.5%)",
                                "Potassium (5.0%)",
                                "Other minerals/ash (5.0%)",
                                "Aroma (0.1%)",
                              ],
                              datasets: [
                                {
                                  data: [
                                    9.0, 4.0, 3.0, 1.0, 23.0, 3.0, 3.0, 6.0, 2.0, 7.0, 4.0, 3.0, 3.0, 0.5, 5.0, 5.0,
                                    0.1,
                                  ],
                                  backgroundColor: [
                                    "#4CAF50", // Green - Flavanols
                                    "#FFC107", // Amber - Protein
                                    "#FF9800", // Orange - Polysaccharides
                                    "#F44336", // Red - Cellulose
                                    "#9C27B0", // Purple - Lignin
                                    "#3F51B5", // Indigo - Phenolic acids
                                    "#2196F3", // Blue - Ash
                                    "#00BCD4", // Cyan - Amino acids
                                    "#009688", // Teal - Monosaccharides
                                    "#8BC34A", // Light Green - Flavonols
                                    "#CDDC39", // Lime - Other polyphenols
                                    "#FFEB3B", // Yellow - Lipids
                                    "#FF5722", // Deep Orange - Caffeine
                                    "#795548", // Brown - Organic acids
                                    "#607D8B", // Blue Grey - Chlorophyll
                                    "#9E9E9E", // Grey - Theobromine
                                    "#E91E63", // Pink - Volatiles
                                  ],
                                  borderColor: [
                                    "#388E3C", // Darker Green
                                    "#FFA000", // Darker Amber
                                    "#F57C00", // Darker Orange
                                    "#D32F2F", // Darker Red
                                    "#7B1FA2", // Darker Purple
                                    "#303F9F", // Darker Indigo
                                    "#1976D2", // Darker Blue
                                    "#0097A7", // Darker Cyan
                                    "#00796B", // Darker Teal
                                    "#689F38", // Darker Light Green
                                    "#AFB42B", // Darker Lime
                                    "#FBC02D", // Darker Yellow
                                    "#E64A19", // Darker Deep Orange
                                    "#5D4037", // Darker Brown
                                    "#455A64", // Darker Blue Grey
                                    "#616161", // Darker Grey
                                    "#C2185B", // Darker Pink
                                  ],
                                  borderWidth: 1,
                                },
                              ],
                            }}
                            options={{
                              responsive: true,
                              maintainAspectRatio: true,
                              plugins: {
                                legend: {
                                  position: "right",
                                  labels: {
                                    boxWidth: 15,
                                    padding: 10,
                                    font: {
                                      size: 11,
                                    },
                                  },
                                },
                                tooltip: {
                                  callbacks: {
                                    label: (context) => {
                                      const label = context.label.split(" (")[0]
                                      return `${label}: ${context.raw}%`
                                    },
                                  },
                                },
                              },
                            }}
                          />
                        )}
                      </div>
                      <p className="text-sm text-center mt-0 text-muted-foreground">
                        Figure 3: Pie chart showing the composition of a typical black tea beverage, %wt/wt Solids{" "}
                        <Cite id="harbowy1997" referenceNumbers={pageReferenceNumbers} />
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight mb-1">Decoding the contents of tea</h2>
                  <div className="space-y-4">
                    <div>Now that we've examined the components of tea in its leaf form and how they're affected by two different processing and brewing methods, let's explore their function and flavor:</div>
                    <div>
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>
                          <strong>Polyphenols: </strong>
                          Polyphenols are groups of chemical compounds called phenols, and the polyphenolic fraction of
                          tea represents 30 to 40% of the dry leaf content {" "}<Cite id="harbowy1997" referenceNumbers={pageReferenceNumbers} />.
                          Most of this can be acccounted for by flavonoids, a large class of naturally occuring compounds in plants. They fall into six groups, of which flavanols and flavonols are the most important in tea. The major flavanols of interest
                          in tea are EC (epicatechin), ECG (epicatechin gallate), EGC (epigallocatechin) and the most abundant, EGCG (epigallocatechin gallate {" "}<Cite id="amra2006" referenceNumbers={pageReferenceNumbers} />, there are 4 more of less significance. Together, these account for around 25% of the dry leaf content. Flavonols make up a much smaller percentage of the dry leaf content, and include kaempferol, quercitin, and myricitin. Polyphenols are responsible for the bitterness in brewed tea and the astringency, a drying, roughing and puckering sensation in the mouth, similar to what is felt when drinking a dry red wine{" "}<Cite id="gawel2001" referenceNumbers={pageReferenceNumbers} /> 
                        </li>

                        <li>
                          <strong>Caffeine: </strong> Caffeine is the most widely consumed central-nervous-system stimulant in the world, and accounts for around 1.5-4% of the dry weight of tea leaves {" "}<Cite id="tfouni2018" referenceNumbers={pageReferenceNumbers} />. It is part of the alkaloids, a broad class of naturally occurring organic compounds that contain at least one nitrogen atom. Alkaloids are secondary metabolites that generally mediate ecological interactions, providing a selective advantage to the organism rather than contributing directly to its growth, development, or reproduction. Many alkaloids have a bitter taste {" "}<Cite id="modernalkaloids" referenceNumbers={pageReferenceNumbers} />, and caffeine is no exception, acting as a natural insecticide due to its bitterness.
                          Theobromine is another alkaloid in tea, but exists in much smaller quantities
                        </li>

                        <li>
                          <strong>Amino Acids: </strong>There are around 500 amino acids that exist in nature, and they
                          are essential building blocks that construct protein. While these only make up 4% of the dry
                          leaf content, they are of significant importance. Making up over 50% of these amino acids is L-theanine{" "}
                          <Cite id="theanine_content" referenceNumbers={pageReferenceNumbers} />, which is
                          of interest due to its contribution to the desirable umami qualities of tea{" "}
                          <Cite id="theanine_umami" referenceNumbers={pageReferenceNumbers} />, and its synergistic effect
                          with caffeine{" "}<Cite id="theanine_caffeine" referenceNumbers={pageReferenceNumbers} />
                        </li>

                        <li>
                          <strong> Carbohydrates: </stong> Carbohydrates, one of the 3 macronutrient groups, are molecules comprised of carbon, hydrogen and oxygen. Monosaccharides are the simplest form, followed by disaccharides (two monosaccharides joined together), oligosaccharides (generally 3-10 monosaccharides joined together) and finally polysaccharides, which are very long chains of monosaccharides. Cellulose, a polysaccharide and key structural component of plant cell walls, makes up around 7% of the dry leaf weight, however it doesn't make it into the final cup due to its insolubility in water. It is for this reason that it is well-suited for making teabags. Many carbohydrates within the dry leaf do make it into the final cup, such as sucrose, myo-inositol, glucose and fructose {" "}<Cite id="nelum2022" referenceNumbers={pageReferenceNumbers} /> {" "}<Cite id="shevchuk2020" referenceNumbers={pageReferenceNumbers} />
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <References referenceNumbers={pageReferenceNumbers} />
            </div>

            <div className="mt-12 flex justify-center">
              <Button asChild variant="outline" className="gap-2">
                <Link href="/the-information-zone/tea/fundamentals">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Tea Fundamentals
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
