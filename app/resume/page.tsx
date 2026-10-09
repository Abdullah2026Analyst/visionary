import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { PrintButton } from '@/components/print-button'
import {
  competencies,
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from '@/lib/portfolio-data'

export const metadata: Metadata = {
  title: 'Resume | Abdullah Qambari',
  description: 'Resume of Abdullah Qambari, business & data analytics and monitoring & evaluation professional.',
}

function ResumeSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-7 break-inside-avoid">
      <h2 className="border-b border-teal/40 pb-1 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  )
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-muted py-8 print:bg-white print:py-0">
      <div className="no-print mx-auto mb-6 flex max-w-3xl items-center justify-between px-5">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-teal">
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to portfolio
        </Link>
        <PrintButton />
      </div>

      <main className="mx-auto max-w-3xl bg-white p-8 shadow-sm md:p-12 print:max-w-none print:p-0 print:shadow-none">
        <header className="border-b pb-5">
          <h1 className="font-serif text-3xl font-semibold text-navy">{profile.name}</h1>
          <p className="mt-1 text-sm font-medium text-foreground">
            Business & Data Analytics | Monitoring & Evaluation
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {profile.location} · <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </header>

        <ResumeSection title="Summary">
          <p className="text-sm leading-relaxed text-foreground/85">
            Business and data analytics professional with over 11 years of experience in data
            analysis, business process improvement, performance measurement, KPI reporting, and
            monitoring & evaluation. Experienced in supporting U.S. government programs as well as
            health and financial services organizations. Seeking business, data, reporting,
            operations, or M&E analyst roles.
          </p>
        </ResumeSection>

        <ResumeSection title="Professional experience">
          <div className="space-y-4">
            {experience.map((job) => (
              <div key={job.organization} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-semibold text-navy">{job.organization}</h3>
                  <p className="text-xs text-muted-foreground">{job.context}</p>
                </div>
                <p className="text-sm italic text-foreground/75">{job.focus}</p>
                <ul className="mt-1.5 list-disc space-y-1 pl-5 text-sm text-foreground/85">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title="Education">
          <ul className="space-y-2 text-sm">
            {education.map((item) => (
              <li key={item.degree}>
                <span className="font-semibold text-navy">{item.degree}</span>
                {item.school && <span className="text-foreground/85">{`, ${item.school}`}</span>}
                {item.school && <span className="text-muted-foreground">{` (${item.note})`}</span>}
              </li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection title="Technical skills">
          <ul className="space-y-1 text-sm text-foreground/85">
            {skillGroups.map((group) => (
              <li key={group.title}>
                <span className="font-semibold text-navy">{group.title}: </span>
                {group.skills.join(', ')}
              </li>
            ))}
            <li>
              <span className="font-semibold text-navy">Competencies: </span>
              {competencies.join(', ')}
            </li>
          </ul>
        </ResumeSection>

        <ResumeSection title="Selected projects">
          <ul className="space-y-2 text-sm text-foreground/85">
            {projects.map((project) => (
              <li key={project.title}>
                <span className="font-semibold text-navy">{project.title}</span>
                {` (${project.category}): `}
                {project.description}
              </li>
            ))}
          </ul>
        </ResumeSection>
      </main>
    </div>
  )
}
