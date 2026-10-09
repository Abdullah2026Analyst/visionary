import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  invert = false,
}: {
  eyebrow: string
  title: string
  description?: string
  id: string
  invert?: boolean
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
        <span className="h-px w-8 bg-teal" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          'text-balance font-serif text-3xl font-semibold md:text-4xl',
          invert ? 'text-navy-foreground' : 'text-navy',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-pretty leading-relaxed',
            invert ? 'text-navy-foreground/70' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
