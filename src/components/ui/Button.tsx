import React from "react";
import { cn } from "../../utils/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger";
  loading?: boolean;
};

export function Button({
  variant = "primary",
  loading = false,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",

        // Variants
        variant === "primary" &&
          "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600",
        variant === "secondary" &&
          "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-400",
        variant === "danger" &&
          "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600",

        // Disabled / Loading
        isDisabled && "opacity-50 cursor-not-allowed",

        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
