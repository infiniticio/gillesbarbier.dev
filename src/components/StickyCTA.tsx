import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface StickyCTAProps {
  className?: string;
  buttonText?: string;
  onClick?: () => void;
}

export function StickyCTA({ 
  className, 
  buttonText = "Book a 30-min Architecture Assessment",
  onClick 
}: StickyCTAProps) {
  return (
    <div className={cn(
      "fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-warm-gray-200 z-50",
      "transform transition-transform duration-300 ease-in-out",
      className
    )}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <p className="text-sm text-warm-gray-700 hidden sm:block">
          Ready to optimize your microservices architecture?
        </p>
        <Button 
          onClick={onClick}
          className="w-full sm:w-auto bg-electric-blue hover:bg-electric-blue-dark text-white font-medium shadow-md hover:shadow-lg transition-all duration-300"
          size="lg"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
