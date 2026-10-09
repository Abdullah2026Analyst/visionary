'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition-colors hover:bg-white/10"
    >
      {copied ? (
        <Check className="size-4 text-teal" aria-hidden="true" />
      ) : (
        <Copy className="size-4" aria-hidden="true" />
      )}
      <span aria-live="polite">{copied ? 'Email copied' : 'Copy email'}</span>
    </button>
  )
}
