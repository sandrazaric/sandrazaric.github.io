"use client"

import { Printer } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PrintButton() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="fixed right-6 top-6 z-50 print:hidden">
      <Button
        onClick={handlePrint}
        variant="outline"
        size="sm"
        className="gap-2 border-border bg-card/80 backdrop-blur-sm hover:bg-secondary"
      >
        <Printer className="size-4" />
        <span className="hidden sm:inline">Export PDF</span>
      </Button>
    </div>
  )
}
