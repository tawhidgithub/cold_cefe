import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "fire" | "line";

const styles: Record<Variant, string> = {
  fire: "bg-ember text-coal shadow-[0_10px_40px_-10px_rgba(255,106,43,0.7)] hover:-translate-y-0.5 hover:bg-flame",
  line: "border-[1.5px] border-cream/30 text-cream hover:border-ember hover:text-ember",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

export function Button({ href, children, variant = "fire", className }: Props) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3.5 text-sm font-bold tracking-wide transition-all duration-300",
    styles[variant],
    className,
  );

  if (/^https?:/.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  if (/^(#|tel:|mailto:)/.test(href)) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
