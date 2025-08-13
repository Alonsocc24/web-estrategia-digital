import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description: string;
  className?: string;
}

export function SectionHeader({ title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 text-center", className)}>
      <h2 className="font-headline text-4xl font-bold text-primary sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/80">
          {description}
        </p>
      )}
    </div>
  );
}

