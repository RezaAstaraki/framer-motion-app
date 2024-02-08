import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./base.scss";

export default function Base({ baseHandler }) {
  const items = ["Classic", "Thin & Crispy", "Thick Crust"];

  const [clicked, setClicked] = useState(null);

  const HandleLiClick = (item) => {
    baseHandler(item);
    setClicked(item);
  };

  const element = useRef(null);
  return (
    <div className="base">
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
      <div className="next">
        <Link to={"/topping"}>Next</Link>
      </div>
    </div>
  );
}
