import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Education } from '@/components/education'
import { ResumeCta } from '@/components/resume-cta'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <ResumeCta />
        <Contact />
      </main>
    </>
  )
}
