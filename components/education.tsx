import { GraduationCap, Award } from 'lucide-react'
import { education } from '@/lib/portfolio-data'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const tools = ['SAS Viya', 'Power BI', 'Tableau', 'DevResults', 'Streamlit']

export function Education() {
  return (
    <section aria-labelledby="education-title" id="education" className="bg-muted py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            id="education-title"
            eyebrow="Education & certifications"
            title="Grounded in business, sharpened by analytics."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <ul className="space-y-4">
            {education.map((item, i) => (
              <li key={item.degree}>
                <Reveal delay={i * 80}>
                  <div className="flex items-start gap-4 rounded-2xl border bg-card p-6">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy text-navy-foreground">
                      <GraduationCap className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-navy">{item.degree}</h3>
                      {item.school && <p className="text-sm text-foreground">{item.school}</p>}
                      <p className="mt-1 text-sm text-muted-foreground">{item.note}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal delay={150}>
            <div className="h-full rounded-2xl bg-navy p-6 text-navy-foreground md:p-8">
              <Award className="size-6 text-teal" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold">Ongoing professional development</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">
                Graduate coursework in business analytics, combined with hands-on practice in
                statistical software, BI platforms, and results-tracking systems.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <li key={tool} className="rounded-md border border-white/15 px-2.5 py-1 text-xs">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
