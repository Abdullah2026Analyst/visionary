import Image from 'next/image'
import { ArrowRight, Download, MapPin, Mail } from 'lucide-react'
import { profile, stats } from '@/lib/portfolio-data'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy text-navy-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-32 md:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:pb-28 lg:pt-40">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-teal-soft">
            <MapPin className="size-3.5" aria-hidden="true" />
            {profile.location}
          </p>
          <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.1] md:text-5xl lg:text-6xl">
            Turning data into insights,{' '}
            <span className="italic text-teal">insights into decisions.</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-navy-foreground/75">
            {"I'm Abdullah Qambari, a business and data analytics professional with over 11 years of experience in data analysis, KPI reporting, process improvement, and monitoring & evaluation."}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Career focus">
            {profile.roles.map((role) => (
              <li
                key={role}
                className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-navy-foreground/80"
              >
                {role}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-medium text-white transition-all hover:gap-3 hover:opacity-95"
            >
              View my projects
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="/Abdullah_Qambari_General_Analytics_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition-colors hover:bg-white/10"
            >
              <Download className="size-4" aria-hidden="true" />
              Download resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-navy-foreground/80 transition-colors hover:text-white"
            >
              <Mail className="size-4" aria-hidden="true" />
              Contact me
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-in fade-in zoom-in-95 duration-1000">
          <div
            aria-hidden="true"
            className="absolute -inset-3 translate-x-4 translate-y-4 rounded-3xl border border-teal/50"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-white/5 shadow-2xl">
            <Image
              src={profile.photo}
              alt="Portrait of Abdullah Qambari"
              fill
              priority
              sizes="(min-width: 1024px) 384px, 90vw"
              className="object-cover object-top"
            />
          </div>
          <dl className="absolute -bottom-8 left-1/2 grid w-[92%] -translate-x-1/2 grid-cols-3 divide-x divide-border rounded-2xl bg-white py-4 text-center text-foreground shadow-xl">
            {stats.map((stat) => (
              <div key={stat.label} className="px-2">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-serif text-2xl font-semibold text-navy">{stat.value}</dd>
                <dd className="mt-0.5 text-[11px] leading-tight text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
