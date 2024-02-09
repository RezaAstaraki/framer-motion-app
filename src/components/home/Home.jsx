import "./home.scss";
import { Link } from "react-router-dom";
import { motion, useCycle } from "framer-motion";
import { buttonVariants } from "../../../public/publicVariants";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30, 0],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeIn",
        duration: 0.5,
      },
      y: {
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeIn",
        duration: 0.5,
      },
    },
  },
  animationTow: {
    y: [0, -30, 0],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeIn",
        duration: 0.5,
      },
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

export default function Home() {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTow");
  return (
    <motion.div
      className="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Welcome to Pizza Joint</h2>

      <Link to="/base">
        <motion.button variants={buttonVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={animation}
      ></motion.div>
      <div className="cycleLoader" onClick={() => cycleAnimation()}>
        Cycle Loader
      </div>
    </motion.div>
  );
}
