import "./App.scss";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Base from "./components/Base/Base";
import Topping from "./components/topping/Topping";
import Order from "./components/order/Order";
import Modal from "./modal/Modal";

function App() {
  const location = useLocation();
  const [pizza, setPizza] = useState({ base: "", topping: [] });
  const [showModal, setShowModal] = useState(false);

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
      <Modal
        setShowModal={setShowModal}
        showModal={showModal}
        setPizza={setPizza}
      />
      <AnimatePresence mode="wait" onExitComplete={() => setShowModal(false)}>
        <Routes location={location} key={location.key}>
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
          <Route
            element={<Order pizza={pizza} setShowModal={setShowModal} />}
            path="order"
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}
export default App;
