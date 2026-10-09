import { Database, LineChart, Sigma, CheckCircle2 } from 'lucide-react'
import { competencies, skillGroups } from '@/lib/portfolio-data'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const icons = [Database, LineChart, Sigma]

export function Skills() {
  return (
    <section aria-labelledby="skills-title" id="skills" className="bg-navy py-24 text-navy-foreground">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            id="skills-title"
            eyebrow="Skills"
            title="The tools I use every day."
            description="A practical toolkit for collecting, analyzing, visualizing, and reporting data."
            invert
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[i]
            return (
              <Reveal key={group.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-teal/50">
                  <Icon className="size-6 text-teal" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-semibold">{group.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-foreground/65">
                    {group.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-md bg-white/10 px-3 py-1.5 text-sm font-medium"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={150}>
          <div className="mt-10 rounded-2xl border border-white/10 p-6 md:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              Core competencies
            </h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {competencies.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-navy-foreground/85">
                  <CheckCircle2 className="size-4 shrink-0 text-teal" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
