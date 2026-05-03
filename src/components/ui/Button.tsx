import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

import { Loader2 } from "lucide-react"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, isLoading, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Base styles
    let baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 cursor-pointer"
    
    // Variant styles
    let variantStyles = ""
    if (variant === "default") variantStyles = "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
    else if (variant === "outline") variantStyles = "border border-primary/20 bg-transparent hover:bg-primary/5 hover:border-primary/50 text-foreground hover:-translate-y-0.5"
    else if (variant === "secondary") variantStyles = "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-md hover:-translate-y-0.5"
    else if (variant === "ghost") variantStyles = "hover:bg-accent hover:text-accent-foreground hover:scale-105"
    else if (variant === "link") variantStyles = "text-primary underline-offset-4 hover:underline"

    // Size styles
    let sizeStyles = ""
    if (size === "default") sizeStyles = "h-10 px-4 py-2"
    else if (size === "sm") sizeStyles = "h-9 rounded-md px-3"
    else if (size === "lg") sizeStyles = "h-11 rounded-md px-8"
    else if (size === "icon") sizeStyles = "h-10 w-10"

    if (asChild) {
      return (
        <Comp
          className={cn(baseStyles, variantStyles, sizeStyles, className)}
          ref={ref}
          {...props}
        >
          {children}
        </Comp>
      )
    }

    return (
      <Comp
        className={cn(baseStyles, variantStyles, sizeStyles, className)}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button }
