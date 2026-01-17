import { Container } from "./Container"

type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
  actions?: React.ReactNode
}

export function PageHeader({ eyebrow, title, subtitle, actions }: Props) {
  return (
    <header className="bg-white">
      <Container className="py-10 md:py-14">
        {eyebrow ? (
          <div className="mb-2 text-sm uppercase tracking-wide text-neutral-500">
            {eyebrow}
          </div>
        ) : null}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-navy-950">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-3 max-w-3xl text-base sm:text-lg text-neutral-800">
            {subtitle}
          </p>
        ) : null}
        {actions ? <div className="mt-6">{actions}</div> : null}
      </Container>
    </header>
  )
}
