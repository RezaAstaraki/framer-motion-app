import { useEffect } from "react";
import "./order.scss";

export default function Order({ pizza, setShowModal }) {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 4000);
  }, []);

  return (
    <div className="order">
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {<span>pizza.base</span>} pizza with:</p>
      {pizza.topping.map((item, index) => {
        return (
          <div className="toppingItems" key={index}>
            {item}
          </div>
        );
      })}
    </div>
  );
}
