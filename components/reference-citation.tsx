"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { ExternalLink, Play } from "lucide-react"

// Define the reference types
export type ReferenceType = "article" | "book" | "website" | "video" | "other"

export interface Reference {
  id: string
  type: ReferenceType
  authors: string
  year: number
  title: string
  source: string
  volume?: string
  issue?: string
  pages?: string
  publisher?: string
  url?: string
  doi?: string
  accessDate?: string
  // Video specific fields
  channel?: string
  duration?: string
  platform?: string
}

export interface References {
  [key: string]: Reference
}

// Create a context to track citations and their order
interface ReferencesContextType {
  citations: string[]
  addCitation: (id: string) => void
  getCitationNumber: (id: string) => number
}

const ReferencesContext = createContext<ReferencesContextType>({
  citations: [],
  addCitation: () => {},
  getCitationNumber: () => 0,
})

export function ReferencesProvider({
  children,
  initialCitations = [],
}: {
  children: React.ReactNode
  initialCitations?: string[]
}) {
  const [citations, setCitations] = useState<string[]>(initialCitations)

  const addCitation = (id: string) => {
    if (!citations.includes(id)) {
      setCitations((prev) => [...prev, id])
    }
  }

  const getCitationNumber = (id: string) => {
    return citations.indexOf(id) + 1
  }

  return (
    <ReferencesContext.Provider value={{ citations, addCitation, getCitationNumber }}>
      {children}
    </ReferencesContext.Provider>
  )
}

export function ReferenceCitation({
  referenceId,
  references,
}: {
  referenceId: string
  references: References
}) {
  const { addCitation, getCitationNumber } = useContext(ReferencesContext)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    addCitation(referenceId)
  }, [referenceId, addCitation])

  const reference = references[referenceId]
  if (!reference) return null

  const citationNumber = getCitationNumber(referenceId)

  return (
    <TooltipProvider>
      <Tooltip open={open} onOpenChange={setOpen}>
        <TooltipTrigger asChild>
          <sup className="cursor-pointer text-primary hover:text-primary/80 font-medium" onClick={() => setOpen(true)}>
            [{citationNumber}]
          </sup>
        </TooltipTrigger>
        <TooltipContent side="top" align="start" className="max-w-sm p-4">
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="font-bold text-sm">[{citationNumber}]</span>
              <div className="flex-1">
                <span className="font-semibold">{reference.authors}</span> ({reference.year}). {reference.title}.{" "}
                <span className="italic">{reference.source}</span>
                {reference.volume && `, ${reference.volume}`}
                {reference.issue && `(${reference.issue})`}
                {reference.pages && `, ${reference.pages}`}
                {reference.publisher && `. ${reference.publisher}`}
                {reference.doi && `. DOI: ${reference.doi}`}
                {reference.type === "video" && (
                  <>
                    {reference.channel && `. ${reference.channel}`}
                    {reference.duration && ` (${reference.duration})`}
                  </>
                )}
              </div>
            </div>

            <div className="flex justify-start items-center pt-2 border-t mt-2">
              {reference.url ? (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 text-xs gap-1"
                  onClick={() => window.open(reference.url, "_blank")}
                >
                  {reference.type === "video" ? (
                    <>
                      <Play className="h-3 w-3" />
                      Watch Video
                    </>
                  ) : (
                    <>
                      <ExternalLink className="h-3 w-3" />
                      View Source
                    </>
                  )}
                </Button>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export function ReferenceList({
  references,
}: {
  references: References
}) {
  const { citations } = useContext(ReferencesContext)

  if (citations.length === 0) return null

  return (
    <div className="mt-12 border-t pt-6">
      <h2 className="text-2xl font-bold mb-4">References</h2>
      <div className="space-y-4">
        {citations.map((id, index) => {
          const ref = references[id]
          if (!ref) return null

          return (
            <div key={id} className="flex gap-2">
              <span className="font-bold">[{index + 1}]</span>
              <div>
                <span className="font-semibold">{ref.authors}</span> ({ref.year}). {ref.title}.{" "}
                <span className="italic">{ref.source}</span>
                {ref.volume && `, ${ref.volume}`}
                {ref.issue && `(${ref.issue})`}
                {ref.pages && `, ${ref.pages}`}
                {ref.publisher && `. ${ref.publisher}`}
                {ref.doi && `. DOI: ${ref.doi}`}
                {ref.type === "video" && (
                  <>
                    {ref.channel && `. ${ref.channel}`}
                    {ref.duration && ` (${ref.duration})`}
                  </>
                )}
                {ref.url && (
                  <>
                    .{" "}
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {ref.type === "video" ? "Watch Video" : "View Source"}
                    </a>
                  </>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
