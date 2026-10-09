'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'no-print fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || open
          ? 'border-b border-white/10 bg-navy/95 backdrop-blur'
          : 'bg-transparent',
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8"
      >
        <a href="#home" className="flex items-center gap-2.5 text-navy-foreground">
          <span className="flex size-9 items-center justify-center rounded-lg bg-teal font-serif text-lg font-semibold text-white">
            AQ
          </span>
          <span className="text-sm font-semibold tracking-wide">Abdullah Qambari</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-navy-foreground/75 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-teal px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 lg:inline-flex"
        >
          Get in touch
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-navy-foreground lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <ul id="mobile-nav" className="flex flex-col gap-1 px-5 pb-5 lg:hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2.5 text-navy-foreground/85 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
