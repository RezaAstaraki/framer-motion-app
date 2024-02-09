import React, { useEffect } from "react";
import "./modal.scss";
import { motion, AnimatePresence } from "framer-motion";
import { buttonVariants } from "../../public/publicVariants";
import { Link } from "react-router-dom";

const modalVariants = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.7,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

export default function Modal({ showModal, setShowModal, setPizza }) {
  return (
    <AnimatePresence>
      {showModal && (
        <div className="modal">
          <motion.div
            className="massageBox"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h1>you made it successfully</h1>
            <Link to="/">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                onClick={() => {
                  setShowModal(false);
                  setPizza({ base: "", topping: [] });
                }}
              >
                try again
              </motion.button>
            </Link>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
