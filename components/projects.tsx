import { ArrowUpRight, Car, Home, FileSearch, type LucideIcon } from 'lucide-react'
import { projects } from '@/lib/portfolio-data'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const icons: LucideIcon[] = [Car, Home, FileSearch]

export function Projects() {
  return (
    <section aria-labelledby="projects-title" id="projects" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            id="projects-title"
            eyebrow="Featured projects"
            title="Applied analytics, built to be used."
            description="Interactive tools and research that put data analysis into the hands of real users."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const Icon = icons[i]
            const content = (
              <>
                <div className="flex items-start justify-between">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-teal-soft text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  {project.href && (
                    <ArrowUpRight
                      className="size-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-teal">
                  {project.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-navy">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag} className="rounded-md bg-muted px-2.5 py-1 text-xs text-navy">
                      {tag}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 border-t pt-4 text-sm font-medium text-navy">
                  {project.linkLabel}
                  {project.href && <span className="sr-only"> (opens in a new tab)</span>}
                </span>
              </>
            )
            const cardClass =
              'group flex h-full flex-col rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-xl'

            return (
              <Reveal key={project.title} delay={i * 100} className="h-full">
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClass}
                  >
                    {content}
                  </a>
                ) : (
                  <article className={cardClass}>{content}</article>
                )}
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
