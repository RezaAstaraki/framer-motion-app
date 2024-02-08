import "./App.scss";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Base from "./components/Base/Base";
import Topping from "./components/topping/Topping";
import Order from "./components/order/Order";

function App() {
  const [pizza, setPizza] = useState({ base: "", topping: [] });

  useEffect(() => {
    console.log("******state*******");
    console.log("pizza", pizza);
  }, [pizza]);

  const handleBass = (target) => {
    setPizza((prevPizza) => {
      const newPizza = { ...prevPizza, base: target };
      return newPizza;
    });
  };
  const handleTopping = (target) => {
    setPizza((prevPizza) => {
      let newTopping;
      if (prevPizza.topping.includes(target)) {
        newTopping = prevPizza.topping.filter((item) => item !== target);
      } else {
        newTopping = [...prevPizza.topping, target];
      }

      const newPizza = { ...prevPizza, topping: newTopping };
      return newPizza;
    });
  };

  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Base baseHandler={handleBass} />} path="base" />
        <Route
          element={
            <Topping
              toppingHandler={handleTopping}
              pizzaTopping={pizza.topping}
            />
          }
          path="topping"
        />
        <Route element={<Order pizza={pizza} />} path="order" />
      </Routes>
    </>
  );
}
export default App;
