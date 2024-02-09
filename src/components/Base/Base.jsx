import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./base.scss";

import {
  buttonVariants,
  containerVariants,
} from "../../../public/publicVariants";
import { motion } from "framer-motion";

export default function Base({ baseHandler }) {
  const items = ["Classic", "Thin & Crispy", "Thick Crust"];

  const [clicked, setClicked] = useState(null);

  const HandleLiClick = (item) => {
    baseHandler(item);
    setClicked(item);
  };

  const element = useRef(null);
  return (
    <motion.div
      className="base"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span
              onClick={() => HandleLiClick(item)}
              className={item === clicked ? "active" : ""}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
      <motion.div className="next" variants={buttonVariants} whileHover="hover">
        <Link to={"/topping"}>Next</Link>
      </motion.div>
    </motion.div>
  );
}
