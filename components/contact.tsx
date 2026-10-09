import { Mail, MapPin, Send } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { Reveal } from '@/components/reveal'
import { CopyEmailButton } from '@/components/copy-email-button'

export function Contact() {
  return (
    <section aria-labelledby="contact-title" id="contact" className="bg-navy py-24 text-navy-foreground">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <Reveal>
            <p className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
              <span className="h-px w-8 bg-teal" aria-hidden="true" />
              Contact
            </p>
            <h2 id="contact-title" className="text-balance font-serif text-3xl font-semibold md:text-5xl">
              {"Let's talk about how data can support your team."}
            </h2>
            <p className="mt-5 max-w-lg text-pretty leading-relaxed text-navy-foreground/70">
              {"I'm open to business analyst, data analyst, reporting analyst, operations analyst, and monitoring & evaluation roles. I'd be glad to hear from you."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                <Send className="size-4" aria-hidden="true" />
                Send me an email
              </a>
              <CopyEmailButton email={profile.email} />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <span className="flex size-11 items-center justify-center rounded-xl bg-teal/15 text-teal">
                  <Mail className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-navy-foreground/55">Email</p>
                  <a href={`mailto:${profile.email}`} className="font-medium hover:text-teal">
                    {profile.email}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <span className="flex size-11 items-center justify-center rounded-xl bg-teal/15 text-teal">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-navy-foreground/55">Location</p>
                  <p className="font-medium">{profile.location}</p>
                </div>
              </li>
            </ul>
          </Reveal>
        </div>

        <footer className="mt-20 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-navy-foreground/55 md:flex-row md:items-center md:justify-between">
          <p>
            {'© '}
            {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <a href="#home" className="hover:text-white">
            Back to top
          </a>
        </footer>
      </div>
    </section>
  )
}
