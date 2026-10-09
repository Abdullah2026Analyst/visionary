import { Download, FileText } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function ResumeCta() {
  return (
    <section aria-labelledby="resume-title" id="resume" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-teal-soft p-8 md:p-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-5">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white text-teal shadow-sm">
                  <FileText className="size-7" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Resume</p>
                  <h2 id="resume-title" className="mt-2 font-serif text-2xl font-semibold text-navy md:text-3xl">
                    Want the full picture?
                  </h2>
                  <p className="mt-2 max-w-lg text-pretty text-muted-foreground">
                    View a one-page summary of my experience, education, and skills, ready to save as
                    a PDF or print.
                  </p>
                </div>
              </div>
              <a
                href="/Abdullah_Qambari_Resume.pdf"
                download="Abdullah_Qambari_Resume.pdf"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-medium text-navy-foreground transition-opacity hover:opacity-90"
              >
                <Download className="size-4" aria-hidden="true" />
                Download resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
