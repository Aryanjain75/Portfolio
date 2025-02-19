/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";
 
interface InteractiveHoverButtonProps{
  children: React.ReactNode;
  className?: string;
  href: string;
}
 
export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className,href, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-fit cursor-pointer overflow-hidden rounded-full border bg-background p-1.5 px-4 text-center  font-semibold hover:bg-[#00c4e8] hover:shadow-[0_0_35px_#00c4e8]",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <span className=" transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 flex flex-row gap-2">
          {children}
        </span>
      </div>
      <div className="absolute bg-[#00c4e8] top-0 z-10 h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100 flex flex-row">
        <a href={href} className="flex items-center gap-2">
        <span className="flex flex-row gap-2">{children}</span>
        <ArrowRight size={16} />
        </a>
        
      </div>
    </button>
  );
});
