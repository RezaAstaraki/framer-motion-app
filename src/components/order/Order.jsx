import { useEffect } from "react";
import "./order.scss";

export default function Order({ pizza }) {
  console.log("first", pizza.topping);

  return (
    <div className="order">
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.topping.map((item) => {
        return <div>{item}</div>;
      })}
    </div>
  );
}
