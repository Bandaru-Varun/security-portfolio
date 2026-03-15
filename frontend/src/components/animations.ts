// Fade up animation
export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 15,
      duration: 0.8
    }
  }
}


// Simple fade
export const fadeIn = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}


// Fade from left
export const slideLeft = {
  hidden: {
    opacity: 0,
    x: -80
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 18
    }
  }
}


// Fade from right
export const slideRight = {
  hidden: {
    opacity: 0,
    x: 80
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 18
    }
  }
}


// Stagger animation for lists/cards
export const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18
    }
  }
}
