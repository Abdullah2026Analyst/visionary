import { BarChart3, Target, Workflow } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const pillars = [
  {
    icon: BarChart3,
    title: 'Analysis that answers questions',
    text: 'I start with the decision that needs to be made, then find, clean, and analyze the data that informs it.',
  },
  {
    icon: Target,
    title: 'Measurement that matters',
    text: 'I design KPIs and indicators that track real progress, and report them in a way teams can act on.',
  },
  {
    icon: Workflow,
    title: 'Processes that work better',
    text: 'I look for gaps in workflows and reporting routines, and help make them simpler and more reliable.',
  },
]

export function About() {
  return (
    <section aria-labelledby="about-title" id="about" className="bg-background pb-24 pt-28 md:pt-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <SectionHeading
              id="about-title"
              eyebrow="About me"
              title="A hands-on analyst who connects data to decisions."
            />
          </Reveal>
          <Reveal delay={100} className="space-y-5 text-pretty leading-relaxed text-muted-foreground">
            <p>
              For more than eleven years, I have worked at the intersection of data, operations, and
              program performance. My work has taken me from banking and health services to U.S.
              government programs, including the U.S. Department of State and the U.S. Embassy in
              Kabul.
            </p>
            <p>
              Across these roles, the common thread has been the same: gathering reliable data,
              turning it into clear reporting, and helping people understand what is working and what
              needs attention. Much of that experience is in monitoring & evaluation, where accurate
              indicators and honest reporting are essential.
            </p>
            <p>
              {"I've recently completed coursework for an M.S. in Business Analytics at Regent University, and I'm now focused on bringing that experience into broader business, data, reporting, and operations analyst roles."}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 100}>
              <div className="h-full rounded-2xl border bg-card p-6 transition-shadow hover:shadow-lg">
                <span className="mb-5 flex size-11 items-center justify-center rounded-xl bg-teal-soft text-teal">
                  <pillar.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-semibold text-navy">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
