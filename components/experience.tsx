import { Building2 } from 'lucide-react'
import { experience } from '@/lib/portfolio-data'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function Experience() {
  return (
    <section aria-labelledby="experience-title" id="experience" className="bg-muted py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            id="experience-title"
            eyebrow="Professional experience"
            title="Eleven years across government, health, and finance."
            description="My work has focused on data analysis, performance measurement, KPI reporting, and monitoring & evaluation for organizations with demanding reporting standards."
          />
        </Reveal>

        <ol className="relative space-y-6 border-l border-teal/30 pl-6 md:pl-10">
          {experience.map((job, i) => (
            <li key={job.organization} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[31px] top-7 size-3 rounded-full border-2 border-muted bg-teal md:-left-[47px]"
              />
              <Reveal delay={i * 80}>
                <article className="rounded-2xl border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg md:p-8">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="flex items-start gap-4">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy text-navy-foreground">
                        <Building2 className="size-5" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-navy">{job.organization}</h3>
                        <p className="text-sm text-muted-foreground">{job.context}</p>
                      </div>
                    </div>
                    <span className="self-start rounded-full bg-teal-soft px-3 py-1 text-xs font-medium text-accent-foreground">
                      {job.focus}
                    </span>
                  </div>
                  <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted-foreground md:pl-15">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-teal" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
