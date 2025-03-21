import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
  threshold = 0.1,
  triggerOnce = false,
}) => {
  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
  });

  const getDirectionValues = () => {
    switch (direction) {
      case "up":
        return { y: 40, x: 0 };
      case "down":
        return { y: -40, x: 0 };
      case "left":
        return { y: 0, x: 40 };
      case "right":
        return { y: 0, x: -40 };
      default:
        return { y: 40, x: 0 };
    }
  };

  const { x, y } = getDirectionValues();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, x }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : y,
        x: inView ? 0 : x,
      }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
