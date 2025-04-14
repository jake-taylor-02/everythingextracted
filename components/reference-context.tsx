"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback } from "react"
import { references as referencesData } from "@/lib/references"

// Define the context type
type ReferenceContextType = {
  registerReference: (id: string) => void
  getReference: (id: string) => any
  getReferenceNumber: (id: string) => number
  getAllReferences: () => { id: string; number: number }[]
  resetReferences: () => void
}

// Create the context
const ReferenceContext = createContext<ReferenceContextType | null>(null)

// Provider component
export function ReferenceProvider({ children }: { children: React.ReactNode }) {
  // State to track references
  const [referenceMap, setReferenceMap] = useState<Map<string, number>>(new Map())
  const [referenceOrder, setReferenceOrder] = useState<string[]>([])

  // Register a reference - but don't return a number (to avoid render-time state updates)
  const registerReference = useCallback(
    (id: string): void => {
      setReferenceMap((prevMap) => {
        // If already registered, don't update
        if (prevMap.has(id)) return prevMap

        // Create a new map with the new reference
        const newMap = new Map(prevMap)
        newMap.set(id, referenceOrder.length + 1)

        // Also update the order
        setReferenceOrder((prev) => [...prev, id])

        return newMap
      })
    },
    [referenceOrder.length],
  )

  // Get reference data
  const getReference = useCallback((id: string) => {
    return referencesData[id]
  }, [])

  // Get reference number
  const getReferenceNumber = useCallback(
    (id: string): number => {
      return referenceMap.get(id) || 0
    },
    [referenceMap],
  )

  // Get all references in order
  const getAllReferences = useCallback(() => {
    return referenceOrder.map((id) => ({
      id,
      number: referenceMap.get(id) || 0,
    }))
  }, [referenceMap, referenceOrder])

  // Reset all references
  const resetReferences = useCallback(() => {
    setReferenceMap(new Map())
    setReferenceOrder([])
  }, [])

  const value = {
    registerReference,
    getReference,
    getReferenceNumber,
    getAllReferences,
    resetReferences,
  }

  return <ReferenceContext.Provider value={value}>{children}</ReferenceContext.Provider>
}

// Hook to use the reference context
export function useReferences() {
  const context = useContext(ReferenceContext)
  if (!context) {
    throw new Error("useReferences must be used within a ReferenceProvider")
  }
  return context
}
