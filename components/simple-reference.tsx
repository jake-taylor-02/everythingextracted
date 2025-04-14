"use client"

import { useState } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { ExternalLink, Play } from "lucide-react"
import { references } from "@/lib/references"

// Type for reference numbers mapping
export type ReferenceNumbersMap = Record<string, number>

export function Cite({ id, referenceNumbers }: { id: string; referenceNumbers: ReferenceNumbersMap }) {
  const [open, setOpen] = useState(false)

  // Get the reference number from the provided map
  const refNumber = referenceNumbers[id] || 0

  // Get the reference data
  const reference = references[id]
  if (!reference) {
    return <sup className="text-red-500">[ref not found]</sup>
  }

  return (
    <TooltipProvider>
      <Tooltip open={open} onOpenChange={setOpen}>
        <TooltipTrigger asChild>
          <sup
            className="cursor-pointer text-primary hover:text-primary/80 font-medium"
            onClick={(e) => {
              e.stopPropagation()
              setOpen(!open)
            }}
          >
            [{refNumber}]
          </sup>
        </TooltipTrigger>
        <TooltipContent side="top" align="start" className="max-w-sm p-4">
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="font-bold text-sm">[{refNumber}]</span>
              <div className="flex-1">
                <span className="font-semibold">{reference.authors}</span> ({reference.year}). {reference.title}.{" "}
                <span className="italic">{reference.source}</span>
              </div>
            </div>

            {reference.url && (
              <div className="flex justify-start items-center pt-2 border-t mt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 text-xs gap-1"
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(reference.url, "_blank")
                  }}
                >
                  {reference.isVideo ? (
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
              </div>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export function References({ referenceNumbers }: { referenceNumbers: ReferenceNumbersMap }) {
  // Get all references that are used in the provided map
  const usedReferenceIds = Object.keys(referenceNumbers)

  // Sort by reference number
  const sortedReferenceIds = [...usedReferenceIds].sort(
    (a, b) => (referenceNumbers[a] || 0) - (referenceNumbers[b] || 0),
  )

  return (
    <div className="mt-12 border-t pt-6">
      <h2 className="text-2xl font-bold mb-4">References</h2>
      <div className="space-y-4">
        {sortedReferenceIds.map((id) => {
          const ref = references[id]
          if (!ref) return null

          const number = referenceNumbers[id]

          return (
            <div key={id} className="flex gap-2">
              <span className="font-bold">[{number}]</span>
              <div>
                <span className="font-semibold">{ref.authors}</span> ({ref.year}). {ref.title}.{" "}
                <span className="italic">{ref.source}</span>
                {ref.url && (
                  <>
                    .{" "}
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {ref.isVideo ? "Watch Video" : "View Source"}
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

// This function is no longer needed but kept for backward compatibility
export function resetReferences() {
  // No-op - references are now hardcoded per page
}
