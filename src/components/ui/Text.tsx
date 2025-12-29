import React from "react";
import { cn } from "../../utils/cn";

type TextProps = React.HTMLAttributes<HTMLElement> & {
  as?: "p" | "span" | "h1" | "h2" | "h3";
  variant?: "heading" | "subheading" | "body" | "muted";
  size?: "sm" | "md" | "lg";
  weight?: "normal" | "medium" | "semibold" | "bold";
};

export function Text({
  as: Component = "p",
  variant = "body",
  size,
  weight,
  className,
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(
        // Variant styles
        variant === "heading" && "text-2xl font-semibold text-gray-900",
        variant === "subheading" && "text-lg font-medium text-gray-800",
        variant === "body" && "text-base text-gray-700",
        variant === "muted" && "text-sm text-gray-500",

        // Size overrides
        size === "sm" && "text-sm",
        size === "md" && "text-base",
        size === "lg" && "text-lg",

        // Weight overrides
        weight === "normal" && "font-normal",
        weight === "medium" && "font-medium",
        weight === "semibold" && "font-semibold",
        weight === "bold" && "font-bold",

        className
      )}
      {...props}
    />
  );
}
