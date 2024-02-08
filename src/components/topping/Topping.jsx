import "./topping.scss";
import { Link } from "react-router-dom";

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
    <div className="topping">
      <h3>Step 1: Choose Topping</h3>
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
      <div className="order">
        <Link to={"/order"}>Order</Link>
      </div>
    </div>
  );
}
