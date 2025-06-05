import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
  variant?: 'default' | 'gradient' | 'dotted';
}

export function SectionDivider({ 
  className,
  variant = 'default' 
}: SectionDividerProps) {
  const baseClasses = "w-full my-16 md:my-20 lg:my-24";
  
  const variants = {
    default: "h-px bg-gradient-to-r from-transparent via-warm-gray-200 to-transparent",
    gradient: "h-0.5 bg-gradient-to-r from-transparent via-electric-blue/50 to-transparent",
    dotted: "h-px bg-transparent bg-[length:16px_1px] bg-repeat-x bg-dots-warm-gray-300"
  };

  return (
    <div 
      className={cn(
        baseClasses,
        variants[variant],
        className
      )} 
      aria-hidden="true"
    />
  );
}
