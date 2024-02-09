export const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    // transition: {
    //   duration: 0.3,
    //   yoyo: Infinity,
    //     },
    transition: {
      duration: 0.3,
      repeatType: "mirror",
      repeat: Infinity,

      //   scale: { repeatType: "mirror", repeat: Infinity },
      //   textShadow: { repeatType: "mirror", repeat: Infinity },
      //   boxShadow: { repeatType: "reverse", repeat: Infinity },
      // "loop"| "mirror" | "reverse",
    },
  },
};

export const containerVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
