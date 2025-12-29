import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const stackVariants = cva("flex", {
  variants: {
    direction: {
      vertical: "flex-col",
      horizontal: "flex-row",
    },
    gap: {
      xs: "gap-1",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
    },
  },
  defaultVariants: {
    direction: "vertical",
    gap: "md",
    align: "stretch",
  },
});

type StackProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof stackVariants>;

export function Stack({
  direction,
  gap,
  align,
  className,
  ...props
}: StackProps) {
  return (
    <div
      className={cn(
        stackVariants({ direction, gap, align }),
        className
      )}
      {...props}
    />
  );
}
