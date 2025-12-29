import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const boxVariants = cva("w-full", {
  variants: {
    padding: {
      none: "",
      sm: "p-2",
      md: "p-4",
      lg: "p-6",
    },
    border: {
      none: "",
      default: "border border-gray-200",
    },
    rounded: {
      none: "",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
    },
    background: {
      transparent: "bg-transparent",
      white: "bg-white",
      muted: "bg-gray-50",
    },
  },
  defaultVariants: {
    padding: "md",
    border: "none",
    rounded: "none",
    background: "transparent",
  },
});

type BoxProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof boxVariants>;

export function Box({ padding, border, rounded, background, className, ...props }: BoxProps) {
  return (
    <div
      className={ cn( boxVariants({ padding, border, rounded, background }),className )}
      {...props}
    />
  );
}
