import type React from "react"
import type { Metadata } from "next"
import { Merriweather } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
})

export const metadata: Metadata = {
  title: "everythingextracted.com",
  description: "Comprehensive brewing knowledge, from bean to cup.",
  icons: {
    icon: "/icon_everything_extracted.png",
    apple: "/icon_everything_extracted.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${merriweather.variable} font-serif`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
