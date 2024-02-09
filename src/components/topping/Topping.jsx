import "./topping.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  buttonVariants,
  containerVariants,
} from "../../../public/publicVariants";

export default function Topping({ toppingHandler, pizzaTopping }) {
  const items = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];
  return (
    <motion.div
      className="topping"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>Step 2: Choose Topping</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span
              onClick={() => toppingHandler(item)}
              className={pizzaTopping.includes(item) ? "active" : ""}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
      <Link to={"/order"}>
        <motion.div
          className="order"
          variants={buttonVariants}
          whileHover="hover"
        >
          Order
        </motion.div>
      </Link>
    </motion.div>
  );
}
