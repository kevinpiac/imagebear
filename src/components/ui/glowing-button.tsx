import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Spinner } from "@/components/spinner";

const buttonVariants = cva(
  "relative antialiased inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-black text-white rounded-2xl",
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

const GlowingButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const Comp = asChild ? Slot : "button";
    return (
      <div
        className={"relative"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <div
          className={`absolute left-0 right-0 bottom-0 top-0 bg-gradient-to-r from-fuchsia-500 to-cyan-500 blur-lg ${isHovered ? "opacity-100" : "opacity-40"} transition-opacity rounded-full`}
        ></div>
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
          disabled={props.disabled || props.isLoading}
        >
          {props.isLoading && <Spinner></Spinner>}
          {props.children}
        </Comp>
      </div>
    );
  },
);
GlowingButton.displayName = "GlowingButton";

export { GlowingButton, buttonVariants };
