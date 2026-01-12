import { cn } from "../../lib/utils";
import { type HTMLMotionProps, motion } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={cn(
        "bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl shadow-sm p-6 overflow-hidden relative",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
