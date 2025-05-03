import * as React from "react";
import { cn } from "@/lib/utils"; // utility for merging classNames

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          "relative w-full rounded-lg border border-border bg-background p-4 text-sm",
          className
        )}
        {...props}
      />
    );
  }
);
Alert.displayName = "Alert";

export interface AlertDescriptionProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const AlertDescription = React.forwardRef<
  HTMLDivElement,
  AlertDescriptionProps
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("text-muted-foreground [&_p]:leading-relaxed", className)}
      {...props}
    />
  );
});
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertDescription };
