import { cn } from "~/lib/utils"

type Props = {
  as?: keyof JSX.IntrinsicElements
  className?: string
  children: React.ReactNode
}

export function Container({ as = "div", className, children }: Props) {
  const Comp = as as any
  return (
    <Comp
      className={cn(
        // Consistent spacing across all screen sizes
        "mx-auto w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20",
        // Progressive max-widths to maintain consistent visual proportions
        "max-w-none sm:max-w-none md:max-w-none lg:max-w-none xl:max-w-[95vw] 2xl:max-w-[90vw] 3xl:max-w-[85vw]",
        className
      )}
    >
      {children}
    </Comp>
  )
}
