// animations.js
export const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };
  
  export const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };
  
  export const hoverEffect = {
    hover: { scale: 1.2, rotate: 10, transition: { duration: 0.3 } },
  };
  
  export const sectionBackground = {
    hidden: { opacity: 0.5 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };
  
  export const buttonHover = {
    hover: { scale: 1.1, y: -5, transition: { type: "spring", stiffness: 300 } },
  };
  
  export const navbarVariants = {
    hidden: { y: -100 },
    visible: { y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  