import type { Variants } from "framer-motion"

// Fade up animation
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 60,
      damping: 15,
      duration: 0.8,
    },
  },
}

// Simple fade
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

// Fade from left
export const slideLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 70,
      damping: 18,
    },
  },
}

// Fade from right
export const slideRight: Variants = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 70,
      damping: 18,
    },
  },
}

// Stagger animation
export const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
}
