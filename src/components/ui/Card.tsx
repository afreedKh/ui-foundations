import React from "react";
import { Box } from "../layout/Box";
import { cn } from "../../utils/cn";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <Box
      padding="md"
      border="default"
      rounded="md"
      background="white"
      className={cn(className)}
      {...props}
    />
  );
}
