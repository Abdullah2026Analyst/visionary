'use client'

import { Download } from 'lucide-react'

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
    >
      <Download className="size-4" aria-hidden="true" />
      Save as PDF
    </button>
  )
}
