import { cn } from "~/lib/utils";
import { Container } from "./Container";

type Props = {
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  id?: string;
};

export function Section({
  className,
  containerClassName,
  children,
  id,
}: Props) {
  return (
    <section
      id={id}
      className={cn("py-12 sm:py-16 md:py-20 max-mobile:py-12", className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
