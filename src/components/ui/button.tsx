import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Spinner } from "@/components/spinner";

const buttonVariants = cva(
  "antialiased inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        glowing:
          "bg-gray-900 text-white hover:bg-gray-950 focus-visible:ring-gray-900 border border-neutral-500 rounded-full",
        feature:
          "bg-gray-900 text-white hover:bg-gray-950 focus-visible:ring-gray-900 hover:shadow-2xl border border-neutral-500 rounded-full",
        rounded:
          "bg-[#151718] text-white hover:bg-gray-900 focus-visible:ring-gray-900 hover:shadow-2xl border border-neutral-500 rounded-full",
        default:
          "bg-[#151718] text-white hover:bg-gray-900 focus-visible:ring-gray-900 hover:shadow-2xl border border-neutral-500",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "p-3",
        sm: "p-2 px-3 text-sm",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        disabled={props.disabled || props.isLoading}
      >
        {props.isLoading && <Spinner></Spinner>}
        {props.children}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
